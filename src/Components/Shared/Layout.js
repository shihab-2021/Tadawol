import React, { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
import Logo from "../../Assets/Shared/Logo.png";

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
            className={`bg-[#25282c] border-b border-gray-200 fixed z-30 w-full lg:hidden ${
              toggleButton ? "" : "hidden"
            }`}
          >
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
              <div
                className={`flex items-center justify-between ${
                  toggleButton ? "" : "hidden"
                }`}
              >
                <button
                  id="toggleSidebarMobile"
                  ariaExpanded="true"
                  ariaControls="sidebar"
                  className="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded"
                  onClick={handleClick}
                >
                  <svg
                    id="toggleSidebarMobileHamburger"
                    className={`w-6 h-6 ${toggleButton ? "" : "hidden"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                <div>
                  <img className="h-6 lg:h-8" src={Logo} alt="logo" />
                </div>
              </div>
            </div>
          </nav>

          <div className="flex overflow-hidden">
            <aside
              id="sidebar"
              className={`fixed ${
                toggleButton ? "hidden" : ""
              } z-20 h-full top-0 bg-[#fff] border-r-[1px] left-0 flex lg:flex flex-shrink-0 flex-col w-[250px] transition duration-500 ease-in-out delay-150`}
              aria-label="Sidebar"
            >
              <div className=" flex-1 flex flex-col min-h-0 pt-0">
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
                    <ul className="space-y-2 px-[22px] py-2 text-white">
                      <li>
                        {/* <Link
                          style={
                            location.pathname === "/dashboard"
                              ? {
                                  background:
                                    "linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.274309) 35.55%, rgba(0, 0, 0, 0) 100%), #6278FF",
                                }
                              : {}
                          }
                          to="/dashboard"
                          className={`text-white font-normal rounded-[15px] flex items-center px-[20px] py-[13px]  group`}
                        >
                          {location.pathname === "/dashboard" ? (
                            <img
                              className=""
                              // src={DashboardIconLight}
                              alt="icon"
                            />
                          ) : (
                            <img
                              className=""
                              // src={DashboardIconDark}
                              alt="icon"
                            />
                          )}

                          <span
                          className={`${
                            location.pathname === "/dashboard"
                              ? "text-white"
                              : "text-[#8F8F8F]"
                          } ml-3 text-[18px] font-[500]`}
                          >
                            Dashboard
                          </span>
                        </Link> */}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </aside>
            <div
              className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10"
              id="sidebarBackdrop"
            ></div>
            <div
              id="main-content"
              className="h-full w-full relative lg:ml-[250px]"
            >
              <nav className="h-[70px] border-b-[1px]">
                <div>this is navbar</div>
              </nav>
              <main className="min-h-[100vh]">
                <div className="">{children}</div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
