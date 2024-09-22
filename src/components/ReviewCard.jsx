import React from "react";

function ReviewCard({ imgSrc, name, tag, description }) {
  return (
    <div className="flex flex-col w-[500px] border-2 p-6 gap-4 bg-white shadow-lg hover:shadow-2xl">
      <div className="flex gap-5">
        <img src={imgSrc} alt="customer-img" className="w-16 rounded-full" />
        <div>
          <h3 className="font-semibold text-xl">{name}</h3>
          <p className="text-green-500 cursor-pointer">{tag}</p>
        </div>
      </div>
      <div>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ReviewCard;
