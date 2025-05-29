'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/70 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="text-3xl font-bold text-brand-royal">
              ConsultPro
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-base font-medium text-gray-700 hover:text-brand-royal transition-colors">
              Services
            </Link>
            <Link href="#about" className="text-base font-medium text-gray-700 hover:text-brand-royal transition-colors">
              About
            </Link>
            <Link href="#testimonials" className="text-base font-medium text-gray-700 hover:text-brand-royal transition-colors">
              Testimonials
            </Link>
            <Link href="#contact" className="text-base font-medium text-gray-700 hover:text-brand-royal transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-brand-royal hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-royal transition-all duration-200"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="#services"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-royal hover:bg-white/50"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#about"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-royal hover:bg-white/50"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#testimonials"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-royal hover:bg-white/50"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                href="#contact"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-royal hover:bg-white/50"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 