"use client";

import { Github, ExternalLink, BookOpen, Package, type LucideIcon } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import SectionHeading from '@/components/SectionHeading';
import DragScroll from '@/components/DragScroll';

type CaseStudyLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

type CaseStudy = {
  name: string;
  subtitle: string;
  details: string[];
  links: CaseStudyLink[];
};

type Project = {
  name: string;
  company?: string;
  description: string;
  tech: string[];
  github?: string | null;
  live?: string | null;
};

const caseStudies: CaseStudy[] = [
  {
    name: 'BehavTest',
    subtitle: 'Behavioral Regression Testing for AI Applications',
    details: [
      'Open source behavioral regression testing tool for LLM apps, agents and RAG pipelines. Published on npm, listed on the GitHub Marketplace, CI green on Ubuntu, macOS and Windows, versioned releases and a full documentation site.',
      'Core engine runs each test case through the real pipeline multiple times and compares against a baseline using statistically honest methods: Wilson confidence intervals, Fisher exact test and case-stratified permutation tests. Reports not significant when the data does not support a conclusion rather than forcing a verdict.',
      'Ships with RAG scorers (faithfulness at claim and answer level, retrieval with hit/recall/precision/MRR, contextRelevance per chunk), a local dashboard with run comparison and calibration views, a GitHub Action for CI and a fire-and-forget SDK that adds zero latency to the host pipeline.',
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/dhrumilbhut/behavtest', icon: Github },
      { label: 'Documentation', href: 'https://dhrumilbhut.github.io/behavtest/', icon: BookOpen },
      { label: 'npm', href: 'https://www.npmjs.com/package/behavtest', icon: Package },
    ],
  },
  {
    name: 'ContextLens',
    subtitle: 'Self-Hosted RAG Observability Tool',
    details: [
      'Self-hosted, Dockerized stack: Python SDK, FastAPI ingest API, Celery worker, PostgreSQL with pgvector, Redis and a dashboard, with landing page and docs site.',
      'Pipeline decomposes every LLM response into atomic claims, embeds claims and source chunks in a single batched API call, attributes each via cosine similarity and classifies failures as retrieval failures (chunk never fetched) or generation failures (LLM misrepresented a chunk it had). Validated on a real 14-query RAG run: initial 0.75 threshold misclassified paraphrased claims; fixed with a three-band confidence model and separate refusal detection.',
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/dhrumilbhut/ContextLens', icon: Github },
      { label: 'Website', href: 'https://contextlens.dhrumilbhut.com/', icon: ExternalLink },
    ],
  },
  {
    name: 'PayFlow',
    subtitle: 'Payment Processing System',
    details: [
      'Async payment processing system with Node.js, RabbitMQ, PostgreSQL and Redis. Two-layer locking via Redis SET NX and PostgreSQL FOR UPDATE ensures no payment is double-processed under concurrent worker load.',
      'Circuit breaker for fast-fail on gateway outages, exponential backoff retries via Dead Letter Exchange and a crash-recovery watchdog for zero stuck payments under failure. Deployed with 47 unit and integration tests covering state transitions, race conditions and webhook conflict resolution.',
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/dhrumilbhut/PayFlow', icon: Github }],
  },
];

const projects: Project[] = [
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
    github: 'https://github.com/dhrumilbhut/voice-coding-assistant',
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

const CaseStudyCard = ({ study, index }: { study: CaseStudy; index: number }) => {
  const { ref, revealStyle } = useInView(index * 120);

  return (
    <article
      ref={ref}
      style={revealStyle}
      className="glow-card group flex flex-col p-8 md:p-10 mb-12 last:mb-0"
    >
      <div className="flex items-start justify-between gap-3 mb-6">
        <div className="flex-1 min-w-0">
          <span className="outline-numeral block text-6xl md:text-7xl leading-none select-none" aria-hidden="true">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3 className="font-serif font-medium text-3xl md:text-4xl text-foreground mt-5">
            {study.name}
          </h3>
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-meta mt-2.5">{study.subtitle}</p>
        </div>
        <div className="flex items-center gap-1 flex-shrink-0">
          {study.links.map(({ label, href, icon: Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-muted-foreground/50 hover:text-foreground rounded-md transition-colors"
              aria-label={`${study.name} ${label}`}
              title={label}
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>

      <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-accent-light mt-2 mb-2.5">
        Details
      </p>
      <ul className="space-y-2.5">
        {study.details.map((detail) => (
          <li key={detail} className="flex gap-3 text-[15px] text-muted-foreground leading-relaxed">
            <span className="mt-[10px] w-1 h-1 rounded-full bg-accent flex-shrink-0" />
            {detail}
          </li>
        ))}
      </ul>
    </article>
  );
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const { ref, revealStyle } = useInView((index % 3) * 60);

  return (
    <div
      ref={ref}
      style={revealStyle}
      className="glow-card group flex flex-col p-6 min-w-[280px] max-w-[320px] snap-start flex-shrink-0"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <span className="outline-numeral text-4xl leading-none select-none" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
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

      <h3 className="font-serif font-medium text-xl leading-snug text-foreground mb-3">
        {project.name}
      </h3>

      <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-grow">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="font-mono text-xs border border-border rounded-full px-3 py-1 text-muted"
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
  const { ref: otherRef, revealStyle: otherReveal } = useInView();

  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} style={revealStyle} className="mb-14">
          <SectionHeading
            number="03"
            label="Featured Work"
            tagline="Case Studies, In Depth"
            title="Featured Work"
          />
        </div>

        <div className="mb-24">
          {caseStudies.map((study, i) => (
            <CaseStudyCard key={study.name} study={study} index={i} />
          ))}
        </div>

        <div ref={otherRef} style={otherReveal} className="mb-10">
          <SectionHeading
            number="04"
            label="Other Projects"
            tagline="Under the Hood · Drag Scroll →"
            title="Other Projects"
          />
        </div>

        <DragScroll>
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </DragScroll>
      </div>
    </section>
  );
};

export default Projects;
