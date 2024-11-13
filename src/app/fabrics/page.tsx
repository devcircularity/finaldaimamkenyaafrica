'use client';

import React from 'react';
import Nav from '../../components/navigation/menu/Navbar';
import BurgerMenu from '../../components/navigation/menu/BurgerMenu'; // Add BurgerMenu
import FabricsHero from '../../components/hero/FabricsHero'; // Hero for the Fabrics page
import Modal from '../../components/layout/Modal';
import Footer from '../../components/layout/Footer';
import { GlobalStateProvider } from '../../contexts/GlobalStateContext';

export default function Fabrics() {
  return (
    <GlobalStateProvider>
      <Modal />
      <BurgerMenu /> {/* Add BurgerMenu here */}
      <Nav />
      <FabricsHero /> {/* Hero section */}
      <Footer />
    </GlobalStateProvider>
  );
}
