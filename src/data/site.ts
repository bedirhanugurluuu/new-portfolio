export const site = {
  handle: "@Bedo",
  name: "Bedo",
  email: "hello@example.com",
  location: "ISTANBUL",
  title: "Bedo — Engineer & Builder",
  description:
    "Personal site of an engineer and builder. Notes, writing, and things I care about.",
};

export const bio = {
  default: `I'm an engineer and builder. I care about clear interfaces, fast products, and software that feels inevitable once you use it. I've been shipping things for years — and teaching myself (and others) along the way.`,
  long: `I'm an engineer and builder. I care about clear interfaces, fast products, and software that feels inevitable once you use it. I've been shipping things for years — and teaching myself (and others) along the way.

My life's work is to make technology easier to understand and more interesting to learn. Outside of work I'm into music, long walks, and small tools that remove friction from everyday life. I also advise early teams when I can be useful.`,
};

export type Note = {
  slug: string;
  title: string;
  summary: string;
  body: string[];
};

export const notes: Note[] = [
  {
    slug: "things-i-believe",
    title: "Things I believe",
    summary: "A short list of working principles.",
    body: [
      "Ship small, ship often. Momentum compounds.",
      "Clarity is a feature. If people don't understand it, it doesn't exist.",
      "Taste is a skill. You can train it by looking closely.",
      "Tools should disappear. The work should remain.",
      "Write things down. Future you is a collaborator.",
    ],
  },
  {
    slug: "understanding-ai",
    title: "Understanding AI",
    summary: "How I think about building with models.",
    body: [
      "Models are leverage, not magic. The product still needs judgment.",
      "Good prompts are structured context, not spells.",
      "Evaluation beats vibes. Measure what you care about.",
      "The best AI surfaces feel like a sharp coworker, not a chatbot.",
    ],
  },
  {
    slug: "developer-experience",
    title: "Developer experience",
    summary: "DX as a product discipline.",
    body: [
      "Time-to-hello-world is the first impression.",
      "Errors should teach. Silence is worse than a loud failure.",
      "Defaults matter more than configuration.",
      "Documentation is part of the product surface.",
    ],
  },
  {
    slug: "developer-marketing",
    title: "Developer marketing",
    summary: "Earning attention without wasting it.",
    body: [
      "Show the work. Demos beat slogans.",
      "Respect the reader's time. Cut until it hurts, then cut again.",
      "Community is built by listening first.",
    ],
  },
  {
    slug: "developer-relations",
    title: "Developer relations",
    summary: "Bridging builders and the product.",
    body: [
      "DevRel is translation: product ↔ community.",
      "Trust is the only lasting channel.",
      "Help people succeed publicly and privately.",
    ],
  },
  {
    slug: "developer-products",
    title: "Developer products",
    summary: "What makes a tool stick.",
    body: [
      "Solve one sharp problem better than anything else.",
      "Composable beats monolithic for power users.",
      "Pricing should make the value obvious.",
    ],
  },
  {
    slug: "documentation",
    title: "Documentation",
    summary: "Writing that unlocks software.",
    body: [
      "Start with the goal, not the API surface.",
      "Examples first. Theory second.",
      "Keep docs next to the code that changes.",
    ],
  },
  {
    slug: "community-moderation",
    title: "Community moderation",
    summary: "Keeping spaces healthy.",
    body: [
      "Norms beat rules when culture is strong.",
      "Act early. Drift is expensive.",
      "Be fair, be clear, be human.",
    ],
  },
  {
    slug: "personal-software",
    title: "Personal software",
    summary: "Building for an audience of one.",
    body: [
      "Personal tools teach product sense faster than theory.",
      "Ugly and useful beats pretty and unused.",
      "Own your stack when it matters.",
    ],
  },
  {
    slug: "product-engineers",
    title: "Product engineers",
    summary: "Engineering that owns outcomes.",
    body: [
      "Own the problem, not just the ticket.",
      "Talk to users. Screenshots are not feedback.",
      "Design, code, and ship as one loop.",
    ],
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  displayDate: string;
  excerpt: string;
  body: string[];
};

export const blogs: BlogPost[] = [
  {
    slug: "how-we-teach-models",
    title: "How we teach AI models",
    date: "2026-07-01",
    displayDate: "July 2026",
    excerpt: "A practical look at evaluation, datasets, and taste.",
    body: [
      "Teaching a model is less about dumping more data and more about deciding what “good” looks like.",
      "Start with a narrow task. Write rubrics a human would agree on. Then measure relentlessly.",
      "The surprising part: the best gains often come from cleaning examples, not inventing new architectures.",
    ],
  },
  {
    slug: "coding-agents-complexity",
    title: "Coding agents and complexity budgets",
    date: "2025-12-01",
    displayDate: "December 2025",
    excerpt: "Where agents help — and where they add noise.",
    body: [
      "Agents are great at navigating large codebases and proposing diffs. They are worse at holding product intent.",
      "Give them a complexity budget: fewer files, clearer acceptance criteria, smaller PRs.",
      "The win is not replacing judgment — it's compressing the boring parts so judgment has room.",
    ],
  },
  {
    slug: "building-with-agents",
    title: "Building low-level software with coding agents",
    date: "2025-12-01",
    displayDate: "December 2025",
    excerpt: "Notes from shipping with agents in the loop.",
    body: [
      "Treat the agent like a junior engineer with infinite patience and no context.",
      "You still own architecture. You still own the merge button.",
      "Keep a tight feedback loop: run tests, read diffs, ask for smaller changes.",
    ],
  },
  {
    slug: "reflections-on-community",
    title: "Reflections on the React community",
    date: "2025-08-01",
    displayDate: "August 2025",
    excerpt: "What open source teaching still gets right.",
    body: [
      "Communities thrive when contributions feel welcome and standards stay high.",
      "The best educators make hard ideas feel approachable without dumbing them down.",
      "React's longevity isn't just technical — it's cultural.",
    ],
  },
  {
    slug: "five-years-lessons",
    title: "5 things I learned from 5 years of shipping",
    date: "2025-07-01",
    displayDate: "July 2025",
    excerpt: "Lessons that survived contact with reality.",
    body: [
      "Distribution beats perfection. A good thing in people's hands wins.",
      "Hire for taste and ownership, then give room.",
      "Say no more often. Roadmaps are graveyards of maybes.",
      "Write publicly. It sharpens thinking and attracts allies.",
      "Protect deep work. Calendar entropy is real.",
    ],
  },
  {
    slug: "how-im-writing-css",
    title: "How I'm writing CSS",
    date: "2024-01-01",
    displayDate: "January 2024",
    excerpt: "Utilities, cascade, and keeping styles boring.",
    body: [
      "I want CSS that is obvious six months later.",
      "Utilities for layout speed. A few custom properties for brand.",
      "Avoid cleverness. Prefer repetition you can delete.",
    ],
  },
];

export function getNote(slug: string) {
  return notes.find((n) => n.slug === slug);
}

export function getBlog(slug: string) {
  return blogs.find((b) => b.slug === slug);
}
