import Image from 'next/image';
import Summary from "../static/Summary";
import Timeline from "../static/Timeline";

const About = () => {
    return (
        <div 
            id="About" 
            className="flex flex-col bg-slate-800 overflow-hidden"
            style={{
                backgroundImage: 'url("/images/about.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
            }}
        >
            {/* Updated transition image */}
            <Image 
                src="/patterns/6.png" 
                alt="transition" 
                width={1920} // Replace with actual image dimensions
                height={32} 
                className="w-full h-8 transform rotate-180 block" 
                style={{ margin: 0, padding: 0 }} 
            />
            
            <div className="flex flex-grow justify-center items-center text-slate-100 backdrop-brightness-75">
                <div className="flex flex-row w-full">
                    <div className="flex desktop:w-1/2 mobile:w-full mobile:p-4 flex-col desktop:p-20">
                        <Summary />
                    </div>
                    <div className="desktop:flex mobile:hidden w-1/2 flex-col pl-10">
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
