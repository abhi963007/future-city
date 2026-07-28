export const ROUTES = {
  HOME: '/',
  PROJECT: '/project',
  VISION: '/vision',
  CONNECTIVITY: '/connectivity',
  LOCATION: '/location',
  INVESTMENT: '/investment',
  GALLERY: '/gallery',
  CONTACT: '/contact',
  CONSULTATION: '/consultation',
  PROPERTIES: '/properties',
  SERVICES: '/services',
  SOLUTIONS: '/solutions',
  PROJECTS: '/projects',
  BLOG: '/blog',
  LOCATIONS: '/locations',
  STYLE_GUIDE: '/style-guide',
} as const;

// Webflow breakpoints — matching original layout
export const BREAKPOINTS = {
  MOBILE: 479,
  TABLET: 767,
  DESKTOP_SM: 991,
  DESKTOP_MD: 1279,
  DESKTOP_LG: 1439,
} as const;

export const SITE_META = {
  title: "Future City | Premium Villa Plots at Yacharam, Hyderabad",
  description:
    "Invest in Hyderabad's Fourth City with premium DTCP & RERA approved villa plots strategically located near the Future City and Pharma City corridor.",
  ogImage: '/images/69f33e4ed787feeb78d1b49e_hero-image.avif',
  canonical: 'https://futurecityhyderabad.in',
} as const;
