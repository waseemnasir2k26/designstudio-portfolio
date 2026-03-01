import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineBars3, HiOutlineXMark } from 'react-icons/hi2';
import Button from '../shared/Button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Work', path: '/portfolio' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const mobileNavItemVariants = {
    closed: {
      opacity: 0,
      y: 20,
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-jet-black/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <nav
          className="container mx-auto px-6 lg:px-12"
          aria-label="Main navigation"
        >
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link
              to="/"
              className="relative z-50 font-space font-bold text-2xl text-off-white hover:opacity-80 transition-opacity"
              aria-label="STUDIO. Home"
            >
              STUDIO
              <span className="text-electric-violet">.</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-12">
              <ul className="flex items-center gap-8">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `relative font-inter font-medium text-base transition-colors duration-300 hover-underline ${
                          isActive
                            ? 'text-off-white active-underline'
                            : 'text-warm-gray hover:text-off-white'
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <Button
                to="/booking"
                variant="primary"
                size="md"
                className="animate-pulse-glow"
              >
                Book a Session
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative z-50 lg:hidden p-2 text-off-white hover:text-electric-violet transition-colors"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? (
                <HiOutlineXMark className="w-8 h-8" />
              ) : (
                <HiOutlineBars3 className="w-8 h-8" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="fixed inset-0 z-40 lg:hidden bg-jet-black flex flex-col justify-center items-center"
          >
            <nav aria-label="Mobile navigation" className="w-full px-6">
              <ul className="flex flex-col items-center gap-8">
                {navLinks.map((link, index) => (
                  <motion.li key={link.path} variants={mobileNavItemVariants}>
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `font-space font-bold text-4xl md:text-5xl transition-colors duration-300 ${
                          isActive
                            ? 'text-electric-violet'
                            : 'text-off-white hover:text-electric-violet'
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </motion.li>
                ))}
                <motion.li variants={mobileNavItemVariants} className="mt-8">
                  <Button
                    to="/booking"
                    variant="primary"
                    size="lg"
                    className="animate-pulse-glow"
                  >
                    Book a Session
                  </Button>
                </motion.li>
              </ul>
            </nav>

            {/* Social Links in Mobile Menu */}
            <motion.div
              variants={mobileNavItemVariants}
              className="absolute bottom-12 flex gap-6"
            >
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm-gray hover:text-electric-violet transition-colors"
                aria-label="Instagram"
              >
                Instagram
              </a>
              <a
                href="https://behance.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm-gray hover:text-electric-violet transition-colors"
                aria-label="Behance"
              >
                Behance
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm-gray hover:text-electric-violet transition-colors"
                aria-label="Dribbble"
              >
                Dribbble
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
