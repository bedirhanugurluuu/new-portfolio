import Link from "next/link";
import { site } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="animate-fade-up mb-10">
      <Link
        href="/"
        className="inline-block text-2xl font-semibold tracking-tight text-foreground transition-opacity duration-200 hover:opacity-80 sm:text-[1.75rem]"
      >
        {site.handle}
      </Link>
    </header>
  );
}
