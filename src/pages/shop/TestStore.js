import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import ProductList from "./ProductList";

const TestStore = ({ user, setUser }) => {
  // Move state management here
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div className="headerStyle">
      <Navbar
        user={user}
        setUser={setUser}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ProductList searchTerm={searchTerm} selectedCategory={selectedCategory} />
      <Outlet />
    </div>
  );
};

export default TestStore;
