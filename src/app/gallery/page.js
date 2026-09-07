'use client';

import Image from 'next/image';
import { gallery } from '@/data/gallery';
import BlurText from '@/components/reactbits/BlurText';
import TiltedCard from '@/components/reactbits/TiltedCard';
import ScrollReveal from '@/components/reactbits/ScrollReveal';

export default function Gallery() {
  const featured = gallery[0];
  const rest = gallery.slice(1);

  return (
    <div className="bg-white min-h-screen text-[#111111]">
      {/* Page Header (Minimalist Dark) */}
      <div className="pt-28 sm:pt-36 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-[#08140D] text-white border-b border-[#FFC72C]/20">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#FFC72C]" style={{ color: '#FFC72C' }}>
            Glimpses of Glory
          </span>
          <h1 className="mt-3 font-black text-4xl sm:text-6xl text-white tracking-tight" style={{ color: '#FFFFFF' }}>
            <BlurText text="Tournament Gallery" delay={70} className="text-white" />
          </h1>
          <div className="mt-4 w-12 h-1 rounded-full bg-[#FFC72C]" />
          <p className="mt-5 text-base sm:text-lg max-w-xl text-gray-200" style={{ color: '#E5E7EB' }}>
            Capturing the intensity, sportsmanship, and unforgettable triumphs of the Inter-IIIT Sports Meet.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured image */}
        <ScrollReveal direction="up">
          <div className="relative w-full overflow-hidden rounded-3xl mb-8 group h-[280px] sm:h-[460px] border border-[#E5E7EB] shadow-lg">
            <Image
              src={featured}
              alt="Gallery featured moment"
              fill
              sizes="(max-width: 1280px) 100vw, 1200px"
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <span className="text-xs font-black uppercase tracking-wider px-3.5 py-1 rounded-full bg-[#FFC72C] text-[#08140D] inline-block mb-2 shadow-md">
                Featured Highlight
              </span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                Championship Athletics &amp; Track Events
              </h3>
            </div>
          </div>
        </ScrollReveal>

        {/* Remaining grid */}
        <ScrollReveal direction="up">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {rest.map((img, idx) => (
              <TiltedCard
                key={idx}
                captionText={`Highlight 0${idx + 2}`}
                containerHeight="220px"
                showTooltip={true}
                className="rounded-2xl overflow-hidden border border-[#E5E7EB] shadow-sm"
              >
                <div className="relative w-full h-[220px]">
                  <Image
                    src={img}
                    alt={`Gallery moment ${idx + 2}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </TiltedCard>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
