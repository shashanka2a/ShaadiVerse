"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import {
  MapPin,
  Star,
  CheckCircle,
  Calendar,
  Users,
  Phone,
  Mail,
  ArrowLeft,
  Clock,
  Award,
  Image as ImageIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Mock vendor data - in real app, this would come from API
const vendorDatabase: Record<string, Record<number, any>> = {
  venues: {
    1: {
      id: 1,
      name: "Grand Palace Banquet",
      city: "Warangal",
      rating: 4.8,
      reviews: 124,
      price: 50000,
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      verified: true,
      capacity: "500 guests",
      address: "123 Main Street, Warangal, Telangana",
      phone: "+91 98765 43210",
      email: "info@grandpalace.com",
      description:
        "A luxurious banquet hall perfect for grand weddings. Features elegant interiors, spacious parking, and professional event management services.",
      amenities: [
        "Air Conditioning",
        "Parking Space",
        "Sound System",
        "Stage Setup",
        "Catering Kitchen",
        "Bridal Room",
      ],
      packages: [
        {
          name: "Basic Package",
          price: 50000,
          features: ["Hall rental", "Basic decoration", "Sound system"],
        },
        {
          name: "Premium Package",
          price: 75000,
          features: [
            "Hall rental",
            "Premium decoration",
            "Sound system",
            "Lighting",
            "Stage setup",
          ],
        },
        {
          name: "Luxury Package",
          price: 100000,
          features: [
            "Hall rental",
            "Luxury decoration",
            "Premium sound system",
            "Professional lighting",
            "Stage setup",
            "Bridal room",
            "Parking assistance",
          ],
        },
      ],
      gallery: [
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
    },
  },
  photography: {
    4: {
      id: 4,
      name: "Capture Moments Studio",
      city: "Nizamabad",
      rating: 4.9,
      reviews: 89,
      price: 25000,
      image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      verified: true,
      style: "Candid & Traditional",
      address: "456 Photography Lane, Nizamabad, Telangana",
      phone: "+91 98765 43211",
      email: "info@capturemoments.com",
      description:
        "Professional wedding photography services with a focus on capturing candid moments and traditional ceremonies. Experienced team with modern equipment.",
      packages: [
        {
          name: "Basic Package",
          price: 25000,
          features: ["Pre-wedding shoot", "Wedding day coverage", "100 edited photos"],
        },
        {
          name: "Premium Package",
          price: 40000,
          features: [
            "Pre-wedding shoot",
            "Wedding day coverage",
            "Reception coverage",
            "300 edited photos",
            "Photo album",
          ],
        },
        {
          name: "Luxury Package",
          price: 60000,
          features: [
            "Pre-wedding shoot",
            "Wedding day coverage",
            "Reception coverage",
            "500 edited photos",
            "Premium photo album",
            "Drone footage",
            "Wedding video highlights",
          ],
        },
      ],
    },
  },
  makeup: {
    6: {
      id: 6,
      name: "Bridal Beauty by Priya",
      city: "Medchal",
      rating: 4.7,
      reviews: 156,
      price: 15000,
      image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      verified: true,
      services: "Bridal & Party",
      address: "789 Beauty Street, Medchal, Telangana",
      phone: "+91 98765 43212",
      email: "info@bridalbeauty.com",
      description:
        "Expert bridal makeup artist with 10+ years of experience. Specializes in traditional and modern bridal looks using premium products.",
      packages: [
        {
          name: "Bridal Makeup",
          price: 15000,
          features: ["Bridal makeup", "Hair styling", "Draping assistance"],
        },
        {
          name: "Complete Package",
          price: 25000,
          features: [
            "Bridal makeup",
            "Hair styling",
            "Draping assistance",
            "Trial session",
            "Touch-up kit",
          ],
        },
      ],
    },
  },
  decor: {
    8: {
      id: 8,
      name: "Royal Decorators",
      city: "Kamareddy",
      rating: 4.6,
      reviews: 98,
      price: 35000,
      image: "https://images.unsplash.com/photo-1478146059778-26028b07395a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      verified: true,
      services: "Mandap & Entry",
      address: "321 Decor Avenue, Kamareddy, Telangana",
      phone: "+91 98765 43213",
      email: "info@royaldecor.com",
      description:
        "Creative wedding decorators specializing in traditional and modern themes. We transform your venue into a dream wedding space.",
      packages: [
        {
          name: "Basic Decor",
          price: 35000,
          features: ["Mandap decoration", "Entry decoration", "Basic lighting"],
        },
        {
          name: "Premium Decor",
          price: 55000,
          features: [
            "Mandap decoration",
            "Entry decoration",
            "Premium lighting",
            "Stage decoration",
            "Floral arrangements",
          ],
        },
      ],
    },
  },
  catering: {
    10: {
      id: 10,
      name: "Spice & Flavor Catering",
      city: "Warangal",
      rating: 4.8,
      reviews: 203,
      price: 40000,
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      verified: true,
      cuisine: "Veg & Non-Veg",
      address: "654 Food Street, Warangal, Telangana",
      phone: "+91 98765 43214",
      email: "info@spiceflavor.com",
      description:
        "Premium catering services with authentic Telangana cuisine. We serve delicious meals for 100-1000 guests with professional service.",
      packages: [
        {
          name: "Standard Package",
          price: 40000,
          features: ["Veg & Non-Veg menu", "Service for 200 guests", "Basic setup"],
        },
        {
          name: "Premium Package",
          price: 60000,
          features: [
            "Veg & Non-Veg menu",
            "Service for 300 guests",
            "Premium setup",
            "Live counter",
            "Dessert station",
          ],
        },
      ],
    },
  },
};

export default function VendorDetailPage() {
  const params = useParams();
  const router = useRouter();
  const category = params.category as string;
  const id = parseInt(params.id as string);
  const [selectedPackage, setSelectedPackage] = useState<number>(0);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [showBookingModal, setShowBookingModal] = useState(false);

  const vendor = vendorDatabase[category]?.[id];

  if (!vendor) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Vendor Not Found</h1>
          <Link href="/marketplace" className="text-brand-red hover:underline">
            Back to Marketplace
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const handleBooking = () => {
    if (!selectedDate || selectedPackage === null) {
      alert("Please select a date and package");
      return;
    }
    router.push(
      `/marketplace/${category}/${id}/book?date=${selectedDate}&package=${selectedPackage}`
    );
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
          <Link
            href={`/marketplace/${category}`}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-brand-red mb-3 md:mb-4 text-sm md:text-base"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to {category.charAt(0).toUpperCase() + category.slice(1)}
          </Link>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <div className="relative w-full md:w-96 h-48 md:h-64 rounded-xl overflow-hidden">
              <Image
                src={vendor.image}
                alt={vendor.name}
                fill
                className="object-cover"
              />
              {vendor.verified && (
                <div className="absolute top-4 right-4 bg-brand-red text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                  <CheckCircle className="w-4 h-4" />
                  Verified
                </div>
              )}
            </div>
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                {vendor.name}
              </h1>
              <p className="text-gray-500 mb-3 md:mb-4 flex items-center gap-2 text-sm md:text-base">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span className="truncate">{vendor.address || `${vendor.city}, Telangana`}</span>
              </p>
              <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-bold text-base md:text-lg">{vendor.rating}</span>
                  <span className="text-gray-500 text-sm md:text-base">({vendor.reviews})</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mb-4 md:mb-6">
                <a
                  href={`tel:${vendor.phone}`}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 min-h-[44px] border border-gray-300 rounded-lg hover:bg-gray-50 text-sm md:text-base"
                >
                  <Phone className="w-4 h-4" />
                  Call
                </a>
                <a
                  href={`mailto:${vendor.email}`}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 min-h-[44px] border border-gray-300 rounded-lg hover:bg-gray-50 text-sm md:text-base"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </a>
              </div>
              <div className="text-xl md:text-2xl font-bold text-brand-red">
                Starting at ₹{vendor.price.toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            {/* Description */}
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">About</h2>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">{vendor.description}</p>
            </div>

            {/* Packages */}
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Packages</h2>
              <div className="space-y-4">
                {vendor.packages.map((pkg: any, index: number) => (
                  <div
                    key={index}
                    className={`border-2 rounded-xl p-4 md:p-5 cursor-pointer transition ${
                      selectedPackage === index
                        ? "border-brand-red bg-red-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => setSelectedPackage(index)}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="font-bold text-base md:text-lg text-gray-900">
                          {pkg.name}
                        </h3>
                        <div className="text-xl md:text-2xl font-bold text-brand-red mt-1">
                          ₹{pkg.price.toLocaleString()}
                        </div>
                      </div>
                      {selectedPackage === index && (
                        <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-brand-red flex-shrink-0 ml-2" />
                      )}
                    </div>
                    <ul className="space-y-2">
                      {pkg.features.map((feature: string, idx: number) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-600 text-sm md:text-base">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery */}
            {vendor.gallery && (
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <ImageIcon className="w-6 h-6" />
                  Gallery
                </h2>
                <div className="grid grid-cols-3 gap-4">
                  {vendor.gallery.map((img: string, index: number) => (
                    <div
                      key={index}
                      className="relative h-32 rounded-lg overflow-hidden"
                    >
                      <Image
                        src={img}
                        alt={`${vendor.name} - Image ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm lg:sticky lg:top-6">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Book Now</h2>
              
              {/* Date Selection */}
              <div className="mb-4 md:mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Calendar className="w-4 h-4 inline mr-2" />
                  Select Date
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent"
                />
              </div>

              {/* Package Selection Summary */}
              {selectedPackage !== null && vendor.packages[selectedPackage] && (
                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Selected Package</p>
                  <p className="font-semibold text-gray-900">
                    {vendor.packages[selectedPackage].name}
                  </p>
                  <p className="text-xl font-bold text-brand-red mt-2">
                    ₹{vendor.packages[selectedPackage].price.toLocaleString()}
                  </p>
                </div>
              )}

              {/* Book Button */}
              <button
                onClick={handleBooking}
                disabled={!selectedDate || selectedPackage === null}
                className="w-full bg-brand-red text-white py-3 md:py-4 rounded-lg font-bold text-base md:text-lg hover:bg-red-900 transition disabled:bg-gray-300 disabled:cursor-not-allowed min-h-[48px]"
              >
                Proceed to Booking
              </button>

              {/* Contact Info */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-700 mb-3">
                  Need help? Contact vendor
                </p>
                <div className="space-y-2">
                  <a
                    href={`tel:${vendor.phone}`}
                    className="flex items-center gap-2 text-gray-600 hover:text-brand-red"
                  >
                    <Phone className="w-4 h-4" />
                    {vendor.phone}
                  </a>
                  <a
                    href={`mailto:${vendor.email}`}
                    className="flex items-center gap-2 text-gray-600 hover:text-brand-red"
                  >
                    <Mail className="w-4 h-4" />
                    {vendor.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

