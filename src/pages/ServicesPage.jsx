import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { services } from '../data/services';
import ServiceCard from '../components/services/ServiceCard';
import PricingTable from '../components/services/PricingTable';
import SectionHeading from '../components/shared/SectionHeading';

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Services & Pricing | STUDIO.</title>
        <meta
          name="description"
          content="Professional graphic design services including brand identity, web design, print design, and motion graphics. Flexible pricing packages to fit your needs."
        />
        <meta property="og:title" content="Services & Pricing | STUDIO." />
        <meta
          property="og:description"
          content="Professional graphic design services including brand identity, web design, print design, and motion graphics."
        />
      </Helmet>

      <main id="main-content" className="min-h-screen bg-jet-black pt-32">
        {/* Hero Section */}
        <section className="pb-16">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <SectionHeading
                tag="SERVICES"
                title="What I Can Do For You"
                subtitle="From initial concept to final delivery, I offer comprehensive design services tailored to your unique needs and goals."
                alignment="center"
              />
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section>
          <div className="container mx-auto px-6 lg:px-12">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <PricingTable />

        {/* FAQ Teaser */}
        <section className="py-24 lg:py-32 bg-jet-black border-t border-white/5">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="font-space font-bold text-3xl md:text-4xl text-off-white mb-6">
                Still Have Questions?
              </h2>
              <p className="text-warm-gray font-inter text-lg mb-8">
                I'm happy to discuss your project in detail and provide a custom quote
                based on your specific needs.
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-off-white text-off-white font-space font-semibold rounded-full hover:bg-off-white hover:text-jet-black transition-all duration-300"
              >
                Get in Touch
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ServicesPage;
