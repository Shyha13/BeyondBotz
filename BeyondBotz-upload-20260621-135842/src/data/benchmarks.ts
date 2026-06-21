export type BenchmarkMetric =
  | "accuracy"
  | "repeatability"
  | "runtimeConsistency"
  | "easeOfSetup"
  | "documentationQuality";

export type BenchmarkComparison = {
  name: string;
  category: string;
  summary: string;
  bestFit: string;
  evidenceLevel: string;
  setupBurden: "Low" | "Moderate" | "High" | "Variable";
  scores: Record<BenchmarkMetric, number>;
  controls: string[];
  limitation: string;
  notes: string;
};

export const metricLabels: Record<BenchmarkMetric, string> = {
  accuracy: "Accuracy",
  repeatability: "Repeatability",
  runtimeConsistency: "Runtime consistency",
  easeOfSetup: "Ease of setup",
  documentationQuality: "Documentation quality"
};

export const benchmarkComparisons: BenchmarkComparison[] = [
  {
    name: "Pedro Pathing",
    category: "FTC-oriented pathing library",
    summary:
      "A pathing option many FTC students look at because the workflow feels close to how teams tune during the season.",
    bestFit: "Teams that want a pathing setup built around FTC examples and are willing to read community notes carefully.",
    evidenceLevel: "Demo rubric only",
    setupBurden: "Moderate",
    scores: {
      accuracy: 88,
      repeatability: 84,
      runtimeConsistency: 82,
      easeOfSetup: 78,
      documentationQuality: 76
    },
    controls: ["Same route", "Same robot assumptions", "Repeated endpoint logging"],
    limitation: "Community examples can move faster than formal docs, so setup notes need dates and version details.",
    notes: "Demo score only. Replace with measured trial results before treating it as evidence."
  },
  {
    name: "Road Runner",
    category: "Trajectory and localization framework",
    summary:
      "A trajectory and localization framework with a lot of history in FTC, but also enough setup detail to slow down a new programmer.",
    bestFit: "Teams that can spend time on localization, tuning notes, and careful code review before competition week.",
    evidenceLevel: "Demo rubric only",
    setupBurden: "High",
    scores: {
      accuracy: 90,
      repeatability: 88,
      runtimeConsistency: 86,
      easeOfSetup: 68,
      documentationQuality: 84
    },
    controls: ["Same route", "Tuning time recorded", "Localization method documented"],
    limitation: "A clean Road Runner result depends heavily on localization quality, drivetrain behavior, and how patiently the team tuned.",
    notes: "Demo score only. Real results depend on robot hardware and field setup."
  },
  {
    name: "Pure Pursuit",
    category: "Classical geometric follower",
    summary:
      "A readable controls approach that is useful when students want to understand the math instead of only calling library functions.",
    bestFit: "Teams learning path-following concepts or building a simple custom auto stack for a specific robot.",
    evidenceLevel: "Demo rubric only",
    setupBurden: "High",
    scores: {
      accuracy: 76,
      repeatability: 74,
      runtimeConsistency: 78,
      easeOfSetup: 64,
      documentationQuality: 65
    },
    controls: ["Lookahead documented", "Route curvature recorded", "Endpoint error measured"],
    limitation: "Two Pure Pursuit implementations can behave very differently, so the test must include code and parameter notes.",
    notes: "Demo score only. Intended as a baseline, not a ranking."
  },
  {
    name: "Custom Followers",
    category: "Team-specific control system",
    summary:
      "Team-written control code built around one robot, one sensor setup, and whatever the season forced the team to prioritize.",
    bestFit: "Teams with enough programming time to test failure cases and explain the system to future students.",
    evidenceLevel: "Demo rubric only",
    setupBurden: "Variable",
    scores: {
      accuracy: 82,
      repeatability: 72,
      runtimeConsistency: 75,
      easeOfSetup: 52,
      documentationQuality: 50
    },
    controls: ["Algorithm documented", "Failure cases logged", "Code review included"],
    limitation: "Custom code can be great when the original programmer is there and confusing when the notes are missing.",
    notes: "Demo score only. Custom systems need transparent trial logs before comparison."
  }
];

export const metricDefinitions: Array<{
  metric: string;
  definition: string;
  scoringNote: string;
}> = [
  {
    metric: "Accuracy",
    definition: "How far the robot ends from the target pose after the same route.",
    scoringNote: "A real score should include inches, heading error, and how the target was measured."
  },
  {
    metric: "Repeatability",
    definition: "Whether the robot misses in the same way, or differently every time.",
    scoringNote: "A real score should use several runs, not a best take."
  },
  {
    metric: "Runtime consistency",
    definition: "Whether the route finishes in a predictable time window.",
    scoringNote: "A real score should include seconds and note any pause, retry, or stuck action."
  },
  {
    metric: "Ease of setup",
    definition: "How hard it is for a student to install, tune, explain, and repair the setup.",
    scoringNote: "A real score should count setup steps and tuning time."
  },
  {
    metric: "Documentation quality",
    definition: "Whether the docs help when something breaks, not just when the sample works.",
    scoringNote: "A real score should test if a newer programmer can follow the instructions."
  }
];

export const benchmarkMethodology = [
  "Tape the same start pose and target area for every follower before the first run.",
  "Run enough trials to see whether misses repeat or move around randomly.",
  "Log endpoint error, heading error, runtime, battery voltage range, and any driver intervention.",
  "Record tuning time separately so a hard setup does not get hidden behind a good final run.",
  "Document drivetrain, localization method, SDK version, field condition, and failure modes."
];
