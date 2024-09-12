const About = () => {
  return (
    <div className="container mx-auto p-6  bg-white">
      <h1 className="text-4xl font-bold font-mono text-gray-800 mb-8 text-center">
        About Us
      </h1>
      <div className="flex flex-col md:flex-row items-center md:items-start mb-12">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src="https://static.vecteezy.com/system/resources/previews/001/903/669/non_2x/online-shopping-concept-free-photo.jpg"
            alt="Our Team"
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="md:w-1/2 md:ml-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Who We Are
          </h2>
          <p className="text-gray-600 mb-6">
            At StyleStore, we are passionate about bringing the latest trends in
            fashion to our customers. Founded in 2024, we have quickly grown
            into a trusted name in the industry, known for our quality products
            and excellent customer service.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 mb-6">
            Our mission is to provide high-quality, stylish clothing, footwear,
            and accessories at affordable prices. We strive to create a seamless
            shopping experience for our customers by offering a wide range of
            products and exceptional service.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Values
          </h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>
              Quality: We offer products that are crafted with care and built to
              last.
            </li>
            <li>
              Customer Service: We put our customers first and provide
              exceptional support.
            </li>
            <li>
              Innovation: We stay on top of the latest trends to bring fresh
              styles to our store.
            </li>
            <li>
              Sustainability: We are committed to eco-friendly practices and
              reducing our environmental impact.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
