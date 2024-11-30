import React from "react";
import Banner from "./Banner";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div>
        <div className=" bg-white text-black">
          <Banner
            title={"Gadget Heaven"}
            descript={
              "Leading the way in cutting-edge technology and innovation."
            }
          ></Banner>
          <div className="max-w-screen-xl mx-auto">
            <hr className="border border-gray-300" />
          </div>
        </div>
        <footer className="footer bg-white text-black p-10 justify-center  gap-[10rem]">
          <nav className="">
            <h6 className=" footer-title text-xl">Services</h6>
            <Link className="link link-hover">Product Support</Link>
            <Link className="link link-hover">Order Tracking</Link>
            <Link className="link link-hover">Shipping & Delivery</Link>
            <Link className="link link-hover">Returns</Link>
          </nav>
          <nav>
            <h6 className="footer-title text-xl">Company</h6>
            <Link className="link link-hover">About Us</Link>
            <Link className="link link-hover">Contact</Link>
            <Link className="link link-hover">Careers</Link>
          </nav>
          <nav>
            <h6 className="footer-title text-xl">Legal</h6>
            <Link className="link link-hover">Terms of Service</Link>
            <Link className="link link-hover">Privacy Policy</Link>
            <Link className="link link-hover">Cookie Policy</Link>
          </nav>
        </footer>
      </div>
    </>
  );
};

export default Footer;
