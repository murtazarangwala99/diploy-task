import React from "react";
import logo from "../images/logo.png";

function Header() {
  return (
    <div className="flex justify-between border-b-2 pb-5">
      {/* Logo */}
      <div>
        <a href="/">
          <img src={logo} alt="header-logo" className="w-[200px]" />
        </a>
      </div>
      {/* Header Middle */}
      <div className="flex items-center flex-wrap">
        <ul className="flex gap-6 flex-wrap">
          <li className="cursor-pointer text-lg">Catalog</li>
          <li className="cursor-pointer text-lg">How it works</li>
          <li className="cursor-pointer text-lg">Pricing</li>
          <li className="cursor-pointer text-lg">Blog</li>
          <li className="cursor-pointer text-lg">Services</li>
          <li className="cursor-pointer text-lg">Use-cases</li>
          <li className="cursor-pointer text-lg">Need Help?</li>
        </ul>
      </div>
      {/* End of Header */}
      <div className=" flex justify-center items-center gap-4 flex-wrap">
        <button className="px-4 py-2 font-semibold border cursor-pointer">Log in</button>
        <button className="px-4 py-2 font-semibold cursor-pointer bg-green-600 text-white">
          Sign up
        </button>
      </div>
    </div>
  );
}

export default Header;
