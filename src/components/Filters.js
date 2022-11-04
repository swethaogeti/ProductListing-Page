import React from "react";

const Filters = () => {
  //side container
  return (
    <div className=" sticky min-w-[350px] text-left space-y-4">
      <div>
        <h2 className="font-bold text-[1.1rem]">Sort By</h2>
        <div>
          <input type="radio"></input>
          <label> Price-Low To High</label>
        </div>

        <div>
          <input type="radio"></input>
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
          <input type="radio"></input>
          <label>Men</label>
        </div>
        <div>
          <input type="radio"></input>
          <label>Women</label>
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
  );
};

export default Filters;
