import React from "react";
import Filters from "../components/Filters";
import ProductCard from "../components/ProductCard";
import data from "../../src/data/data.json";
import { getIdealForProducts, getSortedProducts } from "../actions";
import { useFiltersContext } from "../contexts/FilterContext";

const ProductListingPage = () => {
  const { products } = data;
  const { filters } = useFiltersContext();
  const ans = getIdealForProducts(products, filters.idealFor);

  const finalProducts = getSortedProducts(ans, filters.sortBy);

  return (
    <div className="w-full   mx-auto p-4 flex ">
      <Filters />

      <div className=" flex flex-wrap  ">
        {finalProducts.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default ProductListingPage;
