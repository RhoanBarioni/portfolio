import acadmapCover from "@/assets/project-acadmap.jpg";
import royalCover from "@/assets/project-royal.jpg";
import lgpdCover from "@/assets/project-lgpd.jpg";

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  about: string[];
  email: string;
  github: string;
  githubUser: string;
  linkedin: string;
  location: string;
  instagramUser: string;
  instagram: string;
}

export const profile: Profile = {
  name: "Rhoan Barioni",
  role: "Full Stack Developer",
  tagline: "Computer Science Student",
  about: [
    "I'm a Computer Science student and Full Stack Developer based in Brazil. I care about software that is readable six months later, not just software that ships today.",
    "I build web applications end to end: interfaces with React, Vite and TypeScript, and services with Go and Java on top of relational databases.",
    "Right now I'm deepening my backend work — API design, data modelling, containers and Linux tooling — and learning how to reason about systems rather than screens.",
    "My goal is to grow into an engineer who can own a product from database schema to the last pixel, working on teams that take craft seriously.",
  ],
  email: "rhoanbarioni.dev@gmail.com",
  github: "https://github.com/RhoanBarioni",
  githubUser: "RhoanBarioni",
  linkedin: "https://www.linkedin.com/in/rhoanbarioni/",
  location: "Brazil",
  instagramUser: "rhoanbarioni.dev",
  instagram: "https://www.instagram.com/rhoanbarioni.dev/",
};

export interface Project {
  id: string;
  name: string;
  year: string;
  summary: string;
  problem: string;
  solution: string;
  results: string;
  tech: string[];
  cover: string;
  repo?: string;
  demo?: string;
  demoLabel: string;
}

export const projects: Project[] = [
  {
    id: "acadmap",
    name: "AcadMap",
    year: "2024",
    summary:
      "An interactive web application that organizes academic information and makes finding your way around campus effortless.",
    problem:
      "Students often struggle to locate classrooms and navigate the university campus.",
    solution:
      "Developed an interactive web application that organizes academic information and simplifies campus navigation.",
    results:
      "Improved the day-to-day experience for students while sharpening my frontend architecture skills.",
    tech: ["React", "Vite", "JavaScript", "HTML", "SCSS"],
    cover: acadmapCover,
    repo: "https://github.com/RhoanBarioni/AcadMap",
    demo: "https://rhoanbarioni.github.io/AcadMap/",
    demoLabel: "Live demo",
  },
  {
    id: "royal",
    name: "ROYAL",
    year: "2024",
    summary:
      "A responsive institutional website for a construction company, built around performance and clarity.",
    problem:
      "The company needed a credible, fast online presence that worked on any device.",
    solution:
      "Designed and developed a responsive institutional website focused on performance and usability.",
    results:
      "Delivered a modern production website now serving the company's real clients.",
    tech: ["HTML", "SCSS", "JavaScript"],
    cover: royalCover,
    demo: "https://royalconstru.com.br/",
    demoLabel: "Visit website",
  },
  {
    id: "lgpd",
    name: "LGPD_Facul",
    year: "2023",
    summary:
      "An educational website that breaks down Brazil's General Data Protection Law into clear, accessible concepts.",
    problem:
      "Explaining Brazil's General Data Protection Law (LGPD) in a simple, accessible way.",
    solution: "Built an educational website as part of an academic project.",
    results:
      "A responsive site that presents LGPD concepts in an organized, readable structure.",
    tech: ["HTML", "SCSS", "JavaScript"],
    cover: lgpdCover,
    repo: "https://github.com/RhoanBarioni/LGPD_Facul",
    demo: "https://rhoanbarioni.github.io/LGPD_Facul/",
    demoLabel: "Live demo",
  },
];

export type SkillIcon =
  "layout" | "server" | "database" | "container" | "wrench";

export interface SkillGroup {
  id: string;
  title: string;
  icon: SkillIcon;
  description: string;
  items: { name: string; note: string }[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    title: "Frontend",
    icon: "layout",
    description: "Interfaces that stay fast, accessible and easy to maintain.",
    items: [
      { name: "JavaScript", note: "core language" },
      { name: "TypeScript", note: "typed everything" },
      { name: "React", note: "component architecture" },
      { name: "Vite", note: "build tooling" },
      { name: "HTML", note: "semantic markup" },
      { name: "SCSS", note: "structured styling" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: "server",
    description:
      "Services and APIs, with a growing focus on compiled languages.",
    items: [
      { name: "Go", note: "services, concurrency" },
      // { name: "Java", note: "OOP fundamentals" },
      // { name: "Node.js", note: "tooling and APIs" },
      { name: "REST APIs", note: "design and consumption" },
      { name: "Postman", note: "API testing" },
    ],
  },
  {
    id: "database",
    title: "Database",
    icon: "database",
    description: "Modelling and querying data for real application needs.",
    items: [
      // { name: "PostgreSQL", note: "primary relational store" },
      { name: "MySQL", note: "academic and legacy work" },
      // { name: "SQLite", note: "local and embedded" },
    ],
  },
  {
    id: "devops",
    title: "DevOps",
    icon: "container",
    description:
      "Reproducible environments and comfortable command-line workflows.",
    items: [
      { name: "Docker", note: "containers, compose" },
      { name: "Linux", note: "daily driver" },
      { name: "CI basics", note: "automated checks" },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    icon: "wrench",
    description: "The daily toolkit behind every project I ship.",
    items: [
      { name: "Git", note: "version control" },
      { name: "GitHub", note: "collaboration" },
      { name: "VS Code", note: "editor" },
      { name: "Figma", note: "interface design" },
    ],
  },
];

export interface TimelineEntry {
  year: number;
  title: string;
  description: string;
  tags: string[];
}

export const timeline: TimelineEntry[] = [
  {
    year: 2023,
    title: "First lines of code",
    description:
      "Started studying software development and web technologies, building small static projects to understand the fundamentals.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    year: 2024,
    title: "Frontend focus",
    description:
      "Focused on frontend development with JavaScript, React and Vite while shipping academic and personal projects to real users.",
    tags: ["React", "Vite", "SCSS"],
  },
  {
    year: 2025,
    title: "Into the backend",
    description:
      "Started learning backend development with Go and Java, plus Docker and Linux for reproducible environments.",
    tags: ["Go", "Java", "Docker", "Linux"],
  },
  {
    year: 2026,
    title: "Full stack in practice",
    description:
      "Continuing toward full stack engineering: software architecture, API design and databases alongside my Computer Science degree.",
    tags: ["TypeScript", "PostgreSQL", "Architecture"],
  },
];

/** Repositories to surface first in the GitHub section, in this order. */
export const pinnedRepos = ["AcadMap", "ROYAL", "LGPD_Facul"];

export const navPages = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/stack", label: "Stack" },
  { to: "/github", label: "GitHub" },
  { to: "/contact", label: "Contact" },
] as const;

export const yearsLearning = new Date().getFullYear() - timeline[0].year;

export const mainTechnologies = new Set(
  skillGroups.flatMap((g) => g.items.map((i) => i.name)),
).size;
