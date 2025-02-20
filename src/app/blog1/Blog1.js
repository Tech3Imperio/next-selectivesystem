"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import BathroomPartition from "@/app/components/BathroomPartition/BathroomPartition";
// import { MdKeyboardArrowRight } from "react-icons/md";
import blog1 from "../assets/Blogs/blog1.webp";
import juhusite from "../assets/Blogs/jhusite.webp";
import jogeshwari from "../assets/Blogs/jogeshwari.webp";
import sivanta from "../assets/Blogs/sivanta.webp";
import solapur from "../assets/Blogs/solapur.webp";
const Blog1 = () => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const aluminiumRef = useRef(null); // Create a ref for the Aluminium component
  const [hoveredPost, setHoveredPost] = useState(null);

  const moveSlider = (direction) => {
    if (direction === "next") {
      setCurrentItemIndex((currentItemIndex + 1) % sliderItems.length);
    } else {
      setCurrentItemIndex(
        (currentItemIndex - 1 + sliderItems.length) % sliderItems.length
      );
    }
  };

  const handleThumbnailClick = (index) => {
    setCurrentItemIndex(index);
  };

  useEffect(() => {
    // Scroll to the top of the component when it comes into view
    if (aluminiumRef.current) {
      aluminiumRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentItemIndex]);
  const blogPosts = [
    {
      id: 1,
      title: "Mumbai Terrace Glass Railing: A Fusion of Elegance and Safety",
      excerpt:
        "We’re excited to share our latest project at Lotus Signature, a premium residential complex in Mumbai, where we’ve recently completed the installation of sophisticated terrace glass railings using the A50 Base and toughened glass. This modern glass railing solution offers more than just safety—it adds a sleek and stylish touch to the architectural design of the terrace, while preserving the panoramic views of the surrounding cityscape. Our choice of toughened glass ensures a high level of durability and safety, making it the perfect fit for both residential and commercial terrace spaces. The A50 Base complements the sleek, minimalistic aesthetic of the glass, resulting in a balcony glass railing system that’s as functional as it is beautiful. Whether it’s for enjoying a coffee on your terrace or hosting a gathering, this glass railing system guarantees an open, airy feel without compromising on security. Trust our expertise to deliver premium glass railing solutions tailored to your unique vision—solutions that stand the test of time in both design and durability.",

      imageUrl: jogeshwari,

      location: "Mumbai, Maharashtra",
    },
    {
      id: 2,
      title: "Terrace Glass Railing: Modern and sleek design",
      excerpt:
        "The terrace glass railing  in Juhu has been elegantly enhanced with state-of-the-art D75 glass railings, offering both safety and style. These glass railings provide an unobstructed view of the stunning surroundings, allowing residents to fully enjoy the beauty of their outdoor space without compromise. The D75 base ensures robust support while maintaining a sleek, modern aesthetic, making it a perfect choice for contemporary architecture. The installation process was meticulously executed to meet the highest standards of quality and design, ensuring durability and long-lasting performance. The glass panels are not only durable but also easy to maintain, making them ideal for the coastal environment of Juhu. This project exemplifies how glass railings can elevate the ambiance of a terrace, creating a seamless connection between indoor and outdoor living. With the addition of these premium glass railings, the terrace has become a serene retreat for relaxation and entertainment, showcasing the perfect fusion of functionality and elegance. Residents can now enjoy their outdoor space with peace of mind, knowing they are protected by high-quality materials designed to last.",
      imageUrl: juhusite,

      location: "Goa, Goa",
    },
    {
      id: 3,
      title:
        "Sleek View Terrace Glass Railing: Enhance Your Space with Uninterrupted Swimming Pool Views",
      excerpt:
        "The terrace glass railing project at Sivanta Apartments in Mumbai showcases a stunning blend of safety and sophistication. Utilizing a robust C75 aluminum base, this seamless glass railing system not only enhances the aesthetic appeal of the terrace but also provides a secure barrier for residents. The use of high-quality Sentry glass ensures durability and clarity, allowing for unobstructed views of the beautiful swimming pool below. The installation features an S50 handrail, adding a touch of elegance while ensuring a comfortable grip for users. This combination of materials creates a modern look that perfectly complements the architectural design of Sivanta Apartments. The glass panels are easy to maintain, making them ideal for outdoor environments, while the aluminum base offers excellent resistance to corrosion. This project exemplifies how thoughtful design can transform outdoor spaces into luxurious retreats. Residents can now enjoy their terrace with peace of mind, knowing they are protected by top-notch materials that prioritize both style and safety. The seamless integration of the glass railing system with the swimming pool area creates a harmonious outdoor experience, perfect for relaxation and entertainment in Mumbai.",
      imageUrl: sivanta,
      location: "Mumbai, Maharashtra",
    },
    {
      id: 4,
      title:
        "Premium Penthouse Terrace Glass Railing: Unmatched Elegance and Clear Views ",
      excerpt:
        "The terrace glass railing project in Belgoan, Chattisgarh combines coastal charm with safety and style. Featuring a durable L50 aluminum base, it provides robust support against the elements, making it ideal for outdoor spaces in seaside environments. The use of premium Sentry glass offers unobstructed views, creating a seamless flow between indoor and outdoor areas. Complemented by the sleek S12 handrail, the design enhances the terrace's aesthetic appeal while providing a comfortable grip. With low-maintenance, high-quality materials, this installation ensures long-lasting durability and peace of mind. The result is a luxurious, functional terrace, perfect for relaxation, entertainment, or quiet reflection—ideal for homeowners in Solapur and across Maharashtra seeking elegant glass railings that stand the test of time. ",
      imageUrl: solapur,
      location: "Belgoan ,Chattisgarh",
    },
  ];
  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      <div className="relative w-full h-96 mb-8">
        <Image
          src={blog1}
          alt="Blog Hero Image"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold text-center">
            Modern Terrace Railings
          </h1>
        </div>
      </div>
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16  mt-20"
      >
        <h2 className="text-3xl text-blue-950 font-semibold mb-4">
          Premium Balcony Glass Railing Dealer in Mumbai, Maharashtra, and All
          Over India.
        </h2>
        <p className="text-lg text-gray-600 italic">
          Enhance the beauty and safety of your space with our high-quality
          glass railings, including modern frameless balcony systems...
        </p>
      </motion.header>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-20 max-w-7xl mx-auto mb-14 flex flex-col "
      >
        {blogPosts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative"
            onHoverStart={() => setHoveredPost(post.id)}
            onHoverEnd={() => setHoveredPost(null)}
          >
            <div className="flex flex-col md:flex-row items-center md:items-start overflow-hidden space-y-8 md:space-y-0 md:space-x-12">
              <motion.div
                className="overflow-hidden w-full md:w-1/2 aspect-video relative"
                whileHover={{ scale: 1.05 }}
              >
                <div className="overflow-hidden rounded-4xl">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-auto rounded-4xl"
                    layout="fill"
                  />
                </div>
              </motion.div>
              <div className="w-full md:w-1/2 space-y-4">
                <motion.h2
                  className="text-3xl text-[--third] text-blue-800"
                  animate={{ x: hoveredPost === post.id ? 20 : 0 }}
                >
                  {post.title}
                </motion.h2>
                <p className="text-[16px] text-[#393939] text-justify ">
                  {post.excerpt}
                </p>
                <p className="text-sm uppercase text-[--third]">
                  {post.location}
                </p>
              </div>
            </div>
            <motion.div
              className="absolute left-0 right-0 h-px bg-black mt-12"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: hoveredPost === post.id ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
};

export default Blog1;
