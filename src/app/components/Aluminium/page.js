// // pages/aluminium-windows/index.js

// import Image from "next/image";
// import Link from "next/link";
// import windows1 from "../../assets/AluminiumProduct/AluminiumWindows/windows1.webp";
// import windows2 from "../../assets/AluminiumProduct/AluminiumWindows/windows2.webp";
// import windows3 from "../../assets/AluminiumProduct/AluminiumWindows/windows3.webp";
// import windows4 from "../../assets/AluminiumProduct/AluminiumWindows/windows4.webp";
// // import windows5 from "../../assets/AluminiumProduct/AluminiumWindows/windows5.webp";
// import windows6 from "../../assets/AluminiumProduct/AluminiumWindows/windows6.webp";

// const AluminiumProductsPanel = [
//   {
//     id: "fixed-aluminium-window-01",
//     image: windows1,
//     ProductName: "Modern Aluminum Fixed Windows",
//   },
//   {
//     id: "awning-aluminium-window01",
//     image: windows2,
//     ProductName: "Aluminum Awning Windows",
//   },
//   {
//     id: "sliding-aluminium-window1",
//     image: windows3,
//     ProductName: "Aluminum Sliding Windows",
//   },
//   {
//     id: "casement-aluminium-window",
//     image: windows4,
//     ProductName: "Casement Aluminum Window",
//   },
//   {
//     id: "glass-corner-alum-windows",
//     image: windows6,
//     ProductName: "Aluminium Glass To Glass Corner Windows",
//   },
// ];

// export default function AluminiumWindows() {
//   return (
//     <div className="max-w-[85rem] mx-auto container flex flex-col justify-center items-center pt-14">
//       <div className="m-4">
//         <h1 className=" text-2xl lg:text-5xl din-bold text-black  mb-8 text-center">
//           Premium Aluminum Windows Combining Durability, Style, and Modern
//           Design
//         </h1>
//         <p className="text-base text-justify px-4 md:px-0 md:text-center max-w-6xl roboto-light mx-auto text-gray-800">
//           Discover <strong>premium aluminum windows</strong> that combine{" "}
//           <b>durability</b>, sleek style, and modern design. Ideal for both{" "}
//           <b>residential</b> and <b>commercial</b> properties, our windows offer
//           exceptional energy efficiency, low maintenance, and long-lasting
//           performance. Enhance your space with windows that provide both
//           functionality and elegance. Contact us today for{" "}
//           <strong>custom aluminum window</strong> solutions and professional
//           installation.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-4">
//         {AluminiumProductsPanel.map((item) => (
//           <Link
//             href={`/products/aluminium-windows/${item.id}`}
//             key={item.id}
//             className="group"
//           >
//             <div className="rounded-lg flex flex-col overflow-hidden transition-transform duration-300 group-hover:scale-105">
//               {/* Center the image in the container */}
//               <div className="flex justify-center items-center p-8 lg:p-4">
//                 <Image
//                   src={item.image}
//                   alt={item.ProductName}
//                   loading="lazy"
//                   className="h-[100%] w-[100%] object-cover rounded-2xl"
//                 />
//               </div>
//             </div>
//             <p className="text-center text-xl roboto-light text-gray-800">
//               {item.ProductName}
//             </p>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

// Add this at the very top of your file
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import windows1 from "../../assets/AluminiumProduct/AluminiumWindows/windows1.webp";
import windows2 from "../../assets/AluminiumProduct/AluminiumWindows/windows2.webp";
import windows3 from "../../assets/AluminiumProduct/AluminiumWindows/windows3.webp";
import windows4 from "../../assets/AluminiumProduct/AluminiumWindows/windows4.webp";
import windows6 from "../../assets/AluminiumProduct/AluminiumWindows/windows6.webp";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

export const metadata = {
  title: "Aluminium Components",
  description:
    "Looking for the best aluminium windows, modern glass railings, invisible grills, stainless steel windows, bathroom partitions, and office partitions? Selective Systems offers high-quality products for homes and offices in Bangalore, Mumbai, Chennai, Pune, and beyond. Contact us today for premium solutions!",
  keywords: [
    "aluminium windows Bangalore",
    "glass railings in Mumbai",
    "best invisible grills in Chennai",
    "bathroom glass partitions",
    "queue manager systems",
    "stainless steel windows",
    "aluminium door solutions",
    "modern office partitions",
    "balcony glass railings",
    "modern aluminium window design",
    "aluminium window suppliers",
    "selective systems products",
  ],
  // url: "https://www.selectivesystems.in/contact",
  alternates: {
    canonical: "/components/Aluiminium",
  },
};

const AluminiumProductsPanel = [
  {
    id: "fixed-aluminium-window-01",
    image: windows1,
    ProductName: "Modern Aluminum Fixed Windows",
  },
  {
    id: "awning-aluminium-window01",
    image: windows2,
    ProductName: "Aluminum Awning Windows",
  },
  {
    id: "sliding-aluminium-window1",
    image: windows3,
    ProductName: "Aluminum Sliding Windows",
  },
  {
    id: "casement-aluminium-window",
    image: windows4,
    ProductName: "Casement Aluminum Window",
  },
  {
    id: "glass-corner-alum-windows",
    image: windows6,
    ProductName: "Aluminium Glass To Glass Corner Windows",
  },
];

const benefits = [
  {
    title: "Durability",
    description:
      "Aluminum windows are highly resistant to corrosion, weathering, and wear, ensuring long-lasting performance.",
  },
  {
    title: "Energy Efficiency",
    description:
      "Modern aluminum windows offer excellent thermal insulation, helping to reduce energy costs.",
  },
  {
    title: "Low Maintenance",
    description:
      "Aluminum windows require minimal upkeep, saving you time and money on maintenance.",
  },
  {
    title: "Sleek Design",
    description:
      "The slim profile of aluminum frames allows for larger glass areas, maximizing natural light and views.",
  },
  {
    title: "Customization",
    description:
      "Aluminum windows can be easily customized in various colors and finishes to match your aesthetic preferences.",
  },
];

const faqs = [
  {
    question: "Are aluminum windows energy efficient?",
    answer:
      "Yes, modern aluminum windows are designed with thermal breaks and high-performance glazing, making them very energy efficient. They can help reduce heat transfer and lower your energy bills.",
  },
  {
    question: "How long do aluminum windows last?",
    answer:
      "Aluminum windows are known for their longevity. With proper care and maintenance, they can last 30 years or more, making them a great long-term investment for your property.",
  },
  {
    question: "Can aluminum windows be painted?",
    answer:
      "While aluminum windows come in a variety of colors, they can also be painted if you wish to change their appearance. However, it's important to use the right type of paint and preparation techniques for the best results.",
  },
  {
    question: "Are aluminum windows suitable for coastal areas?",
    answer:
      "Aluminum windows are an excellent choice for coastal areas due to their resistance to corrosion from salt air. They're often treated with special finishes to enhance their durability in harsh coastal environments.",
  },
];

export default function AluminiumWindows() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  return (
    <div className="max-w-[85rem] mx-auto container flex flex-col justify-center items-center pt-14">
      <div className="m-4">
        <h1 className="text-2xl lg:text-5xl din-bold text-black mb-8 text-center">
          Premium Aluminum Windows Combining Durability, Style, and Modern
          Design
        </h1>
        <p className="text-base text-justify px-4 md:px-0 md:text-center max-w-6xl roboto-light mx-auto text-gray-800">
          Discover <strong>premium aluminum windows</strong> that combine{" "}
          <b>durability</b>, sleek style, and modern design. Ideal for both{" "}
          <b>residential</b> and <b>commercial</b> properties, our windows offer
          exceptional energy efficiency, low maintenance, and long-lasting
          performance. Enhance your space with windows that provide both
          functionality and elegance. Contact us today for{" "}
          <strong>custom aluminum window</strong> solutions and professional
          installation.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-4">
        {AluminiumProductsPanel.map((item) => (
          <Link
            href={`/products/aluminium-windows/${item.id}`}
            key={item.id}
            className="group"
          >
            <div className="rounded-lg flex flex-col overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <div className="flex justify-center items-center p-8 lg:p-4">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.ProductName}
                  loading="lazy"
                  className="h-[100%] w-[100%] object-cover rounded-2xl"
                />
              </div>
            </div>
            <p className="text-center text-xl roboto-light text-gray-800">
              {item.ProductName}
            </p>
          </Link>
        ))}
      </div>

      {/* New Section: Why Choose Aluminum Windows */}
      <div className="w-full bg-gray-100 py-16 mt-16">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-3xl lg:text-4xl din-bold text-black mb-8 text-center">
            Why Choose Aluminum Windows?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
              >
                <p className="text-xl font-semibold mb-3">{benefit.title}</p>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* New Section: FAQ */}
      <div className="w-full py-16">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-3xl lg:text-4xl din-bold text-black mb-8 text-center">
            Frequently Asked Questions
          </p>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-lg font-medium">{faq.question}</span>
                  {openFaq === index ? (
                    <IoChevronUp className="h-6 w-6 text-gray-500" />
                  ) : (
                    <IoChevronDown className="h-6 w-6 text-gray-500" />
                  )}
                </button>
                {openFaq === index && (
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
