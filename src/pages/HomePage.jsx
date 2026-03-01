import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/home/Hero';
import AboutPreview from '../components/home/AboutPreview';
import FeaturedWork from '../components/home/FeaturedWork';
import ServicesOverview from '../components/home/ServicesOverview';
import ProcessSteps from '../components/home/ProcessSteps';
import TestimonialsSlider from '../components/home/TestimonialsSlider';
import CTABanner from '../components/home/CTABanner';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>STUDIO. | Creative Graphic Design & Brand Identity</title>
        <meta
          name="description"
          content="Crafting visual experiences that speak. I'm a multidisciplinary graphic designer specializing in brand identity, web design, print, and motion graphics."
        />
        <meta property="og:title" content="STUDIO. | Creative Graphic Design & Brand Identity" />
        <meta
          property="og:description"
          content="Crafting visual experiences that speak. Brand Identity, Web Design, Print, Motion Graphics."
        />
        <meta name="twitter:title" content="STUDIO. | Creative Graphic Design & Brand Identity" />
        <meta
          name="twitter:description"
          content="Crafting visual experiences that speak. Brand Identity, Web Design, Print, Motion Graphics."
        />
      </Helmet>

      <main id="main-content">
        <Hero />
        <AboutPreview />
        <FeaturedWork />
        <ServicesOverview />
        <ProcessSteps />
        <TestimonialsSlider />
        <CTABanner />
      </main>
    </>
  );
};

export default HomePage;
