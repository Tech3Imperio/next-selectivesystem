"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import NestedNavigation from "./NestedNavigation";
import { productsNavItemList } from "./navItems";

function generateSubcategories(count, parentName) {
  return Array.from({ length: count }, (_, i) => ({
    name: `Subcategory ${i + 1}`,
    type: "nested",
    href: `/${parentName.toLowerCase().replace(" ", "-")}/subcategory-${i + 1}`,
    items: Array.from(
      { length: Math.floor(Math.random() * 3) + 2 },
      (_, j) => ({
        name: `Sub-subcategory ${i + 1}.${j + 1}`,
        type: "link",
        href: `/${parentName.toLowerCase().replace(" ", "-")}/subcategory-${
          i + 1
        }/sub-subcategory-${j + 1}`,
      })
    ),
  }));
}

const mainNavItems = [
  {
    name: "Products",
    type: "nested",
    href: "/products",
    // items: Array.from({ length: 9 }, (_, i) => ({
    //   name: `Category ${i + 1}`,
    //   type: "nested",
    //   href: `/products/category-${i + 1}`,
    //   items: generateSubcategories(
    //     Math.floor(Math.random() * 5) + 2,
    //     `Category ${i + 1}`
    //   ),
    // })),
    items: productsNavItemList,
  },
  // {
  //   name: "Series",
  //   type: "nested",
  //   href: "/series",
  //   items: ["Series 1", "Series 2", "Series 3"].map((name) => ({
  //     name,
  //     type: "link",
  //     href: `/series/${name.toLowerCase().replace(" ", "-")}`,
  //   })),
  // },
  // { name: "Blogs", type: "link", href: "/blogs" },
  { name: "About Us", type: "link", href: "/about" },
  { name: "Contact Us", type: "link", href: "/contact" },
  { name: "Categories", type: "link", href: "/category" },
];

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="relative z-50 py-2 px-8 text-gray-100 dark:text-gray-900 rounded-full shadow-md"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
      {isOpen && (
        <div
          className="absolute w-full z-75 h-[100vh] top-0 left-0 bottom-0 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div className="absolute h-min top-5 right-3 w-64 rounded-lg   bg-black dark:bg-white z-100 hamburger-menu">
            <NestedNavigation
              items={mainNavItems}
              onClose={() => setIsOpen(false)}
            />
          </div>
        </div>
      )}
    </>
  );
}
