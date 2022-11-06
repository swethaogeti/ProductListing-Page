import React from "react";

const Navbar = () => {
  //top
  return (
    <div
      className=" px-5 py-3 sticky top-0 z-50 bg-purple-500
    shadow-sm"
    >
      <div className="flex items-center justify-between mx-auto w-full  ">
        <h1 className="text-white text-4xl font-bold  flex-col">SWETHA</h1>
        <div className="w-16 h-16">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Eo_circle_purple_white_letter-s.svg/1200px-Eo_circle_purple_white_letter-s.svg.png"></img>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
