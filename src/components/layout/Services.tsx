import Image from 'next/image';

function TeamSection() {
  const teamMembers = [
    {
      name: 'Fridah Mwaniki',
      role: 'Business Entrepreneur',
      image: '/image/team/5.png', // Replace with correct image path
      description: `
        Fridah Mwaniki is a committed business entrepreneur with a diverse background in counseling psychology,
        administration, customer service, and management. Passionate about family, she is driven by a strong desire
        to create a positive impact in society. As an ambitious individual, she is dedicated to achieving her goals and
        making meaningful contributions to the community. Guided by a commitment to excellence, she approaches
        every task with a focus on doing things the right way.
      `,
    },
    {
      name: 'Safiya Schmidt',
      role: 'Product Development Manager',
      image: '/image/team/4.png', // Replace with correct image path
      description: `
        As the Product Development Manager, Safiya Schmidt brings a unique perspective to every collection she works on.
        Her process is fueled by curiosity, collaboration, and a commitment to excellence, ensuring each piece embodies
        both creativity and purpose.

        Safiya believes in the power of creativity to inspire, captivate, and connect. Through her work, she aims to design
        pieces that evoke emotion, spark conversations, and leave a lasting impression. With a passion for innovation and a
        keen eye for detail, she is dedicated to crafting collections that resonate deeply and stand the test of time.
      `,
    },
  ];

  return (
    <section className="max-w-6xl mx-auto flex flex-col gap-12 p-6">
      {/* Transition Pattern */}
      <Image
        className="w-full h-8 block"
        src="/patterns/7.png" // Path to the transition pattern
        alt="transition"
        width={1920}
        height={64}
        style={{ margin: 0, padding: 0 }}
      />

      {teamMembers.map((member, index) => (
        <div
          key={index}
          className={`flex flex-col items-start gap-8 md:flex-row ${
            index % 2 === 0 ? '' : 'md:flex-row-reverse'
          }`}
        >
          {/* Image Section */}
          <div className="flex-shrink-0">
            <Image
              src={member.image}
              alt={`Portrait of ${member.name}`}
              width={400}
              height={400}
              className="rounded-lg w-full h-auto md:w-[400px] md:h-[400px]" // Responsive image sizing
            />
          </div>

          {/* Text Content Section */}
          <div
            className={`flex-grow text-black ${
              index % 2 === 0 ? 'text-left' : 'text-right'
            }`}
          >
            <h1 className="text-3xl font-bold mb-4">{member.name}</h1>
            <h2 className="text-3xl font-bold text-gray-600 mb-4">{member.role}</h2>
            <p className="paragraph-text">{member.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default TeamSection;
