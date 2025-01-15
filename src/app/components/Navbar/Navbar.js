"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdArrowForwardIos } from "react-icons/md";
import {
  dropdownAnimationOpen,
  sidebarAnimationClose,
  sidebarAnimationOpen,
} from "../utility/animation";
import Image from "next/image";
import Logo from "../../assets/Logo/whiteLogo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [rotateProductsIcon, setRotateProductsIcon] = useState(false);
  const [rotateProfileIcon, setRotateProfileIcon] = useState(false);
  const [isMobileView, setMobileView] = useState(false);
  const [hoveredItem, setHoveredItem] = useState("");

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    {
      name: "Products",
      href: "#",
      subItems: [
        {
          name: "Aluminium Windows",
          href: "/products/aluminium-windows",
        },
        {
          name: "Door Seals",
          href: "/products/door-seals",
        },
        {
          name: "Glass Railings",
          href: "/products/glass-railings",
        },
        { name: "Invisible Grill", href: "/products/invisiblegrill" },
        { name: "Office Partitions", href: "/products/office-partitions" },
        { name: "Bathroom Partitions", href: "/products/bathroom-partitions" },
        { name: "Queue Manager", href: "/products/queue-manager" },
      ],
    },
    { name: "Contact Us", href: "/contact" },
  ];

  useEffect(() => {
    const handleResize = () => {
      setMobileView(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsOpen((prev) => {
      if (prev) {
        setIsProductsDropdownOpen(false);
        setIsProfileDropdownOpen(false);
        setRotateProductsIcon(false);
        setRotateProfileIcon(false);
      }
      return !prev;
    });
  };

  const toggleProductsDropdown = () => {
    setIsProductsDropdownOpen((prev) => !prev);
    setRotateProductsIcon((prev) => !prev);
    if (isProfileDropdownOpen) {
      setIsProfileDropdownOpen(false);
      setRotateProfileIcon(false);
    }
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen((prev) => !prev);
    setRotateProfileIcon((prev) => !prev);
  };

  const handleProfileDropdownHover = (isHovering) => {
    setIsProfileDropdownOpen(isHovering);
    setRotateProfileIcon(isHovering);
  };

  const handleMouseEnter = (item) => setHoveredItem(item);
  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <nav
      className={`absolute xl:fixed ${
        isMobileView
          ? "bg-black bg-opacity-50 backdrop-blur"
          : " bg-black bg-opacity-50 backdrop-blur"
      } text-white w-[100vw] z-50 `}
    >
      {isMobileView ? (
        <>
          <div className="flex justify-between  items-center md:px-28 w-full bg-black opacity-85 z-50 ">
            <Link href="/" className="px-2 py-1">
              <Image
                priority
                src={Logo}
                alt="Logo"
                className="h-[5.5rem] w-[10rem] pl-4 pt-2 cursor-pointer transform transition-transform hover:scale-[1.15] duration-700"
              />
            </Link>
            <button
              onClick={toggleSidebar}
              className="p-4 rounded-full text-white text-2xl"
            >
              {isOpen ? (
                <IoClose className="h-14 w-12 pt-2 pr-2" />
              ) : (
                <HiMenuAlt3 className="h-14 w-12 pt-2 pr-2" />
              )}
            </button>
          </div>

          {isOpen ? (
            <motion.div
              {...sidebarAnimationOpen()}
              className="relative top-1 left-0 h-auto w-full opacity-85 text-white lg:h-full z-50"
            >
              <div className="px-4 flex flex-col">
                <div className="flex flex-col ">
                  <ul className="flex justify-center flex-col gap-2 xl:gap-12 cursor-pointer">
                    <Link
                      onClick={toggleSidebar}
                      href="/"
                      className="p-3 text-xl flex items-center justify-center"
                    >
                      Home
                    </Link>
                    <Link
                      onClick={toggleSidebar}
                      href="/about"
                      className="p-3 text-xl flex items-center justify-center "
                    >
                      About Us
                    </Link>
                    <div
                      onClick={(e) => {
                        e.preventDefault(), toggleProductsDropdown();
                      }}
                      className="flex gap-2 cursor-pointer p-3 text-xl items-center justify-center"
                    >
                      Products
                      <MdArrowForwardIos
                        className={`mt-1 transition-transform duration-300 ${
                          rotateProductsIcon ? "rotate-90" : "rotate-0"
                        }`}
                      />
                    </div>
                  </ul>

                  {isProductsDropdownOpen && (
                    <motion.div
                      {...dropdownAnimationOpen()}
                      className="relative opacity-85 flex flex-col items-center h-auto gap-4 px-5 w-full cursor-pointer"
                    >
                      <ul className="flex flex-col justify-around h-auto w-full">
                        <Link
                          onClick={toggleSidebar}
                          href="/products/aluminium-windows"
                          className="p-2 text-[1.25rem] whitespace-nowrap flex items-center justify-center"
                        >
                          Aluminium Windows
                        </Link>
                        <Link
                          onClick={toggleSidebar}
                          href="/products/door-seals"
                          className="p-2 text-[1.25rem] whitespace-nowrap flex items-center justify-center"
                        >
                          Door Seals
                        </Link>
                        <Link
                          onClick={toggleSidebar}
                          href="/products/glass-railings"
                          className="p-2 text-[1.25rem] whitespace-nowrap flex items-center justify-center"
                        >
                          Glass Railings
                        </Link>
                        <Link
                          onClick={toggleSidebar}
                          href="/products/invisiblegrill"
                          className="p-2 text-[1.25rem] flex items-center justify-center"
                        >
                          Invisible Grill
                        </Link>
                        <Link
                          onClick={toggleSidebar}
                          href="/products/office-partitions"
                          className="p-2 text-[1.25rem] whitespace-nowrap flex items-center justify-center"
                        >
                          Office Partition
                        </Link>
                        <Link
                          onClick={toggleSidebar}
                          href="/products/bathroom-partitions"
                          className="p-2 text-[1.25rem] flex items-center justify-center"
                        >
                          Bathroom Partition
                        </Link>
                        {/* <Link
                          onClick={toggleSidebar}
                          href="/products/ssWireRope"
                          className="p-2 text-[1.25rem] flex items-center justify-center"
                        >
                          Stainless Steel Wire Rope
                        </Link> */}

                        <Link
                          onClick={toggleSidebar}
                          href="/products/queue-manager"
                          className="p-2 text-[1.25rem] flex items-center justify-center"
                        >
                          Queue Manager
                        </Link>
                      </ul>
                    </motion.div>
                  )}

                  {/* <Link
                    onClick={toggleSidebar}
                    href="/blog"
                    className="p-3 text-xl flex items-center justify-center"
                  >
                    Blog
                  </Link> */}
                  <Link
                    onClick={toggleSidebar}
                    href="/contact"
                    className="p-3 text-xl flex items-center justify-center"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              {...sidebarAnimationClose()}
              className="fixed top-0 left-0 w-full h-full bg-black text-white"
            ></motion.div>
          )}
        </>
      ) : (
        <div className="sm:px-6 lg:px-28 w-full h-full hidden md:flex">
          <Link href="/" className="">
            <Image
              priority
              src={Logo}
              alt="Logo"
              className="h-[5rem] w-[12rem] cursor-pointer transform transition-transform hover:scale-[1.15] duration-700"
            />
          </Link>
          <div className="flex justify-end items-center w-full h-auto">
            <div className="flex justify-center h-full items-center align-middle gap-4">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group h-full flex items-center"
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.href}
                    className="px-3 py-2 rounded-md text-base hover:text-white flex items-center roboto-bold gap-1"
                  >
                    {item.name}
                    {item.name === "Products" && (
                      <MdArrowForwardIos
                        className={`mt-1 ${
                          hoveredItem === item.name
                            ? "rotate-90 transition-all duration-500 "
                            : "rotate-0 transition-all duration-500"
                        }`}
                      />
                    )}
                  </Link>
                  {item.subItems && hoveredItem === item.name && (
                    <div className="absolute top-[80px] left-0 w-52 rounded-md shadow-lg bg-white text-gray-700 z-10">
                      <div className=" roboto-regular" role="menu">
                        {item.subItems.map((subItem) => (
                          <div key={subItem.name} className="relative group">
                            <Link
                              href={subItem.href}
                              className=" px-4 py-2 text-md whitespace-nowrap text-[#000] hover:bg-gradient-to-br from-gray-50 to-gray-500 hover:text-black rounded-md flex items-center roboto-regular"
                            >
                              {subItem.name}
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <Link href="/contact">
                <button className="border-none text-sm bg-white text-black roboto-bold w-[4rem] h-[2rem] cursor-pointer lg:h-[3.5rem] lg:w-[8rem] lg:px-2 rounded-[5px] lg:text-sm xl:h-[2.7rem] xl:w-[8rem] xl:text-sm  hover:scale-110 transition duration-700 hover:text-black">
                  GET IN TOUCH
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
