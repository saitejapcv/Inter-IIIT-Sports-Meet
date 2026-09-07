'use client';

import { useState, useEffect, useRef } from 'react';
import CircularGallery from './CircularGallery';
import InteractiveHeading from './InteractiveHeading';
import { sports } from '@/data/sports';
import Image from 'next/image';
import Link from 'next/link';
import ShinyText from '@/components/reactbits/ShinyText';
import ScrollReveal from '@/components/reactbits/ScrollReveal';

function SportCard({ sport, idx }) {
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, active: false });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setSpotlight({
      x: Math.round(e.clientX - rect.left),
      y: Math.round(e.clientY - rect.top),
      active: true,
    });
  };

  const handleTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      const rect = e.currentTarget.getBoundingClientRect();
      setSpotlight({
        x: Math.round(e.touches[0].clientX - rect.left),
        y: Math.round(e.touches[0].clientY - rect.top),
        active: true,
      });
    }
  };

  const handleLeave = () => {
    setSpotlight((prev) => ({ ...prev, active: false }));
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseLeave={handleLeave}
      onTouchEnd={handleLeave}
      className="group relative overflow-hidden rounded-2xl cursor-pointer border border-[#E5E7EB] hover:border-[#FFC72C] hover:ring-2 hover:ring-[#FFC72C]/40 hover:shadow-[0_10px_30px_rgba(255,199,44,0.25)] transition-all duration-300 ease-out hover:-translate-y-1 shadow-sm"
      style={{ height: '220px' }}
    >
      <Image
        src={sport.image}
        alt={sport.name}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent transition-opacity duration-300 pointer-events-none"
      />

      {/* Dynamic cursor/touch radial spotlight overlay */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-200 z-10"
        style={{
          opacity: spotlight.active ? 1 : 0,
          background: `radial-gradient(circle at ${spotlight.x}px ${spotlight.y}px, rgba(255, 199, 44, 0.25), transparent 70%)`,
        }}
      />

      {/* Bottom label */}
      <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
        <div className="relative z-10">
          <h3 className="font-extrabold text-white text-base tracking-tight leading-tight uppercase">
            {sport.name}
          </h3>
          <div className="mt-1.5 h-0.5 w-6 rounded-full bg-[#FFC72C] transition-all duration-300 ease-out group-hover:w-16" />
        </div>
      </div>
    </div>
  );
}

const galleryItems = sports.map((sport) => ({
  image: sport.image,
  text: sport.name,
}));

export default function Events() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000, isHovered: false });

  const handleHeaderMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      isHovered: true,
    };
  };

  const handleHeaderTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      const rect = e.currentTarget.getBoundingClientRect();
      mouseRef.current = {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
        isHovered: true,
      };
    }
  };

  const handleHeaderLeave = () => {
    mouseRef.current = { x: -1000, y: -1000, isHovered: false };
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId;
    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    class Particle {
      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        this.x = Math.random() * width;
        this.y = initial ? Math.random() * height : -10;
        this.radius = Math.random() * 1.5 + 0.8;
        this.baseVy = Math.random() * 0.4 + 0.25;
        this.vy = this.baseVy;
        this.vx = (Math.random() - 0.5) * 0.2;
        this.alpha = Math.random() * 0.35 + 0.15;
        const colorType = Math.random();
        if (colorType > 0.5) {
          this.color = '255, 199, 44'; // Champion Gold
        } else if (colorType > 0.25) {
          this.color = '34, 197, 94'; // Field Green
        } else {
          this.color = '255, 255, 255'; // Optic White
        }
      }

      update(mouse) {
        this.y += this.vy;
        this.x += this.vx;

        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const repelRadius = 110;

        if (dist < repelRadius && mouse.isHovered) {
          const force = (repelRadius - dist) / repelRadius;
          const dirX = (dx / dist) * force * 1.8;
          const dirY = (dy / dist) * force * 1.8;
          this.vx -= dirX;
          this.vy -= dirY;
        } else {
          this.vx *= 0.96;
          this.vy = this.vy * 0.95 + this.baseVy * 0.05;
        }

        if (this.y > height + 10) this.reset();
        if (this.x < -10) this.x = width + 10;
        if (this.x > width + 10) this.x = -10;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`;
        ctx.fill();
      }
    }

    const count = Math.min(60, Math.max(30, Math.floor(width / 22)));
    const particles = Array.from({ length: count }, () => new Particle());

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update(mouseRef.current);
        particles[i].draw();
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  // 3D Perspective Scroll
  const headerBannerRef = useRef(null);
  const contentSectionRef = useRef(null);
  const scrollRafRef = useRef(null);

  useEffect(() => {
    const lerp = (a, b, t) => a + (b - a) * t;
    let currentProgress = 0;

    const tick = () => {
      const header = headerBannerRef.current;
      const content = contentSectionRef.current;
      if (!header) {
        scrollRafRef.current = requestAnimationFrame(tick);
        return;
      }

      const headerH = header.offsetHeight;
      const rawProgress = Math.min(Math.max(window.scrollY / (headerH * 0.85), 0), 1);
      currentProgress = lerp(currentProgress, rawProgress, 0.1);
      const p = currentProgress;

      const rotateX = p * 14;
      const scale = 1 - p * 0.1;
      const translateZ = -p * 100;
      const opacity = 1 - p * 0.62;

      header.style.transformOrigin = '50% 0%';
      header.style.transform = `perspective(1200px) rotateX(${rotateX}deg) scale(${scale}) translateZ(${translateZ}px)`;
      header.style.opacity = opacity;

      if (content) {
        const slideUp = p * 60;
        content.style.transform = `translateY(-${slideUp}px)`;
      }

      scrollRafRef.current = requestAnimationFrame(tick);
    };

    scrollRafRef.current = requestAnimationFrame(tick);
    return () => {
      if (scrollRafRef.current) cancelAnimationFrame(scrollRafRef.current);
    };
  }, []);

  return (
    <div className="bg-white min-h-screen text-[#111111]" style={{ perspective: '1200px' }}>
      {/* Page Header (Minimalist Dark) */}
      <div
        ref={headerBannerRef}
        onMouseMove={handleHeaderMouseMove}
        onTouchMove={handleHeaderTouchMove}
        onMouseLeave={handleHeaderLeave}
        onTouchEnd={handleHeaderLeave}
        className="relative pt-28 sm:pt-36 pb-12 sm:pb-16 px-4 overflow-hidden bg-[#08140D] text-white border-b border-[#FFC72C]/20"
        style={{
          willChange: 'transform, opacity',
          transformOrigin: '50% 0%',
          zIndex: 1,
        }}
      >
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
        />

        <div className="relative max-w-7xl mx-auto z-20 px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 bg-[#FFC72C]/15 border border-[#FFC72C]/30 text-[#FFC72C]">
            <span>EXPLORE {sports.length} DISCIPLINES</span>
          </div>

          <div className="block">
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#FFC72C]" style={{ color: '#FFC72C' }}>
              9th Inter-IIIT Sports Meet · 2026
            </span>
          </div>

          <div className="mt-4 max-w-4xl">
            <InteractiveHeading text="SPORTING  EVENTS" />
          </div>

          <div className="mt-4 w-14 h-1 rounded-full bg-[#FFC72C]" />

          <p className="mt-4 text-sm sm:text-base max-w-xl font-normal leading-relaxed text-gray-200" style={{ color: '#E5E7EB' }}>
            {sports.length} competitive events testing speed, skill, strength, and strategy.
          </p>
        </div>
      </div>

      {/* Events content */}
      <div
        ref={contentSectionRef}
        style={{ willChange: 'transform', position: 'relative', zIndex: 2 }}
      >
        {/* Circular 3D Gallery */}
        <div className="max-w-7xl mx-auto py-12 sm:py-16 px-4">
          <CircularGallery
            items={galleryItems}
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.12}
            fontUrl="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&display=swap"
            font="800 24px 'Montserrat', sans-serif"
            scrollSpeed={1.5}
          />
        </div>

        {/* Rulebook Panel */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <ScrollReveal direction="up">
            <div
              className="rounded-3xl border border-[#E5E7EB] p-8 sm:p-12 shadow-sm bg-[#F8FAF8]"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                <div className="max-w-2xl">
                  <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#143D24]" style={{ color: '#143D24' }}>
                    Official Rule Book
                  </span>
                  <h2 className="mt-3 font-black text-2xl sm:text-3xl text-[#08140D] tracking-tight">
                    Competition rules, eligibility criteria, event regulations, and participation guidelines.
                  </h2>
                  <p className="mt-3 text-sm text-[#4B5563]">
                    Download the complete tournament code of conduct and technical regulations for all disciplines.
                  </p>
                </div>
                <Link
                  href="/assets/docs/rulebook.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-bold text-[#FFC72C] bg-[#143D24] hover:bg-[#08140D] border border-[#FFC72C]/40 transition-all duration-200 shadow-md hover:shadow-[0_0_25px_rgba(255,199,44,0.4)] hover:-translate-y-0.5 shrink-0"
                >
                  <ShinyText text="View Official Rule Book" speed={3.5} />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
