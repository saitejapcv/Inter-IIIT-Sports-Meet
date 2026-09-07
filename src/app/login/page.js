"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Login failed. Please check your credentials.");
      }

      if (data.user?.role === "admin") {
        router.push("/admin");
      } else {
        router.push("/register");
      }
    } catch (err) {
      setError(err.message || "An unexpected error occurred during login.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-white text-[#111111]">
      {/* Left panel - branding */}
      <div
        className="hidden md:flex flex-col justify-between w-[42%] p-12 relative overflow-hidden bg-[#08140D] text-white border-r border-[#FFC72C]/20"
      >
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/assets/hero/hero-placeholder.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#08140D]/85 via-[#08140D]/95 to-[#08140D]"
        />

        <div className="relative z-10">
          <div className="w-14 h-14 relative bg-white/10 backdrop-blur-md rounded-2xl p-2 border border-white/15">
            <Image
              src="/assets/brand/inter-iiit-logo.png"
              alt="Logo"
              fill
              className="object-contain p-1"
            />
          </div>
        </div>

        <div className="relative z-10">
          <div className="text-xs font-bold tracking-[0.25em] uppercase mb-3 text-[#FFC72C]" style={{ color: '#FFC72C' }}>
            9th Edition
          </div>
          <h2 className="font-black text-4xl leading-tight mb-4 text-white tracking-tight" style={{ color: '#FFFFFF' }}>
            Inter-IIIT
            <br />
            Sports Meet
            <br />
            2026
          </h2>
          <div className="w-12 h-1 rounded-full mb-6 bg-[#FFC72C]" />
          <p className="text-sm leading-relaxed text-gray-200">
            19–23 December 2026
            <br />
            IIITDM Kancheepuram, Chennai
          </p>
        </div>

        <div className="relative z-10 text-xs text-gray-300">
          © 2026 Inter-IIIT Sports Meet
        </div>
      </div>

      {/* Right panel - form */}
      <div className="flex-1 flex items-center justify-center px-6 py-16 bg-white">
        <div className="w-full max-w-sm">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#143D24]" style={{ color: '#143D24' }}>
              Authentication
            </span>
            <h1 className="font-black text-3xl text-[#111111] tracking-tight mt-1">
              Sign In
            </h1>
            <p className="text-sm mt-1.5 text-[#6B7280]">
              Access the IIIT Registration Portal or Admin Console
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium leading-relaxed">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-[#374151]">
                Username (IIIT Code or Admin)
              </label>
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all border border-[#E5E7EB] bg-[#F8FAF8] focus:bg-white focus:border-[#143D24] focus:ring-2 focus:ring-[#143D24]/20 text-[#111111]"
                placeholder="e.g. iiitdm-kancheepuram or admin"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-[#374151]">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all border border-[#E5E7EB] bg-[#F8FAF8] focus:bg-white focus:border-[#143D24] focus:ring-2 focus:ring-[#143D24]/20 text-[#111111]"
                placeholder="Enter password"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl font-bold text-sm text-[#FFC72C] tracking-wide transition-all bg-[#143D24] hover:bg-[#08140D] border border-[#FFC72C]/40 hover:-translate-y-0.5 shadow-md hover:shadow-[0_0_20px_rgba(255,199,44,0.3)] disabled:opacity-50 cursor-pointer"
            >
              {loading ? "Signing In..." : "Sign In →"}
            </button>
          </form>

          <div className="mt-8 text-center text-sm">
            <Link
              href="/"
              className="font-semibold text-[#143D24] hover:underline inline-flex items-center gap-1"
            >
              ← Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
