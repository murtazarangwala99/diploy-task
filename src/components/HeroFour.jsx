import React from "react";
import ProductCard from "./ProductCard";

function HeroFour() {
  return (
    <div className="flex gap-8 justify-around pb-8 bg-gray-200 flex-wrap">
      <ProductCard
        imgSrc={"https://printify.com/pfh/assets/legacy/custom-products.png"}
        Mainheading={"CREATE"}
        heading={"custom products"}
        description={
          "Easily add your designs to a wide range of products using our free tools"
        }
      />
      <ProductCard
        imgSrc={"https://printify.com/pfh/assets/legacy/your-products.png"}
        Mainheading={"SELL"}
        heading={"on your terms"}
        description={"You choose the products, sale price, and where to sell"}
      />
      <ProductCard
        imgSrc={"https://printify.com/pfh/assets/legacy/fullfillment.png"}
        Mainheading={"WE HANDLE"}
        heading={"fullfillment"}
        description={
          "Once an order is placed, we automatically handle all the printing and delivery logistics"
        }
      />
    </div>
  );
}

export default HeroFour;
