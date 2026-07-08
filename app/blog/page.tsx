import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import { WritingRow, type WritingEntry } from "@/components/WritingList";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Writing on backend engineering, RAG pipelines, and production AI infrastructure.",
};

export default function BlogPage() {
  const entries: WritingEntry[] = getAllPosts().map((post) => ({
    title: post.frontmatter.title,
    date: post.frontmatter.date,
    tags: post.frontmatter.tags,
    preview: post.frontmatter.description,
    href: `/blog/${post.slug}`,
    external: false,
    readingTime: post.readingTime,
  }));

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-6 mb-12">
          <h1 className="font-serif font-medium text-4xl md:text-5xl whitespace-nowrap">Writing</h1>
          <div className="h-px flex-1 bg-border" />
          <a
            href="https://medium.com/@dhrumilbhut"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs tracking-[0.15em] uppercase text-muted-foreground/60 hover:text-foreground transition-colors whitespace-nowrap"
          >
            Medium ↗
          </a>
        </div>

        <div>
          {entries.map((entry, i) => (
            <WritingRow key={entry.href} entry={entry} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
