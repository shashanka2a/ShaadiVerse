"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Heart, Menu, X, Search as SearchIcon } from "lucide-react";
import Link from "next/link";

export default function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);
  const isMarketplace = pathname?.startsWith("/marketplace");

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
      className={`fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-all duration-300 ${
        hasShadow ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="flex-shrink-0 flex items-center gap-2"
            aria-label="Shaadiverse Home"
          >
            <Heart className="text-brand-red w-6 h-6 fill-brand-red" />
            <span className="font-bold text-2xl tracking-tight text-brand-red">
              Shaadi<span className="text-text-dark">verse</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8 items-center">
            <Link
              href="/"
              className={`text-gray-600 hover:text-brand-red font-medium transition ${
                pathname === "/" ? "text-brand-red" : ""
              }`}
            >
              Home
            </Link>
            <Link
              href="/marketplace"
              className={`text-gray-600 hover:text-brand-red font-medium transition ${
                isMarketplace ? "text-brand-red" : ""
              }`}
            >
              Marketplace
            </Link>
            <Link
              href="/#services"
              className="text-gray-600 hover:text-brand-red font-medium transition"
            >
              Services
            </Link>
            <Link
              href="/#how-it-works"
              className="text-gray-600 hover:text-brand-red font-medium transition"
            >
              How it Works
            </Link>
            <Link
              href="/#cities"
              className="text-gray-600 hover:text-brand-red font-medium transition"
            >
              Cities
            </Link>
            <Link
              href="/#testimonials"
              className="text-gray-600 hover:text-brand-red font-medium transition"
            >
              Reviews
            </Link>
            <Link
              href="/marketplace"
              className="bg-brand-red text-white px-5 py-2 rounded-full font-medium hover:bg-red-900 transition shadow-lg shadow-red-200"
              aria-label="Find Vendors"
            >
              Find Vendors
            </Link>
          </div>

          {/* Tablet Navigation */}
          <div className="hidden md:flex lg:hidden items-center gap-4">
            <Link
              href="/marketplace"
              className="bg-brand-red text-white px-4 py-2 rounded-full font-medium hover:bg-red-900 transition"
              aria-label="Find Vendors"
            >
              <SearchIcon className="w-5 h-5" />
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-brand-red focus:outline-none p-2"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-brand-red focus:outline-none p-2"
              aria-label="Menu"
              aria-expanded={isMobileMenuOpen}
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

      {/* Mobile/Tablet Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden lg:hidden bg-white border-t border-gray-100 w-full">
          <div className="px-4 pt-2 pb-6 space-y-2 shadow-lg">
            <Link
              href="/"
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-brand-red hover:bg-red-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/marketplace"
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-brand-red hover:bg-red-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Marketplace
            </Link>
            <Link
              href="/#services"
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-brand-red hover:bg-red-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/#how-it-works"
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-brand-red hover:bg-red-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How it Works
            </Link>
            <Link
              href="/#cities"
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-brand-red hover:bg-red-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Cities
            </Link>
            <Link
              href="/#testimonials"
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-brand-red hover:bg-red-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Reviews
            </Link>
            <div className="pt-4">
              <Link
                href="/marketplace"
                className="block w-full bg-brand-red text-white px-5 py-3 rounded-lg font-medium hover:bg-red-900 text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Find Vendors
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

