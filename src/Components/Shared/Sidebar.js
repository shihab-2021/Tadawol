import React from "react";

const Sidebar = () => {
  return (
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
  );
};

export default Sidebar;
