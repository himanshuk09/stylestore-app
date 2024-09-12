import { useParams } from "react-router-dom";
import products from "../data/products.json";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <div>Product not found</div>;

  return (
    <div className="container mx-auto p-4 min-h-screen bg-white">
      <div className="flex flex-col md:flex-row items-center">
        <img
          src={product?.image}
          alt={product.title}
          className="h-[600px] md:w-1/2 rounded-lg hover:scale-105 mb-4"
        />
        <div className="md:ml-8">
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <p className="text-xl text-gray-700 mb-2">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
