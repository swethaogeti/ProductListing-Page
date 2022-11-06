import { useFiltersContext } from "../contexts/FilterContext";
import data from "../../src/data/data.json";
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
  RATING_4_AND_MORE,
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
import { getBrands } from "../actions";
const Filters = () => {
  const { filters, dispatchFilters } = useFiltersContext();
  const { sortBy, sizes, brands, idealFor, rating } = filters;
  const { products } = data;

  const allBrands = getBrands(products);

  return (
    <div className=" sticky bg-gray-100 p-2 min-w-[250px] text-left flex justify-between ">
      <div className="space-y-4 ">
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
          <h2 className="font-bold text-[1.1rem]">Brands</h2>

          {allBrands.map((brand, i) => {
            return (
              <div>
                <input
                  type="checkbox"
                  name="brand"
                  checked={brands.some((brandName) => brandName === brand)}
                  onChange={() =>
                    dispatchFilters({ type: CHANGE_BRANDS, payload: brand })
                  }
                ></input>
                <label key={i}>{brand}</label>
              </div>
            );
          })}
        </div>
        <div>
          <h1 className="font-bold text-[1.1rem]">Sizes</h1>
          <div>
            <input
              type="checkbox"
              name="sizes"
              checked={sizes.some((size) => size === XS)}
              onChange={() =>
                dispatchFilters({ type: CHANGE_SIZES, payload: XS })
              }
            ></input>
            <label>XS</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="sizes"
              checked={sizes.some((size) => size === S)}
              onChange={() =>
                dispatchFilters({ type: CHANGE_SIZES, payload: S })
              }
            ></input>
            <label>S</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="sizes"
              checked={sizes.some((size) => size === M)}
              onChange={() =>
                dispatchFilters({ type: CHANGE_SIZES, payload: M })
              }
            ></input>
            <label>M</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="sizes"
              checked={sizes.some((size) => size === L)}
              onChange={() =>
                dispatchFilters({ type: CHANGE_SIZES, payload: L })
              }
            ></input>
            <label>L</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="sizes"
              checked={sizes.some((size) => size === XL)}
              onChange={() =>
                dispatchFilters({ type: CHANGE_SIZES, payload: XL })
              }
            ></input>
            <label>XL</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="sizes"
              checked={sizes.some((size) => size === XXL)}
              onChange={() =>
                dispatchFilters({ type: CHANGE_SIZES, payload: XXL })
              }
            ></input>
            <label>XXL</label>
          </div>
        </div>

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
          <h2 className="font-bold text-[1.1rem]">Rating</h2>
          <div>
            <input
              type="radio"
              name="rating"
              checked={rating === RATING_3_AND_MORE}
              onChange={() =>
                dispatchFilters({
                  type: CHANGE_RATING,
                  payload: RATING_3_AND_MORE,
                })
              }
            ></input>
            <label>3 & more</label>
          </div>
          <div>
            <input
              type="radio"
              name="rating"
              checked={rating === RATING_4_AND_MORE}
              onChange={() =>
                dispatchFilters({
                  type: CHANGE_RATING,
                  payload: RATING_4_AND_MORE,
                })
              }
            ></input>
            <label>4 & more</label>
          </div>
        </div>
      </div>
      <div>
        <button
          className="text-white 
         bg-purple-600 px-2 m-1 cursor-pointer"
          onClick={() => dispatchFilters({ type: CLEAR_FILTERS })}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default Filters;
