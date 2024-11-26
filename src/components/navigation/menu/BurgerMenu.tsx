import Burger from "./elements/Burger";
import Close from "./elements/Close";
import MenuItem from "./elements/MenuItem";
import { useGlobalState } from "../../../contexts/GlobalStateContext";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import AnimatedBlurryBg from "src/components/animation/AnimatedBlurryBg";

const BurgerMenu = () => {
    const { isMenuOpen, toggleMenu, exitMenu } = useGlobalState();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown state for the "Team" menu

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
    }, [isMenuOpen, exitMenu]); // Include exitMenu in dependencies

    return (
        <div className="desktop:hidden">
            {!isMenuOpen && (
                <div className="fixed top-0 right-0 p-2 z-50" onClick={toggleMenu}>
                    <Burger />
                </div>
            )}
            <AnimatePresence>
                {isMenuOpen && (
                    <AnimatedBlurryBg isVisible={isMenuOpen}>
                        <div
                            className="fixed top-0 right-0 p-2 z-[101] mt-0 text-base"
                            onClick={toggleMenu}
                        >
                            <Close />
                        </div>

                        <div className="flex flex-col justify-evenly items-center h-full">
                            {/* Updated Menu */}
                            <div className="flex flex-col items-center space-y-6">
                                <MenuItem title="Home" href="/" />
                                <MenuItem title="About Us" href="/about" />
                                <MenuItem title="Shop" href="/fabrics" />
                                <div
                                    className="relative flex flex-col items-center space-y-2"
                                    onMouseEnter={() => setIsDropdownOpen(true)}
                                    onMouseLeave={() => setIsDropdownOpen(false)}
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Mobile toggle
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
                                        <div className="flex flex-col items-center space-y-2">
                                            <MenuItem
                                                title="Our Founder"
                                                href="/our-founder"
                                            />
                                            <MenuItem
                                                title="The Team"
                                                href="/the-team"
                                            />
                                        </div>
                                    )}
                                </div>
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
