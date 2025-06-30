"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

import queuemanager from "../../assets/QueueManager/HeroQueue-manager/queuemanager.png";
import queuemanager2 from "../../assets/QueueManager/HeroQueue-manager/queuemanager2.png";
import queuemanager3 from "../../assets/QueueManager/HeroQueue-manager/queuemanager3.png";
import queuemanager4 from "../../assets/QueueManager/HeroQueue-manager/queuemanager4.png";
import QueueData from "../../Data/QueueManager/QueueManager";
import parallesBlackLaptop from "../../assets/HeroImg/home_illustriation2_d.webp";
import parallesBlackPhone from "../../assets/HeroImg/parallexBlackPhoneView.webp";
import Link from "next/link";
import Image from "next/image";
import Form from "@/app/components/Form/Form";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
const QueueManager = () => {
  const [sliderItems] = useState([
    {
      imgSrc: queuemanager,
      title: "Champagne",
      type: "Stanchion ",
      description:
        "Elevate event management with a stylish champagne-colored queue manager stand. Ideal for red carpet events, weddings, and corporate functions, this premium stanchion offers both elegance and durability. Shop now for the best deals on luxury stanchion stands.",
    },
    {
      imgSrc: queuemanager2,
      title: "Stainless Steel",
      type: "Stanchion",
      description:
        "Sleek stainless steel queue manager for efficient crowd control. Ideal for events, venues, and public spaces.",
    },
    {
      imgSrc: queuemanager3,
      title: "Queue",
      type: "Manager",
      description:
        "Enhance crowd control with our sleek stainless steel queue manager stand. Ideal for events and public spaces, combining durability and style",
    },
    {
      imgSrc: queuemanager4,
      title: "Barrier",
      type: "Post",
      description:
        "Upgrade your crowd management with our modern stainless steel barrier post. Perfect for events and public areas, offering both strength and elegance.",
    },
  ]);
  const [isMobile, setIsMobile] = useState(true);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const aluminiumRef = useRef(null); // Create a ref for the Aluminium component
  const [isFormOpen, setIsFormOpen] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  const moveSlider = (direction) => {
    if (direction === "next") {
      setCurrentItemIndex((currentItemIndex + 1) % sliderItems.length);
    } else {
      setCurrentItemIndex(
        (currentItemIndex - 1 + sliderItems.length) % sliderItems.length
      );
    }
  };

  const handleThumbnailClick = (index) => {
    setCurrentItemIndex(index);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    // Set initial value
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (aluminiumRef.current) {
      aluminiumRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentItemIndex]);

  return (
    <main className="relative">
      <div className="slider h-screen w-screen overflow-hidden relative">
        {isMobile ? (
          <></>
        ) : (
          <motion.div
            className="pointer-events-none fixed left-0 top-0 z-50 h-8 w-8 rounded-full bg-gray-200 mix-blend-difference"
            style={{
              left: cursorXSpring,
              top: cursorYSpring,
            }}
          />
        )}
        <div className="list relative w-full h-full">
          {sliderItems.map((item, index) => (
            <motion.div
              key={index}
              className={`item absolute inset-0 transition-opacity duration-500 ease-in-out ${
                index === currentItemIndex ? "opacity-100" : "opacity-0"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentItemIndex ? 1 : 0 }}
              transition={{ duration: 1 }}
            >
              <Image
                src={isMobile ? parallesBlackPhone : parallesBlackLaptop}
                alt="Background"
                layout="fill"
                objectFit="cover"
                className="transition-opacity duration-300"
                priority
              />
              {/* <div className="gradient-overlay absolute inset-0"></div> */}
              <div className="relative container mx-auto flex min-h-screen flex-col gap-8 items-center justify-center px-4 md:flex-row z-10">
                <div className="mb-8 flex-1 md:mb-0 md:pr-8">
                  <AnimatePresence mode="wait">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.h2
                        className="pt-24 text-5xl lg:text-7xl din-bold text-white"
                        layout
                      >
                        {item.title}
                      </motion.h2>
                      <motion.p
                        className="mb-6 text-4xl lg:text-5xl roboto-light text-white"
                        layout
                      >
                        {item.subtitle}
                      </motion.p>
                      <motion.h1
                        className="mb-8 text-sm lg:text-lg roboto-light text-white text-justify"
                        layout
                      >
                        {item.description}
                      </motion.h1>
                      <div className="flex space-x-4">
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
                            <FaWhatsapp size={24} />
                            Chat Now
                          </motion.button>
                        </Link>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Button Section */}
                  <motion.div
                    className="button mt-4 md:mt-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Form
                      isOpen={isFormOpen}
                      onClose={() => setIsFormOpen(false)}
                    />
                  </motion.div>
                </div>
                <div className="relative flex-1 mb-4 lg:pt-14">
                  <motion.div
                    className="relative h-[250px] w-[350px] md:h-[550px] md:w-[800px]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={queuemanager}
                      alt="Queue Manager"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* <div className="thumbnail absolute bottom-2 xl4:bottom-12 left-1/1 gap-1 ml- transform -translate-x-2/7 flex z-10 md:-translate-x-[-10rem] md:gap-3 lg:gap-4 lg:left-[12%] lg:-translate-x-[-1rem] xl:gap-5 xl:translate-x-60 xl:left-[32%] xl4:mx-[15%] 2xl:-mb-8">
          {sliderItems.map((item, index) => (
            <div
              key={index}
              className="item w-[5rem] h-[10rem] ml-2 hover:scale-110 flex-shrink-0 relative cursor-pointer md:h-[14rem] md:w-[8.3rem] lg:h-[18rem] lg:w-[12rem] xl:h-[200px] xl:w-[7rem] xl:mb-8  xl4:h-[16rem] xl4:w-[10rem]"
              onClick={() => handleThumbnailClick(index)}
            >
              <Image
                src={item.imgSrc}
                alt=""
                className="w-full h-full object-cover rounded-[20px] shadow-md"
              />
            </div>
          ))}
        </div> */}
        {/* <div className="nextPrevArrows absolute top-[65%] right-[65%] z-10 w-[300px] max-w-[30%] flex gap-2.5 items-center md:mr- md:top-[78%] md:right-[65%] md:gap-5 lg:mr-24 lg:top-[70%] lg:right-[45%] xl:top-[70%] xl:gap-5 xl:right-[36%] xl4:top-[70%] ">
          <button
            className="prev w-10 h-10 rounded-full bg-[#14ff72cb] border-none text-white font-mono font-bold transition-all duration-500 cursor-pointer hover:bg-white hover:text-black sm:h-[2rem] sm:w-[2rem] md:h-[3rem] md:w-[3rem] lg:h-[3.5rem] lg:w-[3.5rem] xl:h-[3rem] xl:w-[3rem] xl4:ml-[8rem]"
            onClick={() => moveSlider("prev")}
          >
            {"<"}
          </button>
          <button
            className="next w-10 h-10 rounded-full bg-[#14ff72cb] border-none text-white font-mono font-bold transition-all duration-500 cursor-pointer hover:bg-white hover:text-black sm:h-[2rem] sm:w-[2rem]  md:h-[3rem] md:w-[3rem] lg:h-[3.5rem] lg:w-[3.5rem] xl:h-[3rem] xl:w-[3rem]"
            onClick={() => moveSlider("next")}
          >
            {">"}
          </button>
        </div> */}
      </div>
      {/* product start */}
      <div className="grid grid-cols-1 -ml-28  md:grid-cols-3 harmony-regular px-32 lg:justify-center md:-ml-32 md:gap-24 lg:-ml-20 lg:gap-16 xl:ml-12 xl:mr-12 xl:mt-10 xl:mb-10">
        {QueueData.map((item, index) => (
          <div
            key={index}
            className="relative group h-[23rem] w-[20rem] m-2 bg-white hover:border shadow hover:shadow-black rounded-[1rem] cursor-pointer overflow-hidden text-center flex flex-col items-center transition-transform duration-300 ease-in-out  md:mt-7 md:h-[30rem] md:w-[15rem] lg:h-[28rem] lg:w-[17rem]  xl:h[25rem] xl:w-[20rem]"
          >
            <div className="flex items-center justify-center h-full w-full overflow-hidden">
              <Image
                src={item.img}
                title={item.title}
                alt={item.alt}
                className="transition-transform duration-300 ease-in-out group-hover:scale-90 object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 flex items-center justify-center flex-col p-4 transition-opacity duration-300 ease-in-out md:py-4 xl:py-10 xl:text-sm">
              <div className="text-center">
                <p className="text-lg font-semibold mb-2 py-2">{item.title}</p>
                <p className="text-gray-600 text-sm">{item.desc}</p>
                <table className="mt-4 text-left w-full">
                  <tbody>
                    <tr>
                      <td className="font-semibold pr-2">Color:</td>
                      <td>{item.color}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold pr-2">Height:</td>
                      <td>{item.heights}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold pr-2">Base Diameter:</td>
                      <td>{item.Basediameter}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold pr-2">Frame Material:</td>
                      <td>{item.frameMaterial}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold pr-2">Weight:</td>
                      <td>{item.weight}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold pr-2">Usage Application:</td>
                      <td>{item.UsageApplication}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="absolute bottom-2 w-full px-4 transition-opacity duration-300 ease-in-out group-hover:opacity-0">
              <p className="text-lg font-medium">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default QueueManager;
