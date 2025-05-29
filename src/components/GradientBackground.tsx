'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function GradientBackground() {
  return (
    <div className="fixed inset-0 -z-20">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-royal/5 via-brand-blue/5 to-brand-turquoise/5" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-brand-royal/10 to-transparent blur-3xl"
        animate={{
          x: ['-25%', '5%', '-25%'],
          y: ['-25%', '5%', '-25%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <motion.div
        className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-l from-brand-blue/10 to-transparent blur-3xl"
        animate={{
          x: ['25%', '-5%', '25%'],
          y: ['-15%', '15%', '-15%'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <motion.div
        className="absolute bottom-0 left-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-t from-brand-turquoise/10 to-transparent blur-3xl"
        animate={{
          x: ['-25%', '5%', '-25%'],
          y: ['25%', '-5%', '25%'],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Noise overlay */}
      <div className="absolute inset-0 bg-noise opacity-20" />
    </div>
  );
} 