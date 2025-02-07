"use client";
import React, { useState, useEffect } from "react";
import {
  FaFacebookF as Facebook,
  FaXTwitter as Twitter,
  FaInstagram as Instagram,
  FaLinkedinIn as Linkedin,
} from "react-icons/fa6";
import blackLogo from "../../assets/Logo/whiteLogo.png";
import Image from "next/image";
import Link from "next/link";
import parallesBlackLaptop from "../../assets/HeroImg/home_illustriation2_d.webp";
import parallesBlackPhone from "../../assets/HeroImg/parallexBlackPhoneView.webp";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [isMobile, setIsMobile] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const object1 = document.getElementById("submited");
    const object2 = document.getElementById("button");

    fetch(
      "https://script.google.com/macros/s/AKfycbwbxfnZuTky8UJ-NDgoJUuo2rLDviIQIg359ctB_oC3vguNnNqbSzD_2kZyj2qXYx0jXQ/exec",
      {
        method: "POST",
        body: JSON.stringify({
          from: "footer",
          email: email,
        }),
      }
    )
      .then((res) => res.text())
      .then((data) => {
        object1.style.display = "block";
        object2.style.display = "none";
        setEmail("");
        if (data === "Success") {
          setModalMessage("Thank you, your email has been submitted");
        } else if (data === "Email in database") {
          setModalMessage("This email already exists. Please contact us.");
        }
      })
      .catch((error) => console.error("Error sending data:", error));
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <footer className="relative bg-gradient-to-br from-gray-800 to-gray-500 text-white flex flex-col md:flex-row justify-evenly py-20 w-screen overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={isMobile ? parallesBlackPhone : parallesBlackLaptop}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="transition-opacity duration-300"
          priority
        />
        {/* Overlay for readability */}
        {/* <div className="absolute inset-0 bg-black/50"></div> */}
      </div>
      <div className="relative flex flex-col items-center md:items-start mb-4 md:mb-0">
        <Link href="/">
          <Image
            src={blackLogo}
            className="w-48 mb-2 "
            alt="Logo"
            loading="lazy"
          />
        </Link>
        <p>
          <Link
            href="/"
            target="_blank"
            className="text-white-300 hover:underline roboto-light"
          >
            Charni Road, Mumbai - 400004
          </Link>
        </p>
        <p>
          <Link
            href="/privacypolicy"
            className="text-black-300 hover:underline roboto-light"
          >
            Terms of use Privacy Policy
          </Link>
        </p>
      </div>
      <div className="relative flex flex-col items-center md:items-start mb-4 md:mb-0">
        <div className="mb-2">
          <h5 className="din-bold text-xl">
            <b>Contact Us</b>
          </h5>
          <div className="mt-2">
            <p className=" roboto-light">
              <span className="din-regular">Phone No: </span> +91 9372593981
            </p>
            <p className="roboto-light">
              <span className="din-regular">Email: </span>
              info@selectivesystems.in
            </p>
            <p className=" roboto-light">
              <span className="din-regular">Website: </span>
              www.selectivesystems.in
            </p>
          </div>
        </div>
        <div className="relative flex flex-col items-center md:items-start text-xl">
          <h5 className=" din-bold py-1">
            <b>Follow Us</b>
          </h5>
          <div className="flex justify-start gap-4 text-xl">
            <Link target="_blank" href="/">
              <Facebook className="w-10 h-10 bg-black text-white p-2 rounded-full  transition duration-500" />
            </Link>
            <Link target="_blank" href="/">
              <Twitter className="w-10 h-10 bg-black text-white p-2 rounded-full  transition duration-500" />
            </Link>
            <Link target="_blank" href="/">
              <Instagram className="w-10 h-10 bg-black text-white p-2 rounded-full  transition duration-500" />
            </Link>
            <Link target="_blank" href="/">
              <Linkedin className="w-10 h-10 bg-black text-white p-2 rounded-full  transition duration-500" />
            </Link>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col items-center md:items-start">
        <form
          className="flex flex-col md:flex-row items-center gap-4"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            name="emails"
            className=" px-3 py-2 w-64 din-bold outline-none rounded-[5px]"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className=" bg-white text-black roboto-semibold rounded-[5px] px-4 py-2 w-[7rem] hover:bg-white  hover:text-black hover:border-black hover:scale-110 transition duration-700"
            id="button"
          >
            Subscribe
          </button>
          <div
            className="text-black  border-black border rounded-[5px] px-4 py-2 bg-white"
            id="submited"
            style={{ display: "none" }}
          >
            Subscribed
          </div>
        </form>
        <div className="text-center md:text-left mt-4 roboto-light">
          <p>&copy; 2024 Selective-Systems</p>
        </div>
      </div>
      {modalMessage && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white text-black p-6 rounded shadow-lg max-w-md w-full text-center relative">
            <span
              className="absolute top-0 right-2 text-2xl cursor-pointer text-gray-500 hover:text-black"
              onClick={() => setModalMessage("")}
            >
              &times;
            </span>
            <p>{modalMessage}</p>
          </div>
        </div>
      )}
    </footer>
  );
};
