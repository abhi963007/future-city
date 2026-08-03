import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import HeroIntro from '../components/Hero/HeroIntro';
import AboutGrid from '../components/About/AboutGrid';
import TypoTitles from '../components/Typography/TypoTitles';
import ProjectListing from '../components/Projects/ProjectListing';
import StickyServices from '../components/StickyServices/StickyServices';
import SolutionsShowcase from '../components/Solutions/SolutionsShowcase';
import TestimonialsSection from '../components/Testimonials/TestimonialsSection';
import { SITE_META } from '../utils/constants';
import { getLenis } from '../hooks/useLenis';

const Home: React.FC = () => {
  useEffect(() => {
    if (window.location.hash) {
      const hash = window.location.hash;
      const timer = setTimeout(() => {
        const el = document.querySelector<HTMLElement>(hash);
        if (el) {
          const lenis = getLenis();
          if (lenis) {
            lenis.scrollTo(el, { duration: 1.2 });
          } else {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 300);
      return () => clearTimeout(timer);
    }
  }, []);

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

      {/* Hero Section */}
      <section id="hero">
        <HeroIntro />
      </section>

      {/* About Section */}
      <section id="about">
        <AboutGrid />
        <TypoTitles
          variant="without-image"
          title1="Codename "
          title2="Future City"
          title3="Fourth City"
          subtitle="Transforming Hyderabad's southern corridor into an international hub for tech, AI, and mega infrastructure"
        />
      </section>

      {/* Plots / Masterplan Sectors Section */}
      <section id="plots">
        <ProjectListing />
      </section>

      {/* Location & Infrastructure Section */}
      <section id="location">
        <StickyServices />
      </section>

      {/* Vision & Growth Corridor Section */}
      <section id="vision">
        <SolutionsShowcase />
      </section>

      {/* Testimonials */}
      <TestimonialsSection />
    </>
  );
};

export default Home;
