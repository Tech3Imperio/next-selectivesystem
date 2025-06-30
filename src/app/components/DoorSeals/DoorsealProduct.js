// pages/aluminium-windows/index.js

import Image from "next/image";
import Link from "next/link";
import Doorseals1 from "../../assets/DoorSeals/Doorseals1.png";
import Doorseal2 from "../../assets/DoorSeals/Doorseal2.png";
import Doorseal3 from "../../assets/DoorSeals/Doorseal3.png";
import Doorseal4 from "../../assets/DoorSeals/Doorseal4.png";
import Doorseal5 from "../../assets/DoorSeals/Doorseal5.png";
import Doorseal6 from "../../assets/DoorSeals/Doorseal6.png";
import { motion } from "framer-motion";
import { BsFillTelephoneFill } from "react-icons/bs";

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

// export const metadata = {
//   title: "Door Seals | Drop Down Door Seals",
//   description:
//     "Looking for the best aluminium windows, modern glass railings, invisible grills, stainless steel windows, bathroom partitions, and office partitions? Selective Systems offers high-quality products for homes and offices in Bangalore, Mumbai, Chennai, Pune, and beyond. Contact us today for premium solutions!",
//   keywords: [
//     "aluminium windows Bangalore",
//     "glass railings in Mumbai",
//     "best invisible grills in Chennai",
//     "bathroom glass partitions",
//     "queue manager systems",
//     "stainless steel windows",
//     "aluminium door solutions",
//     "modern office partitions",
//     "balcony glass railings",
//     "modern aluminium window design",
//     "aluminium window suppliers",
//     "selective systems products",
//   ],
//   // url: "https://www.selectivesystems.in/contact",
//   alternates: {
//     canonical: "/components/DoorSeals",
//   },
// };

export default function DoorsealProduct() {
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
      <div className="flex w-[100vw] justify-center">
        <Link
          href="https://wa.me/919372593981"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.button
            className="rounded-[5px] px-5 py-3 m-10 bg-black text-white roboto-bold transition duration-700 border border-white flex items-center gap-2
    hover:bg-white hover:text-black hover:border-black"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <BsFillTelephoneFill size={14} />
            Connect with us
          </motion.button>
        </Link>
      </div>
    </div>
  );
}
