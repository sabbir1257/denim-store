import React from "react";
import { Heart } from "lucide-react";

const FeaturedProductCard = ({ image, name, price }) => {
  return (
    <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-md group ">
      {/* Product Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Favorite Icon */}
      <div className="absolute top-4 w-10 h-10 grid justify-center items-center right-4 bg-white p-1 rounded-full shadow">
        <Heart className="hover:text-red-500" />
      </div>

      <div className="bg-white/90 w-full absolute bottom-0 left-0 right-0">
        {/* Product Name */}
          <h3 className="text-lg font-semibold text-gray-800 px-2">{name}</h3>

        {/* Bottom overlay with price and button */}
        <div className="   p-3 flex justify-between items-center">
          <span className="text-lg font-semibold text-gray-800">${price}</span>
          <button className="px-3 py-1 bg-blue-600 text-white  rounded hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductCard;
