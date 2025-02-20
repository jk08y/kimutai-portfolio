import React, { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
import Skills from '../components/sections/Skills';
import Experience from '../components/sections/Experience';
import Certifications from '../components/sections/Certifications';
import Contact from '../components/sections/Contact';
import StoreBanner from '../components/ui/StoreBanner';
import ServicesBanner from '../components/ui/ServicesBanner';
import SEO from '../components/layout/SEO';

/**
 * Home page component that contains all sections of the portfolio
 */
const HomePage = () => {
  // Scroll to section from URL hash on load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Wait for render to complete
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          const navbarHeight = 80; // Approximate navbar height
          const y = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <>
      <SEO 
        title="Kimutai Joel - Software Engineer Portfolio"
        description="Professional portfolio of Kimutai Joel, a Full Stack Developer specializing in modern web applications and cloud services."
      />
      <StoreBanner />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <ServicesBanner />
      <Contact />
    </>
  );
};

export default HomePage;