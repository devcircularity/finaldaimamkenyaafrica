"use client";

import React, { useState, useEffect } from "react";
import { FaInstagram, FaLinkedin, FaTiktok, FaFacebook, FaTwitter } from "react-icons/fa";
import "./TopBar.css";

const TopBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true); // Visible by default
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Apply hiding behavior only for mobile screens
    if (window.innerWidth < 768) {
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down and past 50px: hide the nav
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY || currentScrollY === 0) {
        // Scrolling up or at the top of the page: show the nav
        setIsVisible(true);
      }
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`topbar fixed top-0 left-0 w-full bg-red-700 text-white flex items-center justify-between px-6 py-2 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Tagline Section */}
      <div className="tagline text-sm md:text-base font-medium">
        A stitch in every story, unity in every thread
      </div>

      {/* Social Media Section */}
      <div className="socials flex items-center space-x-4">
        <span className="text-sm md:text-base font-medium">Follow Us</span>
        <a
          href="https://www.instagram.com/daima_mkenya.africa/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram size={20} className="hover:text-gray-300" />
        </a>
        <a
          href="https://www.linkedin.com/in/daimamkenya-africa-168134339/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={20} className="hover:text-gray-300" />
        </a>
        <a
          href="https://www.tiktok.com/@daimamkenya_africa"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
        >
          <FaTiktok size={20} className="hover:text-gray-300" />
        </a>
        <a
          href="https://www.facebook.com/daimamkenya.africa"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook size={20} className="hover:text-gray-300" />
        </a>
        <a
          href="https://x.com/Daimaafricake_"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X"
        >
          <FaTwitter size={20} className="hover:text-gray-300" />
        </a>
      </div>
    </div>
  );
};

export default TopBar;
