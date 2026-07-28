import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroIntro from '../components/Hero/HeroIntro';
import AboutGrid from '../components/About/AboutGrid';
import TypoTitles from '../components/Typography/TypoTitles';
import SolutionsShowcase from '../components/Solutions/SolutionsShowcase';
import StatementReveal from '../components/Statement/StatementReveal';
import StickyServices from '../components/StickyServices/StickyServices';
import ProjectListing from '../components/Projects/ProjectListing';
import ImageSplit from '../components/ImageSplit/ImageSplit';
import ConsultationSection from '../components/Consultation/ConsultationSection';
import TeamStats from '../components/Team/TeamStats';
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
        title1="Real Estate "
        title2="Solutions"
        title3="For developers"
        subtitle="We combine insight, design thinking, and execution to deliver high-quality outcomes"
      />
      <SolutionsShowcase />
      <StatementReveal />
      <StickyServices />
      <TypoTitles
        variant="base"
        title1="Selected"
        title2="property"
        title3="developments"
        subtitle="Explore a curated selection of our residential and development projects"
        imageSrc="/images/69f1e37cb735948465f81b86_vert-5.avif"
        imageAlt="Modern business meeting in a minimalist office interior with natural light and contemporary workspace design."
        bgColorClass="is-light-strong"
      />
      <ProjectListing />
      <ImageSplit />
      <ConsultationSection />
      <TeamStats />
    </>
  );
};

export default Home;
