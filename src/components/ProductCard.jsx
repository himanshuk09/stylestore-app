import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-2xl  m-5overflow-hidden bg-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img
        src={product?.image}
        alt={product.title}
        className="w-full h-60 object-cover rounded-lg hover:scale-105 mb-4"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
        <p className="text-gray-500">${product.price.toFixed(2)}</p>
        <Link className="block mt-4 text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors duration-300">
          Add to Cart
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
