import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Github } from "lucide-react";
import { PageHeader, PageShell, Label, Tag } from "@/components/ui-kit/page";
import { Reveal } from "@/components/ui-kit/reveal";
import { projects, type Project } from "@/data/portfolio";

const TITLE = "Projects — Rhoan Barioni";
const DESCRIPTION =
  "Case studies of software built by Rhoan Barioni: AcadMap, ROYAL and LGPD_Facul — problem, solution, results and stack.";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Projects,
});

const CASE_FIELDS = [
  { key: "problem", label: "Problem" },
  { key: "solution", label: "Solution" },
  { key: "results", label: "Results" },
] as const;

function ProjectSection({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article
      aria-labelledby={`${project.id}-title`}
      className="border-t border-border py-20 first:border-t-0 sm:py-28"
    >
      <Reveal>
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-xs text-primary">
            {String(index + 1).padStart(2, "0")}
          </span>
          <Label>{project.year}</Label>
        </div>
        <h2
          id={`${project.id}-title`}
          className="mt-4 text-4xl font-semibold tracking-[-0.02em] sm:text-6xl"
        >
          {project.name}
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {project.summary}
        </p>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="mt-12 overflow-hidden rounded-xl border border-border bg-card">
          <div className="flex items-center gap-1.5 border-b border-border px-4 py-2.5">
            <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-muted" />
            <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-muted" />
            <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-muted" />
            <span className="ml-3 font-mono text-[0.7rem] text-muted-foreground">
              {project.demo ?? project.repo}
            </span>
          </div>
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`Open ${project.name} ${project.demoLabel}`}
              className="group block"
            >
              <img
                src={project.cover}
                alt={`${project.name} interface`}
                loading={index === 0 ? "eager" : "lazy"}
                draggable={false}
                width={1280}
                height={800}
                className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025] motion-reduce:transform-none motion-reduce:transition-none"
              />
            </a>
          ) : (
            <img
              src={project.cover}
              alt={`${project.name} interface`}
              loading={index === 0 ? "eager" : "lazy"}
              draggable={false}
              width={1280}
              height={800}
              className="aspect-[16/10] w-full object-cover"
            />
          )}
        </div>
      </Reveal>

      <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <Reveal delay={0.05}>
          <dl className="space-y-7">
            {CASE_FIELDS.map((field) => (
              <div key={field.key} className="border-l border-border pl-6">
                <dt>
                  <Label>{field.label}</Label>
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {project[field.key]}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-lg border border-border p-5">
            <Label>tech stack</Label>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {project.tech.map((tech) => (
                <li key={tech}>
                  <Tag>{tech}</Tag>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-5">
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-md border border-border px-3.5 py-2 text-sm transition-colors hover:border-border-strong hover:bg-surface"
                >
                  <Github aria-hidden className="h-4 w-4" />
                  Source
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group inline-flex items-center gap-2 rounded-md bg-primary px-3.5 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  {project.demoLabel}
                  <ArrowUpRight
                    aria-hidden
                    className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </article>
  );
}

function Projects() {
  return (
    <PageShell>
      <PageHeader
        command="ls -la ./projects"
        title="Things I designed, built and shipped."
        description="Three projects, each documented the way I'd document them for a team: the problem, the decision, the outcome."
      />

      <div className="mt-16">
        {projects.map((project, index) => (
          <ProjectSection key={project.id} project={project} index={index} />
        ))}
      </div>
    </PageShell>
  );
}
