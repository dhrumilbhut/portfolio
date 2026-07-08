"use client";

import { Github, ExternalLink } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import SectionHeading from '@/components/SectionHeading';
import DragScroll from '@/components/DragScroll';

type CaseStudySection = {
  label: string;
  paragraphs?: string[];
  bullets?: string[];
};

type CaseStudy = {
  name: string;
  company?: string;
  sections: CaseStudySection[];
  tech: string[];
  github?: string | null;
  live?: string | null;
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
    name: 'ContextLens',
    sections: [
      {
        label: 'Overview',
        paragraphs: [
          'A self-hosted RAG observability stack that decomposes LLM responses into atomic claims, attributes each claim to its source chunk via cosine similarity, and runs an LLM-as-judge faithfulness check. It surfaces a per-claim verdict — faithful, partial, unfaithful, or refusal — instead of a single opaque faithfulness score.',
        ],
      },
      {
        label: 'The Problem',
        paragraphs: [
          'Most existing eval tools (RAGAS, LangSmith, Braintrust) collapse two fundamentally different failure modes, bad retrieval and bad generation, into one faithfulness number. A team debugging a wrong answer has no way to know from that score alone whether the retriever pulled the wrong chunk or the model hallucinated on top of a correct one. ContextLens exists to make that distinction explicit, at the level of individual claims within a response, not the response as a whole.',
        ],
      },
      {
        label: 'Architecture / How It Works',
        paragraphs: [
          "FastAPI backend, Celery workers for async processing, PostgreSQL with pgvector for embedding storage and similarity search, Redis for task queuing and caching, a Next.js frontend for the dashboard, and a lightweight Python SDK that instruments the calling application. The SDK's context manager captures a trace (query, retrieved chunks, generated response) and ships it to the backend on a background daemon thread, fire-and-forget, so instrumentation never blocks the caller's actual request path.",
        ],
      },
      {
        label: 'Key Decisions',
        bullets: [
          "IVFFlat over HNSW for the pgvector index: for a self-hosted, single-developer threat model at realistic dataset sizes, IVFFlat's simpler build and lower memory footprint won out over HNSW's marginal recall improvement.",
          'asyncpg with raw SQL instead of an ORM: full control over query shape and performance for pgvector similarity queries.',
          "Fixed-window over sliding-window rate limiting: matched the actual single-user threat model instead of over-engineering for scale that doesn't exist yet.",
          'Quote-first reasoning in the LLM judge prompt: the judge quotes the exact span of the source chunk it relies on before rendering a verdict, grounding judgment in specific text rather than abstract reasoning.',
          'Frozen-response retest methodology: when fixing attribution or judging logic, the same frozen set of previously generated responses is retested against new logic, isolating whether a fix actually improved classification accuracy.',
        ],
      },
      {
        label: 'Challenges & Solutions',
        paragraphs: [
          'The attribution threshold was calibrated against an organic 14-query RAG test run, not synthetic data. The initial 0.75 cosine similarity cutoff misclassified paraphrased claims as retrieval failures, since paraphrasing lowers surface-level similarity even when meaning is preserved. Fixed with a three-band confidence model: a clear match above 0.75, a clear non-match below 0.65, and a low-confidence band from 0.65 to 0.75 escalated to the LLM judge instead of auto-classified. Separately, refusal detection was added so a model correctly declining to answer isn\'t counted as a hallucination.',
        ],
      },
    ],
    tech: ['Python', 'FastAPI', 'Celery', 'PostgreSQL', 'pgvector', 'Redis', 'Next.js', 'Tailwind', 'OpenAI SDK'],
    github: 'https://github.com/dhrumilbhut/ContextLens',
    live: 'https://contextlens.dhrumilbhut.com',
  },
  {
    name: 'PayFlow',
    sections: [
      {
        label: 'Overview',
        paragraphs: [
          'An async payment processing system built around idempotency and concurrency safety. Handles retries, worker crashes, and concurrent workers touching the same payment without ever double-processing it or leaving one stuck.',
        ],
      },
      {
        label: 'The Problem',
        paragraphs: [
          'Payment processing is one of the few backend domains where "eventually consistent" isn\'t good enough. A naive queue-and-worker setup will double-charge a customer the moment two workers pick up the same message during a network blip, or leave a payment stuck if a worker crashes mid-transaction. PayFlow demonstrates the patterns that prevent both failure modes under real concurrent load.',
        ],
      },
      {
        label: 'Architecture / How It Works',
        paragraphs: [
          "A multi-service architecture (a Node.js API service and a separate worker service) communicating through RabbitMQ, PostgreSQL as the system of record, Redis providing a fast distributed lock layer. Payments are submitted through the API, queued, and processed by workers that acquire a lock before touching a payment's state.",
        ],
      },
      {
        label: 'Key Decisions',
        bullets: [
          'Two-layer locking: a Redis SET NX lock as a fast first line of defense, backed by a PostgreSQL FOR UPDATE row lock as the authoritative second layer, so even if the Redis lock fails, the database guarantees no double-processing.',
          "Circuit breaker for gateway outages: fails fast once outage patterns are detected instead of retrying against a downstream gateway that's already down.",
          'Dead Letter Exchange for retry handling: failed messages route to a Dead Letter Exchange with exponential backoff, so transient failures get retried on a sane schedule.',
          'A crash-recovery watchdog: periodically scans for payments stuck in an intermediate state longer than expected and recovers them, ensuring zero payments stay permanently stuck.',
        ],
      },
      {
        label: 'Challenges & Solutions',
        paragraphs: [
          'The hardest part of a system like this is proving the failure paths hold under concurrency, not the happy path. Validated with 47 unit and integration tests targeting state transitions, race conditions, and webhook conflict resolution. Deployed as a multi-service setup on Railway, API and worker scaled independently.',
        ],
      },
    ],
    tech: ['Node.js', 'RabbitMQ', 'PostgreSQL', 'Redis', 'Railway'],
    github: 'https://github.com/dhrumilbhut/PayFlow',
    live: 'https://payflow.dhrumilbhut.com',
  },
  {
    name: 'Influencer Management Platform',
    company: 'Zuru Tech India',
    sections: [
      {
        label: 'Overview',
        paragraphs: [
          'The core production backend behind a content management, analytics, and media distribution platform built and maintained at Zuru Tech India, serving 1000+ influencer channels across Instagram, TikTok, and YouTube.',
        ],
      },
      {
        label: 'The Problem',
        paragraphs: [
          "A platform managing content and analytics across multiple social platforms for over a thousand channels has to solve two things at once: keep expensive external API calls (especially YouTube's quota-limited Analytics API) from becoming a bottleneck, and keep heavy operations like media processing and publishing from blocking the request lifecycle users interact with.",
        ],
      },
      {
        label: 'Architecture / How It Works',
        paragraphs: [
          'An Express.js backend with a centralized middleware layer handling JWT/session authentication and request validation, sitting in front of PostgreSQL and SQLite in a multi-database setup. Distributed job scheduling runs through BullMQ backed by Redis, RabbitMQ handles consumer pipelines for cross-platform publishing, and AWS Lambda handles isolated, bursty workloads like media preview generation separately from the main application.',
        ],
      },
      {
        label: 'Key Decisions',
        bullets: [
          "Dual-layer rate limiting: inbound API traffic and outbound YouTube API quota are throttled independently, so a burst of internal traffic can't exhaust the external YouTube quota, and vice versa.",
          'A scheduled sync pipeline instead of on-demand calls: YouTube Analytics data for all 1000+ channels is pulled on a schedule and cached, rather than hitting the API live on every analytics view.',
          'Moving media preview generation to AWS Lambda: an isolated, event-driven Lambda function cut compute costs by roughly 20% and improved media load times by roughly 30% compared to handling it inline in the main backend.',
          'Decoupling publishing from the request lifecycle: BullMQ handles job deduplication, retries, and concurrency control for scheduled and cron-based publishing, so a user-facing request never waits on a slow external publish call.',
        ],
      },
      {
        label: 'Challenges & Solutions',
        paragraphs: [
          'A full asset library was built with watermark-based vendor distribution: background jobs produce processed copies of media with 6 placement options, proportional scaling, and edge-anchored positioning across image and video, while keeping internal originals unchanged. Database schema and query pattern optimization across the multi-database setup improved overall application performance by 20% and cut query execution time by 40%.',
        ],
      },
    ],
    tech: ['Node.js', 'Express.js', 'PostgreSQL', 'SQLite', 'BullMQ', 'Redis', 'RabbitMQ', 'AWS Lambda', 'JWT'],
    github: null,
    live: null,
  },
];

const projects: Project[] = [
  {
    name: 'LinkQ',
    description:
      'A production-grade URL shortener that separates redirect performance from analytics. Clicks are tracked asynchronously via a RabbitMQ worker so redirects are never delayed by database writes. Redis serves four distinct roles: redirect cache, atomic click counter, sliding-window rate limiter, and token store for a two-token JWT auth system with immediate revocation. Deployed on Railway with a 5-service architecture and a GitHub Actions CI pipeline.',
    tech: ['Node.js', 'Express.js', 'PostgreSQL', 'Redis', 'RabbitMQ', 'Docker', 'Railway', 'GitHub Actions'],
    github: 'https://github.com/dhrumilbhut/linkq',
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
          {study.company && (
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-meta mt-2.5">{study.company}</p>
          )}
        </div>
        <div className="flex items-center gap-1 flex-shrink-0">
          {study.github && (
            <a
              href={study.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-muted-foreground/50 hover:text-foreground rounded-md transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {study.live && (
            <a
              href={study.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-muted-foreground/50 hover:text-foreground rounded-md transition-colors"
              aria-label="Live demo"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      {study.sections.map((section) => (
        <section key={section.label}>
          <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-accent-light mt-8 mb-2.5">
            {section.label}
          </p>
          {section.paragraphs?.map((paragraph) => (
            <p key={paragraph} className="text-[15px] text-muted-foreground leading-relaxed">
              {paragraph}
            </p>
          ))}
          {section.bullets && (
            <ul className="space-y-2.5">
              {section.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                  <span className="mt-[9px] w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                  {bullet}
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}

      <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-accent-light mt-8 mb-3">
        Tech Stack
      </p>
      <div className="flex flex-wrap gap-2">
        {study.tech.map((t) => (
          <span
            key={t}
            className="font-mono text-xs border border-border rounded-full px-3 py-1 text-muted"
          >
            {t}
          </span>
        ))}
      </div>
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
            label="Other Work"
            tagline="Under the Hood — Drag Scroll →"
            title="Other Work"
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
