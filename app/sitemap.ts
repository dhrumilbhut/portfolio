import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const latestPostDate = posts[0]?.frontmatter.date;

  return [
    {
      url: site.url,
      lastModified: latestPostDate ? new Date(latestPostDate) : new Date(),
    },
    {
      url: `${site.url}/blog`,
      lastModified: latestPostDate ? new Date(latestPostDate) : new Date(),
    },
    ...posts.map((post) => ({
      url: `${site.url}/blog/${post.slug}`,
      lastModified: new Date(post.frontmatter.date),
    })),
  ];
}
