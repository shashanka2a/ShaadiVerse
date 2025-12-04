"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
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
    <main>
      <Navigation />
      <Hero />
      <ProblemSolution />
      <Services />
      <WhyChooseUs />
      <PopularCities />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}

