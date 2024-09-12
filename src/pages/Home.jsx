import ProductCard from "../components/ProductCard";
import products from "../data/products.json";
import { Link } from "react-router-dom";
const Home = () => {
  const featuredProducts = products.slice(0, 4);
  return (
    <div className="bg-white no-scrollbar h-screen overflow-y-scroll">
      <div
        className="relative bg-cover bg-center h-[500px] flex items-center justify-center "
        style={{
          backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/007/153/463/non_2x/shopping-online-on-smartphone-and-new-buy-sale-promotion-pink-backgroud-for-banner-market-ecommerce-women-concept-free-vector.jpg')`,
        }}
      >
        <div className="text-center text-blue-400">
          <h2 className="text-5xl font-extrabold  mb-4">
            Enjoy Your Time with Style
          </h2>
          <p className="text-lg ">
            Discover our collection of clothing, footwear, and accessories.
          </p>
        </div>
      </div>

      <section className="container mx-auto  bg-white">
        <h2 className="text-3xl text-center pt-5 font-mono font-bold text-blue-400 mb-8">
          Our Bestsellers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 p-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <Link to={`/products/${product.id}`}>
              <ProductCard key={product.id} product={product} />
            </Link>
          ))}
        </div>
      </section>

      <section className="container  p-6  bg-white rounded-lg">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h3>
          <p className="mb-6">Stay updated with the latest deals and offers.</p>
          <form className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 border rounded-l-md"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-r-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
