import React, { useState } from "react";
import DialogLayout from "../Shared/DialogLayout";

const Wallet = () => {
  const [openMoneyOverview, setOpenMoneyOverview] = useState(true);
  return (
    <div>
      <DialogLayout
        iconColor={"white"}
        open={openMoneyOverview}
        setOpen={setOpenMoneyOverview}
        bgColor={"#005A58"}
        width={800}
        borderRadius={20}
      >
        <div>
          <h1 className=" text-[#fff] font-[600] text-[17px] text-center my-[15px] ">
            Money Overview
          </h1>
          <div className="grid grid-cols-2 gap-[12px]">
            <div className="flex flex-col items-center justify-center gap-[10px] px-[20px] py-[40px] rounded-[20px] border-[1px] border-[#ffffff33] ">
              <h2 className=" text-[20px] font-[600] text-[#fff] flex items-center ">
                Total Wallet Balance{" "}
                <span className="ml-[12px] w-[11px] h-[20px] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="21"
                    viewBox="0 0 12 21"
                    fill="none"
                  >
                    <path
                      opacity="0.5"
                      d="M11.5 10.5C11.5 10.212 11.3988 9.947 11.1851 9.73963L2.26585 0.799539C2.07464 0.603687 1.8272 0.5 1.53476 0.5C0.949898 0.5 0.5 0.949309 0.5 1.54839C0.5 1.83641 0.623722 2.10138 0.80368 2.29724L8.99182 10.5L0.80368 18.7028C0.623722 18.8986 0.5 19.1521 0.5 19.4516C0.5 20.0507 0.949898 20.5 1.53476 20.5C1.8272 20.5 2.07464 20.3963 2.26585 20.1889L11.1851 11.2604C11.3988 11.0415 11.5 10.788 11.5 10.5Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </h2>
              <h1 className=" text-white text-[44px] font-[400] ">
                <span className=" opacity-[0.5] text-[32px] mr-1 ">$</span>
                27,250
                <span className=" opacity-[0.5] text-[32px] ">.68</span>
              </h1>
              <h2 className=" text-[#D0EF7B] text-[28px] ">+11.6%</h2>
            </div>
            <div className="flex flex-col items-center justify-center gap-[10px] px-[20px] py-[40px] rounded-[20px] border-[1px] border-[#ffffff33] ">
              <h2 className=" text-[20px] font-[600] text-[#fff] flex items-center ">
                Total Wallet Balance{" "}
                <span className="ml-[12px] w-[11px] h-[20px] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="21"
                    viewBox="0 0 12 21"
                    fill="none"
                  >
                    <path
                      opacity="0.5"
                      d="M11.5 10.5C11.5 10.212 11.3988 9.947 11.1851 9.73963L2.26585 0.799539C2.07464 0.603687 1.8272 0.5 1.53476 0.5C0.949898 0.5 0.5 0.949309 0.5 1.54839C0.5 1.83641 0.623722 2.10138 0.80368 2.29724L8.99182 10.5L0.80368 18.7028C0.623722 18.8986 0.5 19.1521 0.5 19.4516C0.5 20.0507 0.949898 20.5 1.53476 20.5C1.8272 20.5 2.07464 20.3963 2.26585 20.1889L11.1851 11.2604C11.3988 11.0415 11.5 10.788 11.5 10.5Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </h2>
              <h1 className=" text-white text-[44px] font-[400] ">
                <span className=" opacity-[0.5] text-[32px] mr-1 ">$</span>
                27,250
                <span className=" opacity-[0.5] text-[32px] ">.68</span>
              </h1>
              <h2 className=" text-[#D0EF7B] text-[28px] ">+11.6%</h2>
            </div>
          </div>
        </div>
      </DialogLayout>
    </div>
  );
};

export default Wallet;
