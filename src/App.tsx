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
    // Set page title
    document.title = 'Dhrumil Bhut | Software Engineer';
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
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
