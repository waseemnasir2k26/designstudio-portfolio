import React from 'react';
import { motion } from 'framer-motion';
import {
  HiOutlineLightBulb,
  HiOutlinePaintBrush,
  HiOutlineSparkles,
  HiOutlineRocketLaunch,
} from 'react-icons/hi2';
import SectionHeading from '../shared/SectionHeading';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We discuss your vision, goals, and project scope to understand exactly what you need.',
    icon: HiOutlineLightBulb,
  },
  {
    number: '02',
    title: 'Concept',
    description: 'I create initial concepts and mood boards for your review and feedback.',
    icon: HiOutlinePaintBrush,
  },
  {
    number: '03',
    title: 'Design',
    description: 'Refining the chosen direction into polished, pixel-perfect deliverables.',
    icon: HiOutlineSparkles,
  },
  {
    number: '04',
    title: 'Deliver',
    description: 'Final files delivered with style guide and full support for implementation.',
    icon: HiOutlineRocketLaunch,
  },
];

const ProcessStep = ({ step, index, totalSteps }) => {
  const Icon = step.icon;
  const isLast = index === totalSteps - 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative flex flex-col items-center text-center"
    >
      {/* Step Number */}
      <div className="relative mb-6">
        <span className="font-space font-bold text-7xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-b from-electric-violet/30 to-transparent">
          {step.number}
        </span>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-electric-violet/10 flex items-center justify-center">
            <Icon className="w-8 h-8 text-electric-violet" />
          </div>
        </div>
      </div>

      {/* Content */}
      <h3 className="font-space font-bold text-xl md:text-2xl text-off-white mb-3">
        {step.title}
      </h3>
      <p className="font-inter text-warm-gray leading-relaxed max-w-xs">
        {step.description}
      </p>

      {/* Connector Line (hidden on mobile, visible on desktop) */}
      {!isLast && (
        <div className="hidden lg:block absolute top-12 left-[calc(50%+60px)] w-[calc(100%-120px)] h-[2px]">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
            className="h-full bg-gradient-to-r from-electric-violet to-electric-violet/20 origin-left"
          />
        </div>
      )}
    </motion.div>
  );
};

const ProcessSteps = () => {
  return (
    <section
      className="py-24 lg:py-32 bg-jet-black relative overflow-hidden"
      aria-labelledby="process-heading"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-electric-violet/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-hot-coral/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <SectionHeading
          tag="MY PROCESS"
          title="How I Work"
          alignment="center"
        />

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6 mt-16">
          {steps.map((step, index) => (
            <ProcessStep
              key={step.number}
              step={step}
              index={index}
              totalSteps={steps.length}
            />
          ))}
        </div>

        {/* Mobile vertical connector (visible only on mobile) */}
        <div className="lg:hidden absolute left-1/2 top-[280px] bottom-[100px] w-[2px] -translate-x-1/2 bg-gradient-to-b from-electric-violet via-electric-violet/50 to-transparent opacity-20 pointer-events-none" />
      </div>
    </section>
  );
};

export default ProcessSteps;
