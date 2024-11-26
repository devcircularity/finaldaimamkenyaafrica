'use client';

import React from 'react';
import Nav from '../../components/navigation/menu/Navbar';
import BurgerMenu from '../../components/navigation/menu/BurgerMenu'; // Add BurgerMenu
import AboutHero from '../../components/hero/AboutHero';
import Modal from '../../components/layout/Modal';
import Footer from '../../components/layout/Footer';
import { GlobalStateProvider } from '../../contexts/GlobalStateContext';
import AboutContent from '../../components/layout/About'; // Reuse existing About content
import SDGGallery from '../../components/SDGGallery/SDGGallery'; // Import the SDGGallery component
import AboutPoemSection from '../../components/layout/AboutPoemSection'; // Import the new poem section

export default function About() {
  return (
    <GlobalStateProvider>
      <Modal />
      <BurgerMenu /> {/* Add BurgerMenu here */}
      <Nav />
      <AboutHero />

      {/* Remove container restrictions for full-width components */}
      <div className="w-full">
        <main className="flex flex-col">
          <AboutContent />
          <AboutPoemSection /> {/* Add the new poem section */}
        </main>
      </div>

      <SDGGallery />
      <Footer />
    </GlobalStateProvider>
  );
}
