import type { Metadata } from "next";
import { PublicationCard } from "@/components/PublicationCard";
import { SectionHeader } from "@/components/SectionHeader";
import { futurePublications } from "@/data/research-platform";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Future Publications",
  description:
    "Preview planned BeyondBotz FTC research publications and their current research statuses.",
  path: "/future-publications"
});

export default function FuturePublicationsPage() {
  return (
    <section className="content-shell section-y">
      <SectionHeader
        eyebrow="Future publications"
        title="Research planned before data is collected."
        description="These records show the publication pipeline without pretending the studies are finished. Each one includes authors, category, method, evidence limits, and the next step."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {futurePublications.map((publication) => (
          <PublicationCard key={publication.id} publication={publication} />
        ))}
      </div>
    </section>
  );
}
