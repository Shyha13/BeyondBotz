export type FeaturedProject = {
  title: string;
  status: "Protocol draft" | "Template" | "Demo dataset";
  summary: string;
  metrics: string[];
  output: string;
};

export const featuredProjects: FeaturedProject[] = [
  {
    title: "Autonomous Follower Evaluation Matrix",
    status: "Protocol draft",
    summary:
      "A score sheet for comparing path followers after repeated runs, not after the one run where everything happened to line up.",
    metrics: ["Endpoint error", "Heading drift", "Setup notes"],
    output: "Trial log, rubric definitions, and a place to record what went wrong"
  },
  {
    title: "FTC Match Analytics Starter Dashboard",
    status: "Demo dataset",
    summary:
      "A mock dashboard for turning scouting notes into questions a drive team can discuss after watching match video.",
    metrics: ["Cycle timing", "Missed actions", "Score trend"],
    output: "Static dashboard prototype with clearly labeled sample FTC-style data"
  },
  {
    title: "Mentorship Impact Reflection Kit",
    status: "Template",
    summary:
      "A set of prompts for checking what students could do before a session, what changed, and what still needs practice.",
    metrics: ["Skill confidence", "Follow-up tasks", "Stuck points"],
    output: "Pre/post prompts, reflection notes, and next-meeting follow-up format"
  }
];

export const communityImpact = [
  {
    title: "Write down the method first",
    text: "If a chart or table appears on the site, the assumptions should be visible too: what was counted, what was ignored, and what still needs real testing."
  },
  {
    title: "Make FTC decisions less vague",
    text: "Teams often know something feels off, but the next step is harder. Better notes can turn 'auto is inconsistent' into a shorter debugging list."
  },
  {
    title: "Leave notes for the next student",
    text: "Mentorship works better when a newer programmer can repeat the fix later, or when a build student can find the wiring note without asking the same question again."
  }
];

export const researchWorkflow = [
  {
    step: "01",
    title: "Define the question",
    text: "Start with something that has caused real confusion: a path that drifts, a scouting note nobody agrees on, or a workshop that needs follow-up."
  },
  {
    step: "02",
    title: "Design the protocol",
    text: "Write down the route, metric, survey question, or rubric before looking for a pattern. Otherwise the conclusion moves around too easily."
  },
  {
    step: "03",
    title: "Prototype the analysis",
    text: "Use demo data to test whether the chart, table, or checklist makes sense before claiming it describes a real team or season."
  },
  {
    step: "04",
    title: "Publish useful artifacts",
    text: "Turn the work into trial logs, checklists, and short guides that a tired team can actually use at the end of practice."
  }
];
