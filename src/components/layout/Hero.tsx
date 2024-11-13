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
      className="flex items-center flex-col min-h-screen desktop:px-20 mobile:p-6 relative"
      style={{
        backgroundImage: 'url("/image/hero.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="flex mobile:justify-center desktop:flex-row desktop:items-center mobile:flex-col-reverse w-full flex-1">
        <div className="flex flex-col z-20 text-white desktop:w-3/5 mobile:w-full mobile:text-center">
          <motion.div initial="visible" animate="hidden" variants={variants}>
            <p className="desktop:text-[5vw] mobile:text-[8vw] font-bold text-lightcyan w-full">
              Together, Let&apos;s Wear Our Pride
            </p>
            <p className="desktop:text-[3vw] mobile:text-[5vw]">
              Embrace the Spirit of Kenya with
              <Typing />
            </p>
            {/* Removed SocialMedia Buttons */}
          </motion.div>
        </div>
        {/**
        <motion.div 
          className="flex flex-col desktop:w-2/5 aspect-square w-full justify-center"
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.5,
            delay: 0.25,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <Image 
            className="mobile:w-full mobile:max-w-xl object-contain self-center animate-scalepulse" 
            src="/images/logo.png" 
            alt="Logo" 
            width={500} // Replace with actual width
            height={500} // Replace with actual height
          />
        </motion.div>
         */}
      </div>
      <div className="desktop:absolute inset-0 flex items-end py-2 desktop:bottom-10 justify-center z-10">
        <Link href="/#Services" aria-label="About">
          <Arrow /> {/* Ensure Arrow component does not render an <a> inside */}
        </Link>
      </div>

      {/* Play Button */}
      <button
        onClick={openModal}
        className="absolute flex items-center justify-center w-16 h-16 bg-white bg-opacity-75 rounded-full shadow-lg hover:bg-opacity-100 transition duration-300 ease-in-out bottom-10 right-10 desktop:bottom-20 desktop:right-20"
        aria-label="Play Video"
      >
        {/* Play Icon SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-blue-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-5.197-2.132A1 1 0 008 9.87v4.26a1 1 0 001.555.832l5.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative w-11/12 max-w-3xl bg-white rounded-lg overflow-hidden">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
              aria-label="Close Video"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {/* Video Player */}
            <div className="w-full">
              <video
                className="w-full h-auto"
                controls
                autoPlay
              >
                <source src="/image/hero.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Hero;
