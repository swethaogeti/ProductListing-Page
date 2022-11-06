import { SORT_BY_HIGH_TO_LOW, SORT_BY_LOW_TO_HIGH } from "./constants";

export const getSortedProducts = (products, sortBy) => {
  if (sortBy === SORT_BY_LOW_TO_HIGH) {
    return [...products].sort((a, b) => a.discountedPrice - b.discountedPrice);
  } else if (sortBy === SORT_BY_HIGH_TO_LOW) {
    return [...products].sort((a, b) => b.discountedPrice - a.discountedPrice);
  }
  return products;
};

export const getIdealForProducts = (products, idealFor) => {
  if (idealFor !== null) {
    return products.filter((product) => product.idealFor.includes(idealFor));
  }
  return products;
};
