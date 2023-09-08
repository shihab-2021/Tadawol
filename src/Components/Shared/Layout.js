import React, { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
import Logo from "../../Assets/Shared/Logo.png";
import Menu from "../../Assets/Shared/Menu.png";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import NotificationsIcon from "@mui/icons-material/Notifications";
import profile from "../../Assets/Navbar/profile.png";
import BottomNavBar from "./BottomNavBar";

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
                className={`flex items-center justify-between ${toggleButton ? "" : "hidden"
                  }`}
              >
                <button
                  id="toggleSidebarMobile"
                  ariaExpanded="true"
                  ariaControls="sidebar"
                  className="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded"
                  onClick={handleClick}
                >
                  <img src={Menu} alt="Menu" />
                </button>
                <div className="flex items-center">
                  <div>
                    <NotificationsIcon />
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
              className={`h-full min-h-[100vh] relative ${toggleButton ? "hidden" : ""
                } z-20 top-0 bg-[#fff] border-r-[1px] left-0 flex lg:flex flex-shrink-0 flex-col w-[250px] transition duration-500 ease-in-out delay-150`}
              aria-label="Sidebar"
            >
              <div className="fixed bg-white h-full w-[250px] flex-1 flex flex-col min-h-0 pt-0">
                <div className="flex-1 flex flex-col pb-4 overflow-y-auto">
                  <div className="flex-1 space-y-1">
                    <div className="py-8 h-[70px] flex items-center justify-between lg:justify-center">
                      {/* <Link className="hidden lg:block" to={"/"}> */}
                      <img className="h-6 lg:h-8" src={Logo} alt="icon" />
                      {/* </Link> */}
                      <p className="text-[#676767] ml-[27px] lg:hidden">Menu</p>
                      <button
                        id="toggleSidebarMobile"
                        ariaExpanded="true"
                        ariaControls="sidebar"
                        className="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded"
                        onClick={handleClick}
                      >
                        {/* <img src={ArrowLeftIcon} alt="icon" /> */}X
                      </button>
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
              <main className="min-h-[100vh]">
                <div className="">{children}</div>
              </main>
            </div>
          </div>

          <div className="md:hidden block">
            <BottomNavBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
