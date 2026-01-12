"use client";

import { useState, useEffect } from "react";
import {
  TrendingUp,
  TrendingDown,
  Star,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import TradingChart from "@/components/TradingChart";
import AwardsSection from "@/components/AwardsSection";
import PartnershipSection from "@/components/PartnershipSection";
import Header from "@/components/Header";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cryptoPrice, setCryptoPrice] = useState({
    symbol: "BTC/USD (OTC)",
    price: 42156.78,
    change: -2.36,
  });

  // Simulate real-time price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCryptoPrice((prev) => ({
        ...prev,
        price: prev.price + (Math.random() - 0.5) * 100,
        change: (Math.random() - 0.5) * 5,
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <Header />
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a]/95 backdrop-blur-sm border-b border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#ff6b35] to-[#ff8c42] rounded-lg flex items-center justify-center font-bold text-sm">
                IQ
              </div>
              <span className="text-xl font-semibold">iq option</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a
                href="/download"
                className="flex items-center gap-1 text-gray-300 hover:text-white transition"
              >
                Download App <ChevronDown size={16} />
              </a>
              <button className="flex items-center gap-1 text-gray-300 hover:text-white transition">
                For Traders <ChevronDown size={16} />
              </button>
              <a
                href="/about"
                className="flex items-center gap-1 text-gray-300 hover:text-white transition"
              >
                About Us <ChevronDown size={16} />
              </a>
            </nav>

            {/* Right Side */}
            <div className="hidden md:flex items-center gap-4">
              <button className="flex items-center gap-1 text-gray-300 hover:text-white transition">
                EN <ChevronDown size={16} />
              </button>
              <button className="text-gray-300 hover:text-white transition px-4 py-2">
                Log in
              </button>
              <a
                href="/trade"
                className="bg-gradient-to-r from-[#ff6b35] to-[#ff8c42] hover:from-[#ff7a45] hover:to-[#ff9c52] px-6 py-2 rounded-lg font-medium transition"
              >
                Sign Up
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#1a1a1a] border-t border-[#2a2a2a]">
            <div className="px-4 py-4 space-y-4">
              <a
                href="/download"
                className="block w-full text-left text-gray-300 hover:text-white"
              >
                Download App
              </a>
              <button className="block w-full text-left text-gray-300 hover:text-white">
                For Traders
              </button>
              <a
                href="/about"
                className="block w-full text-left text-gray-300 hover:text-white"
              >
                About Us
              </a>
              <button className="block w-full text-left text-gray-300 hover:text-white">
                Log in
              </button>
              <a
                href="/trade"
                className="block text-center w-full bg-gradient-to-r from-[#ff6b35] to-[#ff8c42] px-6 py-2 rounded-lg font-medium"
              >
                Sign Up
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Crypto Ticker */}
      <div className="fixed top-16 left-0 right-0 z-40 bg-[#252525] border-b border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex items-center justify-center gap-3">
            <div className="w-6 h-6 bg-[#ff6b35] rounded-full flex items-center justify-center text-xs font-bold">
              ₿
            </div>
            <span className="font-medium">{cryptoPrice.symbol}</span>
            <span
              className={
                cryptoPrice.change >= 0 ? "text-green-500" : "text-red-500"
              }
            >
              {cryptoPrice.change >= 0 ? "+" : ""}
              {cryptoPrice.change.toFixed(2)}%
            </span>
            {cryptoPrice.change >= 0 ? (
              <TrendingUp size={16} className="text-green-500" />
            ) : (
              <TrendingDown size={16} className="text-red-500" />
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="pt-32">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="text-gray-400">12 years of launching</span>
                <br />
                <span className="text-white">trading careers</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-400 mb-8">
                Join IQ Option — first-choice broker for 173 089 684 traders
                across 180 countries.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <a
                  href="/trade"
                  className="w-full sm:w-auto bg-gradient-to-r from-[#ff6b35] to-[#ff8c42] hover:from-[#ff7a45] hover:to-[#ff9c52] px-8 py-3 rounded-lg font-medium text-lg transition"
                >
                  Create an account
                </a>
                <a
                  href="/trade"
                  className="w-full sm:w-auto bg-[#2a2a2a] hover:bg-[#333333] px-8 py-3 rounded-lg font-medium text-lg transition"
                >
                  Try free demo
                </a>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="flex items-center justify-center w-8 h-8 bg-green-600 rounded-full">
                  <Star size={16} fill="white" className="text-white" />
                </div>
                <span className="text-gray-400">4.5 ★ on Trustpilot</span>
              </div>
            </div>

            {/* Trading Chart Visualization */}
            <div className="mt-16">
              <TradingChart />
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <AwardsSection />

        {/* Partnership Section */}
        <PartnershipSection />

        {/* Footer */}
        <footer className="bg-[#0f0f0f] border-t border-[#2a2a2a] py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
            <p>
              By continuing to use this site, you agree to our Cookie Policy
            </p>
          </div>
        </footer>
      </main>

      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
}
