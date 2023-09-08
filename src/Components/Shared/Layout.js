import React, { useEffect, useState } from "react";
import Logo from "../../Assets/Shared/Logo.png";
import Close from "../../Assets/Shared/Close.png";
import Menu from "../../Assets/Shared/Menu.png";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import NotificationsIcon from "@mui/icons-material/Notifications";
import profile from "../../Assets/Navbar/profile.png";
import BottomNavBar from "./BottomNavBar";
import Label from "../../Assets/Navbar/Label.png";
import ChevronLeftSmall from "../../Assets/Home/ChevronLeftSmall.png";
import logo from "../../Assets/Navbar/logo.png";

const Layout = ({ children }) => {
  const [toggleButton, setToggleButton] = useState(true);
  const [screenSmall, setScreenSmall] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const createCoursePage = localStorage.getItem("createCoursePage");
  // const location = useLocation();
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
    if (windowWidth >= 1024) {
      setScreenSmall(false);
    } else {
      setScreenSmall(true);
    }
  }, [windowWidth]);

  const handleClick = () => {
    setToggleButton(!toggleButton);
  };
  return (
    <div>
      <div>
        <div>
          <nav
            className={`bg-white fixed z-30 w-full lg:hidden ${
              toggleButton ? "" : "hidden"
            }`}
          >
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
              <div
                className={`flex items-center justify-between ${
                  toggleButton ? "" : "hidden"
                }`}
              >
                <div className="flex items-center">
                  <button
                    id="toggleSidebarMobile"
                    ariaExpanded="true"
                    ariaControls="sidebar"
                    className="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded"
                    onClick={handleClick}
                  >
                    <img src={Menu} alt="Menu" />
                  </button>
                  <p>Menu</p>
                </div>

                <div className="flex items-center">
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
                  <div className="bg-[#EAF3E6] rounded-[100px] h-[44px] w-[44px] flex justify-center items-center ms-3">
                    <img src={profile} alt="profile" />
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div className="flex overflow-hidden">
            <aside
              id="sidebar"
              className={` absolute md:relative h-full min-h-[100vh] z-[70] ${
                toggleButton ? "hidden" : ""
              } z-20 top-0 bg-[#fff] border-r-[1px] left-0 flex lg:flex flex-shrink-0 flex-col w-[250px] transition duration-500 ease-in-out delay-150 `}
              aria-label="Sidebar"
            >
              <div className="fixed bg-white h-full w-[250px] flex-1 flex flex-col min-h-0 pt-0">
                <div className="flex-1 flex flex-col pb-4 overflow-y-auto">
                  <div className="flex-1 space-y-1">
                    <div className="py-8 h-[70px] flex items-center justify-between lg:justify-center">
                      <div className="lg:flex items-center gap-[18px] hidden">
                        <p
                          style={{
                            borderRadius: "100px",
                            background: "var(--brand-lime-green, #D9F867)",
                          }}
                        >
                          <img src={logo} alt="icon" />
                        </p>
                        <p className=" text-[#000000] text-xl font-semibold">
                          Tadawol
                        </p>
                      </div>
                      <button
                        id="toggleSidebarMobile"
                        ariaExpanded="true"
                        ariaControls="sidebar"
                        className="lg:hidden ms-2 mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded flex items-center gap-2"
                        onClick={handleClick}
                      >
                        <img src={Close} alt="icon" />
                        <span className="ms-1"> Close</span>
                      </button>
                    </div>
                    <div className=" flex gap-3 items-center bg-[#fff] rounded-2xl lg:hidden ">
                      <div className="bg-[#EAF3E6] rounded-[100px]  h-[44px] w-[44px] flex justify-center items-center ms-3">
                        <img src={profile} alt="profile" />
                      </div>
                      <div className="">
                        <h1 className="text-[17px] font-semibold">
                          Mohammed Al-Haj
                        </h1>
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
                    <Sidebar />
                  </div>
                </div>
              </div>
            </aside>
            <div
              className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10"
              id="sidebarBackdrop"
            ></div>
            <div id="main-content" className="h-full w-full relative ">
              <Navbar />
              <main className="min-h-[90vh]">
                <div className="">{children}</div>
              </main>
            </div>
          </div>

          <div className="md:hidden block mt-[70px]">
            <BottomNavBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
