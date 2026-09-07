'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import ShinyText from './reactbits/ShinyText';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/events', label: 'Events' },
    { href: '/location', label: 'Location' },
    { href: '/team', label: 'Team' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full pt-2.5 sm:pt-3.5 px-3 sm:px-6 pointer-events-none transition-all duration-300">
      <nav
        className={`pointer-events-auto max-w-7xl mx-auto rounded-2xl sm:rounded-full transition-all duration-300 relative overflow-hidden ${
          scrolled
            ? 'bg-[#08140D]/92 backdrop-blur-2xl border border-white/20 shadow-[0_16px_45px_rgba(0,0,0,0.65)] scale-[0.99]'
            : 'bg-[#08140D]/85 backdrop-blur-xl border border-white/15 shadow-[0_10px_35px_rgba(0,0,0,0.4)]'
        }`}
      >
        {/* Championship Jersey Micro-Ribbon: Deep Pine, Optic White & Champion Gold */}
        <div
          className="absolute top-0 left-0 right-0 h-[2.5px] opacity-95"
          style={{
            background:
              'linear-gradient(90deg, #143D24 0%, #16A34A 25%, #FFFFFF 50%, #FFC72C 75%, #F59E0B 100%)',
          }}
        />

        <div className="px-4 sm:px-6 py-2.5 sm:py-3">
          <div className="flex justify-between items-center h-11 sm:h-12">
            {/* Logo + Live Tournament Telemetry Badge */}
            <div className="flex items-center gap-3 shrink-0">
              <Link href="/" className="flex items-center gap-2.5 group">
                <div className="w-9 h-9 relative bg-white rounded-full p-0.5 border border-white/20 flex items-center justify-center group-hover:border-[#FFC72C] transition-colors shadow-md">
                  <Image
                    src="/assets/brand/inter-iiit-logo.png"
                    alt="Inter-IIIT Logo"
                    fill
                    sizes="36px"
                    className="object-contain p-1"
                    priority
                  />
                </div>
                <div className="block leading-tight">
                  <div className="text-white font-black text-sm sm:text-base tracking-wider flex items-center gap-1.5" style={{ color: '#FFFFFF' }}>
                    <span>INTER IIIT</span>
                    <span className="hidden xl:inline-block text-[9px] font-bold px-1.5 py-0.5 rounded bg-white/10 text-gray-200" style={{ color: '#E5E7EB' }}>
                      2026
                    </span>
                  </div>
                  <div className="text-[#FFC72C] font-bold text-[8px] sm:text-[9px] tracking-[0.2em] uppercase" style={{ color: '#FFC72C' }}>
                    Sports Meet
                  </div>
                </div>
              </Link>

              {/* Tournament Telemetry Status Pill */}
              <div className="hidden lg:flex items-center gap-2 pl-3 ml-2 border-l border-white/10 text-[11px] text-gray-200 font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22C55E]" />
                </span>
                <span className="text-gray-300 font-mono tracking-wide text-[10px]" style={{ color: '#D1D5DB' }}>
                  19–23 DEC • CHENNAI
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1">
              {links.map(({ href, label }) => {
                const active = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`relative px-3.5 py-1.5 text-xs font-semibold tracking-wide rounded-full transition-all duration-200 ${
                      active
                        ? 'bg-white/15 text-white shadow-inner border border-white/15'
                        : 'text-gray-200 hover:text-white hover:bg-white/[0.08]'
                    }`}
                    style={{ color: active ? '#FFFFFF' : '#E5E7EB' }}
                  >
                    {label}
                    {active && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-0.5 rounded-full bg-[#FFC72C]" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Actions: Live Events Button + Sporty Register CTA */}
            <div className="flex items-center gap-2 sm:gap-3">
              <Link
                href="/events"
                className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-gray-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                title="Explore Sporting Disciplines"
              >
                <span className="text-[#FFC72C]">🏆</span>
                <span>15+ Sports</span>
              </Link>

              <Link
                href="/register"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-xs font-black text-[#08140D] transition-all duration-200 shadow-[0_0_20px_rgba(255,199,44,0.4)] hover:shadow-[0_0_30px_rgba(255,199,44,0.65)] hover:-translate-y-0.5 border border-white/30 group"
                style={{
                  background: 'linear-gradient(135deg, #FFC72C 0%, #F59E0B 50%, #FFB800 100%)',
                }}
              >
                <span>Register Roster</span>
                <span className="text-[#08140D] group-hover:translate-x-0.5 transition-transform font-bold">
                  &rarr;
                </span>
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 text-gray-300 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFC72C] transition-colors rounded-lg bg-white/5"
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
                aria-controls="mobile-navigation"
              >
                {mobileOpen ? (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileOpen && (
          <div
            id="mobile-navigation"
            className="md:hidden border-t border-white/10 px-4 py-4 space-y-2 bg-[#08140D]/95 backdrop-blur-2xl max-h-[calc(100dvh-80px)] overflow-y-auto"
          >
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-white/10 text-xs text-gray-400">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
                9th All India Edition
              </span>
              <span className="font-mono text-[11px] text-[#FFC72C]">19–23 DEC 2026</span>
            </div>

            <div className="grid grid-cols-2 gap-1.5">
              {links.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-colors ${
                    pathname === href
                      ? 'bg-[#FFC72C]/20 text-[#FFC72C] border border-[#FFC72C]/30'
                      : 'text-gray-200 hover:bg-white/5 hover:text-white bg-white/[0.03]'
                  }`}
                  style={{ color: pathname === href ? '#FFC72C' : '#E5E7EB' }}
                >
                  {label}
                </Link>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/register"
                onClick={() => setMobileOpen(false)}
                className="block w-full py-3 text-center text-xs font-black text-[#08140D] rounded-xl transition-all shadow-md"
                style={{
                  background: 'linear-gradient(135deg, #FFC72C 0%, #F59E0B 50%, #FFB800 100%)',
                }}
              >
                Register Contingent Roster &rarr;
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
