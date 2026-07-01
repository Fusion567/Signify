import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Electronic Signature Software - SignWell",
  description: "Get your documents signed 40% faster with zero-setup electronic signatures. SignWell helps you cut turnaround time and makes it easy for everyone to electronically sign your documents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://use.typekit.net" crossOrigin="anonymous" />
        <link rel="preload" href="https://use.typekit.net/qpg6mlr.css" as="style" />
        <link rel="stylesheet" href="https://use.typekit.net/qpg6mlr.css" />
      </head>
      <body className="min-h-full flex flex-col bg-white text-[#333333] font-sans">
        {children}
      </body>
    </html>
  );
}

