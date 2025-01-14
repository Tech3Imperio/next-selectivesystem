"use client";
import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Image from "next/image";
import HeroImageSlider from "./components/HeroImageSlider/HeroImageSlider";
import Link from "next/link";
import { BsFillTelephoneFill } from "react-icons/bs";
// Import your product images
import invisiblegrill from "../app/assets/InvisibleGrill/Invisiblebacony.webp";
import glass from "../app/assets/Railing/HeroImage/railing1.png";
import officepartition from "../app/assets/Officepartition/Officecabins.png";
import aluminumPhone from "../app/assets/AluminiumProduct/heroImg.webp";

const ProductData = [
  {
    id: 1,
    title: "Aluminium",
    subtitle: "Windows",
    description:
      "Upgrade your property with premium aluminium windows, offering unmatched durability, energy efficiency, and modern design. Our aluminium windows provide superior insulation, weather resistance, and aesthetic appeal for both residential and commercial applications.",
    img: aluminumPhone,
  },
  {
    id: 2,
    title: "Aluminium Glass",
    subtitle: "Railing",
    description:
      "Transform your space with elegant glass railings that combine safety with sophistication. Our premium glass railings offer unobstructed views while providing robust protection, perfect for both indoor and outdoor applications.",
    img: glass,
  },
  {
    id: 3,
    title: "Invisible",
    subtitle: "Grill",
    description:
      "Experience the perfect blend of safety and aesthetics with our invisible grills. These innovative solutions provide maximum security while maintaining your space's visual appeal, ideal for homes and offices seeking modern protection.",
    img: invisiblegrill,
  },
  {
    id: 4,
    title: "Office Glass",
    subtitle: "Partition",
    description:
      "Create sophisticated workspaces with our premium office partitions. These versatile solutions offer the perfect balance of privacy and openness, enhancing your office environment while maintaining a professional atmosphere.",
    img: officepartition,
  },
];

export default function RotatingHero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ProductData.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const currentProduct = ProductData[currentIndex];

  return (
    <>
      <div className="relative min-h-screen overflow-hidden bg-blue-950 px-8">
        <motion.div
          className="pointer-events-none fixed left-0 top-0 z-50 h-8 w-8 rounded-full bg-yellow-200 mix-blend-difference"
          style={{
            left: cursorXSpring,
            top: cursorYSpring,
          }}
        />

        <div className="container mx-auto flex min-h-screen flex-col gap-8 items-center justify-center px-4 md:flex-row">
          <div className="mb-8 flex-1 md:mb-0 md:pr-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProduct.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <motion.h1
                  className="pt-24 text-5xl lg:text-7xl font-bold text-white"
                  layout
                >
                  {currentProduct.title}
                </motion.h1>
                <motion.h2
                  className="mb-6 text-4xl lg:text-5xl text-white"
                  layout
                >
                  {currentProduct.subtitle}
                </motion.h2>
                <motion.h3
                  className="mb-8 text-sm lg:text-lg font-normal text-white text-justify"
                  layout
                >
                  {currentProduct.description}
                </motion.h3>
              </motion.div>
            </AnimatePresence>

            <div className="flex space-x-4">
              <Link href="/contact">
                <motion.button
                  className="rounded-full bg-yellow-400 px-4 py-3 text-blue-900 font-medium transition duration-700 border border-blue-900 hover:bg-white hover:text-blue-900"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get in Touch
                </motion.button>
              </Link>
              <Link href="tel:+919372593981">
                <motion.button
                  className="rounded-full px-5 py-3 bg-white text-blue-900 font-medium transition duration-700 border border-blue-900 hover:bg-yellow-400 hover:text-blue-900 flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <BsFillTelephoneFill size={14} />
                  Call Now
                </motion.button>
              </Link>
            </div>
          </div>

          <div className="relative flex-1 mb-4 lg:pt-14">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProduct.id}
                className="relative h-[250px] w-[350px] md:h-[550px] md:w-[800px]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={currentProduct.img}
                  alt={`${currentProduct.title} ${currentProduct.subtitle}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
                <motion.div
                  className="absolute inset-0 rounded-lg"
                  style={{
                    background:
                      "linear-gradient(45deg, rgba(0,0,0,0.1) 0%, rgba(255,255,255,0.1) 100%)",
                  }}
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 5,
                  }}
                />
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
              {ProductData.map((_, index) => (
                <motion.button
                  key={index}
                  className={`h-2 w-2 rounded-full ${
                    index === currentIndex ? "bg-yellow-400" : "bg-white/50"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                  whileHover={{ scale: 1.2 }}
                  animate={{
                    scale: index === currentIndex ? 1.2 : 1,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <HeroImageSlider />
    </>
  );
}
