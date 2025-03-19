import React from "react";
import { useCart } from "./CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  return (
    <div id="products" className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h3 id="product-name" className="text-lg font-semibold mb-2">
        {product.name}
      </h3>
      <p id="product-category" className="text-gray-600 mb-2">
        Category: {product.category}
      </p>
      <p id="product-price" className="text-xl font-bold text-blue-600">
        ${product.price}
      </p>
      <button onClick={() => addToCart(product)} className="mt-4 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
