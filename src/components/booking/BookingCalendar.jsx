import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { motion } from 'framer-motion';
import { addDays } from 'date-fns';
import { HiCheck } from 'react-icons/hi2';
import { useBooking } from '../../hooks/useBooking';
import { timeSlots, filterAvailableDates } from '../../data/availableSlots';
import 'react-datepicker/dist/react-datepicker.css';

const BookingCalendar = () => {
  const { selectedDate, selectedTime, setDateTime } = useBooking();
  const [localDate, setLocalDate] = useState(selectedDate);
  const [localTime, setLocalTime] = useState(selectedTime);

  const handleDateChange = (date) => {
    setLocalDate(date);
    setDateTime(date, localTime);
  };

  const handleTimeSelect = (time) => {
    setLocalTime(time);
    setDateTime(localDate, time);
  };

  // Minimum date is tomorrow
  const minDate = addDays(new Date(), 1);

  return (
    <div>
      <h2 className="font-space font-bold text-2xl md:text-3xl text-off-white mb-2">
        Pick a Date & Time
      </h2>
      <p className="text-warm-gray font-inter mb-10">
        Select your preferred date and time slot for the discovery call.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Calendar */}
        <div>
          <h3 className="font-space font-semibold text-off-white text-sm uppercase tracking-wider mb-6">
            Select Date
          </h3>
          <div className="bg-white/[0.02] rounded-2xl p-6 border border-white/5">
            <DatePicker
              selected={localDate}
              onChange={handleDateChange}
              minDate={minDate}
              filterDate={filterAvailableDates}
              inline
              calendarClassName="!bg-transparent !border-0"
            />
          </div>
          <p className="text-warm-gray text-sm font-inter mt-4">
            Available Monday - Friday. Weekends are unavailable.
          </p>
        </div>

        {/* Time Slots */}
        <div>
          <h3 className="font-space font-semibold text-off-white text-sm uppercase tracking-wider mb-6">
            Select Time (EST)
          </h3>

          {localDate ? (
            <div className="grid grid-cols-2 gap-3">
              {timeSlots.map((slot, index) => {
                const isSelected = localTime === slot.value;

                return (
                  <motion.button
                    key={slot.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => handleTimeSelect(slot.value)}
                    className={`relative py-4 px-6 rounded-xl font-space font-medium transition-all duration-300 ${
                      isSelected
                        ? 'bg-electric-violet text-off-white shadow-[0_0_20px_rgba(124,58,237,0.4)]'
                        : 'bg-white/[0.02] text-warm-gray border border-white/5 hover:border-electric-violet/30 hover:text-off-white'
                    }`}
                    aria-pressed={isSelected}
                  >
                    {isSelected && (
                      <span className="absolute right-3 top-1/2 -translate-y-1/2">
                        <HiCheck className="w-5 h-5" />
                      </span>
                    )}
                    {slot.time}
                  </motion.button>
                );
              })}
            </div>
          ) : (
            <div className="bg-white/[0.02] rounded-2xl p-12 border border-white/5 text-center">
              <p className="text-warm-gray font-inter">
                Please select a date first to see available time slots.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Selected Summary */}
      {localDate && localTime && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-10 p-6 bg-electric-violet/10 rounded-2xl border border-electric-violet/30"
        >
          <p className="text-off-white font-inter">
            <span className="text-warm-gray">Selected:</span>{' '}
            <span className="font-semibold">
              {localDate.toLocaleDateString('en-US', {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>{' '}
            at{' '}
            <span className="font-semibold">
              {timeSlots.find((s) => s.value === localTime)?.time}
            </span>
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default BookingCalendar;
