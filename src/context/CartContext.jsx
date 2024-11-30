import React, { createContext, useState } from "react";
import toast from "react-hot-toast";
export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const addtoCart = (product) => {
    setCart((prev) => [...prev, product]);
    toast.success("This Product Add in your Cart");
  };
  const addWishlist = (product) => {
    setWishlist((prev) => [...prev, product]);
    toast.success("This Product Add in your wishlist");
  };
  return (
    <CartContext.Provider
      value={{ cart, addtoCart, wishlist, addWishlist, setCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
