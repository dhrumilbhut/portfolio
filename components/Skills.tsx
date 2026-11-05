"use client";

import { useInView } from '@/hooks/useInView';
import SectionHeading from '@/components/SectionHeading';

type SkillCategory = {
  title: string;
  skills: string[];
  span: string;
};

const categories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: ['Python', 'JavaScript', 'TypeScript', 'SQL'],
    span: 'md:col-span-1',
  },
  {
    title: 'Backend & Infra',
    skills: ['Node.js', 'Express.js', 'FastAPI', 'AWS (Lambda, S3)', 'Docker', 'Docker Compose', 'CI/CD', 'Azure AD SSO'],
    span: 'md:col-span-3',
  },
  {
    title: 'Data & Queues',
    skills: ['PostgreSQL', 'Redis', 'RabbitMQ', 'BullMQ', 'Celery', 'Schema Design'],
    span: 'md:col-span-2',
  },
  {
    title: 'AI Infrastructure',
    skills: ['RAG Pipelines', 'pgvector', 'Embeddings', 'LLM Evaluation', 'OpenAI API'],
    span: 'md:col-span-2',
  },
  {
    title: 'Testing',
    skills: ['Jest', 'Unit Testing', 'Integration Testing', 'Statistical Testing'],
    span: 'md:col-span-4',
  },
];

const SkillCard = ({ category, index }: { category: SkillCategory; index: number }) => {
  const { ref, revealStyle } = useInView(index * 60);

  return (
    <div
      ref={ref}
      style={revealStyle}
      className={`glow-card p-6 flex flex-col gap-4 ${category.span}`}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-serif font-medium text-xl text-foreground">{category.title}</h3>
        <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted/60 pt-1.5">
          Cat—{String.fromCharCode(65 + index)}
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="font-mono text-xs border border-border rounded-full px-3 py-1 text-muted"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const { ref, revealStyle } = useInView();

  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} style={revealStyle} className="mb-14">
          <SectionHeading number="06" label="Skills" tagline="Tools of the Trade" title="Technical Stack" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <SkillCard key={cat.title} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
