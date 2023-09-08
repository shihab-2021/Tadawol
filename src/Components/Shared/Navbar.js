import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import NotificationsIcon from "@mui/icons-material/Notifications";
import profile from "../../Assets/Navbar/profile.png";
import Label from "../../Assets/Navbar/Label.png";

const Navbar = () => {
  return (
    <nav className="h-[70px] border-b-[1px] hidden md:block bg-[#fff]">
      <div className="flex pt-[10px] justify-between items-center">
        <div
          className="w-[50%] h-[38px] flex items-center px-4 text-[17px] font-normal ms-[48px]"
          style={{
            borderRadius: "100px",
            background: "var(--system-background-light-secondary, #F2F2F7)",
          }}
        >
          <SearchIcon />
          <input
            style={{
              background: "var(--system-background-light-secondary, #F2F2F7)",
            }}
            className="w-[100%] mx-2"
            type="text"
            placeholder="Search for stock, crypto, NTF ..."
          />
          <KeyboardVoiceIcon />
        </div>
        <div className="w-[50%] flex items-center justify-end me-[14px]">
          <div className="flex">
            <NotificationsIcon />
            <p
              className="h-[20px] w-[20px] flex justify-center items-center text-xs font-medium ms-[-10px] mt-[-8px]"
              style={{
                borderRadius: "32px",
                border:
                  "2px solid var(--system-background-light-primary, #FFF)",
                background: "var(--brand-lime-green, #D9F867)",
              }}
            >
              3
            </p>
          </div>
          <div className="ms-[29px]">
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
          <div className="bg-[#EAF3E6] rounded-[100px]  h-[44px] w-[44px] flex justify-center items-center ms-3">
            <img src={profile} alt="profile" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
