import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BackLink } from "@/components/BackLink";
import { blogs, getBlog } from "@/data/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlog(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlog(slug);
  if (!post) notFound();

  return (
    <div className="mx-auto flex w-full max-w-xl flex-1 flex-col px-6 py-16 sm:px-8 sm:py-24">
      <BackLink />
      <article className="animate-fade-up">
        <header className="mb-8">
          <h1 className="mb-3 text-2xl font-semibold tracking-tight text-foreground sm:text-[1.75rem]">
            {post.title}
          </h1>
          <time
            dateTime={post.date}
            className="font-mono text-xs tracking-wide text-muted"
          >
            {post.displayDate}
          </time>
        </header>
        <div className="space-y-4 text-[15px] leading-7 text-muted-strong">
          {post.body.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
      </article>
    </div>
  );
}
