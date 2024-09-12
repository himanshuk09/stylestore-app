import { useState } from "react";
import ProductCard from "../components/ProductCard";
import ProductFilter from "../components/ProductFilter";
import products from "../data/products.json";
import { Link } from "react-router-dom";
const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilterChange = (type, value) => {
    let updatedProducts = [...products];

    if (type === "search") {
      updatedProducts = products.filter((product) =>
        product.title.toLowerCase().includes(value.toLowerCase())
      );
    } else if (type === "category" && value) {
      updatedProducts = products.filter(
        (product) => product.category === value
      );
    } else if (type === "price") {
      updatedProducts.sort((a, b) =>
        value === "asc" ? a.price - b.price : b.price - a.price
      );
    }

    setFilteredProducts(updatedProducts);
  };

  return (
    <div className="container mx-auto p-6 bg-white">
      <h2 className="text-3xl font-bold text-center font-mono mb-8 text-gray-800">
        All Products
      </h2>
      <ProductFilter onFilterChange={handleFilterChange} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredProducts.length == 0
          ? "No Product Found"
          : filteredProducts.map((product) => (
              <Link to={`/products/${product.id}`}>
                <ProductCard key={product.id} product={product} />
              </Link>
            ))}
      </div>
    </div>
  );
};

export default Products;
