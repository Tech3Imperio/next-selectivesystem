// pages/aluminium-windows/index.js

import Image from "next/image";
import Link from "next/link";
import Doorseals1 from "../../assets/DoorSeals/Doorseals1.png";
import Doorseal2 from "../../assets/DoorSeals/Doorseal2.png";
import Doorseal3 from "../../assets/DoorSeals/Doorseal3.png";
import Doorseal4 from "../../assets/DoorSeals/Doorseal4.png";
import Doorseal5 from "../../assets/DoorSeals/Doorseal5.png";
import Doorseal6 from "../../assets/DoorSeals/Doorseal6.png";
const DoorSealProductsPanel = [
  {
    id: 1,
    image: Doorseals1,
    ProductName: "Flat insert profile",
  },
  {
    id: 2,
    image: Doorseal2,
    ProductName: "Mounting brackets",
  },
  {
    id: 3,
    image: Doorseal3,
    ProductName: "Aluminum Sliding Windows",
  },
  {
    id: 4,
    image: Doorseal4,
    ProductName: "Casement Aluminum Window",
  },
  {
    id: 5,
    image: Doorseal5,
    ProductName: "Aluminium Sliding Window",
  },
  {
    id: 6,
    image: Doorseal6,
    ProductName: "Aluminium Glass To Glass Corner Windows",
  },
];

export default function DoorSealProduct() {
  return (
    <div className="max-w-[85rem] mx-auto flex flex-col justify-center items-center pt-14">
      <div className="m-4">
        <h1 className=" text-xl lg:text-4xl poppins-semibold text-primary drop-shadow-lg mb-8 text-center">
          Premium Aluminum Door Seals & Mounting Brackets for Wooden Doors.
        </h1>
        <p className="poppins-extralight text-base text-justify text-gray-700">
          Upgrade your wooden doors with our high-quality{" "}
          <strong>aluminum door seals</strong> and{" "}
          <strong>mounting brackets for wooden doors</strong>. Designed for{" "}
          <strong>energy efficiency</strong>, noise reduction, and protection
          from drafts and moisture, our products ensure long-lasting performance
          and easy installation. Perfect for both residential and commercial
          use, these seals deliver enhanced comfort and durability.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-4">
        {DoorSealProductsPanel.map((item) => (
          <Link
            href={`/products/door-seals/${item.id}`}
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
