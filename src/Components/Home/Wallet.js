import React, { useState } from "react";
import DialogLayout from "../Shared/DialogLayout";
import GradientImg from "../../Assets/Shared/GradientImg.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Dropdown from "../../Assets/Home/Dropdown.svg";
import ChevronLeftSmall from "../../Assets/Home/ChevronLeftSmall.png";
import delete1 from "../../Assets/Home/Delete.svg";

const Wallet = () => {
  const [openMoneyOverview, setOpenMoneyOverview] = useState(false);
  const [openMakeDeposit, setOpenMakeDeposit] = useState(false);
  const [openWithdraw, setWithdraw] = useState(true);
  return (
    <div className="w-full px-[2px] md:px-4">
      <div className=" w-full">
        <div className=" hidden md:block text-xl font-semibold mb-0 md:mb-4">
          Wallet
        </div>
        <div className="relative overflow-hidden bg-[#005A58] md:w-[545px] rounded-[20px] md:p-10 text-white pt-[81px] pb-14 px-7">
          <div className=" absolute top-[-570px] right-0">
            <img src={GradientImg} alt="GradientImg" />
          </div>
          <p className="text-[17px] ">Total Wallet Balance </p>
          <div className="flex justify-between ">
            <div className="flex items-center">
              <span className="text-4xl font-light pr-1">$</span>
              <span className=" text-4xl font-medium">27,250</span>
              <sub className="text-[28px] font-light opacity-50 flex items-end mr-1">
                .68
              </sub>
              <span className="ml-1">
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
              <button
                onClick={() => setOpenMoneyOverview(true)}
                className="hidden md:block relative"
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
              </button>
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
              <p className=" text-[20px] text-white ">$ 11,000.68</p>
            </div>
            <span className="border-r-2 border-white opacity-25"></span>
            <div>
              <p className="text-[13px]">Available Margin</p>
              <p className=" text-[20px] text-white">$ 16,250</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <button
          onClick={() => setOpenMoneyOverview(true)}
          className="mx-auto mt-[-35px] z-10 border-4 border-white rounded-full md:hidden"
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
        </button>
      </div>
      <DialogLayout
        iconColor={"white"}
        open={openMoneyOverview}
        setOpen={setOpenMoneyOverview}
        bgColor={"#005A58"}
        width={800}
        borderRadius={20}
      >
        <div className="px-4 pb-4">
          <h1 className=" text-[#fff] font-[600] text-[17px] text-center my-[15px] ">
            Money Overview
          </h1>
          <div className="grid grid-cols-2 gap-[12px] mt-[46px]">
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
            <div className="flex flex-col items-center justify-center gap-[10px] px-[32px] py-[40px] rounded-[20px] border-[1px] border-[#ffffff33] ">
              <p className=" flex justify-between w-full text-[#fff] text-[17px] font-normal">
                Profit/Loss{" "}
                <span className="text-[20px] font-normal text-[#D0EF7B]">
                  +11.6%
                </span>
              </p>
              <p className=" flex justify-between w-full text-[#fff] text-[17px] font-normal">
                Used Margin{" "}
                <span className="text-[20px] font-light ">$ 11,000.68</span>
              </p>
              <p className=" flex justify-between w-full text-[#fff] text-[17px] font-normal">
                Available Margin{" "}
                <span className="text-[20px] font-light ">$ 16,250</span>
              </p>
            </div>
          </div>
          <div>
            <p>graph</p>
          </div>
          <div className="flex justify-between gap-3">
            <button
              className=" w-full flex gap-1 justify-center items-center px-[68px] py-[10px] text-xl font-semibold"
              style={{
                borderRadius: "100px",
                background: "var(--brand-lime-green, #D9F867)",
                color: "var(--brand-dark-green, #005A58)",
              }}
            >
              <p>
                {" "}
                <ArrowForwardIcon />
              </p>
              <p>Make a Deposit</p>
            </button>
            <button
              className=" w-full flex gap-1 justify-center items-center px-[68px] py-[10px] text-xl font-semibold"
              style={{
                borderRadius: "100px",
                background: "var(--brand-apricot, #FFE175)",
                color: "var(--brand-dark-green, #005A58)",
              }}
            >
              <p>
                {" "}
                <ArrowBackIcon />
              </p>
              <p>Make a Deposit</p>
            </button>
          </div>
        </div>
      </DialogLayout>

      <DialogLayout
        iconColor={""}
        open={openMakeDeposit}
        setOpen={setOpenMakeDeposit}
        bgColor={"#F2F3EE"}
        width={515}
        borderRadius={20}
      >
        <div className="">
          <div
            className=" text-center"
            style={{
              background:
                "radial-gradient(100% 100% at 50% 0%, #D9F867 0%, rgba(217, 248, 103, 0.93) 35.99%, rgba(217, 248, 103, 0.00) 100%)",
            }}
          >
            <p className=" text-[#34908E] text-[17px] font-normal pt-[40px]">
              Fund Your Account
            </p>
            <h1 className=" text-[#005A58] font-bold text-[22px] mt-1 ">
              Make a Deposit
            </h1>
            <p className=" text-[#005A58] text-[68px] font-normal">
              {" "}
              <span
                className="text-[52px] font-normal"
                style={{
                  opacity: "0.5",
                }}
              >
                $
              </span>{" "}
              00.00
            </p>
            <p className=" text-[#34908E] text-[15px] font-normal">
              Minimum deposit amount is{" "}
              <span className="text-[20px]">$10000</span>
            </p>
          </div>

          <div className="flex justify-between mt-[28px] mx-[28px]">
            <button
              className=" flex gap-2 justify-center items-center px-[16px] py-[4px] "
              style={{
                borderRadius: "100px",
                border:
                  "1px solid var(--system-default-system-gray-04-light, #D1D1D6)",
              }}
            >
              <p className=" text-[15px] font-normal">Currency</p>
              {/* <p className="text-[17px] font-semibold">USD</p> */}
              <select
                required
                className="text-[17px] w-[40px] font-semibold  text-black focus:outline-none appearance-none"
                name="option"
                id="option"
              >
                <option value="USD">USD</option>
                <option value="GBP">GBP</option>
                <option value="SAR">SAR</option>
                <option value="RUB">RUB</option>
                <option value="ILS">ILS</option>
              </select>
              <p>
                <img src={Dropdown} alt="icon" />
              </p>
            </button>

            <button
              className=" flex gap-2 justify-center items-center px-[16px] py-[4px] "
              style={{
                borderRadius: "100px",
                background: "var(--system-background-light-secondary, #F2F2F7)",
              }}
            >
              <p className=" text-[15px] font-normal">Deposit by</p>
              <p
                className="text-[17px] font-semibold"
                style={{
                  fill: "var(--label-color-light-primary, #000)",
                }}
              >
                VISA
              </p>
              <p>
                <img src={ChevronLeftSmall} alt="icon" />
              </p>
            </button>
          </div>

          <div className="grid grid-cols-3 w-full mt-[28px] ">
            <p className="text-[36px] font-normal flex items-center justify-center border-y border-e">
              1
            </p>
            <p className="text-[36px] font-normal flex items-center justify-center border-y border-e">
              2
            </p>
            <p className="text-[36px] font-normal flex items-center justify-center border-y ">
              3
            </p>
            <p className="text-[36px] font-normal flex items-center justify-center border-y border-e">
              4
            </p>
            <p className="text-[36px] font-normal flex items-center justify-center border-y border-e">
              5
            </p>
            <p className="text-[36px] font-normal flex items-center justify-center border-y ">
              6
            </p>
            <p className="text-[36px] font-normal flex items-center justify-center border-y border-e">
              7
            </p>
            <p className="text-[36px] font-normal flex items-center justify-center border-y border-e">
              8
            </p>
            <p className="text-[36px] font-normal flex items-center justify-center border-y ">
              9
            </p>
            <p className="text-[36px] font-normal flex items-center justify-center  border-e">
              .
            </p>
            <p className="text-[36px] font-normal flex items-center justify-center  border-e">
              0
            </p>
            <p className="text-[36px] font-normal flex items-center justify-center  ">
              <img src={delete1} alt="delete Icon" />
            </p>
          </div>
          <p
            className="w-full flex justify-center py-4 mt-2 text-[#005A58] text-xl font-semibold  mb-8"
            style={{
              borderRadius: "100px",
              background: "var(--brand-lime-green, #D9F867)",
            }}
          >
            Deposit
          </p>
        </div>
      </DialogLayout>

      <DialogLayout
        iconColor={""}
        open={openWithdraw}
        setOpen={setWithdraw}
        bgColor={""}
        width={515}
        borderRadius={20}
      >
        <div className="">
          <div
            className=" text-center"
            style={{
              background:
                "radial-gradient(100% 100% at 50% 0%, #FFE075 0%, rgba(255, 224, 117, 0.93) 35.99%, rgba(255, 224, 117, 0.00) 100%)",
            }}
          >
            <p className=" text-[#3C3C4399] text-[17px] font-normal pt-[40px]">
            Withdraw From Your Account
            </p>
            <h1 className=" text-[#000] font-bold text-[22px] mt-1 ">
            Withdraw Money
            </h1>
            <p className=" text-[#000] text-[68px] font-normal">
              {" "}
              <span
                className="text-[52px] font-normal"
                style={{
                  opacity: "0.5",
                }}
              >
                $
              </span>{" "}
              00.00
            </p>
            <p className=" text-[#3C3C4399] text-[15px] font-normal">
            The maximum withdrawal limit is{" "}
              <span className="text-[20px]">$5000</span>
              <span className=" w-[10px]  rounded-full mb-2 mx-1">.</span>
              <span className="text-[13px]">Withdrawal fee</span>
              <span className="ms-1">$8.28</span>
            </p>
          </div>

          <div className="flex justify-between mt-[28px] mx-[28px]">
            <button
              className=" flex gap-2 justify-center items-center px-[16px] py-[4px] "
              style={{
                borderRadius: "100px",
                border:
                  "1px solid var(--system-default-system-gray-04-light, #D1D1D6)",
              }}
            >
              <p className=" text-[15px] font-normal">Currency</p>
              {/* <p className="text-[17px] font-semibold">USD</p> */}
              <select
                required
                className="text-[17px] w-[40px] font-semibold  text-black focus:outline-none appearance-none"
                name="option"
                id="option"
              >
                <option value="USD">USD</option>
                <option value="GBP">GBP</option>
                <option value="SAR">SAR</option>
                <option value="RUB">RUB</option>
                <option value="ILS">ILS</option>
              </select>
              <p>
                <img src={Dropdown} alt="icon" />
              </p>
            </button>

            <button
              className=" flex gap-2 justify-center items-center px-[16px] py-[4px] "
              style={{
                borderRadius: "100px",
                background: "var(--system-background-light-secondary, #F2F2F7)",
              }}
            >
              <p className=" text-[15px] font-normal">Deposit by</p>
              <p
                className="text-[17px] font-semibold"
                style={{
                  fill: "var(--label-color-light-primary, #000)",
                }}
              >
                VISA
              </p>
              <p>
                <img src={ChevronLeftSmall} alt="icon" />
              </p>
            </button>
          </div>

          <div className="grid grid-cols-3 w-full mt-[28px] ">
            <p className="text-[36px] font-normal flex items-center justify-center border-y border-e">
              1
            </p>
            <p className="text-[36px] font-normal flex items-center justify-center border-y border-e">
              2
            </p>
            <p className="text-[36px] font-normal flex items-center justify-center border-y ">
              3
            </p>
            <p className="text-[36px] font-normal flex items-center justify-center border-y border-e">
              4
            </p>
            <p className="text-[36px] font-normal flex items-center justify-center border-y border-e">
              5
            </p>
            <p className="text-[36px] font-normal flex items-center justify-center border-y ">
              6
            </p>
            <p className="text-[36px] font-normal flex items-center justify-center border-y border-e">
              7
            </p>
            <p className="text-[36px] font-normal flex items-center justify-center border-y border-e">
              8
            </p>
            <p className="text-[36px] font-normal flex items-center justify-center border-y ">
              9
            </p>
            <p className="text-[36px] font-normal flex items-center justify-center  border-e">
              .
            </p>
            <p className="text-[36px] font-normal flex items-center justify-center  border-e">
              0
            </p>
            <p className="text-[36px] font-normal flex items-center justify-center  ">
              <img src={delete1} alt="delete Icon" />
            </p>
          </div>
          <p
            className="w-full flex justify-center py-4 mt-2 text-[#005A58] text-xl font-semibold  mb-8"
            style={{
              borderRadius: "100px",
              background: "var(--brand-apricot, #FFE175)",
            }}
          >
            Withdraw
          </p>
        </div>
      </DialogLayout>


    </div>
  );
};

export default Wallet;
