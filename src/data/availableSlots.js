export const timeSlots = [
  { id: 1, time: "9:00 AM", value: "09:00" },
  { id: 2, time: "10:00 AM", value: "10:00" },
  { id: 3, time: "11:00 AM", value: "11:00" },
  { id: 4, time: "1:00 PM", value: "13:00" },
  { id: 5, time: "2:00 PM", value: "14:00" },
  { id: 6, time: "3:00 PM", value: "15:00" },
  { id: 7, time: "4:00 PM", value: "16:00" }
];

// Helper to check if a date is a weekend
export const isWeekend = (date) => {
  const day = date.getDay();
  return day === 0 || day === 6;
};

// Helper to check if a date is in the past
export const isPastDate = (date) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return date < today;
};

// Helper to get available slots for a specific date
// In a real app, this would fetch from an API
export const getAvailableSlotsForDate = (date) => {
  // For demo purposes, all slots are available on weekdays
  if (isWeekend(date) || isPastDate(date)) {
    return [];
  }

  // Simulate some slots being taken on certain dates
  const dateStr = date.toISOString().split('T')[0];
  const bookedSlots = {
    // Add some example booked slots (these would come from a database in production)
  };

  const booked = bookedSlots[dateStr] || [];
  return timeSlots.filter(slot => !booked.includes(slot.value));
};

// Filter function for react-datepicker
export const filterAvailableDates = (date) => {
  return !isWeekend(date) && !isPastDate(date);
};

export default timeSlots;
