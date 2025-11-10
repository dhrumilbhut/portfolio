const projects = [
  {
    name: 'Voice-Driven AI Coding Assistant',
    description: 'Voice Coding Assistant is an AI-powered development tool that converts natural speech into functional code using OpenAI\'s GPT models. It features a hybrid architecture with both REST API and MCP compliance, automatic project organization, real-time text-to-speech feedback, and enterprise-grade security for accessible and efficient development workflows.',
    technologies: 'AI Agents , OpenAI API , FastAPI, Speech-to-Text, Text-to-Speech',
    link: 'https://github.com/dhrumilbhut/Content-Creation-At-Scale'
  },
  {
    name: 'Financial Content Automation System',
    description: 'Designed an autonomous multi-agent pipeline with CrewAI + LLMs to generate financial content from live news and market data. Built specialized agents for data collection, analysis, content drafting, and quality assurance, producing publication - ready outputs with minimal human input.',
    technologies: 'CrewAI , LangChain , YAML Configs, Jupyter Notebook',
    link: 'https://github.com/dhrumilbhut/Content-Creation-At-Scale'
  },
  {
    name: 'Conversational RAG with PDF Uploads and Chat History',
    description: 'Developed a Streamlit app with Hugging Face embeddings + Groq-powered Gemma2 model for semantic document Q&A. Enabled PDF upload, chat history, and context-aware responses, improving information retrieval accuracy and user experience.',
    technologies: 'LangChain, Streamlit, Hugging Face, ChromaDB',
    link: 'https://github.com/dhrumilbhut/Conversational-RAG-QA-Chatbot'
  },
  {
    name: 'Multi-Source AI Search Assistant',
    description: 'Built a conversational assistant using LangChain that integrates Arxiv, Wikipedia, and DuckDuckGo for multisource, real-time research. Delivered comprehensive responses blending academic, encyclopedic, and web knowledge through an intuitive chat UI.',
    technologies: 'LangChain, Streamlit, Tools (arxiv, wikipedia, duckduckgo-search)',
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
