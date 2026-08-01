"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { 
  FileText, 
  Plus, 
  LogOut, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Send, 
  Trash2, 
  Download, 
  UploadCloud, 
  User, 
  FileCheck,
  Search,
  ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface Document {
  id: string;
  name: string;
  recipient: string;
  status: "Completed" | "Pending" | "Draft";
  date: string;
  size: string;
}

const DEFAULT_DOCUMENTS: Document[] = [
  {
    id: "doc-1",
    name: "Independent_Contractor_Agreement.pdf",
    recipient: "client@acme-corp.com",
    status: "Completed",
    date: "2026-05-28",
    size: "245 KB",
  },
  {
    id: "doc-2",
    name: "NDS_Agreement_Signify.pdf",
    recipient: "partner@techstart.io",
    status: "Pending",
    date: "2026-05-29",
    size: "182 KB",
  },
  {
    id: "doc-3",
    name: "Offer_Letter_Marketing_Manager.pdf",
    recipient: "candidate@gmail.com",
    status: "Draft",
    date: "2026-05-30",
    size: "310 KB",
  },
];

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<{ email: string; name: string } | null>(null);
  const [documents, setDocuments] = useState<Document[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Modal / New doc state
  const [newDocName, setNewDocName] = useState("");
  const [newRecipient, setNewRecipient] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    // Auth Check
    const session = localStorage.getItem("signify_session");
    if (!session) {
      router.push("/login");
      return;
    }
    setUser(JSON.parse(session));

    // Load Documents
    const storedDocs = localStorage.getItem("signify_documents");
    if (storedDocs) {
      setDocuments(JSON.parse(storedDocs));
    } else {
      localStorage.setItem("signify_documents", JSON.stringify(DEFAULT_DOCUMENTS));
      setDocuments(DEFAULT_DOCUMENTS);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("signify_session");
    router.push("/");
  };

  const handleDeleteDoc = (id: string) => {
    const updated = documents.filter((doc) => doc.id !== id);
    setDocuments(updated);
    localStorage.setItem("signify_documents", JSON.stringify(updated));
  };

  const handleCreateDocument = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDocName || !newRecipient) return;

    setIsUploading(true);
    let progress = 0;
    const interval = setInterval(() => {
      progress += 25;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        
        const newDoc: Document = {
          id: `doc-${Date.now()}`,
          name: newDocName.endsWith(".pdf") ? newDocName : `${newDocName}.pdf`,
          recipient: newRecipient,
          status: "Pending",
          date: new Date().toISOString().split("T")[0],
          size: "154 KB",
        };

        const updated = [newDoc, ...documents];
        setDocuments(updated);
        localStorage.setItem("signify_documents", JSON.stringify(updated));

        // Reset
        setIsUploading(false);
        setUploadProgress(0);
        setNewDocName("");
        setNewRecipient("");
        setIsModalOpen(false);
      }
    }, 300);
  };

  const filteredDocs = documents.filter((doc) =>
    doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.recipient.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#4bb5b9]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans">
      {/* Dashboard Navbar */}
      <header className="sticky top-0 z-40 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between px-6 max-w-7xl mx-auto">
          <div className="flex items-center gap-6">
            <Link href="/" className="font-[cursive] text-2xl tracking-wide text-[#4bb5b9]">
              SignWell
            </Link>
            <span className="bg-blue-50 text-blue-700 text-xs px-2.5 py-1 rounded-full font-semibold border border-blue-100">
              Demo Environment
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-full border border-gray-100">
              <div className="w-6 h-6 rounded-full bg-[#4bb5b9] text-white flex items-center justify-center text-xs font-bold">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <div className="text-xs font-semibold text-gray-700 hidden sm:block">
                {user.name}
              </div>
            </div>

            <Button 
              variant="ghost" 
              size="sm" 
              onClick={handleLogout}
              className="text-gray-500 hover:text-red-600 gap-1.5"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Sign Out</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 container py-8 px-6 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[#333333]">My Documents</h1>
            <p className="text-gray-500 mt-1">Manage and track your electronic signature workflows.</p>
          </div>

          <Button 
            onClick={() => setIsModalOpen(true)}
            className="bg-[#0062ff] hover:bg-[#0052d4] text-white font-bold h-11 px-6 rounded shadow-sm gap-2"
          >
            <Plus className="w-5 h-5" /> Send Document
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <Card className="bg-white border-gray-100 shadow-sm">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Completed</p>
                <h3 className="text-3xl font-bold text-gray-900 mt-1">
                  {documents.filter((d) => d.status === "Completed").length}
                </h3>
              </div>
              <div className="p-3 bg-green-50 rounded-full">
                <FileCheck className="w-6 h-6 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-100 shadow-sm">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Waiting on Others</p>
                <h3 className="text-3xl font-bold text-gray-900 mt-1">
                  {documents.filter((d) => d.status === "Pending").length}
                </h3>
              </div>
              <div className="p-3 bg-amber-50 rounded-full">
                <Clock className="w-6 h-6 text-amber-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-100 shadow-sm">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Drafts</p>
                <h3 className="text-3xl font-bold text-gray-900 mt-1">
                  {documents.filter((d) => d.status === "Draft").length}
                </h3>
              </div>
              <div className="p-3 bg-gray-50 rounded-full">
                <FileText className="w-6 h-6 text-gray-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm flex flex-col sm:flex-row gap-4 justify-between items-center mb-6">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4.5 h-4.5" />
            <Input 
              type="text" 
              placeholder="Search document name or recipient..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 h-10 border-gray-200 focus-visible:ring-[#4bb5b9] rounded-sm w-full placeholder:text-gray-400"
            />
          </div>
          <div className="text-sm text-gray-500 font-medium">
            Showing {filteredDocs.length} of {documents.length} documents
          </div>
        </div>

        {/* Document List Table */}
        <div className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden">
          {filteredDocs.length === 0 ? (
            <div className="py-16 text-center">
              <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-700">No documents found</h3>
              <p className="text-gray-400 max-w-sm mx-auto mt-1">
                Try searching for a different term or upload a new contract to sign.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    <th className="py-4 px-6">Document Name</th>
                    <th className="py-4 px-6">Recipient</th>
                    <th className="py-4 px-6">Date Modified</th>
                    <th className="py-4 px-6">Status</th>
                    <th className="py-4 px-6 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredDocs.map((doc) => (
                    <tr key={doc.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-blue-50 text-blue-600 rounded">
                            <FileText className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="font-semibold text-gray-800 block text-[15px]">
                              {doc.name}
                            </span>
                            <span className="text-xs text-gray-400 font-medium">{doc.size}</span>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-[15px] font-medium text-gray-600">
                        {doc.recipient}
                      </td>
                      <td className="py-4 px-6 text-[15px] text-gray-500">
                        {doc.date}
                      </td>
                      <td className="py-4 px-6">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                          doc.status === "Completed" 
                            ? "bg-green-50 text-green-700 border border-green-100" 
                            : doc.status === "Pending"
                            ? "bg-amber-50 text-amber-700 border border-amber-100"
                            : "bg-gray-100 text-gray-700 border border-gray-200"
                        }`}>
                          {doc.status === "Completed" && <CheckCircle2 className="w-3.5 h-3.5" />}
                          {doc.status === "Pending" && <Clock className="w-3.5 h-3.5" />}
                          {doc.status === "Draft" && <AlertCircle className="w-3.5 h-3.5" />}
                          {doc.status}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Button
                            variant="ghost"
                            size="xs"
                            title="Download Signed Document"
                            onClick={() => alert(`Simulated downloading: ${doc.name}`)}
                            className="p-2 text-gray-500 hover:text-blue-600 hover:bg-gray-100"
                          >
                            <Download className="w-4.5 h-4.5" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="xs"
                            title="Delete Document"
                            onClick={() => handleDeleteDoc(doc.id)}
                            className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50"
                          >
                            <Trash2 className="w-4.5 h-4.5" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      {/* Upload/Send Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
          <div className="bg-white rounded-lg border border-gray-100 shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            <CardHeader className="border-b border-gray-100 p-6">
              <CardTitle className="text-xl font-bold text-gray-900">Send Document for eSignature</CardTitle>
              <CardDescription>Upload a document and select who needs to sign it.</CardDescription>
            </CardHeader>
            <form onSubmit={handleCreateDocument}>
              <CardContent className="p-6 space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Document Name
                  </label>
                  <Input 
                    type="text" 
                    placeholder="e.g. Sales_Contract_May_2026" 
                    required
                    value={newDocName}
                    onChange={(e) => setNewDocName(e.target.value)}
                    className="h-11 border-gray-300 focus-visible:ring-[#4bb5b9] rounded-sm placeholder:text-gray-400"
                    disabled={isUploading}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Recipient Email
                  </label>
                  <Input 
                    type="email" 
                    placeholder="client@example.com" 
                    required
                    value={newRecipient}
                    onChange={(e) => setNewRecipient(e.target.value)}
                    className="h-11 border-gray-300 focus-visible:ring-[#4bb5b9] rounded-sm placeholder:text-gray-400"
                    disabled={isUploading}
                  />
                </div>

                <div className="border border-dashed border-gray-300 rounded-lg p-6 text-center bg-gray-50 flex flex-col items-center">
                  <UploadCloud className="w-10 h-10 text-gray-400 mb-2" />
                  <p className="text-sm font-medium text-gray-700">Simulate file attachment</p>
                  <p className="text-xs text-gray-400 mt-1">Accepts PDF, DOCX, PNG up to 10MB</p>
                </div>

                {isUploading && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-semibold text-gray-600">
                      <span>Uploading document...</span>
                      <span>{uploadProgress}%</span>
                    </div>
                    <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-[#4bb5b9] h-full transition-all duration-300" style={{ width: `${uploadProgress}%` }}></div>
                    </div>
                  </div>
                )}
              </CardContent>
              <div className="bg-gray-50 px-6 py-4 flex justify-end gap-3 border-t border-gray-100">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setIsModalOpen(false)}
                  disabled={isUploading}
                  className="font-semibold border-gray-300 hover:bg-gray-100 h-10 px-5 rounded"
                >
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  disabled={isUploading || !newDocName || !newRecipient}
                  className="bg-[#0062ff] hover:bg-[#0052d4] text-white font-bold h-10 px-6 rounded"
                >
                  {isUploading ? "Uploading..." : "Send Request"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
