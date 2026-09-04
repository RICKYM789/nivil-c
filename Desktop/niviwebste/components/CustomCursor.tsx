'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState<'default' | 'project' | 'link' | 'video' | 'hover'>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch capability
    if (window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window) {
      setIsTouchDevice(true);
      return;
    }

    // Enable custom cursor class on body
    document.body.classList.add('custom-cursor-enabled');

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor]') as HTMLElement | null;
      const cursorTextAttr = target.closest('[data-cursor-text]') as HTMLElement | null;

      if (cursorTextAttr) {
        setCursorText(cursorTextAttr.getAttribute('data-cursor-text') || '');
      }

      if (cursorTarget) {
        const type = cursorTarget.getAttribute('data-cursor');
        if (type === 'project') {
          setCursorVariant('project');
          if (!cursorTextAttr) setCursorText('VIEW');
        } else if (type === 'link') {
          setCursorVariant('link');
          if (!cursorTextAttr) setCursorText('OPEN ↗');
        } else if (type === 'video') {
          setCursorVariant('video');
          if (!cursorTextAttr) setCursorText('PLAY');
        } else {
          setCursorVariant('hover');
        }
      } else if (target.closest('a, button')) {
        setCursorVariant('hover');
        setCursorText('');
      } else {
        setCursorVariant('default');
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.body.classList.remove('custom-cursor-enabled');
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  const variants = {
    default: {
      x: position.x - 6,
      y: position.y - 6,
      width: 12,
      height: 12,
      backgroundColor: '#FFFFFF',
      mixBlendMode: 'difference' as const,
      borderRadius: '50%',
      transition: { type: 'spring' as const, damping: 30, stiffness: 400, mass: 0.2 }
    },
    hover: {
      x: position.x - 20,
      y: position.y - 20,
      width: 40,
      height: 40,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      border: '1px solid #FFFFFF',
      mixBlendMode: 'normal' as const,
      borderRadius: '50%',
      transition: { type: 'spring' as const, damping: 25, stiffness: 350, mass: 0.3 }
    },
    project: {
      x: position.x - 45,
      y: position.y - 45,
      width: 90,
      height: 90,
      backgroundColor: '#FFFFFF',
      color: '#000000',
      mixBlendMode: 'normal' as const,
      borderRadius: '50%',
      transition: { type: 'spring' as const, damping: 22, stiffness: 300, mass: 0.4 }
    },
    link: {
      x: position.x - 45,
      y: position.y - 45,
      width: 90,
      height: 90,
      backgroundColor: '#FFFFFF',
      color: '#000000',
      mixBlendMode: 'normal' as const,
      borderRadius: '50%',
      transition: { type: 'spring' as const, damping: 22, stiffness: 300, mass: 0.4 }
    },
    video: {
      x: position.x - 45,
      y: position.y - 45,
      width: 90,
      height: 90,
      backgroundColor: '#FFFFFF',
      color: '#000000',
      mixBlendMode: 'normal' as const,
      borderRadius: '50%',
      transition: { type: 'spring' as const, damping: 22, stiffness: 300, mass: 0.4 }
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center font-mono text-[11px] font-bold tracking-widest uppercase text-black select-none shadow-2xl"
      animate={cursorVariant}
      variants={variants}
      initial="default"
    >
      {cursorText && (
        <span className="text-center px-1 text-black font-extrabold tracking-widest leading-none">
          {cursorText}
        </span>
      )}
    </motion.div>
  );
}
