"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import BottomNav from "@/components/BottomNav";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import PopularCities from "@/components/PopularCities";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="pb-20 md:pb-0">
      <Navigation />
      <Hero />
      <ProblemSolution />
      <Services />
      <WhyChooseUs />
      <PopularCities />
      <Testimonials />
      <CTA />
      <Footer />
      <BottomNav />
    </main>
  );
}

