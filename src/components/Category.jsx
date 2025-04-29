import React from "react";

const Category = ({ image, name }) => {
  return (
    <div className="relative w-full h-80 overflow-hidden rounded-xl group shadow-lg">
      {/* Image with zoom on hover */}
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Name and Button at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white">
        <h2 className="text-xl font-semibold">{name}</h2>
        <button className="mt-2 px-4 py-2 w-full bg-blue-500 rounded hover:bg-blue-600 transition">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Category;
