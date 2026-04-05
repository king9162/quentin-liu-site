import React, { useEffect, useRef } from 'react';
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
      {/* Ambient background */}
      <motion.div
        style={{ scale }}
        className="absolute inset-0"
      >
        {/* Radial warm glow */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 70% 60% at 50% 55%, rgba(184,157,106,0.05) 0%, transparent 70%)',
          }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(184,157,106,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(184,157,106,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
        {/* Noise overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E")`,
          }}
        />
      </motion.div>

      {/* Thin horizontal line — top rule */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        className="absolute top-24 left-12 right-12 h-px bg-gradient-to-r from-transparent via-gold-dark to-transparent origin-left"
      />

      {/* Main content */}
      <motion.div
        style={{ y: yText, opacity }}
        className="relative z-10 text-center px-6 max-w-6xl mx-auto"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          <div className="h-px w-12 bg-gold opacity-60" />
          <span className="font-mono text-[10px] tracking-widest3 uppercase text-gold">
            Business Analyst · Operations · Strategy
          </span>
          <div className="h-px w-12 bg-gold opacity-60" />
        </motion.div>

        {/* Name */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
            className="font-display font-light leading-none"
            style={{ fontSize: 'clamp(4rem, 12vw, 11rem)', letterSpacing: '-0.02em', color: '#f7f3ec' }}
          >
            Quentin
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-10">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.72 }}
            className="font-display italic font-light leading-none text-gold-gradient"
            style={{ fontSize: 'clamp(4rem, 12vw, 11rem)', letterSpacing: '-0.02em' }}
          >
            Liu
          </motion.h1>
        </div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.9 }}
          className="font-body font-light text-ink-300 mb-14 max-w-lg mx-auto"
          style={{ fontSize: '1.05rem', lineHeight: 1.7, letterSpacing: '0.02em' }}
        >
          Turning supply chain complexity into operational clarity.
          <br />
          From global manufacturing floors to data-driven decisions.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 1.05 }}
          className="flex items-center justify-center gap-5 flex-wrap"
        >
          <button
            onClick={scrollToAbout}
            className="group relative font-body text-xs tracking-widest2 uppercase px-8 py-3.5 bg-gold text-ink-950 hover:bg-gold-light transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">View My Work</span>
          </button>
          <a
            href="mailto:0906yuliang@gmail.com"
            className="font-body text-xs tracking-widest2 uppercase px-8 py-3.5 border border-ink-500 text-ink-200 hover:border-gold hover:text-gold transition-all duration-300"
          >
            Get In Touch
          </a>
        </motion.div>
      </motion.div>

      {/* Bottom rule */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
        className="absolute bottom-24 left-12 right-12 h-px bg-gradient-to-r from-transparent via-gold-dark to-transparent origin-right"
      />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[9px] tracking-widest3 uppercase text-ink-500">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-gold-dark to-transparent"
        />
      </motion.div>

      {/* Location tag */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-10 right-12 hidden md:flex items-center gap-2"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-gold opacity-70" />
        <span className="font-mono text-[9px] tracking-widest2 text-ink-500 uppercase">New Jersey, US</span>
      </motion.div>
    </section>
  );
}
