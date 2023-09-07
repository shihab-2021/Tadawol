import React from "react";
import home from "../../Assets/Navbar/Home.png";
import WatchingList from "../../Assets/Navbar/WatchingList.png";
import Wallet from "../../Assets/Navbar/Wallet.png";
import Search from "../../Assets/Navbar/Search.png";
import MoneyManagement from "../../Assets/Navbar/MoneyManagement.png";
import ChevronLeftSmall from "../../Assets/Navbar/ChevronLeftSmall.png";

const Sidebar = () => {
  return (
    <div className=" flex flex-col justify-between">
      <ul className="space-y-2 px-[22px] py-2 ">

        <li>

          <p className="flex items-center gap-2 text-[#34908E] text-[15px] font-semibold p-2"
            style={{
              borderRadius: "12px",
              background: "rgba(52, 144, 142, 0.11)"

            }}
          ><img src={home} alt="icon" /> Home</p>

        </li>
        <li>

          <p className="flex items-center gap-2  text-[15px] font-medium p-2"

          ><img src={WatchingList} alt="icon" /> Watchlist</p>

        </li>
        <li>

          <p className="flex items-center gap-2  text-[15px] font-medium p-2"

          ><img src={Wallet} alt="icon" /> Wallet</p>

        </li>
        <li>

          <p className="flex items-center gap-2  text-[15px] font-medium p-2"

          ><img src={Search} alt="icon" /> Search</p>

        </li>

        <li>

          <p className="flex items-center gap-2 text-[#fff] text-[15px] font-semibold p-2"
            style={{
              borderRadius: "12px",
              background: "var(--brand-green, #34908E)"

            }}
          ><img src={MoneyManagement} alt="icon" /> Money Management</p>

        </li>
        <li>

          <p className="flex items-center gap-2 text-[] text-[15px] font-semibold p-2"
            style={{
              borderRadius: "12px",
              background: "var(--brand-lime-green, #D9F867)"

            }}
          ><img className="w-[20px]" alt="" /> Deposite</p>

        </li>

      </ul>

      <div className="mt-[288px] ">
        <ul className="space-y-2 px-[22px] py-2 ">

          <li>

            <p className="flex items-center gap-2 text-[#000000] text-[15px] font-semibold p-2 "
              style={{
                borderRadius: "12px",
                background: "var(--system-background-light-secondary, #F2F2F7)"

              }}
            ><span className="w-[20px] h-[10px] "></span>  Language <span className="ms-4 text-[#3C3C4399]">العربية</span> <img src={ChevronLeftSmall} alt="icon"/></p>
              

          </li>
          <li>

            <p className=" text-center text-[#3C3C4399] text-[15px] font-semibold p-2"
              style={{
                borderRadius: "12px",
                background: "var(--system-background-light-secondary, #F2F2F7)"

              }}
            > Language </p>
              

          </li>
       
        </ul>
      </div>


    </div>

  );
};

export default Sidebar;
