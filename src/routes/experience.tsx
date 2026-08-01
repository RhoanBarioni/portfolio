import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell, Label, Tag } from "@/components/ui-kit/page";
import { Reveal } from "@/components/ui-kit/reveal";
import { timeline } from "@/data/portfolio";

const TITLE = "Experience — Rhoan Barioni";
const DESCRIPTION =
  "The path from first lines of code in 2023 to full stack engineering in 2026: what Rhoan Barioni learned and built each year.";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Experience,
});

function Experience() {
  return (
    <PageShell>
      <PageHeader
        command="git log --reverse --oneline"
        title="A deliberate path, year by year."
        description="No shortcuts — a steady progression from markup to systems."
      />

      <ol className="mt-16 border-l border-border">
        {timeline.map((entry, index) => (
          <Reveal as="li" key={entry.year} delay={0.06 * index} className="relative pb-14 pl-8 last:pb-0 sm:pl-12">
            <span
              aria-hidden
              className="absolute top-1.5 -left-[4.5px] h-2 w-2 rounded-full bg-primary"
            />
            <div className="flex flex-wrap items-baseline gap-x-4">
              <span className="font-mono text-sm text-primary">{entry.year}</span>
              <h2 className="text-xl font-medium tracking-tight sm:text-2xl">{entry.title}</h2>
            </div>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {entry.description}
            </p>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {entry.tags.map((tag) => (
                <li key={tag}>
                  <Tag>{tag}</Tag>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ol>

      <Reveal>
        <p className="mt-4 border-l border-border pl-8 font-mono text-xs text-muted-foreground sm:pl-12">
          <Label>HEAD -&gt; main</Label>
        </p>
      </Reveal>
    </PageShell>
  );
}
