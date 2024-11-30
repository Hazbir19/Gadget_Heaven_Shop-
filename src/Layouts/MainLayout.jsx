import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../index.css";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <>
      <div>
        <div className="flex flex-col min-h-screen">
          <Navbar></Navbar>
          <Outlet></Outlet>
        </div>
        <div>
          <Footer></Footer>
        </div>
        <Toaster />
      </div>
    </>
  );
};

export default MainLayout;
