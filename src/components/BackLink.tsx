import Link from "next/link";

export function BackLink() {
  return (
    <Link
      href="/"
      className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted transition-colors duration-200 hover:text-foreground"
    >
      <span aria-hidden>←</span>
      Home
    </Link>
  );
}
