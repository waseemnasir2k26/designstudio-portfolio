import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import toast from 'react-hot-toast';
import { useBooking } from '../../hooks/useBooking';
import { formatCurrency } from '../../utils/helpers';

// Initialize Stripe with test key
const stripePromise = loadStripe('pk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');

const cardElementOptions = {
  style: {
    base: {
      fontSize: '16px',
      color: '#FAF8F5',
      fontFamily: 'Inter, sans-serif',
      '::placeholder': {
        color: '#A8A29E',
      },
    },
    invalid: {
      color: '#FF6B6B',
      iconColor: '#FF6B6B',
    },
  },
};

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const { depositAmount, confirmBooking, completePayment } = useBooking();

  const [isProcessing, setIsProcessing] = useState(false);
  const [cardError, setCardError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);
    setCardError(null);

    // DEMO MODE: Simulate payment processing
    // In production, you would:
    // 1. Create a PaymentIntent on your backend
    // 2. Confirm the payment with stripe.confirmCardPayment()

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Confirm booking and complete payment in context
      confirmBooking();
      completePayment();

      toast.success('Payment successful!');
      navigate('/payment/success');
    } catch (error) {
      setCardError('Payment failed. Please try again.');
      toast.error('Payment failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleCardChange = (event) => {
    if (event.error) {
      setCardError(event.error.message);
    } else {
      setCardError(null);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="font-space font-bold text-xl text-off-white mb-6">
        Payment Details
      </h2>

      {/* Demo Notice */}
      <div className="mb-6 p-4 bg-electric-violet/10 border border-electric-violet/30 rounded-xl">
        <p className="text-off-white text-sm font-inter">
          <strong>Demo Mode:</strong> This is a demo. No real payment will be processed.
          Use test card number: 4242 4242 4242 4242
        </p>
      </div>

      {/* Card Element */}
      <div className="mb-6">
        <label className="block font-space font-medium text-off-white text-sm mb-3">
          Card Information
        </label>
        <div className="p-4 bg-white/[0.02] border border-white/10 rounded-xl focus-within:border-electric-violet transition-colors">
          <CardElement options={cardElementOptions} onChange={handleCardChange} />
        </div>
        {cardError && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 text-hot-coral text-sm font-inter"
            role="alert"
          >
            {cardError}
          </motion.p>
        )}
      </div>

      {/* Billing Details (simplified for demo) */}
      <div className="mb-8">
        <label className="block font-space font-medium text-off-white text-sm mb-3">
          Cardholder Name
        </label>
        <input
          type="text"
          placeholder="Name on card"
          className="w-full px-4 py-4 bg-white/[0.02] border border-white/10 rounded-xl font-inter text-off-white placeholder:text-warm-gray/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-electric-violet/50 focus:border-electric-violet hover:border-white/20"
        />
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={!stripe || isProcessing}
        whileHover={{ scale: isProcessing ? 1 : 1.02 }}
        whileTap={{ scale: isProcessing ? 1 : 0.98 }}
        className={`w-full py-4 rounded-full font-space font-semibold text-lg transition-all duration-300 ${
          isProcessing
            ? 'bg-electric-violet/50 text-off-white/50 cursor-not-allowed'
            : 'bg-electric-violet text-off-white hover:shadow-[0_0_30px_rgba(124,58,237,0.5)]'
        }`}
      >
        {isProcessing ? (
          <span className="flex items-center justify-center gap-3">
            <svg
              className="animate-spin h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Processing...
          </span>
        ) : (
          `Pay ${formatCurrency(depositAmount)} Deposit`
        )}
      </motion.button>

      {/* Terms */}
      <p className="mt-4 text-warm-gray/60 text-xs font-inter text-center">
        By completing this payment, you agree to our{' '}
        <button type="button" className="text-electric-violet hover:underline">
          Terms of Service
        </button>{' '}
        and{' '}
        <button type="button" className="text-electric-violet hover:underline">
          Privacy Policy
        </button>
        .
      </p>
    </form>
  );
};

const PaymentForm = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </motion.div>
  );
};

export default PaymentForm;
