'use client';

import { eventInfo } from '@/data/info';
import Link from 'next/link';
import BlurText from '@/components/reactbits/BlurText';
import SpotlightCard from '@/components/reactbits/SpotlightCard';
import ShinyText from '@/components/reactbits/ShinyText';
import ScrollReveal from '@/components/reactbits/ScrollReveal';

export default function Contact() {
  return (
    <div className="bg-white min-h-screen text-[#111111]">
      {/* Page Header (Minimalist Dark) */}
      <div className="pt-28 sm:pt-36 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-[#08140D] text-white border-b border-[#FFC72C]/20">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#FFC72C]" style={{ color: '#FFC72C' }}>
            Get In Touch
          </span>
          <h1 className="mt-3 font-black text-4xl sm:text-6xl text-white tracking-tight" style={{ color: '#FFFFFF' }}>
            <BlurText text="Contact Us" delay={70} className="text-white" />
          </h1>
          <div className="mt-4 w-12 h-1 rounded-full bg-[#FFC72C]" />
          <p className="mt-5 text-base sm:text-lg max-w-xl text-gray-200" style={{ color: '#E5E7EB' }}>
            Reach out to our organizing committee for event inquiries, delegacy rosters, accommodation and sponsorship.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <ScrollReveal direction="up">
          <p className="text-xl font-medium text-center mb-16 text-[#4B5563] max-w-xl mx-auto">
            &ldquo;Got questions? We&apos;ve got answers &mdash; reach out and let&apos;s connect.&rdquo;
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Email */}
            <SpotlightCard
              spotlightColor="rgba(20, 61, 36, 0.15)"
              className="rounded-2xl p-8 border border-[#E5E7EB] bg-white flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-[#F8FAF8] border border-[#E5E7EB]">
                  <svg className="w-6 h-6 text-[#143D24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-[11px] font-bold uppercase tracking-[0.2em] mb-2 text-[#143D24]">
                  Email
                </div>
                <h3 className="font-bold text-lg mb-2 text-[#111111]">
                  Official Inquiries
                </h3>
                <p className="text-xs text-[#6B7280] mb-4">
                  For roster, hospitality, and event coordination.
                </p>
              </div>
              <a
                href="mailto:sports@iiitdm.ac.in"
                className="text-sm font-bold text-[#143D24] hover:text-[#08140D] transition-colors"
              >
                sports@iiitdm.ac.in
              </a>
            </SpotlightCard>

            {/* Address */}
            <SpotlightCard
              spotlightColor="rgba(20, 61, 36, 0.15)"
              className="rounded-2xl p-8 border border-[#E5E7EB] bg-white flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-[#F8FAF8] border border-[#E5E7EB]">
                  <svg className="w-6 h-6 text-[#143D24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="text-[11px] font-bold uppercase tracking-[0.2em] mb-2 text-[#143D24]">
                  Venue
                </div>
                <h3 className="font-bold text-lg mb-2 text-[#111111]">
                  Host Institute
                </h3>
                <p className="text-xs text-[#4B5563] leading-relaxed mb-4">
                  <strong>{eventInfo.host}</strong><br />
                  Melakottaiyur, Chennai 600127
                </p>
              </div>
              <Link
                href="/location"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#143D24] hover:text-[#08140D] transition-colors"
              >
                <span>View Campus Guide</span>
                <span>&rarr;</span>
              </Link>
            </SpotlightCard>

            {/* Dates */}
            <SpotlightCard
              spotlightColor="rgba(20, 61, 36, 0.15)"
              className="rounded-2xl p-8 border border-[#E5E7EB] bg-white flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-[#F8FAF8] border border-[#E5E7EB]">
                  <svg className="w-6 h-6 text-[#143D24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-[11px] font-bold uppercase tracking-[0.2em] mb-2 text-[#143D24]">
                  Schedule
                </div>
                <h3 className="font-bold text-lg mb-2 text-[#111111]">
                  Event Dates
                </h3>
                <p className="text-base font-extrabold text-[#111111] mb-1">
                  19 – 23 Dec 2026
                </p>
                <p className="text-xs text-[#6B7280]">
                  5 Days • 15+ Sports Disciplines
                </p>
              </div>
              <Link
                href="/events"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#143D24] hover:text-[#08140D] transition-colors mt-4"
              >
                <span>Browse All Sports</span>
                <span>&rarr;</span>
              </Link>
            </SpotlightCard>
          </div>

          {/* Sponsor CTA */}
          <div className="mt-16 rounded-3xl p-10 sm:p-12 text-center bg-[#08140D] text-white border border-[#FFC72C]/25 shadow-xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFC72C] mb-2 inline-block" style={{ color: '#FFC72C' }}>
              Partnership &amp; Brand Reach
            </span>
            <h3 className="font-black text-2xl sm:text-3xl text-white mb-3 tracking-tight" style={{ color: '#FFFFFF' }}>
              Interested in Sponsoring?
            </h3>
            <p className="text-sm sm:text-base mb-8 text-gray-200 max-w-xl mx-auto leading-relaxed">
              Join us in powering the largest inter-collegiate sports championship across the national IIIT network with over 2,000 top student-athletes.
            </p>
            <a
              href="mailto:sports@iiitdm.ac.in"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-[#08140D] bg-[#FFC72C] hover:bg-[#F59E0B] transition-all shadow-md hover:shadow-[0_0_25px_rgba(255,199,44,0.4)] hover:-translate-y-0.5"
            >
              <span>Contact Sponsorship Committee</span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
