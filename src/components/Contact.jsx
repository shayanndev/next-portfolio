import Image from 'next/image';

export default function Contact() {
  return (
    <section className="py-16 bg-indigo-100">
      <h2 className="text-center text-4xl font-semibold text-gray-800 mb-8">Get in Touch</h2>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8">

        <div className="flex-1 max-w-sm md:max-w-md">
          <Image
            src="/images/location.png"
            alt="Contact Image"
            width={500}
            height={500}
            className="w-full h-auto object-contain max-w-md mx-auto"
          />
        </div>

        <div className="flex-1 max-w-md w-full">
          <form className="w-full p-8 rounded-lg">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 rounded-lg mb-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-lg mb-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
              placeholder="Message"
              className="w-full p-3 rounded-lg mb-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="w-full px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-500 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>

  );
}
