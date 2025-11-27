'use client';

import { motion } from 'framer-motion';

const SectionTransition = () => {
  return (
    <div className="relative h-32 overflow-hidden">
      <svg
        className="absolute bottom-0 w-full h-32"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          fill="url(#gradient)"
          d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF6B35" />
            <stop offset="100%" stopColor="#FFB627" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default SectionTransition;
