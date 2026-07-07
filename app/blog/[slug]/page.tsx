import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import { mdxComponents } from "@/components/mdx";
import { getAdjacentPosts, getAllPosts, getPostBySlug } from "@/lib/blog";
import { formatDate, site } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      type: "article",
      publishedTime: post.frontmatter.date,
      authors: [site.name],
      url: `${site.url}/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { newer, older } = getAdjacentPosts(slug);

  const { content } = await compileMDX({
    source: post.content,
    components: mdxComponents,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          [
            rehypePrettyCode,
            {
              theme: "min-dark",
              keepBackground: false,
            },
          ],
        ],
      },
    },
  });

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.frontmatter.title,
    description: post.frontmatter.description,
    datePublished: post.frontmatter.date,
    url: `${site.url}/blog/${post.slug}`,
    author: {
      "@type": "Person",
      name: site.name,
      url: site.url,
    },
  };

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
        <article>
          <header>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-foreground">
              {post.frontmatter.title}
            </h1>
            <p className="mt-4 text-xs text-muted-foreground/50">
              <time dateTime={post.frontmatter.date}>
                {formatDate(post.frontmatter.date)}
              </time>{" "}
              · {post.readingTime}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {post.frontmatter.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 rounded bg-secondary border border-border/60 text-muted-foreground/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>
          <div className="mt-10">{content}</div>
          {post.frontmatter.closing && (
            <p className="mt-12 pt-8 border-t border-border text-[15px] text-muted-foreground leading-relaxed">
              {post.frontmatter.closing}
            </p>
          )}
        </article>
        <nav
          className="mt-16 flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between"
          aria-label="Adjacent posts"
        >
          <span>
            {older && (
              <Link
                href={`/blog/${older.slug}`}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                ← {older.frontmatter.title}
              </Link>
            )}
          </span>
          <span>
            {newer && (
              <Link
                href={`/blog/${newer.slug}`}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {newer.frontmatter.title} →
              </Link>
            )}
          </span>
        </nav>
        <p className="mt-10 text-sm">
          <Link
            href="/blog"
            className="text-muted-foreground/50 hover:text-foreground transition-colors"
          >
            ← All posts
          </Link>
        </p>
      </div>
    </div>
  );
}
