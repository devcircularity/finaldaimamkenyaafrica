'use client';

import React from 'react';
import Nav from '../../components/navigation/menu/Navbar';
import BurgerMenu from '../../components/navigation/menu/BurgerMenu'; // Add BurgerMenu
import FoundersHero from '../../components/hero/FoundersHero'; // Hero for the Our Founders page
import FounderSection from '../../components/founder/FounderSection'; // Import the new component
import Modal from '../../components/layout/Modal';
import Footer from '../../components/layout/Footer';
import { GlobalStateProvider } from '../../contexts/GlobalStateContext';
import SDGGallery from '../../components/SDGGallery/SDGGallery'; // Import the SDGGallery component

export default function OurFounders() {
  return (
    <GlobalStateProvider>
      <Modal />
      <BurgerMenu /> {/* Add BurgerMenu here */}
      <Nav />
      <FoundersHero /> {/* Hero section */}
      
      <FounderSection />
      <SDGGallery/>
      <Footer />
    </GlobalStateProvider>
  );
}
