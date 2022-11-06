import { useFiltersContext } from "../contexts/FilterContext";
import {
  SORT_BY_HIGH_TO_LOW,
  SORT_BY_LOW_TO_HIGH,
  CHANGE_BRANDS,
  CHANGE_IDEAL_FOR,
  CHANGE_SIZES,
  CHANGE_RATING,
  CLEAR_FILTERS,
  CHANGE_SORT_BY,
  RATING_3_AND_MORE,
  MEN,
  WOMEN,
  L,
  M,
  S,
  XL,
  XS,
  XXL,
  UNISEX,
} from "../constants";
const Filters = () => {
  const { filters, dispatchFilters } = useFiltersContext();
  const { sortBy, sizes, brands, idealFor, rating } = filters;
  return (
    <div className=" sticky min-w-[250px] text-left flex justify-between ">
      <div className="space-y-4">
        <div>
          <h2 className="font-bold text-[1.1rem]">Sort By</h2>
          <div>
            <input
              type="radio"
              name="sortBy"
              checked={sortBy === SORT_BY_LOW_TO_HIGH}
              onChange={() =>
                dispatchFilters({
                  type: CHANGE_SORT_BY,
                  payload: SORT_BY_LOW_TO_HIGH,
                })
              }
            ></input>
            <label> Price-Low To High</label>
          </div>

          <div>
            <input
              type="radio"
              name="sortBy"
              checked={sortBy === SORT_BY_HIGH_TO_LOW}
              onChange={() =>
                dispatchFilters({
                  type: CHANGE_SORT_BY,
                  payload: SORT_BY_HIGH_TO_LOW,
                })
              }
            ></input>
            <label> Price-High To Low</label>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-[1.1rem]">Sizes</h1>
          <div>
            <input type="checkbox"></input>
            <label>S</label>
          </div>
          <div>
            <input type="checkbox"></input>
            <label>M</label>
          </div>
          <div>
            <input type="checkbox"></input>
            <label>L</label>
          </div>
          <div>
            <input type="checkbox"></input>
            <label>XL</label>
          </div>
        </div>

        <div>
          <h2 className="font-bold text-[1.1rem]">Brands</h2>
          <div>
            <input type="checkbox"></input>
            <label>Polo</label>
          </div>
          <div>
            <input type="checkbox"></input>
            <label>Avasa</label>
          </div>
          <div>
            <input type="checkbox"></input>
            <label>Libas</label>
          </div>
          <div>
            <input type="checkbox"></input>
            <label>Highlander</label>
          </div>
          <div>
            <input type="checkbox"></input>
            <label>Allen Solly</label>
          </div>
        </div>

        <div>
          <h2 className="font-bold text-[1.1rem]">Ideal For</h2>
          <div>
            <input
              type="radio"
              name="idealFor"
              checked={idealFor === MEN}
              onChange={() =>
                dispatchFilters({ type: CHANGE_IDEAL_FOR, payload: MEN })
              }
            ></input>
            <label>Men</label>
          </div>
          <div>
            <input
              type="radio"
              name="idealFor"
              checked={idealFor === WOMEN}
              onChange={() =>
                dispatchFilters({ type: CHANGE_IDEAL_FOR, payload: WOMEN })
              }
            ></input>
            <label>Women</label>
          </div>
          <div>
            <input
              type="radio"
              name="idealFor"
              checked={idealFor === UNISEX}
              onChange={() =>
                dispatchFilters({ type: CHANGE_IDEAL_FOR, payload: UNISEX })
              }
            ></input>
            <label>Unisex</label>
          </div>
        </div>

        <div>
          <h2 className="font-bold text-[1.1rem]">Rating</h2>
          <div>
            <input type="radio"></input>
            <label>4 & more</label>
          </div>
          <div>
            <input type="radio"></input>
            <label>5 & more</label>
          </div>
        </div>
      </div>
      <div>
        <button
          className="text-white 
         bg-purple-600 px-2 m-1 cursor-pointer"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default Filters;
