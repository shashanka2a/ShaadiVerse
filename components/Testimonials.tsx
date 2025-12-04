"use client";

import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Priya & Rahul",
    location: "Warangal",
    rating: 5,
    text: "Found an amazing photographer in Warangal within my budget. The team at Shaadiverse was very helpful in negotiating the final price.",
    image: "/testimonial-priya-rahul.jpg",
  },
  {
    name: "Amit Kumar",
    location: "Nizamabad",
    rating: 4.5,
    text: "Used their package for Venue and Catering in Nizamabad. Everything was transparent, no hidden charges which was my biggest fear.",
    image: "/testimonial-amit.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-brand-pink/30" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Happy Couples
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm flex gap-4"
            >
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={56}
                height={56}
                className="w-14 h-14 rounded-full object-cover border-2 border-brand-red"
              />
              <div>
                <div className="flex text-brand-gold mb-2 text-sm">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(testimonial.rating)
                          ? "fill-current"
                          : i < testimonial.rating
                          ? "fill-current opacity-50"
                          : ""
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 italic text-sm mb-3">
                  &quot;{testimonial.text}&quot;
                </p>
                <p className="font-bold text-gray-900">
                  - {testimonial.name},{" "}
                  <span className="text-xs font-normal text-gray-500">
                    {testimonial.location}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

