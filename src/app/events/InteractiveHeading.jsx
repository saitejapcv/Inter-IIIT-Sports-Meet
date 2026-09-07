'use client';

import React from 'react';

/**
 * InteractiveHeading
 *
 * Renders the section heading where letters dynamically turn vibrant electric blue
 * under cursor hover/proximity while maintaining a crisp dark base color.
 */
const InteractiveHeading = ({ text = 'SPORTING EVENTS', className = '' }) => {
  return (
    <h1
      className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight select-none flex flex-wrap gap-x-4 sm:gap-x-5 leading-none uppercase text-white ${className}`}
      style={{ color: '#FFFFFF' }}
    >
      {text.split(' ').map((word, wIdx) => (
        <span key={wIdx} className="inline-flex whitespace-nowrap text-white" style={{ color: '#FFFFFF' }}>
          {word.split('').map((char, cIdx) => (
            <span
              key={cIdx}
              className="inline-block transition-all duration-150 ease-out text-white hover:text-[#FFC72C] hover:scale-125 hover:-translate-y-1 cursor-default"
              style={{ color: '#FFFFFF' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#FFC72C';
                e.currentTarget.style.textShadow =
                  '0 0 20px rgba(255, 199, 44, 0.9), 0 0 35px rgba(245, 158, 11, 0.7)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#FFFFFF';
                e.currentTarget.style.textShadow = 'none';
              }}
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </h1>
  );
};

export default InteractiveHeading;
