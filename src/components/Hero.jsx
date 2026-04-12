import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '28%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.04]);

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-ink-950"
    >
      <motion.div style={{ scale }} className="absolute inset-0">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 55%, rgba(196,169,110,0.07) 0%, transparent 70%)' }} />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(196,169,110,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(196,169,110,0.6) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
      </motion.div>

      <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.4 }} className="absolute top-24 left-12 right-12 h-px bg-gradient-to-r from-transparent via-gold-dark to-transparent origin-left" />

      <motion.div style={{ y: yText, opacity }} className="relative z-10 text-center px-6 w-full max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.5 }} className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px w-12 bg-gold opacity-60" />
          <span className="font-mono text-[10px] tracking-widest3 uppercase text-gold">Business Analyst · Supply Chain · Strategy</span>
          <div className="h-px w-12 bg-gold opacity-60" />
        </motion.div>

        <div className="overflow-hidden mb-10">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
            className="font-display font-light leading-none"
            style={{ fontSize: 'clamp(3rem, 9vw, 9rem)', letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}
          >
            <span style={{ color: '#f5f0e8' }}>Quentin </span>
            <em style={{ fontStyle: 'italic', background: 'linear-gradient(135deg, #ddc28d 0%, #c4a96e 50%, #9a7d4a 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Liu</em>
          </motion.h1>
        </div>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.9 }} className="font-body font-light text-ink-200 mb-14 max-w-lg mx-auto" style={{ fontSize: '1.05rem', lineHeight: 1.75 }}>
          Analytical thinking applied to supply chain, operations, and strategy.<br />
          Based in New Jersey, working across the U.S. and Asia.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 1.05 }} className="flex items-center justify-center gap-5 flex-wrap">
          <button onClick={scrollToAbout} className="font-body text-xs tracking-widest2 uppercase px-8 py-3.5 bg-gold text-ink-950 hover:bg-gold-light transition-all duration-300">View My Work</button>
          <a href="mailto:0906yuliang@gmail.com" className="font-body text-xs tracking-widest2 uppercase px-8 py-3.5 border border-ink-500 text-ink-100 hover:border-gold hover:text-gold transition-all duration-300">Get In Touch</a>
        </motion.div>
      </motion.div>

      <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.6 }} className="absolute bottom-24 left-12 right-12 h-px bg-gradient-to-r from-transparent via-gold-dark to-transparent origin-right" />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6, duration: 0.8 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-mono text-[9px] tracking-widest3 uppercase text-ink-400">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }} className="w-px h-8 bg-gradient-to-b from-gold-dark to-transparent" />
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 0.8 }} className="absolute bottom-10 right-12 hidden md:flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-gold opacity-70" />
        <span className="font-mono text-[9px] tracking-widest2 text-ink-400 uppercase">New Jersey, US</span>
      </motion.div>
    </section>
  );
}
