import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import {
  HiEnvelope,
  HiPhone,
  HiMapPin,
} from 'react-icons/hi2';
import {
  FaInstagram,
  FaBehance,
  FaDribbble,
  FaLinkedinIn,
} from 'react-icons/fa';
import { isValidEmail } from '../utils/helpers';
import SectionHeading from '../components/shared/SectionHeading';

const socialLinks = [
  { name: 'Instagram', icon: FaInstagram, url: 'https://instagram.com/designstudio' },
  { name: 'Behance', icon: FaBehance, url: 'https://behance.net/designstudio' },
  { name: 'Dribbble', icon: FaDribbble, url: 'https://dribbble.com/designstudio' },
  { name: 'LinkedIn', icon: FaLinkedinIn, url: 'https://linkedin.com/in/designstudio' },
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const subjectOptions = [
    { value: '', label: 'Select a subject' },
    { value: 'general', label: 'General Inquiry' },
    { value: 'project', label: 'Project Inquiry' },
    { value: 'collaboration', label: 'Collaboration' },
    { value: 'other', label: 'Other' },
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.subject) {
      newErrors.subject = 'Please select a subject';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    toast.success('Message sent successfully!');
  };

  const inputClasses = (fieldName) => `
    w-full px-4 py-4 bg-white/[0.02] border rounded-xl font-inter text-off-white
    placeholder:text-warm-gray/50 transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-electric-violet/50 focus:border-electric-violet
    ${
      errors[fieldName]
        ? 'border-hot-coral'
        : 'border-white/10 hover:border-white/20'
    }
  `;

  return (
    <>
      <Helmet>
        <title>Contact | STUDIO. - Let's Work Together</title>
        <meta
          name="description"
          content="Get in touch to discuss your design project. Available for brand identity, web design, print, and motion graphics projects."
        />
        <meta property="og:title" content="Contact | STUDIO. - Let's Work Together" />
        <meta
          property="og:description"
          content="Get in touch to discuss your design project."
        />
      </Helmet>

      <main id="main-content" className="min-h-screen bg-jet-black pt-32 pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <SectionHeading
              tag="CONTACT"
              title="Let's Talk"
              subtitle="Have a project in mind or just want to say hello? I'd love to hear from you."
              alignment="center"
            />
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white/[0.01] rounded-3xl border border-white/5 p-8 md:p-10">
                <h2 className="font-space font-bold text-2xl text-off-white mb-8">
                  Send a Message
                </h2>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-electric-violet/20 flex items-center justify-center mx-auto mb-6">
                      <HiEnvelope className="w-8 h-8 text-electric-violet" />
                    </div>
                    <h3 className="font-space font-bold text-xl text-off-white mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-warm-gray font-inter mb-6">
                      Thank you for reaching out. I'll get back to you soon.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-electric-violet font-space font-medium hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <div>
                      <label
                        htmlFor="name"
                        className="block font-space font-medium text-off-white text-sm mb-2"
                      >
                        Name <span className="text-hot-coral">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className={inputClasses('name')}
                        aria-required="true"
                      />
                      {errors.name && (
                        <p className="mt-2 text-hot-coral text-sm font-inter">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block font-space font-medium text-off-white text-sm mb-2"
                      >
                        Email <span className="text-hot-coral">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className={inputClasses('email')}
                        aria-required="true"
                      />
                      {errors.email && (
                        <p className="mt-2 text-hot-coral text-sm font-inter">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block font-space font-medium text-off-white text-sm mb-2"
                      >
                        Subject <span className="text-hot-coral">*</span>
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={inputClasses('subject')}
                        aria-required="true"
                      >
                        {subjectOptions.map((option) => (
                          <option
                            key={option.value}
                            value={option.value}
                            className="bg-jet-black"
                          >
                            {option.label}
                          </option>
                        ))}
                      </select>
                      {errors.subject && (
                        <p className="mt-2 text-hot-coral text-sm font-inter">
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block font-space font-medium text-off-white text-sm mb-2"
                      >
                        Message <span className="text-hot-coral">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project..."
                        rows={5}
                        className={`${inputClasses('message')} resize-none`}
                        aria-required="true"
                      />
                      {errors.message && (
                        <p className="mt-2 text-hot-coral text-sm font-inter">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      className={`w-full py-4 rounded-full font-space font-semibold text-lg transition-all duration-300 ${
                        isSubmitting
                          ? 'bg-electric-violet/50 text-off-white/50 cursor-not-allowed'
                          : 'bg-electric-violet text-off-white hover:shadow-[0_0_30px_rgba(124,58,237,0.5)]'
                      }`}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-10"
            >
              {/* Contact Details */}
              <div>
                <h2 className="font-space font-bold text-2xl text-off-white mb-8">
                  Get in Touch
                </h2>

                <div className="space-y-6">
                  <a
                    href="mailto:hello@designstudio.com"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-electric-violet/10 flex items-center justify-center flex-shrink-0 group-hover:bg-electric-violet/20 transition-colors">
                      <HiEnvelope className="w-6 h-6 text-electric-violet" />
                    </div>
                    <div>
                      <p className="text-warm-gray text-sm font-inter">Email</p>
                      <p className="text-off-white font-space font-medium group-hover:text-electric-violet transition-colors">
                        hello@designstudio.com
                      </p>
                    </div>
                  </a>

                  <a
                    href="tel:+15559876543"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-electric-violet/10 flex items-center justify-center flex-shrink-0 group-hover:bg-electric-violet/20 transition-colors">
                      <HiPhone className="w-6 h-6 text-electric-violet" />
                    </div>
                    <div>
                      <p className="text-warm-gray text-sm font-inter">Phone</p>
                      <p className="text-off-white font-space font-medium group-hover:text-electric-violet transition-colors">
                        (555) 987-6543
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-electric-violet/10 flex items-center justify-center flex-shrink-0">
                      <HiMapPin className="w-6 h-6 text-electric-violet" />
                    </div>
                    <div>
                      <p className="text-warm-gray text-sm font-inter">Location</p>
                      <p className="text-off-white font-space font-medium">
                        New York, NY
                      </p>
                      <p className="text-warm-gray text-sm font-inter">
                        Available Worldwide • Remote Friendly
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className="p-6 bg-electric-violet/5 border border-electric-violet/20 rounded-2xl">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-off-white font-space font-semibold">
                    Currently Available
                  </span>
                </div>
                <p className="text-warm-gray font-inter text-sm">
                  Accepting new projects for Q2 2025
                </p>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-space font-semibold text-off-white text-lg mb-6">
                  Follow Me
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-warm-gray hover:text-electric-violet hover:border-electric-violet/30 transition-all duration-300"
                        aria-label={social.name}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Response Time */}
              <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
                <h3 className="font-space font-semibold text-off-white mb-2">
                  Response Time
                </h3>
                <p className="text-warm-gray font-inter text-sm">
                  I typically respond to all inquiries within 24-48 hours during
                  business days. For urgent matters, please indicate so in your
                  message.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ContactPage;
