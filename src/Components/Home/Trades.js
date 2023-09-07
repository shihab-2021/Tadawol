import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const Trades = () => {
  const tradesStocks = [
    {
      companyName: "Apple",
      stockPrice: "180.95",
      rating: "+0.86",
      graph: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="26"
          viewBox="0 0 70 26"
          fill="none"
        >
          <path
            d="M1 19.2162L4.57895 11.1081L8.15789 3L11.7368 8.40541L15.3158 17.5946L18.8947 23L22.4737 15.4324L26.0526 19.2162L29.6316 5.7027L33.2105 8.94595L36.7895 20.2973L40.3684 23L43.9474 13.8108L47.5263 7.32432H51.1053L54.6842 20.2973L58.2632 6.24324L61.8421 16.5135L65.4211 8.40541L69 5.7027M69 5.7027V5.7027Z"
            stroke="url(#paint0_linear_356_11)"
            stroke-width="2"
          />
          <defs>
            <linearGradient
              id="paint0_linear_356_11"
              x1="69"
              y1="13"
              x2="1"
              y2="13"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#4BA33B" />
              <stop
                offset="0.689964"
                stop-color="#4BA33B"
                stop-opacity="0.580443"
              />
              <stop offset="1" stop-color="#4BA33B" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      companyName: "NASDAQ",
      stockPrice: "13,240.77",
      rating: "+139.78",
      graph: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="24"
          viewBox="0 0 70 24"
          fill="none"
        >
          <path
            d="M1 22L4.57895 19.2973L8.15789 6.32432L11.7368 14.4324L15.3158 18.2162L18.8947 5.24324L22.4737 7.40541H26.0526L29.6316 19.2973L33.2105 22L36.7895 16.5946L40.3684 6.32432L43.9474 4.7027L47.5263 10.1081L51.1053 2L54.6842 4.7027L58.2632 18.2162L61.8421 7.94595L65.4211 15.5135L69 12.8108M69 12.8108V12.8108Z"
            stroke="url(#paint0_linear_356_25)"
            stroke-width="2"
          />
          <defs>
            <linearGradient
              id="paint0_linear_356_25"
              x1="69"
              y1="12"
              x2="1"
              y2="12"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#4BA33B" />
              <stop
                offset="0.689964"
                stop-color="#4BA33B"
                stop-opacity="0.580443"
              />
              <stop offset="1" stop-color="#4BA33B" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      companyName: "Google",
      stockPrice: "125.23",
      rating: "+0.86",
      graph: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="22"
          viewBox="0 0 70 22"
          fill="none"
        >
          <path
            d="M1 9.10811L4.57895 6.40541L8.15789 6.94595L11.7368 3.7027L15.3158 14.5135L18.8947 11.8108L22.4737 6.40541L26.0526 17.2162L29.6316 18.2973L33.2105 17.2162L36.7895 18.2973L40.3684 1L43.9474 21L47.5263 5.32432L51.1053 13.4324L54.6842 15.5946L58.2632 5.32432L61.8421 4.24324L65.4211 3.7027L69 21M69 21V21Z"
            stroke="url(#paint0_linear_356_39)"
            stroke-width="2"
          />
          <defs>
            <linearGradient
              id="paint0_linear_356_39"
              x1="69"
              y1="11"
              x2="1"
              y2="11"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#4BA33B" />
              <stop
                offset="0.689964"
                stop-color="#4BA33B"
                stop-opacity="0.580443"
              />
              <stop offset="1" stop-color="#4BA33B" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      companyName: "TMUS",
      stockPrice: "131.19",
      rating: "-7.72",
      graph: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="27"
          viewBox="0 0 70 27"
          fill="none"
        >
          <path
            d="M1 23L4.57895 13.8108L8.15789 6.24324L11.7368 5.7027L15.3158 20.2973L18.8947 3L22.4737 8.94595L26.0526 8.40541L29.6316 11.1081L33.2105 7.32432L36.7895 17.5946L40.3684 20.2973L43.9474 19.2162L47.5263 7.32432L51.1053 23L54.6842 15.4324L58.2632 5.7027L61.8421 19.2162L65.4211 16.5135L69 8.40541M69 8.40541V8.40541Z"
            stroke="url(#paint0_linear_356_53)"
            stroke-width="2"
          />
          <defs>
            <linearGradient
              id="paint0_linear_356_53"
              x1="69"
              y1="13"
              x2="1"
              y2="13"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#D66738" />
              <stop offset="0.689964" stop-color="#BA5226" />
              <stop offset="1" stop-color="#D66738" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      companyName: "S&P 500",
      stockPrice: "30.95",
      rating: "+0.73",
      graph: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="24"
          viewBox="0 0 70 24"
          fill="none"
        >
          <path
            d="M1 22L4.57895 19.2973L8.15789 6.32432L11.7368 14.4324L15.3158 18.2162L18.8947 5.24324L22.4737 7.40541H26.0526L29.6316 19.2973L33.2105 22L36.7895 16.5946L40.3684 6.32432L43.9474 4.7027L47.5263 10.1081L51.1053 2L54.6842 4.7027L58.2632 18.2162L61.8421 7.94595L65.4211 15.5135L69 12.8108M69 12.8108V12.8108Z"
            stroke="url(#paint0_linear_356_25)"
            stroke-width="2"
          />
          <defs>
            <linearGradient
              id="paint0_linear_356_25"
              x1="69"
              y1="12"
              x2="1"
              y2="12"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#4BA33B" />
              <stop
                offset="0.689964"
                stop-color="#4BA33B"
                stop-opacity="0.580443"
              />
              <stop offset="1" stop-color="#4BA33B" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
  ];

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Update the screenWidth state when the window is resized
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }

    // Add an event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log(`Screen Width: ${screenWidth}px is working`);
  return (
    <div className="w-full bg-white">
      <div
        style={{
          width: screenWidth - 265,
        }}
      >
        <div className=" bg-white py-[20px] overflow-hidden hidden lg:flex items-center">
          <Marquee
            // className="w-64"
            direction={"left"}
            autoFill={true}
            gradientWidth={80}
            gradient={true}
            speed={50}
          >
            {tradesStocks?.map((tradesStock, index) => {
              return (
                <div key={index}>
                  <div className="flex justify-between  gap-[8px] border-r-[1px] border-[#787880] px-[28px] min-w-[250px] ">
                    <div>
                      <h2 className="text-[#3C3C4399] text-[13px] font-[600] ">
                        {tradesStock?.companyName}
                      </h2>
                      <h1 className="text-black text-[20px] font-[500] ">
                        ${tradesStock?.stockPrice}
                      </h1>
                      <h2
                        className={`${
                          tradesStock?.rating[0] === "+"
                            ? "text-[#4BA33B]"
                            : "text-[#8A8A8E]"
                        }  font-[400] `}
                      >
                        {tradesStock?.rating}
                      </h2>
                    </div>
                    <div className="flex items-end ">{tradesStock?.graph}</div>
                  </div>
                </div>
              );
            })}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Trades;
