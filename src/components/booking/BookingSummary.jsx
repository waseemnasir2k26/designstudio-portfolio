import React from 'react';
import { motion } from 'framer-motion';
import { HiPencil, HiCreditCard, HiShieldCheck } from 'react-icons/hi2';
import { useBooking } from '../../hooks/useBooking';
import { formatCurrency, formatDate, truncateText } from '../../utils/helpers';
import { timeSlots } from '../../data/availableSlots';

const BookingSummary = ({ onEditStep }) => {
  const {
    selectedService,
    selectedPackage,
    selectedDate,
    selectedTime,
    clientInfo,
    totalAmount,
    depositAmount,
  } = useBooking();

  const serviceName = selectedService?.title || selectedPackage?.name || 'Not selected';
  const timeLabel = timeSlots.find((s) => s.value === selectedTime)?.time || selectedTime;

  const summaryItems = [
    {
      label: 'Service/Package',
      value: serviceName,
      subValue: formatCurrency(totalAmount),
      editStep: 1,
    },
    {
      label: 'Date & Time',
      value: selectedDate ? formatDate(selectedDate, { weekday: 'short' }) : 'Not selected',
      subValue: timeLabel,
      editStep: 2,
    },
    {
      label: 'Contact',
      value: clientInfo.name || 'Not provided',
      subValue: clientInfo.email,
      editStep: 3,
    },
    {
      label: 'Project Brief',
      value: truncateText(clientInfo.projectDetails, 100) || 'Not provided',
      editStep: 3,
    },
  ];

  return (
    <div>
      <h2 className="font-space font-bold text-2xl md:text-3xl text-off-white mb-2">
        Review Your Booking
      </h2>
      <p className="text-warm-gray font-inter mb-10">
        Please review your booking details before proceeding to payment.
      </p>

      {/* Summary Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/[0.02] rounded-3xl border border-white/5 overflow-hidden"
      >
        {/* Summary Items */}
        <div className="divide-y divide-white/5">
          {summaryItems.map((item, index) => (
            <div key={index} className="p-6 flex items-start justify-between gap-4">
              <div className="flex-1">
                <p className="text-warm-gray text-sm font-inter mb-1">{item.label}</p>
                <p className="text-off-white font-space font-medium">{item.value}</p>
                {item.subValue && (
                  <p className="text-electric-violet text-sm font-inter mt-1">
                    {item.subValue}
                  </p>
                )}
              </div>
              <button
                onClick={() => onEditStep(item.editStep)}
                className="flex items-center gap-2 text-warm-gray hover:text-electric-violet transition-colors text-sm font-inter"
                aria-label={`Edit ${item.label}`}
              >
                <HiPencil className="w-4 h-4" />
                <span>Edit</span>
              </button>
            </div>
          ))}
        </div>

        {/* Deposit Notice */}
        <div className="p-6 bg-electric-violet/10 border-t border-electric-violet/20">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-electric-violet/20 flex items-center justify-center flex-shrink-0">
              <HiCreditCard className="w-5 h-5 text-electric-violet" />
            </div>
            <div>
              <h3 className="font-space font-semibold text-off-white mb-1">
                Deposit Required
              </h3>
              <p className="text-warm-gray font-inter text-sm mb-3">
                A 30% deposit is required to confirm your booking. The remaining balance
                is due upon project completion.
              </p>
              <div className="flex items-center gap-6">
                <div>
                  <p className="text-warm-gray text-xs font-inter">Total</p>
                  <p className="text-off-white font-space font-semibold text-lg">
                    {formatCurrency(totalAmount)}
                  </p>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div>
                  <p className="text-warm-gray text-xs font-inter">Deposit (30%)</p>
                  <p className="text-electric-violet font-space font-bold text-2xl">
                    {formatCurrency(depositAmount)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Security Note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-8 flex items-center gap-3 text-warm-gray"
      >
        <HiShieldCheck className="w-5 h-5 text-electric-violet flex-shrink-0" />
        <p className="text-sm font-inter">
          Your payment is secured by Stripe. We never store your card details.
        </p>
      </motion.div>
    </div>
  );
};

export default BookingSummary;
