"use client";

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

export type WritingEntry = {
  title: string;
  date: string; // ISO
  tags: string[];
  preview: string;
  href: string;
  external: boolean;
  readingTime?: string;
};

const formatDate = (iso: string) => {
  const [year, month] = iso.split('-').map(Number);
  return new Date(year, month - 1).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });
};

const rowClassName =
  'group grid md:grid-cols-[200px_1fr] gap-6 md:gap-12 py-6 border-b border-border last:border-0 hover:bg-card rounded-xl px-4 -mx-4 transition-colors duration-200';

const RowContent = ({ entry }: { entry: WritingEntry }) => (
  <>
    {/* Left — date + tags */}
    <div className="flex flex-col gap-3 pt-0.5">
      <span className="text-xs text-muted-foreground/50">
        {formatDate(entry.date)}
        {entry.readingTime ? ` · ${entry.readingTime}` : ''}
      </span>
      <div className="flex flex-wrap gap-1.5">
        {entry.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded bg-secondary border border-border/60 text-muted-foreground/70"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>

    {/* Right — title + preview + arrow */}
    <div className="flex items-start justify-between gap-6">
      <div className="flex-1 min-w-0">
        <h3 className="text-[15px] font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-200 mb-2 leading-snug">
          {entry.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {entry.preview}
        </p>
      </div>
      <ArrowUpRight className="w-4 h-4 text-muted-foreground/25 group-hover:text-foreground flex-shrink-0 mt-0.5 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </div>
  </>
);

export const WritingRow = ({ entry, index }: { entry: WritingEntry; index: number }) => {
  const { ref, revealStyle } = useInView<HTMLAnchorElement>(index * 80);

  if (entry.external) {
    return (
      <a
        ref={ref}
        href={entry.href}
        target="_blank"
        rel="noopener noreferrer"
        style={revealStyle}
        className={rowClassName}
      >
        <RowContent entry={entry} />
      </a>
    );
  }

  return (
    <Link ref={ref} href={entry.href} style={revealStyle} className={rowClassName}>
      <RowContent entry={entry} />
    </Link>
  );
};

const WritingList = ({ entries }: { entries: WritingEntry[] }) => {
  const { ref, revealStyle } = useInView();

  return (
    <section id="blogs" className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} style={revealStyle} className="flex items-center gap-6 mb-12">
          <h2 className="text-xl font-semibold whitespace-nowrap">Writing</h2>
          <div className="h-px flex-1 bg-border" />
          <Link
            href="/blog"
            className="text-xs text-muted-foreground/50 hover:text-foreground transition-colors whitespace-nowrap"
          >
            All posts →
          </Link>
        </div>

        <div>
          {entries.map((entry, i) => (
            <WritingRow key={entry.href} entry={entry} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WritingList;
