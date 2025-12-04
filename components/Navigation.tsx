"use client";

import { useState, useEffect } from "react";
import { Heart, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-all duration-300 ${
        hasShadow ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer"
            onClick={scrollToTop}
          >
            <Heart className="text-brand-red w-6 h-6 fill-brand-red" />
            <span className="font-bold text-2xl tracking-tight text-brand-red">
              Shaadi<span className="text-text-dark">verse</span>
            </span>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            <Link
              href="#services"
              className="text-gray-600 hover:text-brand-red font-medium transition"
            >
              Services
            </Link>
            <Link
              href="#how-it-works"
              className="text-gray-600 hover:text-brand-red font-medium transition"
            >
              How it Works
            </Link>
            <Link
              href="#cities"
              className="text-gray-600 hover:text-brand-red font-medium transition"
            >
              Cities
            </Link>
            <Link
              href="#testimonials"
              className="text-gray-600 hover:text-brand-red font-medium transition"
            >
              Reviews
            </Link>
            <button className="bg-brand-red text-white px-5 py-2 rounded-full font-medium hover:bg-red-900 transition shadow-lg shadow-red-200">
              Vendor Login
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-brand-red focus:outline-none p-2"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 w-full">
          <div className="px-4 pt-2 pb-6 space-y-2 shadow-lg">
            <Link
              href="#services"
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-brand-red hover:bg-red-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#how-it-works"
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-brand-red hover:bg-red-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How it Works
            </Link>
            <Link
              href="#cities"
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-brand-red hover:bg-red-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Cities
            </Link>
            <Link
              href="#testimonials"
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-brand-red hover:bg-red-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Reviews
            </Link>
            <div className="pt-4">
              <button className="w-full bg-brand-red text-white px-5 py-3 rounded-lg font-medium hover:bg-red-900">
                Vendor Login
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

