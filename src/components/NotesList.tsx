import Link from "next/link";
import { notes } from "@/data/site";

export function NotesList() {
  return (
    <section className="animate-fade-up delay-2">
      <h2 className="mb-3 text-sm font-medium tracking-wide text-foreground">
        Notes
      </h2>
      <ul className="space-y-1.5">
        {notes.map((note) => (
          <li key={note.slug}>
            <Link
              href={`/notes/${note.slug}`}
              className="group inline-flex items-baseline gap-2 text-[15px] text-muted-strong transition-colors duration-200 hover:text-link-hover"
            >
              <span
                className="text-muted transition-colors group-hover:text-foreground"
                aria-hidden
              >
                *
              </span>
              <span className="underline decoration-transparent underline-offset-4 transition-[text-decoration-color] duration-200 group-hover:decoration-muted">
                {note.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
