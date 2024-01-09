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

export const transactions = [
  {
    orderId: 281209,
    processing: false,
    transactionId: 131534495747,
    refundDate: "Today, 08:45 PM",
    orderAmount: 1125.0,
  },
  {
    orderId: 281208,
    processing: true,
    transactionId: 131534495747,
    refundDate: "Yesterday, 3:00 PM",
    orderAmount: 1125.0,
  },
  {
    orderId: 281207,
    processing: false,
    transactionId: 131734495747,
    refundDate: "12 Jul 2023, 03:00 PM",
    orderAmount: 1125.0,
  },
  {
    orderId: 281206,
    processing: false,
    transactionId: 131534495747,
    refundDate: "12 Jul 2023, 03:00 PM",
    orderAmount: 1125.0,
  },
  {
    orderId: 281205,
    processing: false,
    transactionId: 131534495747,
    refundDate: "12 Jul 2023, 03:00 PM",
    orderAmount: 1125.0,
  },
  {
    orderId: 281204,
    processing: false,
    transactionId: 131534495747,
    refundDate: "12 Jul 2023, 03:00 PM",
    orderAmount: 1125.0,
  },
  {
    orderId: 281204,
    processing: false,
    transactionId: 131534495747,
    refundDate: "12 Jul 2023, 03:00 PM",
    orderAmount: 1125.0,
  },
  {
    orderId: 281204,
    processing: false,
    transactionId: 131534495747,
    refundDate: "12 Jul 2023, 03:00 PM",
    orderAmount: 1125.0,
  },
  {
    orderId: 281204,
    processing: false,
    transactionId: 131534495747,
    refundDate: "12 Jul 2023, 03:00 PM",
    orderAmount: 1125.0,
  },
  {
    orderId: 281204,
    processing: false,
    transactionId: 131534495747,
    refundDate: "12 Jul 2023, 03:00 PM",
    orderAmount: 1125.0,
  },
];

export const pageLinks = [
  { icon: <GoHome className="text-[16.96px]" />, text: "Home" },
  {
    icon: <LuClipboardList className="text-[16.96px]" />,
    text: "Orders",
  },
  {
    icon: <TiThLargeOutline className="text-[16.96px]" />,
    text: "Products",
  },
  {
    icon: <CiDeliveryTruck className="text-[16.96px]" />,
    text: "Delivery",
  },
  {
    icon: <TfiAnnouncement className="text-[16.96px]" />,
    text: "Marketing",
  },
  {
    icon: <TbBrandGoogleAnalytics className="text-[16.96px]" />,
    text: "Analytics",
  },
  {
    icon: <FaMoneyBillTransfer className="text-[16.96px]" />,
    text: "Payouts",
  },
  {
    icon: <BiSolidOffer className="text-[16.96px]" />,
    text: "Discounts",
  },
  { icon: <GoPeople className="text-[16.96px]" />, text: "Audience" },
  {
    icon: <IoColorPaletteOutline className="text-[16.96px]" />,
    text: "Appearance",
  },
  {
    icon: <MdElectricBolt className="text-[16.96px]" />,
    text: "Plugins",
  },
];
