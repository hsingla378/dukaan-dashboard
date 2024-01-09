import shopLogo from "./../assets/shop_logo.png";
import { FaAngleDown } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { LuClipboardList } from "react-icons/lu";
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
    <div className="p-3 flex flex-col justify-between h-full">
      {/* Nav Top */}
      <div>
        {/* Nav Header */}
        <div className="flex justify-between items-center p-2">
          <img src={shopLogo} alt="Nishyan" className="w-[2.5rem]" />
          <div className="flex flex-col">
            <span className=" font-medium">Nishyan</span>
            <a href="#" className="text-gray-400 font-medium underline text-sm">
              Visit Store
            </a>
          </div>
          <FaAngleDown />
        </div>
        {/* Pages Links */}
        <div className="mt-4 text-base text-gray-300">
          <div className="flex gap-3 py-2 px-3 items-center">
            <GoHome />
            <p>Home</p>
          </div>
          <div className="flex gap-3 py-2 px-3 items-center">
            <LuClipboardList />
            <p>Orders</p>
          </div>
          <div className="flex gap-3 py-2 px-3 items-center">
            <GoHome />
            <p>Products</p>
          </div>
          <div className="flex gap-3 py-2 px-3 items-center">
            <CiDeliveryTruck />
            <p>Delivery</p>
          </div>
          <div className="flex gap-3 py-2 px-3 items-center">
            <TfiAnnouncement />
            <p>Marketing</p>
          </div>
          <div className="flex gap-3 py-2 px-3 items-center">
            <TbBrandGoogleAnalytics />
            <p>Analytics</p>
          </div>
          <div className="flex gap-3 py-2 px-3 items-center rounded-md bg-white bg-opacity-10 text-gray-200">
            <FaMoneyBillTransfer />
            <p>Payouts</p>
          </div>
          <div className="flex gap-3 py-2 px-3 items-center">
            <BiSolidOffer />
            <p>Discounts</p>
          </div>
          <div className="flex gap-3 py-2 px-3 items-center">
            <GoPeople />
            <p>Audience</p>
          </div>
          <div className="flex gap-3 py-2 px-3 items-center">
            <IoColorPaletteOutline />
            <p>Appearance</p>
          </div>
          <div className="flex gap-3 py-2 px-3 items-center">
            <MdElectricBolt />
            <p>Plugins</p>
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
