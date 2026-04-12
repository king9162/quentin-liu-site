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

const contactLinks = [
  { label: 'Email', value: '0906yuliang@gmail.com', href: 'mailto:0906yuliang@gmail.com' },
  { label: 'Phone', value: '+1-530-933-7152', href: 'tel:+15309337152' },
  { label: 'LinkedIn', value: '/in/quentin-liu', href: 'https://www.linkedin.com/in/quentin-liu/' },
  { label: 'Location', value: 'New Jersey, United States', href: null },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-40 bg-ink-900 overflow-hidden">
      {/* Ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 60% at 50% 100%, rgba(184,157,106,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section label */}
        <Reveal>
          <div className="flex items-center gap-4 mb-20">
            <span className="font-mono text-[9px] tracking-widest3 uppercase text-gold">06 — Contact</span>
            <div className="h-px flex-1 max-w-[60px] bg-gold opacity-30" />
          </div>
        </Reveal>

        {/* Big CTA headline */}
        <Reveal>
          <h2
            className="font-display font-light text-cream leading-tight mb-8"
            style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', letterSpacing: '-0.03em' }}
          >
            Let's <em className="text-gold-gradient">connect.</em>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="font-body font-light text-ink-300 text-base leading-relaxed mb-20 max-w-lg">
            Open to new opportunities and interesting conversations. If you think there's a fit, reach out anytime.
          </p>
        </Reveal>

        {/* Contact grid */}
        <div className="border-t border-ink-700">
          {contactLinks.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.08}>
              <div className="border-b border-ink-800 py-7 grid grid-cols-3 items-center group">
                <span className="font-mono text-[9px] tracking-widest3 uppercase text-ink-600">{item.label}</span>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="col-span-2 font-body text-ink-200 hover:text-gold transition-colors duration-300 flex items-center gap-4 group"
                  >
                    <span>{item.value}</span>
                    <motion.span
                      initial={{ x: 0, opacity: 0 }}
                      whileHover={{ x: 4, opacity: 1 }}
                      className="text-gold text-xs"
                    >
                      →
                    </motion.span>
                  </a>
                ) : (
                  <span className="col-span-2 font-body text-ink-300">{item.value}</span>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Primary CTA */}
        <Reveal delay={0.4}>
          <div className="mt-16 flex flex-col sm:flex-row gap-5">
            <a
              href="mailto:0906yuliang@gmail.com"
              className="group inline-flex items-center gap-4 font-body text-xs tracking-widest2 uppercase px-10 py-4 bg-gold text-ink-950 hover:bg-gold-light transition-all duration-300"
            >
              Send a Message
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
            <a
              href="https://www.linkedin.com/in/quentin-liu/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-4 font-body text-xs tracking-widest2 uppercase px-10 py-4 border border-ink-600 text-ink-200 hover:border-gold hover:text-gold transition-all duration-300"
            >
              View LinkedIn
              <span>↗</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
