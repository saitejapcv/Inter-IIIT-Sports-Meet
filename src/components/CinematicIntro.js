'use client';

import { useState, useEffect, useRef } from 'react';

/**
 * CinematicIntro Component
 * 
 * Purpose:
 * Minimalist Olympic-inspired intro sequence with 3D track, glowing typography,
 * celebration particles, and smooth transition into the main landing page.
 */
export default function CinematicIntro() {
  const [stage, setStage] = useState(() => {
    if (typeof window === 'undefined') return 'checking';
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return 'done';
    try {
      return sessionStorage.getItem('inter_iiit_intro_played') === 'true' ? 'done' : 'checking';
    } catch {
      return 'checking';
    }
  });

  const [phase, setPhase] = useState(1);
  const canvasRef = useRef(null);
  const animFrameId = useRef(null);

  function handleSkip() {
    setStage('fading');
    setTimeout(() => setStage('done'), 400);
  }

  useEffect(() => {
    if (stage !== 'checking') return undefined;

    try {
      const alreadyPlayed = sessionStorage.getItem('inter_iiit_intro_played');
      if (alreadyPlayed === 'true') {
        return undefined;
      }
    } catch {}

    try {
      sessionStorage.setItem('inter_iiit_intro_played', 'true');
    } catch {}

    const startTimer = setTimeout(() => setStage('playing'), 0);
    const timer1 = setTimeout(() => setPhase(2), 1200);
    const timer2 = setTimeout(() => setPhase(3), 2200);
    const timer3 = setTimeout(() => setStage('fading'), 3900);
    const timer4 = setTimeout(() => setStage('done'), 4500);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleSkip();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      window.removeEventListener('keydown', handleKeyDown);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [stage]);

  // Particle Canvas
  useEffect(() => {
    if (stage !== 'playing' && stage !== 'fading') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const particles = Array.from({ length: 65 }, () => ({
      x: Math.random() * width,
      y: height + Math.random() * 80,
      size: Math.random() * 3 + 1,
      speedY: Math.random() * 2.5 + 1.2,
      speedX: (Math.random() - 0.5) * 1.5,
      opacity: Math.random() * 0.8 + 0.2,
      color: Math.random() > 0.5 ? '#FFC72C' : Math.random() > 0.25 ? '#22C55E' : '#FFFFFF',
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y -= p.speedY;
        p.x += p.speedX;

        if (p.y < -20) {
          p.y = height + 20;
          p.x = Math.random() * width;
        }

        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      animFrameId.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [stage]);

  if (stage === 'done' || stage === 'checking') {
    return null;
  }

  return (
    <div
      role="region"
      aria-label="Cinematic Event Intro"
      className={`fixed inset-0 z-50 overflow-hidden flex items-center justify-center transition-opacity duration-700 select-none ${
        stage === 'fading' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{
        background: 'radial-gradient(ellipse at center, #0F2E1B 0%, #08140D 70%, #040A06 100%)',
      }}
    >
      {/* SKIP BUTTON */}
      <button
        onClick={handleSkip}
        className="absolute top-6 right-6 z-50 px-5 py-2 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 hover:scale-105 border border-white/20 text-white hover:border-[#FFC72C] hover:bg-[#FFC72C]/20 backdrop-blur-md"
        style={{ background: 'rgba(255, 255, 255, 0.05)' }}
      >
        Skip Intro &times;
      </button>

      {/* AMBIENT LIGHT */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 55%, rgba(255, 199, 44, 0.18) 0%, transparent 60%)',
        }}
      />

      {/* 3D PARALLAX ROAD */}
      <div
        className="absolute bottom-0 w-full flex justify-center pointer-events-none"
        style={{
          height: '65vh',
          perspective: '600px',
          overflow: 'hidden',
        }}
      >
        <div
          className="relative w-[340px] sm:w-[500px] h-full"
          style={{
            transform: 'rotateX(72deg)',
            transformOrigin: 'bottom center',
            background: 'linear-gradient(to top, #143D24 0%, #08140D 70%, #040A06 100%)',
            boxShadow: '0 0 60px rgba(255, 199, 44, 0.3)',
            borderLeft: '3px solid rgba(255, 199, 44, 0.8)',
            borderRight: '3px solid rgba(255, 199, 44, 0.8)',
          }}
        >
          {/* Animated Center Track Line */}
          <div
            className="absolute left-1/2 -translate-x-1/2 w-2.5 h-full"
            style={{
              backgroundImage: 'linear-gradient(to bottom, #FFC72C 40%, transparent 40%)',
              backgroundSize: '10px 60px',
              animation: 'roadDash 0.7s linear infinite',
            }}
          />
          <div className="absolute left-1/4 w-0.5 h-full bg-white/10" />
          <div className="absolute right-1/4 w-0.5 h-full bg-white/10" />
        </div>
      </div>

      {/* PARTICLE CANVAS */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-20" />

      {/* CENTER SEQUENCE */}
      <div className="relative z-30 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        {/* Eyebrow */}
        <div
          className={`transition-all duration-700 transform mb-3 ${
            phase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'
          }`}
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.25em] border border-[#FFC72C]/40 bg-[#FFC72C]/10 text-[#FFC72C]"
          >
            9th All India Inter-IIIT Sports Meet • 2026
          </span>
        </div>

        {/* ROAD TO GLORY */}
        <div
          className={`transition-all duration-1000 transform ${
            phase >= 2 ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-8'
          }`}
        >
          <h1
            className="font-black text-transparent bg-clip-text leading-none tracking-tight mb-4 select-none animate-glowPulse"
            style={{
              fontSize: 'clamp(3rem, 9vw, 6.5rem)',
              backgroundImage: 'linear-gradient(180deg, #FFFFFF 0%, #FDE68A 55%, #FFC72C 100%)',
              textShadow: '0 0 35px rgba(255, 199, 44, 0.6)',
            }}
          >
            ROAD TO GLORY
          </h1>
          <p
            className={`text-sm sm:text-base font-semibold tracking-[0.25em] uppercase text-gray-200 transition-all duration-700 delay-200 ${
              phase >= 2 ? 'opacity-100' : 'opacity-0'
            }`}
          >
            25+ Institutes • 2,000+ Athletes • One Champion
          </p>
        </div>

        {/* CHAMPIONS TROPHY */}
        {phase >= 3 && (
          <div className="mt-8 flex flex-col items-center animate-trophyRise">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center">
              <div
                className="absolute inset-0 rounded-full animate-ping opacity-25"
                style={{ background: 'radial-gradient(circle, #FFC72C 0%, transparent 70%)' }}
              />
              
              <svg
                className="w-20 h-20 sm:w-24 sm:h-24 drop-shadow-[0_0_25px_rgba(255,199,44,0.85)]"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 2L14.5 7.5L20.5 8.5L16 13L17 19L12 16L7 19L8 13L3.5 8.5L9.5 7.5L12 2Z"
                  fill="#FFC72C"
                  opacity="0.3"
                />
                <path
                  d="M6 3H18V8C18 11.31 15.31 14 12 14C8.69 14 6 11.31 6 8V3Z"
                  fill="#FFC72C"
                  stroke="#F59E0B"
                  strokeWidth="1.5"
                />
                <path
                  d="M6 5H3C2.45 5 2 5.45 2 6C2 8.5 3.79 10.58 6 10.93V5Z"
                  fill="#FFC72C"
                />
                <path
                  d="M18 5H21C21.55 5 22 5.45 22 6C22 8.5 20.21 10.58 18 10.93V5Z"
                  fill="#FFC72C"
                />
                <path
                  d="M10 14V18H14V14"
                  stroke="#F59E0B"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M7 21H17V18H7V21Z"
                  fill="#FFC72C"
                  stroke="#F59E0B"
                  strokeWidth="1.5"
                />
              </svg>
            </div>

            <div className="mt-3 text-xs sm:text-sm font-black uppercase tracking-[0.3em] text-[#FFC72C]">
              Where Champions Rise
            </div>
          </div>
        )}
      </div>

      {/* PROGRESS BAR */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
        <div
          className="h-full transition-all ease-linear"
          style={{
            background: 'linear-gradient(90deg, #143D24 0%, #FFC72C 100%)',
            width: phase === 1 ? '30%' : phase === 2 ? '65%' : '100%',
            transitionDuration: phase === 1 ? '1.8s' : phase === 2 ? '1.5s' : '1.7s',
          }}
        />
      </div>
    </div>
  );
}
