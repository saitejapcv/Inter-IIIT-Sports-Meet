'use client';

import Link from 'next/link';
import { eventInfo } from '@/data/info';
import BlurText from '@/components/reactbits/BlurText';
import SpotlightCard from '@/components/reactbits/SpotlightCard';
import ShinyText from '@/components/reactbits/ShinyText';
import ScrollReveal from '@/components/reactbits/ScrollReveal';

export default function Location() {
  const { location, hostInstitute, sportsFacilities } = eventInfo;

  return (
    <div className="bg-white min-h-screen text-[#111111]">
      {/* ─── 1. PAGE HERO & HEADER (Minimalist Dark) ──────────────────── */}
      <section className="pt-28 sm:pt-36 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-[#08140D] text-white border-b border-[#FFC72C]/20">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#FFC72C]" style={{ color: '#FFC72C' }}>
            Venue &amp; Travel Guide
          </span>
          <h1 className="mt-3 font-black text-4xl sm:text-6xl text-white tracking-tight" style={{ color: '#FFFFFF' }}>
            <BlurText text="Location &amp; How to Reach" delay={70} className="text-white" />
          </h1>
          <div className="mt-4 w-12 h-1 rounded-full bg-[#FFC72C]" />
          
          <p className="mt-6 text-base sm:text-lg max-w-3xl leading-relaxed text-gray-200" style={{ color: '#E5E7EB' }}>
            The 9th All India Inter-IIIT Sports Meet is held at the {hostInstitute.campusArea} of{' '}
            <strong className="font-bold text-white">{hostInstitute.name}</strong>, situated in Melakottaiyur, Chennai.
          </p>

          {/* Quick Actions & Coordinates Bar */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-black text-[#08140D] bg-[#FFC72C] hover:bg-[#F59E0B] transition-all duration-200 shadow-md hover:shadow-[0_0_25px_rgba(255,199,44,0.4)] hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Get Directions ↗</span>
            </a>

            {/* GPS Coordinates Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-3 rounded-full text-xs font-semibold bg-white/10 border border-[#FFC72C]/30 text-gray-200">
              <span className="w-2 h-2 rounded-full bg-[#FFC72C] animate-pulse" />
              GPS: {location.coordinates.latitude}, {location.coordinates.longitude}
            </div>

            <span className="text-xs sm:text-sm text-gray-300">
              {location.address}
            </span>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* ─── 2. TRAVEL INFORMATION CARDS (SpotlightCards) ─────────────── */}
        <div className="mb-20">
          <div className="mb-10">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#143D24]" style={{ color: '#143D24' }}>
              How to Reach
            </span>
            <h2 className="mt-2 font-black text-2xl sm:text-4xl text-[#111111] tracking-tight">
              Travel &amp; Distance Matrix
            </h2>
            <p className="mt-2 text-sm text-[#6B7280]">
              Connectivity options from major air, rail, and bus transit terminals in the Chennai metropolitan area.
            </p>
          </div>

          <ScrollReveal direction="up">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Airport */}
              <SpotlightCard
                spotlightColor="rgba(20, 61, 36, 0.15)"
                className="rounded-2xl p-8 border border-[#E5E7EB] bg-white flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#F8FAF8] border border-[#E5E7EB]">
                      <svg className="w-6 h-6 text-[#143D24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#143D24]/10 text-[#143D24] border border-[#143D24]/20">
                      ~{location.airport.distance}
                    </span>
                  </div>

                  <div className="text-[11px] font-bold uppercase tracking-[0.2em] mb-1 text-[#143D24]">
                    By Air
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-[#111111]">
                    {location.airport.name}
                  </h3>
                  <p className="text-xs font-semibold mb-4 text-[#143D24]">
                    Approx. {location.airport.time} drive via Vandalur-Kelambakkam Road
                  </p>
                  <p className="text-sm leading-relaxed text-[#6B7280]">
                    {location.airport.details}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E5E7EB] text-xs font-medium text-[#6B7280]">
                  Recommended: Airport prepaid taxi, Ola, Uber, or Fast Track.
                </div>
              </SpotlightCard>

              {/* Card 2: Railway Stations */}
              <SpotlightCard
                spotlightColor="rgba(20, 61, 36, 0.15)"
                className="rounded-2xl p-8 border border-[#E5E7EB] bg-white flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#F8FAF8] border border-[#E5E7EB]">
                      <svg className="w-6 h-6 text-[#143D24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#143D24]/10 text-[#143D24] border border-[#143D24]/20">
                      Rail Hubs
                    </span>
                  </div>

                  <div className="text-[11px] font-bold uppercase tracking-[0.2em] mb-1 text-[#143D24]">
                    By Train
                  </div>
                  <h3 className="font-bold text-lg mb-4 text-[#111111]">
                    Major Railway Terminals
                  </h3>

                  <ul className="space-y-3.5">
                    {location.railway.stations.map((stn, idx) => (
                      <li key={idx} className="text-xs leading-relaxed text-[#6B7280]">
                        <span className="font-bold block text-sm text-[#111111]">
                          {stn.name} &bull; {stn.distance}
                        </span>
                        {stn.details}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E5E7EB] text-xs font-medium text-[#6B7280]">
                  Tambaram (TBM) is the closest and most frequent suburban connecting station.
                </div>
              </SpotlightCard>

              {/* Card 3: Bus & Interstate Terminus */}
              <SpotlightCard
                spotlightColor="rgba(20, 61, 36, 0.15)"
                className="rounded-2xl p-8 border border-[#E5E7EB] bg-white flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#F8FAF8] border border-[#E5E7EB]">
                      <svg className="w-6 h-6 text-[#143D24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                      </svg>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#143D24]/10 text-[#143D24] border border-[#143D24]/20">
                      ~{location.bus.distance}
                    </span>
                  </div>

                  <div className="text-[11px] font-bold uppercase tracking-[0.2em] mb-1 text-[#143D24]">
                    By Bus &amp; Road
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-[#111111]">
                    {location.bus.hub}
                  </h3>
                  <p className="text-xs font-semibold mb-4 text-[#143D24]">
                    Interstate terminus for south-bound buses
                  </p>
                  <p className="text-sm leading-relaxed text-[#6B7280]">
                    {location.bus.routes}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E5E7EB] text-xs font-medium text-[#6B7280]">
                  MTC Bus Stop: &quot;Melakottaiyur / IIITDM Gate&quot; located at the main entrance.
                </div>
              </SpotlightCard>
            </div>
          </ScrollReveal>
        </div>

        {/* ─── 3. INTERACTIVE MAP SECTION ────────────────────────────────── */}
        <ScrollReveal direction="up">
          <div className="mb-20">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-4">
              <div>
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#143D24]" style={{ color: '#143D24' }}>
                  Interactive Campus Locator
                </span>
                <h2 className="mt-2 font-black text-2xl sm:text-3xl text-[#111111] tracking-tight">
                  Campus Map &amp; Navigation
                </h2>
              </div>
              
              <a
                href={location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#143D24] hover:text-[#08140D] transition-colors hover:underline"
              >
                Open in Google Maps App ↗
              </a>
            </div>

            <div className="rounded-3xl overflow-hidden border border-[#E5E7EB] shadow-sm grid grid-cols-1 lg:grid-cols-3 bg-white">
              {/* Interactive Map Iframe */}
              <div className="lg:col-span-2 relative min-h-[380px] sm:min-h-[460px] w-full bg-gray-100">
                <iframe
                  title="IIITDM Kancheepuram Google Map"
                  src={location.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '380px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              {/* Campus Facilities & Entry Guide Panel */}
              <div className="p-8 flex flex-col justify-between bg-[#F8FAF8] border-t lg:border-t-0 lg:border-l border-[#E5E7EB]">
                <div>
                  <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] mb-3 text-[#143D24]">
                    <span className="w-2 h-2 rounded-full bg-[#FFC72C]" />
                    Campus Layout
                  </div>
                  <h3 className="font-black text-xl mb-4 text-[#111111] tracking-tight">
                    Sports Facilities Hub
                  </h3>
                  
                  <p className="text-xs leading-relaxed mb-6 text-[#6B7280]">
                    Outdoor and indoor facilities are located within the campus perimeter within walking distance of contingent hostels.
                  </p>

                  <div className="space-y-3.5">
                    {sportsFacilities.map((facility, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="text-base shrink-0">
                          {i === 0 ? '🏟️' : i === 1 ? '🏀' : i === 2 ? '🎾' : i === 3 ? '🏊' : '🏏'}
                        </span>
                        <div>
                          <div className="text-xs font-bold text-[#111111]">{facility.name}</div>
                          <div className="text-[11px] text-[#6B7280]">{facility.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contingent Arrival Notice */}
                <div className="mt-8 p-4 rounded-xl border border-[#E5E7EB] bg-white text-xs text-[#4B5563]">
                  <div className="font-bold mb-1 text-[#143D24]">
                    ℹ️ Contingent Reporting Desk
                  </div>
                  Arriving IIIT delegations should report to the Sports Council Helpdesk in the Administrative Foyer for registration kits and hostel allocation.
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ─── 4. NEARBY LANDMARKS & POINTS OF INTEREST ───────────────────── */}
        <ScrollReveal direction="up">
          <div className="mb-20">
            <div className="mb-8">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#143D24]" style={{ color: '#143D24' }}>
                Surrounding Area
              </span>
              <h2 className="mt-2 font-black text-2xl sm:text-3xl text-[#111111] tracking-tight">
                Nearby Landmarks
              </h2>
              <p className="mt-2 text-sm text-[#6B7280]">
                Key regional transit, education, and cultural landmarks surrounding the Melakottaiyur campus.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {location.landmarks.map((landmark, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl p-6 border border-[#E5E7EB] bg-white transition-all duration-300 hover:shadow-md hover:border-[#143D24]/30 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#143D24]/10 text-[#143D24]">
                        {landmark.distance}
                      </span>
                      <span className="text-base">
                        {idx === 0 ? '🦁' : idx === 1 ? '🎓' : idx === 2 ? '💻' : '🏛️'}
                      </span>
                    </div>
                    <h3 className="font-bold text-sm mb-2 text-[#111111]">
                      {landmark.name}
                    </h3>
                    <p className="text-xs leading-relaxed text-[#6B7280]">
                      {landmark.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ─── 5. LOCAL TIPS & CONTACT FOOTNOTE ──────────────────────────── */}
        <ScrollReveal direction="up">
          <div className="rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 bg-[#08140D] border border-[#FFC72C]/25 shadow-xl">
            <div>
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#FFC72C]" style={{ color: '#FFC72C' }}>
                Assistance for Traveling Teams
              </span>
              <h3 className="mt-1 font-black text-2xl sm:text-3xl tracking-tight text-white" style={{ color: '#FFFFFF' }}>
                Need Local Travel Coordination?
              </h3>
              <p className="mt-3 text-sm max-w-xl leading-relaxed text-gray-200">
                Student volunteer transport marshals will coordinate assistance at Tambaram Railway Station and Kilambakkam Bus Terminus during peak arrival hours for the 9th Inter-IIIT Meet.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Link
                href="/contact"
                className="px-7 py-3 rounded-full text-sm font-bold text-[#08140D] bg-[#FFC72C] hover:bg-[#F59E0B] transition-all shadow-md hover:shadow-[0_0_20px_rgba(255,199,44,0.4)] hover:-translate-y-0.5"
              >
                Contact Sports Cell
              </Link>
              <a
                href="mailto:sports@iiitdm.ac.in"
                className="px-7 py-3 rounded-full text-sm font-semibold text-gray-200 border border-white/20 hover:border-white hover:text-white transition-all"
              >
                sports@iiitdm.ac.in
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
