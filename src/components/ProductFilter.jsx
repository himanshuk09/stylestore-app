const ProductFilter = ({ onFilterChange }) => {
  return (
    <div className="mb-4 flex space-x-4">
      <input
        type="text"
        placeholder="Search..."
        className="p-2 border border-gray-300 rounded-md w-[30%] bg-white"
        onChange={(e) => onFilterChange("search", e.target.value)}
      />
      <select
        className="p-2 border rounded-md border-gray-300 bg-white"
        onChange={(e) => onFilterChange("category", e.target.value)}
      >
        <option value="">All Categories</option>
        <option value="Clothing">Clothing</option>
        <option value="Footwear">Footwear</option>
        <option value="Accessories">Accessories</option>
      </select>
      <select
        className="p-2 border rounded-md border-gray-300  bg-white"
        onChange={(e) => onFilterChange("price", e.target.value)}
      >
        <option value="">Sort by Price</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </select>
    </div>
  );
};

export default ProductFilter;
