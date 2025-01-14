// pages/aluminium-windows/index.js

import Image from "next/image";
import Link from "next/link";
import windows1 from "../../assets/AluminiumProduct/AluminiumWindows/windows1.webp";
import windows2 from "../../assets/AluminiumProduct/AluminiumWindows/windows2.webp";
import windows3 from "../../assets/AluminiumProduct/AluminiumWindows/windows3.webp";
import windows4 from "../../assets/AluminiumProduct/AluminiumWindows/windows4.webp";
// import windows5 from "../../assets/AluminiumProduct/AluminiumWindows/windows5.webp";
import windows6 from "../../assets/AluminiumProduct/AluminiumWindows/windows6.webp";

const AluminiumProductsPanel = [
  {
    id: "fixed-aluminium",
    image: windows1,
    ProductName: "Modern Aluminum Fixed Windows",
  },
  {
    id: "awningaluminium",
    image: windows2,
    ProductName: "Aluminum Awning Windows",
  },
  {
    id: "sliding-windows",
    image: windows3,
    ProductName: "Aluminum Sliding Windows",
  },
  {
    id: "casement-wnidow",
    image: windows4,
    ProductName: "Casement Aluminum Window",
  },
  // { id: 5, image: windows5, ProductName: "Aluminium Sliding Window" },
  {
    id: "glass-corwindow",
    image: windows6,
    ProductName: "Aluminium Glass To Glass Corner Windows",
  },
];

export default function AluminiumWindows() {
  return (
    <div className="max-w-[85rem] mx-auto container flex flex-col justify-center items-center pt-14">
      <div className="m-4">
        <h1 className=" text-2xl lg:text-4xl font-medium text-blue-900  mb-8 text-center">
          Premium Aluminum Windows Combining Durability, Style, and Modern
          Design
        </h1>
        <p className="text-base text-center max-w-6xl mx-auto text-gray-800">
          Discover <strong>premium aluminum windows</strong> that combine{" "}
          <b>durability</b>, sleek style, and modern design. Ideal for both{" "}
          <b>residential</b> and <b>commercial</b> properties, our windows offer
          exceptional energy efficiency, low maintenance, and long-lasting
          performance. Enhance your space with windows that provide both
          functionality and elegance. Contact us today for{" "}
          <strong>custom aluminum window</strong> solutions and professional
          installation.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-4">
        {AluminiumProductsPanel.map((item) => (
          <Link
            href={`/products/aluminium-windows/${item.id}`}
            key={item.id}
            className="group"
          >
            <div className="rounded-lg flex flex-col overflow-hidden transition-transform duration-300 group-hover:scale-105">
              {/* Center the image in the container */}
              <div className="flex justify-center items-center p-4">
                <Image
                  src={item.image}
                  alt={item.ProductName}
                  loading="lazy"
                  className="h-[100%] w-[100%] object-cover rounded-2xl"
                />
              </div>
            </div>
            <p className="text-center text-xl poppins-semibold text-gray-800">
              {item.ProductName}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
