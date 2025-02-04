// "use client";
// import React, { useState, useRef, useEffect } from "react";
// import { motion } from "framer-motion";
// import img1 from "../../assets/AluminiumProduct/img1.jpg";
// import img2 from "../../assets/AluminiumProduct/img2.jpg";
// import img3 from "../../assets/AluminiumProduct/img3.jpg";
// import img4 from "../../assets/AluminiumProduct/img4.jpg";
// import aluminumPhone from "../../assets/AluminiumProduct/AluminiumPhoneImages/aluminumPhone.jpg";
// import AluminumPhoneDoor from "../../assets/AluminiumProduct/AluminiumPhoneImages/AluminumPhoneDoor.jpg";
// import AluminumPhoneWindow from "../../assets/AluminiumProduct/AluminiumPhoneImages/AluminumPhoneWindow.jpg";
// import { BsFillTelephoneFill } from "react-icons/bs";
// // import AluminumData from "../../Data/Aluminium/AluminiumData";
// import Image from "next/image";
// import Link from "next/link";
// import Aluminium from "./page";

// const AluminiumWindows = () => {
//   const [sliderItems, setSliderItems] = useState([
//     {
//       imgSrc: img1,
//       phoneImgSrc: aluminumPhone,
//       title: "ALUMINIUM",
//       type: "DOORS",
//       description:
//         "Enhance your home with sleek and durable aluminium doors, crafted for modern aesthetics, superior insulation, and exceptional security. Discover our top-quality aluminium doors, offering style, energy efficiency, and long-lasting performance for both residential and commercial properties.",
//     },
//     {
//       imgSrc: img2,
//       phoneImgSrc: AluminumPhoneWindow,
//       title: "ALUMINIUM",
//       type: "WINDOWS",
//       description:
//         "Upgrade your property with premium aluminium windows, offering unmatched durability, energy efficiency, and modern design. Our aluminium windows provide superior insulation, weather resistance, and aesthetic appeal for both residential and commercial applications.",
//     },
//     {
//       imgSrc: img3,
//       phoneImgSrc: AluminumPhoneDoor,
//       title: "ALUMINIUM",
//       type: "SLIDER",
//       description:
//         "Experience seamless functionality with our aluminium sliding doors, designed for sleek aesthetics and exceptional durability. Perfect for maximizing space and natural light, our aluminium sliders offer energy efficiency, smooth operation, and modern design for residential and commercial properties.",
//     },
//     {
//       imgSrc: img4,
//       phoneImgSrc: aluminumPhone,
//       title: "ALUMINIUM",
//       type: "PARTITION",
//       description:
//         "Elevate your interior with aluminium frame and glass transparent partitions, combining sleek modern design with durability. Ideal for creating open, light-filled spaces, these partitions offer excellent visibility, privacy, and flexibility for both commercial and residential applications.",
//     },
//   ]);

//   const [currentItemIndex, setCurrentItemIndex] = useState(0);
//   const aluminiumRef = useRef(null);

//   const moveSlider = (direction) => {
//     if (direction === "next") {
//       setCurrentItemIndex((currentItemIndex + 1) % sliderItems.length);
//     } else {
//       setCurrentItemIndex(
//         (currentItemIndex - 1 + sliderItems.length) % sliderItems.length
//       );
//     }
//   };

//   const handleThumbnailClick = (index) => {
//     setCurrentItemIndex(index);
//   };

//   useEffect(() => {
//     if (aluminiumRef.current) {
//       aluminiumRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [currentItemIndex]);

//   return (
//     <main className="relative">
//       <div
//         ref={aluminiumRef}
//         className="slider h-screen w-screen overflow-x-hidden relative"
//       >
//         <div className="list relative w-full h-full">
//           {sliderItems.map((item, index) => (
//             <motion.div
//               key={index}
//               className={`item absolute inset-0 transition-opacity duration-500 ease-in-out ${
//                 index === currentItemIndex ? "opacity-100" : "opacity-0"
//               }`}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: index === currentItemIndex ? 1 : 0 }}
//               transition={{ duration: 1 }}
//             >
//               <Image
//                 src={item.imgSrc}
//                 alt="heri Image"
//                 className="w-full h-full object-cover"
//               />
//               <div className="gradient-overlay absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
//               <div className="content absolute top-[14%]  text-[0.700rem] w-[100%] left-[60%] transform -translate-x-1/2 pr-[30%] box-border text-[#e4e4e4] text-shadow harmony-regular md:top-[20%] md:text-sm lg:top-[10%] lg:text-2xl xl:top-[14%] xl:text-base">
//                 <motion.div
//                   className="title text-[3em] font-bold leading-[1.3em]"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{
//                     opacity: index === currentItemIndex ? 1 : 0,
//                     y: index === currentItemIndex ? 0 : 20,
//                   }}
//                   transition={{ duration: 0.5 }}
//                 >
//                   {item.title}
//                 </motion.div>
//                 <motion.div
//                   className="type text-[3em] font-bold leading-[1.3em] text-[#14ff72cb]"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{
//                     opacity: index === currentItemIndex ? 1 : 0,
//                     y: index === currentItemIndex ? 0 : 20,
//                   }}
//                   transition={{ duration: 0.5 }}
//                 >
//                   {item.type}
//                 </motion.div>
//                 <motion.div
//                   className="description text-[1em]"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{
//                     opacity: index === currentItemIndex ? 1 : 0,
//                     y: index === currentItemIndex ? 0 : 20,
//                   }}
//                   transition={{ duration: 0.5 }}
//                 >
//                   {item.description}
//                 </motion.div>
//                 <div className="button grid grid-cols-1 mt-5">
//                   <div className="flex gap-4">
//                     {/* GET IN TOUCH Button */}
//                     <Link href="/contact">
//                       <button className="border-none text-sm bg-[#e4e4e4] text-black w-[8rem] h-[3rem] rounded-[2rem] harmony-regular cursor-pointer transition-all duration-400 md:font-semibold lg:h-[4.5rem] lg:w-[11rem] lg:rounded-[3rem] lg:text-base xl:h-[3.4rem] xl:w-[10rem] xl:text-base">
//                         GET IN TOUCH
//                       </button>
//                     </Link>

//                     {/* CALL NOW Button */}
//                     <Link href="tel:+919372593981">
//                       <button className="border-none text-sm bg-primary text-black w-[8rem] h-[3rem] rounded-[2rem] harmony-regular cursor-pointer transition-all duration-700 hover:bg-[#e4e4e4] md:font-semibold lg:h-[4.5rem] lg:w-[11rem] lg:rounded-[3rem] lg:text-base xl:h-[3.4rem] xl:w-[10rem] xl:text-base flex justify-center items-center gap-2">
//                         <BsFillTelephoneFill size={16} />
//                         CALL NOW
//                       </button>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//         <div className="thumbnail absolute bottom-2 xl4:bottom-12 left-1/1 gap-1 ml- transform -translate-x-2/7 flex z-10 md:-translate-x-[-10rem] md:gap-3 lg:gap-4 lg:left-[12%] lg:-translate-x-[-1rem] xl:gap-5 xl:translate-x-60 xl:left-[32%] xl4:mx-[15%] 2xl:-mb-8">
//           {sliderItems.map((item, index) => (
//             <div
//               key={index}
//               className="item w-[5rem] h-[10rem] ml-2 hover:scale-110 flex-shrink-0 relative cursor-pointer md:h-[14rem] md:w-[8.3rem] lg:h-[18rem] lg:w-[12rem] xl:h-[200px] xl:w-[7rem] xl:mb-8  xl4:h-[16rem] xl4:w-[10rem]"
//               onClick={() => handleThumbnailClick(index)}
//             >
//               <Image
//                 src={item.imgSrc}
//                 alt="hero image"
//                 loading="lazy"
//                 className="w-full h-full object-cover rounded-[20px] shadow-md"
//               />
//             </div>
//           ))}
//         </div>
//         <div className="nextPrevArrows absolute top-[65%] right-[65%] z-10 w-[300px] max-w-[30%] flex gap-2.5 items-center md:mr- md:top-[78%] md:right-[65%] md:gap-5 lg:mr-24 lg:top-[70%] lg:right-[45%] xl:top-[70%] xl:gap-5 xl:right-[36%] xl4:top-[70%] ">
//           <button
//             className="prev w-10 h-10 rounded-full bg-[#14ff72cb] border-none text-white font-mono font-bold transition-all duration-500 cursor-pointer hover:bg-white hover:text-black sm:h-[2rem] sm:w-[2rem] md:h-[3rem] md:w-[3rem] lg:h-[3.5rem] lg:w-[3.5rem] xl:h-[3rem] xl:w-[3rem] xl4:ml-[8rem]"
//             onClick={() => moveSlider("prev")}
//           >
//             {"<"}
//           </button>
//           <button
//             className="next w-10 h-10 rounded-full bg-[#14ff72cb] border-none text-white font-mono font-bold transition-all duration-500 cursor-pointer hover:bg-white hover:text-black sm:h-[2rem] sm:w-[2rem]  md:h-[3rem] md:w-[3rem] lg:h-[3.5rem] lg:w-[3.5rem] xl:h-[3rem] xl:w-[3rem]"
//             onClick={() => moveSlider("next")}
//           >
//             {">"}
//           </button>
//         </div>
//       </div>
//       <Aluminium />
//     </main>
//   );
// };

// export default AluminiumWindows;
"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState, useEffect } from "react";
import GlassRailingSection from "./page";
import heroImg from "../../assets/Railing/HeroImage/railing2.jpg";
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

export default function GlassHeroSection() {
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
              Aluminum
            </motion.p>
            <motion.p
              className="py-2 text-4xl lg:text-5xl roboto-light text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Glass Railing
            </motion.p>
            <motion.h1
              className="mb-8 text-sm lg:text-lg roboto-light text-white text-justify"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              Transform Your Home with Elegant{" "}
              <strong>Frameless Glass Railings</strong> and Premium Aluminium
              Glass Railing Bases, Perfect for{" "}
              <strong>Balconies, Staircases,</strong> and Outdoor Spaces. Enjoy
              Unmatched Durability, Style, and Safety with Customizable Matte or
              Glossy Finishes. Enhance Your Interiors and Exteriors with{" "}
              <strong>Modern Glass Railing</strong> Solutions for Maximum
              Protection and Aesthetic Appeal.
            </motion.h1>
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
              <Link href="tel:+919372593981">
                <motion.button
                  className="rounded-[5px] px-5 py-3 bg-gradient-to-br from-gray-50 to-gray-500 text-black roboto-bold  transition duration-700 border border-black hover:bg-white flex items-center gap-2"
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
            <motion.div
              className="relative h-[250px] w-[350px] md:h-[500px] md:w-[700px] lg:h-[550px] lg:w-[800px]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Image
                src={heroImg}
                alt="Aluminum Window Hero Image"
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
      <GlassRailingSection />
    </>
  );
}
