import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Writing from "@/components/Writing";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { site, yearsOfExperience } from "@/lib/site";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  jobTitle: site.jobTitle,
  email: `mailto:${site.email}`,
  sameAs: [site.github, site.linkedin],
};

export default function Home() {
  const years = yearsOfExperience();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Hero serverYears={years} />
      <Marquee />
      <About serverYears={years} />
      <Experience />
      <Projects />
      <Writing />
      <Skills />
      <Contact />
    </>
  );
}
