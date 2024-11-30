import React from "react";
import { useNavigate } from "react-router-dom";

const Cards = ({ card }) => {
  const navigate = useNavigate();
  const { product_image, product_title, price, product_id } = card;
  return (
    <>
      <div className="bg-white p-5 rounded-xl">
        <div>
          <div>
            <img
              src={product_image}
              alt=""
              className="w-[18rem] h-[12rem] mx-auto"
            />
          </div>
          <div>
            <p className="text-xl font-bold my-5 ml-2">{product_title}</p>
            <p className="text-xl font-bold my-5 ml-2">Price:{price}K</p>
          </div>
          <div className="">
            <button
              className="text-purple-500 bg-white py-1 px-3 rounded-xl border border-purple-400"
              onClick={() => navigate(`/ProductDetails/${product_id}`)}
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
