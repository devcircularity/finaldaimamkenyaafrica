import Project from "../navigation/links/Project";
import data from "../../data/data";
import Image from "next/image"; // Import next/image

const Projects = () => {
  return (
    <div id="Work" className="flex flex-col bg-gradient-to-r from-gradientRight to-gradientLeft">
      <Image
        className="w-full h-8 transform rotate-180 block"
        src="/patterns/7.png"
        alt="transition"
        width={1920} // Adjust width according to your image
        height={64} // Adjust height according to your image
        style={{ margin: 0, padding: 0 }}
      />
      <p className="flex text-4xl mb-8 mt-8 justify-center text-white font-bold text-center">
        Featured Projects
      </p>
      <div className="flex flex-wrap w-full gap-8 desktop:px-20 justify-center">
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
