import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { ResearchCard } from "@/components/ResearchCard";
import { SectionHeader } from "@/components/SectionHeader";
import { researchAreas } from "@/data/research";
import { platformLinks } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Research",
  description:
    "Read the FTC observations, research questions, and collection methods behind BeyondBotz.",
  path: "/research"
});

export default function ResearchPage() {
  return (
    <>
      <section className="content-shell section-y">
        <SectionHeader
          eyebrow="Research"
          title="Questions that came from actual FTC friction."
          description="The research tracks start with things students notice during a season: inconsistent auto, vague scouting notes, mentorship that is hard to measure, and guides that skip the step where beginners get stuck."
        />
        <div className="mt-10 grid gap-6">
          {researchAreas.map((area) => (
            <ResearchCard key={area.slug} area={area} detailed />
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-carbon-900/55">
        <div className="content-shell section-y">
          <SectionHeader
            eyebrow="Platform"
            title="The structure is ready for real research records."
            description="The platform pages are static placeholders for now, but they already separate publications, methods, ethics notes, trend tracking, and future work."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-5">
            {platformLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="surface-panel group flex min-h-52 flex-col p-5 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.055]"
              >
                <h2 className="text-lg font-semibold text-white">{link.label}</h2>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">
                  {link.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-signal-cyan transition group-hover:text-white">
                  Open page
                  <ArrowRight aria-hidden="true" size={15} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="content-shell section-y">
          <SectionHeader
            eyebrow="Ground rules"
            title="A result is only useful if the method is visible."
            description="A chart without the collection method is just decoration. These rules keep the work honest while the project grows."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Label demo data",
                text: "If the numbers are placeholders, the page says so before anyone reads the chart."
              },
              {
                title: "Keep the procedure repeatable",
                text: "Routes, survey questions, and scouting tags should be clear enough for another team to try."
              },
              {
                title: "Write for the next student",
                text: "The best output is something a teammate can use when the original author is not standing there."
              }
            ].map((item) => (
              <article key={item.title} className="surface-panel p-6">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Look at the autonomous testing plan next."
        description="The benchmark page shows how path followers can be compared without relying on one clean demo run."
        primaryLabel="View auto benchmarks"
        primaryHref="/benchmarks"
      />
    </>
  );
}
