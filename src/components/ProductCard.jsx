import React from "react";

function ProductCard({ imgSrc, Mainheading, heading, description }) {
  return (
    <div className="w-[300px]">
      <img src={imgSrc} alt="card-image" className="w-[200px] mx-auto my-4" />
      <h2 className="text-xl font-semibold text-green-500">{Mainheading}</h2>
      <h2 className="text-xl font-semibold">{heading}</h2>
      <p className="text-sm">{description}</p>
    </div>
  );
}

export default ProductCard;
