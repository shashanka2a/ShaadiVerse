"use client";

import Link from "next/link";

export default function CTA() {
  return (
    <section
      className="py-20 bg-brand-red relative overflow-hidden text-center px-4"
      id="cta"
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/cubes.png')",
        }}
      ></div>
      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to plan your wedding?
        </h2>
        <p className="text-white/90 text-lg mb-8">
          Get access to 5000+ budget vendors and exclusive deals in your city.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/marketplace"
            className="bg-white text-brand-red font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition shadow-lg text-center min-h-[48px] flex items-center justify-center"
            aria-label="Find Vendors - Browse wedding vendors"
          >
            Find Vendors
          </Link>
          <a
            href="mailto:contact@shaadiverse.com?subject=Wedding Planning Inquiry"
            className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-brand-red transition text-center min-h-[48px] flex items-center justify-center"
            aria-label="Contact Wedding Expert"
          >
            Contact Expert
          </a>
        </div>
      </div>
    </section>
  );
}

