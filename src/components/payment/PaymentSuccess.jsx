import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiCalendar, HiClock, HiEnvelope, HiCurrencyDollar } from 'react-icons/hi2';
import { useBooking } from '../../hooks/useBooking';
import { formatCurrency, formatDate } from '../../utils/helpers';
import { timeSlots } from '../../data/availableSlots';

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const {
    selectedDate,
    selectedTime,
    clientInfo,
    depositAmount,
    bookingRef,
    paymentComplete,
  } = useBooking();

  // Redirect if no payment was made
  useEffect(() => {
    if (!paymentComplete) {
      navigate('/booking');
    }
  }, [paymentComplete, navigate]);

  const timeLabel = timeSlots.find((s) => s.value === selectedTime)?.time || selectedTime;

  if (!paymentComplete) {
    return null;
  }

  return (
    <div className="min-h-screen bg-jet-black flex items-center justify-center px-6 py-24">
      <div className="max-w-lg w-full text-center">
        {/* Animated Checkmark */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="mb-8"
        >
          <svg
            className="w-28 h-28 mx-auto"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              className="checkmark-circle"
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#7C3AED"
              strokeWidth="3"
            />
            <path
              className="checkmark-check"
              fill="none"
              stroke="#7C3AED"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M30 50 L45 65 L70 35"
            />
          </svg>
        </motion.div>

        {/* Success Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="font-space font-bold text-4xl md:text-5xl text-off-white mb-4">
            Booking Confirmed!
          </h1>
          <p className="text-warm-gray font-inter text-lg mb-10">
            Thank you for your payment. We're excited to work with you!
          </p>
        </motion.div>

        {/* Booking Details Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white/[0.02] rounded-3xl border border-white/5 p-8 mb-10 text-left"
        >
          {/* Booking Reference */}
          <div className="text-center pb-6 mb-6 border-b border-white/5">
            <p className="text-warm-gray text-sm font-inter mb-1">Booking Reference</p>
            <p className="font-space font-bold text-3xl text-electric-violet">
              {bookingRef}
            </p>
          </div>

          {/* Details Grid */}
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-electric-violet/10 flex items-center justify-center flex-shrink-0">
                <HiCalendar className="w-6 h-6 text-electric-violet" />
              </div>
              <div>
                <p className="text-warm-gray text-sm font-inter">Date</p>
                <p className="text-off-white font-space font-semibold text-lg">
                  {selectedDate ? formatDate(selectedDate) : 'N/A'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-electric-violet/10 flex items-center justify-center flex-shrink-0">
                <HiClock className="w-6 h-6 text-electric-violet" />
              </div>
              <div>
                <p className="text-warm-gray text-sm font-inter">Time</p>
                <p className="text-off-white font-space font-semibold text-lg">
                  {timeLabel} EST
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-electric-violet/10 flex items-center justify-center flex-shrink-0">
                <HiCurrencyDollar className="w-6 h-6 text-electric-violet" />
              </div>
              <div>
                <p className="text-warm-gray text-sm font-inter">Deposit Paid</p>
                <p className="text-off-white font-space font-semibold text-lg">
                  {formatCurrency(depositAmount)}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Email Confirmation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex items-center justify-center gap-3 mb-10 text-warm-gray"
        >
          <HiEnvelope className="w-5 h-5 text-electric-violet" />
          <p className="font-inter">
            Confirmation sent to{' '}
            <span className="text-off-white font-medium">{clientInfo.email}</span>
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/"
            className="inline-flex items-center justify-center px-8 py-4 bg-electric-violet text-off-white font-space font-semibold rounded-full hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] hover:scale-105 transition-all duration-300"
          >
            Back to Home
          </Link>
          <button
            disabled
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/20 text-warm-gray/50 font-space font-semibold rounded-full cursor-not-allowed"
            title="Coming soon"
          >
            View My Booking
          </button>
        </motion.div>

        {/* What's Next */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mt-12 p-6 bg-electric-violet/5 border border-electric-violet/10 rounded-2xl text-left"
        >
          <h3 className="font-space font-semibold text-off-white mb-3">What's Next?</h3>
          <ul className="space-y-2 text-warm-gray font-inter text-sm">
            <li className="flex items-start gap-2">
              <span className="text-electric-violet">1.</span>
              Check your email for the calendar invite
            </li>
            <li className="flex items-start gap-2">
              <span className="text-electric-violet">2.</span>
              Prepare any reference materials or inspiration
            </li>
            <li className="flex items-start gap-2">
              <span className="text-electric-violet">3.</span>
              Join the video call at your scheduled time
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
