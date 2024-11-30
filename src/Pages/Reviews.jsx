import React from "react";
import UseTitleHook from "../hooks/UseTitleHook";
import Banner from "../Components/Banner.jsx";
import { useLoaderData } from "react-router-dom";
import ReviewCard from "../Components/ReviewCard.jsx";

const Reviews = () => {
  UseTitleHook("Reviews");
  const data = useLoaderData();
  return (
    <>
      <div>
        <div className="bg-purple-500 py-[3rem] text-white">
          <Banner
            title={"Reviews"}
            descript={
              "This review offers a straightforward look at Product, focusing on essential features, performance, and value for money. Written to help prospective users understand both the strengths and limitations, it’s a quick yet thorough read for anyone considering this option"
            }
          ></Banner>
        </div>
        <div className="max-w-screen-xl mx-auto my-[3rem]">
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5">
              {data.map((item, index) => (
                <ReviewCard key={item.id} item={item}></ReviewCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
