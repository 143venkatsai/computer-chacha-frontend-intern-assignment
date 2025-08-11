"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "ABOUT ME", href: "#about" },
  { label: "PORTFOLIO", href: "#portfolio" },
  { label: "SKILLS", href: "#skills" },
  { label: "SERVICES", href: "#services" },
  { label: "TESTIMONIALS", href: "#testimonials" },
];

export const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    // Cleanup on unmount
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [menuOpen]);

  return (
    <>
      <section className="relative bg-black text-white pb-8 lg:pb-0 overflow-hidden">
        {/* Nav Container */}
        <nav className="flex justify-between items-center py-6 px-4 lg:px-16 relative z-10">
          <span className="text-xs uppercase tracking-widest">ERICA JONES</span>
          {/* Desktop/Laptop Menu */}
          <div className="hidden md:flex gap-8 items-center text-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-yellow-300 text-amber-100 transition"
              >
                {link.label}
              </a>
            ))}
          </div>
          <button className="bg-white text-black rounded-full px-5 py-2 text-xs hidden md:inline-block">
            GET IN TOUCH
          </button>
          {/* Hamburger for Mobile/Tablet */}
          <button
            className="md:hidden ml-4 focus:outline-none"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </nav>

        {/* Mobile Menu Overlay — GLASS EFFECT */}
        {menuOpen && (
          <div
            className={`
              md:hidden fixed inset-0 flex flex-col justify-between transition-all duration-300 z-20
              bg-white/10 backdrop-blur-md border border-white/20
              px-6 py-8
            `}
            aria-modal="true"
            role="dialog"
          >
            {/* Top: X icon & brand */}
            <div className="flex items-center justify-between mb-15">
              <span className="text-base font-bold uppercase tracking-wider">
                ERICA JONES
              </span>
              <button
                className="text-white focus:outline-none"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={32} />
              </button>
            </div>
            {/* Middle: Nav links */}
            <div className="flex flex-col gap-4 mb-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-md tracking-wide uppercase hover:text-yellow-300 text-amber-200 transition py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
            {/* Bottom: Get In Touch */}
            <div className="mb-auto flex justify-center">
              <button className="w-full bg-white text-black text-base rounded-full py-3">
                GET IN TOUCH
              </button>
            </div>
          </div>
        )}

        {/* Hero Content */}
        <div className="px-4 lg:px-16 py-8 lg:py-20 relative z-10 sm:min-h-[100vh] lg:h-auto">
          <span className="block mb-2 text-md tracking-wider text-yellow-300">
            &#128075; HEY, I AM ERICA
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="block gradient-text-1">A YOUNG CREATIVE</span>
            <span className="block gradient-text-2">DESIGNER BASED IN</span>
            <span className="block gradient-text-3">SAN DEGIO</span>
          </h1>
          <div className="flex gap-2 mt-6 flex-wrap">
            <button className="border border-white px-4 py-2 rounded-full uppercase text-xs">
              My Works
            </button>
            <button className="bg-white text-black px-4 py-2 rounded-full uppercase text-xs">
              Let&apos;s Talk
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

// {
//   /* Bottom Parallelogram */

//   <div
//     aria-hidden="true"
//     className="absolute bottom-0 left-0 w-full h-10 z-0 pointer-events-none"
//     style={{
//       transform: "skewY(-6deg)",
//       transformOrigin: "top left",
//       background: "linear-gradient(180deg, #000 100%)",
//     }}
//   />;
