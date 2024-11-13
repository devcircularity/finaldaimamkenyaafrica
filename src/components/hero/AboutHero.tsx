import { motion } from 'framer-motion';
import Image from 'next/image';

function AboutHero() {
  return (
    <div
      className="flex flex-col justify-between h-[70vh] desktop:px-20 mobile:p-6" // Adjusted height to 70vh
      style={{
        backgroundImage: 'url("/image/about-hero.jpg")', // Replace with the About page hero image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Empty div for spacing */}
      <div className="flex-grow"></div>

      {/* Hero Heading */}
      <div className="text-white text-center mb-10">
        <h1 className="text-5xl font-bold">Discover Our Story</h1>
        <p className="mt-4 text-xl">
          Learn more about our journey, mission, and the inspiration behind our work.
        </p>
      </div>

      {/* Empty div for additional spacing */}
      <div className="flex-grow"></div>
    </div>
  );
}

export default AboutHero;
