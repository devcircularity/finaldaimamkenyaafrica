import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Typing from '../static/Typing';
import Arrow from '../static/Arrow';
import Image from 'next/image';

const variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 0 },
};

function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    // Restore scrolling when modal is closed
    document.body.style.overflow = 'auto';
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen relative"
      style={{
        backgroundImage: 'url("/image/hero.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="flex flex-col items-center justify-center text-center z-20 text-white w-full px-4">
        <motion.div initial="visible" animate="hidden" variants={variants}>
          <p
            className="desktop:text-[5vw] mobile:text-[8vw] font-bold text-black"
            style={{ whiteSpace: 'nowrap' }} // Ensure no line break
          >
            Together, Let&apos;s Wear Our Pride
          </p>
          <p className="desktop:text-[3vw] mobile:text-[5vw]">
            Embrace the Spirit of Kenya with
            <Typing />
          </p>
        </motion.div>
      </div>
      {/* Rest of the component remains unchanged */}
    </div>
  );
}

export default Hero;
