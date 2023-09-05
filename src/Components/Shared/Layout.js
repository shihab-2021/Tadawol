import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <h1 className="text-red-400">this is layout</h1>
      <main className="">
        <div className="">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
