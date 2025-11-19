import React, { useState } from "react";
import { useParams } from "react-router";
import UseData from "../../Hooks/UseData";
import { Star } from "lucide-react";

const SingleProducts = () => {
  const { id } = useParams();
  const { products } = UseData();
  const product = products.find((p) => p.id == id);

  // 🧮 Quantity state (1–20)
  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => {
    if (quantity < 20) setQuantity(quantity + 1);
  };

  const decreaseQty = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  if (!product) return <div className="text-center py-10">Product not found!</div>;

  return (
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-8">
      {/* LEFT SIDE IMAGE */}
      <div className="flex flex-col items-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-120 h-auto border border-gray-300 rounded-xl shadow-md mb-4"
        />
        <div className="flex gap-2">
          {[...Array(4)].map((_, i) => (
            <img
              key={i}
              src={product.image}
              alt="thumb"
              className="w-20 h-16 object-cover border border-gray-400 rounded-md cursor-pointer hover:scale-105 transition"
            />
          ))}
        </div>
      </div>

      {/* RIGHT SIDE DETAILS */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{product.name}</h2>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex text-yellow-400">
            {Array.from({ length: 5 }, (_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < Math.round(product.rating) ? "fill-yellow-400" : "fill-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">{product.reviews} Ratings</span>
        </div>

        {/* Price Section */}
        <div className="flex items-baseline gap-3 mb-4">
          <p className="text-2xl font-bold text-green-600">${product.price}</p>
          <p className="text-gray-500 line-through">${product.oldPrice}</p>
          <span className="text-sm text-green-500 font-medium">-{product.discount}</span>
        </div>

        {/* Stock and SKU */}
        <div className="flex items-center justify-between text-sm text-gray-700 mb-4">
          <p>
            <span className="font-semibold">SKU#:</span> {product.sku}
          </p>
          <p>
            <span
              className={`font-semibold ${
                product.stock === "In Stock" ? "text-green-600" : "text-red-500"
              }`}
            >
              {product.stock}
            </span>
          </p>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-4">{product.description}</p>

        {/* Details */}
        <div className="text-gray-700 mb-6">
          <p className="font-semibold mb-2">Product Details:</p>
          <ul className="list-disc list-inside text-sm">
            {product.details.split("|").map((detail, index) => (
              <li key={index}>{detail.trim()}</li>
            ))}
          </ul>
        </div>

        {/* Quantity + Add to Cart */}
        <div className="flex items-center gap-4">
          {/* Quantity Counter */}
          <div className="flex items-center bcp">
            <button
              onClick={decreaseQty}
              className="px-3 py-1 text-lg hover:bg-amber-400 text-white font-semibold"
            >
              -
            </button>
            <span className="px-4 py-1 bg-white font-bold ">{quantity}</span>
            <button
              onClick={increaseQty}
              className="px-3 py-1 text-lg  hover:bg-amber-400 text-white font-semibold"
            >
              +
            </button>
          </div>

          {/* Add to Cart */}
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-md transition">
            ADD TO CART
          </button>

          {/* Wishlist */}
          <button className="border border-gray-300 rounded-md p-2 hover:bg-gray-100 transition">
            ❤️
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProducts;
