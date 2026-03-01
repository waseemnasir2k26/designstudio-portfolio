import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi2';
import { services } from '../../data/services';
import SectionHeading from '../shared/SectionHeading';

const ServiceCard = ({ service, index }) => {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative p-6 sm:p-8 bg-white/[0.02] rounded-2xl lg:rounded-3xl border border-white/5 hover:border-electric-violet/30 hover:bg-white/[0.04] transition-all duration-500"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 rounded-2xl lg:rounded-3xl bg-gradient-to-br from-electric-violet/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Left accent border on hover */}
      <div className="absolute left-0 top-4 bottom-4 w-1 bg-electric-violet rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        {/* Icon */}
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-electric-violet/10 flex items-center justify-center mb-5 sm:mb-6 group-hover:bg-electric-violet/20 group-hover:shadow-glow-sm transition-all duration-300">
          <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-electric-violet" />
        </div>

        {/* Title */}
        <h3 className="font-space font-bold text-lg sm:text-xl md:text-2xl text-off-white mb-2 sm:mb-3 group-hover:text-electric-violet transition-colors duration-300">
          {service.shortTitle}
        </h3>

        {/* Description */}
        <p className="font-inter text-warm-gray text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">
          {service.shortDescription}
        </p>

        {/* Link */}
        <Link
          to={`/services#${service.id}`}
          className="inline-flex items-center gap-2 text-electric-violet font-space font-medium text-sm hover:gap-3 transition-all duration-300"
        >
          <span>Learn More</span>
          <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </motion.div>
  );
};

const ServicesOverview = () => {
  return (
    <section
      className="py-24 lg:py-32 bg-jet-black relative overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 -translate-y-1/2 -right-40 w-[500px] h-[500px] rounded-full bg-electric-violet/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <SectionHeading
          tag="WHAT I DO"
          title="Services & Expertise"
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-3 px-8 py-4 bg-electric-violet text-off-white font-space font-semibold rounded-full hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] hover:scale-105 transition-all duration-300"
          >
            <span>View Pricing</span>
            <HiArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;
