import type { ResearchStatus } from "@/data/research-platform";
import { cn } from "@/lib/utils";

const statusClasses: Record<ResearchStatus, string> = {
  Planning: "border-slate-400/25 bg-slate-400/10 text-slate-300",
  "Data Collection": "border-signal-cyan/30 bg-signal-cyan/10 text-signal-cyan",
  Analysis: "border-signal-amber/30 bg-signal-amber/10 text-signal-amber",
  Published: "border-signal-green/30 bg-signal-green/10 text-signal-green"
};

export function ResearchStatusBadge({
  status,
  className
}: {
  status: ResearchStatus;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border px-3 py-1 text-xs font-medium",
        statusClasses[status],
        className
      )}
    >
      {status}
    </span>
  );
}
