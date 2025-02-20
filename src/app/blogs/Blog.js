"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Form from "../components/Form/Form";
import blog1 from "../assets/Blogs/blog1.webp";
// Import images correctly
import parallesBlackLaptop from "../assets/HeroImg/home_illustriation2_d.webp";
import parallesBlackPhone from "../assets/HeroImg/parallexBlackPhoneView.webp";
const images = [
  {
    src: blog1,
    link: "/blog1",
    title: "Terrace Glass Railing",
    subTitle:
      "Discover premium terrace glass railing systems in Mumbai, Pune, Delhi, Varanasi, Kolkata, and across Maharashtra and beyond.  Our modern, stylish, and durable top-quality glass railings Frameless Glass Railings for Terraces and Balcony",
  },
];

const Blog = () => {
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
          <div className="absolute inset-0"></div>
        </div>
        {/* Main Content */}
        <motion.div className="relative z-10 container mx-auto px-4">
          <div className="text-center py-10">
            <h1 className="text-4xl din-bold text-white mb-12">
              Explore Our Blogs
            </h1>
          </div>

          {/* Grid of Images */}
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12 p-12">
            {images.map((image, index) => (
              <div key={index} className="flex flex-col">
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
                <h1 className="relative z-20 text-white mt-2 text-2xl">
                  {image.title}
                </h1>
                <p className="relative z-20 text-white mt-2 text-md font-semibold bg-black bg-opacity-70 py-1 rounded-md">
                  {image.subTitle}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Blog;
