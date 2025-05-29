'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface ScrollSectionProps {
  children: React.ReactNode;
  className?: string;
  id: string;
}

export default function ScrollSection({ children, className = '', id }: ScrollSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    // Create the scroll trigger animation
    gsap.fromTo(
      section,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top center+=100',
          end: 'bottom center',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`min-h-screen ${className}`}
    >
      {children}
    </section>
  );
} 