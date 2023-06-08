"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoChevronBackSharp } from "react-icons/io5";
import {
  FaTh,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
} from "react-icons/fa";

export default function Sidnav() {
  const [open, setOpen] = useState(false);
  const menu = [
    {
      path: "pages/",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "pages/about",
      name: "About",
      icon: <FaUserAlt size={10} color="red" />,
    },
    {
      path: "/pages/analytic",
      name: "Analytic",
      icon: <FaRegChartBar />,
    },
    {
      path: "/pages/comment",
      name: "Comment",
      icon: <FaCommentAlt />,
    },
    {
      path: "/pages/product",
      name: "Product",
      icon: <FaShoppingBag />,
    },
    {
      path: "/pages/productlist",
      name: "Product List",
      icon: <FaThList />,
    },
  ];

  return (
    <main>
      <div className="flex">
        <div
          className={`${
            open ? "w-72" : "w-20"
          } duration-300 h-screen p-5 pt-8 bg-cyan-500 relative`}
        >
          <button
            onClick={() => setOpen(!open)}
            className="absolute cursor-pointer rounded-full -right-3 top-9 w-8 h-8 bg-white border-2 border-cyan-600"
          >
            <IoChevronBackSharp
              color="cyan"
              className={`mx-auto my-auto z-100 ${!open && "rotate-180"}`}
            />
          </button>

          <div className="flex gap-x-4 items-center">
            <img
              src="/logo.png"
              className={`cursor-pointer w-10 h-10 duration-500`}
            />
            <h1
              className={`text-white origin-left font-semibold text-xl duration-300 ${
                !open && "scale-0"
              }`}
            >
              Designer
            </h1>
          </div>
          <ul className="pt-6">
            {menu.map((menu, index) => (
              <li
                key={index}
                className="flex gap-3 items-center mt-5 text-gray-300 text-sm cursor-pointer"
              >
                <button className="flex">
                  <Link href={menu.path}>{menu.icon}</Link>
                </button>
                <span
                  className={`text-[15px] duration-500 ${!open && "scale-0"}`}
                >
                  {menu.name}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right side */}
        <div>
          <h1 className="p-7 text-2xl font-semibold flex-1 h-screen">
            {menu.map((menu, index) => (
              <div key={index} className='flex'>
                {menu.name}
              </div>
            ))}
          </h1>
        </div>
      </div>
    </main>
  );
}
