import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiCalendar, HiClock, HiEnvelope, HiCurrencyDollar } from 'react-icons/hi2';
import { useBooking } from '../../hooks/useBooking';
import { formatCurrency, formatDate } from '../../utils/helpers';
import { timeSlots } from '../../data/availableSlots';

const BookingConfirmation = () => {
  const {
    selectedService,
    selectedPackage,
    selectedDate,
    selectedTime,
    clientInfo,
    depositAmount,
    bookingRef,
  } = useBooking();

  const serviceName = selectedService?.title || selectedPackage?.name;
  const timeLabel = timeSlots.find((s) => s.value === selectedTime)?.time || selectedTime;

  return (
    <div className="text-center max-w-lg mx-auto">
      {/* Animated Checkmark */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="mb-8"
      >
        <svg
          className="w-24 h-24 mx-auto"
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
        <h1 className="font-space font-bold text-3xl md:text-4xl text-off-white mb-4">
          Booking Confirmed!
        </h1>
        <p className="text-warm-gray font-inter text-lg mb-8">
          Thank you for your booking. We're excited to work with you!
        </p>
      </motion.div>

      {/* Booking Details Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white/[0.02] rounded-2xl border border-white/5 p-8 mb-8 text-left"
      >
        {/* Booking Reference */}
        <div className="text-center pb-6 mb-6 border-b border-white/5">
          <p className="text-warm-gray text-sm font-inter mb-1">Booking Reference</p>
          <p className="font-space font-bold text-2xl text-electric-violet">
            {bookingRef}
          </p>
        </div>

        {/* Details Grid */}
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-electric-violet/10 flex items-center justify-center flex-shrink-0">
              <HiCalendar className="w-5 h-5 text-electric-violet" />
            </div>
            <div>
              <p className="text-warm-gray text-sm font-inter">Date</p>
              <p className="text-off-white font-space font-medium">
                {selectedDate ? formatDate(selectedDate) : 'N/A'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-electric-violet/10 flex items-center justify-center flex-shrink-0">
              <HiClock className="w-5 h-5 text-electric-violet" />
            </div>
            <div>
              <p className="text-warm-gray text-sm font-inter">Time</p>
              <p className="text-off-white font-space font-medium">{timeLabel} EST</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-electric-violet/10 flex items-center justify-center flex-shrink-0">
              <HiCurrencyDollar className="w-5 h-5 text-electric-violet" />
            </div>
            <div>
              <p className="text-warm-gray text-sm font-inter">Amount Paid</p>
              <p className="text-off-white font-space font-medium">
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
        <p className="font-inter text-sm">
          Confirmation email sent to <span className="text-off-white">{clientInfo.email}</span>
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

      {/* Coming Soon Note */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="mt-4 text-warm-gray/50 text-xs font-inter"
      >
        Booking management coming soon
      </motion.p>
    </div>
  );
};

export default BookingConfirmation;
