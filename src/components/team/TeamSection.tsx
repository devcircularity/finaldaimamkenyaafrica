import Image from 'next/image';

function TeamSection() {
  const teamMembers = [
    {
      name: 'Fridah Mwaniki',
      role: 'Executive Assistant',
      image: '/image/team/5.png', // Replace with correct image path
      description: `
        UNITY IN LEADERSHIP
        Fridah Mwaniki embodies dedication, compassion, and a drive to inspire. Her journey as an entrepreneur and professional is marked by a focus on community, family values, and a commitment to creating meaningful impact. With a diverse background in counseling psychology, administration, and customer service, she bridges technical expertise with a heartfelt approach.
        
        Fridah approaches every challenge with a mindset of excellence, championing a culture where doing things right is not just a goal but a way of life.
      `,
    },
    {
      name: 'Safiya Schmidt',
      role: 'Product Development Manager',
      image: '/image/team/4.png', // Replace with correct image path
      description: `
        CREATIVITY MEETS PURPOSE
        Safiya Schmidt leads with curiosity and an unwavering passion for innovation. As Product Development Manager, she fuses art and functionality to create collections that resonate deeply and spark meaningful conversations.
        
        With a belief that every design tells a story, Safiya channels her creativity into pieces that connect people, inspire dialogue, and celebrate individuality. Her dedication to excellence ensures every creation leaves a lasting impression, standing as a testament to timeless craftsmanship.
      `,
    },
  ];

  return (
    <section className="relative bg-[#F5F5DC]"> {/* Matching cream/beige background */}
      {/* Full-Width Transition Pattern */}
      <div className="absolute top-0 left-0 w-screen">
        <Image
          src="/patterns/7.png" // Path to the transition pattern
          alt="transition"
          width={1920}
          height={64}
          className="w-screen h-8 block"
        />
      </div>

      {/* Content Wrapper */}
      <div className="max-w-6xl mx-auto flex flex-col gap-12 p-6 relative z-10">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`flex flex-col items-start gap-8 md:flex-row ${
              index % 2 === 0 ? '' : 'md:flex-row-reverse'
            } ${index === 0 ? 'mt-16' : ''}`} // Add margin only for the first team member
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
            <div className={`flex-grow text-black ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
              <h1 className="text-3xl font-bold mb-4">{member.name}</h1>
              <h2 className="text-3xl font-bold text-gray-600 mb-4">{member.role}</h2>
              <article className="desktop:text-xl mobile:text-md">
                {member.description
                  .split('\n')
                  .map((text, i) => (
                    <p key={i} className="mb-5">
                      {text.trim()}
                    </p>
                  ))}
              </article>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeamSection;
