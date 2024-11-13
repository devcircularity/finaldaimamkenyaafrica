import ContactBtn from "../navigation/menu/elements/ContactBtn";
import Service from "../static/Service";
import Image from "next/image"; // Import next/image

const Services = () => {
  return (
    <div id="Services" className="flex h-fit text-white flex-col items-center bg-slate-800">
      <Image
        className="w-full h-8 transform rotate-180 block"
        src="/patterns/7.png"
        alt="transition"
        width={1920} // Set the appropriate width
        height={64}  // Set the appropriate height
        style={{ margin: 0, padding: 0 }}
      />
      <p className="text-4xl mb-8 mt-8 text-white font-bold">Our Vision & Offerings</p>
      <div className="flex desktop:flex-row mobile:flex-col flex-wrap mobile:items-center pb-8 justify-center text-center h-full">
        <Service
          hl="Authentic Fabric Creation"
          desc="Design and production of fabrics inspired by Kenya's national colors, fostering identity and pride."
          img="/icons/Fabric_Icon.svg"
        />
        <Service
          hl="Cultural Representation"
          desc="Showcasing traditional Kenyan culture and values through unique fabric collections."
          img="/icons/Culture_Icon.svg"
        />
        <Service
          hl="Sustainability & Local Impact"
          desc="Promoting 100% Kenyan cotton and supporting local industries for sustainable growth."
          img="/icons/Sustainability_Icon.svg"
        />
      </div>
      <p className="desktop:text-[40px] mobile:text-[24px] font-bold my-4 text-center">
        Want to Collaborate? Get in Touch
      </p>
      <ContactBtn title="Contact Us" href="/contact" />
    </div>
  );
};

export default Services;
