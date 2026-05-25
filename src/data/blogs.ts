export type Blog = {
  title: string;
  date: string;       // ISO format: YYYY-MM-DD
  tags: string[];
  preview: string;
  link: string;
};

// Add new entries at the top (newest first)
export const blogs: Blog[] = [
  {
    title: 'PageIndex: Vectorless, Human-Like RAG for Long Documents',
    date: '2026-03-06',
    tags: ['RAG', 'Document AI', 'AI', 'Vectorless RAG'],
    preview:
      'Addresses challenges with traditional RAG systems on lengthy PDFs. PageIndex uses tree-structured indexing instead of embeddings, allowing models to reason through document structure like humans navigating a table of contents.',
    link: 'https://dhrumilbhut.medium.com/pageindex-vectorless-human-like-rag-for-long-documents-092ddd56221c',
  },
  {
    title: 'Transforming Voice into Code: Building an AI-Powered Voice Coding Assistant with Hybrid MCP',
    date: '2025-10-08',
    tags: ['AI Engineering', 'Generative AI', 'Voice Technology', 'MCP'],
    preview:
      'Describes a system enabling voice-to-code generation through a hybrid architecture supporting both REST APIs and the Model Context Protocol (MCP), emphasising structured AI communication for developer collaboration.',
    link: 'https://dhrumilbhut.medium.com/transforming-voice-into-code-building-an-ai-powered-voice-coding-assistant-with-hybrid-mcp-958ade5893cb',
  },
  {
    title: 'Execution Context in JavaScript — How JavaScript Code Gets Executed',
    date: '2023-05-11',
    tags: ['JavaScript', 'Programming', 'JavaScript Tips'],
    preview:
      'Explains how JavaScript engines create execution environments containing memory and code components to process and run JavaScript applications.',
    link: 'https://dhrumilbhut.medium.com/execution-context-in-javascript-how-javascript-code-gets-executed-895171e27e52',
  },
];
