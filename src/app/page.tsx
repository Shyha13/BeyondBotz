import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { ResearchCard } from "@/components/ResearchCard";
import { SectionHeader } from "@/components/SectionHeader";
import { communityImpact, featuredProjects, researchWorkflow } from "@/data/projects";
import { researchAreas } from "@/data/research";
import { credibilityNotes } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="content-shell section-y">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeader
            eyebrow="What this is"
            title="A place to write down the FTC problems teams keep running into."
            description="BeyondBotz is for the questions that come up after practice: why the auto missed, which scouting notes were actually useful, and how to explain a fix so the next student can repeat it."
          />
          <div className="grid gap-4">
            {credibilityNotes.map((item) => (
              <div key={item} className="surface-panel grid gap-4 p-5 sm:grid-cols-[auto_1fr]">
                <CheckCircle2 aria-hidden="true" className="mt-0.5 text-signal-green" size={20} />
                <p className="text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-carbon-900/55">
        <div className="content-shell section-y">
          <SectionHeader
            eyebrow="How the work is handled"
            title="Start with the messy moment, then write the test."
            description="A good FTC note usually begins with something annoying and specific. The research process here keeps that detail instead of smoothing it into a vague claim."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-4">
            {researchWorkflow.map((item) => (
              <article key={item.step} className="surface-panel p-5">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-signal-cyan">
                  {item.step}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-shell section-y">
          <SectionHeader
            eyebrow="Research areas"
            title="Four study tracks, each tied to something teams can observe."
            description="The tracks cover match review, autonomous testing, mentorship, and resources. Each one explains what sparked the question and how data could be collected."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {researchAreas.map((area) => (
              <ResearchCard key={area.slug} area={area} />
            ))}
          </div>
      </section>

      <section className="border-y border-white/10 bg-carbon-900/55">
        <div className="content-shell section-y">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            eyebrow="Current artifacts"
            title="Draft tools that make the work easier to check."
            description="These are not trophies or finished studies. They are formats for collecting better notes: trial logs, dashboard sketches, and reflection prompts."
          />
          <Link
            href="/benchmarks"
            className="inline-flex items-center gap-2 text-sm font-semibold text-signal-cyan transition hover:text-white"
          >
            View the auto rubric
            <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <article key={project.title} className="surface-panel p-6">
              <span className="rounded-full border border-signal-violet/30 bg-signal-violet/10 px-3 py-1 text-xs font-medium text-signal-violet">
                {project.status}
              </span>
              <h3 className="mt-5 text-xl font-semibold text-white">{project.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{project.summary}</p>
              <p className="mt-5 border-l border-signal-cyan/40 pl-4 text-sm leading-6 text-slate-400">
                Output: {project.output}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.metrics.map((metric) => (
                  <span key={metric} className="rounded-md bg-white/[0.06] px-2.5 py-1 text-xs text-slate-300">
                    {metric}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
        </div>
      </section>

      <section className="content-shell section-y">
          <SectionHeader
            eyebrow="For other teams"
            title="Useful only if another student can follow it."
            description="The writing aims to be practical enough for a pit notebook, a programming meeting, or a mentor conversation after a rough match."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {communityImpact.map((item) => (
              <article key={item.title} className="surface-panel bg-carbon-950/70 p-6">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{item.text}</p>
              </article>
            ))}
          </div>
      </section>

      <CTASection
        title="Read the questions behind the project."
        description="Start with the research page, then compare the autonomous rubric or open the demo dashboard to see how the notes could be reported."
        primaryLabel="Open research questions"
        primaryHref="/research"
        secondaryLabel="View demo dashboard"
        secondaryHref="/data-dashboard"
      />
    </>
  );
}
