"use client";

const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden">
      {/* Soft accent glows anchoring the type */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-10%] w-[560px] h-[560px] rounded-full opacity-[0.07]"
        style={{ background: 'radial-gradient(circle, #8B5CF6 0%, transparent 70%)' }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-20%] left-[-10%] w-[480px] h-[480px] rounded-full opacity-[0.05]"
        style={{ background: 'radial-gradient(circle, #67E8F9 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto px-6 w-full py-24">
        <p className="flex items-center gap-2.5 font-mono text-xs tracking-[0.25em] uppercase text-muted mb-8 animate-fade-up">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" aria-hidden="true" />
          Software Engineer — Ahmedabad, IN
        </p>

        <p className="font-serif italic text-2xl md:text-3xl text-muted mb-2 animate-fade-up">
          Hi, I&apos;m
        </p>

        <h1 className="font-serif font-medium leading-[1.05] mb-8 animate-fade-up-delay-1">
          <span className="block text-6xl sm:text-7xl lg:text-8xl text-foreground">Dhrumil</span>
          <span className="block text-6xl sm:text-7xl lg:text-8xl text-accent-light">Bhut</span>
        </h1>

        <p className="max-w-xl text-lg text-muted leading-relaxed mb-10 animate-fade-up-delay-2">
          2.5+ years crafting <strong className="text-foreground font-semibold">scalable backend systems</strong> —
          distributed job pipelines, infra-heavy APIs, and the{' '}
          <strong className="text-foreground font-semibold">applied-AI layer</strong> on top: RAG pipelines,
          multi-agent workflows, and MLOps.
        </p>

        <div className="flex flex-wrap items-center gap-6 animate-fade-up-delay-3">
          <button
            onClick={() => scrollTo('contact')}
            className="btn-accent px-7 py-3 text-sm font-semibold rounded-lg"
          >
            Let&apos;s talk →
          </button>
          <button
            onClick={() => scrollTo('projects')}
            className="text-sm font-medium text-foreground border-b border-foreground/40 pb-0.5 hover:border-foreground transition-colors"
          >
            View selected work
          </button>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted border-b border-transparent pb-0.5 hover:text-foreground hover:border-foreground/40 transition-colors"
          >
            Resume ↗
          </a>
        </div>
      </div>

      {/* Bottom strip — scroll cue */}
      <div className="absolute bottom-6 left-0 right-0">
        <div className="max-w-6xl mx-auto px-6 flex items-end justify-center">
          <div className="hidden sm:flex flex-col items-center gap-2">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted/70">Scroll</span>
            <span className="w-px h-8 bg-border" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
