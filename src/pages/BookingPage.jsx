import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { HiCheck, HiArrowLeft, HiArrowRight } from 'react-icons/hi2';
import { useBooking } from '../hooks/useBooking';
import ServiceSelector from '../components/booking/ServiceSelector';
import BookingCalendar from '../components/booking/BookingCalendar';
import BookingForm from '../components/booking/BookingForm';
import BookingSummary from '../components/booking/BookingSummary';

const steps = [
  { id: 1, name: 'Select Service', shortName: 'Service' },
  { id: 2, name: 'Choose Date', shortName: 'Date' },
  { id: 3, name: 'Project Details', shortName: 'Details' },
  { id: 4, name: 'Review', shortName: 'Review' },
];

const ProgressBar = ({ currentStep }) => {
  return (
    <div className="mb-12">
      {/* Desktop Progress */}
      <div className="hidden md:flex items-center justify-center">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className="flex items-center">
              {/* Step Circle */}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-space font-semibold text-sm transition-all duration-300 ${
                  currentStep > step.id
                    ? 'bg-electric-violet text-off-white'
                    : currentStep === step.id
                    ? 'bg-electric-violet text-off-white shadow-[0_0_20px_rgba(124,58,237,0.5)]'
                    : 'bg-white/5 text-warm-gray'
                }`}
              >
                {currentStep > step.id ? (
                  <HiCheck className="w-5 h-5" />
                ) : (
                  step.id
                )}
              </div>
              {/* Step Name */}
              <span
                className={`ml-3 font-space text-sm transition-colors duration-300 ${
                  currentStep >= step.id ? 'text-off-white' : 'text-warm-gray'
                }`}
              >
                {step.name}
              </span>
            </div>

            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div className="w-16 lg:w-24 h-0.5 mx-4 bg-white/10 relative overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: currentStep > step.id ? '100%' : '0%' }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-electric-violet"
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Mobile Progress */}
      <div className="md:hidden">
        <div className="flex justify-between mb-2">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`flex-1 h-1 mx-1 rounded-full transition-colors duration-300 ${
                currentStep >= step.id ? 'bg-electric-violet' : 'bg-white/10'
              }`}
            />
          ))}
        </div>
        <p className="text-center text-warm-gray font-inter text-sm">
          Step {currentStep} of {steps.length}: {steps[currentStep - 1].name}
        </p>
      </div>
    </div>
  );
};

const BookingPage = () => {
  const navigate = useNavigate();
  const {
    currentStep,
    setCurrentStep,
    nextStep,
    prevStep,
    canProceedToStep,
  } = useBooking();

  const handleNext = () => {
    if (currentStep === 4) {
      // Proceed to payment
      navigate('/payment');
    } else {
      nextStep();
    }
  };

  const handleBack = () => {
    if (currentStep === 1) {
      navigate(-1);
    } else {
      prevStep();
    }
  };

  const handleEditStep = (step) => {
    setCurrentStep(step);
  };

  const canProceed = canProceedToStep(currentStep + 1);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <ServiceSelector />;
      case 2:
        return <BookingCalendar />;
      case 3:
        return <BookingForm />;
      case 4:
        return <BookingSummary onEditStep={handleEditStep} />;
      default:
        return <ServiceSelector />;
    }
  };

  return (
    <>
      <Helmet>
        <title>Book a Session | STUDIO.</title>
        <meta
          name="description"
          content="Book a discovery call to discuss your design project. Choose your service, pick a date, and let's create something amazing together."
        />
        <meta property="og:title" content="Book a Session | STUDIO." />
        <meta
          property="og:description"
          content="Book a discovery call to discuss your design project."
        />
      </Helmet>

      <main id="main-content" className="min-h-screen bg-jet-black pt-32 pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="font-space font-bold text-4xl md:text-5xl text-off-white mb-4">
              Book a Session
            </h1>
            <p className="text-warm-gray font-inter text-lg">
              Let's discuss your project and bring your vision to life.
            </p>
          </motion.div>

          {/* Progress Bar */}
          <ProgressBar currentStep={currentStep} />

          {/* Step Content */}
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/[0.01] rounded-3xl border border-white/5 p-8 md:p-12"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {renderStep()}
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between">
                <button
                  onClick={handleBack}
                  className="flex items-center gap-2 text-warm-gray hover:text-off-white font-space font-medium transition-colors"
                >
                  <HiArrowLeft className="w-5 h-5" />
                  <span>Back</span>
                </button>

                <motion.button
                  onClick={handleNext}
                  disabled={!canProceed}
                  whileHover={{ scale: canProceed ? 1.02 : 1 }}
                  whileTap={{ scale: canProceed ? 0.98 : 1 }}
                  className={`flex items-center gap-2 px-8 py-4 rounded-full font-space font-semibold transition-all duration-300 ${
                    canProceed
                      ? 'bg-electric-violet text-off-white hover:shadow-[0_0_30px_rgba(124,58,237,0.5)]'
                      : 'bg-white/5 text-warm-gray/50 cursor-not-allowed'
                  }`}
                >
                  <span>{currentStep === 4 ? 'Proceed to Payment' : 'Next'}</span>
                  <HiArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
};

export default BookingPage;
