import Image from 'next/image';

const AboutPoemSection = () => {
    const poem = `
        I’m 100% cotton, from Kenya so pure,
        Woven with care, my charm will endure.
        I crinkle gently, a natural grace,
        Each fold and crease, my strength in place.

        I'm more than a fabric, I carry the soul,
        A canvass of unity, making hearts whole.
        I am soft and authentic, a gift from the earth.
        In hues of pride, beauty, and love.

        I fold, I flow, I drape with care,
        A fabric of hope for all to wear.
        I am Daima Mkenya, bold and true,
        A symbol of unity, woven just for you.
    `;

    return (
        <div className="relative flex flex-col bg-[#F5F5DC] overflow-hidden">
            {/* Full-Width Transition Image */}
            <div className="w-full h-8">
                <Image 
                    src="/patterns/6.png" 
                    alt="transition" 
                    width={2020} 
                    height={64} 
                    className="w-full h-full transform rotate-180 block"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col md:flex-row justify-center items-center text-black py-12">
                {/* Left Image Section */}
                <div className="flex-shrink-0 md:w-1/2 w-full p-4">
                    <Image 
                        src="/image/Daimaabout1.jpeg" // Replace with the correct image path
                        alt="Daima Fabric"
                        width={500}
                        height={500}
                        className="object-cover rounded-lg h-auto"
                    />
                </div>

                {/* Right Poem Section */}
                <div className="flex-grow md:w-1/2 w-full text-left p-6 md:pl-12">
                    <h1 className="text-3xl font-bold mb-6">I Am Daima Mkenya</h1>
                    <p className="whitespace-pre-line text-lg leading-relaxed">{poem}</p>
                </div>
            </div>
        </div>
    );
};

export default AboutPoemSection;
