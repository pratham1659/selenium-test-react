import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = ({ searchTerm, setSearchTerm, selectedCategory, setSelectedCategory }) => {
  const { cartItems } = useCart();

  return (
    <nav className="bg-white shadow-lg p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo */}
        <h2 className="text-xl font-semibold text-gray-700">Shopping App</h2>

        {/* Search & Category */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search products..."
            className="p-2 border rounded w-full sm:w-auto"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <select
            className="p-2 border rounded w-full sm:w-auto"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="all">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="footwear">Footwear</option>
            <option value="accessories">Accessories</option>
            <option value="home_appliances">Home Appliances</option>
          </select>
        </div>

        {/* Cart & User Section */}
        <div className="flex items-center gap-6 mt-2 md:mt-0">
          {/* Cart Icon */}
          <Link to="/cart" className="relative">
            <FiShoppingCart className="text-2xl text-gray-600" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            )}
          </Link>

          {/* User Info */}
          <div className="text-sm">
            <span className="text-gray-700">
              Hello, <strong>Guest</strong>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
