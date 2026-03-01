import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { HiChevronDown } from 'react-icons/hi2';
import { Link as ScrollLink } from 'react-scroll';

const Hero = () => {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-jet-black"
      aria-labelledby="hero-heading"
    >
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Shape 1 */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #7C3AED 0%, transparent 70%)',
          }}
        />

        {/* Gradient Shape 2 */}
        <motion.div
          animate={{
            x: [0, -20, 0],
            y: [0, 30, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -bottom-60 -left-40 w-[500px] h-[500px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, #FF6B6B 0%, transparent 70%)',
          }}
        />

        {/* Gradient Shape 3 */}
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #7C3AED 0%, #FF6B6B 50%, transparent 70%)',
          }}
        />

        {/* Mouse follow spotlight */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full pointer-events-none opacity-10 hidden lg:block"
          style={{
            background: 'radial-gradient(circle, rgba(124, 58, 237, 0.3) 0%, transparent 60%)',
            left: mousePosition.x - 300,
            top: mousePosition.y - 300,
            transition: 'left 0.3s ease-out, top 0.3s ease-out',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
        {/* Main Headline */}
        <h1
          id="hero-heading"
          className="font-space text-[clamp(3rem,10vw,9rem)] font-bold leading-[1.05] mb-8 tracking-tight"
        >
          <motion.span
            custom={0}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="block text-off-white text-shadow-subtle"
          >
            I Design
          </motion.span>
          <motion.span
            custom={1}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="block font-playfair italic gradient-text text-shadow-glow"
            style={{
              backgroundSize: '200% auto',
              animation: 'gradient-shift 4s ease-in-out infinite'
            }}
          >
            Experiences
          </motion.span>
          <motion.span
            custom={2}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="block text-off-white text-shadow-subtle"
          >
            That Speak
          </motion.span>
        </h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="font-inter text-warm-gray text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-12 md:mb-16 max-w-xl mx-auto"
        >
          <span className="hidden sm:inline">Brand Identity • Web Design • Print • Motion Graphics</span>
          <span className="sm:hidden">Brand • Web • Print • Motion</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <motion.a
            href="/portfolio"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(124, 58, 237, 0.6)' }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto btn-primary text-center min-w-[200px]"
          >
            View My Work
          </motion.a>
          <motion.a
            href="/booking"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto btn-secondary text-center min-w-[200px]"
          >
            Book a Session
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <ScrollLink
          to="about-preview"
          spy={true}
          smooth={true}
          offset={-80}
          duration={800}
          className="flex flex-col items-center cursor-pointer group"
          aria-label="Scroll down"
        >
          <span className="text-warm-gray text-xs uppercase tracking-widest mb-3 font-inter group-hover:text-electric-violet transition-colors">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <HiChevronDown className="w-6 h-6 text-warm-gray group-hover:text-electric-violet transition-colors" />
          </motion.div>
        </ScrollLink>
      </motion.div>
    </section>
  );
};

export default Hero;
