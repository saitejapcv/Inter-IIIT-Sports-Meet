'use client';

import Link from 'next/link';
import Image from 'next/image';
import { eventInfo } from '@/data/info';
import TournamentCountdown from './TournamentCountdown';
import ShinyText from './reactbits/ShinyText';

export default function Footer() {
  const sportsList = [
    { icon: '🏃', name: 'Athletics' },
    { icon: '🏊', name: 'Aquatics' },
    { icon: '🏸', name: 'Badminton' },
    { icon: '🏀', name: 'Basketball' },
    { icon: '🏏', name: 'Cricket' },
    { icon: '⚽', name: 'Football' },
    { icon: '🏓', name: 'Table Tennis' },
    { icon: '🏐', name: 'Volleyball' },
    { icon: '♟️', name: 'Chess' },
    { icon: '🎾', name: 'Tennis' },
  ];

  return (
    <footer className="relative bg-[#08140D] text-white overflow-hidden pt-0 border-t border-white/10">
      {/* ─── 1. RUNNING TRACK LANES ACCENT RIBBON (Jersey Green, White & Gold) ── */}
      <div className="w-full flex flex-col h-2.5">
        <div className="h-[2px] w-full bg-[#143D24]" title="Track Lane 1 - Deep Pine" />
        <div className="h-[2px] w-full bg-[#16A34A]" title="Track Lane 2 - Field Green" />
        <div className="h-[2px] w-full bg-[#FFFFFF]" title="Track Lane 3 - Optic White" />
        <div className="h-[2px] w-full bg-[#FFC72C]" title="Track Lane 4 - Champion Gold" />
        <div className="h-[2px] w-full bg-[#F59E0B]" title="Track Lane 5 - Torch Gold" />
      </div>

      {/* Subtle Stadium Light Glow in Background */}
      <div
        className="absolute top-0 right-1/4 w-[600px] h-[300px] rounded-full pointer-events-none opacity-15 blur-3xl"
        style={{ background: 'radial-gradient(circle, #143D24 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-10 left-10 w-[400px] h-[300px] rounded-full pointer-events-none opacity-15 blur-3xl"
        style={{ background: 'radial-gradient(circle, #FFC72C 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        {/* ─── 2. SPORTS TELEMETRY & COUNTDOWN ARENA ──────────────────── */}
        <div className="rounded-3xl p-6 sm:p-10 mb-14 bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-[0.2em] mb-3 bg-[#FFC72C]/15 text-[#FFC72C] border border-[#FFC72C]/30">
              <span>🏆</span>
              <span>Tournament Countdown Telemetry</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white flex items-center gap-3">
              <span>Road to the 9th Edition</span>
              <span className="text-xs px-2 py-0.5 rounded bg-[#FFC72C]/20 text-[#FFC72C] border border-[#FFC72C]/30 font-mono">
                DEC 19, 2026
              </span>
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-gray-300 max-w-lg">
              Official countdown to the grand opening ceremony and first track fixtures at IIITDM Kancheepuram stadium.
            </p>
          </div>

          <div className="w-full lg:w-auto shrink-0">
            <TournamentCountdown />
          </div>
        </div>

        {/* ─── 3. SPORTS DISCIPLINES CHIP STRIP ────────────────────────── */}
        <div className="mb-14 pb-10 border-b border-white/10">
          <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-300 mb-4 flex items-center gap-2">
            <span>Official Sporting Disciplines</span>
            <span className="h-px flex-1 bg-white/10" />
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-2.5">
            {sportsList.map((sport, i) => (
              <Link
                key={i}
                href="/events"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 text-gray-200 hover:text-white transition-all hover:border-[#FFC72C]/50"
              >
                <span>{sport.icon}</span>
                <span>{sport.name}</span>
              </Link>
            ))}
            <Link
              href="/events"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#FFC72C]/15 text-[#FFC72C] border border-[#FFC72C]/30 hover:bg-[#FFC72C]/25 transition-all"
            >
              <span>+ View Rule Books &rarr;</span>
            </Link>
          </div>
        </div>

        {/* ─── 4. DOORMAT SITEMAP ─────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Col 1 & 2: Brand Identity & Motto */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 relative bg-white rounded-full p-1 border border-white/20 shadow-md">
                <Image
                  src="/assets/brand/inter-iiit-logo.png"
                  alt="Inter-IIIT Crest"
                  fill
                  sizes="48px"
                  className="object-contain p-1"
                />
              </div>
              <div>
                <div className="font-black text-lg text-white tracking-wider">
                  INTER IIIT
                </div>
                <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#FFC72C]">
                  Sports Meet 2026
                </div>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-gray-300 max-w-sm mb-6">
              The premier national championship arena celebrating athletic excellence, sportsmanship, and camaraderie across 25+ Indian Institutes of Information Technology.
            </p>

            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 max-w-sm">
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#FFC72C] mb-1">
                Sanctioned Venue
              </div>
              <div className="text-xs font-semibold text-white">
                {eventInfo.host}
              </div>
              <div className="text-[11px] text-gray-300 mt-0.5">
                51-Acre Eco Campus • Melakottaiyur, Chennai 600127
              </div>
            </div>
          </div>

          {/* Col 3: Tournament Navigation */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#FFC72C] mb-4">
              Tournament
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300 font-medium">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About the Meet
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-white transition-colors">
                  15+ Sporting Disciplines
                </Link>
              </li>
              <li>
                <Link
                  href="/assets/docs/rulebook.pdf"
                  target="_blank"
                  className="hover:text-white transition-colors inline-flex items-center gap-1 text-[#FFC72C]"
                >
                  <span>Official Rule Book</span>
                  <span className="text-[10px]">↗</span>
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors">
                  Tournament Gallery
                </Link>
              </li>
              <li>
                <Link href="/location" className="hover:text-white transition-colors">
                  Host Stadium &amp; Arenas
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Delegation Operations */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#FFC72C] mb-4">
              Delegations
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300 font-medium">
              <li>
                <Link href="/register" className="hover:text-white transition-colors font-bold text-white">
                  Contingent Registration
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-white transition-colors">
                  Organizing Committee
                </Link>
              </li>
              <li>
                <Link href="/location" className="hover:text-white transition-colors">
                  Airport &amp; Transit Matrix
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Hostel &amp; Dining Logistics
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Helpdesk &amp; Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Athletic CTA */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#FFC72C] mb-4">
              Get Roster Ready
            </h4>
            <p className="text-xs text-gray-300 leading-relaxed mb-4">
              Institutional registration is open for official IIIT contingents and athlete entries.
            </p>
            <Link
              href="/register"
              className="inline-flex items-center justify-center w-full px-5 py-3 rounded-xl text-xs font-black text-[#08140D] transition-all shadow-[0_0_20px_rgba(255,199,44,0.4)] hover:shadow-[0_0_25px_rgba(255,199,44,0.65)] hover:-translate-y-0.5 border border-white/20"
              style={{
                background: 'linear-gradient(135deg, #FFC72C 0%, #F59E0B 50%, #FFB800 100%)',
              }}
            >
              <span>Enter Registration Portal &rarr;</span>
            </Link>

            <div className="mt-4 text-center">
              <a
                href="mailto:sports@iiitdm.ac.in"
                className="text-[11px] font-mono text-gray-400 hover:text-white transition-colors"
              >
                sports@iiitdm.ac.in
              </a>
            </div>
          </div>
        </div>

        {/* ─── 5. GIANT STADIUM WATERMARK TYPOGRAPHY ──────────────────── */}
        <div className="select-none pointer-events-none text-center py-6 border-t border-white/10 overflow-hidden">
          <div
            className="text-[clamp(1.5rem,5.5vw,4.5rem)] font-black uppercase tracking-[0.2em] leading-none whitespace-nowrap text-white/[0.04]"
            style={{
              WebkitTextStroke: '1px rgba(255,255,255,0.06)',
            }}
          >
            WHERE CHAMPIONS RISE • INTER-IIIT 2026
          </div>
        </div>

        {/* ─── 6. BOTTOM BAR & OFFICIAL ACCREDITATION ─────────────────── */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
            <span>© 2026 9th All India Inter-IIIT Sports Meet.</span>
            <span className="hidden sm:inline-block text-gray-600">•</span>
            <span>Ministry of Education, Govt. of India</span>
          </div>

          <div className="flex items-center gap-4 text-gray-400">
            <Link href="/about" className="hover:text-white transition-colors text-[11px]">
              Charter
            </Link>
            <span>•</span>
            <Link href="/events" className="hover:text-white transition-colors text-[11px]">
              Disciplines
            </Link>
            <span>•</span>
            <Link href="/location" className="hover:text-white transition-colors text-[11px]">
              Venue
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-white transition-colors text-[11px]">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
