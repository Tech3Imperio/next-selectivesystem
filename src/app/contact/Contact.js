"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import email from "../assets/Contact/email-white.png";
import location from "../assets/Contact/location-white.png";
import contact from "../assets/Contact/contact-white.png";
import { FadeDown } from "../components/utility/animation";
import { motion } from "framer-motion";
import parallesBlackLaptop from "../assets/HeroImg/home_illustriation2_d.webp";
import parallesBlackPhone from "../assets/HeroImg/parallexBlackPhoneView.webp";
import Form from "../components/Form/Form";

const Contact = () => {
  const [isLoader, setIsLoader] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsappNo: "",
    message: "",
  });
  const [isMobile, setIsMobile] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [hasClosedOnce, setHasClosedOnce] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasClosedOnce) setIsOpen(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, [hasClosedOnce]);

  const handleClose = () => {
    setIsOpen(false);
    setHasClosedOnce(true);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <main className="relative bg-gradient-to-br from-gray-800 to-gray-600 py-20 w-screen overflow-hidden">
      <Form isOpen={isOpen} onClose={handleClose} />

      <div className="absolute inset-0">
        <Image
          src={isMobile ? parallesBlackPhone : parallesBlackLaptop}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="transition-opacity duration-300"
          priority
        />
      </div>

      <div className="relative container mx-auto py-10 px-4 md:px-0 text-center">
        <h1 className="text-4xl din-bold text-white mb-12">CONTACT US</h1>
        <div className="flex flex-wrap justify-center space-y-4 md:space-y-0">
          <div className="w-full md:w-1/3 p-4">
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="bg-black text-white border p-6 shadow-lg rounded-2xl text-center"
            >
              <div className="flex justify-center mb-6">
                <Image src={email} alt="Email Icon" className="w-12 h-12" />
              </div>
              <h3 className="text-xl din-bold mb-2">Email Address</h3>
              <p className="roboto-light">info@selectivesystems.in</p>
            </motion.div>
          </div>

          <div className="w-full md:w-1/3 p-4">
            <div className="bg-black text-white p-6 shadow-lg border rounded-2xl text-center">
              <div className="flex justify-center mb-6">
                <Image src={contact} alt="Phone Icon" className="w-12 h-12" />
              </div>
              <h3 className="text-xl din-bold mb-2">Phone Number</h3>
              <p className="roboto-light">+91 9372593981</p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-full md:w-1/3 p-4"
          >
            <div className="bg-black text-white p-6 border shadow-lg rounded-2xl text-center">
              <div className="flex justify-center mb-6">
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
          {/* "Book an Appointment" Button */}
          <div className="relative flex justify-center mt-8">
            <button
              onClick={handleOpen}
              className="rounded-[5px] bg-white px-4 py-3 text-black roboto-bold transition duration-700 border border-black hover:bg-white "
            >
              Book an Appointment
            </button>
          </div>
        </div>
      </div>

      {/* Embedded Google Map */}
      <div
        style={{
          position: "relative",
          width: "100vw",
          height: "50vh",
          boxSizing: "border-box",
          marginTop: "50px",
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.84352513496705!2d72.81715472488038!3d18.953672262667236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce3d2de2bdd7%3A0x6ebf171c718b4540!2sImperio%20Railing%20Systems!5e0!3m2!1sen!2sin!4v1719488265959!5m2!1sen!2sin"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            borderRadius: "10px",
            boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
          }}
          allowFullScreen
          loading="lazy"
        />
      </div>
    </main>
  );
};

export default Contact;
