import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';

function Reveal({ children, delay = 0, className = '' }) {
  const { ref, isInView } = useScrollReveal();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const education = [
  {
    degree: 'M.S. Supply Chain Analytics',
    school: 'Rutgers University–New Brunswick',
    period: 'Sep 2024 — Dec 2025',
    detail: 'Graduate program focused on supply chain analytics, operations strategy, and data-driven decision making.',
    location: 'New Jersey, USA',
  },
  {
    degree: 'B.A. International Business',
    school: 'Tunghai University',
    period: 'Sep 2019 — Jun 2023',
    detail: 'Undergraduate study in international business, global commerce, and cross-cultural management.',
    location: 'Taiwan',
  },
];

export default function Education() {
  return (
    <section id="education" className="relative py-40 bg-ink-950 overflow-hidden">
      <div
        className="absolute left-0 top-0 bottom-0 w-px opacity-20"
        style={{ background: 'linear-gradient(to bottom, transparent, #b89d6a, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section label */}
        <Reveal>
          <div className="flex items-center gap-4 mb-20">
            <span className="font-mono text-[9px] tracking-widest3 uppercase text-gold">05 — Education</span>
            <div className="h-px flex-1 max-w-[60px] bg-gold opacity-30" />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-ink-800">
          {education.map((edu, i) => (
            <Reveal key={edu.school} delay={i * 0.12} className="h-full">
              <motion.div
                whileHover={{ backgroundColor: '#0e0e0e' }}
                className="h-full bg-ink-950 p-12 lg:p-16 group transition-colors duration-500 relative overflow-hidden"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute top-0 left-0 w-full h-px bg-gold-dark"
                />

                <div className="font-mono text-[9px] tracking-widest3 uppercase text-ink-600 mb-8">
                  {edu.period}
                </div>

                <h3
                  className="font-display font-light text-cream leading-tight mb-3 group-hover:text-gold-light transition-colors duration-300"
                  style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', letterSpacing: '-0.01em' }}
                >
                  {edu.degree}
                </h3>

                <div className="font-body text-sm text-gold mb-8">{edu.school}</div>

                <p className="font-body font-light text-ink-400 text-sm leading-relaxed mb-8">
                  {edu.detail}
                </p>

                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-gold opacity-60" />
                  <span className="font-mono text-[9px] tracking-widest text-ink-500 uppercase">{edu.location}</span>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
