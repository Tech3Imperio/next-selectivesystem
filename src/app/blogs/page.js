export const dynamic = "force-dynamic";

import React from "react";
import Blog from "./Blog";
import getBlogsData from "./getBlogsData";
export const metadata = {
  title:
    "Selective Systems: Premium Aluminium Windows | Glass Railing in Mumbai | Tostem Partener ",
  description:
    "Discover Selective Systems, a leading provider of high-quality aluminium windows and glass railing solutions. Offering modern aluminium window designs, Balcony windows, and top-tier Tostem windows in Mumbai, we provide exceptional products with excellent durability and design. As a trusted Tostem channel partner, we offer the best modern glass railing, waterproof windows, and air leverage windows to enhance the aesthetic appeal and security of your space. Whether you’re looking for stylish balcony windows near me or advanced imperio glass railings, Selective Systems is your ultimate destination for premium window and railing solutions.",
  keywords: [
    "Aluminium windows in Mumbai",
    "Tostem windows",
    "Best aluminum windows",
    "Balcony windows near me",
    "Tostem channel partner",
    "Glass railing",
    "Modern aluminum window design",
    "Modern glass railing",
    "Imperio glass railing",
    "Waterproof window",
    "Air leverage window",
    "Premium aluminium windows",
    "Aluminium windows for high-rise buildings",
    "Mumbai windows solutions",
    "Aluminium windows in India",
    "Glass railing systems",
    "High-quality window solutions",
  ],
  url: "https://www.selectivesystems.in/blogs",
};

export default async function page() {
  const blogsData = await getBlogsData();
  const blogs = blogsData.filter((blog) => blog.isDraft === false);
  console.log("These are the blogs", blogs);
  return <Blog blogsData={blogs} />;
}
