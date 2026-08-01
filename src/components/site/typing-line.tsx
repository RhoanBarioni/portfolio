import { useEffect, useState } from "react";

/**
 * Terminal-style typing effect. Renders nothing typed on the server so
 * hydration always matches; the animation starts after mount and runs once.
 */
export function TypingLine({
  text,
  speed = 65,
}: {
  text: string;
  speed?: number;
}) {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      setTyped(text);
      return;
    }

    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setTyped(text.slice(0, i));
      if (i >= text.length) window.clearInterval(id);
    }, speed);

    return () => window.clearInterval(id);
  }, [text, speed]);

  return (
    <p className="flex items-center font-mono text-lg text-foreground sm:text-2xl">
      <span aria-hidden className="mr-3 text-primary">
        &gt;
      </span>
      <span aria-hidden>{typed}</span>
      <span className="sr-only">{text}</span>
      <span
        aria-hidden
        className="animate-caret ml-1 inline-block h-[1.1em] w-[0.55ch] translate-y-[0.12em] bg-primary"
      />
    </p>
  );
}
