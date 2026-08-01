import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white border-t border-[#e0e0e0] py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <span className="font-bold text-2xl tracking-tight text-[#333333]">SignWell</span>
            </Link>
            <p className="text-[#666666] text-[15px] leading-relaxed max-w-xs mb-6">
              The easiest way to get your documents signed. Fast, secure, and legally binding.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-[#333333] mb-4">Product</h4>
            <ul className="space-y-3 text-[15px] text-[#666666]">
              <li><Link href="#" className="hover:text-[#0062ff] transition-colors">Features</Link></li>
              <li><Link href="#" className="hover:text-[#0062ff] transition-colors">Pricing</Link></li>
              <li><Link href="#" className="hover:text-[#0062ff] transition-colors">Templates</Link></li>
              <li><Link href="#" className="hover:text-[#0062ff] transition-colors">Integrations</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-[#333333] mb-4">Resources</h4>
            <ul className="space-y-3 text-[15px] text-[#666666]">
              <li><Link href="#" className="hover:text-[#0062ff] transition-colors">Help Center</Link></li>
              <li><Link href="#" className="hover:text-[#0062ff] transition-colors">API Documentation</Link></li>
              <li><Link href="#" className="hover:text-[#0062ff] transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-[#0062ff] transition-colors">E-signature Guide</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-[#333333] mb-4">Company</h4>
            <ul className="space-y-3 text-[15px] text-[#666666]">
              <li><Link href="#" className="hover:text-[#0062ff] transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-[#0062ff] transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-[#0062ff] transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-[#0062ff] transition-colors">Partners</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#e0e0e0] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-[#888888]">
          <p>© {new Date().getFullYear()} SignWell. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="#" className="hover:text-[#333] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#333] transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-[#333] transition-colors">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

