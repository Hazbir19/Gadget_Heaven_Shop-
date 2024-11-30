import { useContext, useState } from "react";
import Banner from "../Components/Banner";
import UseTitleHook from "../hooks/UseTitleHook";
import CartContext from "../context/CartContext";
import SortedCart from "../Components/SortedCart";
import modalImage from "../assets/Group.png";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  UseTitleHook("Dashboard");
  const navigate = useNavigate();
  const { cart, wishlist, setCart } = useContext(CartContext);
  const [activeTab, setActiveTab] = useState("cart");
  const [isSorted, SetIsSorted] = useState(false);
  const [ShowModel, SetShowModel] = useState(false);
  const TotalPrice = cart.reduce((total, item) => total + item.price, 0);
  const handlePurchase = () => {
    SetShowModel(true);
  };
  const HandleClose = () => {
    SetShowModel(false);
    setCart([]);
    navigate("/");
  };
  const sortedCart = isSorted
    ? [...cart].sort((a, b) => b.price - a.price)
    : cart;
  return (
    <>
      <div>
        <div className="bg-purple-500 py-[3rem] text-white">
          {/* banner */}
          <Banner
            title={"Dashboard"}
            descript="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
          ></Banner>
          <div className="flex justify-center items-center gap-5">
            <div>
              <button
                onClick={() => setActiveTab("cart")}
                className={`px-4 py-2 rounded-xl ${
                  activeTab == "cart"
                    ? "bg-white text-purple-700"
                    : "bg-purple-500 border border-white"
                }`}
              >
                Cart
              </button>
            </div>
            <div>
              <button
                onClick={() => setActiveTab("wishlist")}
                className={`px-4 py-2 rounded-xl ${
                  activeTab == "wishlist"
                    ? "bg-white text-purple-700"
                    : "bg-purple-500 border border-white"
                }`}
              >
                Wishlist
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto my-[3rem]">
          <div>
            {activeTab == "cart" && (
              <div>
                <div className="flex justify-between items-center">
                  <div>
                    <h1 className="text-xl font-semibold">Cart</h1>
                  </div>
                  <div className="flex justify-around gap-5 items-center">
                    <p className="text-lg font-semibold">{`Total Price:$ ${TotalPrice}`}</p>
                    <div>
                      <button
                        onClick={() => SetIsSorted(!isSorted)}
                        className="border border-purple-600 rounded-lg px-4 py-2 text-purple-600"
                      >
                        Sort By Price
                      </button>
                    </div>
                    <div>
                      <button
                        className={` px-5 py-2 rounded-xl text-white ${
                          cart.length === 0 || TotalPrice === 0
                            ? "bg-gray-400"
                            : "bg-gradient-to-b from-purple-600 to-red-300"
                        }`}
                        onClick={handlePurchase}
                        disabled={cart.length === 0 || TotalPrice === 0}
                      >
                        Purchase
                      </button>
                    </div>
                  </div>
                </div>
                <div className="my-12 gap-5">
                  {/* Card */}
                  {sortedCart.map((item) => (
                    <SortedCart
                      key={item.product_title}
                      item={item}
                    ></SortedCart>
                  ))}
                </div>
              </div>
            )}

            {activeTab == "wishlist" && (
              <div>
                <h2 className="text-xl font-semibold">Wishlist</h2>
                <div>
                  {wishlist.map((item) => (
                    <SortedCart
                      key={item.product_title}
                      item={item}
                    ></SortedCart>
                  ))}
                </div>
              </div>
            )}
          </div>

          {ShowModel && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <div className="modal-box bg-white rounded-lg p-6 shadow-lg text-center">
                <img
                  src={modalImage}
                  alt=""
                  className="w-[100px] h-[100px] mx-auto my-2"
                />
                <h3 className="font-bold text-lg text-center my-2">
                  Payment Successfully
                </h3>
                <p className="py-4 text-center mt-2">Thanks for purchasing</p>
                <p className="py-4 text-center ">{`Total Price:$${TotalPrice}`}</p>
                <button
                  onClick={HandleClose}
                  className="bg-gradient-to-b from-purple-500 to-red-400 px-3 py-2 rounded-xl text-white "
                >
                  close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
