import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useBooking } from '../../hooks/useBooking';
import { isValidEmail } from '../../utils/helpers';

const BookingForm = () => {
  const { clientInfo, setClientInfo } = useBooking();

  const [formData, setFormData] = useState({
    name: clientInfo.name || '',
    email: clientInfo.email || '',
    phone: clientInfo.phone || '',
    company: clientInfo.company || '',
    projectDetails: clientInfo.projectDetails || '',
    hearAbout: clientInfo.hearAbout || '',
    budgetRange: clientInfo.budgetRange || '',
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const hearAboutOptions = [
    { value: '', label: 'Select an option' },
    { value: 'google', label: 'Google' },
    { value: 'instagram', label: 'Instagram' },
    { value: 'referral', label: 'Referral' },
    { value: 'other', label: 'Other' },
  ];

  const budgetOptions = [
    { value: '', label: 'Select your budget' },
    { value: 'under-1k', label: 'Under $1,000' },
    { value: '1k-3k', label: '$1,000 - $3,000' },
    { value: '3k-5k', label: '$3,000 - $5,000' },
    { value: '5k-plus', label: '$5,000+' },
  ];

  // Validation function
  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return '';
      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!isValidEmail(value)) return 'Please enter a valid email address';
        return '';
      case 'projectDetails':
        if (!value.trim()) return 'Project details are required';
        if (value.trim().length < 20) return 'Please provide at least 20 characters';
        return '';
      default:
        return '';
    }
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  // Handle blur - validate and show error
  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    if (error) {
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  // Update context when form data changes
  useEffect(() => {
    setClientInfo(formData);
  }, [formData, setClientInfo]);

  const inputClasses = (fieldName) => `
    w-full px-4 py-4 bg-white/[0.02] border rounded-xl font-inter text-off-white
    placeholder:text-warm-gray/50 transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-electric-violet/50 focus:border-electric-violet
    ${
      errors[fieldName] && touched[fieldName]
        ? 'border-hot-coral'
        : 'border-white/10 hover:border-white/20'
    }
  `;

  const labelClasses = 'block font-space font-medium text-off-white text-sm mb-2';

  return (
    <div>
      <h2 className="font-space font-bold text-2xl md:text-3xl text-off-white mb-2">
        Tell Me About Your Project
      </h2>
      <p className="text-warm-gray font-inter mb-10">
        Share some details so I can better understand your needs.
      </p>

      <form className="space-y-6" noValidate>
        {/* Name & Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className={labelClasses}>
              Full Name <span className="text-hot-coral">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="John Doe"
              className={inputClasses('name')}
              aria-required="true"
              aria-invalid={errors.name && touched.name ? 'true' : 'false'}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && touched.name && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                id="name-error"
                className="mt-2 text-hot-coral text-sm font-inter"
                role="alert"
              >
                {errors.name}
              </motion.p>
            )}
          </div>

          <div>
            <label htmlFor="email" className={labelClasses}>
              Email Address <span className="text-hot-coral">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="john@example.com"
              className={inputClasses('email')}
              aria-required="true"
              aria-invalid={errors.email && touched.email ? 'true' : 'false'}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && touched.email && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                id="email-error"
                className="mt-2 text-hot-coral text-sm font-inter"
                role="alert"
              >
                {errors.email}
              </motion.p>
            )}
          </div>
        </div>

        {/* Phone & Company Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className={labelClasses}>
              Phone Number <span className="text-warm-gray">(Optional)</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(555) 123-4567"
              className={inputClasses('phone')}
            />
          </div>

          <div>
            <label htmlFor="company" className={labelClasses}>
              Company/Brand Name <span className="text-warm-gray">(Optional)</span>
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Your Company"
              className={inputClasses('company')}
            />
          </div>
        </div>

        {/* Project Details */}
        <div>
          <label htmlFor="projectDetails" className={labelClasses}>
            Project Details <span className="text-hot-coral">*</span>
          </label>
          <textarea
            id="projectDetails"
            name="projectDetails"
            value={formData.projectDetails}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Tell me about your project, goals, and vision..."
            rows={5}
            className={`${inputClasses('projectDetails')} resize-none`}
            aria-required="true"
            aria-invalid={errors.projectDetails && touched.projectDetails ? 'true' : 'false'}
            aria-describedby={errors.projectDetails ? 'projectDetails-error' : 'projectDetails-hint'}
          />
          <div className="flex justify-between mt-2">
            {errors.projectDetails && touched.projectDetails ? (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                id="projectDetails-error"
                className="text-hot-coral text-sm font-inter"
                role="alert"
              >
                {errors.projectDetails}
              </motion.p>
            ) : (
              <p id="projectDetails-hint" className="text-warm-gray/50 text-sm font-inter">
                Minimum 20 characters
              </p>
            )}
            <span className={`text-sm font-inter ${
              formData.projectDetails.length < 20 ? 'text-warm-gray/50' : 'text-electric-violet'
            }`}>
              {formData.projectDetails.length}/20
            </span>
          </div>
        </div>

        {/* How did you hear about me & Budget Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="hearAbout" className={labelClasses}>
              How did you hear about me?
            </label>
            <select
              id="hearAbout"
              name="hearAbout"
              value={formData.hearAbout}
              onChange={handleChange}
              className={inputClasses('hearAbout')}
            >
              {hearAboutOptions.map((option) => (
                <option key={option.value} value={option.value} className="bg-jet-black">
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="budgetRange" className={labelClasses}>
              Budget Range
            </label>
            <select
              id="budgetRange"
              name="budgetRange"
              value={formData.budgetRange}
              onChange={handleChange}
              className={inputClasses('budgetRange')}
            >
              {budgetOptions.map((option) => (
                <option key={option.value} value={option.value} className="bg-jet-black">
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
