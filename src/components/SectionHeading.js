export default function SectionHeading({ title, subtitle, centered = true }) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      <h2 className="text-3xl md:text-4xl font-black text-[#111111] uppercase tracking-tight relative inline-block">
        {title}
        <div
          className={`absolute -bottom-3 h-1 bg-[#FFC72C] rounded-full ${
            centered ? 'left-1/2 -translate-x-1/2 w-16' : 'left-0 w-16'
          }`}
        />
      </h2>
      {subtitle && (
        <p className="mt-5 text-[#6B7280] max-w-2xl text-base sm:text-lg mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
