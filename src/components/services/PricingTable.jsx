import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiCheck, HiXMark } from 'react-icons/hi2';
import { pricingPlans } from '../../data/pricingPlans';
import { formatCurrency } from '../../utils/helpers';
import { useBooking } from '../../hooks/useBooking';
import SectionHeading from '../shared/SectionHeading';

const PricingCard = ({ plan, index }) => {
  const { setPackage } = useBooking();

  const handleChoosePlan = () => {
    setPackage(plan);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative rounded-3xl p-8 md:p-10 ${
        plan.highlighted
          ? 'bg-gradient-to-b from-electric-violet/20 to-transparent border-2 border-electric-violet lg:scale-105 lg:-my-4'
          : 'bg-white/[0.02] border border-white/5'
      }`}
    >
      {/* Badge */}
      {plan.badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="px-4 py-2 bg-electric-violet text-off-white font-space font-semibold text-sm rounded-full shadow-lg">
            {plan.badge}
          </span>
        </div>
      )}

      {/* Plan Name */}
      <h3 className="font-space font-bold text-2xl text-off-white mb-2">
        {plan.name}
      </h3>

      {/* Description */}
      <p className="font-inter text-warm-gray text-sm mb-6">
        {plan.description}
      </p>

      {/* Price */}
      <div className="mb-8">
        <span className="font-space font-bold text-5xl text-off-white">
          {formatCurrency(plan.price)}
        </span>
        <span className="text-warm-gray text-lg ml-1">{plan.priceLabel}</span>
      </div>

      {/* Features */}
      <ul className="space-y-4 mb-10">
        {plan.features.map((feature, idx) => (
          <li
            key={idx}
            className={`flex items-start gap-3 font-inter text-sm ${
              feature.included ? 'text-off-white' : 'text-warm-gray/50'
            }`}
          >
            {feature.included ? (
              <HiCheck className="w-5 h-5 text-electric-violet flex-shrink-0 mt-0.5" />
            ) : (
              <HiXMark className="w-5 h-5 text-warm-gray/30 flex-shrink-0 mt-0.5" />
            )}
            <span>{feature.text}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <Link
        to="/booking"
        onClick={handleChoosePlan}
        className={`block w-full text-center py-4 rounded-full font-space font-semibold transition-all duration-300 ${
          plan.highlighted
            ? 'bg-electric-violet text-off-white hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] hover:scale-105'
            : 'border-2 border-off-white text-off-white hover:bg-off-white hover:text-jet-black'
        }`}
      >
        Choose Plan
      </Link>
    </motion.div>
  );
};

const PricingTable = () => {
  return (
    <section className="py-24 lg:py-32 bg-jet-black" aria-labelledby="pricing-heading">
      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeading
          tag="PRICING"
          title="Packages & Pricing"
          subtitle="Flexible packages designed to fit your needs and budget. All packages include dedicated support and source files."
          alignment="center"
        />

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6 mt-16">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={plan.id} plan={plan} index={index} />
          ))}
        </div>

        {/* Custom Project Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="font-inter text-warm-gray">
            Need something custom?{' '}
            <Link
              to="/contact"
              className="text-electric-violet hover:underline font-medium"
            >
              Let's talk about your project
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingTable;
