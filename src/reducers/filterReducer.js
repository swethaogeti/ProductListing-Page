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
  console.log(action);
  switch (action.type) {
    case CHANGE_SORT_BY:
      return { ...state, sortBy: action.payload };
    case CHANGE_IDEAL_FOR:
      return { ...state, idealFor: action.payload };
  }
};
