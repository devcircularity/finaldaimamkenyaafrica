import Image from 'next/image';

const images = [
  '/images/stuff/IMG_8767.jpg',
  '/images/stuff/IMG_8781.jpg',
  '/images/stuff/IMG_8797.jpg',
  '/images/stuff/IMG_8817.jpg',
  '/images/stuff/IMG_8822.jpg',
  '/images/stuff/IMG_8823.jpg',
  '/images/stuff/IMG_8829.jpg',
  '/images/stuff/IMG_8843.jpg',
];

const GallerySection = () => {
  return (
    <div className="gallery-container">
      {images.map((src, index) => (
        <div key={index} className="gallery-item">
          <Image
            src={src}
            alt={`Gallery image ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default GallerySection;
