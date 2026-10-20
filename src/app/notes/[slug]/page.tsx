import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BackLink } from "@/components/BackLink";
import { getNote, notes } from "@/data/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return notes.map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) return {};
  return {
    title: note.title,
    description: note.summary,
  };
}

export default async function NotePage({ params }: Props) {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) notFound();

  return (
    <div className="mx-auto flex w-full max-w-xl flex-1 flex-col px-6 py-16 sm:px-8 sm:py-24">
      <BackLink />
      <article className="animate-fade-up">
        <h1 className="mb-2 text-2xl font-semibold tracking-tight text-foreground">
          {note.title}
        </h1>
        <p className="mb-8 text-[15px] text-muted">{note.summary}</p>
        <ul className="space-y-3">
          {note.body.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-[15px] leading-7 text-muted-strong"
            >
              <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-muted" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}
