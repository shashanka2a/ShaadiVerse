"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Search, MapPin, Filter, SlidersHorizontal, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import BottomNav from "@/components/BottomNav";
import Footer from "@/components/Footer";

const categories = [
  { name: "Venues", slug: "venues", icon: "🏛️" },
  { name: "Photography", slug: "photography", icon: "📸" },
  { name: "Makeup", slug: "makeup", icon: "💄" },
  { name: "Decor", slug: "decor", icon: "🎨" },
  { name: "Catering", slug: "catering", icon: "🍽️" },
];

const cities = [
  "Warangal",
  "Nizamabad",
  "Medchal",
  "Kamareddy",
  "Karimnagar",
  "Siddipet",
  "Mahabubnagar",
];

// Mock vendor data - in real app, this would come from API
const mockVendors = [
  {
    id: 1,
    name: "Grand Palace Banquet",
    category: "venues",
    city: "Warangal",
    rating: 4.8,
    reviews: 124,
    price: "₹50,000",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    verified: true,
  },
  {
    id: 2,
    name: "Capture Moments Studio",
    category: "photography",
    city: "Nizamabad",
    rating: 4.9,
    reviews: 89,
    price: "₹25,000",
    image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    verified: true,
  },
  {
    id: 3,
    name: "Bridal Beauty by Priya",
    category: "makeup",
    city: "Medchal",
    rating: 4.7,
    reviews: 156,
    price: "₹15,000",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    verified: true,
  },
  {
    id: 4,
    name: "Royal Decorators",
    category: "decor",
    city: "Kamareddy",
    rating: 4.6,
    reviews: 98,
    price: "₹35,000",
    image: "https://images.unsplash.com/photo-1478146059778-26028b07395a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    verified: true,
  },
  {
    id: 5,
    name: "Spice & Flavor Catering",
    category: "catering",
    city: "Warangal",
    rating: 4.8,
    reviews: 203,
    price: "₹40,000",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    verified: true,
  },
];

function MarketplaceContent() {
  const searchParams = useSearchParams();
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100000]);
  const [minRating, setMinRating] = useState<number>(0);

  useEffect(() => {
    const cityParam = searchParams.get("city");
    if (cityParam) {
      setSelectedCity(cityParam);
    }
  }, [searchParams]);

  // Filter vendors based on selections
  const filteredVendors = mockVendors.filter((vendor) => {
    const matchesCity = !selectedCity || vendor.city === selectedCity;
    const matchesCategory =
      !selectedCategory || vendor.category === selectedCategory;
    const matchesSearch =
      !searchQuery ||
      vendor.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCity && matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-gray-50 pb-20 md:pb-0">
      <Navigation />
      
      {/* Hero Search Section */}
      <div className="bg-gradient-to-br from-brand-red to-red-900 text-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            Find Your Perfect Wedding Vendor
          </h1>
          
          {/* Search Bar */}
          <div className="bg-white rounded-xl p-3 md:p-4 shadow-xl">
            <div className="flex flex-col gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search vendors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 md:py-3 text-base border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent"
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 text-base border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent appearance-none bg-white"
                  >
                    <option value="">All Cities</option>
                    {cities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="relative">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full pl-4 pr-4 py-3 text-base border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent appearance-none bg-white"
                  >
                    <option value="">All Categories</option>
                    {categories.map((cat) => (
                      <option key={cat.slug} value={cat.slug}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="w-full sm:w-auto px-6 py-3 min-h-[44px] border border-gray-200 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-2 text-gray-700 font-medium"
              >
                <SlidersHorizontal className="w-5 h-5" />
                <span>Filters</span>
              </button>
            </div>
            
            {/* Advanced Filters */}
            {showFilters && (
              <div className="mt-4 pt-4 border-t border-gray-200 grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price Range: ₹{priceRange[0].toLocaleString()} - ₹{priceRange[1].toLocaleString()}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100000"
                    step="5000"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([priceRange[0], parseInt(e.target.value)])
                    }
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Minimum Rating: {minRating > 0 ? minRating.toFixed(1) : "Any"}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="5"
                    step="0.5"
                    value={minRating}
                    onChange={(e) => setMinRating(parseFloat(e.target.value))}
                    className="w-full"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Categories Quick Access */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Browse by Category</h2>
          <Link
            href="/marketplace"
            className="text-brand-red hover:underline text-sm hidden sm:block"
          >
            View All
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/marketplace/${category.slug}`}
              className="bg-white p-4 md:p-6 rounded-xl shadow-sm hover:shadow-lg transition text-center group min-h-[120px] md:min-h-[140px] flex flex-col items-center justify-center"
              aria-label={`Browse ${category.name} vendors`}
            >
              <div className="text-3xl md:text-4xl mb-2">{category.icon}</div>
              <h3 className="font-semibold text-sm md:text-base text-gray-900 group-hover:text-brand-red transition">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>

      {/* Vendor Listings */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
            {filteredVendors.length} Vendors Found
          </h2>
        </div>
        
        {filteredVendors.length === 0 ? (
          <div className="text-center py-8 md:py-12 bg-white rounded-xl px-4">
            <p className="text-gray-500 text-base md:text-lg">No vendors found matching your criteria.</p>
            <button
              onClick={() => {
                setSelectedCity("");
                setSelectedCategory("");
                setSearchQuery("");
              }}
              className="mt-4 text-brand-red hover:underline text-sm md:text-base min-h-[44px] px-4 py-2"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredVendors.map((vendor) => (
              <Link
                key={vendor.id}
                href={`/marketplace/${vendor.category}/${vendor.id}`}
                className="bg-white rounded-xl shadow-sm hover:shadow-xl transition overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={vendor.image}
                    alt={vendor.name}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500"
                  />
                  {vendor.verified && (
                    <div className="absolute top-3 right-3 bg-brand-red text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      ✓ Verified
                    </div>
                  )}
                </div>
                <div className="p-4 md:p-5">
                  <h3 className="font-bold text-base md:text-lg text-gray-900 mb-2 line-clamp-2">
                    {vendor.name}
                  </h3>
                  <p className="text-gray-500 text-xs md:text-sm mb-3 flex items-center gap-1">
                    <MapPin className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                    <span className="truncate">{vendor.city}</span>
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500 text-sm md:text-base">★</span>
                      <span className="font-semibold text-sm md:text-base">{vendor.rating}</span>
                      <span className="text-gray-500 text-xs md:text-sm">
                        ({vendor.reviews})
                      </span>
                    </div>
                    <div className="text-brand-red font-bold text-sm md:text-base">
                      From {vendor.price}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <Footer />
      <BottomNav />
    </main>
  );
}

export default function MarketplacePage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-gray-50 pb-20 md:pb-0">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="animate-pulse">Loading...</div>
        </div>
      </main>
    }>
      <MarketplaceContent />
    </Suspense>
  );
}

