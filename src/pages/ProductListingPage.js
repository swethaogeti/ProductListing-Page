import React from "react";
import Filters from "../components/Filters";
import ProductCard from "../components/ProductCard";
import data from "../../src/data/data.json";
const ProductListingPage = () => {
  const { products } = data;
  console.log(products);
  return (
    <div className=" max-w-7xl   mx-auto p-4 flex ">
      <Filters />

      <div className=" flex flex-wrap  ">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default ProductListingPage;
