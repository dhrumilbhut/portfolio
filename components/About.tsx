"use client";

import { useEffect, useState } from 'react';
import { useInView } from '@/hooks/useInView';
import SectionHeading from '@/components/SectionHeading';

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

type StatProps = { to: number; suffix: string; label: string; decimals?: number };

// All four figures come from the résumé copy already on the site.
const stats: StatProps[] = [
  { to: 2.5, suffix: '+', label: 'Years shipping production software', decimals: 1 },
  { to: 8, suffix: '+', label: 'Projects shipped end-to-end' },
  { to: 1000, suffix: '+', label: 'Influencer channels served' },
  { to: 40, suffix: '%', label: 'Query time reduced in production' },
];

const StatCell = ({ to, suffix, label, decimals = 0, className = '' }: StatProps & { className?: string }) => {
  const { ref, inView } = useInView<HTMLDivElement>();
  const val = useCountUp(to, 1400, inView);
  const display = decimals > 0 ? val.toFixed(decimals) : Math.round(val).toString();
  return (
    <div ref={ref} className={`p-6 md:p-8 ${className}`}>
      <p className="font-serif text-4xl md:text-5xl text-accent-light tabular-nums">
        {display}
        {suffix}
      </p>
      <p className="text-sm text-muted mt-2 leading-snug">{label}</p>
    </div>
  );
};

const About = () => {
  const { ref: headRef, revealStyle: headReveal } = useInView();
  const { ref: bodyRef, revealStyle: bodyReveal } = useInView(120);

  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headRef} style={headReveal}>
          <SectionHeading number="01" label="About" tagline="The Engineer" />
        </div>

        <div ref={bodyRef} style={bodyReveal} className="grid md:grid-cols-2 gap-12 md:gap-16 mt-12">
          {/* Left — serif statement */}
          <h2 className="font-serif font-medium text-4xl md:text-5xl leading-[1.15] text-foreground">
            I build backends that stay up under load — and AI pipelines that{' '}
            <em className="text-accent-light">show their work</em>.
          </h2>

          {/* Right — bio, stats grid, currently */}
          <div>
            <p className="text-[15px] text-muted leading-relaxed mb-5">
              I&apos;m <strong className="text-foreground font-semibold">Dhrumil Bhut</strong>, a Software
              Engineer based in Ahmedabad, India, with 2.5+ years designing and shipping
              production-grade backend systems: scalable APIs, distributed job pipelines, and
              infra-heavy services built with{' '}
              <strong className="text-foreground font-semibold">Node.js, PostgreSQL, and AWS</strong>.
            </p>
            <p className="text-[15px] text-muted leading-relaxed mb-10">
              Beyond the request lifecycle, I work in{' '}
              <strong className="text-foreground font-semibold">Applied AI</strong>: RAG pipelines,
              multi-agent workflows, and MLOps — with a particular interest in evaluation and
              observability, because a pipeline you can&apos;t inspect is a pipeline you can&apos;t trust.
            </p>

            {/* Stats — bordered 2×2 grid (cells 2/4 get a left rule, 3/4 a top rule) */}
            <div className="grid grid-cols-2 border border-border rounded-2xl overflow-hidden">
              {stats.map((s, i) => (
                <StatCell
                  key={s.label}
                  {...s}
                  className={`${i % 2 === 1 ? 'border-l border-border' : ''} ${i >= 2 ? 'border-t border-border' : ''}`}
                />
              ))}
            </div>

            {/* Currently — accent-edged callout */}
            <div className="mt-6 rounded-xl border border-border border-l-2 border-l-accent bg-surface p-6">
              <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-accent-light mb-2">
                Currently
              </p>
              <p className="text-[15px] text-muted leading-relaxed">
                <strong className="text-foreground font-semibold">Software Engineer at Zuru Tech India</strong>{' '}
                — architecting the production backend of an influencer-management platform serving
                1000+ channels across Instagram, TikTok, and YouTube.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
