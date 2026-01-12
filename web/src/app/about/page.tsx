"use client";

import { useState } from "react";
import { ArrowRight, Shield, Globe, Award } from "lucide-react";
import Header from "@/components/Header";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#ff6b35]/30">
      <Header />

      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Redefining Trading
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Since 2013, we've been on a mission to make trading accessible,
              intuitive, and secure for everyone, everywhere.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: <Shield className="w-8 h-8 text-[#ff6b35]" />,
                title: "Safe & Secure",
                desc: "We use the latest technologies to ensure your funds and data are always protected.",
              },
              {
                icon: <Globe className="w-8 h-8 text-[#ff6b35]" />,
                title: "Global Presence",
                desc: "Serving millions of traders in over 180 countries with multi-language support.",
              },
              {
                icon: <Award className="w-8 h-8 text-[#ff6b35]" />,
                title: "Award Winning",
                desc: "Recognized as the best mobile trading platform and most innovative broker.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/[0.02] p-8 rounded-3xl border border-white/5 hover:border-[#ff6b35]/50 transition shadow-2xl backdrop-blur-md"
              >
                <div className="mb-6 w-16 h-16 bg-[#ff6b35]/10 rounded-2xl flex items-center justify-center border border-[#ff6b35]/20">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-white/[0.03] to-transparent rounded-[3rem] p-8 md:p-16 border border-white/5 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff6b35]/5 blur-[100px] rounded-full"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
              <div>
                <h2 className="text-4xl font-bold mb-8">Our Vision</h2>
                <p className="text-gray-400 mb-10 leading-relaxed text-lg">
                  We believe that financial markets should be open to anyone
                  with the drive to succeed. Our platform is designed to provide
                  the tools, education, and support needed to turn ambition into
                  reality.
                </p>
                <ul className="space-y-6">
                  {[
                    "Transparent pricing with no hidden fees",
                    "Advanced technical analysis tools",
                    "24/7 dedicated customer support",
                    "Low entry threshold for new traders",
                  ].map((text, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-4 text-gray-300 font-medium"
                    >
                      <div className="w-6 h-6 bg-[#ff6b35]/20 rounded-full flex items-center justify-center">
                        <ArrowRight size={14} className="text-[#ff6b35]" />
                      </div>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative group-hover:scale-[1.02] transition-transform duration-700">
                <div className="aspect-square bg-white/[0.02] rounded-3xl overflow-hidden flex items-center justify-center border border-white/5 shadow-2xl relative">
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#ff6b35]/20 to-transparent"></div>
                  <div className="text-[#ff6b35] font-black text-6xl tracking-tighter filter blur-[60px] opacity-30 select-none">
                    IQ OPTION
                  </div>
                  <div className="text-white font-black text-6xl tracking-tighter select-none z-10">
                    IQ OPTION
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#ff6b35]/10 rounded-full blur-[80px] animate-pulse"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-[80px] animate-pulse delay-700"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
