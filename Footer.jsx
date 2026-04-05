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
          Business Analyst · Supply Chain · Operations · New Jersey, US
        </div>

        <div className="font-mono text-[8px] tracking-widest text-ink-700">
          © {new Date().getFullYear()} · All rights reserved
        </div>
      </div>
    </footer>
  );
}
