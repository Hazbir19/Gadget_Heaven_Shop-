import {
  NavLink,
  Outlet,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Banner from "../Components/Banner";
import BannerCard from "../Components/BannerCard";
import "../index.css";
import CategoryList from "../Components/CategoryList";
import UseTitleHook from "../hooks/UseTitleHook";
const Home = () => {
  const location = useLocation();
  const islocation = location.pathname === "/";
  const navigate = useNavigate();
  const categories = useLoaderData();
  const HandleShopNow = () => {
    navigate("/dashboard");
  };
  UseTitleHook("Home");
  return (
    <>
      <div className="max-w-screen-2xl mx-auto">
        <div
          className={`bg-purple-600 text-white h-[40rem]  ${
            islocation
              ? "bg-purple-600 text-white justify-around border-x-8 border-b-8 rounded-b-xl border-white shadow-2xl"
              : ""
          }`}
        >
          <Banner
            title={
              "Upgrade Your Tech Accessorize with Gadget Heaven Accessories"
            }
            descript={
              "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
            }
          ></Banner>
          <div className="flex justify-center">
            <button
              className=" bg-white text-purple-500 px-5 py-2 rounded-xl font-bold"
              onClick={HandleShopNow}
            >
              Shop Now
            </button>
          </div>
        </div>
        {/* Banner */}
        <div className=" relative inset-0 -top-[15rem] left-[15rem]">
          <BannerCard></BannerCard>
        </div>
        <div className="-mt-[13rem]">
          <Banner title={"Explore Cutting-Edge Gadgets"}></Banner>
        </div>
        {/* card Asider and card */}
        <div className="my-[8rem] flex justify-around">
          <div className="bg-white p-5 shadow-lg  rounded-xl h-[25rem]">
            {categories.map((item, index) => (
              <CategoryList key={index} item={item} />
            ))}
          </div>
          <div className="w-8/12">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
