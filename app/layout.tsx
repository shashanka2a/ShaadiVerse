import type { Metadata } from "next";
import { Outfit, Great_Vibes } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-great-vibes",
});

export const metadata: Metadata = {
  title: "Shaadiverse - Budget Wedding Services | Verified Vendors in Tier-2 & Tier-3 Cities",
  description: "India's trusted budget wedding directory. Find verified vendors for venues, photography, makeup, decor, and catering in Tier-2 & Tier-3 cities. Transparent pricing, no hidden charges.",
  keywords: "wedding vendors, budget wedding, wedding planning, wedding venues, wedding photography, wedding makeup, wedding decor, wedding catering, Tier-2 cities, Tier-3 cities, Telangana weddings",
  authors: [{ name: "Shaadiverse" }],
  openGraph: {
    title: "Shaadiverse - Budget Wedding Services",
    description: "India's trusted budget wedding directory. Verified vendors for every ceremony in Tier-2 & Tier-3 cities.",
    type: "website",
    locale: "en_IN",
    siteName: "Shaadiverse",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shaadiverse - Budget Wedding Services",
    description: "India's trusted budget wedding directory. Verified vendors for every ceremony in Tier-2 & Tier-3 cities.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} ${greatVibes.variable} font-sans text-text-dark bg-white antialiased`}>
        {children}
      </body>
    </html>
  );
}

