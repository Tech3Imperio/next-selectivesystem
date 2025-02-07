"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import "../../globals.css";
import HamburgerMenu from "./HamburgerMenu";
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
        // { name: "Invisible Grill", href: "/products/invisiblegrill" },
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
    <nav className={`absolute xl:fixed text-white w-[100vw] z-50 `}>
      {/* {isMobileView ? (
        <HamburgerMenu />
      )  */}
      {isMobileView ? (
        <>
          <div className="flex justify-between items-center md:px-6 w-full z-50">
            <Link href="/" className="px-2 py-1">
              <Image
                priority
                src={Logo}
                alt="Logo"
                className="h-[5.5rem] w-[10rem] ml-4 cursor-pointer transform transition-transform hover:scale-[1.15] duration-700"
              />
            </Link>
            <HamburgerMenu />
          </div>
        </>
      ) : (
        <div className="sm:px-6 lg:px-6 w-full h-full hidden md:flex">
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
