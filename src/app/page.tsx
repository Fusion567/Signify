import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { DemoFlow } from "@/components/DemoFlow";
import { Testimonials } from "@/components/Testimonials";
import { ComparisonTable } from "@/components/ComparisonTable";
import { FounderMessage } from "@/components/FounderMessage";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeaturesGrid />
        <DemoFlow />
        <Testimonials />
        <ComparisonTable />
        <FounderMessage />
      </main>
      <Footer />
    </>
  );
}
