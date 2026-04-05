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

const skillCategories = [
  {
    label: 'Business & Strategy',
    icon: '◈',
    skills: ['Business Analysis', 'Market Analysis', 'Customer Segmentation', 'Cost & Feasibility Analysis', 'Process Improvement', 'Cross-Functional Collaboration'],
  },
  {
    label: 'Supply Chain & Operations',
    icon: '◉',
    skills: ['Sourcing & Supplier Coordination', 'Inventory & Material Planning', 'Global Manufacturing Support', 'Raw Material Logistics', 'Supply Chain Execution'],
  },
  {
    label: 'Tools & Technology',
    icon: '◎',
    skills: ['Power BI', 'SAP ERP', 'Advanced Excel', 'Dashboard Reporting', 'Data Analysis'],
  },
];

const proficiencies = [
  { name: 'Business Analysis', level: 92 },
  { name: 'Supply Chain Operations', level: 88 },
  { name: 'Power BI', level: 85 },
  { name: 'Market Analysis', level: 83 },
  { name: 'SAP ERP', level: 78 },
  { name: 'Data Analytics', level: 80 },
];

function Bar({ name, level, delay }) {
  const { ref, isInView } = useScrollReveal();
  return (
    <div ref={ref} className="group">
      <div className="flex justify-between mb-2">
        <span className="font-body text-sm text-ink-200 group-hover:text-ink-50 transition-colors duration-300">{name}</span>
        <span className="font-mono text-[9px] tracking-widest text-ink-500">{level}%</span>
      </div>
      <div className="h-px bg-ink-700 relative overflow-hidden">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: level / 100 } : {}}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: delay + 0.2 }}
          className="absolute inset-0 origin-left"
          style={{ background: 'linear-gradient(90deg, #8a7248, #b89d6a, #d4bc8e)' }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-40 bg-ink-900 overflow-hidden">
      <div
        className="absolute right-0 top-0 bottom-0 w-px opacity-20"
        style={{ background: 'linear-gradient(to bottom, transparent, #b89d6a, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section label */}
        <Reveal>
          <div className="flex items-center gap-4 mb-20">
            <span className="font-mono text-[9px] tracking-widest3 uppercase text-gold">04 — Capabilities</span>
            <div className="h-px flex-1 max-w-[60px] bg-gold opacity-30" />
          </div>
        </Reveal>

        {/* Header */}
        <Reveal>
          <h2
            className="font-display font-light text-cream leading-tight mb-24"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.02em' }}
          >
            Built to operate
            <br />
            <em className="text-gold-gradient">at every level.</em>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Skill categories */}
          <div className="space-y-14">
            {skillCategories.map((cat, i) => (
              <Reveal key={cat.label} delay={i * 0.1}>
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-gold text-sm">{cat.icon}</span>
                    <span className="font-mono text-[9px] tracking-widest3 uppercase text-ink-400">{cat.label}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, j) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 + j * 0.04, duration: 0.4 }}
                        whileHover={{ borderColor: '#b89d6a', color: '#d4bc8e' }}
                        className="font-body text-xs text-ink-300 border border-ink-700 px-4 py-2 transition-colors duration-300"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Proficiency bars */}
          <div>
            <Reveal>
              <div className="font-mono text-[9px] tracking-widest3 uppercase text-ink-500 mb-10">
                Proficiency Overview
              </div>
            </Reveal>
            <div className="space-y-8">
              {proficiencies.map((item, i) => (
                <Bar key={item.name} name={item.name} level={item.level} delay={i * 0.07} />
              ))}
            </div>

            {/* Divider */}
            <div className="my-14 h-px bg-ink-800" />

            {/* Tools highlight */}
            <Reveal delay={0.3}>
              <div className="font-mono text-[9px] tracking-widest3 uppercase text-ink-500 mb-8">Core Tools</div>
              <div className="grid grid-cols-3 gap-px bg-ink-800">
                {['Power BI', 'SAP ERP', 'Excel', 'Dashboard\nDesign', 'Data\nAnalysis', 'SQL\nAwareness'].map((tool, i) => (
                  <motion.div
                    key={tool}
                    whileHover={{ backgroundColor: '#141414' }}
                    className="bg-ink-900 p-5 group transition-colors duration-300"
                  >
                    <div className="font-display text-lg text-cream font-light group-hover:text-gold transition-colors duration-300 whitespace-pre-line leading-tight">
                      {tool}
                    </div>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
