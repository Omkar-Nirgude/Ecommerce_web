import React, { useState } from "react";

import Logo from "../../assets/Logo.png";

import { IoMdSearch } from "react-icons/io";
import { FaCartShopping, FaCaretDown } from "react-icons/fa6";

import DarkMode from "./DarkMode";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#services",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/#",
  },
  {
    id: 4,
    name: "Mens Wear",
    link: "/#",
  },
  {
    id: 5,
    name: "Electronics",
    link: "/#",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      {/* Top Navbar */}
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
        <div className="bg-primary/40 py-2">
          <div className="container flex justify-between items-center">

            {/* Logo */}
            <div>
              <a
                href="#"
                className="font-bold text-2xl sm:text-3xl flex gap-2"
              >
                <img
                  src={Logo}
                  alt="Logo"
                  className="w-10"
                />

                NexCart
              </a>
            </div>

            {/* Right Side */}
            <div className="flex justify-between items-center gap-4">

              {/* Search */}
              <div className="relative group hidden sm:block">
                <input
                  type="text"
                  placeholder="search"
                  className=" w-40 sm:w-40 group-hover:w-[200px] duration-200 ease-in rounded-full border  border-gray-300 px-2 py-1 focus:outline-none  focus:border-primary  dark:border-gray-500  dark:bg-gray-800"
/>

                <IoMdSearch
                  className=" text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-4 "  />
              </div>

              {/* Order Button */}
              <button
                onClick={() => handleOrderPopup()}
                className=" bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-whitepy-1 px-4 rounded-full flex items-center gap-3 group">
                <span className="group-hover:block hidden transition-all duration-200">
                  Order
                </span>

                <FaCartShopping
                  className=" text-xl text-white drop-shadow-sm cursor-pointer  "/>
              </button>

              {/* Dark Mode */}
              <div>
                <DarkMode />
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Menu */}
      <div
        data-aos="zoom-in"
        className="flex justify-center relative z-50"
      >
        <ul className="sm:flex hidden items-center gap-4">

          {/* Normal Menu Items */}
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className=" inline-block px-4  hover:text-primary  duration-200 ">
                {data.name}
              </a>
            </li>
          ))}

          {/* Trending Products Dropdown */}
          <li className="relative cursor-pointer">

            {/* Dropdown Button */}
            <button
              type="button"
              onClick={() =>
                setIsDropdownOpen((prev) => !prev)
              }
              className=" flex items-center gap-[2px] py-2 ">
              Trending Products

              <FaCaretDown
                className={`transition-all duration-200
                  ${
                    isDropdownOpen
                      ? "rotate-180"
                      : ""
                  }
                `}
              />
            </button>

            {/* Dropdown */}
            {isDropdownOpen && (
              <div
                className="absolute left-0 top-full z-[9999] w-[200px] rounded-md  bg-white p-2  text-black shadow-lg border  border-gray-200"
            >
                <ul>

                  {DropdownLinks.map((data) => (
                    <li key={data.id}>

                      <a
                        href={data.link}
                        className=" block w-full rounded-md p-2
                          hover:bg-primary/20" >
                        {data.name}
                      </a>

                    </li>
                  ))}

                </ul>
              </div>
            )}

          </li>

        </ul>
      </div>
    </>
  );
};

export default Navbar;