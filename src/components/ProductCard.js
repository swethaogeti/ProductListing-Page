import React from "react";

const ProductCard = ({ product }) => {
  const {
    brand,
    discount,
    discountedPrice,
    id,
    img,
    name,
    originalPrice,
    rating,
    sizes,
  } = product;

  return (
    <div
      className="w-[18rem] max-h-fit m-2 text-left cursor-pointer  p-1"
      key={id}
    >
      <img src={img}></img>

      <h2 className="text-[1.3rem] font-medium text-gray-500">{brand}</h2>
      <h4 className="text-[1rem] font-[400] text-black">{name}</h4>
      <div className="p-1 w-14 my-2 bg-purple-700 text-white text-[1rem] font-bold">
        {rating}⭐
      </div>
      <div className="flex space-x-2">
        <b>₹ {discountedPrice} </b>
        <span className="text-gray-600 line-through">{originalPrice}</span>
        <b className="text-purple-600">{discount}% off</b>
      </div>
      <div className="flex space-x-2">
        <p className="text-gray-500 text-[1rem] font-[500]">Size</p>
        <div className="flex space-x-2">
          {sizes.map((i) => (
            <p>{i}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
