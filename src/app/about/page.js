'use client';

import Image from 'next/image';
import Link from 'next/link';
import { eventInfo } from '@/data/info';
import BlurText from '@/components/reactbits/BlurText';
import SpotlightCard from '@/components/reactbits/SpotlightCard';
import CountUp from '@/components/reactbits/CountUp';
import ScrollReveal from '@/components/reactbits/ScrollReveal';

export default function About() {
  const { hostInstitute, sportsFacilities, stats } = eventInfo;

  return (
    <div className="bg-white min-h-screen text-[#111111]">
      {/* ─── 1. PAGE HEADER (Minimalist Dark) ────────────────────────────── */}
      <section className="pt-28 sm:pt-36 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-[#08140D] text-white border-b border-[#FFC72C]/20">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#FFC72C]" style={{ color: '#FFC72C' }}>
            Our Legacy &amp; Host Institute
          </span>
          <h1 className="mt-3 font-black text-4xl sm:text-6xl text-white tracking-tight" style={{ color: '#FFFFFF' }}>
            <BlurText text="About the Meet" delay={70} className="text-white" />
          </h1>
          <div className="mt-4 w-12 h-1 rounded-full bg-[#FFC72C]" />
          <p className="mt-5 text-base sm:text-lg max-w-2xl leading-relaxed text-gray-200" style={{ color: '#E5E7EB' }}>
            The flagship national sports gathering uniting 25+ Indian Institutes of Information Technology, hosted at IIITDM Kancheepuram.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* ─── 2. HISTORY & THE INTER-IIIT TRADITION ──────────────────────── */}
        <ScrollReveal direction="up">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
            <div>
              <div className="inline-block px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider mb-4 bg-[#143D24]/10 text-[#143D24] border border-[#143D24]/20">
                National Sports Tradition
              </div>
              <h2 className="font-black text-3xl sm:text-4xl mb-6 leading-tight text-[#111111] tracking-tight">
                A Legacy of <span className="text-[#143D24]">Sportsmanship</span>
              </h2>
              <p className="text-base leading-relaxed mb-4 text-[#4B5563]">
                The All India Inter-IIIT Sports Meet is the premier quadrennial athletic tournament established to foster camaraderie, healthy competition, and national integration among autonomous IIITs established across India.
              </p>
              <p className="text-base leading-relaxed mb-8 text-[#4B5563]">
                This 9th edition brings together over 2,000 student-athletes and staff contingents competing across track, court, indoor, and aquatics disciplines. The event is a celebration of athletic discipline, endurance, and inter-institutional solidarity.
              </p>

              {/* Quick KPI Stats with CountUp */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {stats.map((stat, idx) => {
                  const num = parseInt(stat.value.replace(/[^0-9]/g, ''), 10) || 0;
                  const hasPlus = stat.value.includes('+');
                  return (
                    <div
                      key={idx}
                      className="rounded-xl p-4 border border-[#E5E7EB] bg-[#F8FAF8]"
                    >
                      <div className="font-black text-2xl sm:text-3xl text-[#143D24] tracking-tight">
                        <CountUp to={num} from={0} duration={2} suffix={hasPlus ? '+' : ''} />
                      </div>
                      <div className="text-[10px] font-bold uppercase tracking-wider mt-1 text-[#6B7280]">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Editorial Photography */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-md border border-[#E5E7EB]">
                <Image
                  src="/assets/gallery/gallery-04.jpg"
                  alt="Athletic Relay"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-md border border-[#E5E7EB] mt-6">
                <Image
                  src="/assets/gallery/gallery-05.jpg"
                  alt="Opening Ceremony"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ─── 3. HOST INSTITUTE SPOTLIGHT: IIITDM KANCHEEPURAM ────────────── */}
        <ScrollReveal direction="up">
          <div className="rounded-3xl p-8 sm:p-12 lg:p-14 mb-24 border border-[#E5E7EB] bg-[#F7F7F8]">
            <div className="grid lg:grid-cols-3 gap-10 items-start">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFC72C]" />
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#143D24]" style={{ color: '#143D24' }}>
                    Host Institute
                  </span>
                </div>
                <h2 className="font-black text-2xl sm:text-3xl mb-4 text-[#111111] tracking-tight">
                  {hostInstitute.name}
                </h2>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold mb-5 bg-white border border-[#E5E7EB] text-[#111111]">
                  <span>🏛️</span>
                  <span>{hostInstitute.status} &bull; Estd. {hostInstitute.established}</span>
                </div>
                <p className="text-base leading-relaxed mb-4 text-[#4B5563]">
                  {hostInstitute.description}
                </p>
                <p className="text-sm leading-relaxed text-[#6B7280]">
                  Situated on a <strong>51-acre campus</strong> along the Vandalur-Kelambakkam Road in Chennai, the institute boasts dedicated outdoor athletic grounds and modern indoor sports facilities, providing visiting delegations with a competition-ready environment.
                </p>
              </div>

              {/* Quick Fact Box */}
              <div className="rounded-2xl p-6 border border-[#E5E7EB] bg-white flex flex-col justify-between shadow-sm">
                <div>
                  <h3 className="font-bold text-xs uppercase tracking-wider mb-4 text-[#111111]">
                    Campus Snapshot
                  </h3>
                  <ul className="space-y-3 text-xs text-[#4B5563]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#143D24] font-bold">&bull;</span>
                      <span><strong>Campus Area:</strong> 51 Acres in Melakottaiyur, Chennai</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#143D24] font-bold">&bull;</span>
                      <span><strong>Governance:</strong> Autonomous Institute under Ministry of Education, GoI</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#143D24] font-bold">&bull;</span>
                      <span><strong>Event Host Role:</strong> 9th All India Edition Organizer</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E5E7EB]">
                  <Link
                    href="/location"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#143D24] hover:text-[#08140D] transition-colors"
                  >
                    <span>Explore Campus Map &amp; Directions</span>
                    <span>&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ─── 4. SPORTS INFRASTRUCTURE BREAKDOWN (SpotlightCards) ─────────── */}
        <ScrollReveal direction="up">
          <div className="mb-24">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#143D24]" style={{ color: '#143D24' }}>
                Campus Facilities
              </span>
              <h2 className="mt-2 font-black text-3xl sm:text-4xl text-[#111111] tracking-tight">
                Sports Infrastructure
              </h2>
              <p className="mt-3 text-sm text-[#6B7280]">
                IIITDM Kancheepuram maintains dedicated venues engineered to host high-intensity university-level competitions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sportsFacilities.map((facility, idx) => (
                <SpotlightCard
                  key={idx}
                  spotlightColor="rgba(20, 61, 36, 0.15)"
                  className="rounded-2xl p-7 border border-[#E5E7EB] bg-white flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 bg-[#F8FAF8] border border-[#E5E7EB]">
                      <span className="text-lg">
                        {idx === 0 ? '🏟️' : idx === 1 ? '🏀' : idx === 2 ? '🎾' : idx === 3 ? '🏊' : '🏏'}
                      </span>
                    </div>
                    <h3 className="font-bold text-base mb-2 text-[#111111]">
                      {facility.name}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#6B7280]">
                      {facility.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-3 border-t border-[#E5E7EB] text-[11px] font-semibold text-[#143D24]">
                    Sanctioned Championship Venue
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ─── 5. THE DUAL TRADITION: STUDENTS & EMPLOYEES ────────────────── */}
        <ScrollReveal direction="up">
          <div className="rounded-3xl overflow-hidden mb-24 bg-[#08140D] border border-[#FFC72C]/25">
            <div className="grid md:grid-cols-2">
              <div className="p-10 md:p-14 text-white flex flex-col justify-center">
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#FFC72C]" style={{ color: '#FFC72C' }}>
                  Inclusive Participation
                </span>
                <h2 className="mt-3 font-black text-3xl sm:text-4xl mb-5 leading-tight tracking-tight text-white" style={{ color: '#FFFFFF' }}>
                  Beyond the Field: <br />Two Great Traditions
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-gray-200 mb-5">
                  The Inter-IIIT Sports Meet celebrates athletics across the entire community through two distinct meets: the <strong>Students&apos; Sports Meet</strong> and the <strong>Employees&apos; Sports Meet</strong>.
                </p>
                <p className="text-sm leading-relaxed text-gray-300">
                  While student-athletes contend for inter-collegiate championship glory, faculty and staff from participating IIITs compete in friendly matches that reinforce collegial bonds and institution-wide fitness.
                </p>
              </div>

              <div className="relative min-h-[300px] md:min-h-0">
                <Image
                  src="/assets/gallery/gallery-06.jpg"
                  alt="Athletic spirit"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover opacity-60"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ─── 6. CONTINGENT HOSPITALITY & CAMPUS LIFE ────────────────────── */}
        <ScrollReveal direction="up">
          <div className="rounded-3xl p-8 sm:p-12 border border-[#E5E7EB] bg-[#F8FAF8]">
            <div className="max-w-3xl">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#143D24]" style={{ color: '#143D24' }}>
                Logistics &amp; Hospitality
              </span>
              <h3 className="mt-2 font-black text-2xl sm:text-3xl text-[#08140D] tracking-tight">
                Contingent Accommodation &amp; Care
              </h3>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#4B5563]">
                Visiting teams from all 25+ IIITs are accommodated in on-campus student hostels with dedicated dining arrangements serving regional dietary preferences. A 24/7 campus health center, first-aid teams, and local transport assistance marshals ensure a secure and organized tournament experience.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/location"
                  className="px-6 py-3 rounded-full text-xs font-bold text-[#FFC72C] bg-[#143D24] hover:bg-[#08140D] border border-[#FFC72C]/30 transition-all hover:-translate-y-0.5 shadow-md"
                >
                  View Travel &amp; Location Guide &rarr;
                </Link>
                <Link
                  href="/events"
                  className="px-6 py-3 rounded-full text-xs font-semibold text-[#111111] bg-white border border-[#E5E7EB] hover:bg-gray-50 transition-all"
                >
                  View 15+ Sports Disciplines
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
