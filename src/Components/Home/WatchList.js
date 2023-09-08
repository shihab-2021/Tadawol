import React from "react";
import Apple from "./../../Assets/Home/Logo.jpg";
import Google from "./../../Assets/Home/Logo (1).png";
import ie from "./../../Assets/Home/Logo (2).png";
import Right from "./../../Assets/Home/Logo (3).png";
const WatchList = () => {
  return (
    <div className="w-full md:block hidden px-[2px] md:px-0">
      <h2 className=" text-xl font-semibold mb-4">Watch list</h2>
      <div className="p-6 w-[312px] h-[240px] rounded-[20px] shadow bg-white">
        <div className="flex">
          <img className=" z-10" src={Apple} alt="" />
          <img className="-ml-5 z-0" src={Google} alt="" />
          <img className="-ml-5" src={ie} alt="" />
          <img className="-ml-5" src={Right} alt="" />
        </div>
        <div>
          <h5 className=" text-center text-[15px] font-normal mt-3">
            Stay updated on the most recent advancements in the markets you've
            included in your watchlist.
          </h5>
        </div>
        <div>
          <a
            href="/"
            className=" text-center text-[#8A8A8E] flex items-center justify-center mt-2"
          >
            Go to my Watchlist{" "}
            <svg
              className="ml-1 h-10"
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
            >
              <path
                d="M7.49774 6C7.49329 5.86192 7.46656 5.73497 7.41756 5.61915C7.36411 5.50334 7.28393 5.39198 7.17703 5.28508L2.03226 0.253898C1.863 0.0846325 1.65587 0 1.41088 0C1.24162 0 1.09017 0.0400891 0.956539 0.120267C0.818454 0.200445 0.709323 0.309577 0.629145 0.447661C0.544512 0.581292 0.502196 0.730512 0.502196 0.895323C0.502196 1.14477 0.595737 1.36303 0.78282 1.55011L5.35966 6L0.78282 10.4499C0.595737 10.6414 0.502196 10.8597 0.502196 11.1047C0.502196 11.2739 0.544512 11.4254 0.629145 11.559C0.709323 11.6927 0.818454 11.7996 0.956539 11.8797C1.09017 11.9599 1.24162 12 1.41088 12C1.65587 12 1.863 11.9154 2.03226 11.7461L7.17703 6.71492C7.28839 6.60802 7.37079 6.49666 7.42425 6.38085C7.47324 6.26058 7.49774 6.13363 7.49774 6Z"
                fill="#3C3C43"
                fill-opacity="0.6"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WatchList;
