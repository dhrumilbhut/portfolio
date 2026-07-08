"use client";

import { useInView } from '@/hooks/useInView';

const socials = [
  { label: 'GitHub', href: 'https://github.com/dhrumilbhut' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/dhrumilbhut' },
  { label: 'Email', href: 'mailto:dhrumilbhut@gmail.com' },
];

const Contact = () => {
  const { ref, revealStyle } = useInView();

  return (
    <section id="contact" className="py-32">
      <div ref={ref} style={revealStyle} className="max-w-4xl mx-auto px-6 text-center">
        <p className="font-mono text-xs tracking-[0.25em] uppercase text-accent-light mb-10">
          07 / Contact
        </p>

        <h2 className="font-serif font-medium uppercase leading-[1.08] text-5xl sm:text-6xl md:text-7xl text-foreground mb-8">
          Let&apos;s build
          <br />
          something <em className="text-accent-light">solid</em>
        </h2>

        <p className="max-w-md mx-auto text-[15px] text-muted leading-relaxed mb-12">
          Whether it&apos;s a side project, a collaboration, or just a chat about backend systems
          and AI — my inbox is open.
        </p>

        <a
          href="mailto:dhrumilbhut@gmail.com"
          className="btn-accent inline-flex items-center gap-3 font-mono text-sm tracking-[0.15em] uppercase px-8 py-4 rounded-full"
        >
          dhrumilbhut@gmail.com
          <span aria-hidden="true">→</span>
        </a>

        <div className="flex items-center justify-center gap-8 mt-14">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="font-mono text-xs tracking-[0.25em] uppercase text-muted hover:text-foreground transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
