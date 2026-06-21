import type { Metadata } from "next";
import { SectionHeader } from "@/components/SectionHeader";
import { SurveyModuleCard } from "@/components/SurveyModuleCard";
import { methodologySteps, surveyModules } from "@/data/research-platform";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Research Methodology",
  description:
    "Read the BeyondBotz research methodology for FTC trial logs, surveys, match notes, and static survey modules.",
  path: "/research/methodology"
});

export default function ResearchMethodologyPage() {
  return (
    <>
      <section className="content-shell section-y">
        <SectionHeader
          eyebrow="Methodology"
          title="A method should survive a busy practice night."
          description="BeyondBotz methods are designed around simple fields students can actually fill out: what route was run, what changed, who helped, what got stuck, and what should be checked next."
        />

        <ol className="mt-10 grid gap-4 lg:grid-cols-5">
          {methodologySteps.map((step, index) => (
            <li key={step.title} className="surface-panel p-5">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-signal-cyan">
                Step {index + 1}
              </span>
              <h2 className="mt-4 text-lg font-semibold text-white">{step.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-white/10 bg-carbon-900/55">
        <div className="content-shell section-y">
          <SectionHeader
            eyebrow="Survey system"
            title="Static survey modules ready for real responses later."
            description="The survey UI is split by topic so future forms can collect team context, mentor involvement, outreach participation, and autonomous practices without changing the page structure."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {surveyModules.map((module) => (
              <SurveyModuleCard key={module.title} module={module} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
