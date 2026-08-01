"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const testimonials = [
  {
    quote: "My clients used to have to print, sign, scan, and send my contracts back. This was not only cumbersome, but it didn’t make a very professional impression. SignWell provided a simple, affordable, and professional-looking way for me to get contracts signed quickly. Plus, it’s is easier to use and more elegant than DocuSign. I love it.",
    author: "Rose Lounsbury",
    role: "Coach and Professional Speaker"
  },
  {
    quote: "I wish SignWell had existed sooner! We have tried several solutions over the years to collect fulfillment data from clients. Most things we found are too clunky. With SignWell I was able to set up our template so that it’s easy to fill out. We send it to clients, they fill it out, and we get notified when they finish. Everything we want and need in one solution.",
    author: "Cari Adamek",
    role: "eFocus"
  },
  {
    quote: "SignWell has saved me so much time. I’m able to easily send contracts to clients and contractors much more quickly than I used to.",
    author: "Carolina Miranda",
    role: "Cultivating Capital"
  },
  {
    quote: "My business has relied on SignWell to close deals for years and it always delivers. It’s an elegant and reliable eSignature tool that does exactly what I need it to. The last thing you want with sales software is for it to introduce friction and cost you a deal. Not only have I not gotten any questions or complaints about SignWell, I’ve actually had customers ask me which tool I’m using so they can adopt it themselves for their own sales process.",
    author: "Harris Kenny",
    role: "Intro CRM"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-[#fcfcfd] overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          {/* Signwell doesn't have a huge heading here usually, but let's keep it simple */}
        </div>

        <div className="mx-auto relative px-12 lg:px-20">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 xl:basis-1/3 pl-6">
                  <div className="p-1 h-full">
                    <Card className="h-full border-none shadow-sm rounded-lg bg-white overflow-hidden hover:shadow-md transition-shadow">
                      <CardContent className="flex flex-col p-8 h-full">
                        <p className="text-[15px] leading-[1.6] text-[#333] mb-6 flex-grow">
                          {testimonial.quote}
                        </p>
                        
                        <div className="flex gap-1 text-[#ffd700] mb-4">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg key={star} className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                        </div>

                        <div>
                          <p className="font-bold text-[15px] text-[#333]">{testimonial.author}</p>
                          <p className="text-[13px] text-[#666] uppercase tracking-wide font-semibold mt-1">— {testimonial.role}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-6 lg:-left-12 h-12 w-12 bg-white border border-gray-200 text-[#333] hover:bg-gray-50 shadow-sm" />
            <CarouselNext className="hidden md:flex -right-6 lg:-right-12 h-12 w-12 bg-white border border-gray-200 text-[#333] hover:bg-gray-50 shadow-sm" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

