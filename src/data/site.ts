export const siteConfig = {
  name: "BeyondBotz",
  domain: "beyondbotz.com",
  url: "https://beyondbotz.com",
  founder: "Arsh Bhatia",
  tagline: "Student FTC research, testing notes, and robotics analysis.",
  description:
    "BeyondBotz is a student-led FTC research platform for autonomous testing, match analysis, mentorship study, and accessible robotics resources.",
  email: "hello@beyondbotz.com"
};

export const navigation = [
  { label: "Home", href: "/", description: "What BeyondBotz is tracking" },
  { label: "Research", href: "/research", description: "Questions, observations, and methods" },
  { label: "Benchmarks", href: "/benchmarks", description: "How autonomous tools will be compared" },
  { label: "Dashboard", href: "/data-dashboard", description: "Sample FTC data views" },
  { label: "Resources", href: "/resources", description: "Checklists and team templates" },
  { label: "About", href: "/about", description: "Why this project exists" },
  { label: "Contact", href: "/contact", description: "Feedback or collaboration" }
];

export const homeStats = [
  { value: "4", label: "Research tracks" },
  { value: "5", label: "Benchmark criteria" },
  { value: "0", label: "Private datasets stored" }
];

export const credibilityNotes = [
  "Charts and tables marked as demo data are examples, not season results.",
  "Each research track starts with a question a team could actually test.",
  "The goal is to make FTC decisions easier to explain, not to dress up guesses as proof."
];

export const footerResearchLinks = [
  { label: "Research questions", href: "/research" },
  { label: "Research archive", href: "/research/archive" },
  { label: "Methodology", href: "/research/methodology" },
  { label: "Ethics", href: "/research/ethics" },
  { label: "Autonomous rubric", href: "/benchmarks" },
  { label: "FTC trends", href: "/ftc-trends" },
  { label: "Future publications", href: "/future-publications" },
  { label: "Demo dashboard", href: "/data-dashboard" },
  { label: "Team resources", href: "/resources" }
];

export const platformLinks = [
  {
    label: "Research archive",
    href: "/research/archive",
    description: "Publication records with status, category, author, date, and method notes."
  },
  {
    label: "Methodology",
    href: "/research/methodology",
    description: "How BeyondBotz will collect trial logs, surveys, and match observations."
  },
  {
    label: "Ethics",
    href: "/research/ethics",
    description: "Data collection, privacy, transparency, and fair comparison rules."
  },
  {
    label: "FTC trends",
    href: "/ftc-trends",
    description: "Early trend notes that can later be backed by real collection."
  },
  {
    label: "Future publications",
    href: "/future-publications",
    description: "Planned research records with methods, evidence limits, and next steps."
  }
];
