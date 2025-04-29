import React, { useEffect, useState } from "react";
import Category from "./Category";

const Categorys = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("/category.json")
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
      })

      .catch((error) => console.log("Error loading data:", error));
  }, []);
  return (
    <div>
      <h1 className="text-4xl text-center font-bold my-10">
        Shop By Categorys
      </h1>
      <div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center min-h-screen bg-gray-100 p-8 ">
          {category.map((item, index) => (
            <Category key={index} name={item.name} image={item.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categorys;
