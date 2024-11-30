import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Banner from "../Components/Banner";
import UseTitleHook from "../hooks/UseTitleHook";
import ReactStars from "react-rating-stars-component";
import { TiShoppingCart } from "react-icons/ti";
import { FaRegHeart } from "react-icons/fa";
import CartContext from "../context/CartContext";

const ProductDetails = () => {
  const data = useLoaderData();
  const { cart, addtoCart, wishlist, addWishlist } = useContext(CartContext);
  const { product_id } = useParams();
  const [Product, setProduct] = useState({});
  UseTitleHook("ProductDetails");
  useEffect(() => {
    const singleProduct = data.find(
      (product) => product.product_id == product_id
    );
    setProduct(singleProduct || {});
  }, [data, product_id]);

  const {
    product_title,
    product_image,
    specification,
    rating,
    price,
    description,
    availability,
  } = Product;

  const haswishlist = wishlist.some((item) => item.product_id === product_id);

  const handleAddCart = () => {
    addtoCart(Product);
    console.log("bobo boh");
  };
  const HandleAddtoWishlist = () => !haswishlist && addWishlist(Product);

  return (
    <>
      <div>
        <div className="bg-purple-500 py-[3rem] h-[30rem] text-white">
          <Banner
            title={"Product Details"}
            descript={
              "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
            }
          />
        </div>
        <div className="hero">
          <div className="hero-content bg-white flex-col lg:flex-row p-24 relative -top-[10rem] rounded-xl">
            <img
              src={product_image}
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div className="ml-[3rem]">
              <h1 className="text-5xl font-bold">{product_title}</h1>
              <p className="my-2 font-semibold text-lg"> Price: ${price}</p>
              <div className="my-5">
                {availability === true && (
                  <p className="bg-lime-400 inline px-5 py-1 rounded-xl  bg-opacity-40 border-2 border-lime-400 text-lime-700 ">
                    In Stock
                  </p>
                )}
                <p className="my-5">{description}</p>
              </div>
              <div>
                <h1 className="text-xl font-semibold">specification:</h1>
                <div>
                  {specification &&
                    specification.map((item) => <p className="my-2">{item}</p>)}
                </div>
                <div>
                  <h1 className="text-xl font-semibold">Rating</h1>
                  <div className="flex items-center gap-5">
                    <ReactStars
                      count={5}
                      value={rating}
                      size={24}
                      activeColor="#ffd700"
                      isHalf={true}
                      onChange={rating}
                    />
                    <div>{rating}</div>
                  </div>
                  <div className="flex gap-5">
                    <div className="flex items-center bg-purple-700 px-5 py-2 text-white text-xl rounded-lg gap-1">
                      <button onClick={handleAddCart}>Add to Cart</button>
                      <TiShoppingCart />
                    </div>
                    <button
                      className="bg-white border border-black rounded-full p-3"
                      onClick={HandleAddtoWishlist}
                      disabled={haswishlist}
                    >
                      <FaRegHeart />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
