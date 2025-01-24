"use client";
import React, { useState, useRef, useEffect } from "react";
import InvisibleData from "../../Data/InvisibleGrill/InvisibleGrill";
import Image from "next/image";
import Invisiblegrill from "@/app/components/Invisiblegrill/Invisiblegrill";

const InvisibleGrill = () => {
  // const benefits = [
  //   "Invisible grills offer a unique combination of safety and aesthetic appeal, enhancing safety without compromising on your view. Their sleek, minimalist design complements modern architecture and adds a sophisticated touch to any space. Built to endure various weather conditions with minimal maintenance, these grills are not only durable but also cost-effective, with long-term savings on upkeep. They are versatile in their applications, suitable for balconies, windows, and staircases, and their availability through local suppliers ensures easy installation and tailored solutions to meet your specific needs",
  // ];

  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const aluminiumRef = useRef(null); // Create a ref for the Aluminium component

  useEffect(() => {
    // Scroll to the top of the component when it comes into view
    if (aluminiumRef.current) {
      aluminiumRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentItemIndex]);

  return (
    <main className="relative">
      <Invisiblegrill />
      {/* product start */}
      <div className="grid grid-cols-1 -ml-28 md:grid-cols-2 lg:grid-cols-3 harmony-regular px-32 md:justify-center md:mt-8 md:gap-20 lg:justify-center lg:-ml-20 lg:gap-16 xl:ml-12 xl:mr-12 xl:mt-3 xl:mb-10">
        {InvisibleData.map((item, index) => (
          <div
            key={index}
            className="relative group h-[23.4rem] w-[20rem] ml-5 mt-14 mb-8 bg-white hover:border hover:shadow-black rounded-[1rem] cursor-pointer overflow-hidden text-center flex flex-col items-center transition-transform duration-700 ease-in-out md:mt-7 md:h-[30rem] md:w-[20rem] md:text-sm lg:h-[28rem] lg:-pt-[5rem] lg:w-[17rem] xl:h[18rem] xl:w-[20rem]"
          >
            <div className="flex items-center justify-center h-[116%] mr-2 w-[116%] overflow-hidden md:-mb-20 xl:-mb-40">
              <Image
                src={item.img}
                title={item.title}
                alt={item.alt}
                className="transition-transform duration-700 ease-in-out group-hover:scale-90 object-cover mb-12 md:mb-10 lg:mb-8 xl:mb-14 "
              />
            </div>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 flex items-center justify-center flex-col p-4 transition-opacity duration-300 ease-in-out">
              <div className="text-center">
                <p className="text-lg font-semibold mb-2 py-2 lg:text-[0.740rem] xl:text-[0.850rem]">
                  {item.title}
                </p>
                <p className="text-gray-600 text-[0.620rem] md:text-[0.650rem] lg:text-[0.600rem] xl:text-[0.730rem]">
                  {item.desc}
                </p>
                <table className="mt-4 text-left w-full text-[0.700rem] md:text-[0.700rem] lg:text-[0.650rem] xl:text-[0.750rem]">
                  <tbody>
                    <tr>
                      <td className="font-semibold pr-2"> Grade Field:</td>
                      <td>{item.GradeField}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold pr-2">Technique:</td>
                      <td>{item.Technique}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold pr-2">Material:</td>
                      <td>{item.Material}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold pr-2">Product Type:</td>
                      <td>{item.ProductType}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold pr-2">UsageApplication:</td>
                      <td>{item.UsageApplication}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold pr-2">GrillDesign:</td>
                      <td>{item.GrillDesign}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold pr-2">WireDiameter:</td>
                      <td>{item.WireDiameter}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold pr-2">SurfaceFinish:</td>
                      <td>{item.SurfaceFinish}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold pr-2">WireSpacing:</td>
                      <td>{item.WireSpacing}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold pr-2">Color:</td>
                      <td>{item.Color}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold pr-2">Feature:</td>
                      <td>{item.Feature}</td>
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
      <div className=" px-4 md:p-6 flex flex-col justify-center items-center max-w-7xl m-auto ">
        <p className=" text-3xl md:text-5xl din-bold mb-4">
          Why Choose Invisible Grills?
        </p>

        <p className="text-lg roboto-light text-justify">
          <strong>Invisible grills</strong> offer a unique combination of safety
          and aesthetic appeal, enhancing safety without compromising your view.
          These <strong>invisible safety grills</strong> are designed to
          seamlessly blend with modern architecture, providing a{" "}
          <strong>stylish balcony railing</strong> that complements your space.
          Their sleek, minimalist design adds sophistication, making them
          perfect for any contemporary home.{" "}
          <strong>Invisible grill for balcony</strong> installations are built
          to endure various weather conditions with minimal maintenance,
          ensuring long-lasting durability. Moreover, these grills are not only
          practical but also cost-effective, offering significant savings on
          upkeep. When considering an{" "}
          <strong>invisible grill for balcony near me</strong>, you'll find
          numerous suppliers that offer tailored solutions at competitive{" "}
          <strong>invisible grill cost</strong>. The{" "}
          <strong>invisible grill installation</strong> process is
          straightforward, and these grills are versatile in their applications,
          ideal for balconies, windows, and staircases.{" "}
          <strong>Invisible grills for windows</strong> and{" "}
          <strong>invisible grill for staircase</strong> solutions provide
          maximum safety without obstructing your view. With the rise of modern{" "}
          <strong>invisible grill wire</strong> technology, these grills are
          crafted from high-quality <strong>invisible grill material</strong>{" "}
          that ensures both strength and transparency. If you're interested in{" "}
          <strong>transparent grill for balcony</strong> options, these grills
          are the perfect fit. Additionally, many local suppliers offer{" "}
          <strong>invisible grill raw material suppliers</strong> to ensure the
          best materials for your needs. For those looking to understand the{" "}
          <strong>invisible grill for balcony price</strong>, it's important to
          consider long-term savings and reduced maintenance costs. Whether
          you're seeking a <strong>grill invisible</strong> for aesthetic
          purposes or safety, these grills provide the perfect balance of
          function and style.
        </p>
      </div>
    </main>
  );
};

export default InvisibleGrill;
