import { Card, CardContent } from '@/components/ui/card';

type SkillCategoryProps = {
  title: string;
  skills: string[];
};

const SkillCategory = ({ title, skills }: SkillCategoryProps) => {
  return (
    <div className="mb-8 last:mb-0">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:shadow-sm transition-all"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'SQL', 'JavaScript']
    },
    {
      title: 'Applied AI & LLM Systems',
      skills: [
        'Retrieval-Augmented Generation (RAG)',
        'Semantic Search',
        'Embeddings',
        'Vector Search',
        'LangChain',
        'Hugging Face',
        'OpenAI API',
        'Ollama'
      ]
    },
    {
      title: 'MLOps & ML Systems',
      skills: [
        'MLflow',
        'Model Registry',
        'Automated Model Promotion',
        'ML Evaluation Pipelines',
        'Metric-Driven Model Governance'
      ]
    },
    {
      title: 'Machine Learning & Data',
      skills: [
        'Pandas',
        'NumPy',
        'Scikit-learn',
        'PyTorch',
        'TensorFlow'
      ]
    },
    {
      title: 'Orchestration & Backend Systems',
      skills: [
        'Apache Airflow',
        'Node.js',
        'Express.js',
        'REST APIs',
        'JWT Authentication'
      ]
    },
    {
      title: 'Databases & Vector Stores',
      skills: [
        'PostgreSQL',
        'pgvector',
        'MongoDB',
        'MySQL'
      ]
    },
    {
      title: 'Infrastructure & Tooling',
      skills: [
        'Docker',
        'Docker Compose',
        'Git',
        'GitHub',
        'Postman'
      ]
    }
  ]


  return (
    <section id="skills" className="section py-16 bg-muted/30">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="section-title">Skills</h2>
        <Card className="shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-8">
            {skillCategories.map((category, index) => (
              <SkillCategory
                key={index}
                title={category.title}
                skills={category.skills}
              />
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
