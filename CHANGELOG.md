# Changelog

All notable changes to this project are documented in this file.

## [2026.09] - 2026-09-16

- Maintenance review of designstudio-portfolio — "STUDIO.", a dark-mode graphic-designer portfolio site with a multi-step booking flow and Stripe checkout.
- Status: React 18 + Tailwind CSS v3 SPA (React Router v6, Framer Motion, React Slick, React DatePicker, React Helmet Async) with pages for home, portfolio, services, booking, payment, about and contact; booking state lives in `src/context/BookingContext.jsx` and content is seeded from static files in `src/data`. Configured for Vercel via `vercel.json`. No live URL is stated in the README.
- Reviewed September 2026: documentation refreshed, changelog started, and the package version bumped for the v2026.09 maintenance tag. No component or styling code was changed.
- Known gaps: payments are described by the README as demo mode; the README still points at a placeholder clone URL (`github.com/yourusername/...`); the README claims an MIT license but no LICENSE file exists in the repo; there was no CHANGELOG before this release and no test files are committed.
