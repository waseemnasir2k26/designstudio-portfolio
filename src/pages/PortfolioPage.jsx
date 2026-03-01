import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import PortfolioFilter from '../components/portfolio/PortfolioFilter';
import PortfolioGrid from '../components/portfolio/PortfolioGrid';
import ProjectModal from '../components/portfolio/ProjectModal';
import SectionHeading from '../components/shared/SectionHeading';

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return projects;
    }
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <Helmet>
        <title>Portfolio | STUDIO. - Selected Design Work</title>
        <meta
          name="description"
          content="Explore my portfolio of brand identity, web design, print, and motion graphics projects. Each project tells a unique visual story."
        />
        <meta property="og:title" content="Portfolio | STUDIO. - Selected Design Work" />
        <meta
          property="og:description"
          content="Explore my portfolio of brand identity, web design, print, and motion graphics projects."
        />
      </Helmet>

      <main id="main-content" className="min-h-screen bg-jet-black pt-32 pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <SectionHeading
              tag="PORTFOLIO"
              title="Selected Work"
              subtitle="A curated collection of my best design projects across brand identity, web design, print, and motion graphics."
              alignment="center"
            />
          </motion.div>

          {/* Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <PortfolioFilter
              activeFilter={activeFilter}
              onFilterChange={handleFilterChange}
            />
          </motion.div>

          {/* Grid */}
          <PortfolioGrid
            projects={filteredProjects}
            onProjectClick={handleProjectClick}
          />

          {/* Project count */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center text-warm-gray font-inter mt-12"
          >
            Showing {filteredProjects.length} of {projects.length} projects
          </motion.p>
        </div>

        {/* Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </main>
    </>
  );
};

export default PortfolioPage;
