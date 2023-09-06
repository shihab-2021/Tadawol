import React from "react";
import Layout from "../Components/Shared/Layout";
import Wallet from "../Components/Home/Wallet";
import WatchList from "../Components/Home/WatchList";
import TopTraders from "../Components/Home/TopTraders";
import Trades from "../Components/Home/Trades";

const Home = () => {
  return (
    <div>
      <Layout>
        <Trades />
        <Wallet />
        <WatchList />
        <TopTraders />
      </Layout>
    </div>
  );
};

export default Home;
