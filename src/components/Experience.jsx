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
    role: 'Business Development',
    period: 'Jan 2026 · Present',
    location: 'United States & China',
    type: 'Full-time',
    summary: 'U.S.-China supplier sourcing, landed cost modeling, and executive-level business analysis.',
    points: [
      'Led U.S. and China supplier sourcing and total landed cost analysis',
      'Developed landed cost models and evaluated logistics strategies for executive sourcing decisions',
      'Conducted market intelligence and competitor research at manufacturing trade shows',
      'Collaborated with cross-functional teams and overseas suppliers to evaluate new adhesive applications',
      'Prepared executive business analyses, pricing recommendations, and product comparison reports',
    ],
  },
  {
    index: '02',
    company: 'Yee Eyelashes Studio',
    role: 'Business Systems Developer',
    period: 'Apr 2026 · Present',
    location: 'United States',
    type: 'Project',
    summary: 'Full-stack bilingual CRM, booking platform, and tiered loyalty system — built end to end.',
    points: [
      'Built a bilingual booking and CRM platform streamlining end-to-end business operations',
      'Developed analytics dashboards for customer retention, booking conversion, and business performance',
      'Engineered real-time Square POS and Twilio integrations to automate payments and customer engagement',
      'Implemented multilingual SEO and workflow automation to improve online visibility and operational efficiency',
      'Designed a tiered membership and loyalty CRM to automate rewards, customer retention, and lifecycle engagement',
    ],
  },
  {
    index: '03',
    company: 'Dental Wellness Spa',
    role: 'Supply Chain & Business Development Intern',
    period: 'Jun 2025 · Aug 2025',
    location: 'United States',
    type: 'Internship',
    summary: 'Built a supplier evaluation process for a functional beverage new product line from the ground up.',
    points: [
      'Led supplier sourcing and feasibility analysis for functional beverage ingredients',
      'Evaluated vendors based on cost, MOQ, regulatory compliance, and lead time',
      'Built supplier evaluation tools supporting data-driven sourcing decisions',
    ],
  },
  {
    index: '04',
    company: 'Robert Bosch E-bike',
    role: 'Sales Controlling & Commercial Intern',
    period: 'May 2022 · Nov 2023',
    location: 'Europe / Asia',
    type: 'Internship',
    summary: 'Delivered 43% error reduction and 15% fulfillment improvement through Power BI and SAP.',
    points: [
      'Analyzed sales and operational data to identify process improvements and support business decisions',
      'Built Power BI dashboards to monitor order accuracy and fulfillment KPIs, reducing processing errors by 43% and improving fulfillment efficiency by 15%',
      'Worked with SAP for order management, data extraction, and workflow tracking across sales and operations teams',
      'Coordinated with cross-functional teams to resolve order and delivery issues',
    ],
  },
];

export default function Experience() {
  const [active, setActive] = useState(null);

  return (
    <section id="experience" className="relative py-40 bg-ink-900 overflow-hidden">
      <div
        className="absolute right-0 top-0 bottom-0 w-px opacity-20"
        style={{ background: 'linear-gradient(to bottom, transparent, #0071e3, transparent)' }}
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
              className="font-display font-light text-cream leading-tight lg:whitespace-nowrap"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.02em' }}
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
                        <line x1="6" y1="0" x2="6" y2="12" stroke="#0071e3" strokeWidth="0.8"/>
                        <line x1="0" y1="6" x2="12" y2="6" stroke="#0071e3" strokeWidth="0.8"/>
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
