import { createFileRoute } from "@tanstack/react-router";
import { Container, Database, LayoutGrid, Server, Wrench } from "lucide-react";
import { PageHeader, PageShell } from "@/components/ui-kit/page";
import { Reveal } from "@/components/ui-kit/reveal";
import { skillGroups, type SkillIcon } from "@/data/portfolio";

const TITLE = "Rhoan Barioni - Software Developer";
const DESCRIPTION =
  "The frontend, backend, database, DevOps and tooling technologies Rhoan Barioni works with every day.";

export const Route = createFileRoute("/stack")({
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
  component: Stack,
});

const ICONS: Record<SkillIcon, typeof Server> = {
  layout: LayoutGrid,
  server: Server,
  database: Database,
  container: Container,
  wrench: Wrench,
};

function Stack() {
  return (
    <PageShell>
      <PageHeader
        command="cat stack.json"
        title="The tools I reach for."
        description="Not a badge wall — just what I actually use, grouped by where it sits in the system."
      />

      <div className="mt-16 divide-y divide-border border-y border-border">
        {skillGroups.map((group, index) => {
          const Icon = ICONS[group.icon];
          return (
            <Reveal key={group.id} delay={0.04 * index}>
              <section
                aria-labelledby={`${group.id}-title`}
                className="grid gap-8 py-12 lg:grid-cols-[16rem_minmax(0,1fr)]"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <Icon
                      aria-hidden
                      className="h-4 w-4 text-muted-foreground"
                    />
                    <h2
                      id={`${group.id}-title`}
                      className="text-lg font-medium tracking-tight"
                    >
                      {group.title}
                    </h2>
                  </div>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                    {group.description}
                  </p>
                </div>

                <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
                  {group.items.map((item) => (
                    <li
                      key={item.name}
                      className="group flex items-baseline justify-between gap-4 bg-background px-4 py-3 transition-colors hover:bg-surface"
                    >
                      <span className="text-sm transition-colors group-hover:text-primary">
                        {item.name}
                      </span>
                      <span className="font-mono text-[0.7rem] text-muted-foreground">
                        {item.note}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          );
        })}
      </div>
    </PageShell>
  );
}
