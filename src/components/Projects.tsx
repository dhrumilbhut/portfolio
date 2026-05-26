import { Github, ExternalLink } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

type Project = {
  name: string;
  company?: string;
  description: string;
  tech: string[];
  github?: string | null;
  live?: string | null;
};

const projects: Project[] = [
  {
    name: 'Influencer Management Platform',
    company: 'Zuru Tech India',
    description:
      'Core backend for an Influencer Management Platform handling content, analytics, and cross-platform media distribution. Built a centralized middleware layer with dual-layer rate limiting, independently throttling inbound API traffic and outbound YouTube quota. Job processing runs on BullMQ + Redis (deduplication, retries, concurrency) with RabbitMQ pipelines publishing across Instagram, TikTok, and YouTube. Includes a full asset library with watermark-based vendor distribution: background jobs render processed copies with 6 placement options, proportional scaling, and edge-anchored positioning.',
    tech: ['Node.js', 'Express.js', 'PostgreSQL', 'BullMQ', 'Redis', 'RabbitMQ', 'SQLite', 'JWT'],
    github: null,
    live: null,
  },
  {
    name: 'LinkQ',
    description:
      'A production-grade URL shortener that separates redirect performance from analytics. Clicks are tracked asynchronously via a RabbitMQ worker so redirects are never delayed by database writes. Redis serves four distinct roles: redirect cache, atomic click counter, sliding-window rate limiter, and token store for a two-token JWT auth system with immediate revocation. Deployed on Railway with a 5-service architecture and a GitHub Actions CI pipeline.',
    tech: ['Node.js', 'Express.js', 'PostgreSQL', 'Redis', 'RabbitMQ', 'Docker', 'Railway', 'GitHub Actions'],
    github: 'https://github.com/dhrumilbhut',
    live: 'https://linkq.dhrumilbhut.com/',
  },
  {
    name: 'LLM Search Platform',
    description:
      'Production-grade RAG pipeline with Airflow-orchestrated ingestion, pgvector embeddings, and idempotent tasks with retries. MLflow model governance with metric-driven auto-promotion prevents silent regressions. Dual-server architecture serving REST and MCP-compliant JSON-RPC from a single logic layer.',
    tech: ['Python', 'PostgreSQL', 'pgvector', 'Apache Airflow', 'MLflow', 'LangChain', 'Docker'],
    github: 'https://github.com/dhrumilbhut/LLM-search',
    live: null,
  },
  {
    name: 'Voice-Driven AI Coding Assistant',
    description:
      'Converts natural speech into executable code using LLMs. Dual-server backend: REST API and MCP JSON-RPC server share a single logic layer, eliminating duplication. Real-time speech processing with structured project generation.',
    tech: ['Python', 'FastAPI', 'OpenAI API', 'MCP', 'Speech-to-Text', 'Text-to-Speech'],
    github: 'https://github.com/dhrumilbhut/Content-Creation-At-Scale',
    live: null,
  },
  {
    name: 'Conversational RAG QA Chatbot',
    description:
      'Document Q&A system with PDF ingestion, persistent chat history, and context-aware retrieval. Maintains conversation memory for accurate multi-turn responses.',
    tech: ['Python', 'LangChain', 'Hugging Face', 'ChromaDB', 'Streamlit'],
    github: 'https://github.com/dhrumilbhut/Conversational-RAG-QA-Chatbot',
    live: null,
  },
  {
    name: 'Financial Content Automation',
    description:
      'Autonomous multi-agent system generating publication-ready financial content from live market data. Specialized agents handle ingestion, analysis, drafting, and QA with minimal human intervention.',
    tech: ['Python', 'CrewAI', 'LangChain', 'LLMs'],
    github: 'https://github.com/dhrumilbhut/Content-Creation-At-Scale',
    live: null,
  },
  {
    name: 'Multi-Source AI Search',
    description:
      'Conversational AI aggregating knowledge from Arxiv, Wikipedia, and DuckDuckGo into a unified experience. Combines structured tool use with LLM reasoning for accurate, real-time responses.',
    tech: ['Python', 'LangChain', 'Streamlit', 'Arxiv API', 'Wikipedia API'],
    github: 'https://github.com/dhrumilbhut/Search-Engine-With-Langchain',
    live: null,
  },
  {
    name: 'League of Legends Match Predictor',
    description:
      'ML model predicting match outcomes from historical game data using feature engineering, a PyTorch training pipeline, and evaluation across match statistics.',
    tech: ['Python', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy'],
    github: 'https://github.com/dhrumilbhut/League-of-Legends-Match-Predictor',
    live: null,
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  // Stagger: left column (even index) reveals first, right column (odd) 90ms later per row
  const { ref, revealStyle } = useInView((index % 2) * 90);

  return (
    <div
      ref={ref}
      style={revealStyle}
      className="group flex flex-col p-6 rounded-xl bg-card border border-border hover:border-foreground/20 transition-[border-color] duration-300"
    >
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-[15px] leading-snug text-foreground/90 group-hover:text-foreground transition-colors">
            {project.name}
          </h3>
          {project.company && (
            <p className="text-xs text-muted-foreground/60 mt-0.5">{project.company}</p>
          )}
        </div>
        <div className="flex items-center gap-1 flex-shrink-0">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-muted-foreground/50 hover:text-foreground rounded-md transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target={project.live !== '#' ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="p-1.5 text-muted-foreground/50 hover:text-foreground rounded-md transition-colors"
              aria-label="Live demo"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-grow">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-1 rounded bg-secondary border border-border/60 text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};

const FeaturedProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const { ref, revealStyle } = useInView(index * 120);

  return (
    <div
      ref={ref}
      style={revealStyle}
      className="group flex flex-col p-8 rounded-xl bg-card border border-border hover:border-foreground/30 transition-[border-color] duration-300"
    >
      <p className="text-[10px] uppercase tracking-widest text-muted-foreground/25 mb-5">Featured</p>
      <div className="flex items-start justify-between gap-3 mb-5">
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-base leading-snug text-foreground/90 group-hover:text-foreground transition-colors">
            {project.name}
          </h3>
          {project.company && (
            <p className="text-xs text-muted-foreground/60 mt-0.5">{project.company}</p>
          )}
        </div>
        <div className="flex items-center gap-1 flex-shrink-0">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-muted-foreground/50 hover:text-foreground rounded-md transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target={project.live !== '#' ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="p-1.5 text-muted-foreground/50 hover:text-foreground rounded-md transition-colors"
              aria-label="Live demo"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
      <p className="text-[15px] text-muted-foreground leading-relaxed mb-6 flex-grow">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs px-2.5 py-1 rounded bg-secondary border border-border/60 text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};

const Projects = () => {
  const { ref, revealStyle } = useInView();
  const featured = projects.slice(0, 2);
  const rest = projects.slice(2);

  return (
    <section id="projects" className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} style={revealStyle} className="flex items-center gap-6 mb-16">
          <h2 className="text-xl font-semibold whitespace-nowrap">Projects</h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {featured.map((project, i) => (
            <FeaturedProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>

        <div className="flex items-center gap-4 mb-6">
          <span className="text-xs uppercase tracking-widest text-muted-foreground/30">Other Work</span>
          <div className="h-px flex-1 bg-border/50" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {rest.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
