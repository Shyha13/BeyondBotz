import {
  benchmarkComparisons,
  metricLabels,
  type BenchmarkComparison,
  type BenchmarkMetric
} from "@/data/benchmarks";

const metrics = Object.keys(metricLabels) as BenchmarkMetric[];

function scoreClass(score: number) {
  if (score >= 85) {
    return "bg-signal-green/15 text-signal-green";
  }
  if (score >= 75) {
    return "bg-signal-cyan/15 text-signal-cyan";
  }
  if (score >= 65) {
    return "bg-signal-amber/15 text-signal-amber";
  }
  return "bg-white/[0.06] text-slate-300";
}

function barClass(score: number) {
  if (score >= 85) {
    return "bg-signal-green";
  }
  if (score >= 75) {
    return "bg-signal-cyan";
  }
  if (score >= 65) {
    return "bg-signal-amber";
  }
  return "bg-slate-500";
}

function ScoreCell({ score }: { score: number }) {
  return (
    <div className="min-w-28">
      <div className="flex items-center gap-3">
        <span
          className={`inline-flex h-8 w-11 items-center justify-center rounded-md text-sm font-semibold ${scoreClass(score)}`}
        >
          {score}
        </span>
        <span className="h-2 w-20 overflow-hidden rounded-full bg-white/[0.08]">
          <span
            className={`block h-full rounded-full ${barClass(score)}`}
            style={{ width: `${score}%` }}
          />
        </span>
      </div>
    </div>
  );
}

function BenchmarkMobileCard({ item }: { item: BenchmarkComparison }) {
  return (
    <article className="surface-panel p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-signal-cyan">
            {item.category}
          </p>
          <h3 className="mt-2 text-xl font-semibold text-white">{item.name}</h3>
        </div>
        <span className="rounded-full border border-white/10 bg-carbon-950/70 px-3 py-1 text-xs text-slate-400">
          Setup: {item.setupBurden}
        </span>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-300">{item.summary}</p>
      <div className="mt-5 grid gap-3">
        {metrics.map((metric) => (
          <div key={metric} className="flex items-center justify-between gap-4">
            <span className="text-sm text-slate-400">{metricLabels[metric]}</span>
            <ScoreCell score={item.scores[metric]} />
          </div>
        ))}
      </div>
      <div className="mt-5 border-t border-white/10 pt-4">
        <p className="text-sm font-semibold text-white">Best fit</p>
        <p className="mt-2 text-sm leading-6 text-slate-400">{item.bestFit}</p>
        <p className="mt-3 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
          {item.evidenceLevel}
        </p>
      </div>
    </article>
  );
}

export function BenchmarkTable() {
  return (
    <div>
      <div className="grid gap-4 lg:hidden">
        {benchmarkComparisons.map((item) => (
          <BenchmarkMobileCard key={item.name} item={item} />
        ))}
      </div>

      <div className="hidden overflow-hidden rounded-lg border border-white/10 bg-white/[0.03] lg:block">
        <div className="overflow-x-auto">
          <table className="min-w-[1180px] divide-y divide-white/10 text-left">
            <caption className="sr-only">
              Demo benchmark comparison of FTC autonomous path-following approaches.
            </caption>
            <thead className="bg-carbon-900/90">
              <tr>
                <th scope="col" className="sticky left-0 z-10 bg-carbon-900 px-5 py-4 text-sm font-semibold text-white">
                  System profile
                </th>
                {metrics.map((metric) => (
                  <th key={metric} scope="col" className="px-5 py-4 text-sm font-semibold text-white">
                    {metricLabels[metric]}
                  </th>
                ))}
                <th scope="col" className="px-5 py-4 text-sm font-semibold text-white">
                  Controls and limitations
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {benchmarkComparisons.map((item) => (
                <tr key={item.name} className="align-top transition hover:bg-white/[0.025]">
                  <th scope="row" className="sticky left-0 z-10 bg-carbon-950/95 px-5 py-5">
                    <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-signal-cyan">
                      {item.category}
                    </span>
                    <span className="mt-2 block text-base font-semibold text-white">{item.name}</span>
                    <span className="mt-2 block max-w-xs text-sm font-normal leading-6 text-slate-400">
                      {item.summary}
                    </span>
                    <span className="mt-4 inline-flex rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-slate-400">
                      Setup burden: {item.setupBurden}
                    </span>
                  </th>
                  {metrics.map((metric) => (
                    <td key={metric} className="px-5 py-5">
                      <ScoreCell score={item.scores[metric]} />
                    </td>
                  ))}
                  <td className="max-w-md px-5 py-5 text-sm leading-6 text-slate-300">
                    <p className="font-medium text-white">Best fit</p>
                    <p className="mt-2 text-slate-400">{item.bestFit}</p>
                    <p className="mt-4 font-medium text-white">Controls</p>
                    <ul className="mt-2 grid gap-1 text-slate-400">
                      {item.controls.map((control) => (
                        <li key={control}>{control}</li>
                      ))}
                    </ul>
                    <p className="mt-4 border-l border-signal-amber/40 pl-3 text-slate-400">
                      {item.limitation}
                    </p>
                    <p className="mt-3 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                      {item.evidenceLevel}. {item.notes}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
