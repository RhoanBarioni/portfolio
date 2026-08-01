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
  role: "Desenvolvedor Full Stack",
  tagline: "Estudante de Ciência da Computação",
  about: [
    "Sou estudante de Ciência da Computação e desenvolvedor Full Stack. Gosto de escrever código claro e fácil de manter, não apenas de entregar algo que funcione no momento.",
    "Desenvolvo aplicações web de ponta a ponta: crio interfaces com React, Vite e TypeScript e construo serviços em Go integrados a bancos de dados relacionais.",
    "Atualmente, estou aprofundando meus conhecimentos em backend, design de APIs, modelagem de dados, contêineres e Linux. Também estou aprendendo Java e buscando compreender melhor os sistemas por trás de cada interface.",
    "Quero me tornar um profissional capaz de acompanhar todo o desenvolvimento de um produto, desde a estrutura do banco de dados até os últimos detalhes da interface, sempre trabalhando com responsabilidade e atenção à qualidade.",
  ],
  email: "rhoanbarioni.dev@gmail.com",
  github: "https://github.com/RhoanBarioni",
  githubUser: "RhoanBarioni",
  linkedin: "https://www.linkedin.com/in/rhoanbarioni/",
  location: "Brasil",
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
      "Uma aplicação web interativa que organiza informações acadêmicas e facilita a localização dentro do campus.",
    problem:
      "Muitos estudantes têm dificuldade para encontrar salas e se localizar dentro da universidade.",
    solution:
      "Desenvolvi uma aplicação interativa que reúne informações acadêmicas e torna a navegação pelo campus mais simples.",
    results:
      "O projeto facilitou o dia a dia dos estudantes e me ajudou a evoluir na organização e na arquitetura do frontend.",
    tech: ["React", "Vite", "JavaScript", "HTML", "SCSS"],
    cover: acadmapCover,
    repo: "https://github.com/RhoanBarioni/AcadMap",
    demo: "https://rhoanbarioni.github.io/AcadMap/",
    demoLabel: "Ver demonstração",
  },
  {
    id: "royal",
    name: "ROYAL",
    year: "2024",
    summary:
      "Um site institucional responsivo para uma construtora, desenvolvido com foco em desempenho e clareza.",
    problem:
      "A empresa precisava de uma presença digital profissional, rápida e acessível em qualquer dispositivo.",
    solution:
      "Planejei e desenvolvi um site institucional responsivo, priorizando desempenho, usabilidade e uma apresentação objetiva dos serviços.",
    results:
      "Entreguei um site moderno, publicado e utilizado pela empresa no atendimento aos seus clientes.",
    tech: ["HTML", "SCSS", "JavaScript"],
    cover: royalCover,
    demo: "https://royalconstru.com.br/",
    demoLabel: "Visitar site",
  },
  {
    id: "lgpd",
    name: "LGPD_Facul",
    year: "2023",
    summary:
      "Um site educacional que apresenta a Lei Geral de Proteção de Dados de forma clara e acessível.",
    problem:
      "Explicar os principais conceitos da Lei Geral de Proteção de Dados de maneira simples e organizada.",
    solution:
      "Desenvolvi um site educacional como parte de um projeto acadêmico.",
    results:
      "O resultado foi um site responsivo, com o conteúdo da LGPD apresentado em uma estrutura fácil de consultar.",
    tech: ["HTML", "SCSS", "JavaScript"],
    cover: lgpdCover,
    repo: "https://github.com/RhoanBarioni/LGPD_Facul",
    demo: "https://rhoanbarioni.github.io/LGPD_Facul/",
    demoLabel: "Ver demonstração",
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
    description: "Interfaces rápidas, acessíveis e fáceis de manter.",
    items: [
      { name: "JavaScript", note: "linguagem principal" },
      { name: "TypeScript", note: "tipagem estática" },
      { name: "React", note: "arquitetura de componentes" },
      { name: "Vite", note: "ferramentas de build" },
      { name: "HTML", note: "marcação semântica" },
      { name: "SCSS", note: "estilização organizada" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: "server",
    description:
      "Serviços e APIs, com foco crescente em linguagens compiladas.",
    items: [
      { name: "Go", note: "serviços e concorrência" },
      // { name: "Java", note: "OOP fundamentals" },
      // { name: "Node.js", note: "tooling and APIs" },
      { name: "REST APIs", note: "design e consumo" },
      { name: "Postman", note: "testes de API" },
    ],
  },
  {
    id: "database",
    title: "Banco de dados",
    icon: "database",
    description: "Modelagem e consulta de dados para necessidades reais.",
    items: [
      // { name: "PostgreSQL", note: "primary relational store" },
      { name: "MySQL", note: "projetos acadêmicos" },
      // { name: "SQLite", note: "local and embedded" },
    ],
  },
  {
    id: "devops",
    title: "DevOps",
    icon: "container",
    description: "Ambientes reproduzíveis e rotinas eficientes pelo terminal.",
    items: [
      { name: "Docker", note: "contêineres e Compose" },
      { name: "Linux", note: "uso diário" },
      { name: "CI básico", note: "verificações automatizadas" },
    ],
  },
  {
    id: "tools",
    title: "Ferramentas",
    icon: "wrench",
    description:
      "As ferramentas que utilizo no desenvolvimento dos meus projetos.",
    items: [
      { name: "Git", note: "controle de versão" },
      { name: "GitHub", note: "colaboração" },
      { name: "VS Code", note: "editor de código" },
      { name: "Figma", note: "design de interfaces" },
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
    title: "Primeiras linhas de código",
    description:
      "Comecei a estudar desenvolvimento de software e tecnologias web, criando pequenos projetos estáticos para entender os fundamentos.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    year: 2024,
    title: "Foco em frontend",
    description:
      "Aprofundei meus estudos em frontend com JavaScript, React e Vite e publiquei projetos acadêmicos e pessoais para usuários reais.",
    tags: ["React", "Vite", "SCSS"],
  },
  {
    year: 2025,
    title: "Entrada no backend",
    description:
      "Comecei a estudar desenvolvimento backend com Go e Java, além de Docker e Linux para criar ambientes reproduzíveis.",
    tags: ["Go", "Java", "Docker", "Linux"],
  },
  {
    year: 2026,
    title: "Full stack na prática",
    description:
      "Continuo evoluindo como desenvolvedor Full Stack, estudando arquitetura de software, design de APIs e bancos de dados junto com a graduação em Ciência da Computação.",
    tags: ["TypeScript", "PostgreSQL", "Arquitetura"],
  },
];

/** Repositories to surface first in the GitHub section, in this order. */
export const pinnedRepos = ["AcadMap", "ROYAL", "LGPD_Facul"];

export const navPages = [
  { to: "/", label: "Início" },
  { to: "/about", label: "Sobre" },
  { to: "/projects", label: "Projetos" },
  { to: "/experience", label: "Experiência" },
  { to: "/stack", label: "Stack" },
  { to: "/github", label: "GitHub" },
  { to: "/contact", label: "Contato" },
] as const;

export const yearsLearning = new Date().getFullYear() - timeline[0].year;

export const mainTechnologies = new Set(
  skillGroups.flatMap((g) => g.items.map((i) => i.name)),
).size;
