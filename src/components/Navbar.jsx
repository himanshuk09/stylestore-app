import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-100 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold font-serif text-blue-400">
          <Link to="/">StyleStore</Link>
        </h1>

        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li>
            <Link to="/" className="hover:text-gray-900">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-gray-900">
              Products
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-900">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-900">
              Contact
            </Link>
          </li>
        </ul>

        <button
          className="block md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <ul className="md:hidden flex flex-col items-center bg-gray-100 text-gray-700 font-medium space-y-4 py-4">
          <li>
            <Link
              to="/"
              className="hover:text-gray-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="hover:text-gray-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-gray-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-gray-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
