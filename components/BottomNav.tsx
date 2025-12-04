"use client";

import { usePathname } from "next/navigation";
import { Home, Search, Heart, User, Menu } from "lucide-react";
import Link from "next/link";

export default function BottomNav() {
  const pathname = usePathname();
  const isMarketplace = pathname?.startsWith("/marketplace");

  const navItems = [
    {
      name: "Home",
      icon: Home,
      href: "/",
      active: pathname === "/",
    },
    {
      name: "Marketplace",
      icon: Search,
      href: "/marketplace",
      active: isMarketplace,
    },
    {
      name: "Favorites",
      icon: Heart,
      href: "#",
      active: false,
    },
    {
      name: "Account",
      icon: User,
      href: "#",
      active: false,
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 md:hidden safe-area-inset-bottom">
      <div className="flex items-center justify-around h-16 px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center justify-center flex-1 h-full min-w-0 transition-colors ${
                item.active
                  ? "text-brand-red"
                  : "text-gray-500 hover:text-brand-red"
              }`}
              aria-label={item.name}
            >
              <Icon
                className={`w-6 h-6 mb-1 ${
                  item.active ? "fill-current" : ""
                }`}
              />
              <span className="text-xs font-medium truncate w-full text-center">
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}


