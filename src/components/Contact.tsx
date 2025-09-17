import { Button } from '@/components/ui/button';
import { Mail, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="section-title">Get In Touch</h2>

        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-8 text-center">
            I'm always open to discussing new projects, opportunities, or collaborations. Feel free to reach out to me through any of the channels below.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <a
              href="mailto:dhrumilbhut@gmail.com"
              className="flex items-center gap-4 p-6 rounded-lg shadow-sm hover:shadow-md transition-all group"
            >
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-lg">Email</h3>
                <p className="text-muted-foreground">dhrumilbhut@gmail.com</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/dhrumilbhut"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 rounded-lg shadow-sm hover:shadow-md transition-all group"
            >
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Linkedin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-lg">LinkedIn</h3>
                <p className="text-muted-foreground">linkedin.com/in/dhrumilbhut</p>
              </div>
            </a>
          </div>

          <div className="text-center">
            <Button className="px-8 rounded-full" size="lg" asChild>
              <a href="mailto:dhrumilbhut@gmail.com">
                Send Me an Email
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
