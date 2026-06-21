export type ResearchStatus = "Planning" | "Data Collection" | "Analysis" | "Published";

export type PublicationCategory =
  | "Autonomous"
  | "FTC Analytics"
  | "Mentorship"
  | "Outreach"
  | "Method Note"
  | "Resource Study";

export type Publication = {
  id: string;
  title: string;
  summary: string;
  authors: string[];
  date: string;
  category: PublicationCategory;
  status: ResearchStatus;
  readingTime: string;
  dataSource: string;
  methods: string[];
  nextStep: string;
};

export const researchStatuses: Array<{
  status: ResearchStatus;
  description: string;
}> = [
  {
    status: "Planning",
    description:
      "The question is defined, but the collection sheet or trial plan still needs review."
  },
  {
    status: "Data Collection",
    description:
      "Notes, surveys, or trial logs are being gathered with a written method."
  },
  {
    status: "Analysis",
    description:
      "The data is being checked for missing context, unclear labels, and patterns worth explaining."
  },
  {
    status: "Published",
    description:
      "The writeup is available on the site with its method, limits, and next questions."
  }
];

export const publications: Publication[] = [
  {
    id: "auto-trial-log-method-note",
    title: "Autonomous Trial Logs That Capture More Than Success or Fail",
    summary:
      "A method note for recording endpoint error, heading error, voltage range, and the small setup changes that usually get forgotten.",
    authors: ["Arsh Bhatia"],
    date: "2026-06-21",
    category: "Method Note",
    status: "Published",
    readingTime: "4 min read",
    dataSource: "Static method note; no team data collected yet",
    methods: ["Route definition", "Repeated trial sheet", "Failure notes"],
    nextStep: "Test the log during a short autonomous route and revise unclear fields."
  },
  {
    id: "ftc-scouting-note-taxonomy",
    title: "A Tagging System for FTC Match Notes",
    summary:
      "A draft taxonomy for turning comments like 'slow pickup' or 'missed transfer' into tags that can be compared across matches.",
    authors: ["Arsh Bhatia"],
    date: "Planned 2026",
    category: "FTC Analytics",
    status: "Planning",
    readingTime: "Planned",
    dataSource: "No match set collected yet; planned public match review and student-coded notes",
    methods: ["Manual tagging", "Match replay review", "Definition audit"],
    nextStep: "Write tag definitions and test them on a small set of match clips."
  },
  {
    id: "path-follower-setup-burden",
    title: "Comparing Setup Burden Across FTC Path Followers",
    summary:
      "A planned comparison of how long students spend installing, tuning, and explaining different autonomous tools.",
    authors: ["Arsh Bhatia"],
    date: "Planned 2026",
    category: "Autonomous",
    status: "Planning",
    readingTime: "Planned",
    dataSource: "No measured setup logs yet; future controlled route notes and versioned setup records",
    methods: ["Setup checklist", "Tuning time log", "Documentation review"],
    nextStep: "Collect setup notes from a controlled route and separate setup time from run performance."
  },
  {
    id: "mentorship-debugging-confidence",
    title: "Mentorship and Debugging Independence in FTC Programming",
    summary:
      "A survey design for checking whether students can explain and repeat debugging steps after mentoring, not just recognize the vocabulary.",
    authors: ["Arsh Bhatia"],
    date: "Planned 2026",
    category: "Mentorship",
    status: "Planning",
    readingTime: "Planned",
    dataSource: "No survey responses collected yet; future opt-in responses with non-identifying summaries",
    methods: ["Pre/post survey", "Reflection prompt", "Skill-specific confidence scale"],
    nextStep: "Review survey wording so students are rating specific tasks instead of general confidence."
  },
  {
    id: "accessible-ftc-resource-format",
    title: "What Makes an FTC Guide Usable During Practice",
    summary:
      "A resource study about diagrams, checklists, expected symptoms, and examples that match what students see on the robot.",
    authors: ["Arsh Bhatia"],
    date: "Planned 2026",
    category: "Resource Study",
    status: "Planning",
    readingTime: "Planned",
    dataSource: "No student feedback collected yet; future resource audit and opt-in usability notes",
    methods: ["Guide review", "Usability notes", "Student feedback"],
    nextStep: "Audit existing team resources for hidden assumptions and missing debugging steps."
  }
];

export const futurePublications = publications.filter(
  (publication) => publication.status !== "Published"
);

export const archivePublications = publications;

export const surveyModules = [
  {
    title: "Team demographics",
    purpose:
      "Understand team context before comparing answers, such as rookie/veteran status, programming experience, and team size.",
    fields: [
      "Team type: rookie, returning, or mixed",
      "Approximate number of active students",
      "Programming experience before the season",
      "Access to practice field or partial field"
    ],
    privacyNote:
      "Collect ranges, not names. The goal is context, not identifying a team."
  },
  {
    title: "Mentor involvement",
    purpose:
      "Separate student-led debugging from mentor-assisted work without judging either one.",
    fields: [
      "How often mentors review code",
      "Whether mentors tune autonomous with students",
      "Who writes final competition code",
      "How help is documented after a session"
    ],
    privacyNote:
      "Responses should describe support patterns, not individual mentors."
  },
  {
    title: "Outreach participation",
    purpose:
      "Track what students practiced during outreach and what follow-up would help.",
    fields: [
      "Workshop or demo format",
      "Skill practiced by participants",
      "Resources used during the activity",
      "Questions students asked more than once"
    ],
    privacyNote:
      "Avoid collecting participant names. Summaries are enough for this research."
  },
  {
    title: "Autonomous development practices",
    purpose:
      "Record how teams plan, test, and debug autonomous before comparing outcomes.",
    fields: [
      "Pathing or control approach used",
      "Number of repeated runs before competition",
      "How endpoint error is measured",
      "Whether voltage, start pose, and field condition are logged"
    ],
    privacyNote:
      "Technical practices can be shared without exposing private strategy details."
  }
];

export const methodologySteps = [
  {
    title: "Write the question",
    text:
      "Start with one FTC problem that can be observed: a route drifting, a scouting tag being unclear, or a mentoring session that needs follow-up."
  },
  {
    title: "Define the fields",
    text:
      "Decide what gets logged before collecting anything. If two students would fill out the sheet differently, the definition needs work."
  },
  {
    title: "Collect a small sample",
    text:
      "Use a small set of matches, trials, or surveys first. The point is to find confusing fields before a larger collection."
  },
  {
    title: "Check the context",
    text:
      "Record robot setup, field condition, voltage range, mentor involvement, or workshop format when those details affect the result."
  },
  {
    title: "Publish limits with the result",
    text:
      "A useful writeup says what the data can show, what it cannot show, and what should be tested next."
  }
];

export const ethicsPrinciples = [
  {
    title: "Data collection",
    text:
      "BeyondBotz should collect only the information needed for the research question. Trial logs need robot and route details; surveys need context ranges, not names."
  },
  {
    title: "Privacy",
    text:
      "Student names, private team strategy, and identifiable survey responses should not be published. Public writeups should use summaries or ranges unless a team clearly chooses to be named."
  },
  {
    title: "Transparency",
    text:
      "Every chart or table should say whether the data is demo, collected, or incomplete. If a method changed halfway through, the writeup should say so."
  },
  {
    title: "Fair comparison",
    text:
      "Benchmarking should not punish teams for different resources. Hardware, field access, mentor support, and practice time belong in the context notes."
  }
];

export const ftcTrends = [
  {
    title: "Autonomous reliability is more than path accuracy",
    category: "Autonomous",
    observation:
      "A route can be accurate in a quiet practice run and still fail when the start pose is rushed or the battery is lower.",
    signalsToWatch: [
      "More teams logging voltage and start pose",
      "More attention to fallback actions",
      "Shorter routes that score less but repeat better"
    ]
  },
  {
    title: "Scouting notes need shared definitions",
    category: "FTC Analytics",
    observation:
      "Two students can watch the same match and write different notes unless the team defines what counts as a failed cycle, traffic delay, or assisted score.",
    signalsToWatch: [
      "Action tags instead of long comments",
      "Post-match video review",
      "Notes tied to drive-practice decisions"
    ]
  },
  {
    title: "Documentation is becoming part of technical depth",
    category: "Team Process",
    observation:
      "Code, CAD, and wiring decisions are easier to defend when students can show what changed and why.",
    signalsToWatch: [
      "Decision logs in engineering portfolios",
      "Short setup notes for autonomous tools",
      "Students explaining tradeoffs without memorized scripts"
    ]
  }
];

export const platformStats = [
  { value: publications.length.toString(), label: "Publication records" },
  { value: researchStatuses.length.toString(), label: "Research statuses" },
  { value: surveyModules.length.toString(), label: "Survey modules" },
  { value: ftcTrends.length.toString(), label: "Trend notes" }
];
