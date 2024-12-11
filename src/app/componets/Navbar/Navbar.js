// "use client";
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import whiteLogo from "../../assets/Logo/whiteLogo.png";
// import Image from "next/image";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isProductsOpen, setIsProductsOpen] = useState(false);

//   const handleLinkClick = () => {
//     setIsOpen(false);
//     setIsProductsOpen(false);
//   };

//   const handleProductsClick = () => {
//     setIsProductsOpen(!isProductsOpen);
//   };

//   const toggleNavbar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="fixed top-0 left-0 w-screen harmony-regular z-20 transition duration-300 rounded-b-3xl bg-gray-900 bg-opacity-50 backdrop-blur">
//       <div className="max-w-[90rem] mx-auto flex justify-between items-center h-full">
//         <div className="text-white font-bold text-lg hover:scale-110  transition-all">
//           <Link href="/">
//             <Image
//               className={`h-24 w-[13rem]${isOpen ? "h-20 w-44 " : ""}`}
//               src={whiteLogo}
//               alt="logo"
//             />
//           </Link>
//         </div>
//         <div className="flex items-center h-full">
//           <div className="lg:hidden">
//             <button
//               onClick={toggleNavbar}
//               className="text-white focus:outline-none"
//               aria-label={isOpen ? "Close menu" : "Open menu"}
//             >
//               {isOpen ? (
//                 <svg
//                   className="w-10 h-10"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"
//                   ></path>
//                 </svg>
//               ) : (
//                 <svg
//                   className="w-10 h-10"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h16m-7 6h7"
//                   ></path>
//                 </svg>
//               )}
//             </button>
//           </div>
//           <div className="hidden lg:flex items-center gap-6 h-full">
//             <Link
//               href="/"
//               className="text-white h-full"
//               onClick={handleLinkClick}
//             >
//               Home
//             </Link>
//             <Link
//               href="/about"
//               className="text-white"
//               onClick={handleLinkClick}
//             >
//               About Us
//             </Link>
//             <div className="relative group">
//               <button
//                 className="text-white h-full"
//                 aria-expanded={isProductsOpen}
//               >
//                 Products
//               </button>
//               <div className="absolute left-0 mb-6 mt-0.4 w-52 rounded-2xl bg-[#e4e4e4] shadow-lg hidden group-hover:block">
//                 <Link
//                   href="/products/aluminium-windows"
//                   className="block px-4 py-2 harmony-light text-[#000] hover:bg-[#2f2c2c] hover:text-[#14ff72cb]  hover:rounded-2xl"
//                 >
//                   Aluminium Windows
//                 </Link>
//                 <Link
//                   href="/products/door-seals"
//                   className="block px-4 py-2 harmony-light text-[#000] hover:bg-[#2f2c2c] hover:text-[#14ff72cb] hover:rounded-2xl"
//                 >
//                   Door Seals
//                 </Link>
//                 <Link
//                   href="/products/railings"
//                   className="block px-4 py-2 harmony-light text-[#000] hover:bg-[#2f2c2c] hover:text-[#14ff72cb] hover:rounded-2xl"
//                 >
//                   Railings
//                 </Link>
//                 <Link
//                   href="/products/queue-manager"
//                   className="block px-4 py-2 harmony-light text-[#000] hover:bg-[#2f2c2c] hover:text-[#14ff72cb] hover:rounded-2xl"
//                 >
//                   Queue Manager
//                 </Link>
//                 <Link
//                   href="/products/invisiblegrill"
//                   className="block px-4 py-2 harmony-light text-[#000] hover:bg-[#2f2c2c] hover:text-[#14ff72cb] hover:rounded-2xl"
//                 >
//                   Invisible Grill
//                 </Link>
//                 <Link
//                   href="/products/office-partitions"
//                   className="block px-4 py-2 harmony-light text-[#000] hover:bg-[#2f2c2c] hover:text-[#14ff72cb] hover:rounded-2xl"
//                 >
//                   Office Partitions
//                 </Link>
//                 <Link
//                   href="/products/bathroom-partitions"
//                   className="block px-4 py-2 harmony-light text-[#000] hover:bg-[#2f2c2c] hover:text-[#14ff72cb] hover:rounded-2xl"
//                 >
//                   Bathroom Partitions
//                 </Link>
//               </div>
//             </div>
//             <Link
//               href="/contact"
//               className="text-white"
//               onClick={handleLinkClick}
//             >
//               Contact Us
//             </Link>
//             <Link href="/contact">
//               <button className="border-none text-sm bg-[#14ff72cb] text-[#fff] w-[4rem] h-[2rem] rounded-[2rem] cursor-pointer md:font-semibold lg:h-[3.5rem] lg:w-[8rem] lg:px-2 lg:rounded-[3rem] lg:text-sm xl:h-[2.7rem] xl:w-[8rem] xl:text-sm hover:bg-[#e4e4e4] hover:text-[#000]">
//                 GET IN TOUCH
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//       {isOpen && (
//         <div className="lg:hidden bg-gray-900 bg-opacity-50 backdrop-blur h-full px-2 pt-2 pb-3 space-y-1 sm:px-3 transition-transform duration-300 transform">
//           <Link
//             href="/"
//             onClick={handleLinkClick}
//             className="block px-4 py-4 text-white"
//           >
//             Home
//           </Link>
//           <Link
//             href="/about"
//             onClick={handleLinkClick}
//             className="block px-4 py-4 text-white"
//           >
//             About Us
//           </Link>
//           <div className="relative">
//             <button
//               onClick={handleProductsClick}
//               className="block px-4 py-4 text-white w-full text-left"
//               aria-expanded={isProductsOpen}
//             >
//               Products
//             </button>
//             {isProductsOpen && (
//               <div className="pl-4">
//                 <Link
//                   href="/products/aluminium-windows"
//                   onClick={handleLinkClick}
//                   className="block px-4 py-2 text-gray-100 hover:bg-gray-400"
//                 >
//                   Aluminium Windows
//                 </Link>
//                 <Link
//                   href="/products/door-seals"
//                   onClick={handleLinkClick}
//                   className="block px-4 py-2 text-gray-100 hover:bg-gray-400"
//                 >
//                   Door Seals
//                 </Link>
//                 <Link
//                   href="/products/railings"
//                   onClick={handleLinkClick}
//                   className="block px-4 py-2 text-gray-100 hover:bg-gray-400"
//                 >
//                   Railings
//                 </Link>
//                 <Link
//                   href="/products/queuemanager"
//                   onClick={handleLinkClick}
//                   className="block px-4 py-2 text-gray-100 hover:bg-gray-400"
//                 >
//                   Queue Manager
//                 </Link>
//                 <Link
//                   href="/products/invisiblegrill"
//                   onClick={handleLinkClick}
//                   className="block px-4 py-2 text-gray-100 hover:bg-gray-400"
//                 >
//                   Invisible Grill
//                 </Link>
//                 <Link
//                   href="/products/office-partitions"
//                   onClick={handleLinkClick}
//                   className="block px-4 py-2 text-gray-100 hover:bg-gray-400"
//                 >
//                   Office Partitions
//                 </Link>
//                 <Link
//                   href="/products/bathroom-partitions"
//                   onClick={handleLinkClick}
//                   className="block px-4 py-2 text-gray-100 hover:bg-gray-400"
//                 >
//                   Bathroom Partitions
//                 </Link>
//               </div>
//             )}
//           </div>
//           <Link
//             href="/contact"
//             onClick={handleLinkClick}
//             className="block px-4 py-4 text-white"
//           >
//             Contact Us
//           </Link>
//           <div className="px-2 py-2">
//             <button className="border-none text-sm bg-[#14ff72cb] text-[#fff] w-[7rem] p-2 h-[2.3rem] rounded-[2rem] cursor-pointer md:font-semibold lg:h-[3.5rem] lg:w-[8rem] lg:px-2 lg:rounded-[3rem] lg:text-sm xl:h-[2.7rem] xl:w-[8rem] xl:text-sm hover:bg-[#e4e4e4] hover:text-[#000]">
//               GET IN TOUCH
//             </button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
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
          name: "Railings",
          href: "/products/railings",
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
          ? "bg-gray-900 bg-opacity-50 backdrop-blur"
          : " bg-gray-900 bg-opacity-50 backdrop-blur"
      } text-white w-[100vw] z-50 rounded-b-3xl`}
    >
      {isMobileView ? (
        <>
          <div className="flex justify-between items-center md:px-28 w-full bg-gray-950 opacity-85 z-50">
            <Link href="/" className="px-2 py-1">
              <Image
                priority
                src={Logo}
                alt="Logo"
                className="h-[4rem] w-[7rem] cursor-pointer hover:scale-105"
              />
            </Link>
            <button
              onClick={toggleSidebar}
              className="p-4 rounded-full text-white text-2xl"
            >
              {isOpen ? (
                <IoClose className="h-9 w-9" />
              ) : (
                <GiHamburgerMenu className="h-9 w-9" />
              )}
            </button>
          </div>

          {isOpen ? (
            <motion.div
              {...sidebarAnimationOpen()}
              className="relative top-16 left-0 h-auto w-full bg-gray-950 opacity-85 text-white lg:h-full z-50"
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
                      className="relative bg-gray-950 opacity-85 flex flex-col items-center h-auto gap-4 px-5 w-full cursor-pointer"
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
                          href="/products/railings"
                          className="p-2 text-[1.25rem] whitespace-nowrap flex items-center justify-center"
                        >
                          Railings
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
                    className="px-3 py-2 rounded-md text-base hover:text-white flex items-center poppins-regular gap-1"
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
                    <div className="absolute top-[80px] left-0 w-52 rounded-md shadow-lg bg-[#e4e4e4] text-gray-700 z-10">
                      <div className=" din-medium" role="menu">
                        {item.subItems.map((subItem) => (
                          <div key={subItem.name} className="relative group">
                            <Link
                              href={subItem.href}
                              className=" px-4 py-2 text-md whitespace-nowrap text-[#000] hover:bg-[#2f2c2c] hover:text-[#14ff72cb] rounded-md flex items-center din-medium"
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
                <button className="border-none text-sm transition duration-700 bg-[#14ff72cb] text-[#fff] w-[4rem] h-[2rem] rounded-[2rem] cursor-pointer md:font-semibold lg:h-[3.5rem] lg:w-[8rem] lg:px-2 lg:rounded-[3rem] lg:text-sm xl:h-[2.7rem] xl:w-[8rem] xl:text-sm hover:bg-[#e4e4e4] hover:text-[#000]">
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
