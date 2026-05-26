import { Github, Linkedin, Mail } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const Contact = () => {
  const { ref: headerRef, revealStyle: headerReveal } = useInView();
  const { ref: contentRef, revealStyle: contentReveal } = useInView(100);

  return (
    <section id="contact" className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headerRef} style={headerReveal} className="flex items-center gap-6 mb-16">
          <h2 className="text-xl font-semibold whitespace-nowrap">Contact</h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div ref={contentRef} style={contentReveal} className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-foreground">
              Let's build something.
            </h3>
            <p className="text-[15px] text-muted-foreground leading-relaxed mb-8">
              Whether it's a new role, a side project, or just a chat about backend systems and AI. My inbox is open.
            </p>
            <a
              href="mailto:dhrumilbhut@gmail.com"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground border-b border-foreground/20 pb-0.5 hover:border-foreground transition-colors"
            >
              dhrumilbhut@gmail.com ↗
            </a>
          </div>

          <div className="flex flex-col gap-4 justify-start pt-1">
            <a
              href="https://github.com/dhrumilbhut"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-xl border border-border hover:border-foreground/20 hover:bg-card transition-all group"
            >
              <div className="flex items-center gap-3">
                <Github className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">GitHub</span>
              </div>
              <span className="text-xs text-muted-foreground/50 group-hover:text-muted-foreground transition-colors">
                github.com/dhrumilbhut ↗
              </span>
            </a>
            <a
              href="https://linkedin.com/in/dhrumilbhut"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-xl border border-border hover:border-foreground/20 hover:bg-card transition-all group"
            >
              <div className="flex items-center gap-3">
                <Linkedin className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">LinkedIn</span>
              </div>
              <span className="text-xs text-muted-foreground/50 group-hover:text-muted-foreground transition-colors">
                linkedin.com/in/dhrumilbhut ↗
              </span>
            </a>
            <a
              href="mailto:dhrumilbhut@gmail.com"
              className="flex items-center justify-between p-4 rounded-xl border border-border hover:border-foreground/20 hover:bg-card transition-all group"
            >
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Email</span>
              </div>
              <span className="text-xs text-muted-foreground/50 group-hover:text-muted-foreground transition-colors">
                dhrumilbhut@gmail.com ↗
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
