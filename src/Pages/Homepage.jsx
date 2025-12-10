import React from "react";
import Carousel from "../Components/Carousel";
import About from "../Section/About";
import BhmDhm from "../Section/BhmDhm";
import Counterfacts from "../Section/Counterfacts";
import Countries from "../Section/Countries";
import Services from "../Section/Services";
import WhyUs from "../Section/WhyUs";

const Homepage = () => {
  return (
    <div className="Homepage">
      <Carousel />
      <About />
      <Counterfacts />
      <Services />
      <WhyUs />
      <Countries />
      <BhmDhm />
    </div>
  );
};

export default Homepage;
