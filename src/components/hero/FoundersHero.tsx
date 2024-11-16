import { motion } from 'framer-motion';
import Image from 'next/image';

function FoundersHero() {
  return (
    <div
      className="flex flex-col justify-between min-h-screen desktop:px-20 mobile:p-6"
      style={{
        backgroundImage: 'url("/image/founders-hero.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Empty div for spacing */}
      <div className="flex-grow"></div>

      {/* Hero Heading */}
      <div className="text-white text-center mb-20">
        <h1 className="hero-heading text-white">Meet Our Founder</h1> {/* Applied global class */}
        <p className="hero-subheading">
          The mind and heart driving our mission. Learn more about her journey and dedication to creating impact.
        </p> {/* Applied global class */}
      </div>

      {/* Empty div for additional spacing if needed */}
      <div className="flex-grow"></div>
    </div>
  );
}

export default FoundersHero;
