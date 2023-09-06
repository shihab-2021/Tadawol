import React from "react";

const Wallet = () => {
  return (
    <div className="m-1 md:m-0 relative">
      <div className=" hidden md:block text-xl font-semibold mb-0 md:mb-4">
        Wallet
      </div>
      <div className=" bg-[#005A58] md:w-[541px] md:h-[240px] rounded-[20px] md:p-10 text-white pt-[81px] pb-14 px-7">
        <p className="text-[17px] ">Total Wallet Balance </p>
        <div className="flex justify-between ">
          <div className="flex items-center">
            <span className="text-4xl font-light pr-1">$</span>
            <span className=" text-4xl font-medium">27,250</span>
            <sub className="text-[28px] font-light opacity-50 flex items-end mr-1">
              .68
            </sub>
            <span>
              <svg
                width="11"
                height="21"
                viewBox="0 0 11 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.5"
                  d="M11 10.5C11 10.212 10.8988 9.947 10.6851 9.73963L1.76585 0.799539C1.57464 0.603687 1.3272 0.5 1.03476 0.5C0.449898 0.5 0 0.949309 0 1.54839C0 1.83641 0.123722 2.10138 0.30368 2.29724L8.49182 10.5L0.30368 18.7028C0.123722 18.8986 0 19.1521 0 19.4516C0 20.0507 0.449898 20.5 1.03476 20.5C1.3272 20.5 1.57464 20.3963 1.76585 20.1889L10.6851 11.2604C10.8988 11.0415 11 10.788 11 10.5Z"
                  fill="white"
                />
              </svg>
            </span>
          </div>
          <div>
            <a
              href="/"
              className="absolute md:relative -bottom-8 md:-bottom-0 md:border-0 border-4 md:left-0 left-40 rounded-full border-white"
            >
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="-3.05176e-05"
                  width="56"
                  height="56"
                  rx="28"
                  fill="#D9F867"
                />
                <path
                  d="M37 28.1924L19 28.1924"
                  stroke="#005A58"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M28.1924 37L28.1924 19"
                  stroke="#005A58"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="flex justify-between mt-5">
          <div>
            <p className="text-[13px]">Profit/Loss</p>
            <p className=" text-xl  text-[#D0EF7B]">+11.6%</p>
          </div>
          <span className="border-r-2 border-white opacity-25"></span>
          <div>
            <p className="text-[13px]">Used Margin</p>
            <p className=" text-2xl text-white ">$ 11,000.68</p>
          </div>
          <span className="border-r-2 border-white opacity-25"></span>
          <div>
            <p className="text-[13px]">Available Margin</p>
            <p className=" text-xl text-white">$ 16,250</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
