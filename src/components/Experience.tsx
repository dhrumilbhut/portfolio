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
      'Architected the core backend for Netra — an Influencer Management Platform for content management, analytics, and media distribution across a multi-database production setup.',
      'Built an AWS Lambda API for automated media preview generation, cutting compute costs ~20% and improving load times ~30%.',
      'Integrated YouTube Analytics API for real-time influencer tracking with automated data syncing across channels.',
      'Optimised DB schema and query patterns, improving application performance by 20% and reducing query execution time by 40%.',
    ],
    tech: ['Node.js', 'Express.js', 'PostgreSQL', 'SQLite', 'AWS Lambda', 'Redis', 'RabbitMQ', 'BullMQ', 'JWT'],
  },
  {
    title: 'Full Stack Developer Intern',
    company: 'iNeuron.ai',
    period: 'Mar 2023 – May 2023',
    location: 'Remote',
    bullets: [
      'Built a hotel management system — React.js frontend with a Node.js/Express.js REST backend.',
      'Integrated MongoDB for efficient data handling and CRUD operations in a production-ready deployment.',
    ],
    tech: ['Node.js', 'Express.js', 'React.js', 'MongoDB'],
  },
];

const ExperienceItem = ({ role, index }: { role: Role; index: number }) => {
  const { ref, revealStyle } = useInView(index * 120);

  return (
    <div
      ref={ref}
      style={revealStyle}
      className="grid md:grid-cols-[220px_1fr] gap-8 pb-12 last:pb-0 border-b border-border last:border-0"
    >
      <div className="pt-0.5">
        <p className="text-sm font-medium text-foreground mb-1">{role.company}</p>
        <p className="text-xs text-muted-foreground mb-1">{role.period}</p>
        <p className="text-xs text-muted-foreground/60">{role.location}</p>
      </div>

      <div>
        <h3 className="text-base font-semibold mb-4">{role.title}</h3>
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
  );
};

const Experience = () => {
  const { ref, revealStyle } = useInView();

  return (
    <section id="experience" className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} style={revealStyle} className="flex items-center gap-6 mb-16">
          <h2 className="text-xl font-semibold whitespace-nowrap">Work Experience</h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="space-y-12">
          {roles.map((role, i) => (
            <ExperienceItem key={role.company} role={role} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
