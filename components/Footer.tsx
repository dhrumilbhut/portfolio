"use client";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-3">
        <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted/60">
          © {new Date().getFullYear()} Dhrumil Bhut — Ahmedabad, IN
        </p>
        <p className="hidden md:block font-mono text-[11px] tracking-[0.2em] uppercase text-muted/60">
          Built with Next.js
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted/60 hover:text-foreground transition-colors"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;
