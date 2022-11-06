import React from "react";
import Filters from "../components/Filters";
import ProductCard from "../components/ProductCard";
import data from "../../src/data/data.json";
import {
  getBrandsProducts,
  getIdealForProducts,
  getRatedProducts,
  getSizedProducts,
  getSortedProducts,
} from "../actions";
import { useFiltersContext } from "../contexts/FilterContext";

const ProductListingPage = () => {
  const { products } = data;
  const { filters } = useFiltersContext();
  const { sortBy, sizes, idealFor, rating, brands } = filters;
  const sizeProducts = getSizedProducts(products, sizes);

  const brandProducts = getBrandsProducts(sizeProducts, brands);

  const idealForProducts = getIdealForProducts(brandProducts, idealFor);
  const ratingProducts = getRatedProducts(idealForProducts, rating);

  const finalProducts = getSortedProducts(ratingProducts, sortBy);

  return (
    <div className="w-full   mx-auto p-4 flex ">
      <Filters />
      <div className="text-left ">
        <h2
          className="text-gray-700 font-bol
         text-[1.5rem] mx-3"
        >
          Number of Available Products{" "}
          <span className="text-purple-600 font-bold">
            {finalProducts.length}
          </span>
        </h2>
        <div className=" flex flex-wrap  ">
          {finalProducts.length > 0 ? (
            finalProducts.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })
          ) : (
            <div className="px-4 justify-center  items-center">
              <h2 className="text-gray-400 font-medium text-[1.5rem]">
                {" "}
                No Products Available
              </h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductListingPage;
