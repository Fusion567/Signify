"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { UploadCloud, FileText, Send, CheckCircle2 } from "lucide-react";

export function DemoFlow() {
  const [step, setStep] = useState(1);
  const [fileName, setFileName] = useState("");
  const [recipient, setRecipient] = useState("");

  const nextStep = () => setStep((s) => Math.min(s + 1, 4));
  const reset = () => {
    setStep(1);
    setFileName("");
    setRecipient("");
  };

  return (
    <section className="py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Try it yourself
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience how easy it is to send a document for signature with Signify.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="flex justify-between items-center mb-8 px-4 relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-muted -z-10" />
            <div className={`absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-primary -z-10 transition-all duration-500`} style={{ width: `${((step - 1) / 3) * 100}%` }} />
            
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-300 ${s <= step ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                {s}
              </div>
            ))}
          </div>

          <Card className="border-border shadow-lg overflow-hidden bg-background">
            <CardContent className="p-0 min-h-[400px] flex flex-col relative">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="p-10 flex-1 flex flex-col items-center justify-center text-center"
                  >
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                      <UploadCloud className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Upload your document</h3>
                    <p className="text-muted-foreground mb-8">Drag and drop a PDF, or click to browse</p>
                    <Button 
                      size="lg" 
                      onClick={() => {
                        setFileName("contract-agreement.pdf");
                        nextStep();
                      }}
                    >
                      Select Document
                    </Button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="p-10 flex-1 flex flex-col"
                  >
                    <h3 className="text-2xl font-bold mb-6">Add recipients</h3>
                    <div className="flex items-center gap-4 mb-8 p-4 bg-muted/50 rounded-lg border border-border">
                      <FileText className="w-8 h-8 text-primary" />
                      <div>
                        <p className="font-medium">{fileName}</p>
                        <p className="text-xs text-muted-foreground">1 page • 245 KB</p>
                      </div>
                    </div>
                    <div className="space-y-4 max-w-md">
                      <div>
                        <label className="text-sm font-medium mb-1 block">Recipient Email</label>
                        <Input 
                          placeholder="client@example.com" 
                          value={recipient}
                          onChange={(e) => setRecipient(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="mt-auto pt-8 flex justify-end">
                      <Button 
                        size="lg" 
                        disabled={!recipient}
                        onClick={nextStep}
                      >
                        Continue
                      </Button>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="p-10 flex-1 flex flex-col"
                  >
                    <h3 className="text-2xl font-bold mb-6">Place signature fields</h3>
                    <div className="flex-1 bg-muted/30 border border-dashed border-border rounded-lg flex items-center justify-center relative overflow-hidden">
                      <div className="w-[300px] h-[400px] bg-background shadow-sm border border-border p-8 flex flex-col">
                        <div className="w-1/2 h-4 bg-muted mb-4 rounded" />
                        <div className="w-full h-2 bg-muted mb-2 rounded" />
                        <div className="w-full h-2 bg-muted mb-2 rounded" />
                        <div className="w-3/4 h-2 bg-muted mb-8 rounded" />
                        <div className="mt-auto border-b border-primary/50 w-40 relative group cursor-pointer hover:bg-primary/5 transition-colors h-10 flex items-end pb-1 px-2">
                          <span className="text-xs text-primary/70 font-medium">Signature Area</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-8 flex justify-between items-center">
                      <p className="text-sm text-muted-foreground">Click 'Send' to dispatch to {recipient}</p>
                      <Button size="lg" onClick={nextStep} className="gap-2">
                        <Send className="w-4 h-4" /> Send Document
                      </Button>
                    </div>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-10 flex-1 flex flex-col items-center justify-center text-center"
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.2 }}
                      className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mb-6"
                    >
                      <CheckCircle2 className="w-12 h-12 text-green-500" />
                    </motion.div>
                    <h3 className="text-3xl font-bold mb-2">Document Sent!</h3>
                    <p className="text-muted-foreground mb-8">
                      {recipient} will receive an email shortly to sign the document.
                    </p>
                    <Button variant="outline" onClick={reset}>
                      Send another document
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
