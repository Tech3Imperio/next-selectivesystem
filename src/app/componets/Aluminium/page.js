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
  { id: 1, image: windows1, ProductName: "Modern Aluminum Fixed Windows" },
  { id: 2, image: windows2, ProductName: "Aluminum Awning Windows" },
  { id: 3, image: windows3, ProductName: "Aluminum Sliding Windows" },
  { id: 4, image: windows4, ProductName: "Casement Aluminum Window" },
  // { id: 5, image: windows5, ProductName: "Aluminium Sliding Window" },
  {
    id: 6,
    image: windows6,
    ProductName: "Aluminium Glass To Glass Corner Windows",
  },
];

export default function AluminiumWindows() {
  return (
    <div className="max-w-[85rem] mx-auto flex flex-col justify-center items-center">
      <div className="m-4">
        <h1 className="text-4xl poppins-semibold text-primary drop-shadow-lg mb-8 text-center">
          Premium Aluminum Windows: Combining Durability, Style, and Modern
          Design
        </h1>
        <p className="poppins-extralight text-base text-gray-700">
          Discover <strong>premium aluminum windows</strong> that combine
          <b>durability</b>, sleek style, and modern design. Ideal for both
          <b>residential</b> and <b>commercial</b> properties, our windows offer
          exceptional energy efficiency, low maintenance, and long-lasting
          performance. Enhance your space with windows that provide both
          functionality and elegance. Contact us today for{" "}
          <strong>custom aluminum window</strong>
          solutions and professional installation.
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
                  className="h-[100%] w-[100%] object-cover"
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
