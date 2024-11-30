import React from "react";
import bgBanner from "../assets/banner.jpg";

const BannerCard = () => {
  return (
    <>
      <div>
        <div className="">
          <img
            src={bgBanner}
            alt=""
            className="w-[69rem] h-[38rem] bg-white/30 backdrop-blur-sm p-10 rounded-lg shadow-lg"
          />
        </div>
      </div>
    </>
  );
};

export default BannerCard;
