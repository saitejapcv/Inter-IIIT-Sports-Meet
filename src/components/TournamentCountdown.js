'use client';

import { useState, useEffect } from 'react';

export default function TournamentCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const target = new Date('2026-12-19T09:00:00+05:30').getTime();

    const calculate = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculate();
    const interval = setInterval(calculate, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return (
      <div className="grid grid-cols-4 gap-2 sm:gap-3 max-w-sm">
        {['DAYS', 'HOURS', 'MINS', 'SECS'].map((label, idx) => (
          <div
            key={idx}
            className="p-2 sm:p-3 rounded-xl bg-white/[0.04] border border-white/10 text-center"
          >
            <div className="font-black text-xl sm:text-2xl text-white font-mono">--</div>
            <div className="text-[9px] font-bold tracking-widest uppercase text-gray-400 mt-0.5">
              {label}
            </div>
          </div>
        ))}
      </div>
    );
  }

  const units = [
    { label: 'DAYS', val: String(timeLeft.days).padStart(2, '0') },
    { label: 'HOURS', val: String(timeLeft.hours).padStart(2, '0') },
    { label: 'MINS', val: String(timeLeft.minutes).padStart(2, '0') },
    { label: 'SECS', val: String(timeLeft.seconds).padStart(2, '0') },
  ];

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
      <div className="grid grid-cols-4 gap-2 sm:gap-3">
        {units.map((unit, idx) => (
          <div
            key={idx}
            className="p-2.5 sm:p-3.5 rounded-xl bg-white/[0.05] border border-white/10 text-center min-w-[62px] sm:min-w-[72px] shadow-inner backdrop-blur-md"
          >
            <div className="font-black text-xl sm:text-2xl font-mono tracking-tight leading-none text-[#FFC72C]" style={{ color: '#FFC72C' }}>
              {unit.val}
            </div>
            <div className="text-[8px] sm:text-[9px] font-bold tracking-widest uppercase text-gray-400 mt-1">
              {unit.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
