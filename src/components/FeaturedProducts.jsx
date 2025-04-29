/* import React, { useEffect, useState } from "react";
import FeaturedProductsCard from "./FeaturedProductsCard";

const FeaturedProducts = () => {
  const [product, setProduct] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const visibleProducts = showAll ? product : product.slice(0, 4);

  useEffect(() => {
    fetch("/public/featuredProucts.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      });
  }, []);
  return (
    <div>
      <h1 className="text-3xl font-bold my-10">Featured Products</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {product.slice(0, 4).map((item) => (
          <FeaturedProductsCard
            key={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
      {!showAll && (
        <div className="my-4 text-center">
          <button onClick={() => setShowAll(true)} className="btn btn-primary ">
            View All Products
          </button>
        </div>
      )}
    </div>
  );
};

export default FeaturedProducts;
 */



import React, { useState, useEffect } from "react";
import FeaturedProductsCard from "./FeaturedProductsCard";


const FeaturedProducts = () => {
  const [showAll, setShowAll] = useState(false);
  const [products, setProduct] = useState([]);


  const visibleProducts = showAll ? products : products.slice(0, 4);

  useEffect(() => {
    fetch("/featuredProucts.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      });
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Featured Products</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {visibleProducts.map((product) => (
          <FeaturedProductsCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>

      {!showAll && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Show All
          </button>
        </div>
      )}
    </div>
  );
};

export default FeaturedProducts;
