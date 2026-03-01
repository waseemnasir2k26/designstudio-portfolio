import React from 'react';
import { motion } from 'framer-motion';
import { HiShieldCheck, HiLockClosed, HiCreditCard } from 'react-icons/hi2';
import { useBooking } from '../../hooks/useBooking';
import { formatCurrency, formatDate } from '../../utils/helpers';
import { timeSlots } from '../../data/availableSlots';

const PaymentSummary = () => {
  const {
    selectedService,
    selectedPackage,
    selectedDate,
    selectedTime,
    totalAmount,
    depositAmount,
  } = useBooking();

  const serviceName = selectedService?.title || selectedPackage?.name || 'Design Service';
  const timeLabel = timeSlots.find((s) => s.value === selectedTime)?.time || selectedTime;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      <h2 className="font-space font-bold text-xl text-off-white mb-6">
        Order Summary
      </h2>

      {/* Service Details */}
      <div className="bg-white/[0.02] rounded-2xl border border-white/5 p-6 mb-6">
        <div className="pb-4 mb-4 border-b border-white/5">
          <h3 className="font-space font-semibold text-off-white mb-1">
            {serviceName}
          </h3>
          <p className="text-warm-gray text-sm font-inter">
            Discovery call & project kickoff
          </p>
        </div>

        <div className="space-y-3 text-sm font-inter">
          <div className="flex justify-between">
            <span className="text-warm-gray">Date</span>
            <span className="text-off-white">
              {selectedDate ? formatDate(selectedDate, { weekday: 'short', month: 'short', day: 'numeric' }) : 'N/A'}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-warm-gray">Time</span>
            <span className="text-off-white">{timeLabel} EST</span>
          </div>
        </div>
      </div>

      {/* Pricing Breakdown */}
      <div className="bg-white/[0.02] rounded-2xl border border-white/5 p-6 mb-6">
        <div className="space-y-3 text-sm font-inter">
          <div className="flex justify-between">
            <span className="text-warm-gray">Subtotal</span>
            <span className="text-off-white">{formatCurrency(totalAmount)}</span>
          </div>
          <div className="flex justify-between text-warm-gray/60">
            <span>Remaining balance (due later)</span>
            <span>-{formatCurrency(totalAmount - depositAmount)}</span>
          </div>
          <div className="pt-3 mt-3 border-t border-white/5">
            <div className="flex justify-between">
              <span className="text-off-white font-space font-semibold">
                Deposit (30%)
              </span>
              <span className="text-electric-violet font-space font-bold text-xl">
                {formatCurrency(depositAmount)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Security Badges */}
      <div className="space-y-3">
        <div className="flex items-center gap-3 text-warm-gray">
          <HiShieldCheck className="w-5 h-5 text-electric-violet flex-shrink-0" />
          <span className="text-sm font-inter">Secure 256-bit SSL encryption</span>
        </div>
        <div className="flex items-center gap-3 text-warm-gray">
          <HiLockClosed className="w-5 h-5 text-electric-violet flex-shrink-0" />
          <span className="text-sm font-inter">PCI DSS compliant payment</span>
        </div>
        <div className="flex items-center gap-3 text-warm-gray">
          <HiCreditCard className="w-5 h-5 text-electric-violet flex-shrink-0" />
          <span className="text-sm font-inter">Powered by Stripe</span>
        </div>
      </div>

      {/* Payment Method Icons */}
      <div className="mt-6 pt-6 border-t border-white/5">
        <p className="text-warm-gray/60 text-xs font-inter mb-3">Accepted payment methods</p>
        <div className="flex items-center gap-3">
          <div className="px-3 py-2 bg-white/5 rounded text-warm-gray text-xs font-medium">
            VISA
          </div>
          <div className="px-3 py-2 bg-white/5 rounded text-warm-gray text-xs font-medium">
            Mastercard
          </div>
          <div className="px-3 py-2 bg-white/5 rounded text-warm-gray text-xs font-medium">
            AMEX
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PaymentSummary;
