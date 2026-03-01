import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { motion, AnimatePresence } from 'framer-motion';
import { HiXMark } from 'react-icons/hi2';

// Set app element for accessibility
if (typeof window !== 'undefined') {
  Modal.setAppElement('#root');
}

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(13, 13, 13, 0.95)',
    zIndex: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
  content: {
    position: 'relative',
    inset: 'auto',
    maxWidth: '1000px',
    width: '100%',
    maxHeight: '90vh',
    overflow: 'auto',
    background: '#1a1a1a',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '24px',
    padding: '0',
  },
};

const ProjectModal = ({ project, isOpen, onClose }) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      closeTimeoutMS={300}
      contentLabel={`${project.title} Project Details`}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-off-white hover:text-electric-violet transition-all duration-300"
              aria-label="Close modal"
            >
              <HiXMark className="w-6 h-6" />
            </button>

            {/* Project Image */}
            <div
              className="w-full aspect-video"
              style={{
                background: `linear-gradient(135deg, ${project.color}40 0%, ${project.color}20 50%, ${project.color}10 100%)`,
              }}
            >
              {/* Grid pattern */}
              <div
                className="w-full h-full opacity-30"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, ${project.color}20 1px, transparent 1px),
                    linear-gradient(to bottom, ${project.color}20 1px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px',
                }}
              />
            </div>

            {/* Content */}
            <div className="p-8 md:p-12">
              {/* Header */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span
                  className="px-4 py-2 text-sm font-space font-medium rounded-full"
                  style={{
                    backgroundColor: `${project.color}20`,
                    color: project.color,
                  }}
                >
                  {project.category}
                </span>
                <span className="text-warm-gray text-sm font-inter">
                  {project.year}
                </span>
              </div>

              {/* Title */}
              <h2 className="font-space font-bold text-3xl md:text-4xl text-off-white mb-6">
                {project.title}
              </h2>

              {/* Description */}
              <p className="font-inter text-warm-gray text-lg leading-relaxed mb-8">
                {project.description}
              </p>

              {/* Deliverables */}
              {project.deliverables && (
                <div className="mb-8">
                  <h3 className="font-space font-semibold text-off-white text-lg mb-4">
                    Deliverables
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.deliverables.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-3 text-warm-gray font-inter"
                      >
                        <span
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ backgroundColor: project.color }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tools Used */}
              {project.tools && (
                <div>
                  <h3 className="font-space font-semibold text-off-white text-lg mb-4">
                    Tools Used
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {project.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-white/5 rounded-full text-warm-gray font-inter text-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Modal>
  );
};

export default ProjectModal;
