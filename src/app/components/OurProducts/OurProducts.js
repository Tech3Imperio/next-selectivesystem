// import React from "react";
// import invisiblegrill from "../../assets/ourproduct/invisiblegrill.webp";
// import glass from "../../assets/ourproduct/glass.webp";
// import officepartition from "../../assets/ourproduct/officepartition.webp";
// import aluminumPhone from "../../assets/AluminiumProduct/AluminiumPhoneImages/aluminumPhone.jpg";
// import { motion } from "framer-motion";
// import { FadeLeft } from "../utility/animation";
// import Link from "next/link";
// import Image from "next/image";

// const ProductData = [
//   {
//     id: 1,
//     title: "Invisible Grill",
//     link: "/products/invisible-grill",
//     Description:
//       "Invisible grills provide rust-resistant balcony safety, protecting children while maintaining panoramic views and sleek aesthetics.",
//     img: invisiblegrill,
//     delay: 0.3,
//   },
//   {
//     id: 2,
//     title: "Glass Railing",
//     link: "/products/railings",
//     Description:
//       "Enhance your space with elegant glass railings that offer unobstructed views, safety, and modern design.",
//     img: glass,
//     delay: 0.6,
//   },
//   {
//     id: 3,
//     title: "Office Partition",
//     link: "/products/office-partitions",
//     Description:
//       "Transform your workspace with sleek glass and aluminum frame office partitions, offering modern design, enhanced privacy, and improved natural light flow.",
//     img: officepartition,
//     delay: 0.9,
//   },
//   {
//     id: 4,
//     title: "Aluminium Windows",
//     link: "/products/aluminium-windows",
//     Description:
//       "Enhance your space with sleek, energy-efficient aluminum windows, offering modern aesthetics and long-lasting durability.",
//     img: aluminumPhone,
//     delay: 1.2,
//   },
// ];

// const OurProducts = () => {
//   return (
//     <section className="max-w-[90rem] mx-auto pb-20 overflow-hidden">
//       <motion.h1
//         initial={{ opacity: 0, x: -200 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         transition={{ duration: 1, delay: 0.3 }}
//         className="text-4xl flex justify-center p-4 text-primary poppins-semibold drop-shadow-lg pb-10 uppercase md:text-2xl lg:text-3xl"
//       >
//         Our Products
//       </motion.h1>
//       <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4">
//         {ProductData.map((product) => (
//           <Link href={product.link} key={product.id} aria-label={product.title}>
//             <motion.div
//               variants={FadeLeft(product.delay)}
//               initial="hidden"
//               whileInView="visible"
//               whileHover={{ scale: 1.05 }}
//               className="bg-gray-100 rounded-3xl shadow-lg hover:shadow-xl transition duration-700 flex flex-col items-center overflow-hidden h-full w-full"
//             >
//               <div className="w-full h-60 flex items-center justify-center overflow-hidden">
//                 <Image
//                   src={product.img}
//                   alt={product.title}
//                   loading="lazy"
//                   className="object-cover h-full w-full"
//                 />
//               </div>
//               <div className="p-4 flex flex-col items-center">
//                 <h2 className="text-xl text-primary font-semibold drop-shadow-lg mb-2 text-center">
//                   {product.title}
//                 </h2>
//                 <p className="text-gray-600 poppins-extralight text-sm text-center">
//                   {product.Description}
//                 </p>
//               </div>
//             </motion.div>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default OurProducts;

// import React from "react";
// import invisiblegrill from "../../assets/ourproduct/invisiblegrill.webp";
// import glass from "../../assets/ourproduct/glass.webp";
// import officepartition from "../../assets/ourproduct/officepartition.webp";
// import aluminumPhone from "../../assets/AluminiumProduct/AluminiumPhoneImages/aluminumPhone.jpg";
// import { motion } from "framer-motion";
// import { FadeLeft } from "../utility/animation";
// import Link from "next/link";
// import Image from "next/image";

// const ProductData = [
//   {
//     id: 1,
//     title: "Invisible Grill",
//     link: "/products/invisible-grill",
//     Description:
//       "Invisible grills provide rust-resistant balcony safety, protecting children while maintaining panoramic views and sleek aesthetics.",
//     img: invisiblegrill,
//     delay: 0.3,
//   },
//   {
//     id: 2,
//     title: "Glass Railing",
//     link: "/products/railings",
//     Description:
//       "Enhance your space with elegant glass railings that offer unobstructed views, safety, and modern design.",
//     img: glass,
//     delay: 0.6,
//   },
//   {
//     id: 3,
//     title: "Office Partition",
//     link: "/products/office-partitions",
//     Description:
//       "Transform your workspace with sleek glass and aluminum frame office partitions, offering modern design, enhanced privacy, and improved natural light flow.",
//     img: officepartition,
//     delay: 0.9,
//   },
//   {
//     id: 4,
//     title: "Aluminium Windows",
//     link: "/products/aluminium-windows",
//     Description:
//       "Enhance your space with sleek, energy-efficient aluminum windows, offering modern aesthetics and long-lasting durability.",
//     img: aluminumPhone,
//     delay: 1.2,
//   },
// ];

// const OurProducts = () => {
//   return (
//     <section className="max-w-[90rem] mx-auto pb-20 overflow-hidden">
//       {/* Title with Right-to-left animation */}
//       <motion.h1
//         initial={{ opacity: 0, x: 200 }} // Start from the right
//         animate={{ opacity: 1, x: 0 }} // Move to the original position
//         transition={{ duration: 1 }} // Instant transition without delay
//         className="text-4xl flex justify-center p-4 text-primary poppins-semibold drop-shadow-lg pb-10 uppercase md:text-2xl lg:text-3xl"
//       >
//         Our Products
//       </motion.h1>

//       {/* Product Cards */}
//       <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4">
//         {ProductData.map((product) => (
//           <Link href={product.link} key={product.id} aria-label={product.title}>
//             <motion.div
//               variants={FadeLeft(product.delay)} // Optional: use this for custom animations for each card
//               initial="hidden"
//               whileInView="visible"
//               whileHover={{ scale: 1.05 }} // Slight scale up when hovered
//               transition={{
//                 duration: 0.5, // Faster animation for card entry
//                 ease: "easeOut", // Easing for smooth animation
//               }}
//               className="bg-gray-100 rounded-3xl shadow-lg hover:shadow-xl transition duration-500 flex flex-col items-center overflow-hidden h-full w-full"
//             >
//               {/* Card Image */}
//               <div className="w-full h-60 flex items-center justify-center overflow-hidden">
//                 <Image
//                   src={product.img}
//                   alt={product.title}
//                   loading="lazy"
//                   className="object-cover h-full w-full"
//                 />
//               </div>

//               {/* Card Content */}
//               <div className="p-4 flex flex-col items-center">
//                 <h2 className="text-xl text-primary font-semibold drop-shadow-lg mb-2 text-center">
//                   {product.title}
//                 </h2>
//                 <p className="text-gray-600 poppins-extralight text-sm text-center">
//                   {product.Description}
//                 </p>
//               </div>
//             </motion.div>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default OurProducts;

// import React from "react";
// import invisiblegrill from "../../assets/ourproduct/invisiblegrill.webp";
// import glass from "../../assets/ourproduct/glass.webp";
// import officepartition from "../../assets/ourproduct/officepartition.webp";
// import aluminumPhone from "../../assets/AluminiumProduct/AluminiumPhoneImages/aluminumPhone.jpg";
// import { motion } from "framer-motion";
// import { FadeLeft } from "../utility/animation";
// import Link from "next/link";
// import Image from "next/image";

// const ProductData = [
//   {
//     id: 1,
//     title: "Invisible Grill",
//     link: "/products/invisible-grill",
//     Description:
//       "Invisible grills provide rust-resistant balcony safety, protecting children while maintaining panoramic views and sleek aesthetics.",
//     img: invisiblegrill,
//     delay: 0.1, // Shortened delay
//   },
//   {
//     id: 2,
//     title: "Glass Railing",
//     link: "/products/railings",
//     Description:
//       "Enhance your space with elegant glass railings that offer unobstructed views, safety, and modern design.",
//     img: glass,
//     delay: 0.3, // Shortened delay
//   },
//   {
//     id: 3,
//     title: "Office Partition",
//     link: "/products/office-partitions",
//     Description:
//       "Transform your workspace with sleek glass and aluminum frame office partitions, offering modern design, enhanced privacy, and improved natural light flow.",
//     img: officepartition,
//     delay: 0.5, // Shortened delay
//   },
//   {
//     id: 4,
//     title: "Aluminium Windows",
//     link: "/products/aluminium-windows",
//     Description:
//       "Enhance your space with sleek, energy-efficient aluminum windows, offering modern aesthetics and long-lasting durability.",
//     img: aluminumPhone,
//     delay: 0.7, // Shortened delay
//   },
// ];

// const OurProducts = () => {
//   return (
//     <section className="max-w-[90rem] mx-auto pb-20 overflow-hidden">
//       {/* Title with Right-to-left animation */}
//       <motion.h1
//         initial={{ opacity: 0, x: 200 }} // Start from the right
//         animate={{ opacity: 1, x: 0 }} // Move to the original position
//         transition={{ duration: 0.6 }} // Faster transition
//         className="text-4xl flex justify-center p-4 text-blue-900 poppins-semibold drop-shadow-lg pb-10 uppercase md:text-2xl lg:text-3xl"
//       >
//         Our Products
//       </motion.h1>

//       {/* Product Cards */}
//       <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4">
//         {ProductData.map((product) => (
//           <Link href={product.link} key={product.id} aria-label={product.title}>
//             <motion.div
//               variants={FadeLeft(product.delay)} // Apply the FadeLeft animation with the product delay
//               initial="hidden"
//               whileInView="visible"
//               whileHover={{ scale: 1.05 }} // Slight scale-up effect when hovered
//               className="bg-gray-100 rounded-3xl shadow-lg hover:shadow-xl transition duration-300 flex flex-col items-center overflow-hidden h-full w-full"
//             >
//               {/* Card Image */}
//               <div className="w-full h-60 flex items-center justify-center overflow-hidden">
//                 <Image
//                   src={product.img}
//                   alt={product.title}
//                   loading="lazy"
//                   className="object-cover h-full w-full"
//                 />
//               </div>

//               {/* Card Content */}
//               <div className="p-4 flex flex-col items-center">
//                 <h2 className="text-xl text-primary font-semibold drop-shadow-lg mb-2 text-center">
//                   {product.title}
//                 </h2>
//                 <p className="text-gray-600 poppins-extralight text-sm text-center">
//                   {product.Description}
//                 </p>
//               </div>
//             </motion.div>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default OurProducts;
"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Import your existing images
import invisiblegrill from "../../assets/ourproduct/invisiblegrill.webp";
import glass from "../../assets/ourproduct/glass.webp";
import officepartition from "../../assets/ourproduct/officepartition.webp";
import aluminumPhone from "../../assets/AluminiumProduct/AluminiumPhoneImages/aluminumPhone.jpg";

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

const OurProducts = () => {
  return (
    <section className="max-w-[90rem] mx-auto py-16 px-4">
      <div className="mb-12 flex justify-center">
        <p className="text-4xl text-blue-900 poppins-semibold">Our Offerings</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                    src={product.img}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-2xl poppins-semibold text-blue-950 mb-3">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 poppins-regular mb-4 line-clamp-3">
                      {product.description}
                    </p>
                  </div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center text-gray-600 poppins-regular text-sm"
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
