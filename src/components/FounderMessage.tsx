"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function FounderMessage() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <div className="mb-8">
          <Avatar className="w-24 h-24 mx-auto mb-6 ring-4 ring-primary/10">
            <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Founder" />
            <AvatarFallback>JN</AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-bold mb-2">A message from our founder</h2>
          <p className="text-primary font-medium text-sm tracking-wide uppercase">John Doe, CEO</p>
        </div>
        
        <div className="prose prose-lg dark:prose-invert mx-auto text-muted-foreground text-left md:text-center space-y-6">
          <p>
            When we started Signify, we were frustrated with the existing electronic signature tools. They were clunky, expensive, and difficult to use. We believed that getting a document signed shouldn't require a training manual.
          </p>
          <p>
            We built Signify to be the tool we wanted to use ourselves: fast, secure, and beautiful. Today, thousands of businesses rely on us to power their agreements, and we're just getting started.
          </p>
          <p>
            Give us a try. I think you'll love how easy it is.
          </p>
        </div>
        
        <div className="mt-10">
          <img src="/signature.svg" alt="Founder Signature" className="h-16 mx-auto opacity-80 dark:invert" onError={(e) => { e.currentTarget.style.display = 'none' }} />
          {/* Fallback if no signature image */}
          <div className="font-[cursive] text-3xl text-foreground mt-2 inline-block italic">John Doe</div>
        </div>
      </div>
    </section>
  );
}
