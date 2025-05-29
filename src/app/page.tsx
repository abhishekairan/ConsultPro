'use client';

import { useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ValueProposition from '@/components/ValueProposition';
import ScrollSection from '@/components/ScrollSection';
import SeoServices from '@/components/SeoServices';
import CaseStudies from '@/components/CaseStudies';
import BackgroundPattern from '@/components/BackgroundPattern';
import GradientBackground from '@/components/GradientBackground';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  useLayoutEffect(() => {
    // Initial reveal animation for the hero section
    gsap.fromTo(
      '.hero-content',
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        ease: 'power2.out',
        delay: 0.2 
      }
    );

    // Scroll animations for other sections
    const sections = document.querySelectorAll('.animate-section');
    sections.forEach((section, index) => {
      gsap.fromTo(
        section,
        { 
          opacity: 0, 
          y: 30 
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            end: 'top 15%',
            toggleActions: 'play none none reverse',
            once: true,
            markers: false
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      <GradientBackground />
      <BackgroundPattern />
      <Navbar />
      <main className="relative pt-16">
        <ScrollSection id="hero" className="min-h-[60vh] flex items-center justify-center">
          <div className="hero-content w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Hero />
          </div>
        </ScrollSection>

        <div className="animate-section py-8 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-brand-royal/10 via-brand-blue/10 to-brand-turquoise/10 backdrop-blur-sm rounded-2xl shadow-lg p-6 md:p-8">
              <ValueProposition />
            </div>
          </div>
        </div>

        <ScrollSection id="services" className="animate-section py-8 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/30 backdrop-blur-sm rounded-2xl shadow-lg p-6 md:p-8">
              <Services />
            </div>
          </div>
        </ScrollSection>

        <div className="animate-section py-8 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative bg-gradient-to-br from-brand-royal/5 via-brand-blue/5 to-brand-turquoise/5 backdrop-blur-sm rounded-2xl shadow-lg p-6 md:p-8">
              <SeoServices />
            </div>
          </div>
        </div>

        <div className="animate-section py-8 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative bg-gradient-to-br from-brand-royal/5 via-brand-blue/5 to-brand-turquoise/5 backdrop-blur-sm rounded-2xl shadow-lg p-6 md:p-8">
              <CaseStudies />
            </div>
          </div>
        </div>
        
        <ScrollSection id="contact" className="animate-section py-8 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/30 backdrop-blur-sm rounded-2xl shadow-lg p-6 md:p-8">
              <Contact />
            </div>
          </div>
        </ScrollSection>
      </main>
      <Footer />
    </div>
  );
}
