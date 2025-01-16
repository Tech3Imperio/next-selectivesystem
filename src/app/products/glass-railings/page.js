import React from "react";
// import GlassRailingLayout from "../../components/GlassRailing/GlassRailingLayout";
import GlassRailings from "./GlassRailings";

export const metadata = {
  title: "Glass Railing | Balcony Glass Railing | Selective Systems",
  description:
    "Transform your space with aluminium glass railings. Experience clear views, modern design, and safety. Tailor your railings to fit your unique style.",
  keywords: [
    "Aluminium Windows, Door seals, Glass Railings, Invisible Grill, Office Partitions, Bathroom Partitions, Queue Manager, Customizable Options, Mumbai, Charni Road, Andheri, Bandra, Borivali, Pune, Maharashtra, India, Dubai, Russia, China, Japan",
  ],
  icon: "./favicon.ico",
  content: "https://selectivesystems.in/products/glass-railings",
  openGraph: {
    type: "website",
  },
  url: "https://selectivesystems.in/products/glass-railings",
};

export default function page() {
  return (
    <>
      {/* <GlassRailingLayout /> */}
      <GlassRailings />
    </>
  );
}
