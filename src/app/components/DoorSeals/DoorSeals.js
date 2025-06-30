"use client";
import React, { useEffect, useRef, useState } from "react";

import DoorSealProduct from "./DoorsealProduct";

const DoorSeals = () => {
  // const videoRef = useRef(null);

  // // Initially set to false, will update based on screen size
  // const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  // const handleResize = () => {
  //   setIsMobile(window.innerWidth <= 1024); // Set mobile flag based on screen width <= 1024px
  // };

  // useEffect(() => {
  //   // Attach the resize listener
  //   window.addEventListener("resize", handleResize);

  //   // Initial check
  //   handleResize();

  //   // Cleanup event listener on component unmount
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  // useEffect(() => {
  //   const video = videoRef.current;

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           video.play().catch((error) => {
  //             console.error("Video play failed:", error);
  //           });
  //         } else {
  //           video.pause();
  //         }
  //       });
  //     },
  //     { threshold: 0.5 }
  //   );

  //   observer.observe(video);

  //   return () => {
  //     if (video) {
  //       observer.unobserve(video);
  //     }
  //   };
  // }, []);
  const videoRef = useRef(null);

  // Initially set to false, will update based on screen size
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false); // State to check if the component is mounted on the client-side

  // Update the isMobile state based on window width (runs after component mounts)
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 1024); // Set mobile flag based on screen width <= 1024px
  };

  // Only run on client-side
  useEffect(() => {
    setIsClient(true); // Set to true when the component mounts
    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Check if the component is mounted and videoRef is available
    if (isClient && videoRef.current) {
      const video = videoRef.current;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              video.play().catch((error) => {
                console.error("Video play failed:", error);
              });
            } else {
              video.pause();
            }
          });
        },
        { threshold: 0.5 }
      );

      observer.observe(video);

      return () => {
        if (video) {
          observer.unobserve(video);
        }
      };
    }
  }, [isClient]);

  if (!isClient) {
    return null; // Do not render anything on the server side
  }

  return (
    <main className="relative">
      <div className="bg-gray-100 flex items-center justify-center h-screen">
        <video
          ref={videoRef}
          className="w-full h-full object-cover sm:min-h-screen sm:min-w-min md:h-[100%] md:w-[65rem] lg:h-[100%] lg:w-[100%] xl:h-screen xl:w-screen"
          autoPlay
          loop
          playsInline
          muted // Always mute the video
        >
          <source
            src={
              isMobile
                ? "/videos/SelectingSystemmobile.mp4"
                : "/videos/SelectingSystemDesktop.mp4"
            }
            type="video/mp4"
          />
          {/* Your browser does not support the video tag. */}
        </video>
      </div>

      {/* product start */}
      <DoorSealProduct />

      {/* <div className="grid grid-cols-1 -ml-28 md:grid-cols-2 lg:grid-cols-3 harmony-regular px-32 md:justify-center md:mt-8 md:gap-20 lg:justify-center lg:-ml-20 lg:gap-16 xl:ml-12 xl:mr-12 xl:mt-3 xl:mb-10">
        {DoorData.map((item, index) => (
          <div
            key={index}
            className="relative group h-[23.4rem] w-[20rem] ml-5 mt-14 mb-8 bg-white hover:border hover:shadow-black rounded-[1rem] cursor-pointer overflow-hidden text-center flex flex-col items-center transition-transform duration-700 ease-in-out md:mt-7 md:h-[30rem] md:w-[20rem] md:text-sm lg:h-[28rem] lg:-pt-[5rem] lg:w-[17rem] xl:h[18rem] xl:w-[20rem]"
          >
            <div className="flex items-center justify-center h-[116%] mr-2 w-[116%] overflow-hidden md:-mb-20 xl:-mb-40">
              <Image
                src={item.img}
                title={item.title}
                alt={item.alt}
                className="transition-transform duration-700 ease-in-out group-hover:scale-90 object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 flex items-center justify-center flex-col p-2 transition-opacity duration-300 ease-in-out">
              <div className="text-center">
                <p className="text-lg font-semibold mb-2 py-2">{item.title}</p>
                <p className="text-gray-600 text-[0.700rem] lg:text-[0.700rem] xl:text-[0.800rem]">
                  {item.desc}
                </p>
                <table className="mt-4 text-left w-full text-[0.750rem] lg:text-[0.700rem] xl:text-[0.800rem]">
                  <tbody>
                    <tr>
                      <td className="font-semibold pr-2">Profile Type:</td>
                      <td>{item.ProfileType}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold pr-2">Dimensions:</td>
                      <td>{item.Dimensions}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold pr-2">Finish:</td>
                      <td>{item.Finish}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold pr-2">Maximum Length:</td>
                      <td>{item.MaximumLength}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold pr-2">Cutting:</td>
                      <td>{item.Cutting}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold pr-2">
                        Sound absorption value:
                      </td>
                      <td>{item.Soundabsorptionvalue}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold pr-2">Fastening:</td>
                      <td>{item.Fastening}</td>
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
      </div> */}
    </main>
  );
};
export default DoorSeals;
