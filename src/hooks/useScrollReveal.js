import { useRef } from 'react';
import { useInView } from 'framer-motion';

export function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: options.margin || '-80px 0px',
    amount: options.amount || 0.1,
  });
  return { ref, isInView };
}
