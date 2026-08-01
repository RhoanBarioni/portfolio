import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell, Label } from "@/components/ui-kit/page";
import { Reveal } from "@/components/ui-kit/reveal";
import { profile, skillGroups, timeline } from "@/data/portfolio";

const TITLE = "Rhoan Barioni - Software Developer";
const DESCRIPTION =
  "Who I am, what I build and where I'm heading: Rhoan Barioni, Full Stack Developer and Computer Science student in Brazil.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: About,
});

const facts = [
  { key: "location", value: profile.location },
  { key: "role", value: `${profile.role} · ${profile.tagline}` },
  { key: "focus", value: "Backend engineering, API design, architecture" },
  { key: "since", value: String(timeline[0].year) },
];

function About() {
  return (
    <PageShell>
      <PageHeader
        command="cat about.md"
        title="Engineer first, portfolio second."
        description="A short, honest summary of how I work and what I'm building toward."
      />

      <div className="mt-16 grid gap-14 lg:grid-cols-[minmax(0,1fr)_16rem]">
        <div className="space-y-10">
          {[
            { heading: "Who I am", body: profile.about[0] },
            { heading: "What I build", body: profile.about[1] },
            { heading: "What I'm learning", body: profile.about[2] },
            { heading: "Where I'm going", body: profile.about[3] },
          ].map((block, i) => (
            <Reveal key={block.heading} delay={0.05 * i}>
              <article className="border-l border-border pl-6">
                <Label>{block.heading}</Label>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {block.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <aside className="rounded-lg border border-border p-5">
            <Label>profile</Label>
            <dl className="mt-4 space-y-3 font-mono text-xs">
              {facts.map((fact) => (
                <div key={fact.key}>
                  <dt className="text-muted-foreground">{fact.key}</dt>
                  <dd className="mt-0.5 text-foreground">{fact.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-6 border-t border-border pt-4">
              <Label>daily tools</Label>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {skillGroups
                  .flatMap((g) => g.items.slice(0, 2))
                  .map((item) => (
                    <li
                      key={item.name}
                      className="rounded border border-border px-2 py-0.5 font-mono text-[0.7rem] text-muted-foreground"
                    >
                      {item.name}
                    </li>
                  ))}
              </ul>
            </div>
          </aside>
        </Reveal>
      </div>
    </PageShell>
  );
}
