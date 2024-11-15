'use client';

import React from 'react';
import Nav from '../../components/navigation/menu/Navbar';
import BurgerMenu from '../../components/navigation/menu/BurgerMenu'; 
import GalleryHero from '../../components/hero/GalleryHero'; 
import GallerySection from '../../components/Gallery/Gallery'; 
import Modal from '../../components/layout/Modal';
import Footer from '../../components/layout/Footer';
import { GlobalStateProvider } from '../../contexts/GlobalStateContext';

export default function GalleryPage() {
  return (
    <GlobalStateProvider>
      <Modal />
      <BurgerMenu />
      <Nav />
      <GalleryHero /> {/* Hero section for gallery */}
      <GallerySection /> {/* Gallery Section with images */}
      <Footer />
    </GlobalStateProvider>
  );
}
