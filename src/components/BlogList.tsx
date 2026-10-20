import Link from "next/link";
import { blogs } from "@/data/site";

export function BlogList() {
  return (
    <section className="animate-fade-up delay-3">
      <h2 className="mb-3 text-sm font-medium tracking-wide text-foreground">
        Blogs
      </h2>
      <ul className="space-y-2.5">
        {blogs.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
            >
              <span className="text-[15px] text-muted-strong transition-colors duration-200 group-hover:text-link-hover">
                {post.title}
              </span>
              <time
                dateTime={post.date}
                className="shrink-0 font-mono text-xs tracking-wide text-muted transition-colors duration-200 group-hover:text-muted-strong"
              >
                {post.displayDate}
              </time>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
