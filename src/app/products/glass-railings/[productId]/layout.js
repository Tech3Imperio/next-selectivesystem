"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound, usePathname } from "next/navigation";
import { useState } from "react";
import { GlassRailingProductsPanel, accordionData } from "./data";
import { IoChevronUp, IoChevronDown } from "react-icons/io5";
//Gallery

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-4 px-6 text-left"
        onClick={onClick}
      >
        <span className="text-lg din-bold">{title}</span>
        {isOpen ? (
          <IoChevronUp className="w-6 h-6 text-gray-500" />
        ) : (
          <IoChevronDown className="w-6 h-6 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="py-4 px-6 bg-gray-50 shadow-md">
          <p className=" roboto-light">{content}</p>
        </div>
      )}
    </div>
  );
};

export default function ProductPage() {
  // console.log("path: ", params);
  const [openAccordion, setOpenAccordion] = useState(0);
  const pathname = usePathname();
  const fetchedId = pathname.slice(-23);
  console.log("fid:", fetchedId);
  const product = GlassRailingProductsPanel.find(
    (item) => item.id === fetchedId
  );

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
          <div className="text-4xl font-bold text-white text-center din-bold">
            {product.ProductName}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8 ">
        <Link
          href="/products/glass-railings"
          className="text-blue-600 hover:underline mb-4 inline-block roboto-regular"
        >
          &larr; Back to All Windows
        </Link>
        <p className=" roboto-light text-justify"></p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex gap-4 md:flex-col pt-4 md:pt-14">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className={`relative h-20 w-20 border-2 rounded-md overflow-hidden ${
                    selectedImage === image
                      ? "border-blue-500"
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
            <div className="text-3xl text-center md:p-0 md:text-start din-bold ">
              {product.ProductName}
            </div>
            <h2 className=" roboto-light text-justify px-2">
              {product.description}
            </h2>
            <div>
              <div className="text-xl din-bold mb-2">Features:</div>
              <ul className="list-disc list-inside">
                {product.features.map((feature, index) => (
                  <li key={index} className="text-base roboto-light">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-black">
              <div className="text-xl din-bold">Dimensions:</div>
              <table className="min-w-full border-collapse border border-gray-300 table-auto mt-2">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="py-2 px-4 text-left din-bold border border-gray-300">
                      Name
                    </th>
                    <th className="py-2 px-4 text-left din-bold border border-gray-300">
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
                        {/* Check if the value is a URL and render it as a clickable link */}
                        {dimension.name === "For More Information" ? (
                          <a
                            href="https://www.imperiorailing.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                          >
                            {dimension.value}
                          </a>
                        ) : (
                          dimension.value
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <section>
            <div className="text-2xl din-bold mb-4">Product Description</div>
            <h3 className="text-gray-800 mb-6 text-justify px-2">
              {product.longDescription.title}
            </h3>

            <main className="product-description py-4 px-4">
              <ul className="list-disc pl-6 space-y-6 roboto-light">
                {product.longDescription.features.map((feature, index) => (
                  <li key={index}>
                    <p className=" roboto-regular text-lg ">{feature.name}</p>
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
            <div className="text-2xl din-bold mb-4">Applications</div>
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
            <div className="text-2xl din-bold mb-4">Specifications</div>
            <div className="grid grid-cols-2 gap-4">
              {product.specifications.map((spec, index) => (
                <div key={index} className="bg-secondary p-4 rounded-lg">
                  <p className=" roboto-regular">{spec.name}</p>
                  <p className=" roboto-light text-base">{spec.value}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="text-2xl din-bold mb-4">Installation</div>
            <p className=" text-base roboto-light text-justify">
              {product.installation}
            </p>
          </section>

          <section>
            <div className="text-2xl din-bold mb-4">Maintenance</div>
            <p className="text-gray-700 text-base poppins-extralight text-justify">
              {product.maintenance}
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
