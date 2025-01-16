// pages/aluminium-windows/index.js

import Image from "next/image";
import Link from "next/link";
import windows1 from "../../assets/Railing/RailingProducts/ModernBalcony.webp";
import windows2 from "../../assets/AluminiumProduct/AluminiumWindows/windows2.webp";
import windows3 from "../../assets/AluminiumProduct/AluminiumWindows/windows3.webp";
import windows4 from "../../assets/AluminiumProduct/AluminiumWindows/windows4.webp";
// import windows5 from "../../assets/AluminiumProduct/AluminiumWindows/windows5.webp";
import windows6 from "../../assets/AluminiumProduct/AluminiumWindows/windows6.webp";

const GlassrailingProductsPanel = [
  {
    id: "balcony-glass-railing",
    image: windows1,
    ProductName: "Modern Aluminum Fixed Windows",
  },
  {
    id: "awning-aluminium-window01",
    image: windows2,
    ProductName: "Aluminum Awning Windows",
  },
  {
    id: "sliding-aluminium-window1",
    image: windows3,
    ProductName: "Aluminum Sliding Windows",
  },
  {
    id: "casement-aluminium-window",
    image: windows4,
    ProductName: "Casement Aluminum Window",
  },
  {
    id: "glass-corner-alum-windows",
    image: windows6,
    ProductName: "Aluminium Glass To Glass Corner Windows",
  },
];

export default function GlassRailingSection() {
  return (
    <div className="max-w-[85rem] mx-auto container flex flex-col justify-center items-center pt-14">
      <div className="m-4">
        <p className=" text-2xl lg:text-4xl din-bold text-black  mb-8 text-center">
          Premium Glass Railings for Residential & Commercial Use Stylish, Safe
          & Easy to Maintain
        </p>
        <p className="text-base text-justify px-4 md:px-0 md:text-center max-w-6xl roboto-light mx-auto text-gray-800">
          Discover premium glass railings that combine safety, elegance, and
          <b>modern design</b>. Ideal for both{" "}
          <strong>balconies and staircases</strong>, our{" "}
          <strong>frameless glass railings</strong> offer a{" "}
          <b>sleek glass railing</b>, unobstructed view that enhances the beauty
          of your space while ensuring reliable protection. Featuring{" "}
          <strong>PVB SGP laminated glass</strong>, our railings are engineered
          for superior strength and durability
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-4">
        {GlassrailingProductsPanel.map((item) => (
          <Link
            href={`/products/glass-railing/${item.id}`}
            key={item.id}
            className="group"
          >
            <div className="rounded-lg flex flex-col overflow-hidden transition-transform duration-300 group-hover:scale-105">
              {/* Center the image in the container */}
              <div className="flex justify-center items-center p-8 lg:p-4">
                <Image
                  src={item.image}
                  alt={item.ProductName}
                  loading="lazy"
                  className="h-[100%] w-[100%] object-cover rounded-2xl"
                />
              </div>
            </div>
            <p className="text-center text-xl roboto-light text-gray-800">
              {item.ProductName}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
