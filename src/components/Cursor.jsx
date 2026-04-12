import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const isTouchDevice = typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches;

function CursorInner() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const trailX = useSpring(cursorX, { stiffness: 80, damping: 20 });
  const trailY = useSpring(cursorY, { stiffness: 80, damping: 20 });
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const onEnter = () => {
      if (dotRef.current) dotRef.current.style.transform = 'scale(0.4)';
      if (ringRef.current) ringRef.current.style.transform = 'scale(2.2)';
    };

    const onLeave = () => {
      if (dotRef.current) dotRef.current.style.transform = 'scale(1)';
      if (ringRef.current) ringRef.current.style.transform = 'scale(1)';
    };

    window.addEventListener('mousemove', move);

    const interactables = document.querySelectorAll('a, button, [role="button"]');
    interactables.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      window.removeEventListener('mousemove', move);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{ x: cursorX, y: cursorY }}
      >
        <div
          style={{
            width: 6,
            height: 6,
            borderRadius: '50%',
            background: '#b89d6a',
            transform: 'translate(-50%, -50%)',
            transition: 'transform 0.2s cubic-bezier(0.16,1,0.3,1)',
          }}
        />
      </motion.div>

      <motion.div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{ x: trailX, y: trailY }}
      >
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: '50%',
            border: '1px solid rgba(184,157,106,0.45)',
            transform: 'translate(-50%, -50%)',
            transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1)',
          }}
        />
      </motion.div>
    </>
  );
}

export default function Cursor() {
  if (isTouchDevice) return null;
  return <CursorInner />;
}
