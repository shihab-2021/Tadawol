import React from "react";
import Layout from "../Components/Shared/Layout";
import Wallet from "../Components/Home/Wallet";
import WatchList from "../Components/Home/WatchList";
import TopTraders from "../Components/Home/TopTraders";

const Home = () => {
  return (
    <div>
      <Layout>
        <Wallet />
        <WatchList />
        <TopTraders />
      </Layout>
    </div>
  );
};

export default Home;
