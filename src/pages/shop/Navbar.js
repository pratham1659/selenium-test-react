import React from "react";

const Navbar = ({ user, setUser, searchTerm, setSearchTerm, selectedCategory, setSelectedCategory }) => {
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <nav className="bg-white shadow-lg p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-xl font-bold mb-2 md:mb-0">E-Commerce App</h1>

        <div className="flex items-center space-x-4 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search products..."
            className="p-2 border rounded flex-grow"
            value={searchTerm}
            onChange={handleSearchChange}
          />

          {/* ... category select ... */}
          <select className="p-2 border rounded" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="all">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="footwear">Footwear</option>
            <option value="accessories">Accessories</option>
            <option value="home_appliances">Home Appliances</option>
          </select>
        </div>

        {/* ... user section ... */}
        <div className="mt-2 md:mt-0">
          <span className="mr-4">
            Hello, <strong>{user ? user.name : "Guest"}</strong>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
