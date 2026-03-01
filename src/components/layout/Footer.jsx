import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaInstagram,
  FaBehance,
  FaDribbble,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';
import { HiArrowUp } from 'react-icons/hi2';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/portfolio' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Book a Session', path: '/booking' },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: FaInstagram, url: 'https://instagram.com/designstudio' },
    { name: 'Behance', icon: FaBehance, url: 'https://behance.net/designstudio' },
    { name: 'Dribbble', icon: FaDribbble, url: 'https://dribbble.com/designstudio' },
    { name: 'LinkedIn', icon: FaLinkedinIn, url: 'https://linkedin.com/company/designstudio' },
    { name: 'Twitter', icon: FaTwitter, url: 'https://twitter.com/designstudio' },
  ];

  return (
    <footer className="bg-jet-black border-t border-white/5" role="contentinfo">
      {/* Main CTA Section */}
      <div className="container mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="font-space font-bold text-4xl md:text-5xl lg:text-6xl text-off-white mb-6">
            Let's Create Something
            <br />
            <span className="gradient-text">Amazing Together</span>
          </h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 font-space font-medium text-xl text-electric-violet hover:text-hot-coral transition-colors duration-300 group"
            >
              <span className="hover-underline">Get in Touch</span>
              <span className="transform transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer Links Section */}
      <div className="border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-12 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {/* Navigation Links */}
            <div>
              <h3 className="font-space font-semibold text-off-white text-sm uppercase tracking-wider mb-6">
                Navigation
              </h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-warm-gray hover:text-off-white transition-colors duration-300 font-inter"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-space font-semibold text-off-white text-sm uppercase tracking-wider mb-6">
                Social
              </h3>
              <ul className="space-y-3">
                {socialLinks.map((social) => (
                  <li key={social.name}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 text-warm-gray hover:text-off-white transition-colors duration-300 font-inter group"
                      aria-label={social.name}
                    >
                      <social.icon className="w-5 h-5 text-electric-violet group-hover:text-hot-coral transition-colors" />
                      <span>{social.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-space font-semibold text-off-white text-sm uppercase tracking-wider mb-6">
                Contact
              </h3>
              <ul className="space-y-3 font-inter">
                <li>
                  <a
                    href="mailto:hello@designstudio.com"
                    className="text-warm-gray hover:text-off-white transition-colors duration-300"
                  >
                    hello@designstudio.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+15559876543"
                    className="text-warm-gray hover:text-off-white transition-colors duration-300"
                  >
                    (555) 987-6543
                  </a>
                </li>
                <li className="text-warm-gray pt-4">
                  <p>New York, NY</p>
                  <p className="text-sm mt-1">Available Worldwide</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-warm-gray text-sm font-inter">
              <span>© 2025 STUDIO.</span>
              <span className="hidden md:inline">•</span>
              <span>All rights reserved.</span>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6 text-sm font-inter">
              <Link
                to="#"
                className="text-warm-gray hover:text-off-white transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                to="#"
                className="text-warm-gray hover:text-off-white transition-colors duration-300"
              >
                Terms
              </Link>
            </div>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-warm-gray hover:text-electric-violet transition-colors duration-300"
              aria-label="Back to top"
            >
              <span className="text-sm font-inter">Back to Top</span>
              <HiArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
