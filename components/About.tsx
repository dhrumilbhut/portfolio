"use client";

import { useEffect, useState } from 'react';
import { useInView } from '@/hooks/useInView';
import SectionHeading from '@/components/SectionHeading';
import { useYearsOfExperience } from '@/hooks/useYearsOfExperience';
import { formatYears } from '@/lib/site';

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

// Years figure is computed from site.careerStart; the rest come from the experience copy.
const buildStats = (years: number): StatProps[] => [
  { to: years, suffix: '+', label: 'Years in production', decimals: Number.isInteger(years) ? 0 : 1 },
  { to: 1000, suffix: '+', label: 'Channels in the YouTube analytics sync' },
  { to: 20, suffix: 'K+', label: 'Media assets in the brand asset library' },
  { to: 40, suffix: '%', label: 'Cut in query time' },
];

const StatCell = ({ to, suffix, label, decimals = 0, className = '' }: StatProps & { className?: string }) => {
  const { ref, inView } = useInView<HTMLDivElement>();
  const val = useCountUp(to, 1400, inView);
  const display =
    decimals > 0 ? val.toFixed(decimals) : Math.round(val).toLocaleString('en-US');
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

const About = ({ serverYears }: { serverYears: number }) => {
  const { ref: headRef, revealStyle: headReveal } = useInView();
  const { ref: bodyRef, revealStyle: bodyReveal } = useInView(120);
  const years = useYearsOfExperience(serverYears);
  const stats = buildStats(years);

  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headRef} style={headReveal}>
          <SectionHeading number="01" label="About" tagline="The Engineer" />
        </div>

        <div ref={bodyRef} style={bodyReveal} className="grid md:grid-cols-2 gap-12 md:gap-16 mt-12">
          {/* Left — serif statement */}
          <h2 className="font-serif font-medium text-4xl md:text-5xl leading-[1.15] text-foreground">
            I build backends that stay up under load, and AI pipelines that{' '}
            <em className="text-accent-light">show their work</em>.
          </h2>

          {/* Right — summary, stats grid, currently, education */}
          <div>
            <p className="text-[15px] text-muted leading-relaxed mb-10">
              Backend and AI Engineer with {formatYears(years)} years in production. Builds distributed systems and LLM
              infrastructure that stay correct when things fail. Stack:{' '}
              <strong className="text-foreground font-semibold">Node.js, TypeScript, Python</strong>. AI
              infra: <strong className="text-foreground font-semibold">RAG pipelines, LLM evaluation</strong>.
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
                <strong className="text-foreground font-semibold">Backend Engineer at ZURU</strong>. In-house
                product engineering for ZURU&apos;s consumer brands (X-Shot, Bunch O Balloons, Robo Alive).
              </p>
            </div>

            {/* Education */}
            <div className="mt-4 rounded-xl border border-border bg-surface p-6">
              <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-accent-light mb-2">
                Education
              </p>
              <p className="text-[15px] text-foreground font-semibold leading-relaxed">
                B.E. Computer Science &amp; Engineering
              </p>
              <p className="text-[15px] text-muted leading-relaxed">
                Darshan Institute of Engineering and Technology, Rajkot, India
              </p>
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-meta mt-3">
                2020 to 2024 · CGPA: 8.74
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
