import React from "react";
import Card from "./Card";
import Profit from "../images/higher-profits.svg";
import Scaling from "../images/robust-scaling.svg";
import Selection from "../images/best-selection.svg";

function HeroTwo() {
  return (
    <div className="flex justify-center gap-12 flex-wrap">
      <Card
        imgSrc={Profit}
        heading={"Higher Profits"}
        description={
          "We offer some of the lowest prices in the industry because print providers continuously compete to win your business."
        }
      />
      <Card
        imgSrc={Scaling}
        heading={"Robust Scaling"}
        description={
          "Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality."
        }
      />

      <Card
        imgSrc={Selection}
        heading={"Best Selection"}
        description={
          "With 900+ products and top quality brands, you can choose the best products for your business."
        }
      />
    </div>
  );
}

export default HeroTwo;
