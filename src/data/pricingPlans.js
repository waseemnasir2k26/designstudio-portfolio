export const pricingPlans = [
  {
    id: 'starter',
    name: "Starter",
    price: 800,
    priceLabel: "/project",
    description: "Perfect for small projects and startups",
    highlighted: false,
    badge: null,
    features: [
      { text: "1 Design Concept", included: true },
      { text: "2 Revision Rounds", included: true },
      { text: "Source Files Included", included: true },
      { text: "3-5 Day Turnaround", included: true },
      { text: "Email Support", included: true },
      { text: "Social Media Kit", included: false },
      { text: "Print-Ready Files", included: false },
      { text: "Brand Strategy Session", included: false }
    ]
  },
  {
    id: 'professional',
    name: "Professional",
    price: 2500,
    priceLabel: "/project",
    description: "Complete design solution for growing brands",
    highlighted: true,
    badge: "Most Popular",
    features: [
      { text: "3 Design Concepts", included: true },
      { text: "Unlimited Revisions", included: true },
      { text: "Source Files + Guidelines", included: true },
      { text: "7-10 Day Turnaround", included: true },
      { text: "Priority Support", included: true },
      { text: "Social Media Kit", included: true },
      { text: "Print-Ready Files", included: true },
      { text: "Brand Strategy Session", included: false }
    ]
  },
  {
    id: 'premium',
    name: "Premium",
    price: 5000,
    priceLabel: "/project",
    description: "Full brand experience for established businesses",
    highlighted: false,
    badge: null,
    features: [
      { text: "5 Design Concepts", included: true },
      { text: "Unlimited Revisions", included: true },
      { text: "Complete Brand Package", included: true },
      { text: "14-21 Day Turnaround", included: true },
      { text: "Dedicated Support", included: true },
      { text: "Motion Graphics", included: true },
      { text: "Brand Strategy Session", included: true },
      { text: "1 Month Post-Delivery Support", included: true }
    ]
  }
];

export default pricingPlans;
