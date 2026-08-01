"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, X } from "lucide-react";

const features = [
  { name: "Unlimited Documents", us: true, competitorA: false, competitorB: false },
  { name: "Custom Branding", us: true, competitorA: true, competitorB: false },
  { name: "Reusable Templates", us: true, competitorA: true, competitorB: true },
  { name: "Audit Reports", us: true, competitorA: true, competitorB: true },
  { name: "API Access", us: true, competitorA: false, competitorB: false },
  { name: "24/7 Support", us: true, competitorA: false, competitorB: false },
];

export function ComparisonTable() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            See how we compare
          </h2>
          <p className="text-lg text-muted-foreground">
            More features, better pricing, designed for modern teams.
          </p>
        </div>

        <div className="bg-background rounded-2xl shadow-sm border border-border overflow-hidden">
          <Table>
            <TableHeader className="bg-muted/50">
              <TableRow>
                <TableHead className="w-[40%] font-semibold text-foreground py-4">Features</TableHead>
                <TableHead className="w-[20%] text-center py-4">
                  <span className="font-bold text-primary text-lg">Signify</span>
                </TableHead>
                <TableHead className="w-[20%] text-center text-muted-foreground font-medium py-4">Competitor A</TableHead>
                <TableHead className="w-[20%] text-center text-muted-foreground font-medium py-4">Competitor B</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {features.map((feature, i) => (
                <TableRow key={i} className="hover:bg-muted/20">
                  <TableCell className="font-medium py-4">{feature.name}</TableCell>
                  <TableCell className="text-center py-4 bg-primary/5">
                    {feature.us ? (
                      <Check className="mx-auto text-primary h-5 w-5" />
                    ) : (
                      <X className="mx-auto text-muted-foreground h-5 w-5" />
                    )}
                  </TableCell>
                  <TableCell className="text-center py-4">
                    {feature.competitorA ? (
                      <Check className="mx-auto text-foreground/70 h-5 w-5" />
                    ) : (
                      <X className="mx-auto text-muted-foreground/50 h-5 w-5" />
                    )}
                  </TableCell>
                  <TableCell className="text-center py-4">
                    {feature.competitorB ? (
                      <Check className="mx-auto text-foreground/70 h-5 w-5" />
                    ) : (
                      <X className="mx-auto text-muted-foreground/50 h-5 w-5" />
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}
