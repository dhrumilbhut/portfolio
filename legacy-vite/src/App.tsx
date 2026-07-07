import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Blogs from './components/Blogs';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = 'Dhrumil Bhut | Software Engineer';
  }, []);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--cx', `${e.clientX}px`);
      document.documentElement.style.setProperty('--cy', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', move, { passive: true });
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Cursor spotlight — updates via CSS variable, no React re-renders */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[48]"
        style={{
          background:
            'radial-gradient(600px circle at var(--cx, -9999px) var(--cy, -9999px), rgba(255,255,255,0.04) 0%, transparent 80%)',
        }}
      />
      {/* Film-grain noise overlay */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[49] opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '300px 300px',
        }}
      />
      <Header />

      <main className="flex-grow">
        <Hero />
        <Experience />
        <Projects />
        <Blogs />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
