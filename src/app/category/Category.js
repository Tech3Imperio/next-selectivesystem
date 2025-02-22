"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Form from "../components/Form/Form";

// Import images correctly
import image1 from "../assets/AluminiumProduct/AluminiumWindows/windows3.webp";
import image2 from "../assets/DoorSeals/Doorseals1.png";
import image3 from "../assets/Railing/RailingProducts/FramedGlassImg.webp";
import image4 from "../assets/Officepartition/Product/OfficeHighaluminumfrme.png";
import image5 from "../assets/BathroomPartition/bathroomPartition1.jpeg";
import parallesBlackLaptop from "../assets/HeroImg/home_illustriation2_d.webp";
import parallesBlackPhone from "../assets/HeroImg/parallexBlackPhoneView.webp";
const images = [
  {
    src: image1,
    link: "/products/aluminium-windows",
    title: "Aluminium Windows",
  },
  // { src: image2, link: "/products/door-seals", title: "Door Seals" },
  { src: image3, link: "/products/glass-railings", title: "Glass Railings" },
  // { src: image4, link: "/products/office-partitions", title: "Office Partitions" },
  {
    src: image5,
    link: "/products/bathroom-partitions",
    title: "Bathroom Partitions",
  },
];

const Category = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 1024);
      };

      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursorX, cursorY]);

  const router = useRouter();
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <main className="relative">
      <div className="py-16 md:py-24 lg:py-32 overflow-hidden px-4 relative">
        {!isMobile && (
          <motion.div
            className="pointer-events-none fixed left-0 top-0 z-50 h-8 w-8 rounded-full bg-gray-200 mix-blend-difference"
            style={{
              left: cursorXSpring,
              top: cursorYSpring,
            }}
          />
        )}

        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={isMobile ? parallesBlackPhone : parallesBlackLaptop}
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="transition-opacity duration-300"
            priority
          />
          {/* Overlay to increase contrast */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Main Content */}
        <motion.div className="relative z-10 container mx-auto px-4">
          <div className="text-center py-10">
            <h1 className="text-4xl din-bold text-white mb-12">Our Products</h1>
          </div>

          {/* Grid of Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {images.map((image, index) => (
              <div key={index} className="flex flex-col items-center">
                <motion.div
                  className="relative w-full h-[250px] md:h-[300px] lg:h-[350px] cursor-pointer rounded-lg overflow-hidden shadow-lg transition-transform duration-700 hover:scale-105"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => router.push(image.link)}
                >
                  <Image
                    src={image.src}
                    alt={`Image ${index + 1}`}
                    width={300}
                    height={300}
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                </motion.div>

                {/* Title Below Image with Background for Readability */}
                <p className="relative z-20 text-white text-center mt-2 text-lg font-semibold bg-black bg-opacity-70 px-2 py-1 rounded-md">
                  {image.title}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Category;
