// ProductGallery.tsx

'use client'; // Mark this component as a Client Component

import Image from 'next/image';
import styles from './ProductGallery.module.css';
import { useEffect, useRef } from 'react';

// Product data with line breaks in names
{/**
const productData = [
  { src: '/kikoys/1.png', name: 'Daima Mkenya<br />Kikoy Fabric (Striped)' },
  { src: '/kikoys/2.png', name: 'Daima Mkenya<br />Kikoy Fabric (Plaid)' },
  { src: '/kikoys/3.png', name: 'Daima Mkenya<br />Kikoy Fabric (Plaid)' },
  { src: '/kikoys/4.png', name: 'Daima Mkenya<br />Kikoy Fabric (Striped)' },
  { src: '/kikoys/5.png', name: 'Daima Mkenya<br />Kikoy Fabric (Striped)' },
  { src: '/kikoys/6.png', name: 'Daima Mkenya<br />Kikoy Fabric (Plaid)' },
];
 */}
const productData = [
  { src: '/products/1.jpg', name: 'Daima Mkenya' },
  { src: '/products/2.jpg', name: 'Daima Mkenya' },
  { src: '/products/3.jpg', name: 'Daima Mkenya' },
  { src: '/products/4.jpg', name: 'Daima Mkenya' },
  { src: '/products/5.jpg', name: 'Daima Mkenya' },
  { src: '/products/6.jpg', name: 'Daima Mkenya' },
];

export default function ProductGallery() {
  const carouselRef = useRef<HTMLDivElement | null>(null); // Type the ref properly

  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel) return; // Handle potential null case

    const cards = carousel.querySelectorAll<HTMLDivElement>(`.${styles.card}`); // Provide type to querySelectorAll

    const pauseCarousel = () => {
      carousel.style.animationPlayState = 'paused';
    };

    const resumeCarousel = () => {
      carousel.style.animationPlayState = 'running';
    };

    cards.forEach((card) => {
      // Type card explicitly as HTMLDivElement
      const cardElement = card as HTMLDivElement;

      // For hover events (desktop)
      cardElement.addEventListener('mouseenter', pauseCarousel);
      cardElement.addEventListener('mouseleave', resumeCarousel);

      // For touch events (mobile devices)
      cardElement.addEventListener('touchstart', pauseCarousel);
      cardElement.addEventListener('touchend', resumeCarousel);
    });

    // Cleanup event listeners on component unmount
    return () => {
      cards.forEach((card) => {
        const cardElement = card as HTMLDivElement;

        cardElement.removeEventListener('mouseenter', pauseCarousel);
        cardElement.removeEventListener('mouseleave', resumeCarousel);
        cardElement.removeEventListener('touchstart', pauseCarousel);
        cardElement.removeEventListener('touchend', resumeCarousel);
      });
    };
  }, []);

  // Duplicate product data to ensure seamless looping
  const loopingData = [...productData, ...productData];

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.carousel} ref={carouselRef}>
        {loopingData.map(({ src, name }, index) => (
          <div key={index} className={styles.card}>
            <Image
              src={src}
              alt={name.replace('<br />', ' ')}
              width={300}
              height={300}
              className={styles.productImage}
              priority
            />
            <div className={styles.overlay}>
              <span
                className={styles.productName}
                dangerouslySetInnerHTML={{ __html: name }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
