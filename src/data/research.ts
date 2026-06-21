export type ResearchArea = {
  slug: string;
  title: string;
  summary: string;
  researchQuestion: string;
  observation: string;
  whyItMatters: string;
  currentStage: string;
  focus: string[];
  methods: string[];
  expectedOutputs: string[];
  accent: "cyan" | "violet" | "blue" | "green";
};

export const researchAreas: ResearchArea[] = [
  {
    slug: "ftc-performance-analytics",
    title: "FTC Performance Analytics",
    summary:
      "A way to turn scouting notes, match replays, and drive-team conversations into cleaner FTC performance questions.",
    researchQuestion:
      "Which match observations actually help a team decide what to build, what to practice, and what to stop overcomplicating?",
    observation:
      "At events, teams often know a robot is inconsistent before they can explain why. Notes like 'slow cycles' or 'missed pickup' are useful, but only if everyone tags them the same way.",
    whyItMatters:
      "A team can waste weeks improving the wrong thing if the data is vague. This track is about making scouting and review notes specific enough to guide driver practice, mechanism changes, and autonomous priorities.",
    currentStage: "Tagging rules and demo dashboard draft",
    focus: [
      "Cycle timing from intake to score, including traffic and reset time",
      "Reliability events such as stalls, disconnects, bad transfers, and dead zones",
      "Driver-control routes that look fine in practice but break under defense",
      "Season rules that change which actions are worth measuring"
    ],
    methods: [
      "Review public match video and event data when available",
      "Tag actions by hand with short definitions students can follow",
      "Compare score changes with notes about defense, penalties, and failed cycles"
    ],
    expectedOutputs: [
      "FTC analytics glossary",
      "Match observation template",
      "Public writeups that explain methods before conclusions"
    ],
    accent: "cyan"
  },
  {
    slug: "autonomous-benchmarking",
    title: "Autonomous Benchmarking",
    summary:
      "A testing plan for comparing path followers the way FTC teams actually use them: on imperfect fields, with battery changes, rushed tuning, and real start-position pressure.",
    researchQuestion:
      "How can a team compare autonomous systems without trusting one perfect run or a loud recommendation online?",
    observation:
      "An auto can look locked in on Tuesday and miss the same target by a few inches on Saturday. Sometimes the issue is tuning. Sometimes it is localization. Sometimes the setup steps were never written down.",
    whyItMatters:
      "Choosing a pathing library affects how students debug, how fast new programmers can help, and how calmly the team can make changes at competition.",
    currentStage: "Trial sheet and rubric draft",
    focus: [
      "Endpoint and heading error after repeated runs",
      "Battery level, field tile seams, and starting-pose variation",
      "Runtime consistency on the same route",
      "How long it takes a new programmer to understand the setup"
    ],
    methods: [
      "Run the same route from the same marked start pose",
      "Log endpoint error, heading error, runtime, voltage range, and driver intervention",
      "Keep setup notes separate from performance scores so tuning effort is visible"
    ],
    expectedOutputs: [
      "Benchmark table",
      "Trial checklist",
      "Follower evaluation rubric"
    ],
    accent: "violet"
  },
  {
    slug: "mentorship-impact-study",
    title: "Mentorship Impact Study",
    summary:
      "A study format for checking whether mentoring sessions actually help students become more independent, not just more familiar with the vocabulary.",
    researchQuestion:
      "Which mentorship habits help newer students debug, explain, and finish work without waiting for one experienced person?",
    observation:
      "The best sessions are usually not lectures. They are moments where a student fixes a wiring issue, explains why a loop is failing, or writes down the steps well enough for the next person.",
    whyItMatters:
      "FTC teams lose knowledge when seniors graduate. Mentorship is easier to improve when teams track what students can do before and after a workshop or build session.",
    currentStage: "Survey questions and reflection prompts",
    focus: [
      "Before-and-after confidence on specific tasks, not broad self-ratings",
      "Whether newer students can repeat a debugging process later",
      "Meeting notes that show who learned what",
      "Habits that keep code, CAD, and wiring knowledge from living in one person's head"
    ],
    methods: [
      "Short pre/post surveys tied to named skills",
      "Reflection prompts after programming, build, and outreach sessions",
      "Attendance and resource-use notes without pretending attendance alone proves learning"
    ],
    expectedOutputs: [
      "Survey templates",
      "Mentorship playbook",
      "Impact reflection format"
    ],
    accent: "green"
  },
  {
    slug: "stem-accessibility-research",
    title: "STEM Accessibility Research",
    summary:
      "A review of how robotics resources can be easier to start with while still respecting the technical details that make FTC hard.",
    researchQuestion:
      "What makes a robotics guide usable for a student who is new, tired after school, and trying to fix something before the next meeting?",
    observation:
      "A lot of students do not need a watered-down explanation. They need diagrams, checklists, expected symptoms, and examples that match what is sitting on their workbench.",
    whyItMatters:
      "Teams become stronger when more students can enter the technical conversation. Clear resources also make mentorship less dependent on whoever happens to be present.",
    currentStage: "Resource audit and checklist testing",
    focus: [
      "Beginner-readable guides with real debugging symptoms",
      "Low-cost practice activities that do not require a full robot",
      "Workshop formats that leave time for questions and mistakes",
      "Technical language that defines terms instead of avoiding them"
    ],
    methods: [
      "Review existing guides for unclear assumptions",
      "Ask students where they got stuck and what finally helped",
      "Test checklists during programming, wiring, and outreach activities"
    ],
    expectedOutputs: [
      "Open resources",
      "Workshop outlines",
      "Documentation guidelines"
    ],
    accent: "blue"
  }
];
