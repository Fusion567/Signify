"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PenTool, Workflow, FileText, FileSearch, Plug, LifeBuoy } from "lucide-react";

const features = [
  {
    title: "Document Signing",
    description: "Make it easy for recipients to securely sign documents with a solution that’s compliant with U.S. and international eSignature laws. Ditch your printer, scanner, and even your important documents folder — signed documents are archived and protected from further changes, so you can rest easy knowing your documents are secure.",
    icon: <PenTool className="h-6 w-6 text-primary" />,
  },
  {
    title: "Document Workflows",
    description: "Quickly track outstanding signatures and completed documents. Choose who needs to sign, in what order, and keep the process moving with automatic notifications. You’ll always know who needs to complete a document and all recipients will get a copy of the completed document when it’s finalized.",
    icon: <Workflow className="h-6 w-6 text-primary" />,
  },
  {
    title: "Custom Templates",
    description: "Turn any document into a template you can quickly access and send to anyone, from anywhere (even from your phone). Recipients will receive a fully guided experience walking them through each step. There’s no hand-holding needed from you.",
    icon: <FileText className="h-6 w-6 text-primary" />,
  },
  {
    title: "Audit Reports",
    description: "Track the history of your documents with detailed audit reports. Know when each document has been opened and signed with time stamps and full visibility into document activity with a solution that exceeds US and international eSignature law requirements.",
    icon: <FileSearch className="h-6 w-6 text-primary" />,
  },
  {
    title: "Easy Integration",
    description: "SignWell works seamlessly with 5,000+ of your favorite apps, including Gmail, Dropbox, and Slack. Keep documents in your workflow without needing to switch between different applications.",
    icon: <Plug className="h-6 w-6 text-primary" />,
  },
  {
    title: "Responsive Customer Support",
    description: "Receive the support you need when you need it most. SignWell’s customer success team is here to support you via email, phone, or a quick Zoom call. Our support is included free of charge in every plan.",
    icon: <LifeBuoy className="h-6 w-6 text-primary" />,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function FeaturesGrid() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-[28px] font-bold text-[#333333] tracking-[2px] uppercase mb-10">
            Draft it. Send it. Sign it.
          </h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, i) => (
            <motion.div key={i} variants={item}>
              <Card className="h-full border-none shadow-none bg-transparent rounded-none">
                <CardHeader className="px-0 pt-0">
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded bg-blue-50">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-[#333] mb-1">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-0">
                  <CardDescription className="text-[15px] leading-relaxed text-[#666]">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        <div className="mt-16 text-center">
          <a className="inline-flex items-center justify-center h-14 rounded px-10 text-lg font-bold bg-[#0062ff] text-white hover:bg-[#0055e6] shadow transition-colors cursor-pointer" href="/sign_up/">Start for free</a>
        </div>
      </div>
    </section>
  );
}

