export type ResourceCategory = {
  title: string;
  description: string;
  resources: string[];
};

export const resourceCategories: ResourceCategory[] = [
  {
    title: "Programming",
    description: "Small habits that make FTC code easier to read when auto breaks the night before a scrimmage.",
    resources: [
      "Git checklist for two or three programmers",
      "Code review questions students can actually answer",
      "TeleOp structure sketch before coding",
      "Sensor debugging sheet with expected readings"
    ]
  },
  {
    title: "Autonomous Systems",
    description: "Templates for planning routes, logging misses, and figuring out whether the robot or the setup is the problem.",
    resources: [
      "Autonomous trial log with voltage and pose notes",
      "Path follower comparison rubric",
      "Localization tuning notes that include symptoms",
      "Field route checklist for start pose and targets"
    ]
  },
  {
    title: "Team Management",
    description: "Simple ways to keep build, code, and outreach tasks from disappearing between meetings.",
    resources: [
      "Meeting agenda with owner and next step",
      "Build sprint board for parts still in progress",
      "Role rotation checklist for newer students",
      "Decision log for design tradeoffs"
    ]
  },
  {
    title: "Outreach",
    description: "Workshop formats that leave room for mistakes, questions, and useful follow-up notes.",
    resources: [
      "Workshop plan with setup and cleanup checks",
      "Beginner activities that do not need a full robot",
      "Feedback form tied to specific skills",
      "Community partner reflection notes"
    ]
  },
  {
    title: "Awards",
    description: "Ways to explain design choices and outreach honestly, with evidence a judge or mentor can follow.",
    resources: [
      "Engineering portfolio evidence checklist",
      "Claim review prompts before portfolio writing",
      "Outreach evidence worksheet",
      "Presentation practice plan with likely questions"
    ]
  }
];
