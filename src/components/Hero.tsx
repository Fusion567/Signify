"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 lg:pt-32 lg:pb-36 bg-[#0062ff]">
      <div className="container relative z-10 mx-auto px-4 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-[800px]"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            Make it so easy to sign your documents that it cuts turnaround time in half.
          </h1>
          <p className="text-lg md:text-[22px] leading-relaxed text-white/90 mb-10 max-w-3xl mx-auto font-medium">
            Simplify the document signing process and spend less time chasing signatures with SignWell’s legally-binding eSignature solution.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mx-auto mb-10">
            <Link href="/sign_up" className="w-full sm:w-auto inline-flex h-14 items-center justify-center rounded px-8 text-lg font-bold bg-white text-[#333333] hover:bg-gray-100 shadow-md transition-colors">
              Sign up with Google to start
            </Link>
            <Link href="/sign_up" className="text-white font-semibold text-[15px] underline hover:no-underline transition-colors">
              Sign up with a password instead
            </Link>
          </div>
          
          <div className="text-[15px] font-bold tracking-[2px] uppercase text-white/90 mt-8 flex flex-col items-center justify-center">
            <div className="flex gap-1 mb-2 text-[#ffd700]">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              ))}
            </div>
            Trusted by more than 65,000 businesses
          </div>
        </motion.div>
      </div>
      
      {/* Wave divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100" viewBox="0 0 1440 215" fill="#ffffff" preserveAspectRatio="none">
          <path d="M0 56.1773C0 54.4405 1.01548 52.9384 2.6785 52.4373C31.9021 43.6312 298.576 -31.7308 720 15.3702C1167.08 65.3392 1440 53.2629 1440 53.2629V215H720H0V56.1773Z" fill="#ffffff"></path>
        </svg>
      </div>
    </section>
  );
}

