import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { TypingLine } from "@/components/site/typing-line";
import { Reveal } from "@/components/ui-kit/reveal";
import {
  profile,
  projects,
  timeline,
  mainTechnologies,
} from "@/data/portfolio";

const TITLE = "Rhoan Barioni — Full Stack Developer";
const DESCRIPTION =
  "Full Stack Developer and Computer Science student building web applications with React, TypeScript, Go and Java.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: profile.name,
          jobTitle: profile.role,
          email: `mailto:${profile.email}`,
          description: profile.about[0],
          sameAs: [profile.github, profile.linkedin],
        }),
      },
    ],
  }),
  component: Home,
});

const stats = [
  {
    label: "years learning",
    value: `${new Date().getFullYear() - timeline[0].year}+`,
  },
  { label: "shipped projects", value: String(projects.length) },
  { label: "technologies", value: String(mainTechnologies) },
];

function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 grid-field"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 ambient-blue"
        />

        <div className="relative mx-auto flex min-h-[calc(100dvh-4rem)] w-full max-w-5xl flex-col justify-center px-6 py-24">
          <Reveal>
            <p className="font-mono text-xs text-muted-foreground">
              <span
                aria-hidden
                className="availability-pulse mr-2 inline-flex h-1.5 w-1.5 translate-y-[-1px] align-middle"
              >
                <span className="relative z-10 h-full w-full rounded-full bg-primary" />
              </span>
              available for opportunities · {profile.location}
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-8 text-5xl font-semibold tracking-[-0.03em] sm:text-7xl">
              {profile.name}
            </h1>
          </Reveal>

          <div className="mt-6">
            <TypingLine text="Full Stack Developer_" />
          </div>

          <Reveal delay={0.15}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
              Computer Science student building web applications end to end —
              interfaces with React and TypeScript, services with Go and Java.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                View projects
                <ArrowRight
                  aria-hidden
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm transition-colors hover:border-border-strong hover:bg-surface"
              >
                <Mail aria-hidden className="h-4 w-4" />
                Get in touch
              </Link>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub profile"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
              >
                <Github aria-hidden className="h-4 w-4" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn profile"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
              >
                <Linkedin aria-hidden className="h-4 w-4" />
              </a>
              <Link
                to="/contact"
                aria-label="Contact"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
              >
                <Mail aria-hidden className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section aria-label="At a glance" className="border-t border-border">
        <dl className="mx-auto grid w-full max-w-5xl grid-cols-1 divide-y divide-border px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-0">
          {stats.map((stat) => (
            <div key={stat.label} className="px-0 py-8 sm:px-6">
              <dt className="font-mono text-[0.7rem] tracking-[0.16em] text-muted-foreground uppercase">
                {stat.label}
              </dt>
              <dd className="mt-2 text-3xl font-semibold tracking-tight">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}
