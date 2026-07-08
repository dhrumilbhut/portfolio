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
    title: 'Backend & API',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'AWS Lambda', 'JWT', 'Session-based Auth', 'Middleware Design'],
    span: 'md:col-span-3',
  },
  {
    title: 'Languages',
    skills: ['Python', 'JavaScript', 'SQL'],
    span: 'md:col-span-1',
  },
  {
    title: 'Queues & Jobs',
    skills: ['RabbitMQ', 'BullMQ', 'Redis', 'Dead-letter Queues', 'Cron Scheduling'],
    span: 'md:col-span-2',
  },
  {
    title: 'Databases & Caching',
    skills: ['PostgreSQL', 'SQLite', 'pgvector', 'Redis'],
    span: 'md:col-span-2',
  },
  {
    title: 'Infrastructure & DevOps',
    skills: ['Docker', 'Docker Compose', 'GitHub Actions', 'AWS', 'Railway', 'Apache Airflow', 'Git'],
    span: 'md:col-span-2',
  },
  {
    title: 'Applied AI & LLM',
    skills: ['RAG', 'Vector Search', 'LangChain', 'OpenAI API', 'Groq API', 'CrewAI', 'MLflow', 'Eval Pipelines', 'Hugging Face'],
    span: 'md:col-span-2',
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
