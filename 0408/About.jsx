import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';

function Reveal({ children, delay = 0, className = '' }) {
  const { ref, isInView } = useScrollReveal();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: 'Global', label: 'Manufacturing Ops' },
  { value: '2', label: 'Continents' },
  { value: 'M.S.', label: 'Supply Chain Analytics' },
];

export default function About() {
  return (
    <section id="about" className="relative py-40 bg-ink-950 overflow-hidden">
      <div
        className="absolute left-0 top-0 bottom-0 w-px opacity-20"
        style={{ background: 'linear-gradient(to bottom, transparent, #c4a96e, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal>
          <div className="flex items-center gap-4 mb-20">
            <span className="font-mono text-[9px] tracking-widest3 uppercase text-gold">01 — About</span>
            <div className="h-px flex-1 max-w-[60px] bg-gold opacity-30" />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-start">
          <div>
            <Reveal delay={0.1}>
              <h2
                className="font-display font-light text-cream leading-tight mb-10 whitespace-nowrap"
                style={{ fontSize: 'clamp(1.6rem, 3.2vw, 3.2rem)', letterSpacing: '-0.02em' }}
              >
                Where analysis meets{' '}
                <em
                  style={{
                    background: 'linear-gradient(135deg, #ddc28d 0%, #c4a96e 50%, #9a7d4a 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  execution.
                </em>
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="font-body font-light text-ink-100 leading-relaxed mb-8" style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                I'm Quentin Liu, a Business Analyst working at the intersection of supply chain strategy,
                operational execution, and data-driven decision making. Based in New Jersey, operating globally.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="font-body font-light text-ink-200 leading-relaxed mb-10" style={{ fontSize: '0.95rem', lineHeight: 1.9 }}>
                At A.I. Technology, I coordinate manufacturing operations spanning the U.S. and Asia,
                analyzing supplier ecosystems, managing raw material logistics, and shaping market strategy
                for industrial trade shows. My work connects operational complexity with clear, actionable intelligence.
              </p>
            </Reveal>

            <Reveal delay={0.35}>
              <p className="font-body font-light text-ink-200 leading-relaxed mb-14" style={{ fontSize: '0.95rem', lineHeight: 1.9 }}>
                My background includes building Power BI analytics infrastructure at Bosch,
                designing supplier feasibility frameworks, and managing SAP-driven order operations
                across global sales channels. Fluent in English and Mandarin Chinese, I work
                naturally across cultures and time zones.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="flex flex-wrap gap-3">
                {['Business Analysis', 'Supply Chain', 'Operations', 'Market Analysis'].map(tag => (
                  <span
                    key={tag}
                    className="font-mono text-[9px] tracking-widest2 uppercase text-gold border border-gold-muted px-4 py-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-px bg-ink-700 mb-16">
              {stats.map((stat, i) => (
                <Reveal key={stat.label} delay={0.15 + i * 0.08}>
                  <div className="bg-ink-950 p-8 hover:bg-ink-900 transition-colors duration-500 group">
                    <div
                      className="font-display text-gold font-light mb-2 group-hover:text-gold-light transition-colors duration-300"
                      style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
                    >
                      {stat.value}
                    </div>
                    <div className="font-mono text-[9px] tracking-widest2 uppercase text-ink-300">
                      {stat.label}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.5}>
              <div className="border-l-2 border-gold-dark pl-8">
                <div className="font-mono text-[9px] tracking-widest3 uppercase text-ink-400 mb-5">Languages</div>
                <div className="space-y-4">
                  {[
                    { lang: 'English', level: 'Professional Fluency', pct: 95 },
                    { lang: 'Mandarin Chinese', level: 'Native', pct: 100 },
                  ].map(({ lang, level, pct }) => (
                    <div key={lang}>
                      <div className="flex justify-between mb-2">
                        <span className="font-body text-sm text-ink-100">{lang}</span>
                        <span className="font-mono text-[9px] tracking-widest text-ink-400 uppercase">{level}</span>
                      </div>
                      <div className="h-px bg-ink-700 relative">
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                          className="absolute inset-0 bg-gold origin-left"
                          style={{ transform: `scaleX(${pct / 100})` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
