import React from "react";
import ReviewCard from "./ReviewCard";

function TrustedSection() {
  return (
    <div className="bg-slate-200 ">
      <div className="flex gap-16 px-16 py-20 flex-wrap flex-col sm:flex-row">
        <div className="flex justify-between w-8/12 flex-wrap gap-4">
          <h2 className="w-[250px] font-bold text-2xl">
            Trusted by over 8M sellers around the world
          </h2>
          <p className="w-[400px]">
            Whether you are just getting started or run an enterprise-level e-commerce
            business, we do everything we can to ensure a positive merchant experience.
          </p>
        </div>
        {/* Customer Cards */}
      </div>
      <div className="px-8 pb-16 flex gap-8 justify-center items-center flex-wrap">
        {/* Cards */}
        <ReviewCard
          imgSrc={"https://printify.com/pfh/media/robert-voltaire-RIZV7QXV.png"}
          name={"Robert A. Voltaire"}
          tag={"Store link"}
          description={
            "Printify has been an incredible service for us musicians unable to keep large amount of inventory - now we can create designs previously too expensive to print without having to have 1,000 shirts in our jam space. Thanks Printify!"
          }
        />

        <ReviewCard
          imgSrc={"https://printify.com/pfh/media/quinten-barney-CHC7B3FG.png"}
          name={"Quinten Barney"}
          tag={"Etsy Merchant"}
          description={
            "We chose Printify because of their offerings as well as their incredibly low prices. After several years, we've come to find that their customer service is also top notch, and their platform just keeps getting better and better."
          }
        />

        <ReviewCard
          imgSrc={"https://printify.com/pfh/media/nikki-TJP4NANB.png"}
          name={"Nikky"}
          tag={"Store link"}
          description={
            "Printify has been a amazing partner to work with as we grow our business, from the range of merch we can make for our customers to working with our Customer Service team (Hi Martin!) it's truly made the whole process a breeze."
          }
        />
        {/* Spencer, Brett, and Kyle */}
        <ReviewCard
          imgSrc={"https://printify.com/pfh/media/spencer-brett-kyle-NLHTAZDT.png"}
          name={"Spencer, Brett, and Kyle"}
          tag={"Store link"}
          description={
            "Using Printify has been a great experience. Customer service is always very quick to respond and handle any issues that our customers may have. The premium account has more than paid for itself and has increased our margins significantly. "
          }
        />
      </div>
    </div>
  );
}

export default TrustedSection;

// https://printify.com/pfh/media/quinten-barney-CHC7B3FG.png --2
// https://printify.com/pfh/media/nikki-TJP4NANB.png --3
//  https://printify.com/pfh/media/spencer-brett-kyle-NLHTAZDT.png --4
