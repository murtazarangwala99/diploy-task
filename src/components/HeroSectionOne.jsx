import React from "react";
import GirlShopping from "../images/hero-image-01.gif";

const HeroSectionOne = () => {
  return (
    <div className="flex justify-center my-24 gap-24">
      {/* Div left */}
      <div className="flex flex-col gap-2">
        <h2 className="text-5xl font-bold mb-4">
          Create and sell <br />
          custom products
        </h2>
        <div className="pl-2">
          <p className="font-bold">✅ 100% Free to use</p>
          <p className="font-bold">✅ 900+ High Quality Products</p>
          <p className="font-bold">✅ Largest global print network</p>
        </div>
        <div className="m-2 flex gap-4">
          <button className="px-4 py-2 font-semibold cursor-pointer bg-green-600 text-white">
            Start for Free
          </button>
          <button className="px-4 py-2 font-semibold border cursor-pointer">
            ▶ How it works?
          </button>
        </div>
        <p className="pl-2 text-green-600 text-lg">
          Trusted by over 8M sellers around the world
        </p>
      </div>
      {/* Div Right */}
      <div className="hidden sm:block">
        <img src={GirlShopping} alt="GirlShopping" className="w-[500px]" />
      </div>
    </div>
  );
};

export default HeroSectionOne;
