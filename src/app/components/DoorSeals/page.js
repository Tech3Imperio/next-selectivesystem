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
    id: "threshold-floor",
    image: Doorseals1,
    ProductName: "Floor separation threshold",
  },
  {
    id: "bracketMounting",
    image: Doorseal2,
    ProductName: "Mounting brackets",
  },
  {
    id: "Sliding-Windows",
    image: Doorseal3,
    ProductName: "Aluminum Sliding Windows",
  },
  {
    id: "Door-drop-seals",
    image: Doorseal4,
    ProductName: "Door drop seals",
  },
  {
    id: "Drop-down-seals",
    image: Doorseal5,
    ProductName: "Drop-down seals",
  },
  {
    id: "Automatic-doors",
    image: Doorseal6,
    ProductName: "Automatic door drop-down seal",
  },
];

export default function DoorSealProduct() {
  return (
    <div className="max-w-[85rem] mx-auto flex flex-col justify-center items-center pt-14">
      <div className="m-4">
        <h1 className=" text-xl lg:text-4xl din-bold mb-8 text-center">
          Premium Aluminum Door Seals & Mounting Brackets for Wooden Doors.
        </h1>
        <p className=" roboto-light text-base text-justify ">
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
            <p className="text-center text-xl roboto-light">
              {item.ProductName}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
