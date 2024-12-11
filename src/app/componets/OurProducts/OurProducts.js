import React from "react";
import invisiblegrill from "../../assets/ourproduct/invisiblegrill.webp";
import glass from "../../assets/ourproduct/glass.webp";
import officepartition from "../../assets/ourproduct/officepartition.webp";
import aluminumPhone from "../../assets/AluminiumProduct/AluminiumPhoneImages/aluminumPhone.jpg";
import { motion } from "framer-motion";
import { FadeLeft } from "../utility/animation";
import Link from "next/link";
import Image from "next/image";

const ProductData = [
  {
    id: 1,
    title: "Invisible Grill",
    link: "/products/invisible-grill",
    Description:
      "Invisible grills provide rust-resistant balcony safety, protecting children while maintaining panoramic views and sleek aesthetics.",
    img: invisiblegrill,
    delay: 0.3,
  },
  {
    id: 2,
    title: "Glass Railing",
    link: "/products/railings",
    Description:
      "Enhance your space with elegant glass railings that offer unobstructed views, safety, and modern design.",
    img: glass,
    delay: 0.6,
  },
  {
    id: 3,
    title: "Office Partition",
    link: "/products/office-partitions",
    Description:
      "Transform your workspace with sleek glass and aluminum frame office partitions, offering modern design, enhanced privacy, and improved natural light flow.",
    img: officepartition,
    delay: 0.9,
  },
  {
    id: 4,
    title: "Aluminium Windows",
    link: "/products/aluminium-windows",
    Description:
      "Enhance your space with sleek, energy-efficient aluminum windows, offering modern aesthetics and long-lasting durability.",
    img: aluminumPhone,
    delay: 1.2,
  },
];

const OurProducts = () => {
  return (
    <section className="max-w-[90rem] mx-auto pb-20 overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-4xl flex justify-center p-4 text-primary poppins-semibold drop-shadow-lg pb-10 uppercase md:text-2xl lg:text-3xl"
      >
        Our Products
      </motion.h1>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4">
        {ProductData.map((product) => (
          <Link href={product.link} key={product.id} aria-label={product.title}>
            <motion.div
              variants={FadeLeft(product.delay)}
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.05 }}
              className="bg-gray-100 rounded-3xl shadow-lg hover:shadow-xl transition duration-700 flex flex-col items-center overflow-hidden h-full w-full"
            >
              <div className="w-full h-60 flex items-center justify-center overflow-hidden">
                <Image
                  src={product.img}
                  alt={product.title}
                  loading="lazy"
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="p-4 flex flex-col items-center">
                <h2 className="text-xl text-primary font-semibold drop-shadow-lg mb-2 text-center">
                  {product.title}
                </h2>
                <p className="text-gray-600 poppins-extralight text-sm text-center">
                  {product.Description}
                </p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default OurProducts;
