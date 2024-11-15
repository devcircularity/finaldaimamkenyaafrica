import Image from 'next/image';
import Summary from "../static/Summary";

const About = () => {
    return (
        <div 
            id="About" 
            className="relative flex flex-col bg-[#F5F5DC] overflow-hidden" // Cream/Beige background color
        >
            {/* Updated transition image */}
            <Image 
                src="/patterns/6.png" 
                alt="transition" 
                width={1920} 
                height={32} 
                className="w-full h-8 transform rotate-180 block m-0" // Removed margin
                style={{ padding: 0 }} 
            />
            
            <div className="relative flex flex-grow justify-center items-center text-black">
                <div className="flex flex-row w-full flex-wrap">
                    <div className="flex desktop:w-1/2 mobile:w-full mobile:p-4 flex-col desktop:p-20">
                        <Summary />
                    </div>
                    
                    {/* Desktop-specific large image */}
                    <div className="desktop:flex hidden w-1/2 flex-col pl-10">
                        <Image 
                            src="/image/Daimaabout.jpeg" 
                            alt="Daima About" 
                            width={500} 
                            height={500} 
                            className="object-cover h-full" 
                        />
                    </div>
                    
                    {/* Mobile-specific full-width image */}
                    <div className="desktop:hidden flex mobile:w-full justify-center mt-4">
                        <Image 
                            src="/image/Daimaabout-mobi.jpeg" 
                            alt="Daima About Mobile" 
                            layout="responsive"
                            width={1} 
                            height={1} 
                            className="object-cover w-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
