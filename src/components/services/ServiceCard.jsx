import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowRight, HiCheck } from 'react-icons/hi2';
import { formatCurrency } from '../../utils/helpers';
import { useBooking } from '../../hooks/useBooking';

const ServiceCard = ({ service, index }) => {
  const { setService } = useBooking();
  const Icon = service.icon;
  const isEven = index % 2 === 0;

  const handleBookService = () => {
    setService(service);
  };

  return (
    <motion.div
      id={service.id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`py-16 md:py-24 border-b border-white/5 ${
        isEven ? '' : 'lg:flex-row-reverse'
      }`}
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
          isEven ? '' : 'lg:[direction:rtl]'
        }`}
      >
        {/* Image/Visual */}
        <div className={`${isEven ? '' : 'lg:[direction:ltr]'}`}>
          <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-electric-violet/20 via-purple-600/10 to-hot-coral/10">
            {/* Decorative elements */}
            <div className="absolute inset-0">
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, rgba(124, 58, 237, 0.2) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(124, 58, 237, 0.2) 1px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px',
                }}
              />
            </div>

            {/* Center icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-electric-violet/20 flex items-center justify-center">
                <Icon className="w-16 h-16 text-electric-violet" />
              </div>
            </div>

            {/* Floating accent */}
            <motion.div
              animate={{
                y: [-10, 10, -10],
                rotate: [0, 5, 0],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -right-4 w-24 h-24 bg-electric-violet rounded-full opacity-30 blur-xl"
            />
          </div>
        </div>

        {/* Content */}
        <div className={`${isEven ? '' : 'lg:[direction:ltr]'}`}>
          <h2 className="font-space font-bold text-3xl md:text-4xl text-off-white mb-6">
            {service.title}
          </h2>

          <p className="font-inter text-warm-gray text-lg leading-relaxed mb-8">
            {service.description}
          </p>

          {/* Deliverables */}
          <div className="mb-8">
            <h3 className="font-space font-semibold text-off-white text-sm uppercase tracking-wider mb-4">
              What's Included
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {service.deliverables.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-warm-gray font-inter"
                >
                  <HiCheck className="w-5 h-5 text-electric-violet flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Price & CTA */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <div>
              <span className="text-warm-gray text-sm font-inter block">
                Starting from
              </span>
              <span className="font-space font-bold text-3xl text-off-white">
                {formatCurrency(service.startingPrice)}
              </span>
            </div>

            <Link
              to="/booking"
              onClick={handleBookService}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-electric-violet text-off-white font-space font-semibold rounded-full hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] hover:scale-105 transition-all duration-300"
            >
              <span>Book This Service</span>
              <HiArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
