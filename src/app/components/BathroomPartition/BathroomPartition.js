"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState, useEffect } from "react";
// import GlassRailingSection from "./page";
import heroImg from "../../assets/BathroomPartition/bathroomPartition2.jpeg";
import Link from "next/link";
import parallesBlackLaptop from "../../assets/HeroImg/home_illustriation2_d.webp";
import parallesBlackPhone from "../../assets/HeroImg/parallexBlackPhoneView.webp";
import { BsFillTelephoneFill } from "react-icons/bs";
import Form from "../Form/Form";

// Custom hook to detect screen size
const useScreenSize = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Less than 768px is considered mobile
    };

    // Set initial value
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

export default function BathroomPartition() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const [mounted, setMounted] = useState(false);

  // Detect screen size using custom hook
  const isMobile = useScreenSize();

  useEffect(() => {
    setMounted(true);
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      <div className="relative min-h-screen overflow-hidden">
        {/* Background Image based on screen size */}
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src={isMobile ? parallesBlackPhone : parallesBlackLaptop}
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="transition-opacity duration-300"
            priority
          />
        </div>

        {/* Overlay to make text more visible */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

        <motion.div
          className="pointer-events-none fixed left-0 top-0 z-50 h-8 w-8 rounded-full bg-gray-200 mix-blend-difference"
          style={{
            left: cursorXSpring,
            top: cursorYSpring,
          }}
        />

        <div className="container mx-auto flex min-h-screen flex-col gap-8 items-center justify-center px-12 xl:flex-row z-10 relative">
          <div className="mb-8 flex-1 md:mb-0 md:pr-8">
            <motion.p
              className=" pt-24 text-5xl lg:text-7xl din-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Bathroom
            </motion.p>
            <motion.p
              className="py-2 text-4xl lg:text-5xl roboto-light text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Glass Partitions
            </motion.p>
            <motion.h1
              className="mb-8 text-sm lg:text-lg roboto-light text-white text-justify"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              Transform your bathroom with premium{" "}
              <strong>bathroom glass partitions</strong> and durable{" "}
              <strong>bathroom partition systems</strong>. Perfect for creating
              a modern, open feel while maximizing space. Our{" "}
              <strong>frameless glass partitions</strong> offer both privacy and
              elegance, with customizable matte or glossy finishes. Designed for
              long-lasting durability and easy maintenance, these{" "}
              <strong>glass bathroom partitions</strong> enhance your{" "}
              <strong>bathroom interior design</strong>, offering a sleek,
              contemporary look with unmatched safety. Whether for homes or
              public restrooms, our{" "}
              <strong>bathroom partition solutions</strong> optimize your space
              while adding a touch of sophistication and modern style.
            </motion.h1>

            {/* Transform your bathroom with stylish bathroom glass partitions and durable bathroom partition systems. Our elegant and functional glass bathroom partitions offer both privacy and sophistication, making them ideal for any bathroom interior design. Whether you need a shower partition or a custom bathroom partition, we provide high-quality solutions that are perfect for homes or public restrooms. With a focus on privacy bathroom partitions, our options ensure a seamless, modern look while enhancing your space. Explore the best bathroom partitions with customizable features, including bathroom partition panels that suit your style and budget. We offer affordable bathroom partitions designed to fit every need, ensuring easy bathroom partition installation for a hassle-free experience. Upgrade your bathroom with the best bathroom partitions for long-lasting, stylish results. */}
            <div className="flex space-x-4">
              {/* <Link href="/contact">
                <motion.button
                  className="rounded-[5px] bg-white px-4 py-3 text-black roboto-bold transition duration-700 border border-black hover:bg-white "
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get in Touch
                </motion.button>
              </Link> */}
              <Form isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
              <motion.button
                className="rounded-[5px] bg-white px-4 py-3 text-black roboto-bold transition duration-700 border border-black hover:bg-white "
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsFormOpen(true)}
              >
                Enquire Now
              </motion.button>
              <Link
                href="https://wa.me/919372593981"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  className="rounded-[5px] px-5 py-3 bg-black text-white roboto-bold transition duration-700 border border-white flex items-center gap-2
    hover:bg-white hover:text-black hover:border-black"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <BsFillTelephoneFill size={14} />
                  Chat Now
                </motion.button>
              </Link>
            </div>
          </div>
          <div className="relative flex-1 mb-4 lg:pt-14">
            <motion.div
              className="relative h-[250px] w-[350px] md:h-[500px] md:w-[700px] lg:h-[550px] lg:w-[800px]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Image
                src={heroImg}
                alt="Bathroom Partition Image"
                layout="fill"
                objectFit="cover"
                className=" rounded-xl"
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
          </div>
        </div>
      </div>
      {/* <GlassRailingSection /> */}
    </>
  );
}
