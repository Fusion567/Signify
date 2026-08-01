"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-[72px] items-center justify-between px-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            {/* Using a placeholder svg for the logo for now, or just text */}
            <span className="font-bold text-2xl tracking-tight text-[#333333]">SignWell</span>
          </Link>
          <nav className="hidden lg:flex gap-6 ml-6">
            <Link href="#industries" className="text-[15px] font-semibold text-[#333333] hover:text-primary transition-colors">Industries</Link>
            <Link href="#api" className="text-[15px] font-semibold text-[#333333] hover:text-primary transition-colors">API</Link>
            <Link href="#security" className="text-[15px] font-semibold text-[#333333] hover:text-primary transition-colors">Security</Link>
            <Link href="#pricing" className="text-[15px] font-semibold text-[#333333] hover:text-primary transition-colors">Pricing</Link>
            <Link href="#about" className="text-[15px] font-semibold text-[#333333] hover:text-primary transition-colors">About</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-[15px] font-semibold text-[#333333] hover:text-[#0062ff] transition-colors">Log In</Link>
          <Link href="/sign_up" className="inline-flex h-10 items-center justify-center rounded px-6 text-[15px] font-bold bg-[#0062ff] text-white hover:bg-[#0052d4] transition-colors">
            Sign Up Free
          </Link>
        </div>
      </div>
    </header>
  );
}

