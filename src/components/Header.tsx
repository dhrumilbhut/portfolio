import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const NavLinks = () => (
    <nav className="flex items-center space-x-6">
      <Button
        variant="link"
        className="text-base font-medium"
        onClick={() => scrollToSection('about')}
      >
        About
      </Button>
      <Button
        variant="link"
        className="text-base font-medium"
        onClick={() => scrollToSection('experience')}
      >
        Experience
      </Button>
      <Button
        variant="link"
        className="text-base font-medium"
        onClick={() => scrollToSection('skills')}
      >
        Skills
      </Button>
      <Button
        variant="link"
        className="text-base font-medium"
        onClick={() => scrollToSection('projects')}
      >
        Projects
      </Button>
      <Button
        variant="link"
        className="text-base font-medium"
        onClick={() => scrollToSection('contact')}
      >
        Contact
      </Button>
    </nav>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-background/80 backdrop-blur-sm shadow-sm py-3'
        : 'bg-transparent py-5'
        }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center max-w-5xl">
        <a href="#" className="flex items-center">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
            <rect width="32" height="32" rx="8" fill="#111111" />
            <path d="M12 8V24C20.8296 24 22.2074 8 12 8" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </a>

        <div className="hidden md:block">
          <NavLinks />
        </div>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col space-y-4 mt-8">
              <Button
                variant="ghost"
                className="justify-start"
                onClick={() => scrollToSection('about')}
              >
                About
              </Button>
              <Button
                variant="ghost"
                className="justify-start"
                onClick={() => scrollToSection('experience')}
              >
                Experience
              </Button>
              <Button
                variant="ghost"
                className="justify-start"
                onClick={() => scrollToSection('skills')}
              >
                Skills
              </Button>
              <Button
                variant="ghost"
                className="justify-start"
                onClick={() => scrollToSection('projects')}
              >
                Projects
              </Button>
              <Button
                variant="ghost"
                className="justify-start"
                onClick={() => scrollToSection('contact')}
              >
                Contact
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
