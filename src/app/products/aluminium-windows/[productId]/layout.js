"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import { IoChevronUp, IoChevronDown } from "react-icons/io5";
//Gallery
import { BsFillTelephoneFill } from "react-icons/bs";
import { accordionData, AluminiumProductsPanel } from "./data";

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-4 px-6 text-left"
        onClick={onClick}
      >
        <span className="text-lg text-gray-900 poppins-regular">{title}</span>
        {isOpen ? (
          <IoChevronUp className="w-6 h-6 text-gray-500" />
        ) : (
          <IoChevronDown className="w-6 h-6 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="py-4 px-6 bg-gray-50 shadow-md">
          <p className="text-gray-700 roboto-light">{content}</p>
        </div>
      )}
    </div>
  );
};

export default function ProductPage({ params }) {
  const [openAccordion, setOpenAccordion] = useState(0);
  const pathname = usePathname();
  const fetchedId = pathname.slice(-25);
  const product = AluminiumProductsPanel.find((item) => item.id === fetchedId);

  if (!product) {
    notFound();
  }

  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  return (
    <>
      <div className="relative h-[500px] mb-8 rounded-lg overflow-hidden">
        <Image
          src={product.images[0]}
          alt={product.ProductName}
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white text-center">
            {product.ProductName}
          </h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8 ">
        <Link
          href="/products/aluminium-windows"
          className="text-blue-600 hover:underline mb-4 inline-block"
        >
          &larr; Back to All Windows
        </Link>
        <p className="text-gray-700  roboto-light text-justify">
          Selective System, based in Mumbai, India, is a leading manufacturer of
          high-quality aluminium windows, offering energy-efficient, durable,
          and stylish solutions for residential and commercial spaces. Our range
          includes fixed, sliding, awning, and glass windows, all crafted with
          advanced technology for lasting performance and aesthetic appeal.
          Tested for all weather conditions, our windows are perfect for homes,
          offices, and global markets like the UAE and Tajikistan. With
          customizable designs, Selective System ensures superior energy
          efficiency, security, and insulation for every project. Choose us for
          premium aluminium windows that meet all your architectural and
          functional needs.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex gap-4 md:flex-col pt-4 md:pt-14">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className={`relative h-20 w-20 border-2 rounded-md overflow-hidden ${
                    selectedImage === image
                      ? "border-gray-800"
                      : "border-gray-200"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.ProductName} thumbnail ${index + 1}`}
                    layout="fill"
                    loading="lazy"
                    objectFit="cover"
                  />
                </button>
              ))}
            </div>
            <div className="relative flex-grow  h-64 md:h-[500px]">
              <Image
                src={selectedImage}
                alt={product.ProductName}
                loading="lazy"
                className="rounded-lg object-fill"
              />
            </div>
          </div>

          <div className="flex flex-col pt-6 gap-6 mt-10">
            <h2 className="text-3xl text-center md:p-0 md:text-start din-bold">
              {product.ProductName}
            </h2>
            <p className="text-gray-700 text-justify px-2 roboto-light">
              {product.description}
            </p>
            <div>
              <h3 className="text-xl din-bold mb-2">Features:</h3>
              <ul className="list-disc list-inside">
                {product.features.map((feature, index) => (
                  <li
                    key={index}
                    className="text-gray-700 text-base roboto-light"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-black">
              <span className="text-xl din-bold">Dimensions:</span>
              <table className="min-w-full border-collapse border border-gray-300 table-auto mt-2">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="py-2 px-4 text-left font-bold text-gray-800 border border-gray-300">
                      Name
                    </th>
                    <th className="py-2 px-4 text-left font-bold text-gray-800 border border-gray-300">
                      Value
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {product.dimensions.map((dimension, index) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0 ? "bg-white" : "bg-gray-100"
                      }`}
                    >
                      <td className="py-2 px-4 font-semibold text-gray-700 border border-gray-300">
                        {dimension.name}
                      </td>
                      <td className="py-2 px-4 text-gray-700 border border-gray-300">
                        {dimension.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Link href="tel:+919372593981">
              <motion.button
                className="rounded-[5px] px-5 py-3 bg-black text-white roboto-bold transition duration-700 border border-white flex items-center gap-2
               hover:bg-white hover:text-black hover:border-black"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <BsFillTelephoneFill size={14} />
                Call Now
              </motion.button>
            </Link>
          </div>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl din-bold mb-4">Product Description</h2>
            <p className="text-black roboto-light mb-6 text-justify px-2">
              {product.longDescription.title}
            </p>

            <main className="product-description py-4 px-4">
              <ul className="list-disc pl-6 space-y-6 text-black">
                {product.longDescription.features.map((feature, index) => (
                  <li key={index}>
                    <h3 className="din-bold text-lg text-black">
                      {feature.name}
                    </h3>
                    <p className="text-gray-700 mt-2 poppins-extralight text-justify">
                      {feature.description}
                    </p>
                  </li>
                ))}
              </ul>
            </main>
          </section>

          <div>
            {" "}
            <h2 className="text-2xl din-bold mb-4">Applications</h2>
            <div className="rounded-lg overflow-hidden">
              {accordionData.map((item, index) => (
                <AccordionItem
                  key={index}
                  title={item.title}
                  content={item.content}
                  isOpen={openAccordion === index}
                  onClick={() =>
                    setOpenAccordion(openAccordion === index ? -1 : index)
                  }
                />
              ))}
            </div>
          </div>

          <section>
            <h2 className="text-2xl din-bold mb-4">Specifications</h2>
            <div className="grid grid-cols-2 gap-4">
              {product.specifications.map((spec, index) => (
                <div key={index} className="bg-secondary p-4 rounded-lg">
                  <h3 className="poppins-semibold text-gray-700">
                    {spec.name}
                  </h3>
                  <p className="text-gray-700 text-base">{spec.value}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl din-bold mb-4">Installation</h2>
            <p className="text-gray-700 text-base roboto-light text-justify">
              {product.installation}
            </p>
          </section>

          <section>
            <h2 className="text-2xl din-bold mb-4">Maintenance</h2>
            <p className="text-gray-700 text-base roboto-light text-justify">
              {product.maintenance}
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
