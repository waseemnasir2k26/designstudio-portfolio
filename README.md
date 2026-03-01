# STUDIO. - Graphic Designer Portfolio with Booking & Payments

A stunning, portfolio-driven website for a freelance graphic designer with integrated booking and payment functionality. Built with React 18+ and Tailwind CSS.

## Features

- **Dark Mode Design** - Modern, editorial aesthetic with dramatic contrasts
- **Custom Cursor** - Interactive cursor with hover effects (disabled on touch devices)
- **Booking System** - Multi-step booking flow with service selection, calendar, and form
- **Payment Integration** - Stripe payment processing (demo mode)
- **Portfolio Gallery** - Masonry grid with filters and project modals
- **Animations** - Smooth page transitions and scroll animations with Framer Motion
- **SEO Optimized** - React Helmet for meta tags, Open Graph, and JSON-LD
- **Fully Responsive** - Mobile-first design approach
- **Accessible** - WCAG compliant with proper ARIA labels and keyboard navigation

## Tech Stack

- **React 18+** - Functional components with hooks
- **Tailwind CSS v3** - Utility-first styling
- **React Router DOM v6** - Client-side routing
- **Framer Motion** - Animations and page transitions
- **React Slick** - Testimonials carousel
- **React DatePicker** - Calendar component
- **Stripe.js** - Payment processing
- **React Hot Toast** - Notifications
- **React Masonry CSS** - Portfolio grid layout
- **React Modal** - Project details modal
- **React Helmet Async** - SEO management

## Design System

### Colors

- **Primary:** Jet Black `#0D0D0D`
- **Secondary:** Off-White `#FAF8F5`
- **Accent 1:** Electric Violet `#7C3AED`
- **Accent 2:** Hot Coral `#FF6B6B`
- **Neutral:** Warm Gray `#A8A29E`

### Typography

- **Headings:** Space Grotesk (Google Fonts)
- **Body:** Inter (Google Fonts)
- **Accent:** Playfair Display (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/designstudio-portfolio.git
   cd designstudio-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Stripe Setup

This project uses Stripe for payment processing. In demo mode, payments are simulated.

### For Production:

1. Create a [Stripe account](https://stripe.com)
2. Get your API keys from the Stripe Dashboard
3. Replace the test publishable key in `src/components/payment/PaymentForm.jsx`:
   ```javascript
   const stripePromise = loadStripe('pk_live_YOUR_PUBLISHABLE_KEY');
   ```
4. Set up a backend server to create PaymentIntents securely
5. Update the payment form to call your backend API

### Test Card Numbers

- **Success:** 4242 4242 4242 4242
- **Decline:** 4000 0000 0000 0002
- Use any future expiry date and any 3-digit CVC

## Project Structure

```
src/
├── components/
│   ├── layout/        # Navbar, Footer
│   ├── home/          # Hero, AboutPreview, FeaturedWork, etc.
│   ├── portfolio/     # PortfolioGrid, PortfolioFilter, ProjectModal
│   ├── services/      # ServiceCard, PricingTable
│   ├── booking/       # BookingCalendar, ServiceSelector, etc.
│   ├── payment/       # PaymentForm, PaymentSummary, PaymentSuccess
│   └── shared/        # SectionHeading, AnimatedSection, Button
├── pages/             # HomePage, PortfolioPage, ServicesPage, etc.
├── data/              # projects, services, testimonials, pricing
├── hooks/             # useScrollAnimation, useBooking
├── context/           # BookingContext
├── utils/             # helpers
├── App.jsx
├── index.js
└── index.css
```

## Available Scripts

- `npm start` - Run development server
- `npm run build` - Build for production
- `npm test` - Run tests

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository to [Vercel](https://vercel.com)
3. Vercel will automatically detect the React app and configure the build settings
4. Deploy!

The `vercel.json` file is already configured to handle client-side routing.

### Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. The `build` folder contains the production-ready files
3. Deploy to your hosting provider of choice

## Customization

### Adding New Projects

Edit `src/data/projects.js` to add new portfolio items:

```javascript
{
  id: 13,
  title: "Your Project",
  category: "Brand Identity", // Brand Identity, Web Design, Print, or Motion
  year: 2024,
  color: "#7C3AED",
  description: "Project description...",
  deliverables: ["Item 1", "Item 2"],
  tools: ["Figma", "Illustrator"],
  featured: false
}
```

### Updating Services

Edit `src/data/services.js` to modify service offerings and pricing.

### Changing Colors

Update `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  'jet-black': '#YOUR_COLOR',
  'electric-violet': '#YOUR_COLOR',
  // ...
}
```

## License

MIT License - feel free to use this project for your own portfolio!

## Credits

- Fonts: [Google Fonts](https://fonts.google.com)
- Icons: [React Icons](https://react-icons.github.io/react-icons/)
- Animations: [Framer Motion](https://www.framer.com/motion/)
