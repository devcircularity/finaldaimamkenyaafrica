'use client';

import React from 'react';
import Nav from '../../components/navigation/menu/Navbar';
import BurgerMenu from '../../components/navigation/menu/BurgerMenu'; // Add BurgerMenu
import TeamHero from '../../components/hero/TeamHero'; // Hero for the Our Team page
import TeamSection from '../../components/team/TeamSection'; // Import the new component for the team section
import Modal from '../../components/layout/Modal';
import Footer from '../../components/layout/Footer';
import { GlobalStateProvider } from '../../contexts/GlobalStateContext';
import SDGGallery from '../../components/SDGGallery/SDGGallery'; // Import the SDGGallery component

export default function OurTeam() {
  return (
    <GlobalStateProvider>
      <Modal />
      <BurgerMenu /> {/* Add BurgerMenu here */}
      <Nav />
      <TeamHero /> {/* Hero section specific to Our Team */}
      <TeamSection /> {/* Section to showcase team members */}
      <SDGGallery /> {/* SDGGallery is shared */}
      <Footer />
    </GlobalStateProvider>
  );
}
