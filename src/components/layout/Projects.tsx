import Project from "../navigation/links/Project";
import data from "../../data/data";
import Image from "next/image";

const Projects = () => {
  return (
    <div
      id="Work"
      className="flex flex-col min-h-screen"
      style={{
        background: "linear-gradient(45deg, #000000, #FFFFFF, #FF0000, #006600)",
      }}
    >
      <Image
        className="w-full h-8 transform rotate-180 block"
        src="/patterns/7.png"
        alt="transition"
        width={1920}
        height={64}
        style={{ margin: 0, padding: 0 }}
      />
      <p className="flex text-4xl mb-8 mt-8 justify-center text-white font-bold text-center">
        Featured Projects
      </p>
      
      {/* Responsive Grid for Projects */}
      <div className="grid gap-8 w-full desktop:px-20 justify-items-center" 
           style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        {data.map((item, index) => (
          <Project
            key={index}
            headline={item.title}
            image={item.image}
            text={item.text}
            tags={item.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
