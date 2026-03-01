import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi2';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'right',
  className = '',
  fullWidth = false,
  type = 'button',
  ariaLabel,
  ...props
}) => {
  const baseStyles = `
    inline-flex items-center justify-center gap-2 font-space font-semibold
    transition-all duration-300 focus:outline-none focus-visible:ring-2
    focus-visible:ring-electric-violet focus-visible:ring-offset-2
    focus-visible:ring-offset-jet-black disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const variants = {
    primary: `
      bg-electric-violet text-off-white rounded-full
      hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] hover:scale-105
      active:scale-95
    `,
    secondary: `
      border-2 border-off-white text-off-white rounded-full
      hover:bg-off-white hover:text-jet-black
      active:scale-95
    `,
    ghost: `
      text-off-white hover:text-electric-violet
    `,
    coral: `
      bg-hot-coral text-off-white rounded-full
      hover:shadow-[0_0_30px_rgba(255,107,107,0.5)] hover:scale-105
      active:scale-95
    `,
    outline: `
      border-2 border-electric-violet text-electric-violet rounded-full
      hover:bg-electric-violet hover:text-off-white
      active:scale-95
    `,
    dark: `
      bg-jet-black text-off-white rounded-full
      hover:bg-jet-black/80
      active:scale-95
    `,
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
  };

  const classes = `
    ${baseStyles}
    ${variants[variant]}
    ${sizes[size]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `;

  const content = (
    <>
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
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
      )}
      {icon && iconPosition === 'left' && !loading && (
        <span className="flex-shrink-0">{icon}</span>
      )}
      <span>{children}</span>
      {icon && iconPosition === 'right' && !loading && (
        <span className="flex-shrink-0">{icon}</span>
      )}
    </>
  );

  const motionProps = {
    whileHover: disabled || loading ? {} : { scale: 1.02 },
    whileTap: disabled || loading ? {} : { scale: 0.98 },
  };

  // Internal link (React Router)
  if (to) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link
          to={to}
          className={classes}
          aria-label={ariaLabel}
          {...props}
        >
          {content}
        </Link>
      </motion.div>
    );
  }

  // External link
  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        {...motionProps}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  // Button
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={classes}
      aria-label={ariaLabel}
      aria-busy={loading}
      {...motionProps}
      {...props}
    >
      {content}
    </motion.button>
  );
};

// Arrow Link - a common pattern used throughout
export const ArrowLink = ({
  children,
  to,
  href,
  onClick,
  className = '',
  ariaLabel,
}) => {
  const content = (
    <motion.span
      className={`inline-flex items-center gap-2 font-space font-medium text-off-white hover:text-electric-violet transition-colors duration-300 group ${className}`}
      whileHover={{ x: 5 }}
    >
      <span>{children}</span>
      <HiArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
    </motion.span>
  );

  if (to) {
    return (
      <Link to={to} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} aria-label={ariaLabel} className="cursor-pointer">
      {content}
    </button>
  );
};

export default Button;
