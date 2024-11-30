import { useContext } from "react";
import { FiHeart } from "react-icons/fi";
import { TiShoppingCart } from "react-icons/ti";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import CartContext from "../context/CartContext";
const Navbar = () => {
  const location = useLocation();
  const islocation = location.pathname === "/";
  const navigate = useNavigate();
  const { cart, wishlist } = useContext(CartContext);
  const HandleShopNow = () => {
    navigate("/dashboard");
  };
  return (
    <>
      <div
        className={`w-full items-center p-5 max-w-screen-2xl mx-auto ${
          islocation
            ? "bg-purple-600 text-white justify-around mt-[3.25rem] border-t-8 border-x-8 border-white shadow-2xl rounded-t-xl"
            : ""
        }`}
      >
        <nav className="items-center flex justify-evenly">
          <div className="">
            <NavLink to={"/"} className=" lg:text-xl text-lg">
              Gadget Heaven
            </NavLink>
          </div>
          <div className="">
            <div className=" lg:flex justify-between gap-5  ">
              <NavLink to={"/"}>Home</NavLink>
              <NavLink
                to={"/Dashboard"}
                className={({ isActive }) =>
                  `${isActive ? "text-purple-400 font-semibold" : "text-black"}`
                }
              >
                Dashboard
              </NavLink>
              <NavLink
                to={"/Review"}
                className={({ isActive }) =>
                  isActive ? "text-purple-400 font-semibold" : "text-black"
                }
              >
                Reviews
              </NavLink>
            </div>
          </div>
          <div>
            <div
              className="indicator rounded-full mx-5"
              onClick={HandleShopNow}
            >
              {cart.length > 0 && (
                <span className="indicator-item badge">{cart.length}</span>
              )}

              <button className="btn text-xl" onClick={HandleShopNow}>
                <TiShoppingCart />
              </button>
            </div>
            <div className="indicator rounded-full">
              {wishlist.length > 0 && (
                <span className="indicator-item badge">{wishlist.length}</span>
              )}

              <button className="btn text-xl">
                <FiHeart />
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
