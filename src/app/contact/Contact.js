"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import email from "../assets/Contact/email.png";
import location from "../assets/Contact/location.png";
import contact from "../assets/Contact/contact.png";
import { FadeDown, FadeUp } from "../components/utility/animation";
import { motion } from "framer-motion";

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
    setIsLoader(true); // Set loader to true when submitting

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setFormData({ name: "", email: "", whatsappNo: "", message: "" });
        router.push("/"); // Redirect to homepage after successful submission
      } else {
        // If the response is not ok, log the error response
        const errorText = await response.text();
        console.error("Error submitting form:", errorText);
        alert("There was an error. Please try again.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      alert("There was an error. Please try again.");
    } finally {
      setIsLoader(false); // Reset the loader state after the request
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative min-h-screen bg-gray-100">
      {/* Contact Information Section */}
      <motion.div
        variants={FadeDown(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="pt-44  rounded-b-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-500"
      >
        <div className="container mx-auto px-4 md:px-0">
          <div className="text-center mb-12">
            <h1 className="text-4xl  din-bold">CONTACT US</h1>
          </div>
          <div className="flex flex-wrap justify-center space-y-4 md:space-y-0">
            {/* Contact Info Cards */}
            <div className="w-full md:w-1/3 p-4">
              <motion.div
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="bg-secondary border p-6 shadow-lg rounded-2xl text-center"
              >
                <div className="flex justify-center mb-4">
                  <Image src={email} alt="Email Icon" className="w-12 h-12" />
                </div>
                <h3 className="text-xl din-bold mb-2">Email Address</h3>
                <p className="roboto-light">info@selectivesystems.in</p>
              </motion.div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-secondary p-6 shadow-lg border rounded-2xl text-center">
                <div className="flex justify-center mb-4">
                  <Image src={contact} alt="Phone Icon" className="w-12 h-12" />
                </div>
                <h3 className="text-xl din-bold mb-2">Phone Number</h3>
                <p className=" roboto-light">+91 9372593981</p>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="w-full md:w-1/3 p-4"
            >
              <div className="bg-secondary p-6 border shadow-lg rounded-2xl text-center">
                <div className="flex justify-center mb-4">
                  <Image
                    src={location}
                    alt="Location Icon"
                    className="w-12 h-12"
                  />
                </div>
                <h3 className="text-xl din-bold mb-2">Office Address</h3>
                <p className="roboto-light">
                  Aman Chambers Charni Road East, Mumbai 400004
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Contact Form Section */}
      <div className="flex justify-center items-center py-12 bg-white">
        <motion.div
          variants={FadeUp(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full max-w-lg bg-secondary rounded-2xl p-8 shadow-lg"
        >
          <h2 className="text-3xl md:text-4xl din-bold text-center  mb-4">
            Get in Touch
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-base roboto-light ">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                />
              </div>
              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-base roboto-light "
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
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                />
              </div>
              {/* WhatsApp No */}
              <div>
                <label
                  htmlFor="whatsappNo"
                  className="block text-base roboto-light "
                >
                  WhatsApp No
                </label>
                <input
                  type="tel"
                  id="whatsappNo"
                  name="whatsappNo"
                  value={formData.whatsappNo}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                />
              </div>
              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-base roboto-light "
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
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-gradient-to-br from-gray-200 to-gray-400 w-full py-3 text-xl font-semibold  rounded-2xl shadow-sm "
              >
                {isLoader ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </main>
  );
};

export default Contact;
