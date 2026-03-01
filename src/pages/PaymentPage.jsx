import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { HiArrowLeft } from 'react-icons/hi2';
import { useBooking } from '../hooks/useBooking';
import PaymentSummary from '../components/payment/PaymentSummary';
import PaymentForm from '../components/payment/PaymentForm';

const PaymentPage = () => {
  const navigate = useNavigate();
  const { selectedService, selectedPackage, selectedDate, clientInfo } = useBooking();

  // Redirect if booking data is incomplete
  useEffect(() => {
    if (!selectedService && !selectedPackage) {
      navigate('/booking');
    } else if (!selectedDate) {
      navigate('/booking');
    } else if (!clientInfo.name || !clientInfo.email) {
      navigate('/booking');
    }
  }, [selectedService, selectedPackage, selectedDate, clientInfo, navigate]);

  // If data is incomplete, don't render the page
  if ((!selectedService && !selectedPackage) || !selectedDate || !clientInfo.name) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>Payment | STUDIO.</title>
        <meta
          name="description"
          content="Complete your booking by making a secure payment. Your payment is protected by Stripe."
        />
        <meta property="og:title" content="Payment | STUDIO." />
        <meta
          property="og:description"
          content="Complete your booking with a secure payment."
        />
      </Helmet>

      <main id="main-content" className="min-h-screen bg-jet-black pt-32 pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate('/booking')}
            className="flex items-center gap-2 text-warm-gray hover:text-off-white font-space font-medium transition-colors mb-8"
          >
            <HiArrowLeft className="w-5 h-5" />
            <span>Back to Booking</span>
          </motion.button>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="font-space font-bold text-4xl md:text-5xl text-off-white mb-4">
              Complete Your Booking
            </h1>
            <p className="text-warm-gray font-inter text-lg">
              Make a secure payment to confirm your session.
            </p>
          </motion.div>

          {/* Payment Layout */}
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
              {/* Order Summary */}
              <div className="lg:col-span-2 order-2 lg:order-1">
                <div className="lg:sticky lg:top-32">
                  <PaymentSummary />
                </div>
              </div>

              {/* Payment Form */}
              <div className="lg:col-span-3 order-1 lg:order-2">
                <div className="bg-white/[0.01] rounded-3xl border border-white/5 p-8 md:p-10">
                  <PaymentForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PaymentPage;
