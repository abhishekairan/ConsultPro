'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Hero() {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate stats counting up
      gsap.from('.stat-number', {
        textContent: 0,
        duration: 2,
        ease: 'power1.out',
        snap: { textContent: 1 },
        stagger: 0.2,
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top center+=100',
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative">
      <div className="pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-28">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center lg:text-left lg:col-span-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight font-extrabold text-gray-900">
              <span className="block mb-2">Transform Your</span>
              <span className="block text-gradient mb-2">Business Vision</span>
              <span className="block">Into Reality</span>
            </h1>
            <p className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl">
              We provide expert consultancy services to help businesses grow, innovate, and succeed in today's competitive market.
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-3 sm:gap-4">
              <a
                href="#contact"
                className="btn-primary w-full sm:w-auto text-center"
              >
                Get Started
              </a>
              <a
                href="#services"
                className="btn-secondary w-full sm:w-auto text-center"
              >
                Learn More
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 sm:mt-12">
              <p className="text-sm text-gray-500 mb-4">Trusted by leading companies worldwide</p>
              <div className="grid grid-cols-3 gap-4 items-center opacity-60">
                <div className="flex items-center justify-center lg:justify-start">
                  <Image src="/logos/company1.svg" alt="Company 1" width={120} height={40} className="h-6 sm:h-8 w-auto" />
                </div>
                <div className="flex items-center justify-center">
                  <Image src="/logos/company2.svg" alt="Company 2" width={120} height={40} className="h-6 sm:h-8 w-auto" />
                </div>
                <div className="flex items-center justify-center lg:justify-end">
                  <Image src="/logos/company3.svg" alt="Company 3" width={120} height={40} className="h-6 sm:h-8 w-auto" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 sm:mt-12 relative lg:mt-0 lg:col-span-6">
            <div className="relative mx-auto w-full rounded-xl shadow-lg lg:max-w-md bg-white/50 backdrop-blur-sm p-2">
              <div className="relative block w-full rounded-lg overflow-hidden">
                <Image
                  src="/hero-image.svg"
                  alt="Business consulting team"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
          <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-royal stat-number">500</div>
            <div className="mt-1 text-sm sm:text-base text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-blue stat-number">98</div>
            <div className="mt-1 text-sm sm:text-base text-gray-600">Client Satisfaction %</div>
          </div>
          <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-turquoise stat-number">50</div>
            <div className="mt-1 text-sm sm:text-base text-gray-600">Expert Consultants</div>
          </div>
          <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-light stat-number">12</div>
            <div className="mt-1 text-sm sm:text-base text-gray-600">Years Experience</div>
          </div>
        </div>
      </div>
    </div>
  );
} 