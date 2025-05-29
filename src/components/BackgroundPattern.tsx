'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function BackgroundPattern() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 1000, height: 1000 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      containerRef.current.style.setProperty('--mouse-x', `${x}`);
      containerRef.current.style.setProperty('--mouse-y', `${y}`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      style={{ '--mouse-x': '0.5', '--mouse-y': '0.5' } as any}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-brand-royal/5 via-transparent to-brand-turquoise/5" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(67,97,238,0.05)_1px,transparent_1px),linear-gradient(rgba(67,97,238,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-24 h-24 rounded-full bg-gradient-to-r from-brand-royal/5 to-brand-turquoise/5"
            initial={{ 
              x: Math.random() * dimensions.width,
              y: Math.random() * dimensions.height 
            }}
            animate={{
              x: [
                Math.random() * dimensions.width * 0.8,
                Math.random() * dimensions.width * 0.8
              ],
              y: [
                Math.random() * dimensions.height * 0.8,
                Math.random() * dimensions.height * 0.8
              ],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            style={{
              filter: 'blur(40px)',
            }}
          />
        ))}
      </div>

      {/* Interactive Gradient */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(
            circle at calc(var(--mouse-x) * 100%) calc(var(--mouse-y) * 100%),
            rgba(72, 191, 227, 0.15) 0%,
            rgba(67, 97, 238, 0.1) 25%,
            transparent 50%
          )`
        }}
      />
    </div>
  );
} 