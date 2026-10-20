import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-xl flex-1 flex-col justify-center px-6 py-24">
      <h1 className="mb-2 text-2xl font-semibold text-foreground">404</h1>
      <p className="mb-6 text-[15px] text-muted-strong">
        This page doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="text-sm text-muted transition-colors hover:text-foreground"
      >
        ← Home
      </Link>
    </div>
  );
}
