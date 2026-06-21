import type { Metadata } from "next";
import { PublicationCard } from "@/components/PublicationCard";
import { ResearchStatusBadge } from "@/components/ResearchStatusBadge";
import { SectionHeader } from "@/components/SectionHeader";
import {
  archivePublications,
  platformStats,
  researchStatuses
} from "@/data/research-platform";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Research Archive",
  description:
    "Browse the BeyondBotz static research archive with authors, dates, categories, and research status labels.",
  path: "/research/archive"
});

export default function ResearchArchivePage() {
  return (
    <section className="content-shell section-y">
      <SectionHeader
        eyebrow="Research archive"
        title="A structured home for method notes and planned studies."
        description="The archive is static for now. Each record still uses the fields a real publication would need: author, date, category, status, method, source notes, and next step."
      />

      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {platformStats.map((stat) => (
          <div key={stat.label} className="surface-panel p-4">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
              {stat.label}
            </p>
            <p className="mt-2 text-2xl font-semibold text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-4">
        {researchStatuses.map((item) => (
          <article key={item.status} className="surface-panel p-5">
            <ResearchStatusBadge status={item.status} />
            <p className="mt-4 text-sm leading-6 text-slate-400">{item.description}</p>
          </article>
        ))}
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {archivePublications.map((publication) => (
          <PublicationCard key={publication.id} publication={publication} />
        ))}
      </div>
    </section>
  );
}
