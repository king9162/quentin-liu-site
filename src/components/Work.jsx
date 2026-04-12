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
    title: 'Manufacturing & Supply Coordination',
    company: 'A.I. Technology, Inc.',
    category: 'Operations',
    year: '2026',
    description:
      'Working across U.S. and Asian manufacturing facilities, I help keep materials moving and suppliers aligned. The work ranges from sourcing analysis to logistics coordination — the kind of day-to-day operations that keep production on track.',
    outcomes: ['Cross-border supplier coordination', 'Inventory planning support', 'Raw material logistics'],
    tags: ['Supply Chain', 'Global Ops', 'Logistics'],
  },
  {
    number: '002',
    title: 'Supplier Sourcing & Feasibility Analysis',
    company: 'Dental Wellness Spa',
    category: 'Procurement',
    year: '2025',
    description:
      'When the team needed a supplier for a new product, there was no existing process. I built it from scratch: defined what to look for, compared candidates across cost and compliance, and created trackers that made the decision clear and easy to document.',
    outcomes: ['Evaluation framework created', 'Supplier comparison built', 'Decision documentation in place'],
    tags: ['Sourcing', 'Feasibility', 'Procurement'],
  },
  {
    number: '003',
    title: 'Power BI Operations Dashboard',
    company: 'Robert Bosch E-bike',
    category: 'Analytics',
    year: '2022–23',
    description:
      'Built a set of Power BI dashboards to track order accuracy and fulfillment across global sales channels. The goal was simple: give the team visibility they didn\'t have before and reduce the manual effort of catching errors after the fact.',
    outcomes: ['Real-time order visibility', 'Reduced manual tracking', 'KPI monitoring across channels'],
    tags: ['Power BI', 'SAP', 'Data Analytics'],
  },
  {
    number: '004',
    title: 'Market Analysis for Industrial Trade Shows',
    company: 'A.I. Technology, Inc.',
    category: 'Strategy',
    year: '2026',
    description:
      'To make trade show participation worthwhile, I worked on understanding the customer landscape: who the buyers are, what they care about, and where to focus. The research helped the team go in with a clearer picture of who they were talking to.',
    outcomes: ['Customer segmentation', 'Competitive landscape research', 'Sales focus refined'],
    tags: ['Market Analysis', 'Segmentation', 'Strategy'],
  },
];

export default function Work() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="work" className="relative py-40 bg-ink-950 overflow-hidden">
      <div
        className="absolute left-0 top-0 bottom-0 w-px opacity-20"
        style={{ background: 'linear-gradient(to bottom, transparent, #b89d6a, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section label */}
        <Reveal>
          <div className="flex items-center gap-4 mb-20">
            <span className="font-mono text-[9px] tracking-widest3 uppercase text-gold">03 — Selected Work</span>
            <div className="h-px flex-1 max-w-[60px] bg-gold opacity-30" />
          </div>
        </Reveal>

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <Reveal>
            <h2
              className="font-display font-light text-cream leading-tight"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.02em' }}
            >
              Work that <em className="text-gold-gradient">made a difference.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-body font-light text-ink-300 text-sm leading-relaxed self-end">
              A selection of work from the past few years, from building analytics at Bosch to
              coordinating supply chains across two continents.
            </p>
          </Reveal>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-ink-800">
          {projects.map((proj, i) => (
            <Reveal key={proj.number} delay={i * 0.08}>
              <motion.div
                className="bg-ink-950 p-10 lg:p-14 relative overflow-hidden group"
                onHoverStart={() => setHovered(i)}
                onHoverEnd={() => setHovered(null)}
                whileHover={{ backgroundColor: '#0e0e0e' }}
                transition={{ duration: 0.4 }}
              >
                {/* Hover gradient */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hovered === i ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute top-0 right-0 w-48 h-48 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at top right, rgba(184,157,106,0.06), transparent 70%)',
                  }}
                />

                {/* Number + Category */}
                <div className="flex justify-between items-start mb-10">
                  <span className="font-mono text-[9px] tracking-widest text-ink-600">{proj.number}</span>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[9px] tracking-widest2 uppercase text-gold border border-gold-muted px-3 py-1.5">
                      {proj.category}
                    </span>
                    <span className="font-mono text-[9px] tracking-widest text-ink-600">{proj.year}</span>
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="font-display font-light text-cream mb-3 leading-tight group-hover:text-gold-light transition-colors duration-400"
                  style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', letterSpacing: '-0.01em' }}
                >
                  {proj.title}
                </h3>
                <div className="font-body text-xs text-ink-500 tracking-widest uppercase mb-7">{proj.company}</div>

                {/* Description */}
                <p className="font-body font-light text-ink-300 text-sm leading-relaxed mb-10">
                  {proj.description}
                </p>

                {/* Outcomes */}
                <div className="space-y-2.5 mb-10">
                  {proj.outcomes.map((o, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <div className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                      <span className="font-body text-xs text-ink-200">{o}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {proj.tags.map(tag => (
                    <span
                      key={tag}
                      className="font-mono text-[8px] tracking-widest uppercase text-ink-500 border border-ink-700 px-3 py-1.5 group-hover:border-ink-500 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom line accent */}
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
