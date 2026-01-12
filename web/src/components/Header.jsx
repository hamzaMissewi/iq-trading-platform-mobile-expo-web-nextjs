"use client";

import { useState } from "react";
import { Menu, X, ChevronDown, User, LogIn } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Trade", href: "/trade" },
    { name: "Download App", href: "/download" },
    { name: "For Traders", href: "#" },
    { name: "About Us", href: "/about" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="/"
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-9 h-9 bg-gradient-to-br from-[#ff6b35] to-[#ff8c42] rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-orange-500/20 group-hover:shadow-orange-500/40 transition-shadow">
              IQ
            </div>
            <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              iq option
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all flex items-center gap-1 group"
              >
                {link.name}
                {link.name === "Download App" ||
                link.name === "For Traders" ||
                link.name === "About Us" ? (
                  <ChevronDown
                    size={14}
                    className="group-hover:rotate-180 transition-transform duration-300"
                  />
                ) : null}
              </a>
            ))}
          </nav>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-3">
            <button className="flex items-center gap-2 text-gray-400 hover:text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-white/5 transition-all">
              EN <ChevronDown size={14} />
            </button>
            <button className="text-gray-300 hover:text-white text-sm font-medium px-4 py-2 transition-all flex items-center gap-2">
              <LogIn size={16} />
              Log in
            </button>
            <motion.a
              href="/trade"
              className="bg-gradient-to-r from-[#ff6b35] to-[#ff8c42] hover:shadow-lg hover:shadow-orange-500/20 px-6 py-2 rounded-xl font-semibold text-sm transition-all text-white border border-white/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign Up
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#1a1a1a] border-t border-white/5 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition-all text-lg font-medium"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 mt-4 border-t border-white/5 space-y-3">
                <button className="w-full text-left px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition-all text-lg font-medium flex items-center gap-3">
                  <LogIn size={20} />
                  Log in
                </button>
                <a
                  href="/trade"
                  className="block text-center w-full bg-gradient-to-r from-[#ff6b35] to-[#ff8c42] py-4 rounded-xl font-bold text-lg shadow-lg shadow-orange-500/20"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
