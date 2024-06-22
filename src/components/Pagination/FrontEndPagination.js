import React from "react";
import { useState, useEffect } from "react";
import Product from "./Product";
import { PaginationShimmer } from "../Shimmer/PaginationShimmer";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const FrontEndPagination = () => {
  const Limit = 10;

  const [noOfPages, setNoOfPages] = useState(0);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const data = await fetch(
      "https://dummyjson.com/products?limit=0 &select = title, price, description, thumbnail, brand"
    );
    const json = await data.json();
    console.log("Json: ", json);

    setProducts(json.products);
    json.total % Limit === 0
      ? setNoOfPages(json.total / Limit)
      : setNoOfPages(Math.ceil(json.total / Limit));
  };
  return (
    <div>
      <div className="flex flex-wrap justify-center">
        {products
          .slice(currentPage * Limit, (currentPage + 1) * Limit)
          .map((product) => (
            <Product key={product.id} {...product} />
          ))}
      </div>

      <div className="flex my-20 justify-center">
        {currentPage > 0 && (
          <div
            className="cursor-pointer"
            onClick={() => setCurrentPage((currentPage) => currentPage - 1)}
          >
            <MdKeyboardArrowLeft size={24} />
          </div>
        )}
        {[...Array(noOfPages).keys()].map((page) => (
          <div
            className={`mx-2 cursor-pointer ${
              currentPage === page && "font-semibold"
            }`}
            key={page}
            onClick={() => setCurrentPage(page)}
          >
            {page + 1}
          </div>
        ))}
        {currentPage < noOfPages - 1 && (
          <div
            className="cursor-pointer"
            onClick={() => setCurrentPage((currentPage) => currentPage + 1)}
          >
            <MdKeyboardArrowRight size={24} />
          </div>
        )}
      </div>
      {products.length === 0 && <PaginationShimmer />}
    </div>
  );
};

export default FrontEndPagination;
