import { getAllPosts } from '@/lib/blog';
import { externalPosts } from '@/lib/external-posts';
import WritingList, { type WritingEntry } from '@/components/WritingList';

// Server component: merges MDX blog posts with legacy external Medium posts,
// newest first, capped at 5 — the "Recent Writing" data behind the existing
// Writing section design.
const Writing = () => {
  const internal: WritingEntry[] = getAllPosts().map((post) => ({
    title: post.frontmatter.title,
    date: post.frontmatter.date,
    tags: post.frontmatter.tags,
    preview: post.frontmatter.description,
    href: `/blog/${post.slug}`,
    external: false,
    readingTime: post.readingTime,
  }));

  const external: WritingEntry[] = externalPosts.map((post) => ({
    title: post.title,
    date: post.date,
    tags: post.tags,
    preview: post.preview,
    href: post.link,
    external: true,
  }));

  const entries = [...internal, ...external]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 5);

  return <WritingList entries={entries} />;
};

export default Writing;
