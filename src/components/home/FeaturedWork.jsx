import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi2';
import { projects } from '../../data/projects';
import ProjectModal from '../portfolio/ProjectModal';
import SectionHeading from '../shared/SectionHeading';

const FeaturedWorkCard = ({ project, index, onOpenModal }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative group cursor-pointer ${
        isEven ? 'lg:col-span-7' : 'lg:col-span-5'
      }`}
      onClick={() => onOpenModal(project)}
    >
      <div className="relative overflow-hidden rounded-2xl">
        {/* Project Image Placeholder */}
        <div
          className="aspect-[4/3] transition-transform duration-700 group-hover:scale-105"
          style={{
            background: `linear-gradient(135deg, ${project.color}40 0%, ${project.color}20 50%, ${project.color}10 100%)`,
          }}
        >
          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `
                linear-gradient(to right, ${project.color}20 1px, transparent 1px),
                linear-gradient(to bottom, ${project.color}20 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }}
          />

          {/* Center decoration */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-24 h-24 rounded-full opacity-40"
              style={{
                background: `radial-gradient(circle, ${project.color} 0%, transparent 70%)`,
              }}
            />
          </div>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-jet-black/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 text-off-white font-space font-medium"
          >
            <span>View Project</span>
            <HiArrowRight className="w-5 h-5" />
          </motion.div>
        </div>
      </div>

      {/* Project Info */}
      <div className="mt-6">
        <div className="flex items-center gap-3 mb-2">
          <span
            className="px-3 py-1 text-xs font-space font-medium rounded-full"
            style={{
              backgroundColor: `${project.color}20`,
              color: project.color,
            }}
          >
            {project.category}
          </span>
          <span className="text-warm-gray text-sm font-inter">{project.year}</span>
        </div>
        <h3 className="font-space font-bold text-xl md:text-2xl text-off-white group-hover:text-electric-violet transition-colors duration-300">
          {project.title}
        </h3>
      </div>
    </motion.div>
  );
};

const FeaturedWork = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const featuredProjects = projects.filter((p) => p.featured);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section
      className="py-24 lg:py-32 bg-jet-black"
      aria-labelledby="featured-work-heading"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeading
          tag="SELECTED WORK"
          title="Projects I'm Proud Of"
        />

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {featuredProjects.map((project, index) => (
            <FeaturedWorkCard
              key={project.id}
              project={project}
              index={index}
              onOpenModal={handleOpenModal}
            />
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-3 px-8 py-4 border-2 border-off-white text-off-white font-space font-semibold rounded-full hover:bg-off-white hover:text-jet-black transition-all duration-300"
          >
            <span>View All Work</span>
            <HiArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default FeaturedWork;
