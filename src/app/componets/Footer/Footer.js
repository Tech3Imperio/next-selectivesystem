"use client";
import React, { useState } from "react";
import {
  FaFacebookF as Facebook,
  FaXTwitter as Twitter,
  FaInstagram as Instagram,
  FaLinkedinIn as Linkedin,
} from "react-icons/fa6";
import blackLogo from "../../assets/Logo/blackLogo.png";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [modalMessage, setModalMessage] = useState("");

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

  return (
    <footer className="bg-[#e4e4e4] text-black-300 flex flex-col md:flex-row justify-evenly py-20 w-screen">
      <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
        <Link href="/">
          <Image
            src={blackLogo}
            className="w-48 mb-2"
            alt="Logo"
            loading="lazy"
          />
        </Link>
        <p>
          <Link
            href="/"
            target="_blank"
            className="text-black-300 hover:underline poppins-extralight"
          >
            Charni Road, Mumbai - 400004
          </Link>
        </p>
      </div>
      <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
        <div className="mb-2">
          <h5 className="poppins-regular text-xl">
            <b>Contact Us</b>
          </h5>
          <div className="mt-2">
            <p className=" poppins-regular">
              <span className="poppins-extralight">Phone Number :</span> +91
              9372593981
            </p>
            <p className="poppins-regular">
              <span className="poppins-extralight">Email : </span>
              info@selectivesystems.in
            </p>
            <p className=" poppins-regular">
              <span className="poppins-extralight">Website :</span>
              www.selectivesystems.in
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start text-xl">
          <h5 className="poppins-regular">
            <b>Follow Us</b>
          </h5>
          <div className="flex justify-start gap-4 text-xl">
            <Link target="_blank" href="/">
              <Facebook className="w-10 h-10 bg-[#25D366] text-white p-2 rounded-full hover:text-blue-500 transition duration-500" />
            </Link>
            <Link target="_blank" href="/">
              <Twitter className="w-10 h-10 bg-[#25D366] text-white p-2 rounded-full hover:text-black transition duration-500" />
            </Link>
            <Link target="_blank" href="/">
              <Instagram className="w-10 h-10 bg-[#25D366] text-white p-2 rounded-full hover:text-pink-600 transition duration-500" />
            </Link>
            <Link target="_blank" href="/">
              <Linkedin className="w-10 h-10 bg-[#25D366] text-white p-2 rounded-full hover:text-blue-600 transition duration-500" />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center md:items-start">
        <form
          className="flex flex-col md:flex-row items-center gap-4"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            name="emails"
            className=" px-3 py-2 w-64 font-semibold outline-none rounded-[3rem]"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className=" bg-[#25D366] text-white poppins-regular border rounded-[3rem] px-4 py-2 w-[7rem] hover:bg-secondary hover:text-black hover:border-black transition duration-500"
            id="button"
          >
            Subscribe
          </button>
          <div
            className="text-black  border-black border rounded-[3rem] px-4 py-2 bg-secondary"
            id="submited"
            style={{ display: "none" }}
          >
            Subscribed
          </div>
        </form>
        <div className="text-center md:text-left mt-4 opacity-50 poppins-extralight">
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
