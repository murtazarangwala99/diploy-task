import React from "react";

function Card({ imgSrc, heading, description }) {
  return (
    <div className="w-[300px] h-[250px]">
      <img src={imgSrc} alt="card-image" className="w-[100px] mx-auto my-4" />
      <h2 className="text-xl font-semibold">{heading}</h2>
      <p className="text-sm">{description}</p>
    </div>
  );
}

export default Card;
