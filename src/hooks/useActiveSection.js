import { useState, useEffect } from 'react';

export function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const visible = new Set();

    const observers = sectionIds.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            visible.add(id);
          } else {
            visible.delete(id);
          }
          const first = sectionIds.find(s => visible.has(s));
          if (first) setActiveSection(first);
        },
        { threshold: 0.25 }
      );

      observer.observe(el);
      return observer;
    });

    return () => observers.forEach(o => o && o.disconnect());
  }, []);

  return activeSection;
}
