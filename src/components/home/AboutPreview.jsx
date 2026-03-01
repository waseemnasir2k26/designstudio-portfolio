import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiArrowRight } from 'react-icons/hi2';
import { useCountUp } from '../../hooks/useScrollAnimation';

const StatItem = ({ value, label, suffix = '' }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  const { count, startCounting } = useCountUp(parseInt(value), 2000, 0);

  React.useEffect(() => {
    if (inView) {
      startCounting();
    }
  }, [inView, startCounting]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center px-2"
    >
      <div className="font-space font-bold text-2xl sm:text-3xl md:text-4xl text-off-white">
        {count}
        <span className="text-electric-violet">{suffix}</span>
      </div>
      <div className="font-inter text-warm-gray text-xs sm:text-sm mt-1">{label}</div>
    </motion.div>
  );
};

const AboutPreview = () => {
  const stats = [
    { value: '150', suffix: '+', label: 'Projects' },
    { value: '80', suffix: '+', label: 'Happy Clients' },
    { value: '8', suffix: '', label: 'Years Experience' },
    { value: '12', suffix: '', label: 'Awards' },
  ];

  return (
    <section
      id="about-preview"
      className="py-24 lg:py-32 bg-jet-black"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-electric-violet/30 via-purple-600/20 to-hot-coral/30 relative">
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(124,58,237,0.4),transparent_50%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,107,107,0.3),transparent_50%)]" />

              {/* Photo placeholder text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-off-white/30 font-space text-lg tracking-widest uppercase">
                  Designer Photo
                </span>
              </div>

              {/* Decorative frame */}
              <div className="absolute inset-4 border border-off-white/10 rounded-xl pointer-events-none" />
            </div>

            {/* Floating accent */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-electric-violet rounded-full opacity-20 blur-2xl"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">ABOUT ME</span>

            <h2
              id="about-heading"
              className="font-space font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-off-white leading-tight mb-4 sm:mb-6"
            >
              Creative designer with{' '}
              <span className="gradient-text">8+ years</span> crafting visual stories
            </h2>

            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <p className="font-inter text-warm-gray text-base sm:text-lg leading-relaxed">
                I'm a multidisciplinary graphic designer specializing in brand identity,
                digital design, and creative direction. My approach combines strategic
                thinking with a passion for visual storytelling.
              </p>
              <p className="font-inter text-warm-gray text-base sm:text-lg leading-relaxed">
                Based in New York, I've had the privilege of working with startups,
                agencies, and Fortune 500 companies to create memorable brand experiences
                that connect with audiences and drive results.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 py-8 border-y border-white/10">
              {stats.map((stat, index) => (
                <StatItem
                  key={stat.label}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              ))}
            </div>

            {/* CTA Link */}
            <Link
              to="/about"
              className="inline-flex items-center gap-3 font-space font-medium text-lg text-off-white hover:text-electric-violet transition-colors duration-300 group"
            >
              <span className="hover-underline">Learn More About Me</span>
              <HiArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
