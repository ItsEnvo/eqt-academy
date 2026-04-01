'use client';

import { useEffect, useState } from 'react';

// Components
import HeroSection from '@/components/HeroSection';
import WinRateTracker from '@/components/WinRateTracker';
import WhatYouGet from '@/components/WhatYouGet';
import StorySection from '@/components/StorySection';
import PrecisionModel from '@/components/PrecisionModel';
import Testimonials from '@/components/Testimonials';
import PricingSection from '@/components/PricingSection';
import MentorshipQuiz from '@/components/MentorshipQuiz';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-primary-bg">
      <HeroSection />
      <WinRateTracker />
      <WhatYouGet />
      <StorySection />
      <PrecisionModel />
      <Testimonials />
      <PricingSection />
      <MentorshipQuiz />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}