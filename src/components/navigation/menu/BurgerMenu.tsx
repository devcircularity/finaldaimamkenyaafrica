"use client";

import Burger from "./elements/Burger";
import Close from "./elements/Close";
import MenuItem from "./elements/MenuItem";
import { useGlobalState } from "../../../contexts/GlobalStateContext";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import AnimatedBlurryBg from "src/components/animation/AnimatedBlurryBg";

const BurgerMenu = () => {
  const { isMenuOpen, toggleMenu, exitMenu } = useGlobalState();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }

    window.addEventListener("resize", exitMenu);

    return () => {
      window.removeEventListener("resize", exitMenu);
    };
  }, [isMenuOpen, exitMenu]);

  return (
    <div className="desktop:hidden">
      {!isMenuOpen && (
        <div
          className="fixed top-16 right-0 p-2 z-50" // Adjusted 'top' property to lower the hamburger menu
          onClick={toggleMenu}
        >
          <Burger />
        </div>
      )}
      <AnimatePresence>
        {isMenuOpen && (
          <AnimatedBlurryBg isVisible={isMenuOpen}>
            <div
              className="fixed top-10 right-0 p-2 z-[101] mt-0 text-base" // Lowered the close button to match the burger menu
              onClick={toggleMenu}
            >
              <Close />
            </div>

            <div className="flex flex-col justify-evenly items-center h-full">
              {/* Simplified Menu */}
              <div className="flex flex-col items-center space-y-6">
                <MenuItem title="Home" href="/" />
                <MenuItem title="About Us" href="/about" />
                <MenuItem title="Shop" href="/fabrics" />
                <MenuItem title="Team" href="/the-team" />
                <MenuItem title="Contact" href="/contact" />
              </div>
            </div>
          </AnimatedBlurryBg>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BurgerMenu;
