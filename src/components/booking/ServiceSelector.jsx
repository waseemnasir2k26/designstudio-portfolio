import React from 'react';
import { motion } from 'framer-motion';
import { HiCheck } from 'react-icons/hi2';
import { services } from '../../data/services';
import { pricingPlans } from '../../data/pricingPlans';
import { useBooking } from '../../hooks/useBooking';
import { formatCurrency } from '../../utils/helpers';

const ServiceSelector = () => {
  const { selectedService, selectedPackage, setService, setPackage } = useBooking();

  const handleSelectService = (service) => {
    setService(service);
  };

  const handleSelectPackage = (pkg) => {
    setPackage(pkg);
  };

  const isServiceSelected = (service) => {
    return selectedService?.id === service.id;
  };

  const isPackageSelected = (pkg) => {
    return selectedPackage?.id === pkg.id;
  };

  return (
    <div>
      <h2 className="font-space font-bold text-2xl md:text-3xl text-off-white mb-2">
        What do you need?
      </h2>
      <p className="text-warm-gray font-inter mb-10">
        Select a service or choose a pricing package below.
      </p>

      {/* Services Grid */}
      <div className="mb-12">
        <h3 className="font-space font-semibold text-off-white text-sm uppercase tracking-wider mb-6">
          Services
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isSelected = isServiceSelected(service);

            return (
              <motion.button
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleSelectService(service)}
                className={`relative p-6 rounded-2xl text-left transition-all duration-300 ${
                  isSelected
                    ? 'bg-electric-violet/20 border-2 border-electric-violet'
                    : 'bg-white/[0.02] border-2 border-transparent hover:border-white/10'
                }`}
                aria-pressed={isSelected}
              >
                {/* Selection indicator */}
                {isSelected && (
                  <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-electric-violet flex items-center justify-center">
                    <HiCheck className="w-4 h-4 text-white" />
                  </div>
                )}

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-electric-violet/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-electric-violet" />
                  </div>
                  <div>
                    <h4 className="font-space font-semibold text-lg text-off-white mb-1">
                      {service.shortTitle}
                    </h4>
                    <p className="text-warm-gray text-sm font-inter mb-2">
                      {service.shortDescription}
                    </p>
                    <span className="text-electric-violet font-space font-semibold">
                      From {formatCurrency(service.startingPrice)}
                    </span>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-4 mb-12">
        <div className="flex-1 h-px bg-white/10" />
        <span className="text-warm-gray font-inter text-sm">OR</span>
        <div className="flex-1 h-px bg-white/10" />
      </div>

      {/* Packages */}
      <div>
        <h3 className="font-space font-semibold text-off-white text-sm uppercase tracking-wider mb-6">
          Packages
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pricingPlans.map((pkg, index) => {
            const isSelected = isPackageSelected(pkg);

            return (
              <motion.button
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.4 }}
                onClick={() => handleSelectPackage(pkg)}
                className={`relative p-6 rounded-2xl text-left transition-all duration-300 ${
                  isSelected
                    ? 'bg-electric-violet/20 border-2 border-electric-violet'
                    : 'bg-white/[0.02] border-2 border-transparent hover:border-white/10'
                }`}
                aria-pressed={isSelected}
              >
                {/* Badge */}
                {pkg.badge && (
                  <span className="absolute -top-3 left-4 px-3 py-1 bg-electric-violet text-off-white text-xs font-space font-semibold rounded-full">
                    {pkg.badge}
                  </span>
                )}

                {/* Selection indicator */}
                {isSelected && (
                  <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-electric-violet flex items-center justify-center">
                    <HiCheck className="w-4 h-4 text-white" />
                  </div>
                )}

                <h4 className="font-space font-semibold text-xl text-off-white mb-1">
                  {pkg.name}
                </h4>
                <p className="text-warm-gray text-sm font-inter mb-4">
                  {pkg.description}
                </p>
                <span className="text-electric-violet font-space font-bold text-2xl">
                  {formatCurrency(pkg.price)}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiceSelector;
