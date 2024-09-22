import React from "react";
import MakeMoneyImg from "../images/make-money.svg";

function MakeMoneySection() {
  return (
    <div className="flex justify-center items-center my-20 ">
      {/* Left Section */}
      <div className="bg-green-950 pt-14 pb-24 pl-10 pr-24 text-white rounded-l-3xl flex flex-col justify-between items-start gap-4 ">
        <h2 className="text-4xl font-bold">
          Make Money, <br /> Risk-Free
        </h2>
        <p>You pay for fulfillment only when you make a sale</p>
        <div className="bg-slate-800 p-12 rounded-lg flex flex-col gap-3 w-[350px]">
          <p className="flex justify-between font-semibold">
            You sell a t-shirt <span>$ 30</span>
          </p>
          <p className="flex justify-between font-semibold">
            You pay for its production <span>$ 12</span>
          </p>
          <hr />
          <p className="flex justify-between font-semibold">
            Your profit <span>$ 18</span>
          </p>
        </div>
        <button className="px-4 py-2 font-semibold cursor-pointer bg-green-600 text-white">
          Start Selling
        </button>
        <p>100% Free to use · 900+ Products · Largest print network</p>
      </div>
      {/* Right Section */}
      <div className="z-10 -ml-10 hidden md:block">
        <img src={MakeMoneyImg} alt="Make Money image" />
      </div>
    </div>
  );
}

export default MakeMoneySection;
