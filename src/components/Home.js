import React from "react";
import Banner from "./Banner";
import Catogries from "./Catogries";
import Fotter from "./Footer";
import Header from "./Header";
import LeftNavBar from "./LeftNavBar";
import ProductSlider from "./ProductSlider";
import Top from "./Top";

const Home = () => {
  return (
    <div>
      <Top />
      <Header />
      <LeftNavBar />
      <Catogries />
      <Banner />
      <ProductSlider />
    </div>
  );
};

export default Home;
