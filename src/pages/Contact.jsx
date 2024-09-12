const Contact = () => {
  return (
    <div className="container mx-auto p-6   bg-white">
      <h1 className="text-4xl font-bold font-mono text-gray-800 mb-8 text-center">
        Contact Us
      </h1>
      <div className="flex flex-col md:flex-row items-start">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-4">
            We’d love to hear from you! Whether you have a question about our
            products, need assistance, or just want to give feedback, we are
            here to help.
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Address:</strong> 123 Fashion Ave, Style City, ST 56789
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Phone:</strong> +1 (123) 456-7890
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Email:</strong> support@stylestore.com
          </p>
        </div>

        <div className="md:w-1/2 md:ml-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Send Us a Message
          </h2>
          <form className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                className="w-full p-2 border border-gray-300 rounded-md"
                rows="4"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
