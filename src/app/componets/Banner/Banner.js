// "use client";
// import React from "react";
// import { FadeUp } from "../utility/animation";
// import { motion } from "framer-motion";
// import qualitywhite from "../../assets/About/qualitywhite.jpg";
// import endtoendservice from "../../assets/About/endtoendservice.jpg";
// import customersatisfaction from "../../assets/About/customersatisfaction.jpg";
// import robustpackging from "../../assets/About/robustpackging.jpg";
// import ontimedilivery from "../../assets/About/ontimedilivery.jpg";
// import Image from "next/image";
// // import railing2 from "../../assets/Railing/HeroImage/railing2.jpg"

// const Banner = () => {
//   return (
//     <section className=" bg-gray-800 w-screen">
//       <motion.h1
//         initial={{ opacity: 0, x: -200 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         transition={{ duration: 1, delay: 0.3 }}
//         className="text-lg text-left pt-10 pb-10 font-semibold poppins-regular uppercase text-primary ml-4 md:ml-6 md:text-2xl md:pt-14 md:mb-4 md:font-semibold lg:ml-4-28 lg:text-3xl lg:mb-4 lg:font-semibold xl:text-3xl xl:mb-12 xl:ml-32 xl4:ml-[14.2rem] xl:font-semibold"
//       >
//         Why Selective Systems ?
//       </motion.h1>

//       <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-1 xl:-space-x-14">
//         {/* Baneer image */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.3 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ type: "spring", stiffness: 100, delay: 1 }}
//           viewport={{ once: true }}
//           className=" flex justify-center items-center"
//         >
//           <Image
//             src={qualitywhite}
//             alt=""
//             className=" w-[8rem] h-[8rem] object-cover md:h-[10rem] md:w-[10rem] lg:h-[13rem] lg:w-[13rem] xl:h-[12rem] xl:w-[12rem] xl:ml-[12rem]"
//           />
//         </motion.div>
//         {/* Brand image */}
//         <div className=" flex flex-col justify-center ">
//           <div className="text-center md:text-left space-y-1 lg:max-w-[600px]">
//             <motion.h1
//               variants={FadeUp(1)}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               className="text-lg mr-10 uppercase poppins-regular text-primary ml-12 md:text-xl lg:text-2xl xl:text-3xl "
//             >
//               <span className=" text-2xl md:-ml-2 md:text-xl lg:text-2xl xl:text-4xl poppins-regular">
//                 1.
//               </span>{" "}
//               Quality Assurance
//             </motion.h1>
//             <motion.p
//               variants={FadeUp(1)}
//               initial="hidden"
//               animate="visible"
//               viewport={{ once: true }}
//               className=" text-sm px-4 md:px-10 text-gray-300 text-justify poppins-extralight md:text-sm lg:text-sm xl:text-sm xl:ml-1"
//             >
//               Quality Assurance is not merely a checkpoint but a relentless
//               pursuit of excellence at every phase. It’s the commitment to
//               perfection and the precision in each step that defines true
//               quality.
//             </motion.p>
//             <motion.p
//               variants={FadeUp(1)}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               className=" text-sm px-4 md:px-10 text-gray-300 text-justify poppins-extralight md:text-sm  lg:text-sm lg:ml-0 xl:text-sm xl:ml-1"
//             >
//               Through meticulous attention to detail and a proactive approach,
//               Quality Assurance ensures that every product and process
//               consistently meets the highest standards.
//             </motion.p>
//             {/* <motion.div
//                     variants={FadeUp(3.1)}
//                     initial="hidden"
//                     animate="visible"
//                     className="flex justify-center shadow-[0px_10px_14px_-7px_#14ff72cb] md:justify-centre border hover:border-black text-sm bg-[#14ff72cb] text-[#fff] w-[4rem] h-[2rem] rounded-[2rem] cursor-pointer md:font-semibold lg:h-[3.5rem] lg:w-[8rem] lg:px-2 lg:rounded-[3rem] lg:text-sm xl:h-[3.4rem] xl:w-[8.4rem] xl:text-sm hover:bg-[#e4e4e4] hover:text-[#000]">
//                     <button>GET IN TOUCH</button>
//                 </motion.div> */}
//           </div>
//         </div>
//       </div>

//       {/* Sceond image */}
//       <section>
//         <div className="flex flex-col md:flex-row-reverse justify-center items-center xl:-space-x-2 xl:mt-8">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.3 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ type: "spring", stiffness: 100, delay: 1 }}
//             viewport={{ once: true }}
//           >
//             <Image
//               src={endtoendservice}
//               alt=""
//               className="w-[8rem] h-[8rem] mt-4 object-cover md:h-[10rem] md:w-[10rem] md:mr-24 lg:h-[13rem] lg:w-[13rem] lg:ml-4 xl:h-[12rem] xl:w-[12rem]"
//             />
//           </motion.div>

//           <div className="flex flex-col justify-center mt-4 md:mt-0 md:mr-4">
//             <div className="text-center md:text-left space-y-2 lg:max-w-[600px]">
//               <motion.h1
//                 variants={FadeUp(0.3)}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 className="text-lg uppercase poppins-regular text-primary md:text-xl lg:text-2xl xl:text-3xl md:ml-[5rem] lg:-ml-2 xl:-ml-[5.2rem]"
//               >
//                 <span className=" text-2xl md:-ml-2 md:text-xl lg:2xl xl:text-4xl poppins-regular">
//                   2.
//                 </span>{" "}
//                 End-to-End Service
//               </motion.h1>

//               <motion.p
//                 variants={FadeUp(0.3)}
//                 initial="hidden"
//                 animate="visible"
//                 viewport={{ once: true }}
//                 className="text-sm px-4 md:px-[5rem] text-gray-300 text-justify poppins-extralight md:text-sm md:ml-[rem] lg:text-sm lg:w-[35rem] lg:-ml-20 xl:text-sm xl:-ml-[10.6rem] xl:w-[37rem]"
//               >
//                 End-to-end service ensures seamless integration and execution
//                 from initial concept to final delivery. By providing
//                 comprehensive support at every stage, it enhances efficiency and
//                 maintains high-quality standards throughout the entire process.
//               </motion.p>

//               <motion.p
//                 variants={FadeUp(0.3)}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 className="text-sm px-4 md:px-[5rem] text-gray-300 text-justify poppins-extralight md:text-sm md:ml-[rem] lg:text-sm lg:w-[35rem] lg:-ml-20 xl:text-sm xl:-ml-[10.6rem] xl:w-[39rem]"
//               >
//                 Experience our end-to-end service, delivering comprehensive
//                 solutions and exceptional quality at every step, ensuring
//                 top-rated results.
//               </motion.p>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Sceond image */}

//       {/* third image */}
//       <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 xl:-space-x-14">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.3 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
//           viewport={{ once: true }}
//           className=" flex justify-center items-center"
//         >
//           <Image
//             src={customersatisfaction}
//             alt=""
//             className=" w-[8rem] h-[8rem] ml-8 rounded-[2rem] object-cover md:h-[10rem] md:w-[10rem] lg:h-[13rem] lg:w-[13rem] xl:h-[13.2rem] xl:w-[12rem] xl:ml-[12rem]"
//           />
//         </motion.div>
//         {/* Brand ingo */}
//         <div className=" flex flex-col justify-center">
//           <div className="text-center md:text-left space-y-2 lg:max-w-[600px]">
//             <motion.h1
//               variants={FadeUp(0.3)}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               className="text-lg mr-10  uppercase poppins-regular text-primary ml-12 md:text-xl md:ml-12 lg:text-2xl xl:text-3xl"
//             >
//               <span className=" text-2xl md:text-xl lg:text-2xl xl:text-4xl poppins-regular">
//                 {" "}
//                 3.
//               </span>
//               Customer Satisfaction
//             </motion.h1>
//             <motion.p
//               variants={FadeUp(0.3)}
//               initial="hidden"
//               animate="visible"
//               viewport={{ once: true }}
//               className="text-sm px-4 md:px-[75px] text-gray-300 text-justify poppins-extralight md:text-sm lg:text-sm lg:ml-14 xl:text-sm xl:-ml-6"
//             >
//               Customer satisfaction is the cornerstone of exceptional service,
//               achieved through tailored solutions and responsive support. By
//               prioritizing client needs and continuously improving based on
//               feedback, businesses can foster long-term loyalty and exceed
//               expectations
//             </motion.p>
//             <motion.p
//               variants={FadeUp(0.2)}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               className="text-sm px-4 md:px-[75px] text-gray-300 text-justify poppins-extralight md:text-sm lg:text-sm lg:ml-14 xl:text-sm xl:-ml-6"
//             >
//               Customer satisfaction drives success by ensuring tailored
//               solutions and responsive support that exceed client expectations.
//             </motion.p>
//           </div>
//         </div>
//       </div>
//       {/* third image */}

//       {/* fourth image */}
//       <section>
//         <div className="flex flex-col md:flex-row-reverse justify-center items-center xl:-space-x-2 xl:mt-8">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.3 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             <Image
//               src={robustpackging}
//               alt=""
//               className="w-[8rem] h-[8rem] ml-3 rounded-[2rem] object-cover md:h-[10rem] md:w-[10rem] md:mr-14 lg:h-[13rem] lg:w-[13rem] lg:ml-4 xl:h-[12rem] xl:w-[12rem]"
//             />
//           </motion.div>

//           <div className="flex flex-col justify-center mt-4 md:mt-0 md:mr-4">
//             <div className="text-center md:text-left space-y-2 lg:max-w-[600px]">
//               <motion.h1
//                 variants={FadeUp(0.2)}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 className="text-lg uppercase poppins-regular text-primary md:text-xl lg:text-2xl xl:text-3xl md:ml-[5rem] lg:-ml-2 xl:-ml-[5.5rem]"
//               >
//                 <span className=" text-2xl md:-ml-2 md:text-xl lg:text-2xl xl:text-4xl poppins-regular">
//                   4.
//                 </span>{" "}
//                 Robust Packaging
//               </motion.h1>

//               <motion.p
//                 variants={FadeUp(0.2)}
//                 initial="hidden"
//                 animate="visible"
//                 viewport={{ once: true }}
//                 className="text-sm px-4 md:px-[6rem] text-gray-300 text-justify poppins-extralight md:text-sm  md:-ml-6 lg:text-sm lg:w-[37rem] lg:-ml-28 xl:-ml-[11.8rem] xl:w-[40rem]"
//               >
//                 Robust packaging is essential for ensuring the safety and
//                 integrity of products during transit and storage. With advanced
//                 materials and design techniques, it provides superior
//                 protection, reducing the risk of damage and enhancing overall
//                 product quality.
//               </motion.p>

//               <motion.p
//                 variants={FadeUp(0.2)}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 className="text-sm px-4 md:px-[6rem] text-gray-300 text-justify poppins-extralight md:text-sm lg:text-sm lg:w-[35rem] lg:-ml-[89px]  xl:-ml-[11.8rem] xl:w-[40rem]"
//               >
//                 Robust packaging guarantees maximum protection and durability,
//                 safeguarding products from damage throughout their journey.
//               </motion.p>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* fourt image */}

//       {/* five image */}
//       <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-8 xl:-space-x-14">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.3 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
//           viewport={{ once: true }}
//           className=" flex justify-center items-center"
//         >
//           <Image
//             src={ontimedilivery}
//             alt=""
//             className=" w-[8rem] h-[8rem] rounded-[2rem] object-cover md:h-[10rem] md:w-[10rem] lg:h-[13rem] lg:w-[13rem] lg:ml-16 xl:h-[12rem] xl:w-[12rem] xl:ml-[18rem]"
//           />
//         </motion.div>
//         {/* Brand ingo */}
//         <div className=" flex flex-col justify-center ">
//           <div className="text-center md:text-left space-y-1 lg:max-w-[600px]">
//             <motion.h1
//               variants={FadeUp(0.1)}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               className="text-lg mr-10 uppercase poppins-regular text-primary ml-12 md:text-xl lg:text-2xl xl:text-3xl "
//             >
//               <span className="text-2xl md:text-xl lg:text-2xl xl:text-4xl poppins-regular">
//                 5.
//               </span>{" "}
//               On Time Deleivery
//             </motion.h1>
//             <motion.p
//               variants={FadeUp(0.1)}
//               initial="hidden"
//               animate="visible"
//               viewport={{ once: true }}
//               className=" text-sm px-4 md:px-12 text-gray-300 text-justify poppins-extralight md:text-sm  lg:text-sm lg:-ml-2  xl:-ml-0"
//             >
//               On-time delivery is crucial for maintaining customer satisfaction
//               and trust. By adhering to strict timelines and optimizing
//               logistics, businesses ensure that products and services are
//               delivered promptly and efficiently
//             </motion.p>
//             <motion.p
//               variants={FadeUp(0.1)}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               className=" text-sm px-4 md:px-24 text-gray-300 text-justify poppins-extralight md:text-sm lg:text-sm lg:-ml-0 lg:px-12  xl:-ml-0"
//             >
//               Consistent on-time delivery boosts reliability and customer
//               confidence by ensuring prompt and efficient service.
//             </motion.p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Banner;

"use client";

import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Quality Assurance",
    description:
      "Quality Assurance is not merely a checkpoint but a relentless pursuit of excellence at every phase. It's the commitment to perfection and the precision in each step that defines true quality.",
  },
  {
    title: "End-to-End Service",
    description:
      "End-to-end service ensures seamless integration and execution from initial concept to final delivery. By providing comprehensive support at every stage, it enhances efficiency and maintains high-quality standards throughout the entire process.",
  },
  {
    title: "Customer Satisfaction",
    description:
      "Customer satisfaction is the cornerstone of exceptional service, achieved through tailored solutions and responsive support. By prioritizing client needs and continuously improving based on feedback, businesses can foster long-term loyalty and exceed expectations.",
  },
  {
    title: "Robust Packaging",
    description:
      "Robust packaging is essential for ensuring the safety and integrity of products during transit and storage. With advanced materials and design techniques, it provides superior protection, reducing the risk of damage and enhancing overall product quality.",
  },
  {
    title: "On-Time Delivery",
    description:
      "On-time delivery is crucial for maintaining customer satisfaction and trust. By adhering to strict timelines and optimizing logistics, businesses ensure that products and services are delivered promptly and efficiently.",
  },
];

const services = [
  {
    name: "Aluminium Windows",
    description:
      "Experience superior durability and modern elegance with our Aluminium Windows, perfect for any contemporary architecture.",
  },
  {
    name: "Glass Railing Systems",
    description:
      "Enhance your space with our Glass Railing systems, offering clarity, style, and safety in one sophisticated package.",
  },
  {
    name: "Aluminium Glass Office Partition",
    description:
      "Create modern and efficient workspaces with our Office Partition solutions, designed for flexibility and aesthetics.",
  },
  {
    name: "Stainless Steel Queue Manager",
    description:
      "Ensure smooth crowd control with our robust Queue Manager Stainless Steel, combining strength and sleek design.",
  },
];

const Section = ({ title, children }) => (
  <section className="py-16 px-4">
    <div className="container mx-auto">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center text-primary  drop-shadow-lg mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      {children}
    </div>
  </section>
);

const FeatureCard = ({ feature }) => (
  <motion.div
    className="bg-gray-900 p-8 rounded-3xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h3 className="text-2xl poppins-semibold text-green-400 drop-shadow-lg mb-4">
      {feature.title}
    </h3>
    <p className="text-gray-400 poppins-extralight">{feature.description}</p>
  </motion.div>
);

const ServiceCard = ({ service }) => (
  <motion.div
    className="bg-gradient-to-br from-green-50 to-green-300 p-6 rounded-3xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h3 className="text-2xl poppins-semibold text-gray-700 drop-shadow-lg mb-2">
      {service.name}
    </h3>
    <p className="text-gray-600 poppins-extralight">{service.description}</p>
  </motion.div>
);

const Banner = () => {
  return (
    <div className="bg-gray-800">
      <Section title="Our Services">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:p-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </Section>

      <Section title="Why Selective Systems?">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:p-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Banner;
