import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Using react-icons for the WhatsApp icon
import styles from './WhatsAppButton.module.css';

const WhatsAppButton: React.FC = () => {
  const phoneNumber = '254721888887'; // Replace with your complete phone number
  const message = encodeURIComponent('Hello! I would like to get more information about Daima Mkenya Africa.');

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a href={whatsappURL} target="_blank" rel="noopener noreferrer" className={styles.whatsappButton}>
      <FaWhatsapp size={30} />
    </a>
  );
};

export default WhatsAppButton;
