import Image from 'next/image';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="flex flex-col items-center bg-gradient-to-r from-gradientRight to-gradientLeft">
      <Image
        src="/patterns/7.png"
        alt="transition"
        width={1920} // Replace with actual width
        height={32}  // Replace with actual height
        className="w-full h-8 transform rotate-180 block"
        style={{ margin: 0, padding: 0 }}
      />

      <div className="flex desktop:justify-center mobile:justify-center mobile:flex-wrap w-full text-white pt-8">
        {/* About Us Section */}
        <div className="flex flex-col text-xl desktop:w-1/4 mobile:w-full mobile:justify-center mobile:mb-8 self-center text-center">
          <h4 className="text-2xl font-bold mb-4">About Us</h4>
          <ul className="space-y-2">
            <li><i className="ion-ios-arrow-forward"></i> <Link href="#">Home</Link></li>
            <li><i className="ion-ios-arrow-forward"></i> <Link href="#about">About Us</Link></li>
            <li><i className="ion-ios-arrow-forward"></i> <Link href="#fabrics">Our Fabrics</Link></li>
            <li><i className="ion-ios-arrow-forward"></i> <Link href="#contact">Contact</Link></li>
          </ul>
        </div>

        {/* Useful Links Section */}
        <div className="flex flex-col text-xl desktop:w-1/4 mobile:w-full mobile:justify-center mobile:mb-8 self-center text-center">
          <h4 className="text-2xl font-bold mb-4">Useful Links</h4>
          <ul className="space-y-2">
            <li><i className="ion-ios-arrow-forward"></i> <Link href="#team">Our Founder</Link></li>
            <li><i className="ion-ios-arrow-forward"></i> <Link href="#faq">FAQ</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col text-xl desktop:w-1/4 mobile:w-full mobile:justify-center mobile:mb-8 self-center text-center">
          <h4 className="text-2xl font-bold mb-4">Contact Us</h4>
          <p>
            Nairobi, Kenya<br />
            <strong>Phone:</strong> +254 721 888 887<br />
            <strong>Email:</strong> info@daimamkenyaafrica.com<br />
            <strong>Email:</strong> zahra@daimamkenyaafrica.com<br />
          </p>
        </div>

        {/* Newsletter Subscription */}
        <div className="flex flex-col text-xl desktop:w-1/4 mobile:w-full mobile:justify-center mobile:mb-8 self-center text-center">
          <h4 className="text-2xl font-bold mb-4">Subscription</h4>
          <p>Subscribe to our newsletter for updates on our products and initiatives.</p>
          <form action="#" method="post" className="mt-4">
            <input type="email" name="email" placeholder="Your Email" className="p-2 rounded-lg mb-2" />
            <input type="submit" value="Subscribe" className="p-2 bg-white text-black rounded-lg cursor-pointer" />
          </form>
        </div>
      </div>

      <hr className="w-full border-t border-gray-600 mt-4" />

      <div className="flex text-white text-center p-5">
        &copy; {new Date().getFullYear()} Daima Mkenya Africa. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
