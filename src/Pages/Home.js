import React from "react";
import Layout from "../Components/Shared/Layout";
import Wallet from "../Components/Home/Wallet";
import WatchList from "../Components/Home/WatchList";
import TopTraders from "../Components/Home/TopTraders";
import Trades from "../Components/Home/Trades";

const Home = () => {
  return (
    <div className="md:bg-[#F2F2F7] bg-white">
      <Layout>
        <div className="md:block hidden">
          <Trades />
        </div>
        <div className="mx-auto max-w-[885px] mt-[80px] md:mt-[40px] flex items-center flex-col lg:flex-row gap-[32px] 2xl:gap-[60px] ">
          <Wallet />
          <WatchList />
        </div>
        <div className="block md:hidden">
          <Trades />
        </div>
        <TopTraders />
      </Layout>
    </div>
  );
};

export default Home;
