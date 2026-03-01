import { HiOutlineSparkles, HiOutlineDevicePhoneMobile, HiOutlinePrinter, HiOutlinePlayCircle } from 'react-icons/hi2';

export const services = [
  {
    id: 'brand-identity',
    title: "Brand Identity Design",
    shortTitle: "Brand Identity",
    icon: HiOutlineSparkles,
    description: "Creating memorable brand identities that tell your story. From initial concept to final guidelines, I develop visual systems that resonate with your audience and stand the test of time.",
    shortDescription: "Logo, brand guidelines, visual identity systems, and stationery design",
    deliverables: [
      "Logo Design (Primary + Variations)",
      "Color Palette & Typography",
      "Brand Guidelines Document",
      "Stationery Suite (Business Cards, Letterhead)",
      "Social Media Templates",
      "Brand Asset Library"
    ],
    startingPrice: 1500,
    timeline: "2-4 weeks"
  },
  {
    id: 'web-design',
    title: "Web & UI Design",
    shortTitle: "Web Design",
    icon: HiOutlineDevicePhoneMobile,
    description: "Designing digital experiences that convert and delight. Whether it's a landing page or a full web application, I create intuitive interfaces with stunning visuals that guide users toward their goals.",
    shortDescription: "Websites, landing pages, app interfaces, and design systems",
    deliverables: [
      "Landing Page or Multi-Page Design",
      "Mobile Responsive Layouts",
      "Interactive Prototypes",
      "Design System Components",
      "Developer-Ready Specifications",
      "Asset Export Package"
    ],
    startingPrice: 2000,
    timeline: "3-6 weeks"
  },
  {
    id: 'print-design',
    title: "Print Design",
    shortTitle: "Print",
    icon: HiOutlinePrinter,
    description: "Crafting tangible designs that make lasting impressions. From business cards to large-format pieces, I ensure every printed piece reflects your brand's quality and attention to detail.",
    shortDescription: "Brochures, packaging, business cards, and editorial layouts",
    deliverables: [
      "Business Cards & Stationery",
      "Brochures & Flyers",
      "Packaging Design",
      "Posters & Signage",
      "Editorial Layout",
      "Print-Ready Files (CMYK)"
    ],
    startingPrice: 800,
    timeline: "1-3 weeks"
  },
  {
    id: 'motion-social',
    title: "Motion & Social Media",
    shortTitle: "Motion",
    icon: HiOutlinePlayCircle,
    description: "Bringing brands to life through motion. Creating scroll-stopping social content and animated pieces that capture attention and communicate your message in seconds.",
    shortDescription: "Social media kits, motion graphics, and ad creatives",
    deliverables: [
      "Social Media Template Kit",
      "Animated Posts & Stories",
      "Short Promo Videos (15-30s)",
      "Ad Creatives (Static + Animated)",
      "Logo Animation",
      "Motion Graphics Package"
    ],
    startingPrice: 1200,
    timeline: "2-4 weeks"
  }
];

export const serviceFeatures = {
  'brand-identity': [
    "Discovery session to understand your vision",
    "Competitive analysis and mood boards",
    "Multiple concept presentations",
    "Unlimited refinements on chosen direction",
    "Complete brand guidelines document",
    "All source files included"
  ],
  'web-design': [
    "UX research and user journey mapping",
    "Wireframes and information architecture",
    "High-fidelity mockups for all pages",
    "Interactive prototype for testing",
    "Responsive designs for all devices",
    "Developer handoff with specifications"
  ],
  'print-design': [
    "Print-ready files in all required formats",
    "CMYK color optimization",
    "Bleed and trim mark setup",
    "Paper stock recommendations",
    "Vendor coordination support",
    "Multiple format variations"
  ],
  'motion-social': [
    "Storyboarding and concept development",
    "Brand-consistent animation style",
    "Multiple aspect ratios for platforms",
    "Source files for future edits",
    "Optimized exports for web/social",
    "Music/sound sourcing guidance"
  ]
};

export default services;
