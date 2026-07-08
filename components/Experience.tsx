"use client";

import { useInView } from '@/hooks/useInView';
import SectionHeading from '@/components/SectionHeading';

type Role = {
  title: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
  tech: string[];
  current?: boolean;
};

const roles: Role[] = [
  {
    title: 'Software Engineer',
    company: 'Zuru Tech India Pvt. Ltd.',
    period: 'Aug 2023 — Present',
    location: 'Ahmedabad, India',
    current: true,
    bullets: [
      'Architected the core backend for Netra, an Influencer Management Platform, with a centralized Express.js middleware layer handling JWT/session auth, request validation, and dual-layer rate limiting that independently throttles inbound API traffic and outbound YouTube quota without cross-interference.',
      'Implemented BullMQ + Redis distributed job scheduling with deduplication, retry logic, and concurrency control; built RabbitMQ consumer pipelines and cron-based schedulers for automated media publishing across Instagram, TikTok, and YouTube, fully decoupling heavy operations from the request lifecycle.',
      'Built a full asset library with watermark-based vendor distribution: background jobs produce processed copies with 6 placement options, proportional scaling, and edge-anchored positioning across image and video, keeping internal originals unchanged.',
      'Developed an AWS Lambda API for automated media preview generation, cutting compute costs ~20% and improving media load times ~30%; integrated YouTube Analytics API for real-time influencer performance tracking with automated data syncing across multiple channels.',
      'Optimized DB schema and query patterns across a multi-database production setup (PostgreSQL + SQLite), improving overall application performance by 20% and reducing query execution time by 40%.',
    ],
    tech: ['Node.js', 'Express.js', 'PostgreSQL', 'SQLite', 'AWS Lambda', 'Redis', 'RabbitMQ', 'BullMQ', 'JWT'],
  },
  {
    title: 'Full Stack Developer Intern',
    company: 'iNeuron.ai',
    period: 'Mar 2023 — May 2023',
    location: 'Remote',
    bullets: [
      'Built a hotel management system with a React.js frontend and a Node.js/Express.js REST backend.',
      'Integrated MongoDB for efficient data handling and CRUD operations in a production-ready deployment.',
    ],
    tech: ['Node.js', 'Express.js', 'React.js', 'MongoDB'],
  },
];

const TimelineItem = ({ role, index }: { role: Role; index: number }) => {
  const { ref, revealStyle } = useInView(index * 120);

  return (
    <div ref={ref} style={revealStyle} className="relative pl-10 md:pl-14 pb-12 last:pb-0">
      {/* Rail dot */}
      <span
        className={`absolute left-0 top-8 -translate-x-1/2 w-3 h-3 rounded-full border-2 ${
          role.current
            ? 'bg-accent border-accent shadow-[0_0_12px_rgba(139,92,246,0.6)]'
            : 'bg-background border-border'
        }`}
        aria-hidden="true"
      />

      <div className="glow-card p-6 md:p-8">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-meta mb-2">
          {role.period} · {role.location}
        </p>
        <h3 className="font-serif font-medium text-2xl md:text-3xl text-foreground">
          {role.company}
        </h3>
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-accent-light mt-1.5 mb-5">
          {role.title}
        </p>

        <ul className="space-y-2.5 mb-6">
          {role.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3 text-sm text-muted leading-relaxed">
              <span className="mt-[9px] w-1 h-1 rounded-full bg-accent flex-shrink-0" />
              {bullet}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {role.tech.map((t) => (
            <span
              key={t}
              className="font-mono text-xs border border-border rounded-full px-3 py-1 text-muted"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const { ref, revealStyle } = useInView();

  return (
    <section id="experience" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} style={revealStyle} className="mb-14">
          <SectionHeading number="02" label="Experience" tagline="The Path" title="Where I've Shipped" />
        </div>

        {/* Timeline rail */}
        <div className="relative border-l border-border ml-1.5">
          {roles.map((role, i) => (
            <TimelineItem key={role.company} role={role} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
