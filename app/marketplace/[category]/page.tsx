"use client";

import { useParams, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Search, MapPin, Star, CheckCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const categoryInfo: Record<string, { name: string; icon: string; description: string }> = {
  venues: {
    name: "Venues",
    icon: "🏛️",
    description: "Banquet halls, Lawns, and Wedding Venues",
  },
  photography: {
    name: "Photography",
    icon: "📸",
    description: "Candid, Pre-wedding, and Wedding Photography",
  },
  makeup: {
    name: "Makeup",
    icon: "💄",
    description: "Bridal, Party, and Event Makeup",
  },
  decor: {
    name: "Decor",
    icon: "🎨",
    description: "Mandap, Entry, and Event Decoration",
  },
  catering: {
    name: "Catering",
    icon: "🍽️",
    description: "Veg, Non-Veg, and Custom Catering Services",
  },
};

const cities = [
  "Warangal",
  "Nizamabad",
  "Medchal",
  "Kamareddy",
  "Karimnagar",
  "Siddipet",
  "Mahabubnagar",
];

// Mock vendor data for each category
const categoryVendors: Record<string, any[]> = {
  venues: [
    {
      id: 1,
      name: "Grand Palace Banquet",
      city: "Warangal",
      rating: 4.8,
      reviews: 124,
      price: "₹50,000",
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      verified: true,
      capacity: "500 guests",
    },
    {
      id: 2,
      name: "Royal Garden Lawns",
      city: "Nizamabad",
      rating: 4.6,
      reviews: 89,
      price: "₹45,000",
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      verified: true,
      capacity: "300 guests",
    },
    {
      id: 3,
      name: "Elegant Wedding Hall",
      city: "Medchal",
      rating: 4.7,
      reviews: 156,
      price: "₹55,000",
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      verified: true,
      capacity: "400 guests",
    },
  ],
  photography: [
    {
      id: 4,
      name: "Capture Moments Studio",
      city: "Nizamabad",
      rating: 4.9,
      reviews: 89,
      price: "₹25,000",
      image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      verified: true,
      style: "Candid & Traditional",
    },
    {
      id: 5,
      name: "Wedding Lens Photography",
      city: "Warangal",
      rating: 4.8,
      reviews: 203,
      price: "₹30,000",
      image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      verified: true,
      style: "Cinematic & Candid",
    },
  ],
  makeup: [
    {
      id: 6,
      name: "Bridal Beauty by Priya",
      city: "Medchal",
      rating: 4.7,
      reviews: 156,
      price: "₹15,000",
      image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      verified: true,
      services: "Bridal & Party",
    },
    {
      id: 7,
      name: "Glamour Makeup Studio",
      city: "Kamareddy",
      rating: 4.6,
      reviews: 98,
      price: "₹18,000",
      image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      verified: true,
      services: "Bridal & Engagement",
    },
  ],
  decor: [
    {
      id: 8,
      name: "Royal Decorators",
      city: "Kamareddy",
      rating: 4.6,
      reviews: 98,
      price: "₹35,000",
      image: "https://images.unsplash.com/photo-1478146059778-26028b07395a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      verified: true,
      services: "Mandap & Entry",
    },
    {
      id: 9,
      name: "Elegant Decor Solutions",
      city: "Warangal",
      rating: 4.8,
      reviews: 145,
      price: "₹40,000",
      image: "https://images.unsplash.com/photo-1478146059778-26028b07395a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      verified: true,
      services: "Full Event Decor",
    },
  ],
  catering: [
    {
      id: 10,
      name: "Spice & Flavor Catering",
      city: "Warangal",
      rating: 4.8,
      reviews: 203,
      price: "₹40,000",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      verified: true,
      cuisine: "Veg & Non-Veg",
    },
    {
      id: 11,
      name: "Royal Feast Caterers",
      city: "Nizamabad",
      rating: 4.7,
      reviews: 167,
      price: "₹45,000",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      verified: true,
      cuisine: "Multi-Cuisine",
    },
  ],
};

export default function CategoryPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const category = params.category as string;
  const categoryData = categoryInfo[category];
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const cityParam = searchParams.get("city");
    if (cityParam) {
      setSelectedCity(cityParam);
    }
  }, [searchParams]);

  if (!categoryData) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Category Not Found</h1>
          <Link href="/marketplace" className="text-brand-red hover:underline">
            Back to Marketplace
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const vendors = categoryVendors[category] || [];
  const filteredVendors = vendors.filter((vendor) => {
    const matchesCity = !selectedCity || vendor.city === selectedCity;
    const matchesSearch =
      !searchQuery ||
      vendor.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCity && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Category Header */}
      <div className="bg-gradient-to-br from-brand-red to-red-900 text-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/marketplace"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 text-sm md:text-base"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Marketplace
          </Link>
          <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
            <span className="text-4xl md:text-5xl">{categoryData.icon}</span>
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 md:mb-2">{categoryData.name}</h1>
              <p className="text-white/90 text-sm md:text-base">{categoryData.description}</p>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-xl p-3 md:p-4 shadow-xl mt-4 md:mt-6">
            <div className="flex flex-col gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search vendors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent"
                />
              </div>
              <div className="relative flex-1">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent appearance-none bg-white"
                >
                  <option value="">All Cities</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vendor Listings */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
            {filteredVendors.length} {categoryData.name} Vendors
          </h2>
        </div>

        {filteredVendors.length === 0 ? (
          <div className="text-center py-8 md:py-12 bg-white rounded-xl px-4">
            <p className="text-gray-500 text-base md:text-lg">
              No vendors found matching your criteria.
            </p>
            <button
              onClick={() => {
                setSelectedCity("");
                setSearchQuery("");
              }}
              className="mt-4 text-brand-red hover:underline text-sm md:text-base min-h-[44px] px-4 py-2"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredVendors.map((vendor) => (
              <Link
                key={vendor.id}
                href={`/marketplace/${category}/${vendor.id}`}
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
                      <CheckCircle className="w-3 h-3" />
                      Verified
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
                  <div className="flex items-center gap-1 mb-3">
                    <Star className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-sm md:text-base">{vendor.rating}</span>
                    <span className="text-gray-500 text-xs md:text-sm">
                      ({vendor.reviews})
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pt-3 border-t">
                    <div className="text-brand-red font-bold text-sm md:text-base">
                      From {vendor.price}
                    </div>
                    <button className="text-brand-red hover:underline text-xs md:text-sm font-medium text-left sm:text-right">
                      View Details →
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}

