// /* eslint-disable react/no-unescaped-entities */
// import React from "react";
// import { motion } from "framer-motion";
// import { FadeRight } from "../utility/animation";
// import circle from "../../assets/SliderImages/circle.jpg";
// import Link from "next/link";
// import Image from "next/image";
// import Banner from "../Banner/Banner";
// import OurProducts from "../OurProducts/OurProducts";

// const HeroImageSlider = () => {
//   return (
//     <main className="relative">
//       <section className="w-screen xl:min-h-screen p-4 flex justify-center items-center">
//         <div className="container bg-blue-950 rounded-[3rem] grid gris-cols-1 md:grid-cols-2 relative overflow-hidden md:w-[46rem] md:h-[28rem] md:rounded-[5rem] lg:w-[60rem] lg:h-[31rem] lg:rounded-[5rem] xl:w-[91rem] xl:h-[32rem] xl:rounded-[6rem]">
//           {/* product info */}
//           <div className="flex flex-col justify-center py-14 mb-4 md:py-0 relative z-10">
//             <div className=" text-center md:text-left space-y-2">
//               <motion.h2
//                 variants={FadeRight(0.6)}
//                 initial="hidden"
//                 animate="visible"
//                 className="text-4xl text-yellow-400 poppins-regular leading-relaxed  px-16 lg:text-5xl "
//               >
//                 Aluminum
//               </motion.h2>

//               <motion.h3
//                 variants={FadeRight(0.9)}
//                 initial="hidden"
//                 animate="visible"
//                 className="text-2xl px-4 text-gray-300 poppins-regular lg:px-14"
//               >
//                 Modern Glass Windows{" "}
//               </motion.h3>

//               <motion.p
//                 variants={FadeRight(1.3)}
//                 initial="hidden"
//                 animate="visible"
//                 className=" text-white flex justify-center text-justify px-14"
//               >
//                 Upgrade your home or office with modern glass windows featuring
//                 durable aluminum frames. Our glass door windows are designed for
//                 energy efficiency, providing excellent insulation while allowing
//                 natural light to flood your space. The sleek aluminum frames
//                 offer a contemporary look, enhancing both the interior and
//                 exterior aesthetics. Perfect for any architectural style, these
//                 windows are low-maintenance, resistant to corrosion, and built
//                 to last. Whether you're looking to improve your view or boost
//                 property value, our glass door windows with aluminum frames
//                 deliver on performance and style. Ideal for residential
//                 commercial applications, they combine the best of form and
//                 function.
//               </motion.p>

//               <div className="flex space-x-4 px-14 py-2">
//                 <motion.button
//                   className="rounded-full bg-yellow-400 px-4 py-3 text-blue-900 font-medium transition duration-700 border border-blue-900 hover:bg-white hover:text-blue-900"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   Get in Touch
//                 </motion.button>
//                 <motion.button
//                   className="rounded-full px-7 py-3 bg-white text-blue-900 font-medium transition duration-700 border border-blue-900 hover:bg-yellow-400 hover:text-blue-900"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   Call Now
//                 </motion.button>
//               </div>
//             </div>
//           </div>
//           {/* image section */}
//           <motion.div
//             initial={{ opacity: 0, x: 200, rotate: 75 }}
//             animate={{ opacity: 1, x: 0, rotate: 0 }}
//             transition={{ duration: 3, delay: 1.2 }}
//             className="flex justify-center items-center"
//           >
//             <Image
//               src={circle}
//               alt="circle-image"
//               className=" h-[18rem] w-[18rem] pb-1 -mt-14 rounded-full md:mt-2 md:ml-28 md:h-[14rem] md:w-[14rem] lg:h-[20rem] lg:w-[20rem] xl:h-[23rem] xl:w-[23rem] "
//             />
//           </motion.div>
//         </div>
//       </section>
// {/* Our product */}
// <OurProducts />

// {/* banner */}
// <Banner />
//     </main>
//   );
// };

// export default HeroImageSlider;
"use client";

import { useState } from "react";
import Image from "next/image";
import { BsFillTelephoneFill } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
// import circle from "../../assets/SliderImages/circle.jpg";
import aluminiumWindow from "../../assets/Tostem/AluminiumWindow.webp";
// import OurProducts from "../OurProducts/OurProducts";
import Banner from "../Banner/Banner";
import Link from "next/link";
import Form from "../Form/Form";
import { FaWhatsapp } from "react-icons/fa";
export default function AluminumWindows() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const containerVariants = {
    collapsed: { height: "auto" },
    expanded: { height: "auto" },
  };

  const contentVariants = {
    collapsed: { opacity: 0, height: 0 },
    expanded: { opacity: 1, height: "auto" },
  };

  const imageVariants = {
    hover: { scale: 1.05, rotate: 5 },
  };

  return (
    <>
      <section className="w-full min-h-[95%] p-4 flex justify-center items-center md:mt-14 lg:pl-24">
        <motion.div
          className="container bg-white rounded-[3rem] grid grid-cols-1 md:grid-cols-2 relative overflow-hidden md:w-[46rem] md:h-auto md:rounded-[5rem] lg:w-[60rem] lg:rounded-[5rem] xl:w-[91rem] xl:rounded-[2rem] px-1 "
          variants={containerVariants}
          initial="collapsed"
          animate={isExpanded ? "expanded" : "collapsed"}
          transition={{ duration: 0.5 }}
        >
          {/* product info */}
          <div className="flex flex-col justify-center py-14 mb-4 md:py-8 relative z-10">
            <div className="text-center md:text-left space-y-2 md:space-y-4 ">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl din-bold leading-relaxed lg:text-6xl px-14"
              >
                Aluminum
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl text-black roboto-light lg:text-3xl px-5 md:px-14 "
              >
                Modern Glass Windows
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className=" text-justify roboto-light text-base md:text-base lg:text-lg px-4 md:px-14 "
              >
                Upgrade your home or office with modern glass windows featuring
                durable aluminum frames. Our glass door windows are designed for
                energy efficiency, providing excellent insulation while allowing
                natural light to flood your space.
              </motion.p>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    variants={contentVariants}
                    initial="collapsed"
                    animate="expanded"
                    exit="collapsed"
                    transition={{ duration: 0.5 }}
                    className="text-black text-justify roboto-light text-base md:text-base lg:text-lg px-4 md:px-14"
                  >
                    <p>
                      The sleek aluminum frames offer a contemporary look,
                      enhancing both the interior and exterior aesthetics.
                      Perfect for any architectural style, these windows are
                      low-maintenance, resistant to corrosion, and built to
                      last. Whether you're looking to improve your view or boost
                      property value, our glass door windows with aluminum
                      frames deliver on performance and style. Ideal for
                      residential and commercial applications, they combine the
                      best of form and function.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
              <motion.button
                className="text-black underline px-14"
                onClick={() => setIsExpanded(!isExpanded)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isExpanded ? "Read Less" : "Read More"}
              </motion.button>

              <div className="flex flex-rows gap-2 md:gap-0 items-center sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 py-4 px-14">
                {/* <Link href="/contact">
                  <motion.button
                    className="rounded-[5px] bg-white mt-[16px] md:mt-0 w-[8rem] py-3 text-sm md:text-base md:px-4 md:py-3 text-black roboto-bold transition duration-700 border border-black hover:bg-white hover:text-black"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get in Touch
                  </motion.button>
                </Link> */}
                <Form
                  isOpen={isFormOpen}
                  onClose={() => setIsFormOpen(false)}
                />
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
            </div>
          </div>

          {/* image section */}
          <motion.div
            className="flex justify-center items-center p-8"
            initial={{ opacity: 0, x: 200, rotate: 75 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            {/* <motion.div
              // whileHover="hover"
              variants={imageVariants}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            > */}
            <Image
              src={aluminiumWindow}
              alt="Modern aluminum window"
              width={500}
              height={400}
              className="shadow-lg"
            />
            {/* </motion.div> */}
          </motion.div>
        </motion.div>
      </section>
      {/* Our product */}

      {/* banner */}
      <Banner />
    </>
  );
}
