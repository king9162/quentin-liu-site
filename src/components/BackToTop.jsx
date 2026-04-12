import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-10 right-12 z-[150] w-10 h-10 border border-gold-dark flex items-center justify-center text-gold hover:bg-gold hover:text-ink-950 transition-all duration-300"
          aria-label="Back to top"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <line x1="6" y1="11" x2="6" y2="1" stroke="currentColor" strokeWidth="0.9"/>
            <polyline points="2,5 6,1 10,5" stroke="currentColor" strokeWidth="0.9" fill="none"/>
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
