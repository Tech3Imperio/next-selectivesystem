"use client";
import React, { useState, useEffect } from "react";
// const apiUrl = process.env.REACT_APP_API_URL;
// import { BASE_URL } from "../../../src/";
import email from "../assets/Contact/email.png";
import location from "../assets/Contact/location.png";
import contact from "../assets/Contact/contact.png";
import { FadeDown, FadeUp } from "../componets/utility/animation";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Contact = () => {
  const [isLoader, setIsLoader] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsappNo: "",
    message: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ name: "", email: "", whatsappNo: "", message: "" });
        router.push("/");
      } else {
        const errorData = await response.json();
        console.error("Error submitting form:", errorData.message);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-gray-800 relative min-h-screen">
      {/* info open */}
      <motion.div
        variants={FadeDown(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="pt-24 mb-14 rounded-b-[2rem] overflow-hidden"
      >
        <div className="container mx-auto">
          <div className="flex justify-center mb-12">
            <div className="text-center">
              <h6 className="text-primary mb-10 poppins-regular flex justify-center items-center text-4xl">
                Selective Systems
              </h6>
              <h1 className="text-2xl text-secondary poppins-regular">
                CONTACT US
              </h1>
            </div>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 p-4">
              <motion.div
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="bg-secondary border p-6 shadow-lg rounded-[2rem]"
              >
                <div className="flex justify-center mb-4">
                  <Image src={email} alt="Icon3" className="w-12 h-12" />
                </div>
                <h3 className="text-xl poppins-regular text-center mb-2">
                  Email Address
                </h3>
                <p className="text-center poppins-extralight">
                  info@selectivesystems.in
                </p>
              </motion.div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-secondary  p-6 shadow-lg border rounded-[2rem]">
                <div className="flex justify-center mb-4">
                  <Image src={contact} alt="Icon1" className="w-12 h-12" />
                </div>
                <h3 className="text-xl poppins-regular text-center mb-2">
                  Phone Number
                </h3>
                <p className="text-center poppins-extralight">+91 9372593981</p>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="w-full md:w-1/3 p-4"
            >
              <div className="bg-secondary p-6 border shadow-lg rounded-[2rem]">
                <div className="flex justify-center mb-4">
                  <Image src={location} alt="Icon2" className="w-12 h-12" />
                </div>
                <h3 className="text-xl poppins-regular text-center mb-2">
                  Office Address
                </h3>
                <p className="text-center poppins-extralight">
                  Aman Chambers Charni Road East, Mumbai 400004
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
      {/* info close */}

      <div className="flex justify-center items-center min-h-7xl">
        <motion.div
          variants={FadeUp(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-4 bg-secondary rounded-[4rem] w-[77%] flex justify-center items-center"
        >
          <div>
            <div className="max-w-md mx-auto mb-4">
              <h2 className=" text-primary text-3xl md:text-4xl poppins-semibold flex justify-center p-4">
                Get in Touch
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4 px-4">
                <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-[12rem] justify-center">
                  <div className="w-full md:w-1/2 md:-ml-[12rem]">
                    <label
                      htmlFor="name"
                      className="block text-base ml-3 poppins-extralight text-gray-800 md:ml-24 md:text-base lg:text-lg xl:-ml-[6.8rem]"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1 block h-[3rem] w-full px-3 py-2 border border-gray-300 rounded-[2rem] shadow-sm md:h-[2.5rem] md:w-[19rem] md:ml-24 lg:h-[2.8rem] lg:w-[20rem] xl:h-[3rem] xl:w-[30rem] xl:-ml-[7rem] focus:outline-none focus:ring-[#25D366] focus:border-[#25D366]"
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <label
                      htmlFor="email"
                      className="block text-base ml-3 poppins-extralight text-gray-800 md:text-base lg:text-lg"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1 block h-[3rem] w-full px-3 py-2 border border-gray-300 rounded-[2rem] md:h-[2.5rem] md:w-[19rem] lg:h-[2.8rem] lg:w-[20rem] xl:h-[3rem] xl:w-[30rem] shadow-sm focus:outline-none focus:ring-[#25D366] focus:border-[#25D366]"
                    />
                  </div>
                </div>
                <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-[15rem]">
                  <div className="w-full md:w-1/2 md:-ml-[12.6rem]">
                    <label
                      htmlFor="whatsappNo"
                      className="block text-base ml-3 poppins-extralight text-gray-800 md:ml-24 md:text-base lg:text-lg xl:-ml-[6.8rem]"
                    >
                      Whatsapp No
                    </label>
                    <input
                      type="tel"
                      id="whatsappNo"
                      name="whatsappNo"
                      value={formData.whatsappNo}
                      onChange={handleChange}
                      required
                      className="mt-1 block h-[3rem] w-full px-3 py-2 border border-gray-300 rounded-[2rem] md:h-[2.5rem] md:w-[19rem] md:ml-24 lg:h-[2.8rem] lg:w-[20rem] xl:h-[3rem] xl:w-[30rem] xl:-ml-[7rem] shadow-sm focus:outline-none focus:ring-[#25D366] focus:border-[#25D366]"
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <label
                      htmlFor="message"
                      className="block text-base ml-3 poppins-extralight text-gray-800 md:text-base md:-ml-[2rem] lg:text-lg"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="mt-1 block h-[3rem] w-full px-3 py-2 border border-gray-300 rounded-[2rem] md:-ml-[2rem]  md:h-[2.5rem] md:w-[19rem] lg:h-[2.8rem] lg:w-[20rem] xl:h-[3rem] xl:w-[30rem] resize-none shadow-sm focus:outline-none focus:ring-[#25D366] focus:border-[#25D366]"
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-[#25D366] w-[9rem] h-[3rem] mt-[2rem] harmony-regular text-xl text-white px-2 font-semibold rounded-[3rem] md:mt-3 lg:mt-6 xl:-ml-14 shadow-sm hover:text-black hover:bg-secondary hover:border hover:border-black hover:scale-110 transition duration-500 focus:outline-none focus:ring-[#25D366] focus:border-[#25D366]"
                  >
                    {isLoader ? "Sending..." : "Send"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Contact;
