import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

function useCountUp(to: number, duration: number, active: boolean) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let id: number;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      setVal((1 - Math.pow(1 - p, 3)) * to);
      if (p < 1) id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [active, to, duration]);
  return val;
}

type StatProps = { to: number; suffix: string; label: string; decimals?: number; delay?: number };

const StatItem = ({ to, suffix, label, decimals = 0, delay = 0 }: StatProps) => {
  const { ref, inView, revealStyle } = useInView<HTMLDivElement>(delay);
  const val = useCountUp(to, 1400, inView);
  const display = decimals > 0 ? val.toFixed(decimals) : Math.round(val).toString();
  return (
    <div ref={ref} style={revealStyle}>
      <p className="text-2xl font-bold text-foreground tabular-nums">
        {display}{suffix}
      </p>
      <p className="text-xs text-muted-foreground/50 mt-1 uppercase tracking-widest">{label}</p>
    </div>
  );
};

const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="min-h-screen flex flex-col justify-center pt-16">
      <div className="max-w-6xl mx-auto px-6 w-full py-24">

        {/* Large name — confident and editorial */}
        <div className="animate-fade-up mb-6">
          <h1 className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold tracking-tight leading-tight text-foreground whitespace-nowrap">
            Dhrumil Bhut
          </h1>
        </div>

        {/* Horizontal rule */}
        <div className="h-px bg-border w-full mb-10 animate-fade-up-delay-1" />

        {/* Two-column below the rule */}
        <div className="grid md:grid-cols-2 gap-12 animate-fade-up-delay-2">
          {/* Left — role + description */}
          <div>
            <p className="text-lg font-medium text-foreground/80 mb-4">
              Software Engineer, Backend Systems & API Development
            </p>
            <p className="text-[15px] text-muted-foreground leading-relaxed max-w-md mb-8">
              2.5+ years designing and shipping production-grade backend systems: scalable APIs,
              distributed job pipelines, and infra-heavy services built with Node.js, PostgreSQL,
              and AWS. Also skilled in Applied AI: RAG pipelines, multi-agent workflows, and MLOps.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 text-sm font-medium bg-foreground text-background rounded-full hover:bg-foreground/90 transition-colors"
              >
                View Resume ↗
              </a>
              <button
                onClick={() => scrollTo('contact')}
                className="px-6 py-2.5 text-sm font-medium border border-border text-muted-foreground rounded-full hover:text-foreground hover:border-foreground/30 transition-colors"
              >
                Get in Touch
              </button>
            </div>

            {/* Stats */}
            <div className="mt-12 pt-8 border-t border-border/40 grid grid-cols-2 gap-6">
              <StatItem to={2.5} suffix="+" label="Years Experience" decimals={1} delay={0} />
              <StatItem to={8} suffix="+" label="Projects Shipped" delay={80} />
            </div>
          </div>

          {/* Right — location + social */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-xs text-muted-foreground/50 uppercase tracking-widest mb-2">Based in</p>
              <p className="text-sm text-muted-foreground mb-8">Ahmedabad, India</p>

              <p className="text-xs text-muted-foreground/50 uppercase tracking-widest mb-2">Currently</p>
              <p className="text-sm text-muted-foreground mb-8">
                Software Engineer at Zuru Tech India
              </p>

              <p className="text-xs text-muted-foreground/50 uppercase tracking-widest mb-3">Find me</p>
              <div className="flex items-center gap-5">
                <a
                  href="https://github.com/dhrumilbhut"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/dhrumilbhut"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:dhrumilbhut@gmail.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
