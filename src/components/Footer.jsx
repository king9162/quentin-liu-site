import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-ink-950 border-t border-ink-800 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-display text-lg font-light tracking-widest2 text-ink-400">
          Quentin Liu
        </div>

        <div className="font-mono text-[8px] tracking-widest3 uppercase text-ink-600 text-center">
          Business Analyst · Supply Chain · Strategy · New Jersey, US
        </div>

        <div className="flex items-center gap-6">
          <a
            href="mailto:0906yuliang@gmail.com"
            className="font-mono text-[8px] tracking-widest uppercase text-ink-600 hover:text-gold transition-colors duration-300"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/quentin-liu/"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-[8px] tracking-widest uppercase text-ink-600 hover:text-gold transition-colors duration-300"
          >
            LinkedIn
          </a>
          <span className="font-mono text-[8px] tracking-widest text-ink-700">
            © {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  );
}
