import React, { createContext, useContext, useReducer } from "react";
import { filterReducer, initialFilterState } from "../reducers/filterReducer";
const FilterContext = createContext();
const FilterProvider = ({ children }) => {
  const [filters, dispatchFilters] = useReducer(
    filterReducer,
    initialFilterState
  );
  return (
    <FilterContext.Provider value={{ filters, dispatchFilters }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFiltersContext = () => useContext(FilterContext);
export { useFiltersContext, FilterProvider };
