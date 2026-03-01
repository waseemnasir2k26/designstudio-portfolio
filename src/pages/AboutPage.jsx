import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi2';
import {
  SiFigma,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobeaftereffects,
  SiAdobepremierepro,
  SiAdobeindesign,
  SiSketch,
  SiWebflow,
} from 'react-icons/si';
import SectionHeading from '../components/shared/SectionHeading';

const tools = [
  { name: 'Figma', icon: SiFigma },
  { name: 'Illustrator', icon: SiAdobeillustrator },
  { name: 'Photoshop', icon: SiAdobephotoshop },
  { name: 'After Effects', icon: SiAdobeaftereffects },
  { name: 'Premiere Pro', icon: SiAdobepremierepro },
  { name: 'InDesign', icon: SiAdobeindesign },
  { name: 'Sketch', icon: SiSketch },
  { name: 'Webflow', icon: SiWebflow },
];

const timeline = [
  {
    year: '2024',
    title: 'Independent Studio',
    description: 'Launched STUDIO. as a full-service design practice, working with clients worldwide.',
  },
  {
    year: '2021',
    title: 'Senior Designer at Momentum Agency',
    description: 'Led brand identity projects for Fortune 500 companies and emerging startups.',
  },
  {
    year: '2018',
    title: 'Designer at Creative Co.',
    description: 'Developed digital and print designs for diverse range of industries.',
  },
  {
    year: '2016',
    title: 'Started Design Career',
    description: 'Began journey as a junior designer, learning the fundamentals of visual communication.',
  },
];

const awards = [
  { year: '2024', title: 'Awwwards Site of the Day', project: 'TechVault Website' },
  { year: '2023', title: 'Brand New Notable', project: 'Bloom Cosmetics Rebrand' },
  { year: '2023', title: 'CSS Design Awards', project: 'NovaTech Platform' },
  { year: '2022', title: 'Dieline Awards Finalist', project: 'Rooted Co. Packaging' },
];

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About | STUDIO. - The Designer Behind the Pixels</title>
        <meta
          name="description"
          content="Learn about my design journey, philosophy, and the tools I use. 8+ years crafting visual stories for brands worldwide."
        />
        <meta property="og:title" content="About | STUDIO. - The Designer Behind the Pixels" />
        <meta
          property="og:description"
          content="Learn about my design journey, philosophy, and the tools I use."
        />
      </Helmet>

      <main id="main-content" className="min-h-screen bg-jet-black pt-32">
        {/* Hero Section */}
        <section className="pb-24">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <span className="section-tag block">ABOUT ME</span>
              <h1 className="font-space font-bold text-5xl md:text-6xl lg:text-7xl text-off-white leading-tight mb-6">
                Designer, Creator,{' '}
                <span className="font-playfair italic gradient-text">Problem Solver</span>
              </h1>
              <p className="text-warm-gray font-inter text-xl">
                I transform ideas into memorable visual experiences.
              </p>
            </motion.div>

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <div className="aspect-[16/9] rounded-3xl overflow-hidden bg-gradient-to-br from-electric-violet/30 via-purple-600/20 to-hot-coral/20 relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(124,58,237,0.4),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,107,107,0.3),transparent_50%)]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-off-white/30 font-space text-lg tracking-widest uppercase">
                    Designer Photo
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Bio Section */}
        <section className="py-24 border-t border-white/5">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-space font-bold text-3xl md:text-4xl text-off-white mb-8">
                  My Story
                </h2>
                <div className="space-y-6 text-warm-gray font-inter text-lg leading-relaxed">
                  <p>
                    I've always been fascinated by the power of visual communication.
                    Growing up, I spent hours drawing, experimenting with typography,
                    and wondering why some designs just felt right while others didn't.
                  </p>
                  <p>
                    That curiosity led me to pursue graphic design professionally over
                    8 years ago. Since then, I've had the privilege of working with
                    startups finding their voice, established brands seeking reinvention,
                    and everything in between.
                  </p>
                  <p>
                    My philosophy is simple: great design isn't just about aesthetics—it's
                    about solving problems, telling stories, and creating meaningful
                    connections between brands and their audiences.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="font-space font-bold text-3xl md:text-4xl text-off-white mb-8">
                  My Approach
                </h2>
                <div className="space-y-6 text-warm-gray font-inter text-lg leading-relaxed">
                  <p>
                    I believe every project deserves dedicated attention and a custom
                    approach. I don't apply cookie-cutter solutions—instead, I dive
                    deep into understanding your brand, your audience, and your goals.
                  </p>
                  <p>
                    Collaboration is at the heart of my process. I see my clients as
                    partners, and the best work happens when we're aligned and
                    communicating openly throughout the journey.
                  </p>
                  <p>
                    Whether it's a complete brand identity system or a single landing
                    page, I bring the same level of care, creativity, and strategic
                    thinking to every project.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills & Tools Section */}
        <section className="py-24 border-t border-white/5">
          <div className="container mx-auto px-6 lg:px-12">
            <SectionHeading
              tag="TOOLS & SKILLS"
              title="What I Work With"
              alignment="center"
            />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-12"
            >
              {tools.map((tool, index) => {
                const Icon = tool.icon;
                return (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col items-center p-6 bg-white/[0.02] rounded-2xl border border-white/5 hover:border-electric-violet/30 transition-colors duration-300"
                  >
                    <Icon className="w-10 h-10 text-electric-violet mb-3" />
                    <span className="text-off-white font-space font-medium text-sm">
                      {tool.name}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="py-24 border-t border-white/5">
          <div className="container mx-auto px-6 lg:px-12">
            <SectionHeading
              tag="EXPERIENCE"
              title="My Journey"
              alignment="center"
            />

            <div className="max-w-2xl mx-auto mt-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-12 pb-12 last:pb-0"
                >
                  {/* Timeline line */}
                  {index !== timeline.length - 1 && (
                    <div className="absolute left-[19px] top-8 bottom-0 w-px bg-white/10" />
                  )}

                  {/* Timeline dot */}
                  <div className="absolute left-0 top-2 w-10 h-10 rounded-full bg-electric-violet/20 border-2 border-electric-violet flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-electric-violet" />
                  </div>

                  <div>
                    <span className="text-electric-violet font-space font-semibold text-sm">
                      {item.year}
                    </span>
                    <h3 className="font-space font-bold text-xl text-off-white mt-1 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-warm-gray font-inter">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="py-24 border-t border-white/5">
          <div className="container mx-auto px-6 lg:px-12">
            <SectionHeading
              tag="RECOGNITION"
              title="Awards & Features"
              alignment="center"
            />

            <div className="max-w-2xl mx-auto mt-12 space-y-4">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-6 bg-white/[0.02] rounded-2xl border border-white/5"
                >
                  <div>
                    <h3 className="font-space font-semibold text-off-white mb-1">
                      {award.title}
                    </h3>
                    <p className="text-warm-gray text-sm font-inter">{award.project}</p>
                  </div>
                  <span className="text-electric-violet font-space font-medium">
                    {award.year}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 border-t border-white/5">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto"
            >
              <h2 className="font-space font-bold text-4xl md:text-5xl text-off-white mb-6">
                Let's Work Together
              </h2>
              <p className="text-warm-gray font-inter text-lg mb-10">
                Ready to bring your vision to life? I'd love to hear about your project.
              </p>
              <Link
                to="/booking"
                className="inline-flex items-center gap-3 px-8 py-4 bg-electric-violet text-off-white font-space font-semibold rounded-full hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] hover:scale-105 transition-all duration-300"
              >
                <span>Book a Session</span>
                <HiArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutPage;
