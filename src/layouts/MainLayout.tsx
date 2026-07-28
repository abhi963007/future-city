import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navigation/Navbar';
import Footer from '../components/Footer/Footer';
import { useLenis } from '../hooks/useLenis';

const MainLayout: React.FC = () => {
  // Initialize Lenis smooth scroll globally
  useLenis();

  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
