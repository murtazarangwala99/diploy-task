import React from "react";
import BottomSection from "./BottomSection";

function Footer() {
  return (
    <div>
      <BottomSection />
      <div className="bg-slate-600 flex flex-col justify-center items-center text-gray-100 -mx-12 -mb-9 py-12 gap-3 ">
        <div className="flex gap-4 flex-col md:flex-row">
          <p className="cursor-pointer ">Intellectual Property Policy</p>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Security</p>
        </div>
        <p className="text-white">© 2024 Printify, Inc. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
