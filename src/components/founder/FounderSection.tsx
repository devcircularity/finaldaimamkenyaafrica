import Image from 'next/image';

function FounderSection() {
  return (
    <section className="max-w-6xl mx-auto flex flex-row items-start gap-8 p-6">
      {/* Image Section */}
      <div className="flex-shrink-0">
        <Image
          src="/image/team/zahra.png" // Path to the founder's image
          alt="Portrait of Mrs. Zahra Bahlewa Moi"
          width={400} // Increased width
          height={400} // Increased height
          className="rounded-lg"
        />
      </div>

      {/* Text Content Section */}
      <div className="flex-grow text-black text-left">
        <h1 className="text-3xl font-bold mb-4">Mrs. Zahra Bahlewa Moi</h1>
        <h2 className="text-3xl font-bold text-gray-600 mb-4">Seasoned Business Leader</h2>
        <p className="mb-4">
          Mrs. Zahra Bahlewa Moi is a distinguished business leader with extensive experience in strategic management and business development. She holds a Global Executive Master’s in Business Administration and a Bachelor of Science in International Business Administration, both from United States International University-Africa (USIU-A). Additionally, she earned an Executive Certificate in Being Innovative from IMD in Lausanne, Switzerland.
        </p>
        <p>
          From 2016 to 2022, Zahra served on the board of the Tourism Research Institute, where she played a pivotal role in shaping Kenya’s tourism research and policy development. As CEO of the award-winning Lord Erroll Restaurant from 2017 to 2022, she spearheaded operations, enhancing its reputation as one of Nairobi’s premier dining destinations. Zahra also serves as a director for several companies, leveraging her expertise to drive organizational growth and success.
        </p>
      </div>
    </section>
  );
}

export default FounderSection;
