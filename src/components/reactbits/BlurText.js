'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

const BlurText = ({
  text = '',
  delay = 200,
  className = '',
  animateBy = 'words',
  direction = 'top',
  threshold = 0.1,
  rootMargin = '0px',
  animationFrom,
  animationTo,
  onAnimationComplete,
  stepDuration = 0.35
}) => {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  const defaultFrom = direction === 'top'
    ? { filter: 'blur(10px)', opacity: 0, y: -30 }
    : { filter: 'blur(10px)', opacity: 0, y: 30 };

  const defaultTo = {
    filter: 'blur(0px)',
    opacity: 1,
    y: 0,
  };

  const from = animationFrom || defaultFrom;
  const to = animationTo || defaultTo;

  useEffect(() => {
    // Top headers should immediately become visible
    const timer = setTimeout(() => setInView(true), 120);

    if (!ref.current) return () => clearTimeout(timer);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [threshold, rootMargin]);

  const isWhite = className.includes('text-white');

  return (
    <span ref={ref} className={className} style={{ display: 'inline-flex', flexWrap: 'wrap', color: isWhite ? '#FFFFFF' : 'inherit' }}>
      {elements.map((segment, index) => (
        <motion.span
          key={index}
          initial={from}
          animate={inView ? to : from}
          transition={{
            duration: stepDuration,
            delay: (index * delay) / 1000,
          }}
          style={{
            display: 'inline-block',
            color: isWhite ? '#FFFFFF' : 'inherit',
            willChange: 'transform, filter, opacity'
          }}
          onAnimationComplete={
            index === elements.length - 1 ? onAnimationComplete : undefined
          }
        >
          {segment}
          {animateBy === 'words' && index < elements.length - 1 ? '\u00A0' : ''}
        </motion.span>
      ))}
    </span>
  );
};

export default BlurText;
