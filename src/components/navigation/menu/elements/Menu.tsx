import MenuItem from './MenuItem';
import { useState, useEffect } from 'react';

const Menu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hoveringDropdown, setHoveringDropdown] = useState(false);

  useEffect(() => {
    if (!hoveringDropdown) {
      const timeout = setTimeout(() => {
        setIsDropdownOpen(false);
      }, 200); // Add a short delay before closing the dropdown
      return () => clearTimeout(timeout);
    }
  }, [hoveringDropdown]);

  return (
    <div className="flex items-center space-x-6 relative">
      <MenuItem title="Home" href="/" />
      <MenuItem title="About Us" href="/about" />
      <MenuItem title="Shop" href="/fabrics" />
      <div
        className="relative"
        onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => setHoveringDropdown(false)}
      >
        <button className="flex items-center space-x-1 text-center hover:text-violet-400">
          <span>Team</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {isDropdownOpen && (
          <div
            className="absolute left-0 mt-2 bg-gradient-to-r from-transparent to-black text-white rounded-lg shadow-md z-50"
            onMouseEnter={() => setHoveringDropdown(true)}
            onMouseLeave={() => setHoveringDropdown(false)}
          >
            <MenuItem title="Our Founder" href="/our-founder" />
            <MenuItem title="The Team" href="/the-team" />
          </div>
        )}
      </div>
      <MenuItem title="Contact" href="/contact" />
    </div>
  );
};

export default Menu;
