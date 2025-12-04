"use client";

import { Receipt, CheckCheck, Heart } from "lucide-react";

const features = [
  {
    icon: Receipt,
    title: "Transparent Pricing",
    description:
      "See base prices upfront. No negotiation headaches. We ensure you get the standard market rate.",
  },
  {
    icon: CheckCheck,
    title: "Verified Vendors",
    description:
      "Every vendor is physically verified by our ground team. We check their portfolio and past client reviews.",
  },
  {
    icon: Heart,
    title: "Shaadiverse Trust",
    description:
      "We hold payments in escrow until the service is delivered to your satisfaction.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-red font-semibold tracking-wider text-sm uppercase">
            Why Shaadiverse
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2">
            Simplicity at its Best
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center p-6 border border-gray-100 rounded-2xl hover:shadow-lg transition"
              >
                <div className="w-16 h-16 bg-red-50 text-brand-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

