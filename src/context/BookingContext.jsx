import React, { createContext, useState, useCallback, useMemo } from 'react';
import { generateBookingRef, calculateDeposit } from '../utils/helpers';

export const BookingContext = createContext(null);

const initialState = {
  selectedService: null,
  selectedPackage: null,
  selectedDate: null,
  selectedTime: null,
  clientInfo: {
    name: '',
    email: '',
    phone: '',
    company: '',
    projectDetails: '',
    hearAbout: '',
    budgetRange: '',
  },
  bookingConfirmed: false,
  paymentComplete: false,
  bookingRef: null,
  totalAmount: 0,
  depositAmount: 0,
  currentStep: 1,
};

export const BookingProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  // Set selected service
  const setService = useCallback((service) => {
    setState((prev) => ({
      ...prev,
      selectedService: service,
      selectedPackage: null, // Reset package when service changes
      totalAmount: service?.startingPrice || 0,
      depositAmount: calculateDeposit(service?.startingPrice || 0),
    }));
  }, []);

  // Set selected package (from pricing table)
  const setPackage = useCallback((pkg) => {
    setState((prev) => ({
      ...prev,
      selectedPackage: pkg,
      selectedService: null, // Reset service when package is selected
      totalAmount: pkg?.price || 0,
      depositAmount: calculateDeposit(pkg?.price || 0),
    }));
  }, []);

  // Set date and time
  const setDateTime = useCallback((date, time) => {
    setState((prev) => ({
      ...prev,
      selectedDate: date,
      selectedTime: time,
    }));
  }, []);

  // Set client information
  const setClientInfo = useCallback((info) => {
    setState((prev) => ({
      ...prev,
      clientInfo: {
        ...prev.clientInfo,
        ...info,
      },
    }));
  }, []);

  // Set current step
  const setCurrentStep = useCallback((step) => {
    setState((prev) => ({
      ...prev,
      currentStep: step,
    }));
  }, []);

  // Go to next step
  const nextStep = useCallback(() => {
    setState((prev) => ({
      ...prev,
      currentStep: Math.min(prev.currentStep + 1, 4),
    }));
  }, []);

  // Go to previous step
  const prevStep = useCallback(() => {
    setState((prev) => ({
      ...prev,
      currentStep: Math.max(prev.currentStep - 1, 1),
    }));
  }, []);

  // Confirm booking
  const confirmBooking = useCallback(() => {
    const bookingRef = generateBookingRef();
    setState((prev) => ({
      ...prev,
      bookingConfirmed: true,
      bookingRef,
    }));
    return bookingRef;
  }, []);

  // Complete payment
  const completePayment = useCallback(() => {
    setState((prev) => ({
      ...prev,
      paymentComplete: true,
    }));
  }, []);

  // Reset booking
  const resetBooking = useCallback(() => {
    setState(initialState);
  }, []);

  // Check if can proceed to next step
  const canProceedToStep = useCallback((step) => {
    switch (step) {
      case 2:
        return state.selectedService !== null || state.selectedPackage !== null;
      case 3:
        return state.selectedDate !== null && state.selectedTime !== null;
      case 4:
        return (
          state.clientInfo.name.trim() !== '' &&
          state.clientInfo.email.trim() !== '' &&
          state.clientInfo.projectDetails.trim().length >= 20
        );
      default:
        return true;
    }
  }, [state]);

  // Get booking summary
  const getBookingSummary = useCallback(() => {
    return {
      serviceName: state.selectedService?.title || state.selectedPackage?.name || 'Not selected',
      date: state.selectedDate,
      time: state.selectedTime,
      clientName: state.clientInfo.name,
      clientEmail: state.clientInfo.email,
      projectDetails: state.clientInfo.projectDetails,
      totalAmount: state.totalAmount,
      depositAmount: state.depositAmount,
      bookingRef: state.bookingRef,
    };
  }, [state]);

  // Memoize context value
  const value = useMemo(() => ({
    ...state,
    setService,
    setPackage,
    setDateTime,
    setClientInfo,
    setCurrentStep,
    nextStep,
    prevStep,
    confirmBooking,
    completePayment,
    resetBooking,
    canProceedToStep,
    getBookingSummary,
  }), [
    state,
    setService,
    setPackage,
    setDateTime,
    setClientInfo,
    setCurrentStep,
    nextStep,
    prevStep,
    confirmBooking,
    completePayment,
    resetBooking,
    canProceedToStep,
    getBookingSummary,
  ]);

  return (
    <BookingContext.Provider value={value}>
      {children}
    </BookingContext.Provider>
  );
};

export default BookingProvider;
