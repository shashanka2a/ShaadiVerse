"use client";

import { useParams, useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import {
  Calendar,
  CheckCircle,
  ArrowLeft,
  User,
  Phone,
  Mail,
  MapPin,
  CreditCard,
  Lock,
} from "lucide-react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import BottomNav from "@/components/BottomNav";
import Footer from "@/components/Footer";

// Mock vendor data - same as detail page
const vendorDatabase: Record<string, Record<number, any>> = {
  venues: {
    1: {
      id: 1,
      name: "Grand Palace Banquet",
      city: "Warangal",
      price: 50000,
      packages: [
        { name: "Basic Package", price: 50000 },
        { name: "Premium Package", price: 75000 },
        { name: "Luxury Package", price: 100000 },
      ],
    },
  },
  photography: {
    4: {
      id: 4,
      name: "Capture Moments Studio",
      city: "Nizamabad",
      price: 25000,
      packages: [
        { name: "Basic Package", price: 25000 },
        { name: "Premium Package", price: 40000 },
        { name: "Luxury Package", price: 60000 },
      ],
    },
  },
  makeup: {
    6: {
      id: 6,
      name: "Bridal Beauty by Priya",
      city: "Medchal",
      price: 15000,
      packages: [
        { name: "Bridal Makeup", price: 15000 },
        { name: "Complete Package", price: 25000 },
      ],
    },
  },
  decor: {
    8: {
      id: 8,
      name: "Royal Decorators",
      city: "Kamareddy",
      price: 35000,
      packages: [
        { name: "Basic Decor", price: 35000 },
        { name: "Premium Decor", price: 55000 },
      ],
    },
  },
  catering: {
    10: {
      id: 10,
      name: "Spice & Flavor Catering",
      city: "Warangal",
      price: 40000,
      packages: [
        { name: "Standard Package", price: 40000 },
        { name: "Premium Package", price: 60000 },
      ],
    },
  },
};

export default function BookingPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const category = params.category as string;
  const id = parseInt(params.id as string);
  const selectedDate = searchParams.get("date") || "";
  const packageIndex = parseInt(searchParams.get("package") || "0");

  const vendor = vendorDatabase[category]?.[id];
  const selectedPackage = vendor?.packages[packageIndex];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    eventType: "Wedding",
    guestCount: "",
    specialRequests: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("online");
  const [isProcessing, setIsProcessing] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingId, setBookingId] = useState("");

  if (!vendor || !selectedPackage) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 pb-20 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Invalid Booking</h1>
          <Link href="/marketplace" className="text-brand-red hover:underline">
            Back to Marketplace
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate API call
    setTimeout(() => {
      const newBookingId = `BK${Date.now()}`;
      setBookingId(newBookingId);
      setBookingConfirmed(true);
      setIsProcessing(false);
    }, 2000);
  };

  const totalAmount = selectedPackage.price;
  const advanceAmount = Math.round(totalAmount * 0.3); // 30% advance
  const remainingAmount = totalAmount - advanceAmount;

  if (bookingConfirmed) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 pb-20">
            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-8 text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <CheckCircle className="w-10 h-10 md:w-12 md:h-12 text-green-500" />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
                Booking Confirmed!
              </h1>
              <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base px-4">
                Your booking has been successfully confirmed. We&apos;ve sent a
                confirmation email to {formData.email}
              </p>
              <div className="bg-gray-50 rounded-xl p-4 md:p-6 mb-4 md:mb-6 text-left">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Booking ID:</span>
                  <span className="font-bold text-gray-900">{bookingId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Vendor:</span>
                  <span className="font-semibold text-gray-900">
                    {vendor.name}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Package:</span>
                  <span className="font-semibold text-gray-900">
                    {selectedPackage.name}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Date:</span>
                  <span className="font-semibold text-gray-900">
                    {new Date(selectedDate).toLocaleDateString("en-IN", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex justify-between pt-3 border-t">
                  <span className="text-gray-600">Total Amount:</span>
                  <span className="font-bold text-brand-red text-lg">
                    ₹{totalAmount.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/marketplace"
                className="flex-1 bg-brand-red text-white py-3 rounded-lg font-semibold hover:bg-red-900 transition text-center min-h-[44px] flex items-center justify-center"
              >
                Browse More Vendors
              </Link>
              <button
                onClick={() => window.print()}
                className="flex-1 bg-gray-200 text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-300 transition min-h-[44px]"
              >
                Print Receipt
              </button>
            </div>
          </div>
        </div>
        <Footer />
        <BottomNav />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 pb-20 md:pb-0">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 pb-6 md:pb-8">
        <Link
          href={`/marketplace/${category}/${id}`}
          className="inline-flex items-center gap-2 text-gray-600 hover:text-brand-red mb-4 md:mb-6 text-sm md:text-base"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Vendor Details
        </Link>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-4 md:p-6 mb-4 md:mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
                Booking Details
              </h2>
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <Calendar className="w-5 h-5 text-brand-red" />
                  <div>
                    <p className="text-sm text-gray-600">Event Date</p>
                    <p className="font-semibold text-gray-900">
                      {new Date(selectedDate).toLocaleDateString("en-IN", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Selected Package</p>
                  <p className="font-semibold text-gray-900">
                    {selectedPackage.name}
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MapPin className="w-4 h-4 inline mr-2" />
                    Address *
                  </label>
                  <textarea
                    required
                    value={formData.address}
                    onChange={(e) =>
                      setFormData({ ...formData, address: e.target.value })
                    }
                    rows={3}
                    className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent"
                    placeholder="Enter your address"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Event Type
                    </label>
                    <select
                      value={formData.eventType}
                      onChange={(e) =>
                        setFormData({ ...formData, eventType: e.target.value })
                      }
                      className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent"
                    >
                      <option>Wedding</option>
                      <option>Engagement</option>
                      <option>Reception</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Expected Guest Count
                    </label>
                    <input
                      type="number"
                      value={formData.guestCount}
                      onChange={(e) =>
                        setFormData({ ...formData, guestCount: e.target.value })
                      }
                      className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent"
                      placeholder="e.g., 200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Special Requests
                  </label>
                  <textarea
                    value={formData.specialRequests}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        specialRequests: e.target.value,
                      })
                    }
                    rows={3}
                    className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent"
                    placeholder="Any special requirements or requests..."
                  />
                </div>

                <div className="pt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Payment Method
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-center p-4 border-2 rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        name="payment"
                        value="online"
                        checked={paymentMethod === "online"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="mr-3"
                      />
                      <CreditCard className="w-5 h-5 mr-3 text-gray-600" />
                      <div>
                        <p className="font-semibold text-gray-900">
                          Pay Online (30% Advance)
                        </p>
                        <p className="text-sm text-gray-600">
                          Secure payment via UPI/Card/Net Banking
                        </p>
                      </div>
                    </label>
                    <label className="flex items-center p-4 border-2 rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        name="payment"
                        value="cash"
                        checked={paymentMethod === "cash"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="mr-3"
                      />
                      <Lock className="w-5 h-5 mr-3 text-gray-600" />
                      <div>
                        <p className="font-semibold text-gray-900">
                          Pay on Event Day
                        </p>
                        <p className="text-sm text-gray-600">
                          Full payment on the day of event
                        </p>
                      </div>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full bg-brand-red text-white py-3 md:py-4 rounded-lg font-bold text-base md:text-lg hover:bg-red-900 transition disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-h-[48px]"
                >
                  {isProcessing ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <Lock className="w-5 h-5" />
                      Confirm Booking
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-4 md:p-6 lg:sticky lg:top-6">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">
                Booking Summary
              </h3>
              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Vendor</p>
                  <p className="font-semibold text-gray-900">{vendor.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Package</p>
                  <p className="font-semibold text-gray-900">
                    {selectedPackage.name}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Date</p>
                  <p className="font-semibold text-gray-900">
                    {new Date(selectedDate).toLocaleDateString("en-IN")}
                  </p>
                </div>
              </div>
              <div className="border-t pt-4 space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Package Price</span>
                  <span className="font-semibold">₹{totalAmount.toLocaleString()}</span>
                </div>
                {paymentMethod === "online" && (
                  <>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Advance (30%)</span>
                      <span className="font-semibold">
                        ₹{advanceAmount.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Remaining</span>
                      <span>₹{remainingAmount.toLocaleString()}</span>
                    </div>
                  </>
                )}
                <div className="border-t pt-3 flex justify-between">
                  <span className="font-bold text-lg text-gray-900">
                    {paymentMethod === "online" ? "Pay Now" : "Total Amount"}
                  </span>
                  <span className="font-bold text-lg text-brand-red">
                    ₹
                    {paymentMethod === "online"
                      ? advanceAmount.toLocaleString()
                      : totalAmount.toLocaleString()}
                  </span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-xs text-gray-600">
                  <Lock className="w-3 h-3 inline mr-1" />
                  Your booking is secured. We&apos;ll hold your payment in
                  escrow until service delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <BottomNav />
    </main>
  );
}

