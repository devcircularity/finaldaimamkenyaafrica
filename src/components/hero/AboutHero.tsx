import { motion } from 'framer-motion';
import Image from 'next/image';

function AboutHero() {
  return (
    <div
      className="flex flex-col justify-between h-[100vh] desktop:px-20 mobile:p-6"
      style={{
        backgroundImage: 'url("/image/about-hero.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Empty div for spacing */}
      <div className="flex-grow"></div>

      {/* Hero Heading */}
      <div className="text-black text-center mb-10">
        <h1 className="hero-heading">Discover Our Story</h1> {/* Applied global class */}
        <p className="hero-subheading">
          Learn more about our journey, mission, and the inspiration behind our work.
        </p> {/* Applied global class */}
      </div>

      {/* Empty div for additional spacing */}
      <div className="flex-grow"></div>
    </div>
  );
}

export default AboutHero;
