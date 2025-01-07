"use client";
import React, { useEffect, useRef, useState } from "react";
import HeroImageSlider from "./components/HeroImageSlider/HeroImageSlider";
import { motion } from "framer-motion";
import img1 from "./assets/AluminiumProduct/img1.jpg";
import bathroomPartition1 from "./assets/BathroomPartition/bathroomPartition1.jpeg";
import railing2 from "./assets/Railing/HeroImage/railing2.jpg";
import Invisiblebacony from "./assets/InvisibleGrill/Invisiblebacony.webp";
import Longoffice from "./assets/Officepartition/Longoffice.png";
import Link from "next/link";
import Image from "next/image";
import { BsFillTelephoneFill } from "react-icons/bs";

const Home = () => {
  const [sliderItems] = useState([
    {
      id: 1,
      imgSrc: img1,
      title: "ALUMINIUM",
      type: "WINDOWS",
      description:
        "Opt for aluminium windows to experience superior durability and contemporary elegance. These windows offer exceptional energy efficiency, minimal maintenance, and a sleek, modern design. Elevate your home or business with a choice that combines style, longevity, and performance.",
      link: "/products/aluminium-windows",
    },
    {
      id: 2,
      imgSrc: railing2,
      title: "RAILING",
      type: "GLASS RAILING",
      description:
        "Experience unparalleled clarity and style with Imperio's glass railing systems. Our expertly crafted railings blend safety and sophistication, enhancing any space with innovative, high-quality solutions. Whether for residential or commercial projects, trust Imperio to deliver excellence in every detail.",
      link: "/products/railings",
    },
    {
      id: 3,
      imgSrc: Invisiblebacony,
      title: "INVISIBLE GRILL",
      type: "STAINLESS STEEL",
      description:
        "Modern safety solution featuring thin, stainless steel wires that provide robust protection without obstructing views. Ideal for windows, balconies, and staircases, it offers a sleek and secure way to enhance safety while maintaining aesthetic appeal. Perfect for both residential and commercial properties.",
      link: "products/invisiblegrill",
    },
    {
      id: 4,
      imgSrc: Longoffice,
      title: "OFFICE PARTITION",
      type: "TRANSPARENT GLASS",
      description:
        "Modern safety solution featuring thin, stainless steel wires that provide robust protection without obstructing views. Ideal for windows, balconies, and staircases, it offers a sleek and secure way to enhance safety while maintaining aesthetic appeal. Perfect for both residential and commercial properties.",
      link: "/products/office-partitions",
    },
    {
      id: 5,
      imgSrc: bathroomPartition1,
      title: "BATHROOM",
      type: "GLASS PARTITIONS",
      description:
        "Transform your bathroom with a sleek glass partition that combines elegance with functionality. Our high-quality glass partitions provide a modern, spacious feel while ensuring privacy and easy maintenance. Enhance your bathroom's aesthetics with a solution that’s both stylish and durable.",
      link: "/products/bathroom-partitions",
    },
  ]);

  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const aluminiumRef = useRef(null); // Create a ref for the Aluminium component

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
    if (aluminiumRef.current) {
      aluminiumRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentItemIndex]);

  return (
    <main className="w-screen relative">
      <div
        ref={aluminiumRef}
        className="slider h-screen w-screen overflow-hidden relative"
      >
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
                src={item.imgSrc}
                alt="items something"
                className="w-full h-full object-cover"
              />
              <div className="gradient-overlay absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              <div className="content absolute top-[14%]  text-[0.700rem] w-[100%] left-[60%] transform -translate-x-1/2 pr-[30%] box-border text-[#e4e4e4] text-shadow poppins-regular md:top-[20%] md:text-sm lg:top-[10%] lg:text-2xl xl:top-[14%] xl:text-base">
                <motion.div
                  className="title text-[3em] font-bold leading-[1.3em]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: index === currentItemIndex ? 1 : 0,
                    y: index === currentItemIndex ? 0 : 20,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {item.title}
                </motion.div>
                <motion.div
                  className="type text-[3em] font-bold leading-[1.3em] text-[#14ff72cb]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: index === currentItemIndex ? 1 : 0,
                    y: index === currentItemIndex ? 0 : 20,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {item.type}
                </motion.div>
                <motion.div
                  className="description text-[1em]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: index === currentItemIndex ? 1 : 0,
                    y: index === currentItemIndex ? 0 : 20,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {item.description}
                </motion.div>
                <div className="button grid grid-cols-1 mt-5">
                  <div className="flex gap-4">
                    {/* GET IN TOUCH Button */}
                    <Link href="/contact">
                      <button className="border-none text-sm bg-[#e4e4e4] text-black w-[8rem] h-[3rem] rounded-[2rem] harmony-regular cursor-pointer transition-all duration-400 md:font-semibold lg:h-[4.5rem] lg:w-[11rem] lg:rounded-[3rem] lg:text-base xl:h-[3.4rem] xl:w-[10rem] xl:text-base">
                        GET IN TOUCH
                      </button>
                    </Link>

                    {/* CALL NOW Button */}
                    <Link href="tel:+919372593981">
                      <button className="border-none text-sm bg-primary text-black w-[8rem] h-[3rem] rounded-[2rem] harmony-regular cursor-pointer transition-all duration-700 hover:bg-[#e4e4e4] md:font-semibold lg:h-[4.5rem] lg:w-[11rem] lg:rounded-[3rem] lg:text-base xl:h-[3.4rem] xl:w-[10rem] xl:text-base flex justify-center items-center gap-2">
                        <BsFillTelephoneFill size={16} />
                        CALL NOW
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="thumbnail absolute bottom-2 xl4:bottom-12 left-1/1 gap-1 ml- transform -translate-x-2/7 flex z-10 md:-translate-x-[-2rem] md:gap-3 lg:gap-4 lg:-translate-x-[-1rem] xl:gap-5 xl:translate-x-60 xl:left-[32%] xl4:mx-[7%] 2xl:-mb-8">
          {sliderItems.map((item, index) => (
            <div
              key={index}
              className="item w-[3.7rem] h-[8rem] hover:scale-110 flex-shrink-0 relative cursor-pointer md:h-[10rem] md:w-[6.5rem] lg:h-[15rem] lg:w-[9.2rem] xl:h-[200px] xl:w-[7rem] xl:mb-8 2xl:h-[12rem] xl4:w-[8rem]"
              onClick={() => handleThumbnailClick(index)}
            >
              <Image
                src={item.imgSrc}
                alt="items something"
                loading="lazy"
                className="w-full h-full object-cover rounded-[20px] shadow-md"
              />
            </div>
          ))}
        </div>
        <div className="nextPrevArrows absolute top-[70%] right-[60%] z-10 w-[300px] max-w-[30%] flex gap-2.5 items-center md:mr- md:top-[72%] md:right-[65%] md:gap-5 lg:mr-24 lg:top-[70%] lg:right-[54%] xl:top-[70%] xl:gap-5 xl:right-[36%] xl4:top-[77%]">
          <button
            className="prev w-10 h-10 rounded-full bg-[#14ff72cb] border-none text-white font-mono font-bold transition-all duration-500 cursor-pointer hover:bg-white hover:text-black sm:h-[2rem] sm:w-[2rem] md:h-[3rem] md:w-[3rem] lg:h-[3.5rem] lg:w-[3.5rem] xl:h-[3rem] xl:w-[3rem]"
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
        </div>
      </div>
      <HeroImageSlider />
    </main>
  );
};

export default Home;
