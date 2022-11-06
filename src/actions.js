import {
  SORT_BY_HIGH_TO_LOW,
  SORT_BY_LOW_TO_HIGH,
  RATING_3_AND_MORE,
  RATING_4_AND_MORE,
} from "./constants";

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

export const getRatedProducts = (products, rating) => {
  if (rating === RATING_3_AND_MORE) {
    return products.filter((product) => product.rating >= 3);
  } else if (rating === RATING_4_AND_MORE) {
    return products.filter((product) => product.rating >= 4);
  }
  return products;
};

export const getBrands = (products) => {
  const allBrands = products.map((product) => product.brand);
  const ans = [...new Set(allBrands)];
  return ans;
};

export const getBrandsProducts = (products, brands) => {
  if (brands.length === 0) {
    return products;
  }
  return products.filter((product) => brands.includes(product.brand));
};

export const getSizedProducts = (products, sizes) => {
  if (sizes.length === 0) {
    return products;
  }
  return products.filter(
    (product) => product.sizes.filter((size) => sizes.includes(size)).length > 0
  );
};
