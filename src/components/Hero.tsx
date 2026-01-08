import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin, Mail, X } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="about"
      className="min-h-screen pt-28 pb-16 flex flex-col justify-center relative overflow-hidden"
    >
      {/* Background subtle pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, black 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
            Hi, I'm <span className="highlight">Dhrumil Bhut</span>
          </h1>
          <h2 className="text-2xl md:text-3xl mb-6 text-muted-foreground animate-fade-in-delay-1">
            AI Engineer (Backend + Applied AI)
          </h2>
          <p className="text-lg mb-8 leading-relaxed animate-fade-in-delay-1 max-w-2xl">
            <span className="font-semibold">Applied AI Engineer building production-grade LLM systems.</span> <br />
            I design and ship end-to-end AI solutions that combine backend engineering, Retrieval-Augmented Generation (RAG), vector search, automated evaluation, and MLOps practices to deliver scalable, real-world impact.
            <br />
            <br />
            <span className="font-semibold">Open to new opportunities and collaborations.</span>
          </p>

          <div className="flex flex-wrap gap-4 mb-12 animate-fade-in-delay-2">
            <Button
              className="flex items-center gap-2 px-6 rounded-full text-base"
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg"
            >
              View Experience
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              className="flex items-center gap-2 px-6 rounded-full text-base"
              asChild
              size="lg"
            >
              <a href="mailto:dhrumilbhut@gmail.com">
                Contact Me
                <Mail className="w-4 h-4" />
              </a>
            </Button>
          </div>

          <div className="flex items-center space-x-6 animate-fade-in-delay-3">
            <a
              href="https://github.com/dhrumilbhut"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/dhrumilbhut"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:dhrumilbhut@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="w-6 h-6" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
    </section >
  );
};

export default Hero;
