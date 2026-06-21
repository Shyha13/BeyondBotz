import { BarChart3, BookOpenCheck, Gauge, Handshake } from "lucide-react";
import type { ResearchArea } from "@/data/research";

const accentClasses = {
  cyan: "border-signal-cyan/30 bg-signal-cyan/10 text-signal-cyan",
  violet: "border-signal-violet/30 bg-signal-violet/10 text-signal-violet",
  blue: "border-signal-blue/30 bg-signal-blue/10 text-signal-blue",
  green: "border-signal-green/30 bg-signal-green/10 text-signal-green"
};

const icons = {
  "ftc-performance-analytics": BarChart3,
  "autonomous-benchmarking": Gauge,
  "mentorship-impact-study": Handshake,
  "stem-accessibility-research": BookOpenCheck
};

type ResearchCardProps = {
  area: ResearchArea;
  detailed?: boolean;
};

export function ResearchCard({ area, detailed = false }: ResearchCardProps) {
  const Icon = icons[area.slug as keyof typeof icons] ?? BarChart3;

  return (
    <article className="group surface-panel p-6 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.055]">
      <div className="flex items-start justify-between gap-4">
        <div className={`rounded-lg border p-3 ${accentClasses[area.accent]}`}>
          <Icon aria-hidden="true" size={22} />
        </div>
        <span className="rounded-full border border-white/10 bg-carbon-950/70 px-3 py-1 text-xs font-medium text-slate-400">
          {area.currentStage}
        </span>
      </div>
      <h3 className="mt-6 text-xl font-semibold text-white">{area.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{area.summary}</p>

      <div className="mt-5 rounded-md border border-white/10 bg-carbon-950/55 p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-signal-cyan">
          Research question
        </p>
        <p className="mt-2 text-sm leading-6 text-slate-300">{area.researchQuestion}</p>
      </div>

      <div className="mt-4 rounded-md border border-white/10 bg-carbon-950/35 p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          What sparked it
        </p>
        <p className="mt-2 text-sm leading-6 text-slate-400">{area.observation}</p>
      </div>

      <div className="mt-6">
        <h4 className="text-sm font-semibold text-slate-200">Focus areas</h4>
        <ul className="mt-3 grid gap-2 text-sm text-slate-400">
          {area.focus.slice(0, detailed ? area.focus.length : 3).map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal-cyan" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {detailed ? (
        <div className="mt-6 grid gap-5 border-t border-white/10 pt-5 lg:grid-cols-[1fr_0.9fr_0.9fr]">
          <div>
            <h4 className="text-sm font-semibold text-slate-200">Why teams might care</h4>
            <p className="mt-3 text-sm leading-6 text-slate-400">{area.whyItMatters}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-200">Methods</h4>
            <ul className="mt-3 grid gap-2 text-sm text-slate-400">
              {area.methods.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-200">Outputs</h4>
            <ul className="mt-3 grid gap-2 text-sm text-slate-400">
              {area.expectedOutputs.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </article>
  );
}
