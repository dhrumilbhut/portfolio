"use client";

import { useInView } from '@/hooks/useInView';
import SectionHeading from '@/components/SectionHeading';

type Role = {
  title: string;
  company: string;
  period: string;
  location: string;
  description?: string;
  bullets: string[];
  tech?: string[];
  current?: boolean;
};

const roles: Role[] = [
  {
    title: 'Backend Engineer',
    company: 'ZURU',
    period: '08/2023 to Present',
    location: 'Ahmedabad',
    current: true,
    description:
      "In-house product engineering for ZURU's consumer brands (X-Shot, Bunch O Balloons, Robo Alive).",
    bullets: [
      "Own the backend for ZURU's in-house brand platforms. Built the brand asset library from scratch for 20+ brands and 20K+ media assets. Rewrote multi-filter retrieval with CTEs, cutting query time by 40% and API response time by 20%. Lambda-based preview generation cut compute costs by ~20% and load times by ~30%.",
      'Built the async media publishing pipeline across Instagram, TikTok and YouTube, using BullMQ and Redis for job scheduling with deduplication, retries and concurrency limits, and RabbitMQ consumers to run publishing outside the request lifecycle. Added a webhook ingestion service that fans out real-time Instagram and TikTok events to internal consumers without coupling to the external API contract.',
      "Designed two independent rate-limiting middleware chains, one for inbound traffic and one for outbound platform quotas, with no cross-interference. Respects Meta's 1,000 req/hr cap and YouTube's 10K quota/day; the YouTube analytics sync covers 1,000+ channels without quota violations.",
      'Built Creator Discovery so researchers can shortlist Instagram and TikTok creators and add up to 50 to a campaign in one transaction, matching existing records, creating new ones, and caching expiring marketplace photos in S3.',
      'Built a 10-level campaign folder hierarchy using recursive CTEs for depth and breadcrumbs, with cycle prevention and per-brand Postgres advisory locks so concurrent moves cannot corrupt the tree.',
      'Implemented Azure AD SSO with domain restriction and least-privilege self-provisioning, a session dashboard with remote force-logout, immediate revocation on disable or delete, and an RBAC matrix of about 130 permissions across 7 roles.',
      'Designed the schema and dual state machine for a multi-party licensor approval workflow: separate status lifecycles for projects and individual assets, hybrid core columns and JSONB for dynamic per-category fields, bulk asset review actions and role-based write access enforced at the brand level.',
    ],
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
        {role.description && (
          <p className="text-[15px] text-muted leading-relaxed mb-5">{role.description}</p>
        )}

        <ul className={`space-y-2.5 ${role.tech?.length ? 'mb-6' : ''}`}>
          {role.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3 text-sm text-muted leading-relaxed">
              <span className="mt-[9px] w-1 h-1 rounded-full bg-accent flex-shrink-0" />
              {bullet}
            </li>
          ))}
        </ul>

        {role.tech && role.tech.length > 0 && (
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
        )}
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
