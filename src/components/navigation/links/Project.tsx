import Tag from "../../static/Tag";
import Image from "next/image";

const Project = ({ headline, image, text, tags }: { headline: string; image: string; text: string; tags: string[] }) => {
  return (
    <div className="flex flex-col transition-all hover:scale-105 scale-100 bg-opacity-20 bg-black rounded-lg max-w-96 w-full m-3 text-white">
      <div className="rounded-t-lg w-full overflow-hidden">
        <Image
          className="object-cover w-full h-auto"
          alt={text}
          src={image}
          width={600}  // Higher width for optimization
          height={400} // Adjust to maintain aspect ratio
        />
      </div>
      <div className="p-4">
        <div className="text-xl font-medium mb-4 text-black">{headline}</div> {/* Title now black */}
        <p>{text}</p>
        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
          {tags.map((item, index) => (
            <li key={index} className="mr-1.5 mt-2"><Tag title={item} /></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Project;
