"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import terracefloor from "../assets/About/terracefloor.webp";
import primage from "../assets/About/AboutpageImage/primage.png";
import rightsideimage from "../assets/About/AboutpageImage/rightsideimage.png";
import { motion } from "framer-motion";

import Image from "next/image";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const Alldata = [
    {
      title: "Glass Railings",
      description:
        "Selective Systems’ premium glass railings offer unobstructed views and contemporary elegance for your home or office. Perfect for balconies, staircases, and outdoor spaces, our modern glass railings combine durability, safety, and sophisticated design. Made with high-quality aluminium frames, these aluminium balcony glass railings enhance the aesthetic appeal of any property while ensuring long-lasting performance and strength. Ideal for those seeking stylish and secure glass railing systems, our products elevate your space with seamless, modern solutions that stand the test of time. Whether you're in Mumbai, Pune, or Bangalore, Selective Systems offers the best modern glass railing solutions.",
    },
    {
      title: "Aluminum Windows",
      description:
        "Selective Systems offers the best aluminium windows designed for modern homes, offices, and commercial spaces. Our aluminium window accessories are crafted for durability, style, and functionality, ensuring optimal performance in any environment. Whether you're in Mumbai, Pune, Bangalore, or Chennai, our products deliver exceptional energy efficiency, sleek design, and long-lasting strength. From aluminium window locks to sliding window hardware, each accessory enhances the usability and security of your windows. With customizable options, our aluminium windows and accessories are the ideal choice for properties looking to combine style, performance, and reliability. Enhance your living space with the best aluminium windows near me.",
    },
    {
      title: "Invisible Grill",
      description:
        "Experience unparalleled security with Selective Systems' invisible grills, offering a perfect balance of safety and sleek design. These invisible grills are the ideal solution for high-rise apartments, balconies, and offices, providing strong protection while maintaining an open, unobstructed view. Crafted from high-quality materials, they blend seamlessly with your space, making them virtually undetectable yet incredibly effective. Enjoy peace of mind knowing that your property is safe, while enhancing the aesthetics with modern invisible grilles that don’t compromise on style. Trust Selective Systems for durable and discreet security solutions for your home or office. Enhance your property’s security with the best invisible grills in Mumbai.",
    },
  ];

  return (
    <main className="relative">
      {/* Rest of your content */}
      <div className="py-16 md:py-24 lg:py-32 overflow-hidden">
        <motion.div
          className="container mx-auto px-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-5xl poppins-semibold text-center  drop-shadow-lg mb-16 pt-4 text-primary"
            variants={fadeIn}
          >
            About Selective Systems
          </motion.h1>

          <div className="flex flex-col lg:flex-row gap-16">
            <motion.div className="lg:w-1/2" variants={fadeIn}>
              <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src={terracefloor}
                  alt="glass railing balcony Image"
                  layout="fill"
                  objectFit="cover"
                  loading="lazy"
                  className="transition-transform duration-700 hover:scale-105"
                />
              </div>
            </motion.div>

            <motion.div className="lg:w-1/2 space-y-8" variants={fadeIn}>
              <p className="text-base poppins-extralight text-justify pr-2 text-gray-600 leading-relaxed">
                Selective Systems is a leading manufacturer and supplier of
                premium high-durable glass railings, balcony windows, and
                invisible grilles. Our products are designed for maximum safety,
                easy installation, and low maintenance, all while offering a
                sleek and stylish finish. We use top-quality raw materials to
                ensure long-lasting performance and a modern aesthetic that
                complements any architectural design.
              </p>
              <p className="text-base poppins-extralight text-justify pr-2 text-gray-600 leading-relaxed">
                Selective Systems is a premier provider based in Mumbai,
                specializing in high-quality glass railings, aluminum windows,
                queue managers, bathroom partitions, door seals, and office
                partitions crafted from high-durable glass. We deliver
                innovative architectural solutions that enhance safety and
                aesthetics across residential, commercial, and industrial
                spaces. Our glass railings offer a modern, sleek look with
                unmatched safety for balconies, staircases, and terraces, while
                our aluminum windows combine durability, style, and energy
                efficiency. Our queue managers streamline customer flow in
                public spaces, and our bathroom partitions blend functionality
                with a clean, modern design. Door seals improve insulation and
                reduce noise, and our office partitions create flexible,
                customizable work environments. Committed to excellence,
                Selective Systems uses top-grade materials and cutting-edge
                technology to ensure each product meets the highest standards of
                quality and durability. Trust us for all your architectural and
                design needs, and discover the perfect balance of innovation and
                quality.
              </p>
              <div className="pt-8">
                {/* <Link
                  href="/products"
                  className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                >
                  Explore Our Products
                </Link> */}
              </div>
            </motion.div>
          </div>

          <motion.div className="xl:mt-24 space-y-16" variants={fadeIn}>
            <h2 className="text-4xl md:text-4xl poppins-semibold drop-shadow-lg text-center text-primary mb-12">
              Our Expertise
            </h2>
            <div className="grid md:grid-cols-3 gap-12 xl:px-14">
              {Alldata.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <h3 className="text-2xl poppins-semibold mb-4 text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-justify poppins-extralight">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className=" -mt-[4rem] relative flex items-center bg-gray-800 h-[33rem]">
        <div className="absolute top-0 left-0 bottom-0 w-1/3 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <Image
              src={primage}
              alt="Flex Image"
              loading="lazy"
              className="object-cover flex md:h-[17rem] lg:h-[22rem] xl:h-[32rem] xl4:h-[35rem]"
            />
          </motion.div>
        </div>
        <div className="container mx-auto flex flex-col items-center text-center z-10 ">
          <div className=" mb-8">
            <h6 className="text-sm w-[13rem] text-secondary poppins-regular md:text-sm md:w-auto lg:text-base lg:w-full xl:text-xl xl:w-auto">
              If you have any inquiries, please feel free to reach out.
            </h6>
            <h1 className="text-base py-2 text-primary poppins-regular md:text-2xl lg:text-2xl xl:text-4xl">
              9372593981
            </h1>
          </div>
          <div className="flex gap-5 md:gap-10 lg:gap-12 xl:gap-14 poppins-regular">
            <a
              href="tel: 9372593981"
              className="border-white  border p-2 rounded-[2rem] hover:scale-110  transition-colors text-primary duration-700 hover:bg-[#14ff72cb] hover:text-white "
            >
              MAKE A CALL
            </a>
            <Link
              href="/contact"
              className="border border-white p-2 rounded-[2rem] text-primary hover:scale-110 transition-colors duration-700 hover:bg-[#14ff72cb] hover:text-white"
            >
              CONTACT US
            </Link>
          </div>
        </div>
        <div className="absolute top-0 right-0 bottom-0 w-1/3 flex items-center justify-center overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <Image
              src={rightsideimage}
              alt="Human Image"
              className=" h-10 object-cover md:h-[17rem] lg:h-[22rem] xl:h-[32rem] xl4:h-[34rem]"
            />
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default About;
