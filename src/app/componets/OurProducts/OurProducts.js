import React from "react";
import invisiblegrill from "../../assets/ourproduct/invisiblegrill.webp";
import glass from "../../assets/ourproduct/glass.webp";
import officepartition from "../../assets/ourproduct/officepartition.webp";
// import queuestand from "../../assets/ourproduct/queuestand.webp";
import aluminumPhone from "../../assets/AluminiumProduct/AluminiumPhoneImages/aluminumPhone.jpg";
import { motion } from "framer-motion";
import { FadeLeft } from "../utility/animation";
// import { Link } from "react-router-dom";
import Link from "next/link";
import Image from "next/image";

const ProductData = [
  {
    id: 1,
    title: "Invisible Grill",
    link: "/products/invisible-grill", // Updated link
    Description:
      "Invisible grills provide rust-resistant balcony safety, protecting children while maintaining panoramic views and sleek aesthetics.",
    img: invisiblegrill,
    delay: 0.3,
  },
  {
    id: 2,
    title: "Glass Railing",
    link: "/products/railings", // Updated link
    Description:
      "Enhance your space with elegant glass railings that offer unobstructed views, safety, and modern design.",
    img: glass,
    delay: 0.6,
  },
  {
    id: 3,
    title: "Office Partition",
    link: "/products/office-partitions", // Updated link
    Description:
      "Transform your workspace with sleek glass and aluminum frame office partitions, offering modern design, enhanced privacy, and improved natural light flow.",
    img: officepartition,
    delay: 0.9,
  },
  {
    id: 4,
    title: "Aluminium Windows",
    link: "/products/aluminium-windows", // Updated link
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
        className="text-3xl flex justify-center p-4 text-primary poppins-regular text-left pb-10 uppercase md:text-2xl md:font-semibold lg:text-3xl xl:mb-4"
      >
        Our Products
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-14 md:gap-14 lg:gap-16 lg:mt-7 px-6">
        {ProductData.map((product) => (
          <Link href={product.link} key={product.id}>
            <motion.div
              variants={FadeLeft(product.delay)}
              initial="hidden"
              whileInView={"visible"}
              whileHover={{ scale: 1.1 }}
              className="w-[21rem] bg-white cursor-pointer rounded-3xl px-[15px] py-2 shadow-[0_0_22px_0_rgba(0,0,0,0.15)] text-center gap-3 md:w-[21rem] lg:h-[22rem] lg:w-[26rem] xl:h-[18rem] xl:w-[18rem]"
            >
              <Image
                src={product.img}
                alt={product.title}
                className="h-[12rem] w-[18.5rem] -mt-8 m-1 py-2 px-1 scale-110 transform-translate-y-6 rounded-3xl sm:h-[12rem] sm:w-[19rem] md:h-[14rem] md:w-[18rem] md:m-2 md:-mt-8 lg:h-[15rem] lg:w-[22.5rem] lg:m-4 lg:-mt-10 lg:rounded-[2rem] xl:h-[10.2rem] xl:w-[16rem] xl:-ml-0 xl:m-2 xl:-mt-7"
              />
              <div>
                <h1 className="text-lg mb-2 md:text-base md:mb-2 poppins-regular lg:text-lg lg:mb-2 xl:text-xl xl:mb-2">
                  {product.title}
                </h1>
                <h1 className="text-base text-center text-[#6d6e70] poppins-extralight md:text-sm lg:text-sm xl:text-xs">
                  {product.Description}
                </h1>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default OurProducts;