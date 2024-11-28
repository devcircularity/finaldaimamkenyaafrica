import { motion } from 'framer-motion';
import Image from 'next/image';

function TeamHero() {
  return (
    <div
      className="flex flex-col justify-between min-h-[50vh] desktop:px-20 mobile:p-6"
      style={{
        backgroundImage: 'url("/image/team-hero.png")', // Replace with your team hero image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Empty div for spacing */}
      <div className="flex-grow"></div>

      {/* Hero Heading */}
      <div className="text-white text-left mb-20 desktop:pl-16 mobile:pl-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-snug">
          Meet Our Team
        </h1>
        <p className="text-lg md:text-xl mt-4 leading-relaxed">
          A diverse group of passionate individuals<br />
          committed to making a difference<br />
          together.
        </p>
      </div>

      {/* Empty div for additional spacing if needed */}
      <div className="flex-grow"></div>
    </div>
  );
}

export default TeamHero;
