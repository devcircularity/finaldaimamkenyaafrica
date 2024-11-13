export default function ContactContent() {
    return (
      <div className="w-full max-w-4xl p-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <p className="mb-4">Address: Nairobi, Kenya</p>
        <p className="mb-4">Phone: +254 721 888 887</p>
        <p className="mb-4">Email: info@daimamkenyaafrica.com</p>
        <form className="mt-6">
          <input type="text" placeholder="Your Name" className="w-full p-2 mb-4 border" />
          <input type="email" placeholder="Your Email" className="w-full p-2 mb-4 border" />
          <textarea placeholder="Your Message" className="w-full p-2 mb-4 border" rows={4}></textarea>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Send Message</button>
        </form>
      </div>
    );
  }
  