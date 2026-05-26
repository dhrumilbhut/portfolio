import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

type Role = {
  title: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
  tech: string[];
};

const roles: Role[] = [
  {
    title: 'Software Engineer',
    company: 'Zuru Tech India Pvt. Ltd.',
    period: 'Aug 2023 – Present',
    location: 'Ahmedabad, India',
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
    period: 'Mar 2023 – May 2023',
    location: 'Remote',
    bullets: [
      'Built a hotel management system with a React.js frontend and a Node.js/Express.js REST backend.',
      'Integrated MongoDB for efficient data handling and CRUD operations in a production-ready deployment.',
    ],
    tech: ['Node.js', 'Express.js', 'React.js', 'MongoDB'],
  },
];

const ExperienceItem = ({
  role,
  index,
  isOpen,
  onToggle,
}: {
  role: Role;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  const { ref, revealStyle } = useInView(index * 120);

  return (
    <div
      ref={ref}
      style={revealStyle}
      className="pb-12 last:pb-0 border-b border-border last:border-0"
    >
      <div className="grid md:grid-cols-[220px_1fr] gap-8">
        <div className="pt-0.5">
          <p className="text-sm font-medium text-foreground mb-1">{role.company}</p>
          <p className="text-xs text-muted-foreground mb-1">{role.period}</p>
          <p className="text-xs text-muted-foreground/60">{role.location}</p>
        </div>

        <div>
          <button
            onClick={onToggle}
            className="w-full flex items-center justify-between gap-4 text-left group/btn"
          >
            <h3 className="text-base font-semibold">{role.title}</h3>
            <ChevronDown
              className={`w-4 h-4 text-muted-foreground/30 flex-shrink-0 transition-transform duration-300 group-hover/btn:text-muted-foreground ${
                isOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          <div
            className="overflow-hidden"
            style={{
              maxHeight: isOpen ? '800px' : '0px',
              transition: 'max-height 0.45s cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          >
            <div className="pt-4">
              <ul className="space-y-2.5 mb-5">
                {role.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                    <span className="mt-[9px] w-1 h-1 rounded-full bg-foreground/30 flex-shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {role.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-md bg-secondary border border-border text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const { ref, revealStyle } = useInView();
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section id="experience" className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} style={revealStyle} className="flex items-center gap-6 mb-16">
          <h2 className="text-xl font-semibold whitespace-nowrap">Work Experience</h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="space-y-12">
          {roles.map((role, i) => (
            <ExperienceItem
              key={role.company}
              role={role}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
