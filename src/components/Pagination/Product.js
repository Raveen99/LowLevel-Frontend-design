import React from "react";

const Product = ({ title, price, description, thumbnail, brand }) => {
  return (
    <div className="shadow-lg m-4 p-4">
      <div className="">
        <img className="w-72 border-b-2" src={thumbnail} alt={title} />
        <div className="p-2 w-72">
          <div className="mb-1">Name: {title}</div>
          <div className="mb-1">Price: {price}</div>
          <div className="mb-1">
            Brand: <span className="bg-gray-200 p-1">{brand}</span>
          </div>
          <div className="truncate">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
