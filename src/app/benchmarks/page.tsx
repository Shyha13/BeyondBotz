import type { Metadata } from "next";
import { BenchmarkTable } from "@/components/BenchmarkTable";
import { CTASection } from "@/components/CTASection";
import { SectionHeader } from "@/components/SectionHeader";
import { benchmarkMethodology, metricDefinitions } from "@/data/benchmarks";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Benchmarks",
  description:
    "Compare FTC autonomous pathing approaches with a demo rubric for accuracy, repeatability, runtime, setup, and documentation.",
  path: "/benchmarks"
});

export default function BenchmarksPage() {
  return (
    <>
      <section className="content-shell section-y">
        <SectionHeader
          eyebrow="Autonomous benchmarks"
          title="One perfect auto run is not enough evidence."
          description="This page compares Pedro Pathing, Road Runner, Pure Pursuit, and custom followers with demo scores. The table is a testing format, not a claim that one tool is always better."
        />

        <div className="mt-8 rounded-lg border border-signal-amber/25 bg-signal-amber/10 p-4 text-sm leading-6 text-slate-200">
          Demo data notice: the scores below are placeholders. Real benchmark results would need repeated trials, route notes, robot details, and failure logs.
        </div>

        <div className="mt-8">
          <BenchmarkTable />
        </div>
      </section>

      <section className="border-y border-white/10 bg-carbon-900/55">
        <div className="content-shell section-y">
          <SectionHeader
            eyebrow="Metric definitions"
            title="Define the score before arguing about the score."
            description="FTC teams often compare tools by reputation. This rubric starts with observable things: where the robot ended, how repeatable the run was, and how hard it was to set up."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-5">
            {metricDefinitions.map((item) => (
              <article key={item.metric} className="surface-panel p-5">
                <h3 className="text-base font-semibold text-white">{item.metric}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{item.definition}</p>
                <p className="mt-4 text-xs leading-5 text-slate-500">{item.scoringNote}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="content-shell section-y">
          <SectionHeader
            eyebrow="Methodology"
            title="How the trial would be collected."
            description="A fair test needs the boring details: taped start pose, battery range, field condition, SDK version, and notes when someone had to touch the gamepad."
          />
          <ol className="mt-10 grid gap-4 md:grid-cols-2">
            {benchmarkMethodology.map((item, index) => (
              <li key={item} className="surface-panel p-6">
                <span className="text-sm font-semibold text-signal-cyan">
                  Step {index + 1}
                </span>
                <p className="mt-3 text-sm leading-6 text-slate-300">{item}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CTASection
        title="See how the notes could become charts."
        description="The dashboard page uses demo data to show how autonomous trials, match notes, and mentorship surveys might be reported."
        primaryLabel="Open demo dashboard"
        primaryHref="/data-dashboard"
      />
    </>
  );
}
