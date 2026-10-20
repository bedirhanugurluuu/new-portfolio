import { site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="animate-fade-up delay-4 mt-16 border-t border-border pt-6">
      <p className="font-mono text-xs tracking-[0.2em] text-muted uppercase">
        {site.location}
      </p>
    </footer>
  );
}
