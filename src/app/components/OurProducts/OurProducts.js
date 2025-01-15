// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";

// // Import your existing images
// import invisiblegrill from "../../assets/ourproduct/invisiblegrill.webp";
// import glass from "../../assets/ourproduct/glass.webp";
// import officepartition from "../../assets/ourproduct/officepartition.webp";
// import aluminumPhone from "../../assets/AluminiumProduct/AluminiumPhoneImages/aluminumPhone.jpg";
// import parallesBlack from "../../assets/AluminiumProduct/parallesBlack.webp";

// const ProductData = [
//   {
//     id: 1,
//     title: "Aluminium Windows",
//     link: "/products/aluminium-windows",
//     description:
//       "Enhance your space with sleek, energy-efficient aluminum windows, offering modern aesthetics and long-lasting durability.",
//     img: aluminumPhone,
//   },
//   {
//     id: 2,
//     title: "Invisible Grill",
//     link: "/products/invisiblegrill",
//     description:
//       "Invisible grills provide rust-resistant balcony safety, protecting children while maintaining panoramic views and sleek aesthetics.",
//     img: invisiblegrill,
//   },
//   {
//     id: 3,
//     title: "Glass Railing",
//     link: "/products/glass-railings",
//     description:
//       "Enhance your space with elegant glass railings that offer unobstructed views, safety, and modern design.",
//     img: glass,
//   },
//   {
//     id: 4,
//     title: "Office Partition",
//     link: "/products/office-partitions",
//     description:
//       "Transform your workspace with sleek glass and aluminum frame office partitions, offering modern design, enhanced privacy, and improved natural light flow.",
//     img: officepartition,
//   },
// ];

// const OurProducts = () => {
//   return (
//     <section className="max-w-[90rem] mx-auto py-16 px-4">
//       <div className="mb-12 flex justify-center">
//         <p className="text-4xl text-black din-bold ">Our Offerings</p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {ProductData.map((product, index) => (
//           <motion.div
//             key={product.id}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{
//               duration: 0.5,
//               delay: index * 0.2,
//               ease: "easeOut",
//             }}
//             viewport={{ once: true }}
//             className="group"
//           >
//             <Link href={product.link} className="block">
//               <div className="grid md:grid-cols-2 gap-6 items-start bg-white p-4 rounded-lg hover:shadow-2xl transition-shadow duration-300">
//                 <div className="relative h-64 overflow-hidden rounded-lg">
//                   <Image
//                     src={product.img}
//                     alt={product.title}
//                     fill
//                     className="object-cover transition-transform duration-300 group-hover:scale-105"
//                   />
//                 </div>
//                 <div className="flex flex-col justify-between h-full">
//                   <div>
//                     <h3 className="text-2xl poppins-semibold text-blue-950 mb-3">
//                       {product.title}
//                     </h3>
//                     <p className="text-gray-600 poppins-regular mb-4 line-clamp-3">
//                       {product.description}
//                     </p>
//                   </div>
//                   <motion.div
//                     whileHover={{ x: 5 }}
//                     className="inline-flex items-center text-gray-600 poppins-regular text-sm"
//                   >
//                     Read More
//                     <svg
//                       className="w-5 h-5 ml-2"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M9 5l7 7-7 7"
//                       />
//                     </svg>
//                   </motion.div>
//                 </div>
//               </div>
//             </Link>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default OurProducts;
// "use client";

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import invisiblegrill from "../../assets/ourproduct/invisiblegrill.webp";
// import glass from "../../assets/ourproduct/glass.webp";
// import officepartition from "../../assets/ourproduct/officepartition.webp";
// import aluminumPhone from "../../assets/AluminiumProduct/AluminiumPhoneImages/aluminumPhone.jpg";
// import parallesBlackLaptop from "../../assets/AluminiumProduct/parallesBlackLaptop.webp";
// import parallesBlackPhone from "../../assets/AluminiumProduct/parallexBlackPhone.webp";

// const ProductData = [
//   {
//     id: 1,
//     title: "Aluminium Windows",
//     link: "/products/aluminium-windows",
//     description:
//       "Enhance your space with sleek, energy-efficient aluminum windows, offering modern aesthetics and long-lasting durability.",
//     img: aluminumPhone,
//   },
//   {
//     id: 2,
//     title: "Invisible Grill",
//     link: "/products/invisiblegrill",
//     description:
//       "Invisible grills provide rust-resistant balcony safety, protecting children while maintaining panoramic views and sleek aesthetics.",
//     img: invisiblegrill,
//   },
//   {
//     id: 3,
//     title: "Glass Railing",
//     link: "/products/glass-railings",
//     description:
//       "Enhance your space with elegant glass railings that offer unobstructed views, safety, and modern design.",
//     img: glass,
//   },
//   {
//     id: 4,
//     title: "Office Partition",
//     link: "/products/office-partitions",
//     description:
//       "Transform your workspace with sleek glass and aluminum frame office partitions, offering modern design, enhanced privacy, and improved natural light flow.",
//     img: officepartition,
//   },
// ];

// const useScreenSize = () => {
//   const [isLargeScreen, setIsLargeScreen] = useState(false);

//   useEffect(() => {
//     const checkScreenSize = () => {
//       setIsLargeScreen(window.innerWidth >= 769);
//     };

//     checkScreenSize();
//     window.addEventListener("resize", checkScreenSize);

//     return () => window.removeEventListener("resize", checkScreenSize);
//   }, []);

//   return isLargeScreen;
// };

// const OurProducts = () => {
//   const isLargeScreen = useScreenSize();

//   return (
//     <section className="relative w-full py-16 px-4">
//       <div
//         className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-fixed bg-center bg-cover"
//         style={{
//           backgroundImage: `url(${
//             isLargeScreen ? parallesBlackLaptop.src : parallesBlackPhone.src
//           })`,
//         }}
//       ></div>
//       <div className="relative max-w-[90rem] mx-auto z-10 mb-12 flex justify-center">
//         <p className="text-4xl text-white din-bold">Our Offerings</p>
//       </div>

//       <div className="relative max-w-[90rem] mx-auto z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
//         {ProductData.map((product, index) => (
//           <motion.div
//             key={product.id}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{
//               duration: 0.5,
//               delay: index * 0.2,
//               ease: "easeOut",
//             }}
//             viewport={{ once: true }}
//             className="group"
//           >
//             <Link href={product.link} className="block">
//               <div className="grid md:grid-cols-2 gap-6 items-start bg-white p-4 rounded-lg hover:shadow-2xl transition-shadow duration-300">
//                 <div className="relative h-64 overflow-hidden rounded-lg">
//                   <Image
//                     src={product.img || "/placeholder.svg"}
//                     alt={product.title}
//                     fill
//                     className="object-cover transition-transform duration-300 group-hover:scale-105"
//                   />
//                 </div>
//                 <div className="flex flex-col justify-between h-full">
//                   <div>
//                     <h3 className="text-3xl din-bold text-black mb-3">
//                       {product.title}
//                     </h3>
//                     <p className="roboto-light mb-4 line-clamp-3">
//                       {product.description}
//                     </p>
//                   </div>
//                   <motion.div
//                     whileHover={{ x: 5 }}
//                     className="inline-flex items-center roboto-light text-sm"
//                   >
//                     Read More
//                     <svg
//                       className="w-5 h-5 ml-2"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M9 5l7 7-7 7"
//                       />
//                     </svg>
//                   </motion.div>
//                 </div>
//               </div>
//             </Link>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default OurProducts;
"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import invisiblegrill from "../../assets/ourproduct/invisiblegrill.webp";
import glass from "../../assets/ourproduct/glass.webp";
import officepartition from "../../assets/ourproduct/officepartition.webp";
import aluminumPhone from "../../assets/AluminiumProduct/AluminiumPhoneImages/aluminumPhone.jpg";
import parallesBlackLaptop from "../../assets/AluminiumProduct/parallesBlackLaptop.webp";
import parallesBlackPhone from "../../assets/AluminiumProduct/parallexBlackPhone.webp";

const ProductData = [
  {
    id: 1,
    title: "Aluminium Windows",
    link: "/products/aluminium-windows",
    description:
      "Enhance your space with sleek, energy-efficient aluminum windows, offering modern aesthetics and long-lasting durability.",
    img: aluminumPhone,
  },
  {
    id: 2,
    title: "Invisible Grill",
    link: "/products/invisiblegrill",
    description:
      "Invisible grills provide rust-resistant balcony safety, protecting children while maintaining panoramic views and sleek aesthetics.",
    img: invisiblegrill,
  },
  {
    id: 3,
    title: "Glass Railing",
    link: "/products/glass-railings",
    description:
      "Enhance your space with elegant glass railings that offer unobstructed views, safety, and modern design.",
    img: glass,
  },
  {
    id: 4,
    title: "Office Partition",
    link: "/products/office-partitions",
    description:
      "Transform your workspace with sleek glass and aluminum frame office partitions, offering modern design, enhanced privacy, and improved natural light flow.",
    img: officepartition,
  },
];

const useScreenSize = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 769);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return isLargeScreen;
};

const OurProducts = () => {
  const isLargeScreen = useScreenSize();

  return (
    <section className="relative w-full py-16 px-4">
      <div
        className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: `url(${
            isLargeScreen ? parallesBlackLaptop.src : parallesBlackPhone.src
          })`,
        }}
      ></div>
      <div className="relative max-w-[90rem] mx-auto z-10 mb-12 flex justify-center">
        <p className="text-4xl text-white din-bold">Our Offerings</p>
      </div>

      <div className="relative max-w-[90rem] mx-auto z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {ProductData.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="group"
          >
            <Link href={product.link} className="block">
              <div className="grid md:grid-cols-2 gap-6 items-start bg-white p-4 rounded-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="relative h-64 overflow-hidden rounded-lg">
                  <Image
                    src={product.img || "/placeholder.svg"}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-3xl din-bold text-black mb-3">
                      {product.title}
                    </h3>
                    <p className="roboto-light mb-4 line-clamp-3">
                      {product.description}
                    </p>
                  </div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center roboto-light text-sm"
                  >
                    Read More
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurProducts;
