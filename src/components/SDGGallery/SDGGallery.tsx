import Image from 'next/image';

const SDGGallery = () => {
    const sdgData = [
        {
            id: 8,
            src: '/image/sdg/E Inverted Icons_WEB-08.png',
            alt: 'SDG 8 - Decent Work and Economic Growth',
        },
        {
            id: 9,
            src: '/image/sdg/E Inverted Icons_WEB-09.png',
            alt: 'SDG 9 - Industry, Innovation and Infrastructure',
        },
        {
            id: 12,
            src: '/image/sdg/E Inverted Icons_WEB-12.png',
            alt: 'SDG 12 - Responsible Consumption and Production',
        },
        {
            id: 13,
            src: '/image/sdg/E Inverted Icons_WEB-13.png',
            alt: 'SDG 13 - Climate Action',
        },
    ];

    return (
        <section className="relative">
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
            <div className="relative z-10 mt-16 max-w-6xl mx-auto grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-4 p-6">
                {sdgData.map((sdg) => (
                    <div
                        key={sdg.id}
                        className="flex justify-center items-center p-4"
                    >
                        <Image 
                            src={sdg.src} 
                            alt={sdg.alt} 
                            width={150} 
                            height={150} 
                            className="h-auto w-auto" 
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SDGGallery;
