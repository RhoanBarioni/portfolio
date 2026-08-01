import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

export function PageShell({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn("mx-auto w-full max-w-5xl px-6 py-16 sm:py-24", className)}
    >
      {children}
    </div>
  );
}

export function PageHeader({
  command,
  title,
  description,
}: {
  command: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="max-w-2xl">
      <p className="font-mono text-xs text-muted-foreground">
        <span className="text-primary">$</span> {command}
      </p>
      <h1 className="mt-5 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}

export function Label({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "font-mono text-[0.7rem] tracking-[0.16em] text-muted-foreground uppercase",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded border border-border px-2 py-0.5 font-mono text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground">
      {children}
    </span>
  );
}
