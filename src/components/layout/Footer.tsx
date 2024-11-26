import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaTiktok, FaFacebook, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="flex flex-col items-center bg-slate-800 text-white">
      <Image
        src="/patterns/7.png"
        alt="transition"
        width={1920}
        height={32}
        className="w-full h-8 transform rotate-180 block"
        style={{ margin: 0, padding: 0 }}
      />

      <div className="flex desktop:justify-center mobile:justify-center mobile:flex-wrap w-full pt-8">
        {/* About Us Section */}
        <div className="flex flex-col text-xl desktop:w-1/4 mobile:w-full mobile:justify-center mobile:mb-8 self-center text-center">
          <h4 className="text-2xl font-bold mb-4">About Us</h4>
          <ul className="space-y-2">
            <li>
              <i className="ion-ios-arrow-forward"></i> <Link href="/">Home</Link>
            </li>
            <li>
              <i className="ion-ios-arrow-forward"></i> <Link href="#about">About Us</Link>
            </li>
            <li>
              <i className="ion-ios-arrow-forward"></i> <Link href="#fabrics">Our Fabrics</Link>
            </li>
            <li>
              <i className="ion-ios-arrow-forward"></i> <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Useful Links Section */}
        <div className="flex flex-col text-xl desktop:w-1/4 mobile:w-full mobile:justify-center mobile:mb-8 self-center text-center">
          <h4 className="text-2xl font-bold mb-4">Useful Links</h4>
          <ul className="space-y-2">
            <li>
              <i className="ion-ios-arrow-forward"></i> <Link href="#team">Our Founder</Link>
            </li>
            <li>
              <i className="ion-ios-arrow-forward"></i> <Link href="#faq">FAQ</Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col text-xl desktop:w-1/4 mobile:w-full mobile:justify-center mobile:mb-8 self-center text-center">
          <h4 className="text-2xl font-bold mb-4">Contact Us</h4>
          <p>
            Nairobi, Kenya<br />
            <strong>Phone:</strong> +254 721 888 887<br />
            <strong>Email:</strong> info@daimamkenyaafrica.com<br />
          </p>
        </div>

        {/* Newsletter Subscription */}
        <div className="flex flex-col text-xl desktop:w-1/4 mobile:w-full mobile:justify-center mobile:mb-8 self-center text-center">
          <h4 className="text-2xl font-bold mb-4">Subscription</h4>
          <p>Subscribe to our newsletter for updates on our products and initiatives.</p>
          <form action="#" method="post" className="mt-4">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="p-2 rounded-lg mb-2 text-black"
              required
            />
            <input
              type="submit"
              value="Subscribe"
              className="p-2 bg-white text-black rounded-lg cursor-pointer"
            />
          </form>
        </div>
      </div>

      <hr className="w-full border-t border-gray-400 mt-4" />

      {/* Social Media Icons */}
      <div className="flex space-x-6 mt-4">
        <Link href="https://www.instagram.com/daima_mkenya.africa/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="w-6 h-6 hover:text-gray-400 transition-colors duration-200" />
        </Link>
        <Link href="https://www.linkedin.com/in/daimamkenya-africa-168134339/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="w-6 h-6 hover:text-gray-400 transition-colors duration-200" />
        </Link>
        <Link href="https://www.tiktok.com/@daima_mkenya_africa" target="_blank" rel="noopener noreferrer">
          <FaTiktok className="w-6 h-6 hover:text-gray-400 transition-colors duration-200" />
        </Link>
        <Link href="https://www.facebook.com/daimamkenya.africa" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="w-6 h-6 hover:text-gray-400 transition-colors duration-200" />
        </Link>
        <Link href="https://x.com/Daimaafricake_" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="w-6 h-6 hover:text-gray-400 transition-colors duration-200" />
        </Link>
      </div>

      <div className="flex text-center p-5">
        &copy; {new Date().getFullYear()} Daima Mkenya Africa. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
