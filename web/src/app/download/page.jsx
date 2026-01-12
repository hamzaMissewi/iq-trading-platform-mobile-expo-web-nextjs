"use client";

import { Download, Apple, Smartphone, Laptop, Tablet } from "lucide-react";
import { motion } from "motion/react";
import Header from "@/components/Header";

export default function DownloadPage() {
  const platforms = [
    {
      icon: <Laptop className="w-10 h-10" />,
      name: "Windows",
      version: "v4.12.0",
      btnText: "Download for Windows",
    },
    {
      icon: <Apple className="w-10 h-10" />,
      name: "macOS",
      version: "v4.12.0",
      btnText: "Download for macOS",
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      name: "Android",
      version: "APK available",
      btnText: "Download APK",
    },
    {
      icon: <Tablet className="w-10 h-10" />,
      name: "iOS",
      version: "App Store",
      btnText: "View on App Store",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#ff6b35]/30">
      <Header />

      <main className="pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-8 tracking-tight"
          >
            Trade Anytime, Anywhere
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-500 mb-20 max-w-2xl mx-auto leading-relaxed"
          >
            Experience the full power of IQ Option on any platform. Your account
            is synchronized across all devices in real-time.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {platforms.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{
                  y: -10,
                  backgroundColor: "rgba(255,255,255,0.03)",
                }}
                className="bg-white/[0.02] p-10 rounded-[2.5rem] border border-white/5 transition-all flex flex-col items-center group shadow-2xl backdrop-blur-md"
              >
                <div className="mb-8 text-[#ff6b35] p-6 rounded-3xl bg-[#ff6b35]/10 border border-[#ff6b35]/20 group-hover:scale-110 transition-transform">
                  {p.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{p.name}</h3>
                <p className="text-gray-600 mb-10 text-sm font-medium font-mono tracking-widest uppercase">
                  {p.version}
                </p>
                <button className="mt-auto w-full bg-white/5 hover:bg-[#ff6b35] text-white py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-3 border border-white/10 group-hover:border-transparent group-hover:shadow-xl group-hover:shadow-orange-500/20">
                  <Download
                    size={20}
                    className="group-hover:translate-y-0.5 transition-transform"
                  />
                  {p.btnText}
                </button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative group max-w-6xl mx-auto rounded-[3.5rem] overflow-hidden border border-white/5 shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#ff6b35]/10 via-transparent to-blue-500/5 pointer-events-none"></div>
            <div className="flex flex-col md:flex-row items-center gap-16 p-12 md:p-20 bg-white/[0.01] backdrop-blur-3xl">
              <div className="flex-1 text-left">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
                  Ultimate Mobile Trading
                </h2>
                <p className="text-gray-400 mb-12 text-lg leading-relaxed">
                  Optimized for speed and precision. Get real-time alerts,
                  advanced indicators, and the same lightning-fast execution as
                  our desktop terminal.
                </p>
                <div className="flex gap-6">
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 hover:bg-[#ff6b35]/20 transition-colors cursor-pointer group/icon">
                    <Apple
                      size={32}
                      className="group-hover/icon:scale-110 transition-transform"
                    />
                  </div>
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 hover:bg-[#ff6b35]/20 transition-colors cursor-pointer group/icon">
                    <Smartphone
                      size={32}
                      className="group-hover/icon:scale-110 transition-transform"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 relative">
                <div className="w-72 h-[34rem] bg-[#050505] rounded-[3.5rem] border-[12px] border-[#1a1a1a] shadow-[0_0_100px_rgba(0,0,0,0.5)] mx-auto relative overflow-hidden group-hover:rotate-[-2deg] transition-transform duration-700">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-8 bg-[#1a1a1a] rounded-b-[2rem] z-20"></div>
                  <div className="absolute inset-0 p-6 pt-12">
                    <div className="w-full h-40 bg-white/[0.03] rounded-3xl mb-6 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b35]/20 to-transparent"></div>
                    </div>
                    <div className="space-y-6">
                      <div className="w-3/4 h-3 bg-white/[0.05] rounded-full"></div>
                      <div className="w-full h-3 bg-white/[0.05] rounded-full"></div>
                      <div className="w-1/2 h-3 bg-white/[0.05] rounded-full"></div>
                      <div className="grid grid-cols-2 gap-4 pt-10">
                        <div className="h-12 bg-green-500/20 rounded-xl border border-green-500/30"></div>
                        <div className="h-12 bg-red-500/20 rounded-xl border border-red-500/30"></div>
                      </div>
                    </div>
                  </div>
                  {/* Decorative reflection */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.05] to-transparent pointer-events-none"></div>
                </div>
                {/* Floating elements for depth */}
                <div className="absolute -top-10 -right-4 w-24 h-24 bg-[#ff6b35]/20 blur-[60px] rounded-full animate-pulse"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/20 blur-[80px] rounded-full animate-pulse delay-1000"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
