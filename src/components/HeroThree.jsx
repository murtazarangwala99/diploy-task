import React from "react";
import HeroImg from "../images/hero-three.svg";

function HeroThree() {
  return (
    <div className="flex">
      {/* Left img section */}
      <div className="hidden sm:block">
        <img src={HeroImg} alt="hero-three" />
      </div>
      {/* Right Section */}
      <div className="flex flex-col gap-2 my-4 sm:my-64">
        <h2 className="text-5xl font-bold mb-4">
          Easily add your design to a <br />
          wide range of products
        </h2>
        <div className="pl-2">
          <p className="font-light">
            With our free design tools, you can easily add your custom designs to t-shirts,
            mugs, phone cases, and hundreds of other products.
          </p>
        </div>
        <div className="m-2 flex gap-4">
          <button className="px-4 py-2 font-semibold cursor-pointer">All Products ▶</button>
        </div>
      </div>
    </div>
  );
}

export default HeroThree;
