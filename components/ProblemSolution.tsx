"use client";

import { DollarSign, Heart, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProblemSolution() {
  return (
    <section className="py-16 bg-white" id="problem-solution">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-brand-pink rounded-full -z-10"></div>
            <Image
              src="https://images.unsplash.com/photo-1621621667797-e06afc217fb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Couple discussing wedding budget"
              width={800}
              height={400}
              className="rounded-2xl shadow-xl w-full object-cover h-[400px]"
            />
            <div className="absolute bottom-6 right-6 bg-white p-4 rounded-lg shadow-lg max-w-xs border-l-4 border-brand-red">
              <p className="text-sm font-semibold text-gray-800">
                &quot;Quotes were too high, and hidden costs everywhere...&quot;
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Planning a wedding shouldn&apos;t break the bank.
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-brand-red">
                  <DollarSign className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">
                    The Problem
                  </h3>
                  <p className="text-gray-600">
                    Vendors often quote random prices, add hidden charges, or
                    don&apos;t serve specific localities.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">
                    The Shaadiverse Solution
                  </h3>
                  <p className="text-gray-600">
                    We verify local vendors, negotiate transparent &quot;package
                    rates&quot;, and ensure quality service within your budget.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Link
                href="#services"
                className="text-brand-red font-semibold hover:text-red-900 inline-flex items-center"
              >
                Explore Services <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

