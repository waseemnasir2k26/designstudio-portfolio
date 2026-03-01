import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Masonry from 'react-masonry-css';
import { HiArrowRight } from 'react-icons/hi2';

const breakpointColumns = {
  default: 3,
  1280: 3,
  1024: 2,
  768: 2,
  640: 1,
};

const PortfolioCard = ({ project, onClick, index }) => {
  // Vary card heights for masonry effect
  const heights = ['aspect-[4/3]', 'aspect-[4/5]', 'aspect-square', 'aspect-[3/4]'];
  const heightClass = heights[index % heights.length];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="mb-6 group cursor-pointer"
      onClick={() => onClick(project)}
    >
      <div className={`relative overflow-hidden rounded-2xl ${heightClass}`}>
        {/* Project Image Placeholder */}
        <div
          className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
          style={{
            background: `linear-gradient(135deg, ${project.color}50 0%, ${project.color}20 50%, ${project.color}10 100%)`,
          }}
        >
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `
                linear-gradient(to right, ${project.color}20 1px, transparent 1px),
                linear-gradient(to bottom, ${project.color}20 1px, transparent 1px)
              `,
              backgroundSize: '30px 30px',
            }}
          />

          {/* Center decoration */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-20 h-20 rounded-full opacity-50"
              style={{
                background: `radial-gradient(circle, ${project.color} 0%, transparent 70%)`,
              }}
            />
          </div>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-jet-black via-jet-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
          {/* Category Tag */}
          <span
            className="inline-flex w-fit px-3 py-1 text-xs font-space font-medium rounded-full mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"
            style={{
              backgroundColor: `${project.color}30`,
              color: project.color,
            }}
          >
            {project.category}
          </span>

          {/* Title */}
          <h3 className="font-space font-bold text-xl text-off-white mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
            {project.title}
          </h3>

          {/* Year */}
          <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
            <span className="text-warm-gray text-sm font-inter">{project.year}</span>
            <span className="flex items-center gap-2 text-electric-violet font-space text-sm">
              View Project
              <HiArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const PortfolioGrid = ({ projects, onProjectClick }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={projects.map(p => p.id).join(',')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Masonry
          breakpointCols={breakpointColumns}
          className="flex -ml-6 w-auto"
          columnClassName="pl-6 bg-clip-padding"
        >
          {projects.map((project, index) => (
            <PortfolioCard
              key={project.id}
              project={project}
              onClick={onProjectClick}
              index={index}
            />
          ))}
        </Masonry>
      </motion.div>
    </AnimatePresence>
  );
};

export default PortfolioGrid;
