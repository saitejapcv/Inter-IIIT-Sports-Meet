'use client';

import BlurText from '@/components/reactbits/BlurText';
import ScrollReveal from '@/components/reactbits/ScrollReveal';

const teamSections = [
  {
    title: "Our Patron",
    members: [{ name: "Prof. Example Name", role: "Director, IIITDM Kancheepuram", initial: "P" }]
  },
  {
    title: "Advisory / Monitoring Committee",
    members: [
      { name: "Prof. ABC", role: "Dean (R&D)", initial: "A" },
      { name: "Prof. XYZ", role: "Dean (Academics)", initial: "X" },
      { name: "Dr. DEF", role: "Dean (Student Affairs)", initial: "D" },
      { name: "Dr. PQR", role: "Registrar", initial: "P" }
    ]
  },
  {
    title: "Employee Core Team",
    members: [
      { name: "Dr. John Doe", role: "Chairman, Finance", initial: "J" },
      { name: "Dr. Jane Smith", role: "Chairman, Security", initial: "J" },
      { name: "Mr. Alan Wake", role: "Accommodation & Food", initial: "A" },
      { name: "Mrs. Sarah Connor", role: "Web & App Ops", initial: "S" }
    ]
  },
  {
    title: "Student Core Team",
    members: [
      { name: "Alex Johnson", role: "President, Gymkhana", initial: "A" },
      { name: "Sam Wilson", role: "Sports Secretary", initial: "S" },
      { name: "Taylor Swift", role: "General Secretary", initial: "T" }
    ]
  }
];

export default function Team() {
  return (
    <div className="bg-white min-h-screen text-[#111111]">
      {/* Page Header (Minimalist Dark) */}
      <div className="pt-28 sm:pt-36 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-[#08140D] text-white border-b border-[#FFC72C]/20">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#FFC72C]" style={{ color: '#FFC72C' }}>
            The People Behind It
          </span>
          <h1 className="mt-3 font-black text-4xl sm:text-6xl text-white tracking-tight" style={{ color: '#FFFFFF' }}>
            <BlurText text="Meet the Team" delay={70} className="text-white" />
          </h1>
          <div className="mt-4 w-12 h-1 rounded-full bg-[#FFC72C]" />
          <p className="mt-5 text-base sm:text-lg max-w-xl text-gray-200" style={{ color: '#E5E7EB' }}>
            Dedicated faculty, staff, and student leaders working tirelessly to make the 9th Inter-IIIT Sports Meet a reality.
          </p>
        </div>
      </div>

      {/* Team Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        {teamSections.map((section, sIdx) => (
          <ScrollReveal key={sIdx} direction="up">
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px flex-1 bg-[#E5E7EB]" />
              <h3 className="text-xs font-bold uppercase tracking-[0.25em] px-4 text-[#143D24]" style={{ color: '#143D24' }}>
                {section.title}
              </h3>
              <div className="h-px flex-1 bg-[#E5E7EB]" />
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              {section.members.map((member, mIdx) => (
                <div
                  key={mIdx}
                  className="text-center group p-4 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                  style={{ width: '190px' }}
                >
                  {/* Monogram Avatar */}
                  <div className="w-24 h-24 mx-auto rounded-2xl flex items-center justify-center mb-4 bg-[#F8FAF8] border border-[#E5E7EB] group-hover:border-[#FFC72C] group-hover:shadow-[0_10px_25px_rgba(255,199,44,0.25)] transition-all duration-300">
                    <span className="font-extrabold text-3xl text-[#111111] group-hover:text-[#143D24] transition-colors">
                      {member.initial}
                    </span>
                  </div>
                  <h4 className="font-bold text-base text-[#111111] tracking-tight">
                    {member.name}
                  </h4>
                  <p className="text-xs mt-1 text-[#6B7280] leading-snug">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
