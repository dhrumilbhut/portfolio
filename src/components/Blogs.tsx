import { ArrowUpRight } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { blogs, type Blog } from '@/data/blogs';

const formatDate = (iso: string) => {
  const [year, month] = iso.split('-').map(Number);
  return new Date(year, month - 1).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });
};

const BlogRow = ({ blog, index }: { blog: Blog; index: number }) => {
  const { ref, revealStyle } = useInView<HTMLAnchorElement>(index * 80);

  return (
    <a
      ref={ref}
      href={blog.link}
      target="_blank"
      rel="noopener noreferrer"
      style={revealStyle}
      className="group grid md:grid-cols-[200px_1fr] gap-6 md:gap-12 py-6 border-b border-border last:border-0 hover:bg-card rounded-xl px-4 -mx-4 transition-colors duration-200"
    >
      {/* Left — date + tags */}
      <div className="flex flex-col gap-3 pt-0.5">
        <span className="text-xs text-muted-foreground/50">{formatDate(blog.date)}</span>
        <div className="flex flex-wrap gap-1.5">
          {blog.tags.map((tag) => (
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
            {blog.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {blog.preview}
          </p>
        </div>
        <ArrowUpRight className="w-4 h-4 text-muted-foreground/25 group-hover:text-foreground flex-shrink-0 mt-0.5 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </a>
  );
};

const Blogs = () => {
  const { ref, revealStyle } = useInView();

  return (
    <section id="blogs" className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} style={revealStyle} className="flex items-center gap-6 mb-12">
          <h2 className="text-xl font-semibold whitespace-nowrap">Writing</h2>
          <div className="h-px flex-1 bg-border" />
          <a
            href="https://medium.com/@dhrumilbhut"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground/50 hover:text-foreground transition-colors whitespace-nowrap"
          >
            Medium ↗
          </a>
        </div>

        <div>
          {blogs.map((blog, i) => (
            <BlogRow key={blog.link} blog={blog} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
