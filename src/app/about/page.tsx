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

export default function About() {
  return (
    <GlobalStateProvider>
      <Modal />
      <BurgerMenu /> {/* Add BurgerMenu here */}
      <Nav />
      <AboutHero />

      <div className="flex flex-col items-center">
        <main className="w-full flex flex-col items-center mt-">
          <AboutContent />
        </main>
      </div>
      <SDGGallery/>
      <Footer />
    </GlobalStateProvider>
  );
}
