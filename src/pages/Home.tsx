import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroIntro from '../components/Hero/HeroIntro';
import AboutGrid from '../components/About/AboutGrid';
import TypoTitles from '../components/Typography/TypoTitles';
import SolutionsShowcase from '../components/Solutions/SolutionsShowcase';
import TestimonialsSection from '../components/Testimonials/TestimonialsSection';
import StickyServices from '../components/StickyServices/StickyServices';
import ProjectListing from '../components/Projects/ProjectListing';
import { SITE_META } from '../utils/constants';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>{SITE_META.title}</title>
        <meta name="description" content={SITE_META.description} />
        <meta property="og:title" content={SITE_META.title} />
        <meta property="og:description" content={SITE_META.description} />
        <meta property="og:image" content={SITE_META.ogImage} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SITE_META.title} />
        <meta name="twitter:description" content={SITE_META.description} />
        <link rel="canonical" href={SITE_META.canonical} />
      </Helmet>

      <HeroIntro />
      <AboutGrid />
      <TypoTitles
        variant="without-image"
        title1="Codename "
        title2="Future City"
        title3="Fourth City"
        subtitle="Transforming Hyderabad's southern corridor into an international hub for tech, AI, and mega infrastructure"
      />
      <SolutionsShowcase />
      <TestimonialsSection />
      <StickyServices />
      <ProjectListing />
    </>
  );
};

export default Home;
