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
      skills: ['Python', 'JavaScript', 'SQL']
    },
    {
      title: 'Machine Learning & AI',
      skills: ['LangChain', 'CrewAI', 'PyTorch', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'NLTK', 'Streamlit',
        'Hugging Face', 'RAG', 'Multi-agent Systems', 'Ollama']
    },
    {
      title: 'Databases',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Mongoose']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'REST API', 'JWT Auth']
    }
  ];

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
