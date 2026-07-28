import React, { useLayoutEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navigation/Navbar';
import Footer from '../components/Footer/Footer';
import { useLenis } from '../hooks/useLenis';

const MainLayout: React.FC = () => {
  // Initialize Lenis smooth scroll globally
  useLenis();

  // Add w-mod-ix3 class to documentElement to reveal preloaded elements for GSAP animations
  useLayoutEffect(() => {
    document.documentElement.classList.add('w-mod-ix3');
  }, []);

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
