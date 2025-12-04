"use client";

import { Heart, Mail, Phone, Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="text-brand-red w-5 h-5 fill-brand-red" />
              <span className="font-bold text-2xl text-white">
                Shaadi<span className="text-brand-red">verse</span>
              </span>
            </div>
            <p className="text-sm text-gray-400">
              Making Indian weddings affordable, transparent, and hassle-free
              for everyone.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-brand-red">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand-red">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand-red">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand-red">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Vendors</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-brand-red">
                  Vendor Login
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand-red">
                  Register as Vendor
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand-red">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <Mail className="mr-2 w-4 h-4" /> hello@shaadiverse.in
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 w-4 h-4" /> +91 98765 43210
              </li>
              <li className="flex gap-4 mt-4">
                <Link
                  href="#"
                  className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-red transition"
                >
                  <Facebook className="w-4 h-4" />
                </Link>
                <Link
                  href="#"
                  className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-red transition"
                >
                  <Instagram className="w-4 h-4" />
                </Link>
                <Link
                  href="#"
                  className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-red transition"
                >
                  <Twitter className="w-4 h-4" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          &copy; 2023 Shaadiverse Technologies Pvt Ltd. All rights reserved.
          Made with <Heart className="inline text-red-500 w-4 h-4" /> in India.
        </div>
      </div>
    </footer>
  );
}

