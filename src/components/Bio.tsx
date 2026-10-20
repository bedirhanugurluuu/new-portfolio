"use client";

import { useState } from "react";
import { bio } from "@/data/site";

type Mode = "default" | "long";

export function Bio() {
  const [mode, setMode] = useState<Mode>("default");
  const text = mode === "default" ? bio.default : bio.long;

  return (
    <section className="animate-fade-up delay-1">
      <div className="mb-3 flex items-end justify-between gap-4 border-b border-border">
        <h2 className="pb-2 text-sm font-medium tracking-wide text-foreground">
          Bio
        </h2>
        <div
          className="flex items-end gap-1 text-sm text-muted"
          role="tablist"
          aria-label="Bio length"
        >
          <button
            type="button"
            role="tab"
            aria-selected={mode === "default"}
            onClick={() => setMode("default")}
            className={`-mb-px border-b-2 px-1.5 pb-2 pt-0.5 transition-colors duration-200 ${
              mode === "default"
                ? "border-white text-foreground"
                : "border-transparent text-muted hover:text-muted-strong"
            }`}
          >
            Default
          </button>
          <span className="px-0.5 pb-2 text-border" aria-hidden>
            ·
          </span>
          <button
            type="button"
            role="tab"
            aria-selected={mode === "long"}
            onClick={() => setMode("long")}
            className={`-mb-px border-b-2 px-1.5 pb-2 pt-0.5 transition-colors duration-200 ${
              mode === "long"
                ? "border-white text-foreground"
                : "border-transparent text-muted hover:text-muted-strong"
            }`}
          >
            Long
          </button>
        </div>
      </div>
      <div
        key={mode}
        className="animate-fade-in space-y-4 text-[15px] leading-7 text-muted-strong whitespace-pre-line"
      >
        {text.split("\n\n").map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
