import React, { useState } from "react";
import shopLogo from "./../assets/shop_logo.png";
import { FaAngleDown } from "react-icons/fa";
import { RiWallet3Line } from "react-icons/ri";
import { pageLinks } from "../utils/constants";

function Navbar() {
  const [activeLink, setActiveLink] = useState("Payouts");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="p-3 flex flex-col justify-between h-screen text-white fixed bg-[#1E2640] w-[inherit] ">
      {/* Nav Top */}
      <div>
        {/* Nav Header */}
        <div className="flex items-center justify-between p-2 cursor-pointer">
          <div className="flex justify-between items-center gap-3">
            <img src={shopLogo} alt="Nishyan" className="w-[39px]" />
            <div className="flex flex-col gap-0.5">
              <span className="font-medium text-[15px]">Nishyan</span>
              <a href="#" className="underline text-[13px] text-gray-300">
                Visit Store
              </a>
            </div>
          </div>
          <FaAngleDown className="text-xl" />
        </div>
        {/* Pages Links */}
        <div className="mt-4 text-gray-300 font-semibold">
          {pageLinks.map((item) => (
            <div
              key={item.text}
              className={`flex gap-3 py-2 px-3 items-center cursor-pointer ${
                activeLink === item.text
                  ? "rounded-md bg-white bg-opacity-10 text-gray-200"
                  : ""
              }`}
              onClick={() => handleLinkClick(item.text)}
            >
              {item.icon}
              <p className="text-[14px]">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Nav Bottom - Available Credits  */}
      <div className="flex items-center text-sm gap-3 rounded-md p-3 bg-white bg-opacity-10">
        <div className="p-1 rounded-md bg-white bg-opacity-10">
          <RiWallet3Line className="text-3xl" />
        </div>
        <div className="flex flex-col gap-0.5">
          <p className="text-gray-400">Available Credits</p>
          <p>222.10</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
