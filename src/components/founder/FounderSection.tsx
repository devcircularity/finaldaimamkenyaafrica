import Image from 'next/image';

function FounderSection() {
  return (
    <div className="relative">
      {/* Transition Image */}
      <div className="absolute top-0 left-0 w-screen">
        <Image
          src="/patterns/7.png" // Path to the transition pattern
          alt="transition"
          width={1920}
          height={64}
          className="w-screen h-8 block"
        />
      </div>

      {/* Section Content */}
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-8 p-6 pt-20 relative z-10">
        {/* Image Section */}
        <div className="flex-shrink-0 md:order-none order-1">
          <Image
            src="/image/team/3.png" // Path to the founder's image
            alt="Portrait of Mrs. Zahra Bahlewa Moi"
            width={400} // Image width for larger screens
            height={400} // Image height for larger screens
            className="rounded-lg w-full h-auto md:w-[400px] md:h-[400px]" // Responsive image sizing
          />
        </div>

        {/* Text Content Section */}
        <div className="flex-grow text-black text-left md:order-none order-2">
          <h1 className="text-3xl font-bold mb-4">Mrs. Zahra Bahlewa Moi</h1>
          <h2 className="text-3xl font-bold text-gray-600 mb-4">Seasoned Business Leader</h2>
          <article className="text-xl">
            <p className="mb-5 font-bold">LEADERSHIP WITH PURPOSE</p>
            <p className="mb-5">
              A visionary at heart, Mrs. Zahra Bahlewa Moi is a distinguished business leader celebrated for her strategic acumen and dedication to excellence. Her story is one of resilience, innovation, and a commitment to transforming challenges into opportunities.
            </p>
            <p className="mb-5">
              With a Global Executive Master’s in Business Administration and a Bachelor’s in International Business Administration from USIU-A, Zahra has honed her expertise to build and lead dynamic organizations. Her leadership journey is marked by a focus on sustainability, collaboration, and innovation.
            </p>
            <p className="mb-5">
              From her transformative work on the board of the Tourism Research Institute to her tenure as CEO of the award-winning Lord Erroll Restaurant, Zahra’s impact resonates across industries. She champions a culture of excellence, driving growth and fostering connections that inspire progress.
            </p>
            <p className="mb-5">
              Today, as a director for multiple companies, Zahra continues to pave the way for a future defined by innovation, integrity, and shared success.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}

export default FounderSection;
