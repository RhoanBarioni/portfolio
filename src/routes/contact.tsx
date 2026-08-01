import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import { PageHeader, PageShell, Label } from "@/components/ui-kit/page";
import { Reveal } from "@/components/ui-kit/reveal";
import { profile } from "@/data/portfolio";

const TITLE = "Rhoan Barioni - Software Developer";
const DESCRIPTION =
  "Entre em contato comigo por email, LinkedIn, GitHub ou Instagram. Estou aberto a estágios, vagas júnior e projetos freelance.";

export const Route = createFileRoute("/contact")({
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
  component: Contact,
});

const channels = [
  {
    id: "email",
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "in/rhoanbarioni",
    href: profile.linkedin,
    icon: Linkedin,
  },
  {
    id: "github",
    label: "GitHub",
    value: `@${profile.githubUser}`,
    icon: Github,
    href: profile.github,
  },
  {
    id: "instagram",
    label: "Instagram",
    value: `@${profile.instagramUser}`,
    icon: Instagram,
    href: profile.instagram,
  },
];

function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    const next: Record<string, string> = {};
    if (!name) next.name = "Informe seu nome.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Informe um email válido.";
    if (message.length < 10)
      next.message = "Escreva uma mensagem com pelo menos 10 caracteres.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const subject = encodeURIComponent(`Contato pelo portfólio — ${name}`);
    const body = encodeURIComponent(`${message}\n\n—\n${name}\n${email}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  const field =
    "mt-2 w-full rounded-md border border-border bg-surface px-3 py-2 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";

  return (
    <PageShell>
      <PageHeader
        command="ping rhoan --message"
        title="Vamos conversar."
        description="Estou aberto a estágios, oportunidades como desenvolvedor Full Stack júnior e projetos freelance. Respondo pessoalmente a todas as mensagens."
      />

      <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <Reveal>
          <ul className="divide-y divide-border border-y border-border">
            {channels.map((channel) => (
              <li key={channel.id}>
                <a
                  href={channel.href}
                  {...(channel.id === "email"
                    ? {}
                    : { target: "_blank", rel: "noreferrer noopener" })}
                  className="group flex items-center justify-between gap-4 py-4 transition-colors hover:text-primary"
                >
                  <span className="flex items-center gap-3">
                    <channel.icon
                      aria-hidden
                      className="h-4 w-4 text-muted-foreground"
                    />
                    <span className="text-sm">{channel.label}</span>
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {channel.value}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.06}>
          <form
            onSubmit={onSubmit}
            noValidate
            className="rounded-lg border border-border p-6"
          >
            <Label>escrever mensagem</Label>

            <div className="mt-5">
              <label htmlFor="name" className="text-sm text-muted-foreground">
                Nome
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                className={field}
              />
              {errors.name && (
                <p className="mt-1.5 font-mono text-xs text-destructive">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="mt-4">
              <label htmlFor="email" className="text-sm text-muted-foreground">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className={field}
              />
              {errors.email && (
                <p className="mt-1.5 font-mono text-xs text-destructive">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="mt-4">
              <label
                htmlFor="message"
                className="text-sm text-muted-foreground"
              >
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className={field}
              />
              {errors.message && (
                <p className="mt-1.5 font-mono text-xs text-destructive">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Mail aria-hidden className="h-4 w-4" />
              Abrir no aplicativo de email
            </button>
            <p className="mt-3 font-mono text-[0.7rem] text-muted-foreground">
              sem backend · abre seu aplicativo de email padrão
            </p>
          </form>
        </Reveal>
      </div>
    </PageShell>
  );
}
