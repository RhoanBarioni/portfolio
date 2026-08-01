import { Link } from "@tanstack/react-router";
import { profile } from "@/data/portfolio";

const BUILT_WITH = ["React", "TypeScript", "Tailwind"];

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-6 py-10 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="text-muted-foreground">
          Designed &amp; developed by <span className="text-foreground">{profile.name}</span>
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          built with{" "}
          {BUILT_WITH.map((item, i) => (
            <span key={item}>
              <span className="text-foreground">{item}</span>
              {i < BUILT_WITH.length - 1 ? " · " : ""}
            </span>
          ))}
        </p>
        <div className="flex items-center gap-4 text-muted-foreground">
          <a href={profile.github} target="_blank" rel="noreferrer noopener" className="hover:text-foreground">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer noopener" className="hover:text-foreground">
            LinkedIn
          </a>
          <Link to="/contact" className="hover:text-foreground">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
