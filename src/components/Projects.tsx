const projects = [
  {
    name: 'Production-Grade LLM Search Platform (RAG + MLOps)',
    description: 'Built an end-to-end LLM-powered semantic search platform with Retrieval-Augmented Generation (RAG), automated evaluation, and metric-driven model promotion. Designed the system with production-style orchestration, experiment tracking, and governance to simulate real-world AI deployment workflows.',
    technologies: 'Python, Airflow, MLflow, PostgreSQL, pgvector, Docker, RAG',
    link: 'https://github.com/dhrumilbhut/LLM-search'
  },
  {
    name: 'Conversational RAG System for Document Q&A',
    description: 'Developed a conversational Retrieval-Augmented Generation (RAG) system for document-based question answering. Enabled PDF ingestion, persistent chat history, and context-aware responses to improve retrieval accuracy and user experience.',
    technologies: 'LangChain, Hugging Face, Streamlit, ChromaDB, RAG',
    link: 'https://github.com/dhrumilbhut/Conversational-RAG-QA-Chatbot'
  },
  {
    name: 'Voice-Driven AI Coding Assistant',
    description: 'Built an AI-powered coding assistant that converts natural speech into executable code using LLMs. Designed real-time speech processing, structured project generation, and API-driven workflows to improve developer productivity and accessibility.',
    technologies: 'OpenAI API, FastAPI, Speech-to-Text, Text-to-Speech, MCP, AI Agents',
    link: 'https://github.com/dhrumilbhut/Content-Creation-At-Scale'
  },
  {
    name: 'Financial Content Automation System',
    description: 'Designed an autonomous multi-agent system to generate publication-ready financial content from live market data. Implemented specialized agents for data ingestion, analysis, drafting, and quality assurance with minimal human intervention.',
    technologies: 'CrewAI, LangChain, LLMs, YAML Configs, Jupyter',
    link: 'https://github.com/dhrumilbhut/Content-Creation-At-Scale'
  },
  {
    name: 'Multi-Source AI Search Assistant',
    description: 'Built a conversational AI assistant that aggregates knowledge from academic, encyclopedic, and web sources into a unified search experience. Combined structured tools and LLM reasoning to deliver accurate, real-time responses through a chat-based interface.',
    technologies: 'LangChain, Streamlit, Search APIs (Arxiv, Wikipedia, DuckDuckGo)',
    link: 'https://github.com/dhrumilbhut/Search-Engine-With-Langchain'
  },
  {
    name: 'League of Legends Match Predictor',
    description: 'Developed a machine learning model to predict the outcome of League of Legends matches using historical game data. Implemented feature engineering, model training, and evaluation to achieve high accuracy.',
    technologies: 'Python, PyTorch, Scikit-Learn, Pandas, NumPy',
    link: 'https://github.com/dhrumilbhut/League-of-Legends-Match-Predictor'
  },
  {
    name: 'Chat with SQL DB',
    description: 'Developed a conversational agent that interacts with a SQL database to retrieve and manipulate data based on user queries. Implemented natural language processing and SQL query generation for seamless user interaction.',
    technologies: 'Python, LangChain, SQLAlchemy, SQLite',
    link: 'https://github.com/dhrumilbhut/Chat-with-SQL-DB'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section py-16 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="section-title">Projects</h2>
        <p className="text-muted-foreground mb-8">A selection of my personal and professional projects</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="p-6 rounded-lg shadow-sm bg-white/80 border border-border hover:shadow-md transition-shadow flex flex-col">
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="mb-3 text-muted-foreground">{project.description}</p>
              <div className="mb-2 text-sm text-primary font-medium">{project.technologies}</div>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm mt-auto">View Project</a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
