import type { Metadata } from "next";
import { DashboardCards } from "@/components/DashboardCards";
import { SectionHeader } from "@/components/SectionHeader";
import { dashboardNotes, dashboardSummary } from "@/data/dashboard";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Data Dashboard",
  description:
    "View sample FTC dashboard cards for autonomous misses, runtime consistency, cycle timing, and mentorship surveys.",
  path: "/data-dashboard"
});

export default function DataDashboardPage() {
  return (
    <section className="content-shell section-y">
      <SectionHeader
        eyebrow="Data dashboard"
        title="Demo charts for the kind of notes FTC teams already collect."
        description="The numbers are placeholders. The layout shows how trial logs, scouting observations, and mentorship surveys could be displayed once real data is collected carefully."
      />

      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {dashboardSummary.map((item) => (
          <div key={item.label} className="surface-panel p-4">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
              {item.label}
            </p>
            <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-3 rounded-lg border border-signal-cyan/25 bg-signal-cyan/10 p-4 text-sm leading-6 text-slate-200 lg:grid-cols-3">
        {dashboardNotes.map((note) => (
          <p key={note}>{note}</p>
        ))}
      </div>

      <div className="mt-10">
        <DashboardCards />
      </div>
    </section>
  );
}
