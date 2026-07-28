import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import {
  AboutPage,
  ServicesPage,
  SolutionsPage,
  ProjectsPage,
  PropertiesPage,
  GalleryPage,
  BlogPage,
  ContactPage,
  ConsultationPage,
  LocationsPage,
  StyleGuidePage,
} from './pages/Pages';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="solutions" element={<SolutionsPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="properties" element={<PropertiesPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="consultation" element={<ConsultationPage />} />
        <Route path="locations" element={<LocationsPage />} />
        <Route path="style-guide" element={<StyleGuidePage />} />
        {/* Fallback to Home */}
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
