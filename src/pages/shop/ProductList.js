import React from "react";
import ProductCard from "./ProductCard";
import { products } from "../../api/data";

const ProductList = ({ searchTerm = "", selectedCategory = "all" }) => {
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)
          ) : (
            <p className="text-center col-span-3 text-gray-500">No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
