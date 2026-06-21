import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { ethicsPrinciples } from "@/data/research-platform";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Research Ethics",
  description:
    "Read BeyondBotz ethics notes about FTC data collection, privacy, transparency, and fair comparisons.",
  path: "/research/ethics"
});

export default function ResearchEthicsPage() {
  return (
    <section className="content-shell section-y">
      <SectionHeader
        eyebrow="Ethics"
        title="Collect only what the question needs."
        description="FTC research can be useful without publishing private team strategy, student names, or context-free rankings. This page defines the rules BeyondBotz should follow before real data is added."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {ethicsPrinciples.map((principle) => (
          <article key={principle.title} className="surface-panel p-6">
            <div className="flex items-start gap-4">
              <div className="rounded-lg border border-signal-green/30 bg-signal-green/10 p-3 text-signal-green">
                <ShieldCheck aria-hidden="true" size={22} />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-white">{principle.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">{principle.text}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 rounded-lg border border-signal-cyan/25 bg-signal-cyan/10 p-5 text-sm leading-6 text-slate-200">
        Current status: all research records on the site are static placeholders or method notes.
        No private team survey responses, identifiable student data, or unpublished strategy data
        are stored in this project.
      </div>
    </section>
  );
}
