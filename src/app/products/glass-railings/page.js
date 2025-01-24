import React from "react";
// import GlassRailingLayout from "../../components/GlassRailing/GlassRailingLayout";
import GlassRailings from "./GlassRailings";
import glassrailing from "../../assets/Railing/HeroImage/railing2.jpg";

export const metadata = {
  title:
    "Glass Railing | Frameless & Framed Glass Railings | Selective Systems",
  description:
    "Enhance your property with stylish glass railings by Selective Systems. Offering both framed and frameless glass railings for balconies, staircases, and more. Enjoy modern design, superior safety, and clear views. Tailor your glass railing systems to match your style and functionality needs.",
  keywords: [
    "Glass Railings, Frameless Glass Railing, Framed Glass Railing, Balcony Glass Railing, Staircase Glass Railing, Tempered Glass, Laminated Glass, Modern Glass Railing, Glass Railing Systems, Aluminium Glass Railings, Indoor Glass Railings, Outdoor Glass Railings, Customizable Glass Railings, Glass Balustrades, Glass Fencing, Safety Glass Railing, Transparent Glass Railings, Mumbai, Maharashtra, India, Dubai, Russia, China, Japan",
  ],
  icon: "./favicon.ico",
  content: "https://selectivesystems.in/products/glass-railings",
  openGraph: {
    type: "website",
  },
  url: "https://selectivesystems.in/products/glass-railings",
  image: glassrailing,
};

export default function page() {
  return (
    <>
      {/* <GlassRailingLayout /> */}
      <GlassRailings />
    </>
  );
}
