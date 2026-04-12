import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

const experiences = [
  {
    index: '01',
    company: 'A.I. Technology, Inc.',
    role: 'Business Analyst',
    period: 'Jan 2026 — Present',
    location: 'United States & Asia',
    type: 'Full-time',
    summary: 'Supporting manufacturing operations and sourcing decisions across the U.S. and Asia.',
    points: [
      'Work across manufacturing operations in the U.S. and Asia',
      'Analyze supplier costs, lead times, and availability to guide sourcing decisions',
      'Coordinate raw material logistics and inventory planning',
      'Lead market research and customer targeting for industrial trade shows',
      'Work closely with operations, sales, and production teams',
    ],
  },
  {
    index: '02',
    company: 'Dental Wellness Spa',
    role: 'Supply Chain & Business Development Intern',
    period: 'Jun 2025 — Aug 2025',
    location: 'United States',
    type: 'Internship',
    summary: 'Built a supplier evaluation process for a new product line from the ground up.',
    points: [
      'Led supplier sourcing for functional beverage ingredients',
      'Compared suppliers across cost, compliance, MOQ, and lead time',
      'Built evaluation trackers to keep decisions structured and documented',
    ],
  },
  {
    index: '03',
    company: 'Robert Bosch E-bike',
    role: 'Sales Controlling & Commercial Intern',
    period: 'May 2022 — Nov 2023',
    location: 'Europe / Asia',
    type: 'Internship',
    summary: 'Worked on order operations and analytics across global sales channels.',
    points: [
      'Analyzed sales and order data to identify process inefficiencies',
      'Built Power BI dashboards to track order accuracy and fulfillment',
      'Used SAP ERP for order management across multiple sales channels',
      'Coordinated with sales, planning, and logistics teams on day-to-day operations',
    ],
  },
];

export default function Experience() {
  const [active, setActive] = useState(null);

  return (
    <section id="experience" className="relative py-40 bg-ink-900 overflow-hidden">
      <div
        className="absolute right-0 top-0 bottom-0 w-px opacity-20"
        style={{ background: 'linear-gradient(to bottom, transparent, #b89d6a, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section label */}
        <Reveal>
          <div className="flex items-center gap-4 mb-20">
            <span className="font-mono text-[9px] tracking-widest3 uppercase text-gold">02 — Experience</span>
            <div className="h-px flex-1 max-w-[60px] bg-gold opacity-30" />
          </div>
        </Reveal>

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <Reveal>
            <h2
              className="font-display font-light text-cream leading-tight whitespace-nowrap"
              style={{ fontSize: 'clamp(1.4rem, 2.6vw, 2.2rem)', letterSpacing: '-0.02em' }}
            >
              Where I've <em className="text-gold-gradient">done the work.</em>
            </h2>
          </Reveal>
        </div>

        {/* Timeline */}
        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <Reveal key={exp.index} delay={i * 0.1}>
              <div
                className="group border-t border-ink-700 hover:border-gold-dark transition-colors duration-500 cursor-pointer"
                onClick={() => setActive(active === i ? null : i)}
              >
                <div className="py-10 grid grid-cols-12 gap-6 items-start">
                  {/* Index */}
                  <div className="col-span-1 hidden md:block">
                    <span className="font-mono text-[9px] tracking-widest text-ink-600 group-hover:text-gold transition-colors duration-300">
                      {exp.index}
                    </span>
                  </div>

                  {/* Company + Role */}
                  <div className="col-span-12 md:col-span-4">
                    <div className="font-body text-xs tracking-widest uppercase text-ink-500 mb-2 group-hover:text-gold transition-colors duration-300">
                      {exp.type}
                    </div>
                    <div
                      className="font-display font-light text-cream group-hover:text-gold-light transition-colors duration-300"
                      style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)' }}
                    >
                      {exp.company}
                    </div>
                    <div className="font-body text-sm text-ink-400 mt-1">{exp.role}</div>
                  </div>

                  {/* Summary */}
                  <div className="col-span-12 md:col-span-4">
                    <p className="font-body font-light text-ink-300 text-sm leading-relaxed">{exp.summary}</p>
                  </div>

                  {/* Period */}
                  <div className="col-span-12 md:col-span-2 flex md:justify-end">
                    <span className="font-mono text-[9px] tracking-widest text-ink-500 uppercase">{exp.period}</span>
                  </div>

                  {/* Expand indicator */}
                  <div className="col-span-1 flex justify-end items-start pt-1">
                    <motion.div
                      animate={{ rotate: active === i ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-4 h-4 flex items-center justify-center"
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <line x1="6" y1="0" x2="6" y2="12" stroke="#b89d6a" strokeWidth="0.8"/>
                        <line x1="0" y1="6" x2="12" y2="6" stroke="#b89d6a" strokeWidth="0.8"/>
                      </svg>
                    </motion.div>
                  </div>
                </div>

                {/* Expanded detail */}
                <AnimatePresence>
                  {active === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-10 pl-0 md:pl-[8.33%] grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div>
                          <div className="font-mono text-[9px] tracking-widest3 uppercase text-ink-600 mb-5">Responsibilities</div>
                          <ul className="space-y-3">
                            {exp.points.map((pt, j) => (
                              <li key={j} className="flex items-start gap-4">
                                <span className="mt-2 w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                                <span className="font-body font-light text-ink-300 text-sm leading-relaxed">{pt}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex flex-col justify-start">
                          <div className="font-mono text-[9px] tracking-widest3 uppercase text-ink-600 mb-5">Location</div>
                          <span className="font-body text-ink-200 text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom border */}
        <div className="border-t border-ink-700 mt-0" />
      </div>
    </section>
  );
}
