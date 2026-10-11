# Changelog

All notable changes to this project are documented in this file.

## [2026.10] - 2026-10-12

- Public React 18 + Tailwind v3 portfolio site ("STUDIO.") for a graphic designer, with a multi-step booking flow and Stripe checkout described by the README as demo mode; deployable to Vercel via `vercel.json`.
- October 2026 review: README, tree and history re-read; last functional commit is 2026-03-01. All 5 external README links returned HTTP 200. Package version bumped 0.2.0 to 0.3.0 as release metadata only; no component or style code changed.
- The README states MIT but the repo had no LICENSE file; the standard MIT LICENSE (Copyright 2026 Waseem Nasir) was added to match, and a Work with SkynetLabs section was appended.
- Known gaps: README clone URL is still the placeholder `github.com/yourusername/designstudio-portfolio.git` (left unchanged), no tests are committed, and no live URL is stated.

## [2026.09] - 2026-09-16

- Maintenance review of designstudio-portfolio — "STUDIO.", a dark-mode graphic-designer portfolio site with a multi-step booking flow and Stripe checkout.
- Status: React 18 + Tailwind CSS v3 SPA (React Router v6, Framer Motion, React Slick, React DatePicker, React Helmet Async) with pages for home, portfolio, services, booking, payment, about and contact; booking state lives in `src/context/BookingContext.jsx` and content is seeded from static files in `src/data`. Configured for Vercel via `vercel.json`. No live URL is stated in the README.
- Reviewed September 2026: documentation refreshed, changelog started, and the package version bumped for the v2026.09 maintenance tag. No component or styling code was changed.
- Known gaps: payments are described by the README as demo mode; the README still points at a placeholder clone URL (`github.com/yourusername/...`); the README claims an MIT license but no LICENSE file exists in the repo; there was no CHANGELOG before this release and no test files are committed.
