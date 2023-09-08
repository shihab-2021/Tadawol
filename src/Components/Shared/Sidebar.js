import React, { useEffect, useState } from "react";
import home from "../../Assets/Navbar/Home.png";
import WatchingList from "../../Assets/Navbar/WatchingList.png";
import Wallet from "../../Assets/Navbar/Wallet.png";
import Search from "../../Assets/Navbar/Search.png";
import MoneyManagement from "../../Assets/Navbar/MoneyManagement.png";
import ChevronLeftSmall from "../../Assets/Navbar/ChevronLeftSmall.png";
import Label from "../../Assets/Navbar/Label.png";
import profile from "../../Assets/Navbar/profile.png";

const Sidebar = () => {
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  useEffect(() => {
    // Update the screenHeight state when the window is resized
    function handleResize() {
      setScreenHeight(window.innerHeight);
    }

    // Add an event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  console.log(screenHeight);
  return (
    <div
      style={{
        height: screenHeight - 100,
      }}
      className={` flex flex-col justify-between `}
    >
      <ul className="space-y-2 py-2 ">
        <div className=" flex gap-3 items-center mb-4 bg-[#fff] rounded-2xl lg:hidden ">
          <div className="bg-[#EAF3E6] rounded-[100px]  h-[44px] w-[44px] flex justify-center items-center ms-3">
            <img src={profile} alt="profile" />
          </div>
          <div className="">
            <h1 className="text-[17px] font-semibold">Mohammed Al-Haj</h1>
            <p
              className="flex text-[15px] font-normal"
              style={{
                color:
                  "var(--label-color-light-secondary, rgba(60, 60, 67, 0.60))",
              }}
            >
              {" "}
              <img src={Label} alt="icon" />
              <span className="h-[5px] w-[5px] bg-[#3C3C4399] rounded-full mt-2 mx-1"></span>
              Expert Trader{" "}
            </p>
          </div>
          <p>
            <img src={ChevronLeftSmall} alt="icon" />
          </p>
        </div>
        <li className="px-[22px]">
          <p
            className="flex items-center gap-2 text-[#34908E] text-[15px] font-semibold p-2"
            style={{
              borderRadius: "12px",
              background: "rgba(52, 144, 142, 0.11)",
            }}
          >
            <img src={home} alt="icon" /> Home
          </p>
        </li>
        <li className="px-[22px]">
          <p className="flex items-center gap-2  text-[15px] font-medium p-2">
            <img src={WatchingList} alt="icon" /> Watchlist
          </p>
        </li>
        <li className="px-[22px]">
          <p className="flex items-center gap-2  text-[15px] font-medium p-2">
            <img src={Wallet} alt="icon" /> Wallet
          </p>
        </li>
        <li className="px-[22px]">
          <p className="flex items-center gap-2  text-[15px] font-medium p-2">
            <img src={Search} alt="icon" /> Search
          </p>
        </li>
        <li className="px-[22px]">
          <p
            className="flex items-center gap-2 text-[#fff] text-[15px] font-semibold p-2"
            style={{
              borderRadius: "12px",
              background: "var(--brand-green, #34908E)",
            }}
          >
            <img src={MoneyManagement} alt="icon" /> Money Management
          </p>
        </li>
        <li className="px-[22px]">
          <p
            className="flex items-center gap-2 text-[] text-[15px] font-semibold p-2"
            style={{
              borderRadius: "12px",
              background: "var(--brand-lime-green, #D9F867)",
            }}
          >
            <img className="w-[20px]" alt="" /> Deposite
          </p>
        </li>
      </ul>

      <div className="bottom-0">
        <ul className="space-y-2 px-[22px] py-2 ">
          <li>
            <p
              className="flex items-center gap-2 text-[#000000] text-[15px] font-semibold p-2 "
              style={{
                borderRadius: "12px",
                background: "var(--system-background-light-secondary, #F2F2F7)",
              }}
            >
              <span className="w-[20px] h-[10px] "></span> Language{" "}
              <span className="ms-4 text-[#3C3C4399]">العربية</span>{" "}
              <img src={ChevronLeftSmall} alt="icon" />
            </p>
          </li>
          <li>
            <p
              className=" text-center text-[#3C3C4399] text-[15px] font-semibold p-2"
              style={{
                borderRadius: "12px",
                background: "var(--system-background-light-secondary, #F2F2F7)",
              }}
            >
              {" "}
              Logout
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
