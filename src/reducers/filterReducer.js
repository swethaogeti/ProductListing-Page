import {
  CHANGE_BRANDS,
  CHANGE_IDEAL_FOR,
  CHANGE_RATING,
  CHANGE_SIZES,
  CHANGE_SORT_BY,
  CLEAR_FILTERS,
} from "../constants";

export const initialFilterState = {
  sizes: [],
  brands: [],
  idealFor: null,
  sortBy: null,
  rating: null,
};

export const filterReducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case CLEAR_FILTERS:
      return initialFilterState;
    case CHANGE_SORT_BY:
      return { ...state, sortBy: action.payload };
    case CHANGE_IDEAL_FOR:
      return { ...state, idealFor: action.payload };
    case CHANGE_RATING:
      return { ...state, rating: action.payload };
    case CHANGE_BRANDS:
      const newBrands = state.brands.some((brand) => brand === action.payload)
        ? state.brands.filter((brand) => brand !== action.payload)
        : [...state.brands, action.payload];
      return { ...state, brands: newBrands };
    case CHANGE_SIZES:
      const newSizes = state.sizes.some((size) => size === action.payload)
        ? state.sizes.filter((size) => size !== action.payload)
        : [...state.sizes, action.payload];
      return { ...state, sizes: newSizes };

    default:
      return state;
  }
};
