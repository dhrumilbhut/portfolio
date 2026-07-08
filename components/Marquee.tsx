const skills = [
  'Node.js',
  'PostgreSQL',
  'Distributed Queues',
  'RAG Pipelines',
  'Redis',
  'RabbitMQ',
  'FastAPI',
  'pgvector',
  'AWS Lambda',
  'MLOps',
];

// Editorial marquee — large serif uppercase items with ✦ separators. The list
// is duplicated once and each item carries its own spacing + separator, so the
// -50% keyframe translate lands exactly one copy over (seamless loop).
const Marquee = () => (
  <div className="overflow-hidden border-y border-border py-6">
    <div className="flex w-max items-center animate-marquee whitespace-nowrap">
      {[...skills, ...skills].map((s, i) => (
        <span key={i} className="flex items-center">
          <span className="font-serif text-2xl md:text-4xl uppercase tracking-wide text-foreground/85 px-8">
            {s}
          </span>
          <span className="text-accent-light text-lg md:text-xl" aria-hidden="true">
            ✦
          </span>
        </span>
      ))}
    </div>
  </div>
);

export default Marquee;
