'use client';

import React from 'react';
import Nav from '../../components/navigation/menu/Navbar';
import BurgerMenu from '../../components/navigation/menu/BurgerMenu'; // Add BurgerMenu
import ContactHero from '../../components/hero/ContactHero'; // Create a new ContactHero component
import Modal from '../../components/layout/Modal';
import Footer from '../../components/layout/Footer';
import { GlobalStateProvider } from '../../contexts/GlobalStateContext';
import ContactContent from '../../components/layout/Contact'; // Create a new Contact content component

export default function Contact() {
  return (
    <GlobalStateProvider>
      <Modal />
      <BurgerMenu /> {/* Add BurgerMenu here */}
      <Nav />
      <ContactHero /> {/* Hero for the Contact page */}
      <ContactContent /> {/* Add the contact content */}
      <Footer />
    </GlobalStateProvider>
  );
}
