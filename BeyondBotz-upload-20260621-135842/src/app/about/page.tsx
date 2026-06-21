import type { Metadata } from "next";
import { ArrowRight, GraduationCap, Network, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";
import { siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description:
    "Learn why Arsh Bhatia started BeyondBotz to document FTC testing, mentoring, and robotics analysis.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <section className="content-shell section-y">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <SectionHeader
            eyebrow="About"
            title="Founded by Arsh Bhatia."
            description="BeyondBotz grew out of the parts of FTC that are easy to experience and harder to explain later: debugging autonomous code, comparing match notes, helping newer students, and turning lessons into something reusable."
          />
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-signal-cyan px-5 py-3 text-sm font-semibold text-carbon-950 transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-cyan"
          >
            Start a conversation
            <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </div>

        <div className="grid gap-5">
          <article className="surface-panel p-6">
            <h2 className="text-xl font-semibold text-white">What BeyondBotz is</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              BeyondBotz is a place to document robotics questions before the
              details disappear. The site separates demo data from measured
              results, keeps methods visible, and turns repeated team problems
              into checklists, rubrics, survey drafts, and engineering notes.
            </p>
          </article>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                icon: GraduationCap,
                title: "Student-led",
                text: "Written from the point of view of someone who has been in the pit, at practice, and in the code."
              },
              {
                icon: Network,
                title: "FTC centered",
                text: "Focused on scouting notes, autonomous testing, mentoring, outreach, and engineering habits teams can actually practice."
              },
              {
                icon: ShieldCheck,
                title: "Careful with claims",
                text: "Demo data stays labeled. Real claims need logs, definitions, and enough runs to be worth reading."
              }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="surface-panel bg-carbon-900/70 p-5">
                  <Icon aria-hidden="true" className="text-signal-cyan" size={22} />
                  <h3 className="mt-4 text-base font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.text}</p>
                </article>
              );
            })}
          </div>
          <article className="surface-panel p-6">
            <h2 className="text-xl font-semibold text-white">Founder</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              {siteConfig.founder} founded BeyondBotz to study FTC robotics in
              a way that feels honest to the season: some work is measured,
              some is still a draft, and some starts as a note after a hard
              practice. The project is student-led by design and leaves space
              for better data instead of filling gaps with big claims.
            </p>
          </article>
          <article className="surface-panel p-6">
            <h2 className="text-xl font-semibold text-white">Research posture</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              The site avoids pretending that a clean chart is the same as a
              completed study. Benchmark scores are placeholders until tested,
              outreach notes focus on what students practiced, and the useful
              part is the method another team can check.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
