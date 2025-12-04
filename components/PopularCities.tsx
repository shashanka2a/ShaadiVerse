"use client";

import Image from "next/image";
import Link from "next/link";

const cities = [
  {
    name: "Warangal",
    image:
      "https://images.unsplash.com/photo-1605445210217-1906cb524225?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Nizamabad",
    image:
      "https://images.unsplash.com/photo-1596547608101-7973c17d74db?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Medchal",
    image:
      "https://images.unsplash.com/photo-1566552881560-0be862a7c445?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Kamareddy",
    image:
      "https://images.unsplash.com/photo-1582510003544-4d00b785e271?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
];

const otherCities = [
  "Karimnagar",
  "Siddipet",
  "Jagtial",
  "Mahabubnagar",
  "Khammam",
  "Nalgonda",
  "Adilabad",
  "Mancherial",
];

export default function PopularCities() {
  return (
    <section className="py-16 bg-gray-50" id="cities">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Popular Cities</h2>
            <p className="text-gray-600 mt-2">
              Serving Tier-2 and Tier-3 cities across Telangana
            </p>
          </div>
          <Link
            href="#"
            className="text-brand-red font-medium hover:underline mt-4 md:mt-0"
          >
            View all cities
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {cities.map((city, index) => (
            <Link
              key={index}
              href="#"
              className="relative rounded-lg overflow-hidden group h-40"
            >
              <Image
                src={city.image}
                alt={city.name}
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                <span className="text-white font-bold text-lg">
                  {city.name}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-2 justify-center text-sm text-gray-500">
          {otherCities.map((city, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-white border rounded-full"
            >
              {city}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

