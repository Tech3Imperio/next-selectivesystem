/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";
import { FadeRight } from "../utility/animation";
import circle from "../../assets/SliderImages/circle.jpg";
import Link from "next/link";
import Image from "next/image";
import Banner from "../Banner/Banner";
import OurProducts from "../OurProducts/OurProducts";

const HeroImageSlider = () => {
  return (
    <main className="relative">
      <section className="w-screen min-h-screen p-4 flex justify-center items-center">
        <div className="container bg-gray-800 rounded-[3rem] grid gris-cols-1 md:grid-cols-2 relative overflow-hidden md:w-[46rem] md:h-[28rem] md:rounded-[5rem] lg:w-[60rem] lg:h-[31rem] lg:rounded-[5rem] xl:w-[91rem] xl:h-[32rem] xl:rounded-[6rem]">
          {/* product info */}
          <div className="flex flex-col justify-center py-14 mb-4 md:py-0 relative z-10">
            <div className=" text-center md:text-left space-y-2 lg:max-w-[25rem]">
              <motion.h1
                variants={FadeRight(0.6)}
                initial="hidden"
                animate="visible"
                className="text-4xl text-primary poppins-regular  leading-relaxed xl:leading-loose md:ml-12 md:text-3xl md:-mb-[25px] lg:mb-2 lg:text-3xl lg:ml-14 lg:mt-12 xl:text-5xl xl:ml-36 xl:-mb-8"
              >
                Aluminum
              </motion.h1>
              <br />
              <motion.h1
                variants={FadeRight(0.9)}
                initial="hidden"
                animate="visible"
                className="text-2xl px-4 text-gray-300  poppins-regular md:ml-8 lg:ml-8 xl:-px-14 xl:ml-[8rem] xl:w-[29rem] xl:-px-14"
              >
                Modern Glass Windows{" "}
              </motion.h1>
              {/* <motion.h3
                variants={FadeRight(1.0)}
                initial="hidden"
                animate="visible"
                className="text-xl text-secondary tracking-wide px-8 md:ml-1 lg:ml-4 lg:text-2xl xl:ml-28 xl:-px-14"
              >
                Aluminum frame and Laminated Glass
              </motion.h3> */}
              <motion.p
                variants={FadeRight(1.3)}
                initial="hidden"
                animate="visible"
                className="text-gray-300 flex text-justify m-[1.4rem] text-sm poppins-extralight md:text-[0.860rem] md:w-[28rem] lg:ml-11 lg:w-[35rem] lg:text-sm xl:ml-36 xl:text-sm xl:w-[38rem] xl:py-2"
              >
                Upgrade your home or office with modern glass windows featuring
                durable aluminum frames. Our glass door windows are designed for
                energy efficiency, providing excellent insulation while allowing
                natural light to flood your space. The sleek aluminum frames
                offer a contemporary look, enhancing both the interior and
                exterior aesthetics. Perfect for any architectural style, these
                windows are low-maintenance, resistant to corrosion, and built
                to last. Whether you're looking to improve your view or boost
                property value, our glass door windows with aluminum frames
                deliver on performance and style. Ideal for residential
                commercial applications, they combine the best of form and
                function.
              </motion.p>

              {/* button section */}
              <Link href="/contact">
                <motion.div
                  variants={FadeRight(1.5)}
                  initial="hidden"
                  animate="visible"
                  className="flex justify-center poppins-regular md:justify-centre border-none ml-10 text-[0.700rem] bg-[#14ff72cb] text-[#fff] w-[6rem] h-[2.5rem] mt-4 px-1 rounded-[2rem] cursor-pointer md:h-[3rem] md:w-[8rem] md:ml-12 md:mt-4 md:font-semibold lg:h-[3rem] lg:w-[8rem] lg:px-2 lg:rounded-[3rem] lg:ml-11 lg:mt-4 lg:text-sm xl:h-[3rem] xl:w-[8.4rem] xl:text-sm xl:ml-36 xl:py-4  hover:bg-[#e4e4e4] hover:text-[#000]"
                >
                  <button>GET IN TOUCH</button>
                </motion.div>
              </Link>
            </div>
          </div>
          {/* image section */}
          <motion.div
            initial={{ opacity: 0, x: 200, rotate: 75 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 3, delay: 1.2 }}
            className="flex justify-center items-center"
          >
            <Image
              src={circle}
              alt="circle-image"
              className=" h-[18rem] w-[18rem] pb-1 -mt-14 rounded-full md:mt-2 md:ml-28 md:h-[14rem] md:w-[14rem] lg:h-[20rem] lg:w-[20rem] xl:h-[23rem] xl:w-[23rem] "
            />
          </motion.div>
        </div>
      </section>
      {/* Our product */}
      <OurProducts />

      {/* banner */}
      <Banner />
    </main>
  );
};

export default HeroImageSlider;
