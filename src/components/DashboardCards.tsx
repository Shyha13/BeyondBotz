import { dashboardCards } from "@/data/dashboard";
import { formatPercent } from "@/lib/utils";

const colorStyles = {
  cyan: {
    bg: "bg-signal-cyan",
    text: "text-signal-cyan",
    border: "border-signal-cyan/25",
    fill: "rgba(49, 214, 255, 0.12)",
    stroke: "#31d6ff"
  },
  violet: {
    bg: "bg-signal-violet",
    text: "text-signal-violet",
    border: "border-signal-violet/25",
    fill: "rgba(138, 92, 255, 0.12)",
    stroke: "#8a5cff"
  },
  green: {
    bg: "bg-signal-green",
    text: "text-signal-green",
    border: "border-signal-green/25",
    fill: "rgba(54, 211, 153, 0.12)",
    stroke: "#36d399"
  },
  amber: {
    bg: "bg-signal-amber",
    text: "text-signal-amber",
    border: "border-signal-amber/25",
    fill: "rgba(244, 191, 80, 0.12)",
    stroke: "#f4bf50"
  }
};

function buildSparkline(points: Array<{ value: number }>) {
  const width = 260;
  const height = 86;
  const max = Math.max(...points.map((point) => point.value));
  const min = Math.min(...points.map((point) => point.value));
  const spread = Math.max(max - min, 1);

  const coords = points.map((point, index) => {
    const x = (index / Math.max(points.length - 1, 1)) * width;
    const y = height - ((point.value - min) / spread) * height;
    return { x, y };
  });

  const line = coords
    .map((coord, index) => `${index === 0 ? "M" : "L"} ${coord.x.toFixed(1)} ${coord.y.toFixed(1)}`)
    .join(" ");
  const area = `${line} L ${width} ${height} L 0 ${height} Z`;

  return { width, height, coords, line, area };
}

export function DashboardCards() {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {dashboardCards.map((card) => {
        const styles = colorStyles[card.color];
        const sparkline = buildSparkline(card.points);
        const latest = card.points[card.points.length - 1];

        return (
          <article
            key={card.title}
            className={`surface-panel overflow-hidden ${styles.border}`}
          >
            <div className="border-b border-white/10 p-5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-signal-cyan">
                    {card.eyebrow}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{card.title}</h3>
                </div>
                <span className="rounded-full border border-white/10 bg-carbon-950/70 px-3 py-1 text-xs text-slate-400">
                  {card.sampleSize}
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-400">{card.description}</p>
            </div>

            <div className="grid gap-5 p-5 xl:grid-cols-[0.9fr_1.1fr]">
              <div className="grid gap-3">
                <div className="rounded-lg border border-white/10 bg-carbon-950/70 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                    Latest sample
                  </p>
                  <p className="mt-2 text-3xl font-semibold text-white">
                    {latest.value}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">{card.unit}</p>
                </div>
                <div className="rounded-lg border border-white/10 bg-carbon-950/70 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                    Interpretation
                  </p>
                  <p className={`mt-2 text-sm leading-6 ${styles.text}`}>
                    {card.insight}
                  </p>
                </div>
              </div>

              <div className="rounded-lg border border-white/10 bg-carbon-950/70 p-4">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                    {card.dataLabel}
                  </span>
                  <span className="text-xs text-slate-500">{card.unit}</span>
                </div>

                <svg
                  className="mt-4 h-36 w-full overflow-visible"
                  viewBox={`0 0 ${sparkline.width} ${sparkline.height}`}
                  role="img"
                  aria-label={`${card.title} sample trend chart`}
                  preserveAspectRatio="none"
                >
                  <path d={sparkline.area} fill={styles.fill} />
                  <path d={sparkline.line} fill="none" stroke={styles.stroke} strokeWidth="3" />
                  {sparkline.coords.map((coord, index) => (
                    <circle
                      key={`${card.title}-${card.points[index].label}`}
                      cx={coord.x}
                      cy={coord.y}
                      r="4"
                      fill="#05060a"
                      stroke={styles.stroke}
                      strokeWidth="2"
                    >
                      <title>
                        {card.points[index].label}: {formatPercent(card.points[index].value)}
                      </title>
                    </circle>
                  ))}
                </svg>

                <div className="mt-5 grid grid-cols-5 gap-2">
                  {card.points.map((point) => (
                    <div key={point.label} className="min-w-0">
                      <div className="flex h-16 items-end rounded-md bg-white/[0.04] p-1">
                        <div
                          className={`w-full rounded-sm ${styles.bg}`}
                          style={{ height: `${point.value}%` }}
                          title={`${point.label}: ${formatPercent(point.value)}`}
                        />
                      </div>
                      <p className="mt-2 truncate text-center text-xs text-slate-500">
                        {point.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 bg-carbon-950/55 px-5 py-4">
              <p className="text-xs leading-5 text-slate-500">{card.qualityNote}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
