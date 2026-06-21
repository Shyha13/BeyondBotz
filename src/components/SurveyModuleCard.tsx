import { ClipboardList } from "lucide-react";
import type { surveyModules } from "@/data/research-platform";

type SurveyModule = (typeof surveyModules)[number];

export function SurveyModuleCard({ module }: { module: SurveyModule }) {
  return (
    <article className="surface-panel p-6">
      <div className="flex items-start gap-4">
        <div className="rounded-lg border border-signal-cyan/30 bg-signal-cyan/10 p-3 text-signal-cyan">
          <ClipboardList aria-hidden="true" size={22} />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-white">{module.title}</h2>
          <p className="mt-2 text-sm leading-6 text-slate-400">{module.purpose}</p>
        </div>
      </div>

      <div className="mt-6">
        <p className="text-sm font-semibold text-white">Static survey fields</p>
        <ul className="mt-3 grid gap-2 text-sm text-slate-400">
          {module.fields.map((field) => (
            <li key={field} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal-cyan" />
              <span>{field}</span>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-5 rounded-md border border-white/10 bg-carbon-950/55 p-4 text-xs leading-5 text-slate-500">
        {module.privacyNote}
      </p>
    </article>
  );
}
