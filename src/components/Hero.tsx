import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Database, Gauge, LineChart, ShieldCheck } from "lucide-react";
import { homeStats, siteConfig } from "@/data/site";
import { withBasePath } from "@/lib/utils";

const labMarkers = [
  { icon: LineChart, label: "Match notes into metrics" },
  { icon: Gauge, label: "Repeated auto trials" },
  { icon: Database, label: "Demo data labeled clearly" }
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-carbon-950">
      <div className="absolute inset-0 bg-radial-signal" />
      <div className="absolute inset-0 bg-lab-grid bg-[length:44px_44px] opacity-35" />
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-signal-cyan/70 to-transparent" />

      <div className="content-shell relative grid gap-12 py-16 sm:py-20 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-slate-300">
            <span className="h-2 w-2 rounded-full bg-signal-green shadow-[0_0_18px_rgba(54,211,153,0.8)]" />
            {siteConfig.tagline}
          </div>
          <h1 className="mt-7 text-balance text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            BeyondBotz
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9">
            A student-led FTC research project built from the problems teams
            recognize fast: autos that miss by a few inches, scouting notes that
            are hard to compare, and newer students who need clearer debugging
            steps.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <Link
              href="/research"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-signal-cyan px-5 py-3 text-sm font-semibold text-carbon-950 transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-cyan"
            >
              Read the questions
              <ArrowRight aria-hidden="true" size={16} />
            </Link>
            <Link
              href="/benchmarks"
              className="inline-flex items-center justify-center rounded-md border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-cyan"
            >
              See the auto rubric
            </Link>
          </div>

          <dl className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
            {homeStats.map((stat) => (
              <div key={stat.label} className="surface-panel p-4">
                <dt className="text-xs text-slate-500">{stat.label}</dt>
                <dd className="mt-2 text-2xl font-semibold text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-lg border border-signal-cyan/10 bg-signal-cyan/[0.03] blur-2xl" />
          <div className="relative overflow-hidden rounded-lg border border-white/10 bg-carbon-900 shadow-violet-glow">
            <Image
              src={withBasePath("/images/beyondbotz-research-hero.png")}
              alt="Dark robotics research workspace with analytics screens and autonomous trajectory visuals."
              width={1536}
              height={864}
              priority
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="aspect-[16/11] w-full object-cover sm:aspect-[16/9]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-carbon-950 via-carbon-950/20 to-transparent" />
            <div className="absolute inset-x-0 top-0 h-24 animate-scan bg-gradient-to-b from-signal-cyan/0 via-signal-cyan/16 to-signal-cyan/0 motion-reduce:hidden" />
            <div className="absolute left-4 top-4 rounded-md border border-white/10 bg-carbon-950/76 px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-slate-300 backdrop-blur">
              Demo workspace
            </div>
            <div className="absolute bottom-4 left-4 right-4 grid gap-3 sm:grid-cols-3">
              {labMarkers.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex min-h-14 items-center gap-2 rounded-md border border-white/10 bg-carbon-950/80 px-3 py-3 text-sm text-slate-200 backdrop-blur"
                  >
                    <Icon aria-hidden="true" size={16} className="shrink-0 text-signal-cyan" />
                    <span>{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-4 grid gap-3 rounded-lg border border-white/10 bg-carbon-900/70 p-4 sm:grid-cols-[auto_1fr]">
            <ShieldCheck aria-hidden="true" className="mt-0.5 text-signal-green" size={20} />
            <p className="text-sm leading-6 text-slate-300">
              Demo numbers are labeled as demo numbers. Real results will need
              route notes, trial logs, and enough failed runs to learn something
              useful.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
