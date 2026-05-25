import { useInView } from '@/hooks/useInView';

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
      className={`p-5 rounded-xl bg-card border border-border flex flex-col gap-3 ${category.span}`}
    >
      <p className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground/40">
        {category.title}
      </p>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="text-[13px] px-3 py-1.5 rounded-lg bg-secondary border border-border/50 text-foreground/70"
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
    <section id="skills" className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} style={revealStyle} className="flex items-center gap-6 mb-16">
          <h2 className="text-xl font-semibold whitespace-nowrap">Technical Stack</h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          {categories.map((cat, i) => (
            <SkillCard key={cat.title} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
