import { Feed } from "feed";
import { getAllPosts } from "@/lib/blog";
import { site, siteDescription } from "@/lib/site";

export const dynamic = "force-static";
// Rebuild daily so the channel description keeps the years figure current.
export const revalidate = 86400;

export async function GET() {
  const posts = getAllPosts();

  const feed = new Feed({
    title: site.name,
    description: siteDescription(),
    id: site.url,
    link: site.url,
    language: "en",
    favicon: `${site.url}/favicon.svg`,
    copyright: `© ${new Date().getFullYear()} ${site.name}`,
    feedLinks: {
      rss: `${site.url}/feed.xml`,
    },
    author: {
      name: site.name,
      email: site.email,
      link: site.url,
    },
  });

  for (const post of posts) {
    feed.addItem({
      title: post.frontmatter.title,
      id: `${site.url}/blog/${post.slug}`,
      link: `${site.url}/blog/${post.slug}`,
      description: post.frontmatter.description,
      date: new Date(`${post.frontmatter.date}T00:00:00Z`),
      category: post.frontmatter.tags.map((tag) => ({ name: tag })),
    });
  }

  return new Response(feed.rss2(), {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
