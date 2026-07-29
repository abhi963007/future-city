import React, { useLayoutEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navigation/Navbar';
import Footer from '../components/Footer/Footer';
import BookVisitModal from '../components/BookVisit/BookVisitModal';
import { BookVisitProvider } from '../context/BookVisitContext';
import { useLenis } from '../hooks/useLenis';

const MainLayout: React.FC = () => {
  useLenis();

  useLayoutEffect(() => {
    document.documentElement.classList.add('w-mod-ix3');
  }, []);

  return (
    <BookVisitProvider>
      <div className="page-wrapper">
        <Navbar />
        <main className="main">
          <Outlet />
        </main>
        <Footer />
        <BookVisitModal />
      </div>
    </BookVisitProvider>
  );
};

export default MainLayout;
