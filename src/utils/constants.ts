export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  SERVICES: '/services',
  SOLUTIONS: '/solutions',
  PROJECTS: '/projects',
  PROPERTIES: '/properties',
  GALLERY: '/gallery',
  BLOG: '/blog',
  CONTACT: '/contact',
  CONSULTATION: '/consultation',
  LOCATIONS: '/locations',
  STYLE_GUIDE: '/style-guide',
} as const;

// Webflow breakpoints — must match exactly
export const BREAKPOINTS = {
  MOBILE: 479,
  TABLET: 767,
  DESKTOP_SM: 991,
  DESKTOP_MD: 1279,
  DESKTOP_LG: 1439,
} as const;

export const SITE_META = {
  title: 'Harroway - Real Estate Template',
  description:
    'Premium real estate business, development agencies, prime residential brokerages, and block management companies.',
  ogImage: '/images/69e7c7b0c8b5b85fe79566ed_804cb071252be5768b3055ac03c981a5_og-image.jpg',
  canonical: 'https://harroway-real-estate-template.webflow.io',
} as const;
