import React, { useState } from "react";
import { GrLike } from "react-icons/gr";
import { FcLike } from "react-icons/fc";
const ReviewCard = ({ item }) => {
  const { reviewer_name, email, rating, review_text, reviewer_image } = item;
  const [liked, setLiked] = useState(false);
  const [loveReact, setloveReact] = useState(false);
  const handleLike = () => {
    setLiked(!liked);
  };
  const handleLoveReact = () => {
    setloveReact(!loveReact);
  };
  return (
    <>
      <div className=" mx-5 bg-white my-5 p-5 rounded-t-xl border border-purple-500 shadow-md">
        <div>
          <div className="flex justify-center items-center my-2">
            <img
              src={reviewer_image}
              alt=""
              className="w-[150px] h-[150px] rounded-full"
            />
          </div>
          <div>
            <h2 className="text-lg font-bold text-center my-2">
              {reviewer_name}
            </h2>
            <p className="text-sm text-gray-600 text-center my-2">
              {review_text}
            </p>
            <p className="text-center">
              <span className="text-purple-600">Email:</span>
              <span className="ml-1">{email}</span>
            </p>
            <p className="text-center text-lg bg-white shadow-sm px-5 py-1">
              Rating
              <span className="text-lg text-purple-600 font-bold ml-3">
                {rating}
              </span>
            </p>
          </div>
          <div className="flex gap-2">
            {liked && (
              <div className="my-2">
                <GrLike className="text-lg  text-purple-600" />
              </div>
            )}
            {loveReact && (
              <div className="my-2">
                <FcLike className="text-xl  text-purple-600" />
              </div>
            )}
          </div>
          <div className="flex justify-between items-center mx-5 my-[2rem]">
            <div
              className={`  shadow-md p-5 text-xl rounded-xl ${
                liked ? "bg-purple-500 text-white" : "bg-white text-purple-500 "
              }`}
            >
              <button onClick={handleLike}>
                <GrLike />
              </button>
            </div>
            <div>
              <button
                className={`  shadow-md p-5 text-xl rounded-xl ${
                  loveReact
                    ? "bg-purple-300 text-white"
                    : "bg-white text-purple-500 "
                }`}
                onClick={handleLoveReact}
              >
                <FcLike />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
