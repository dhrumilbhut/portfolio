import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

type ExperienceItemProps = {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string;
};

const ExperienceItem = ({ title, company, period, description, technologies }: ExperienceItemProps) => {
  return (
    <Card className="mb-6 overflow-hidden shadow-sm hover:shadow-md transition-shadow border-muted">
      <CardHeader className="pb-3 bg-muted/30">
        <div className="flex flex-wrap justify-between items-start gap-2">
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
            <CardDescription className="text-base">{company}</CardDescription>
          </div>
          <span className="text-sm bg-primary text-primary-foreground px-3 py-1 rounded-full font-medium">
            {period}
          </span>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <ul className="space-y-3 mb-4">
          {description.map((item, index) => (
            <li key={index} className="relative pl-6 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary">
              {item}
            </li>
          ))}
        </ul>
        <div className="pt-4 border-t border-border">
          <span className="text-sm text-muted-foreground">
            <strong>Tech Stack:</strong> {technologies}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Zuru Tech India Pvt. Ltd.',
      period: 'Aug 2023 – Present',
      description: [
        'Built and scaled backend systems for Influencer Management Platform using Node.js, Express.js, PostgreSQL and SQLite.',
        'Developed an authenticated API with AWS Lambda to automate media preview URL generation, reducing AWS compute costs by ~20% and accelerating media load times by ~30%.',
        'Integrated YouTube Analytics API to enable real-time influencer performance tracking and automated data syncing',
        'Optimized database schema and led code reviews, improving application performance by 20% and reducing query time by 40%.'
      ],
      technologies: 'Node.js, Express.js, PostgreSQL, SQLite, YouTube API'
    },
    {
      title: 'Full Stack Developer (Intern)',
      company: 'iNeuron.ai',
      period: 'Mar 2023 – May 2023',
      description: [
        'Built a hotel management system from scratch, including React.js front end and Node.js/Express.js backend.',
        'Integrated MongoDB for efficient data handling and rapid CRUD operations, supporting a production-ready fullstack deployment.'
      ],
      technologies: 'Node.js, Express.js, React.js, MongoDB'
    }
  ];

  return (
    <section id="experience" className="section py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="section-title">Work Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
