import type { Metadata } from "next";
import { BookOpen, Boxes, ClipboardCheck, Cpu, Trophy } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { SectionHeader } from "@/components/SectionHeader";
import { resourceCategories } from "@/data/resources";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Resources",
  description:
    "Browse FTC programming, autonomous, team management, outreach, and portfolio resources from BeyondBotz.",
  path: "/resources"
});

const icons = [Cpu, Boxes, ClipboardCheck, BookOpen, Trophy];

export default function ResourcesPage() {
  return (
    <>
      <section className="content-shell section-y">
        <SectionHeader
          eyebrow="Resources"
          title="Resources written for actual team meetings."
          description="The resource library is meant for the moments when a team needs a checklist, a debugging prompt, or a clearer way to explain what happened."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {resourceCategories.map((category, index) => {
            const Icon = icons[index] ?? BookOpen;
            return (
              <article key={category.title} className="surface-panel p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg border border-signal-cyan/30 bg-signal-cyan/10 p-3 text-signal-cyan">
                    <Icon aria-hidden="true" size={22} />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-white">{category.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{category.description}</p>
                  </div>
                </div>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {category.resources.map((resource) => (
                    <li
                      key={resource}
                      className="rounded-md border border-white/10 bg-carbon-950/60 px-3 py-3 text-sm leading-5 text-slate-300"
                    >
                      {resource}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <CTASection
        title="Suggest the resource your team would actually use."
        description="A good template usually starts with a recurring team problem. Send the category that would help most at practice."
        primaryLabel="Send a suggestion"
        primaryHref="/contact"
      />
    </>
  );
}
