import { motion } from "framer-motion";
import Typing from "../static/Typing";

const variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 0 },
};

const arrowVariants = {
  animate: {
    y: [0, 10, 0], // Arrow moves up and down
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

function Hero() {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen relative"
      style={{
        backgroundImage: 'url("/image/hero.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content Section */}
      <div className="relative flex flex-col items-center justify-center text-center text-white w-full px-6 mt-16">
        <motion.div initial="visible" animate="hidden" variants={variants}>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
            Together, Let&apos;s Wear Our Pride and Let It Shine
          </h1>
          <p className="text-lg md:text-2xl mt-4 font-medium text-gray-300 drop-shadow-md">
            Embrace the Spirit of Kenya with <Typing />
          </p>
        </motion.div>
      </div>

      {/* Animated Down Arrow */}
      <motion.div
        className="absolute bottom-10 cursor-pointer"
        variants={arrowVariants}
        animate="animate"
        onClick={scrollToNextSection}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="white"
          className="w-8 h-8 md:w-10 md:h-10"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12.75L12 20.25L4.5 12.75" />
        </svg>
      </motion.div>
    </div>
  );
}

export default Hero;
