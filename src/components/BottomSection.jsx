import React from "react";
import Logo from "../images/logo.png";

function BottomSection() {
  return (
    <div className="flex justify-between items-center m-4 p-4 flex-col md:flex-row gap-4 md:gap-0">
      <div>
        <img src={Logo} alt="logo" className="w-[200px]" />
      </div>
      <div className="flex gap-6 flex-wrap justify-around">
        <img
          src="https://printify.com/wp-content/uploads/2019/07/facebook-icon.svg"
          alt="fb"
          className="cursor-pointer h-[32px] w-[32px] "
        />
        <img
          src="https://printify.com/wp-content/uploads/2019/01/instagram-icon.svg"
          alt="instagram"
          className="cursor-pointer h-[32px] w-[32px] "
        />
        <img
          src="https://printify.com/wp-content/uploads/2019/01/linkedin-icon.svg"
          alt="linkedin"
          className="cursor-pointer h-[32px] w-[32px] "
        />
        <img
          src="https://printify.com/wp-content/uploads/2023/09/X-Logo-Green.svg"
          alt="twitter"
          className="cursor-pointer h-[32px] w-[32px] "
        />
        <img
          src="https://printify.com/wp-content/uploads/2019/01/youtube-icon.svg"
          alt="youtube"
          className="cursor-pointer h-[32px] w-[32px] "
        />
        <img
          src="https://printify.com/wp-content/uploads/2023/02/Tiktok-1.svg"
          alt="Tiktok"
          className="cursor-pointer h-[32px] w-[32px] "
        />
        <img
          src="https://printify.com/wp-content/uploads/2019/01/reddit-icon.svg"
          alt="reddit"
          className="cursor-pointer h-[32px] w-[32px] "
        />
      </div>
    </div>
  );
}

export default BottomSection;
