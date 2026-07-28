import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import {
  ProjectPage,
  VisionPage,
  ConnectivityPage,
  LocationPage,
  InvestmentPage,
  GalleryPage,
  ContactPage,
  ConsultationPage,
} from './pages/Pages';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="project" element={<ProjectPage />} />
        <Route path="vision" element={<VisionPage />} />
        <Route path="connectivity" element={<ConnectivityPage />} />
        <Route path="location" element={<LocationPage />} />
        <Route path="investment" element={<InvestmentPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="consultation" element={<ConsultationPage />} />

        {/* Alias routes for existing links */}
        <Route path="about" element={<ProjectPage />} />
        <Route path="services" element={<VisionPage />} />
        <Route path="solutions" element={<InvestmentPage />} />
        <Route path="projects" element={<ProjectPage />} />
        <Route path="properties" element={<ProjectPage />} />
        <Route path="locations" element={<LocationPage />} />

        {/* Fallback */}
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
