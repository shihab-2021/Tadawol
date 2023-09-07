import React from "react";
import Layout from "../Components/Shared/Layout";
import Wallet from "../Components/Home/Wallet";
import WatchList from "../Components/Home/WatchList";
import TopTraders from "../Components/Home/TopTraders";
import Trades from "../Components/Home/Trades";

const Home = () => {
  return (
    <div className="md:bg-[#F2F2F7]">
      <Layout>
        <Trades />
        <div className="mx-auto max-w-[885px] mt-[80px] md:mt-[40px] flex items-center flex-col lg:flex-row gap-[32px] 2xl:gap-[60px] ">
          <Wallet />
          <WatchList />
        </div>
        <TopTraders />
      </Layout>
    </div>
  );
};

export default Home;
