import React from "react";

const Banner = ({ title, descript }) => {
  return (
    <>
      <div>
        <div className="">
          <h1 className="text-center lg:text-7xl md:text-xl text-lg font-bold pt-[3rem]">
            {title}
          </h1>
          <div className="lg:w-1/2 w-full px-1 mx-auto">
            <p className="font-light text-center my-[2rem]">{descript}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
