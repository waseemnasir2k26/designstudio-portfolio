import React, { Suspense, lazy, useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence, motion } from 'framer-motion';
import { Toaster } from 'react-hot-toast';

import { BookingProvider } from './context/BookingContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Lazy load pages for code splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const BookingPage = lazy(() => import('./pages/BookingPage'));
const PaymentPage = lazy(() => import('./pages/PaymentPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PaymentSuccess = lazy(() => import('./components/payment/PaymentSuccess'));

// Loading spinner component
const LoadingSpinner = () => (
  <div className="min-h-screen bg-jet-black flex items-center justify-center">
    <div className="relative">
      <div className="w-16 h-16 border-4 border-electric-violet/20 rounded-full"></div>
      <div className="w-16 h-16 border-4 border-electric-violet border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
    </div>
  </div>
);

// Page transition wrapper
const PageTransition = ({ children }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

// Custom cursor component
const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if touch device
    const checkTouchDevice = () => {
      setIsTouchDevice(
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0
      );
    };
    checkTouchDevice();

    if (isTouchDevice) return;

    const dot = dotRef.current;
    const ring = ringRef.current;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dot) {
        dot.style.left = `${mouseX - 4}px`;
        dot.style.top = `${mouseY - 4}px`;
      }

      setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Smooth ring follow
    const animateRing = () => {
      ringX += (mouseX - ringX - 20) * 0.15;
      ringY += (mouseY - ringY - 20) * 0.15;

      if (ring) {
        ring.style.left = `${ringX}px`;
        ring.style.top = `${ringY}px`;
      }

      requestAnimationFrame(animateRing);
    };
    animateRing();

    // Handle hover states
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <>
      <div
        ref={dotRef}
        className={`cursor-dot ${isVisible ? 'opacity-100' : 'opacity-0'} ${
          isHovering ? 'scale-50' : 'scale-100'
        }`}
        style={{ transition: 'opacity 0.3s, transform 0.15s' }}
      />
      <div
        ref={ringRef}
        className={`cursor-ring ${isVisible ? 'opacity-100' : 'opacity-0'} ${
          isHovering ? 'scale-150 border-hot-coral' : 'scale-100 border-electric-violet'
        }`}
        style={{ transition: 'opacity 0.3s, transform 0.2s, border-color 0.2s' }}
      />
    </>
  );
};

// Scroll to top on route change
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return null;
};

// Main app content with routes
const AppContent = () => {
  const location = useLocation();
  const isPaymentSuccessPage = location.pathname === '/payment/success';

  return (
    <>
      <ScrollToTop />
      {!isPaymentSuccessPage && <Navbar />}
      <Suspense fallback={<LoadingSpinner />}>
        <PageTransition>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/payment/success" element={<PaymentSuccess />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </PageTransition>
      </Suspense>
      {!isPaymentSuccessPage && <Footer />}
    </>
  );
};

function App() {
  return (
    <HelmetProvider>
      <BookingProvider>
        <Router>
          <div className="App relative">
            <CustomCursor />
            <AppContent />
            <Toaster
              position="bottom-right"
              toastOptions={{
                duration: 4000,
                style: {
                  background: '#1a1a1a',
                  color: '#FAF8F5',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  padding: '16px',
                  fontFamily: 'Inter, sans-serif',
                },
                success: {
                  iconTheme: {
                    primary: '#7C3AED',
                    secondary: '#FAF8F5',
                  },
                },
                error: {
                  iconTheme: {
                    primary: '#FF6B6B',
                    secondary: '#FAF8F5',
                  },
                },
              }}
            />
          </div>
        </Router>
      </BookingProvider>
    </HelmetProvider>
  );
}

export default App;
