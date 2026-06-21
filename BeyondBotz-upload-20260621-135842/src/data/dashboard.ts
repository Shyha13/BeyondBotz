export type ChartPoint = {
  label: string;
  value: number;
};

export type DashboardCardData = {
  title: string;
  eyebrow: string;
  description: string;
  dataLabel: string;
  unit: string;
  sampleSize: string;
  qualityNote: string;
  points: ChartPoint[];
  insight: string;
  color: "cyan" | "violet" | "green" | "amber";
};

export const dashboardCards: DashboardCardData[] = [
  {
    title: "Autonomous Endpoint Accuracy",
    eyebrow: "Sample/demo data",
    description:
      "A mock view for tracking whether repeated auto runs are getting closer to the same target pose.",
    dataLabel: "Lower miss index is better",
    unit: "relative error index",
    sampleSize: "5 demo trials",
    qualityNote: "A real version would include the route, robot, starting pose, measurement method, and field condition.",
    points: [
      { label: "T1", value: 71 },
      { label: "T2", value: 58 },
      { label: "T3", value: 49 },
      { label: "T4", value: 44 },
      { label: "T5", value: 39 }
    ],
    insight: "Demo trend: the miss index drops as tuning changes are tested.",
    color: "cyan"
  },
  {
    title: "Runtime Consistency",
    eyebrow: "Sample/demo data",
    description:
      "A mock view for checking whether the same auto route finishes in a predictable time window.",
    dataLabel: "Consistency score",
    unit: "0-100 index",
    sampleSize: "5 demo runs",
    qualityNote: "A measured version should report seconds, variance, and notes for pauses or retries.",
    points: [
      { label: "A", value: 64 },
      { label: "B", value: 72 },
      { label: "C", value: 69 },
      { label: "D", value: 81 },
      { label: "E", value: 86 }
    ],
    insight: "Demo trend: the route becomes less jumpy after a simpler timing plan.",
    color: "violet"
  },
  {
    title: "Driver-Control Cycle Timing",
    eyebrow: "Sample/demo data",
    description:
      "A mock view for turning match notes into rough cycle timing that a drive team can talk through.",
    dataLabel: "Cycle efficiency",
    unit: "0-100 index",
    sampleSize: "5 demo samples",
    qualityNote: "A measured version should define exactly when each cycle starts and ends.",
    points: [
      { label: "Q1", value: 42 },
      { label: "Q2", value: 55 },
      { label: "Q3", value: 61 },
      { label: "Q4", value: 67 },
      { label: "Q5", value: 73 }
    ],
    insight: "Demo trend: cycles tighten when the route has fewer decisions under pressure.",
    color: "green"
  },
  {
    title: "Mentorship Confidence Index",
    eyebrow: "Sample/demo data",
    description:
      "A mock survey view for checking whether students feel more ready to repeat a skill after mentoring.",
    dataLabel: "Confidence score",
    unit: "survey index",
    sampleSize: "5 demo checkpoints",
    qualityNote: "A measured version should include question wording, participant count, and what skill was practiced.",
    points: [
      { label: "Before", value: 38 },
      { label: "Week 1", value: 50 },
      { label: "Week 2", value: 62 },
      { label: "Week 3", value: 70 },
      { label: "After", value: 79 }
    ],
    insight: "Demo trend: confidence rises when students get practice time after the explanation.",
    color: "amber"
  }
];

export const dashboardNotes = [
  "Every chart here uses sample/demo data.",
  "The charts are placeholders for how FTC notes could be reported after real collection.",
  "No private team data, paid APIs, database, or login system are used."
];

export const dashboardSummary = [
  { label: "Dataset status", value: "Demo only" },
  { label: "Privacy posture", value: "No private data" },
  { label: "Reporting style", value: "Explain the method" },
  { label: "Deployment", value: "Static site" }
];
