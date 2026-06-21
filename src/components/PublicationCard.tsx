import { CalendarDays, Clock, Users } from "lucide-react";
import type { Publication } from "@/data/research-platform";
import { ResearchStatusBadge } from "@/components/ResearchStatusBadge";

type PublicationCardProps = {
  publication: Publication;
  compact?: boolean;
};

export function PublicationCard({ publication, compact = false }: PublicationCardProps) {
  return (
    <article className="surface-panel flex h-full flex-col p-6">
      <div className="flex flex-wrap items-center gap-2">
        <ResearchStatusBadge status={publication.status} />
        <span className="rounded-full border border-white/10 bg-carbon-950/70 px-3 py-1 text-xs text-slate-400">
          {publication.category}
        </span>
      </div>

      <h2 className="mt-5 text-xl font-semibold leading-snug text-white">
        {publication.title}
      </h2>
      <p className="mt-3 text-sm leading-6 text-slate-300">{publication.summary}</p>

      <dl className="mt-5 grid gap-3 text-sm text-slate-400">
        <div className="flex items-center gap-2">
          <Users aria-hidden="true" size={15} className="text-signal-cyan" />
          <dt className="sr-only">Authors</dt>
          <dd>{publication.authors.join(", ")}</dd>
        </div>
        <div className="flex items-center gap-2">
          <CalendarDays aria-hidden="true" size={15} className="text-signal-cyan" />
          <dt className="sr-only">Date</dt>
          <dd>{publication.date}</dd>
        </div>
        <div className="flex items-center gap-2">
          <Clock aria-hidden="true" size={15} className="text-signal-cyan" />
          <dt className="sr-only">Reading time</dt>
          <dd>{publication.readingTime}</dd>
        </div>
      </dl>

      {!compact ? (
        <>
          <div className="mt-5 rounded-md border border-white/10 bg-carbon-950/55 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Data source
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              {publication.dataSource}
            </p>
          </div>

          <div className="mt-5">
            <p className="text-sm font-semibold text-white">Methods</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {publication.methods.map((method) => (
                <span
                  key={method}
                  className="rounded-md bg-white/[0.06] px-2.5 py-1 text-xs text-slate-300"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </>
      ) : null}

      <p className="mt-5 border-l border-signal-cyan/40 pl-4 text-sm leading-6 text-slate-400">
        Next: {publication.nextStep}
      </p>
    </article>
  );
}
