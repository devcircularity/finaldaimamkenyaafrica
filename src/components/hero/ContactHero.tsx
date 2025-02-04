import { motion } from 'framer-motion';
import Image from 'next/image';

function ContactHero() {
  return (
    <div
      className="flex items-center flex-col min-h-screen desktop:px-20 mobile:p-6"
      style={{
        backgroundImage: 'url("/image/contact-hero.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="w-full max-w-4xl p-6 text-center bg-white bg-opacity-80 mt-32 rounded-lg shadow-lg">
        <h1 className="hero-heading text-black">Get in Touch</h1> {/* Applied global class */}
        <p className="hero-subheading text-gray-800">We&apos;d love to hear from you! Reach out for inquiries or collaborations.</p>
        
        <p className="text-gray-700">Phone: +254 721 888 887</p>
        <p className="text-gray-700">Email: info@daimamkenyaafrica.com</p>
        <p className="mb-4">P.O Box 63023, 00200 Nairobi, Kenya</p>
        <form className="mt-6">
          <input type="text" placeholder="Your Name" className="w-full p-2 mb-4 border rounded" />
          <input type="email" placeholder="Your Email" className="w-full p-2 mb-4 border rounded" />
          <textarea placeholder="Your Message" className="w-full p-2 mb-4 border rounded" rows={4}></textarea>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactHero;
