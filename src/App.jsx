import React from 'react';
import { useLenis } from './hooks/useLenis';
import Cursor from './components/Cursor';
import ScrollProgress from './components/ScrollProgress';
import GrainOverlay from './components/GrainOverlay';
import BackToTop from './components/BackToTop';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Work from './components/Work';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useLenis();
  return (
    <div className="bg-ink-950 min-h-screen">
      <Cursor />
      <ScrollProgress />
      <GrainOverlay />
      <BackToTop />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Work />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
