"use client";

import Image from "next/image";

const services = [
  {
    title: "Venues",
    description: "Banquet halls, Lawns",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Photography",
    description: "Candid, Pre-wedding",
    image:
      "https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Makeup",
    description: "Bridal, Party",
    image:
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Decor",
    description: "Mandap, Entry",
    image:
      "https://images.unsplash.com/photo-1478146059778-26028b07395a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Catering",
    description: "Veg, Non-Veg",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
];

export default function Services() {
  return (
    <section className="py-16 bg-brand-pink/50 hero-pattern" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Everything You Need
          </h2>
          <p className="text-gray-600 mt-2">
            Curated categories for a complete wedding experience
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden cursor-pointer"
            >
              <div className="h-32 bg-gray-200 overflow-hidden relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-bold text-gray-800 mb-1">
                  {service.title}
                </h3>
                <p className="text-xs text-gray-500">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

