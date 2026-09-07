'use client';

import './GradientText.css';

export default function GradientText({
  children,
  className = '',
  colors = ['#FFC72C', '#F59E0B', '#22C55E', '#FFC72C', '#F59E0B'],
  animationSpeed = 8,
  showBorder = false,
}) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(', ')})`,
    animationDuration: `${animationSpeed}s`,
  };

  return (
    <div className={`animated-gradient-text ${showBorder ? 'with-border' : ''} ${className}`}>
      <span className="gradient-text-content" style={gradientStyle}>
        {children}
      </span>
    </div>
  );
}
