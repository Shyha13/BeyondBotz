import type { Metadata } from "next";
import { TrendingUp } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { ftcTrends } from "@/data/research-platform";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "FTC Trends",
  description:
    "Read static BeyondBotz FTC trend notes about autonomous reliability, scouting definitions, and documentation habits.",
  path: "/ftc-trends"
});

export default function FtcTrendsPage() {
  return (
    <section className="content-shell section-y">
      <SectionHeader
        eyebrow="FTC trends"
        title="Patterns worth watching, not claims yet."
        description="This page holds early trend notes that can later be backed by match review, surveys, or trial logs. For now, each trend is written as an observation with signals to watch."
      />

      <div className="mt-10 grid gap-5">
        {ftcTrends.map((trend) => (
          <article key={trend.title} className="surface-panel p-6">
            <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-signal-cyan/25 bg-signal-cyan/10 px-3 py-1 text-xs font-medium text-signal-cyan">
                  <TrendingUp aria-hidden="true" size={14} />
                  {trend.category}
                </span>
                <h2 className="mt-5 text-2xl font-semibold text-white">{trend.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {trend.observation}
                </p>
              </div>

              <div className="rounded-lg border border-white/10 bg-carbon-950/55 p-5">
                <p className="text-sm font-semibold text-white">Signals to watch</p>
                <ul className="mt-4 grid gap-3 text-sm text-slate-400">
                  {trend.signalsToWatch.map((signal) => (
                    <li key={signal} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal-cyan" />
                      <span>{signal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
