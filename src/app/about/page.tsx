'use client';

import React from 'react';
import Nav from '../../components/navigation/menu/Navbar';
import BurgerMenu from '../../components/navigation/menu/BurgerMenu'; // Add BurgerMenu
import AboutHero from '../../components/hero/AboutHero';
import Modal from '../../components/layout/Modal';
import Footer from '../../components/layout/Footer';
import { GlobalStateProvider } from '../../contexts/GlobalStateContext';
import AboutContent from '../../components/layout/About'; // Reuse existing About content

export default function About() {
  return (
    <GlobalStateProvider>
      <Modal />
      <BurgerMenu /> {/* Add BurgerMenu here */}
      <Nav />
      <AboutHero />

      <div className="flex flex-col items-center">
        <main className="w-full flex flex-col items-center mt-10">
          <AboutContent />
        </main>
      </div>
      <Footer />
    </GlobalStateProvider>
  );
}
