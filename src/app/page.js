'use client';

import Link from 'next/link';
import Image from 'next/image';
import { eventInfo } from '@/data/info';
import { iiits } from '@/data/iiits';
import CinematicIntro from '@/components/CinematicIntro';
import BlurText from '@/components/reactbits/BlurText';
import RotatingText from '@/components/reactbits/RotatingText';
import GradientText from '@/components/reactbits/GradientText';
import ShinyText from '@/components/reactbits/ShinyText';
import SpotlightCard from '@/components/reactbits/SpotlightCard';
import TiltedCard from '@/components/reactbits/TiltedCard';
import CountUp from '@/components/reactbits/CountUp';
import ScrollReveal from '@/components/reactbits/ScrollReveal';

export default function Home() {
  const { hostInstitute } = eventInfo;

  const sportsList = [
    'Athletics',
    'Aquatics',
    'Badminton',
    'Basketball',
    'Cricket',
    'Football',
    'Table Tennis',
    'Volleyball',
    'Chess',
    'Tennis',
  ];

  return (
    <div className="bg-white text-[#111111]">
      {/* ─── 0. CINEMATIC ONE-TIME INTRO ────────────────────────────────── */}
      <CinematicIntro />

      {/* ─── 1. HERO SECTION (Jersey Pine Green & Champion Gold) ──────── */}
      <section className="relative w-full min-h-[92vh] flex items-center overflow-hidden bg-[#08140D] text-white">
        {/* Subtle geometric background grid and radial ambient light */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div
          className="absolute top-1/4 -right-32 w-96 h-96 rounded-full opacity-35 pointer-events-none blur-3xl"
          style={{ background: 'radial-gradient(circle, #143D24 0%, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full opacity-25 pointer-events-none blur-3xl"
          style={{ background: 'radial-gradient(circle, #FFC72C 0%, transparent 70%)' }}
        />

        {/* Desktop Hero Right Visual - Clean Olympic Badge with Logo */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 w-[42%] hidden lg:flex items-center justify-center pointer-events-none">
          <div className="relative w-80 h-80 flex items-center justify-center">
            {/* Outer subtle concentric rings */}
            <div className="absolute inset-0 rounded-full border border-white/10 animate-pulse" />
            <div className="absolute inset-8 rounded-full border border-[#FFC72C]/25" />
            <div className="absolute inset-16 rounded-full border border-white/5" />
            
            {/* Logo container */}
            <div className="relative w-56 h-56 p-6 rounded-3xl bg-white/[0.04] backdrop-blur-xl border border-white/15 shadow-2xl flex items-center justify-center">
              <Image
                src="/assets/brand/inter-iiit-logo.png"
                alt="Inter-IIIT Logo"
                fill
                sizes="(max-width: 1024px) 100vw, 250px"
                className="object-contain p-4 drop-shadow-[0_10px_30px_rgba(255,199,44,0.3)]"
                priority
              />
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 sm:py-28">
          <div className="max-w-2xl">
            {/* Eyebrow badge with animated gold gradient */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-6 h-0.5 bg-[#FFC72C] rounded-full" />
              <GradientText
                colors={['#FFC72C', '#FFE066', '#FFFFFF', '#FFE066', '#FFC72C']}
                animationSpeed={6}
                showBorder={true}
                className="text-xs font-bold uppercase tracking-[0.2em]"
              >
                9th Edition • {eventInfo.host}
              </GradientText>
            </div>

            {/* Main Title with BlurText */}
            <h1
              className="text-white font-black leading-[1.02] tracking-tight mb-6 text-4xl sm:text-6xl lg:text-7xl"
              style={{ color: '#FFFFFF' }}
            >
              <BlurText
                text="INTER-IIIT SPORTS MEET"
                delay={80}
                animateBy="words"
                direction="top"
                className="text-white"
              />
            </h1>

            {/* Subtitle with RotatingText in Champion Gold */}
            <div className="flex items-center gap-3 text-lg sm:text-xl text-gray-200 font-medium mb-8">
              <span className="text-gray-300">Featuring</span>
              <span className="inline-flex items-center px-3 py-1 rounded-md bg-[#FFC72C]/15 border border-[#FFC72C]/30 text-[#FFC72C] font-bold">
                <RotatingText
                  texts={sportsList}
                  rotationInterval={2400}
                  splitBy="words"
                  elementLevelClassName="text-[#FFC72C]"
                />
              </span>
              <span className="text-gray-300">&amp; more</span>
            </div>

            {/* Date + Host benchmark */}
            <div className="flex items-start gap-4 mb-10 pt-2 border-t border-white/10">
              <div className="w-1 h-12 rounded-full shrink-0 bg-[#FFC72C] mt-1" />
              <div>
                <div className="font-bold text-2xl sm:text-3xl text-white tracking-tight" style={{ color: '#FFFFFF' }}>
                  19 – 23 December 2026
                </div>
                <div className="mt-1 flex flex-wrap items-center gap-3">
                  <span className="text-sm font-medium text-gray-300">
                    {eventInfo.host}, Chennai
                  </span>
                  <Link
                    href="/events"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#FFC72C] hover:text-white transition-colors"
                  >
                    <span>View All Events</span>
                    <span className="text-xs">→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 items-center">
              <Link
                href="/register"
                className="px-8 py-3.5 rounded-full font-black text-sm text-[#08140D] bg-[#FFC72C] hover:bg-[#F59E0B] transition-all duration-200 shadow-[0_0_25px_rgba(255,199,44,0.45)] hover:shadow-[0_0_35px_rgba(255,199,44,0.7)] hover:-translate-y-0.5"
              >
                <span>REGISTER ROSTER &rarr;</span>
              </Link>
              <Link
                href="/events"
                className="px-8 py-3.5 rounded-full font-semibold text-sm text-gray-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 transition-all duration-200 hover:-translate-y-0.5"
              >
                Explore Events &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* Scrolling Marquee Ticker */}
        <div
          className="absolute bottom-0 w-full py-3 overflow-hidden z-20"
          style={{ background: '#08140D', borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          <div className="flex whitespace-nowrap" style={{ animation: 'marquee 30s linear infinite' }}>
            {[...Array(8)].map((_, i) => (
              <span
                key={i}
                className="text-[11px] font-bold tracking-[0.2em] uppercase mx-8 flex items-center gap-4 text-gray-300"
              >
                <span>{eventInfo.dates}</span>
                <span className="text-[#FFC72C]">◆</span>
                <span>{eventInfo.host}</span>
                <span className="text-[#FFC72C]">◆</span>
                <span>9th Inter-IIIT Sports Meet</span>
                <span className="text-[#FFC72C]">◆</span>
                <span>25+ Participating Institutes</span>
                <span className="text-[#FFC72C]">◆</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 2. QUICK LOGISTICS INFORMATION CARDS (SpotlightCard) ───────── */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-[#F8FAF8]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up" distance={20}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              
              <SpotlightCard
                spotlightColor="rgba(255, 199, 44, 0.16)"
                className="p-6 bg-white border border-[#E2E8E4] hover:border-[#143D24]/40 transition-colors shadow-sm"
              >
                <div className="text-[11px] font-black uppercase tracking-[0.18em] mb-2 text-[#143D24]">
                  Tournament Dates
                </div>
                <div className="font-extrabold text-2xl text-[#08140D] mb-1.5 tracking-tight">
                  19 – 23 Dec 2026
                </div>
                <div className="text-xs text-[#526358] leading-relaxed">
                  5 Championship Days of track, court, aquatics and field competition.
                </div>
              </SpotlightCard>

              <SpotlightCard
                spotlightColor="rgba(255, 199, 44, 0.16)"
                className="p-6 bg-white border border-[#E2E8E4] hover:border-[#143D24]/40 transition-colors shadow-sm"
              >
                <div className="text-[11px] font-black uppercase tracking-[0.18em] mb-2 text-[#143D24]">
                  Host Campus
                </div>
                <div className="font-extrabold text-2xl text-[#08140D] mb-1.5 tracking-tight">
                  IIITDM Kancheepuram
                </div>
                <div className="text-xs text-[#526358] leading-relaxed">
                  51-Acre Eco Campus on Vandalur-Kelambakkam Road, Chennai.
                </div>
              </SpotlightCard>

              <SpotlightCard
                spotlightColor="rgba(255, 199, 44, 0.16)"
                className="p-6 bg-white border border-[#E2E8E4] hover:border-[#143D24]/40 transition-colors shadow-sm"
              >
                <div className="text-[11px] font-black uppercase tracking-[0.18em] mb-2 text-[#143D24]">
                  National Scale
                </div>
                <div className="font-extrabold text-2xl text-[#08140D] mb-1.5 tracking-tight">
                  25+ IIITs Nationwide
                </div>
                <div className="text-xs text-[#526358] leading-relaxed">
                  Over 2,000 student-athletes and official delegations attending.
                </div>
              </SpotlightCard>

              <SpotlightCard
                spotlightColor="rgba(255, 199, 44, 0.16)"
                className="p-6 bg-white border border-[#E2E8E4] hover:border-[#143D24]/40 transition-colors shadow-sm"
              >
                <div className="text-[11px] font-black uppercase tracking-[0.18em] mb-2 text-[#143D24]">
                  Disciplines
                </div>
                <div className="font-extrabold text-2xl text-[#08140D] mb-1.5 tracking-tight">
                  15+ Sports Categories
                </div>
                <div className="text-xs text-[#526358] leading-relaxed">
                  Athletics, Aquatics, Racquet, Team, and Combat sports.
                </div>
              </SpotlightCard>

            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── 3. STATS BAND (CountUp in Obsidian Pine & Champion Gold) ───── */}
      <section className="py-12 bg-[#0B1A12] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-white/10">
            {eventInfo.stats.map((stat, idx) => {
              const numericValue = parseInt(stat.value.replace(/[^0-9]/g, ''), 10) || 0;
              const hasPlus = stat.value.includes('+');

              return (
                <div key={idx} className="px-4 sm:px-8 py-4 text-center">
                  <div className="font-black text-[#FFC72C] text-3xl sm:text-5xl tracking-tight" style={{ color: '#FFC72C' }}>
                    <CountUp
                      to={numericValue}
                      from={0}
                      duration={2.2}
                      suffix={hasPlus ? '+' : ''}
                    />
                  </div>
                  <div className="mt-2 text-[11px] font-bold tracking-[0.18em] uppercase text-gray-300">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 4. ABOUT PREVIEW ────────────────────────────────────────────── */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div>
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#143D24]">
                  About the Meet
                </span>
                <h2 className="mt-3 font-black text-3xl sm:text-5xl leading-tight text-[#08140D] tracking-tight">
                  <BlurText text="A Legacy of Athletic Excellence" delay={60} />
                </h2>
                <div className="mt-4 w-12 h-1 rounded-full bg-[#FFC72C]" />
                <p className="mt-6 text-base leading-relaxed text-[#4A5950]">
                  {eventInfo.description}
                </p>
                <p className="mt-4 text-base leading-relaxed text-[#4A5950]">
                  Organized every four years, the Inter-IIIT Meet serves as the flagship arena for student-athletes to demonstrate teamwork, athletic excellence, and sportsmanship. The 9th edition celebrates this tradition at IIITDM Kancheepuram.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 mt-8 font-bold text-sm text-[#143D24] hover:text-[#16A34A] group transition-all"
                >
                  <span>Read Full History &amp; Legacy</span>
                  <span className="group-hover:translate-x-1 transition-transform inline-block">
                    &rarr;
                  </span>
                </Link>
              </div>
              <div className="relative">
                <div className="relative w-full h-[280px] sm:h-[400px] rounded-2xl overflow-hidden shadow-xl border border-[#E2E8E4]">
                  <Image
                    src="/assets/gallery/gallery-01.jpg"
                    alt="Athletic championship meet"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white text-xs font-bold px-3 py-1.5 rounded-full bg-[#08140D]/80 backdrop-blur-md border border-white/20">
                    Inter-IIIT Athletics Track
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── 5. HOST INSTITUTE SPOTLIGHT BANNER ─────────────────────────── */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-[#F8FAF8]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up">
            <SpotlightCard
              spotlightColor="rgba(255, 199, 44, 0.15)"
              className="rounded-3xl p-8 sm:p-12 border border-[#E2E8E4] bg-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-sm"
            >
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] mb-3 text-[#143D24]">
                  <span>Host Institute Spotlight</span>
                </div>
                <h3 className="font-black text-2xl sm:text-3xl mb-3 text-[#08140D] tracking-tight">
                  Welcome to {hostInstitute.shortName}
                </h3>
                <p className="text-sm leading-relaxed text-[#4A5950] mb-5">
                  An Institute of National Importance under the Ministry of Education, Government of India. Set across a 51-acre eco-friendly campus in Melakottaiyur, Chennai, the institute features an athletic stadium, indoor sports complex, competition swimming pool, and floodlit courts ready to host visiting delegations.
                </p>
                <div className="flex flex-wrap gap-3 text-xs font-semibold text-[#08140D]">
                  <span className="bg-[#F8FAF8] px-3.5 py-1.5 rounded-lg border border-[#E2E8E4]">
                    51-Acre Eco Campus
                  </span>
                  <span className="bg-[#F8FAF8] px-3.5 py-1.5 rounded-lg border border-[#E2E8E4]">
                    Olympic-Grade Arenas
                  </span>
                  <span className="bg-[#F8FAF8] px-3.5 py-1.5 rounded-lg border border-[#E2E8E4]">
                    21 km from Chennai Airport
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto">
                <Link
                  href="/location"
                  className="w-full sm:w-auto text-center px-7 py-3.5 rounded-full text-xs font-bold text-white bg-[#143D24] hover:bg-[#0F2E1B] transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-[0_0_20px_rgba(20,61,36,0.4)]"
                >
                  View Campus &amp; Travel Guide &rarr;
                </Link>
                <Link
                  href="/about"
                  className="w-full sm:w-auto text-center px-7 py-3.5 rounded-full text-xs font-semibold text-[#08140D] border border-[#E2E8E4] hover:bg-[#F8FAF8] transition-all"
                >
                  About the Host
                </Link>
              </div>
            </SpotlightCard>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── 6. PARTICIPATING IIITs ──────────────────────────────────────── */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#143D24]">
              Participating Institutes
            </span>
            <h2 className="mt-3 font-black text-3xl sm:text-4xl text-[#08140D] tracking-tight">
              25+ IIITs • 1 Champion
            </h2>
          </div>
          <ScrollReveal direction="up">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4">
              {iiits.map((iiit, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col items-center text-center p-4 rounded-xl border border-[#E2E8E4] bg-white hover:border-[#FFC72C]/50 hover:shadow-md transition-all duration-200 cursor-default"
                >
                  <div className="relative w-12 h-12 mb-3">
                    <Image
                      src={iiit.logo}
                      alt={iiit.name}
                      fill
                      sizes="48px"
                      className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-200"
                    />
                  </div>
                  <span className="text-[11px] font-semibold leading-tight text-[#4A5950] group-hover:text-[#08140D]">
                    {iiit.name}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── 7. STUDENTS' & EMPLOYEES' MEET (Dual Dark Split) ─────────────── */}
      <section className="flex flex-col md:flex-row bg-[#08140D]">
        {/* Students */}
        <div className="flex-1 relative min-h-[380px] flex items-end bg-[#08140D] border-b md:border-b-0 md:border-r border-white/10">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/assets/gallery/gallery-02.jpg"
              alt="Students Meet"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#08140D] via-[#08140D]/80 to-transparent" />
          <div className="relative z-10 p-10 md:p-14">
            <div className="inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 bg-[#FFC72C] text-[#08140D]">
              Students
            </div>
            <h2 className="font-black text-white text-3xl md:text-4xl leading-tight mb-3 tracking-tight" style={{ color: '#FFFFFF' }}>
              Students&apos; <br />Sports Meet
            </h2>
            <p className="text-sm leading-relaxed max-w-sm text-gray-300">
              2,000+ student-athletes from 25+ IIITs competing across 15+ disciplines over 5 championship days.
            </p>
          </div>
        </div>

        {/* Employees */}
        <div className="flex-1 relative min-h-[380px] flex items-end bg-[#0F2E1B]">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/assets/gallery/gallery-03.jpg"
              alt="Employees Meet"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F2E1B] via-[#0F2E1B]/80 to-transparent" />
          <div className="relative z-10 p-10 md:p-14">
            <div className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 bg-white/15 text-white border border-white/20">
              Faculty &amp; Staff
            </div>
            <h2 className="font-black text-white text-3xl md:text-4xl leading-tight mb-3 tracking-tight" style={{ color: '#FFFFFF' }}>
              Employees&apos; <br />Sports Meet
            </h2>
            <p className="text-sm leading-relaxed max-w-sm text-gray-300">
              Faculty and staff from IIITs unite in friendly competition, camaraderie, and community health.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 8. GALLERY PREVIEW (TiltedCard) ─────────────────────────────── */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#143D24]">
                Glimpses
              </span>
              <h2 className="mt-2 font-black text-3xl md:text-4xl text-[#08140D] tracking-tight">
                Gallery Moments
              </h2>
            </div>
            <Link
              href="/gallery"
              className="text-sm font-bold text-[#143D24] hover:text-[#16A34A] hidden sm:inline-flex items-center gap-1.5 group"
            >
              View All Photos{' '}
              <span className="group-hover:translate-x-1 transition-transform inline-block">
                &rarr;
              </span>
            </Link>
          </div>

          <ScrollReveal direction="up">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[4, 5, 6].map((num) => (
                <TiltedCard
                  key={num}
                  captionText={`Championship Highlight 0${num}`}
                  containerHeight="220px"
                  showTooltip={true}
                  className="rounded-xl overflow-hidden border border-[#E2E8E4]"
                >
                  <div className="relative w-full h-[220px]">
                    <Image
                      src={`/assets/gallery/gallery-0${num}.jpg`}
                      alt={`Gallery moment ${num}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                </TiltedCard>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── 9. PARTNERS & SUPPORTERS ───────────────────────────────────── */}
      <section className="py-16 bg-[#F8FAF8] border-t border-[#E2E8E4]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#143D24]">
              Partners &amp; Sponsors
            </span>
            <h2 className="mt-2 font-black text-2xl text-[#08140D] tracking-tight">
              Our Supporters
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-5 items-center">
            {[1, 2, 3, 4, 5].map((num) => (
              <div
                key={num}
                className="relative h-16 w-36 rounded-xl flex items-center justify-center border border-[#E2E8E4] bg-white transition-all hover:shadow-md hover:border-[#FFC72C]/50"
              >
                <Image
                  src={`/assets/sponsors/sponsor-0${num}.png`}
                  alt={`Sponsor ${num}`}
                  fill
                  sizes="144px"
                  className="object-contain p-3 filter grayscale hover:grayscale-0 transition-all duration-200"
                />
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-sm mb-4 text-[#4A5950]">
              Interested in supporting the 9th Inter-IIIT Sports Meet?
            </p>
            <a
              href="mailto:sports@iiitdm.ac.in"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-[#143D24] hover:bg-[#0F2E1B] transition-all shadow-sm hover:shadow-[0_0_20px_rgba(20,61,36,0.35)] hover:-translate-y-0.5"
            >
              <span>Contact Sponsorship &rarr; sports@iiitdm.ac.in</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
