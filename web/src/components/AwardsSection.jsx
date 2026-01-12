"use client";

import { Trophy, Award, Star } from "lucide-react";

const awards = [
  {
    icon: Trophy,
    title: "Best Trading Experience",
    organization: "PA DAILY INFO",
    year: "2023",
    color: "#ffd700",
  },
  {
    icon: Award,
    title: "Most Innovative Trading Platform",
    organization: "WORLD BUSINESS OUTLOOK",
    year: "2022",
    color: "#ff6b35",
  },
  {
    icon: Star,
    title: "Best Trading Platform",
    organization: "WORLD FOREX AWARD",
    year: "2024",
    color: "#ffd700",
  },
];

export default function AwardsSection() {
  return (
    <section className="py-20 bg-[#1a1a1a] border-y border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className="relative group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Laurel Wreath Background */}
              <div className="absolute inset-0 opacity-10">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <path
                    d="M30,100 Q30,40 60,30 Q90,20 100,30 Q110,20 140,30 Q170,40 170,100 Q170,160 140,170 Q110,180 100,170 Q90,180 60,170 Q30,160 30,100 Z"
                    fill="none"
                    stroke={award.color}
                    strokeWidth="2"
                  />
                </svg>
              </div>

              <div className="relative text-center p-8 rounded-2xl bg-gradient-to-br from-[#1f1f1f] to-[#2a2a2a] border border-[#3a3a3a] hover:border-[#ff6b35] transition-all duration-300 group-hover:scale-105">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${award.color}20, ${award.color}40)`,
                    }}
                  >
                    <award.icon size={40} style={{ color: award.color }} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2 text-white">
                  {award.title}
                </h3>

                {/* Organization */}
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                  {award.organization}
                </p>

                {/* Year */}
                <p
                  className="text-sm font-semibold"
                  style={{ color: award.color }}
                >
                  {award.year}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-12">
          <div className="w-2 h-2 bg-[#ff6b35] rounded-full"></div>
          <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
