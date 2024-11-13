import { motion } from 'framer-motion';
import Image from 'next/image';

function FabricsHero() {
  return (
    <div
      className="flex flex-col justify-between min-h-screen desktop:px-20 mobile:p-6"
      style={{
        backgroundImage: 'url("/image/fabrics-hero.jpg")', // Replace with actual fabric hero image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Empty div for spacing */}
      <div className="flex-grow"></div>

      {/* Hero Heading */}
      <div className="text-white text-center mb-20">
        <h1 className="text-5xl font-bold">Explore Our Fabrics</h1>
        <p className="mt-4 text-xl">
          Discover unique Kenyan-inspired designs crafted with care and sustainability in mind.
        </p>
      </div>

      {/* Empty div for additional spacing if needed */}
      <div className="flex-grow"></div>
    </div>
  );
}

export default FabricsHero;
