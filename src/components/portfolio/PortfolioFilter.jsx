import React from 'react';
import { motion } from 'framer-motion';
import { categories } from '../../data/projects';

const PortfolioFilter = ({ activeFilter, onFilterChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((category) => (
        <motion.button
          key={category}
          onClick={() => onFilterChange(category)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-6 py-3 rounded-full font-space font-medium text-sm transition-all duration-300 ${
            activeFilter === category
              ? 'bg-electric-violet text-off-white shadow-[0_0_20px_rgba(124,58,237,0.4)]'
              : 'bg-white/5 text-warm-gray hover:bg-white/10 hover:text-off-white'
          }`}
          aria-pressed={activeFilter === category}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
};

export default PortfolioFilter;
