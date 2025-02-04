export default function ContactContent() {
  return (
    <div className="flex justify-center items-center min-h-[70vh] py-16">
      <div className="w-full max-w-4xl p-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <p className="text-gray-700">Phone: +254 721 888 887</p>
        <p className="text-gray-700">Email: info@daimamkenyaafrica.com</p>
        <p className="mb-4">P.O Box 63023, 00200 Nairobi, Kenya</p>
        <form className="mt-6">
          <input type="text" placeholder="Your Name" className="w-full p-2 mb-4 border rounded" />
          <input type="email" placeholder="Your Email" className="w-full p-2 mb-4 border rounded" />
          <textarea placeholder="Your Message" className="w-full p-2 mb-4 border rounded" rows={4}></textarea>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
