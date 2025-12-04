"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MapPin, Search, CheckCircle, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const router = useRouter();
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const categoryMap: Record<string, string> = {
    Venues: "venues",
    Photographers: "photography",
    "Makeup Artists": "makeup",
    Decorators: "decor",
    Catering: "catering",
  };

  const handleSearch = () => {
    if (selectedCategory) {
      const categorySlug = categoryMap[selectedCategory] || selectedCategory.toLowerCase();
      if (selectedCity) {
        router.push(`/marketplace/${categorySlug}?city=${encodeURIComponent(selectedCity)}`);
      } else {
        router.push(`/marketplace/${categorySlug}`);
      }
    } else {
      router.push("/marketplace");
    }
  };
  return (
    <div className="relative pt-16 pb-16 md:pt-24 md:pb-32 flex items-center justify-center min-h-[85vh] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Traditional Indian Wedding Ceremony"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          Your Dream Wedding,
          <br />
          <span className="text-brand-gold font-script text-5xl md:text-7xl">
            Within Budget
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light">
          India&apos;s trusted budget wedding directory. Verified vendors for
          every ceremony in Tier-2 & Tier-3 cities.
        </p>

        <div className="bg-white p-3 md:p-4 rounded-2xl shadow-2xl max-w-3xl mx-auto transform transition hover:scale-[1.01] duration-300">
          <div className="flex flex-col md:flex-row gap-2 md:gap-3">
            <div className="relative flex-1 border-b md:border-b-0 md:border-r border-gray-200 pb-2 md:pb-0">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MapPin className="text-brand-red w-4 h-4 md:w-5 md:h-5" />
              </div>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="block w-full pl-9 md:pl-10 pr-8 md:pr-10 py-3 text-sm md:text-base border-none focus:ring-0 focus:outline-none bg-transparent text-gray-700 cursor-pointer appearance-none min-h-[44px]"
              >
                <option value="">Select City (e.g. Warangal)</option>
                <option>Warangal</option>
                <option>Nizamabad</option>
                <option>Medchal</option>
                <option>Kamareddy</option>
                <option>Karimnagar</option>
                <option>Siddipet</option>
                <option>Mahabubnagar</option>
              </select>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <ChevronDown className="text-gray-400 w-4 h-4" />
              </div>
            </div>
            <div className="relative flex-1 border-b md:border-b-0 md:border-r border-gray-200 pb-2 md:pb-0">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="text-gray-400 w-4 h-4 md:w-5 md:h-5" />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="block w-full pl-9 md:pl-10 pr-8 md:pr-10 py-3 text-sm md:text-base border-none focus:ring-0 focus:outline-none bg-transparent text-gray-700 cursor-pointer appearance-none min-h-[44px]"
              >
                <option value="">What are you looking for?</option>
                <option>Venues</option>
                <option>Photographers</option>
                <option>Makeup Artists</option>
                <option>Decorators</option>
                <option>Catering</option>
              </select>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <ChevronDown className="text-gray-400 w-4 h-4" />
              </div>
            </div>
            <button
              onClick={handleSearch}
              className="bg-brand-red text-white px-6 md:px-8 py-3 rounded-xl font-medium hover:bg-red-900 transition md:w-auto w-full min-h-[44px] text-sm md:text-base"
            >
              Find Vendors
            </button>
          </div>
        </div>

        <p className="mt-4 text-white/80 text-sm">
          <CheckCircle className="inline text-brand-gold mr-1 w-4 h-4" />{" "}
          10,000+ Verified Vendors &nbsp;
          <CheckCircle className="inline text-brand-gold mr-1 w-4 h-4" />{" "}
          Transparent Pricing
        </p>
      </div>
    </div>
  );
}

