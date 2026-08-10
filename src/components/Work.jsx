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
    title: 'Business Development',
    company: 'A.I. Technology, Inc.',
    category: 'Operations',
    year: '2026',
    description:
      'Manage U.S.-China supplier sourcing end to end — modeling total landed costs, evaluating logistics strategies, and preparing the business analyses and product comparison reports that inform executive sourcing decisions. Also run market intelligence and competitor research at manufacturing trade shows.',
    outcomes: ['Executive-grade landed cost models', 'U.S.–China dual-market sourcing', 'Trade show competitive intelligence'],
    tags: ['Supply Chain', 'Cost Analysis', 'Business Development'],
  },
  {
    number: '002',
    title: 'Business Systems Developer',
    company: 'Yee Eyelashes Studio',
    category: 'Business Systems',
    year: '2026',
    description:
      'Designed and built a full-stack bilingual booking and CRM platform, then extended it into a tiered membership and loyalty system. Integrated Square POS and Twilio for real-time payment automation and customer communication. Added analytics dashboards tracking retention and booking conversion, and implemented multilingual SEO to grow organic visibility.',
    outcomes: ['Full-stack bilingual CRM live', 'Real-time POS + SMS automation', 'Tiered loyalty system deployed'],
    tags: ['CRM', 'Business Systems', 'Automation', 'SEO'],
  },
  {
    number: '003',
    title: 'Sales Controlling & Commercial Intern',
    company: 'Robert Bosch E-bike',
    category: 'Analytics',
    year: '2022–23',
    description:
      'Built Power BI dashboards to monitor order accuracy and fulfillment KPIs across global sales channels, reducing processing errors by 43% and improving fulfillment efficiency by 15%. Worked daily in SAP ERP for order management and collaborated with sales, planning, and logistics teams on operational improvements.',
    outcomes: ['43% processing error reduction', '15% fulfillment efficiency gain', 'Multi-channel SAP order visibility'],
    tags: ['Power BI', 'SAP ERP', 'Data Analytics'],
  },
  {
    number: '004',
    title: 'Supply Chain & Business Development Intern',
    company: 'Dental Wellness Spa',
    category: 'Procurement',
    year: '2025',
    description:
      'Led supplier sourcing and feasibility analysis for a new functional beverage product line. Evaluated vendors across cost, MOQ, regulatory compliance, and lead time, and built the evaluation tools that structured the sourcing decision from start to finish.',
    outcomes: ['Sourcing framework built from scratch', 'Multi-vendor cost & compliance matrix', 'Data-driven vendor selection'],
    tags: ['Sourcing', 'Feasibility', 'Procurement'],
  },
];

export default function Work() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="work" className="relative py-40 bg-ink-950 overflow-hidden">
      <div
        className="absolute left-0 top-0 bottom-0 w-px opacity-20"
        style={{ background: 'linear-gradient(to bottom, transparent, #0071e3, transparent)' }}
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
              className="font-display font-light text-cream leading-tight lg:whitespace-nowrap"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.02em' }}
            >
              Work that <em className="text-gold-gradient">made a difference.</em>
            </h2>
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
                whileHover={{ backgroundColor: '#f5f5f7' }}
                transition={{ duration: 0.4 }}
              >
                {/* Hover gradient */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hovered === i ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute top-0 right-0 w-48 h-48 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at top right, rgba(0,113,227,0.06), transparent 70%)',
                  }}
                />

                {/* Number + Category */}
                <div className="flex justify-between items-start mb-10">
                  <span className="font-mono text-[9px] tracking-widest text-ink-600">{proj.number}</span>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[9px] tracking-widest2 uppercase text-gold border border-gold-muted px-3 py-1.5 rounded-full">
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
