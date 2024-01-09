import shopLogo from "./../assets/shop_logo.png";
import { FaAngleDown } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { LuClipboardList } from "react-icons/lu";
import { TiThLargeOutline } from "react-icons/ti";
import { CiDeliveryTruck } from "react-icons/ci";
import { TfiAnnouncement } from "react-icons/tfi";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { BiSolidOffer } from "react-icons/bi";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { GoPeople } from "react-icons/go";
import { IoColorPaletteOutline } from "react-icons/io5";
import { MdElectricBolt } from "react-icons/md";
import { RiWallet3Line } from "react-icons/ri";

function Navbar() {
  return (
    <div className="p-3 flex flex-col justify-between h-screen text-white fixed bg-[#1E2640] w-[inherit]">
      {/* Nav Top */}
      <div>
        {/* Nav Header */}
        <div className="flex items-center justify-between p-2">
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
          <div className="flex gap-3 py-2 px-3 items-center">
            <GoHome className="text-[16.96px]" />
            <p className="text-[14px]">Home</p>
          </div>
          <div className="flex gap-3 py-2 px-3 items-center">
            <LuClipboardList className="text-[16.96px]" />
            <p className="text-[14px]">Orders</p>
          </div>
          <div className="flex gap-3 py-2 px-3 items-center">
            <TiThLargeOutline className="text-[16.96px]" />
            <p className="text-[14px]">Products</p>
          </div>
          <div className="flex gap-3 py-2 px-3 items-center">
            <CiDeliveryTruck className="text-[16.96px]" />
            <p className="text-[14px]">Delivery</p>
          </div>
          <div className="flex gap-3 py-2 px-3 items-center">
            <TfiAnnouncement className="text-[16.96px]" />
            <p className="text-[14px]">Marketing</p>
          </div>
          <div className="flex gap-3 py-2 px-3 items-center">
            <TbBrandGoogleAnalytics className="text-[16.96px]" />
            <p className="text-[14px]">Analytics</p>
          </div>
          <div className="flex gap-3 py-2 px-3 items-center rounded-md bg-white bg-opacity-10 text-gray-200">
            <FaMoneyBillTransfer className="text-[16.96px]" />
            <p className="text-[14px]">Payouts</p>
          </div>
          <div className="flex gap-3 py-2 px-3 items-center">
            <BiSolidOffer className="text-[16.96px]" />
            <p className="text-[14px]">Discounts</p>
          </div>
          <div className="flex gap-3 py-2 px-3 items-center">
            <GoPeople className="text-[16.96px]" />
            <p className="text-[14px]">Audience</p>
          </div>
          <div className="flex gap-3 py-2 px-3 items-center">
            <IoColorPaletteOutline className="text-[16.96px]" />
            <p className="text-[14px]">Appearance</p>
          </div>
          <div className="flex gap-3 py-2 px-3 items-center">
            <MdElectricBolt className="text-[16.96px]" />
            <p className="text-[14px]">Plugins</p>
          </div>
        </div>
      </div>
      {/* Nav Bottom - Available Credits  */}
      <div className="flex items-center text-sm gap-3 rounded-md p-3 bg-white bg-opacity-10">
        <div className="p-1 rounded-md bg-white bg-opacity-10">
          <RiWallet3Line className="text-3xl" />
        </div>
        <div>
          <p className="text-gray-400">Available Credits</p>
          <p>222.10</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
