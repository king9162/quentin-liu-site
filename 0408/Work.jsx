import React, { useState } from 'react';
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

const projects = [
  {
    number: '001',
    title: 'Global Manufacturing & Supply Coordination',
    company: 'A.I. Technology, Inc.',
    category: 'Operations',
    year: '2026',
    description:
      'Orchestrated cross-border supply chain operations connecting U.S. and Asian manufacturing facilities. Built systematic frameworks for supplier analysis, inventory coordination, and raw material planning at global scale.',
    outcomes: ['Multi-continent supplier network', 'Inventory planning systems', 'Logistics workflow design'],
    tags: ['Supply Chain', 'Global Ops', 'Logistics'],
  },
  {
    number: '002',
    title: 'Supplier Sourcing & Feasibility Analysis',
    company: 'Dental Wellness Spa',
    category: 'Procurement',
    year: '2025',
    description:
      'Designed and executed a structured supplier evaluation program for a new product development initiative. Built decision-making infrastructure from scratch, spanning MOQ benchmarking, cost analysis, compliance review, and lead time optimization.',
    outcomes: ['Evaluation framework built', 'Multi-supplier comparison', 'Decision trackers deployed'],
    tags: ['Sourcing', 'Feasibility', 'Procurement'],
  },
  {
    number: '003',
    title: 'Power BI Operations Dashboard',
    company: 'Robert Bosch E-bike',
    category: 'Analytics',
    year: '2022–23',
    description:
      'Engineered a Power BI analytics suite to monitor order accuracy and fulfillment performance across global sales channels. The dashboard centralized operational visibility, reduced manual tracking, and gave cross-functional teams reliable data to act on.',
    outcomes: ['Measurable error reduction', 'Improved fulfillment performance', 'Real-time KPI monitoring'],
    tags: ['Power BI', 'SAP', 'Data Analytics'],
  },
  {
    number: '004',
    title: 'Market Analysis for Industrial Trade Shows',
    company: 'A.I. Technology, Inc.',
    category: 'Strategy',
    year: '2026',
    description:
      'Led customer segmentation and market analysis to sharpen targeting strategy for industrial trade show participation. Synthesized competitive landscape research and buyer insights to focus sales and marketing resources on the highest-value opportunities.',
    outcomes: ['Customer segmentation model', 'Competitive landscape mapping', 'Sales targeting strategy'],
    tags: ['Market Analysis', 'Segmentation', 'Strategy'],
  },
];

export default function Work() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="work" className="relative py-40 bg-ink-950 overflow-hidden">
      <div
        className="absolute left-0 top-0 bottom-0 w-px opacity-20"
        style={{ background: 'linear-gradient(to bottom, transparent, #c4a96e, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal>
          <div className="flex items-center gap-4 mb-20">
            <span className="font-mono text-[9px] tracking-widest3 uppercase text-gold">03 — Selected Work</span>
            <div className="h-px flex-1 max-w-[60px] bg-gold opacity-30" />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <Reveal>
            <h2
              className="font-display font-light text-cream leading-tight whitespace-nowrap"
              style={{ fontSize: 'clamp(1.6rem, 3.2vw, 3.2rem)', letterSpacing: '-0.02em' }}
            >
              Projects that{' '}
              <em
                style={{
                  background: 'linear-gradient(135deg, #ddc28d 0%, #c4a96e 50%, #9a7d4a 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                moved the needle.
              </em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-body font-light text-ink-200 text-sm leading-relaxed self-end">
              A curated selection of high-impact work, from building analytics infrastructure at Bosch to
              coordinating global supply chains across two continents.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-ink-700">
          {projects.map((proj, i) => (
            <Reveal key={proj.number} delay={i * 0.08}>
              <motion.div
                className="bg-ink-950 p-10 lg:p-14 relative overflow-hidden group"
                onHoverStart={() => setHovered(i)}
                onHoverEnd={() => setHovered(null)}
                whileHover={{ backgroundColor: '#18181a' }}
                transition={{ duration: 0.4 }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hovered === i ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute top-0 right-0 w-48 h-48 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at top right, rgba(196,169,110,0.07), transparent 70%)',
                  }}
                />

                <div className="flex justify-between items-start mb-10">
                  <span className="font-mono text-[9px] tracking-widest text-ink-500">{proj.number}</span>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[9px] tracking-widest2 uppercase text-gold border border-gold-muted px-3 py-1.5">
                      {proj.category}
                    </span>
                    <span className="font-mono text-[9px] tracking-widest text-ink-500">{proj.year}</span>
                  </div>
                </div>

                <h3
                  className="font-display font-light text-cream mb-3 leading-tight group-hover:text-gold-light transition-colors duration-300"
                  style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', letterSpacing: '-0.01em' }}
                >
                  {proj.title}
                </h3>
                <div className="font-body text-xs text-ink-400 tracking-widest uppercase mb-7">{proj.company}</div>

                <p className="font-body font-light text-ink-200 text-sm leading-relaxed mb-10">
                  {proj.description}
                </p>

                <div className="space-y-2.5 mb-10">
                  {proj.outcomes.map((o, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <div className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                      <span className="font-body text-xs text-ink-100">{o}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {proj.tags.map(tag => (
                    <span
                      key={tag}
                      className="font-mono text-[8px] tracking-widest uppercase text-ink-400 border border-ink-700 px-3 py-1.5 group-hover:border-ink-500 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hovered === i ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute bottom-0 left-0 h-px bg-gold-dark w-full origin-left"
                />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
