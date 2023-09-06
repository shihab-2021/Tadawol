import React from "react";
import Profile2 from "./../../Assets/Home/ProfileImg2.png";
import Profile3 from "./../../Assets/Home/ProfileImg3.png";
const TopTraders = () => {
  return (
    <div className="md:w-[885px] h-[202px]">
      <div className="flex justify-between ">
        <h2 className="text-xl font-semibold mb-4">Top Traders</h2>
        <a href="/" className="flex items-center text-[17px] text-[#99999F]">
          <span className="mr-1">See All </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
          >
            <path
              d="M7 6C6.99555 5.86192 6.96882 5.73497 6.91982 5.61915C6.86637 5.50334 6.78619 5.39198 6.67929 5.28508L1.53452 0.253898C1.36526 0.0846325 1.15813 0 0.91314 0C0.743875 0 0.592428 0.0400891 0.458797 0.120267C0.320713 0.200445 0.211581 0.309577 0.131403 0.447661C0.0467706 0.581292 0.00445414 0.730512 0.00445414 0.895323C0.00445414 1.14477 0.0979958 1.36303 0.285078 1.55011L4.86192 6L0.285078 10.4499C0.0979958 10.6414 0.00445414 10.8597 0.00445414 11.1047C0.00445414 11.2739 0.0467706 11.4254 0.131403 11.559C0.211581 11.6927 0.320713 11.7996 0.458797 11.8797C0.592428 11.9599 0.743875 12 0.91314 12C1.15813 12 1.36526 11.9154 1.53452 11.7461L6.67929 6.71492C6.79065 6.60802 6.87305 6.49666 6.9265 6.38085C6.9755 6.26058 7 6.13363 7 6Z"
              fill="#3C3C43"
              fill-opacity="0.6"
            />
          </svg>
        </a>
      </div>
      <div className="grid md:grid-cols-2 grid-rows-2 gap-8">
        <div className=" h-[150px] rounded-[20px] shadow">
          <div className="pt-[20px] px-[24px] pb-[28px]">
            <div className="flex justify-between ">
              <div className="flex">
                <div className="bg-red-200 rounded-full w-12 h-12 flex justify-center items-center mr-3">
                  <img className="w-[33.12px] h-[36px]" src={Profile2} alt="" />
                </div>
                <div>
                  <h6 className="text-[17px] font-semibold">
                    Mohammad Al-Ghamdi
                  </h6>
                  <span className=" text-[13px] text-[#8A8A8E]">KSA</span>
                </div>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="32"
                  viewBox="0 0 33 32"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.5 16C10.5 17.1046 9.60457 18 8.5 18C7.39543 18 6.5 17.1046 6.5 16C6.5 14.8954 7.39543 14 8.5 14C9.60457 14 10.5 14.8954 10.5 16ZM18.5 16C18.5 17.1046 17.6046 18 16.5 18C15.3954 18 14.5 17.1046 14.5 16C14.5 14.8954 15.3954 14 16.5 14C17.6046 14 18.5 14.8954 18.5 16ZM24.5 18C25.6046 18 26.5 17.1046 26.5 16C26.5 14.8954 25.6046 14 24.5 14C23.3954 14 22.5 14.8954 22.5 16C22.5 17.1046 23.3954 18 24.5 18Z"
                    fill="#3C3C43"
                    fill-opacity="0.6"
                  />
                </svg>
              </div>
            </div>
            <div className="flex justify-between mt-5">
              <div>
                <p className="text-[15px]">Initial Deposit</p>
                <p className=" text-lg font-medium">$10,000</p>
              </div>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1"
                  height="46"
                  viewBox="0 0 1 46"
                  fill="none"
                >
                  <path d="M0.5 0V46" stroke="#787880" stroke-opacity="0.2" />
                </svg>
              </span>
              <div>
                <p className="text-[15px]">Current Balance</p>
                <p className="flex text-2xl font-medium text-[#34908E] justify-center items-center gap-1">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="18"
                      viewBox="0 0 15 18"
                      fill="none"
                    >
                      <path
                        d="M7.5 18C6.87985 18 6.4438 17.5735 6.4438 16.9479V5.17536L6.52132 3.12796L3.96318 5.92417L1.76357 8.04739C1.57946 8.22749 1.30814 8.35071 1.01744 8.35071C0.436047 8.35071 0 7.91469 0 7.33649C0 7.06161 0.106589 6.81517 0.329457 6.58768L6.71512 0.331754C6.92829 0.123223 7.2093 0 7.5 0C7.7907 0 8.07171 0.123223 8.28488 0.331754L14.6705 6.58768C14.8934 6.81517 15 7.06161 15 7.33649C15 7.91469 14.5736 8.35071 13.9922 8.35071C13.6919 8.35071 13.4302 8.22749 13.2364 8.04739L11.0368 5.92417L8.47868 3.13744L8.5562 5.17536V16.9479C8.5562 17.5735 8.12984 18 7.5 18Z"
                        fill="#34918E"
                      />
                    </svg>
                  </span>
                  $80,750
                </p>
              </div>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1"
                  height="46"
                  viewBox="0 0 1 46"
                  fill="none"
                >
                  <path d="M0.5 0V46" stroke="#787880" stroke-opacity="0.2" />
                </svg>
              </span>
              <div>
                <p className="text-[15px]">Profit Ratio</p>
                <p className=" text-lg font-medium text-[#4BA33B]">807%</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" h-[150px] rounded-[20px] shadow">
          <div className="pt-[20px] px-[24px] pb-[28px]">
            <div className="flex justify-between ">
              <div className="flex">
                <div className="bg-red-200 rounded-full w-12 h-12 flex justify-center items-center mr-3">
                  <img className="w-[33.12px] h-[36px]" src={Profile3} alt="" />
                </div>
                <div>
                  <h6 className="text-[17px] font-semibold">Maha Husam</h6>
                  <span className=" text-[13px] text-[#8A8A8E]">Egypt</span>
                </div>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="32"
                  viewBox="0 0 33 32"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.5 16C10.5 17.1046 9.60457 18 8.5 18C7.39543 18 6.5 17.1046 6.5 16C6.5 14.8954 7.39543 14 8.5 14C9.60457 14 10.5 14.8954 10.5 16ZM18.5 16C18.5 17.1046 17.6046 18 16.5 18C15.3954 18 14.5 17.1046 14.5 16C14.5 14.8954 15.3954 14 16.5 14C17.6046 14 18.5 14.8954 18.5 16ZM24.5 18C25.6046 18 26.5 17.1046 26.5 16C26.5 14.8954 25.6046 14 24.5 14C23.3954 14 22.5 14.8954 22.5 16C22.5 17.1046 23.3954 18 24.5 18Z"
                    fill="#3C3C43"
                    fill-opacity="0.6"
                  />
                </svg>
              </div>
            </div>
            <div className="flex justify-between mt-5">
              <div>
                <p className="text-[15px]">Initial Deposit</p>
                <p className=" text-lg font-medium">$10,000</p>
              </div>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1"
                  height="46"
                  viewBox="0 0 1 46"
                  fill="none"
                >
                  <path d="M0.5 0V46" stroke="#787880" stroke-opacity="0.2" />
                </svg>
              </span>
              <div>
                <p className="text-[15px]">Current Balance</p>
                <p className="flex text-2xl font-medium text-[#34908E] justify-center items-center gap-1">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="18"
                      viewBox="0 0 15 18"
                      fill="none"
                    >
                      <path
                        d="M7.5 18C6.87985 18 6.4438 17.5735 6.4438 16.9479V5.17536L6.52132 3.12796L3.96318 5.92417L1.76357 8.04739C1.57946 8.22749 1.30814 8.35071 1.01744 8.35071C0.436047 8.35071 0 7.91469 0 7.33649C0 7.06161 0.106589 6.81517 0.329457 6.58768L6.71512 0.331754C6.92829 0.123223 7.2093 0 7.5 0C7.7907 0 8.07171 0.123223 8.28488 0.331754L14.6705 6.58768C14.8934 6.81517 15 7.06161 15 7.33649C15 7.91469 14.5736 8.35071 13.9922 8.35071C13.6919 8.35071 13.4302 8.22749 13.2364 8.04739L11.0368 5.92417L8.47868 3.13744L8.5562 5.17536V16.9479C8.5562 17.5735 8.12984 18 7.5 18Z"
                        fill="#34918E"
                      />
                    </svg>
                  </span>
                  $80,750
                </p>
              </div>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1"
                  height="46"
                  viewBox="0 0 1 46"
                  fill="none"
                >
                  <path d="M0.5 0V46" stroke="#787880" stroke-opacity="0.2" />
                </svg>
              </span>
              <div>
                <p className="text-[15px]">Profit Ratio</p>
                <p className=" text-lg font-medium text-[#4BA33B]">807%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopTraders;
