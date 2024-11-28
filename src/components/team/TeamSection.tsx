import Image from 'next/image';
import { useGlobalState } from '../../contexts/GlobalStateContext';

// Define a type for the team member
interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
}

function TeamSection() {
  const { toggleModal } = useGlobalState();

  // Typed team members array
  const teamMembers: TeamMember[] = [
    {
      name: 'Mrs. Zahra Bahlewa Moi',
      role: 'Founder & CEO',
      image: '/image/team/3.png',
      description: `
        LEADERSHIP WITH PURPOSE
        Mrs. Zahra Bahlewa Moi is an accomplished business leader with a Global Executive MBA and a BSc (Hons) in International Business Administration from USIU-Africa, as well as an Executive Certificate in Innovation from IMD in Lausanne, Switzerland. She brings extensive experience as a director across multiple companies, specializing in strategic management, business development, and operational excellence.
        
        Her tenure as CEO of the renowned multi-award-winning The Lord Erroll Gourmet Restaurant (2017-2022), and her contributions to Kenya's Tourism Research Institute as a board director (2016-2022) underscore her commitment to promoting Kenya’s rich heritage and excellence on local and global platforms.
        
        As a champion of Daima Mkenya Africa, Zahra brings a unique blend of business acumen, cultural pride, and innovative leadership. Her passion for celebrating Kenyan identity and fostering unity positions her as a key force in advancing Daima Mkenya’s mission of showcasing Kenya’s national pride and spirit to the world through locally made fabrics.
      `,
    },
    {
      name: 'Safiya Schmidt',
      role: 'Product Developer',
      image: '/image/team/4.png',
      description: `
        CREATIVITY MEETS PURPOSE
        Safiya Schmidt leads with curiosity and an unwavering passion for innovation. As Product Development Manager, she fuses art and functionality to create collections that resonate deeply and spark meaningful conversations.
        
        With a belief that every design tells a story, Safiya channels her creativity into pieces that connect people, inspire dialogue, and celebrate individuality. Her dedication to excellence ensures every creation leaves a lasting impression, standing as a testament to timeless craftsmanship.
      `,
    },
    {
      name: 'Fridah Mwaniki',
      role: 'Executive Assistant',
      image: '/image/team/5.png',
      description: `
        UNITY IN LEADERSHIP
        Fridah Mwaniki embodies dedication, compassion, and a drive to inspire. Her journey as an entrepreneur and professional is marked by a focus on community, family values, and a commitment to creating meaningful impact. With a diverse background in counseling psychology, administration, and customer service, she bridges technical expertise with a heartfelt approach.
        
        Fridah approaches every challenge with a mindset of excellence, championing a culture where doing things right is not just a goal but a way of life.
      `,
    },
  ];

  // Add type for the `member` parameter
  const openModal = (member: TeamMember) => {
    toggleModal();
    window.dispatchEvent(new CustomEvent('show-team-member', { detail: member }));
  };

  return (
    <section className="relative bg-[#F5F5DC] p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center cursor-pointer"
            onClick={() => openModal(member)}
          >
            <Image
              src={member.image}
              alt={member.name}
              width={300}
              height={300}
              className="rounded-lg mb-4"
            />
            <h1 className="text-2xl font-bold">{member.name}</h1>
            <h2 className="text-xl text-gray-600">{member.role}</h2>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeamSection;
