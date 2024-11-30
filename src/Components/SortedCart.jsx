import React from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";
const SortedCart = ({ item }) => {
  const {
    product_title,
    product_image,

    price,
    description,
  } = item;
  return (
    <>
      <div className="flex bg-white rounded-xl my-[2rem] p-5 items-center justify-around">
        <div>
          <img
            src={product_image}
            alt={product_title}
            className="w-[200px] h-[200px]"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold my-5 ">{product_title}</h2>
          <p className="text-xl font-light my-5">{description}</p>
          <p className="text-xl font-bold my-5">Price:${price}</p>
        </div>
        <button className="text-red-500 text-3xl">
          <RiDeleteBin2Fill />
        </button>
      </div>
    </>
  );
};

export default SortedCart;
