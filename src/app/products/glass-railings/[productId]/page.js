"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound, usePathname } from "next/navigation";
import { useState } from "react";
import Doorseals1 from "../../../assets/Railing/RailingProducts/ModernBalcony.webp";
import Doorseal2 from "../../../assets/Railing/RailingProducts/TopMountedImg.webp";
import FramedGlassImg from "../../../assets/Railing/RailingProducts/FramedGlassImg.webp";

import { IoChevronUp, IoChevronDown } from "react-icons/io5";
//Gallery
import floorthresholdupper from "../../../assets/Gallery/GlassRailing/FramelessImages/IMPERIO-A50-SILVER.webp";
import TopmuntedProduct from "../../../assets/Gallery/GlassRailing/Topmounted/IMPERIO-L50-SILVER-2.webp";
import TopMuntedBalcony from "../../../assets/Gallery/GlassRailing/Topmounted/TopBalcony.webp";
import threshold from "../../../assets/Gallery/GlassRailing/FramedGlassImg/IMPERIO-F55-SILVER.webp";

const GlassRailingProductsPanel = [
  {
    id: "frameless-glass-railing",
    images: [Doorseals1, floorthresholdupper],
    ProductName: "Frameless Glass Railing",
    description:
      "Our frameless glass railing system combines modern design with exceptional safety and durability. Crafted from premium tempered glass and aluminum, it’s available in customizable matte and glossy finishes. Perfect for balconies, staircases, and outdoor spaces, our railings offer easy installation, minimal maintenance, and long-lasting performance, ensuring both style and security for residential and commercial properties.",
    features: [
      "Sleek, modern design with frameless glass for a seamless look",
      "Made from high-quality tempered glass and durable aluminum",
      "Customizable in matte or glossy finishes for enhanced aesthetics",
      "Easy and quick installation with minimal maintenance required",
      "Resistant to weathering and corrosion, ideal for both residential and commercial.",
    ],
    dimensions: [
      { name: "Finish Options", value: "  4 colors available" },
      { name: "Height & Width", value: " 117 mm (Height) x 95 mm (Width)" },
      {
        name: "Length",
        value:
          "Available in customizable lengths ranging from 12 feet to 15 feet",
      },
      {
        name: "Material",
        value: "High-quality aluminum construction for durability and strength",
      },
      {
        name: "Fastening",
        value:
          "Base profile with pre-drilled holes for easy installation; flat insert with supplied holding cams for secure fastening",
      },
      {
        name: "For More Information",
        value: "https://imperiorailing.com",
      },
    ],
    longDescription: {
      title:
        "Transform Your Home or Business with Premium Frameless Glass Railings, Offering Sleek and Modern Design, Superior Durability, and Maximum Safety. Perfect for Balconies, Staircases, and Outdoor Spaces, Our High-Quality Glass Railing Systems Provide Unmatched Style and Stability. Choose from Customizable Options with Matte or Glossy Finishes for a Tailored Solution to Suit Any Space.",
      features: [
        {
          name: "Sleek, Modern Design",
          description:
            "Our frameless glass railing system offers a sophisticated, contemporary design that seamlessly blends with any interior or exterior. Its minimalist aesthetic provides unobstructed views while enhancing the visual appeal of balconies, staircases, and outdoor spaces.",
        },
        {
          name: "Durable and High-Quality Materials",
          description:
            "Crafted from high-quality tempered glass and corrosion-resistant aluminum, our frameless glass railings are built to withstand the elements. These durable materials ensure longevity, low maintenance, and maximum safety, making them ideal for both residential and commercial applications.",
        },
        {
          name: "Maximum Safety and Stability",
          description:
            "Safety is a priority with our frameless glass railing systems. The glass panels are securely fastened with premium aluminum profiles, ensuring a stable and sturdy installation. Perfect for high-traffic areas, balconies, and staircases, these railings provide peace of mind without compromising on style.",
        },
        {
          name: "Customizable Design Options",
          description:
            "Our frameless glass railings offer customizable options, including matte and glossy finishes. You can choose from a variety of glass thicknesses and profile widths to suit your specific needs and design preferences, ensuring a perfect fit for any project.",
        },
        {
          name: "Easy Installation and Maintenance",
          description:
            "Designed for hassle-free installation, our frameless glass railing system comes with easy-to-follow instructions and a user-friendly assembly process. The system is also low-maintenance, requiring only occasional cleaning to maintain its crystal-clear appearance.",
        },
        {
          name: "Versatile Applications",
          description:
            "Our frameless glass railings are suitable for a wide range of applications, from modern residential homes to commercial buildings. Whether for balconies, staircases, or pool areas, these railings offer a versatile solution that enhances privacy, safety, and style.",
        },
      ],
    },

    specifications: [
      {
        name: "Glass Material",
        value: "Tempered safety glass for enhanced strength and durability",
      },
      {
        name: "Frame Material",
        value:
          "Premium corrosion-resistant aluminum for long-lasting performance",
      },
      {
        name: "Glass Thickness",
        value: "10 mm, 12 mm, or customizable based on design needs",
      },
      {
        name: "Profile Size",
        value: "Available in 40 mm or 60 mm wide aluminum profiles",
      },
      {
        name: "Finish Options",
        value:
          "Customizable in matte or glossy finishes to complement your design",
      },
      {
        name: "Height",
        value: "Customizable height to fit various architectural needs",
      },
      {
        name: "Safety Features",
        value:
          "Engineered for maximum stability and secure fastening with minimal maintenance",
      },
    ],

    installation:
      "Installing our frameless glass railings ensures a sleek, modern look combined with superior durability and safety for your space. We recommend professional installation to guarantee optimal performance and seamless integration. Our expert team provides a precise fit, ensuring that the glass railing system is securely fastened, stable, and fully compliant with safety standards. Whether you're in Mumbai, Delhi, Bengaluru, or anywhere across India, we offer customized installation services tailored to your needs. Proper installation is essential for maximizing the aesthetic appeal, stability, and longevity of the glass railing system. Trust our team for a hassle-free installation that enhances both functionality and design in your home, office, or commercial property.",
    maintenance: [
      "Frameless glass railings require minimal maintenance, offering long-lasting performance with minimal upkeep. To preserve their sleek and modern appearance, simply clean the glass panels with a soft cloth and mild soap solution",
      "Avoid harsh chemicals that could damage the glass surface. Regularly inspect the aluminum profiles for any signs of wear, ensuring that the fasteners remain secure for maximum safety.",
      "Periodically clean the installation area to maintain the railing’s pristine look and to ensure its continued functionality. With its durable construction and low-maintenance design, our frameless glass railing system provides a reliable and elegant solution for residential and commercial spaces.",
    ],
  },
  {
    id: "top-mounted-glass-raili",
    images: [Doorseal2, TopmuntedProduct, TopMuntedBalcony],
    ProductName: "Top Mounted Glass Railing",
    description:
      "At Selective Systems, we offer premium Top Mounted Glass Railing solutions designed to provide unmatched durability, style, and safety for your space. Our top-mounted glass railing system is engineered for a seamless, modern look, ideal for both residential and commercial applications. With easy installation and a secure, floating glass effect, this system ensures both stability and elegance. Whether for balconies, staircases, or terraces, our Top Mounted Glass Railings deliver long-lasting performance and aesthetic appeal. Perfect for enhancing the beauty and functionality of modern interiors and exteriors, these glass railings create an open, transparent space while providing superior safety and support.",
    features: [
      "Sleek design with a floating glass effect, enhancing aesthetics.",
      "Durable tempered glass for maximum strength and safety.",
      "Corrosion-resistant aluminum frame for long-term durability.",
      "Easy installation with top-mount brackets for secure fitting.",
      "Adjustable glass panels for versatile residential and commercial use.",
      "Securely mounted panels for enhanced safety and style.",
      "Ideal for balconies, staircases, terraces, and pool areas.",
    ],
    dimensions: [
      {
        name: "Finish Options",
        value: "Available in 4 colors: Black, Silver, Champagne, and Wooden",
      },
      {
        name: "Height & Width",
        value: "Customizable heights and 127 mm or 46 mm width profiles",
      },
      {
        name: "Length",
        value:
          "Customizable lengths ranging from 10 feet to 16 feet, suitable for various residential and commercial applications",
      },
      {
        name: "Material",
        value:
          "Premium laminated glass with corrosion-resistant aluminum frame",
      },
      {
        name: "Fastening",
        value: "Top-mount brackets for secure fitting and stable installation",
      },
      {
        name: "For More Information",
        value: "https://imperiorailing.com",
      },
    ],
    longDescription: {
      title:
        "Our Top Mounted Glass Railings from Selective Systems offer an elegant and secure solution for modern spaces. Designed to enhance both residential and commercial properties, these railings feature high-quality laminated glass with PVB or SGP interlayer options, ensuring superior strength, safety, and durability. With easy installation, customizable heights, and a sleek floating glass effect, our railings provide both aesthetic appeal and essential security. Whether you're outfitting a balcony, staircase, or terrace, our Top Mounted Glass Railings are the ideal choice for a stylish and robust finish.",
      features: [
        {
          name: "Premium Laminated Glass with PVB/SGP Interlayer",
          description:
            "Our Top Mounted Glass Railings feature laminated glass with PVB (Polyvinyl Butyral) or SGP (SentryGlas Plus) interlayers. These advanced materials enhance the strength and durability of the glass, offering a high level of protection against breakage, noise, and impact. This ensures optimal safety for residential and commercial applications while maintaining an elegant, transparent look.",
        },
        {
          name: "Durable Aluminum Frame",
          description:
            "The Top Mounted Glass Railings are framed with high-quality aluminum, offering resistance to corrosion and a sleek finish. This frame ensures long-lasting durability, making it perfect for both indoor and outdoor installations. The aluminum profile securely supports the laminated glass panels, providing stability and safety in all environments.",
        },
        {
          name: "Enhanced Safety and Security",
          description:
            "With laminated glass featuring PVB or SGP interlayers, our railings provide superior impact resistance. This enhances safety by minimizing the risk of glass breakage while offering reliable protection against accidents. The advanced technology used in laminated glass ensures that the railings remain intact even under significant pressure.",
        },
        {
          name: "Customizable Heights and Versatile Design",
          description:
            "Our Top Mounted Glass Railings come with customizable heights and can be adapted to a variety of designs and spaces, including balconies, staircases, terraces, and pool areas. Whether for a modern home or a commercial building, these railings offer a customizable and elegant solution that suits your specific needs.",
        },
        {
          name: "Sleek Floating Glass Effect",
          description:
            "The top-mounted installation method creates a floating glass effect, providing a clean and minimalist aesthetic. This design maximizes transparency and allows for unobstructed views, making it an ideal choice for modern interiors and exteriors, while ensuring safety and stability.",
        },
        {
          name: "Easy Installation and Secure Fitting",
          description:
            "Our Top Mounted Glass Railings are designed for easy installation with secure mounting brackets that ensure a stable fit. The straightforward installation process allows for quick setup, making them perfect for both residential and commercial projects. Whether for a new build or a renovation, these railings can be seamlessly integrated into any space.",
        },
        {
          name: "Energy-Efficient and Weather-Resistant",
          description:
            "Constructed from premium laminated glass and a corrosion-resistant aluminum frame, these railings are built to withstand the elements. The high-quality materials ensure weather resistance and provide energy efficiency by preventing heat loss, making them a sustainable option for modern properties.",
        },
        {
          name: "Versatile Application for Residential & Commercial Use",
          description:
            "Our Top Mounted Glass Railings are suitable for a wide range of applications, including residential homes, offices, hotels, and commercial buildings. These railings offer exceptional performance and aesthetic appeal, enhancing the safety and elegance of balconies, staircases, terraces, and pool areas.",
        },
        {
          name: "Minimalistic and Stylish Design",
          description:
            "With a modern and minimalist design, the Top Mounted Glass Railings add a touch of elegance to any space. The unobtrusive style ensures that the focus remains on the beauty of the glass and the surrounding environment, making it ideal for contemporary interiors and exteriors.",
        },
      ],
    },
    specifications: [
      {
        name: "Glass Type",
        value:
          "High-quality laminated glass with PVB or SGP interlayers for enhanced safety and durability",
      },
      {
        name: "Height Adjustment",
        value:
          "Customizable glass height to suit different residential and commercial spaces",
      },

      {
        name: "Material",
        value:
          "Premium aluminum frame with corrosion resistance for long-lasting durability",
      },
      {
        name: "Safety Rating",
        value:
          "Laminated glass with PVB/SGP ensures superior impact resistance for added security",
      },
      {
        name: "Installation",
        value:
          "Top-mounted installation with easy-to-secure brackets for a stable and strong fit",
      },
      {
        name: "Customization",
        value:
          "Available in various sizes, colors, and finishes to complement different interior and exterior designs",
      },
    ],
    installation:
      "Ensure superior stability and durability for your space with Selective Systems' Top Mounted Glass Railings. Our premium top-mounted installation system is designed to provide a secure and stable fit for both residential and commercial properties. The high-quality aluminum framing and laminated glass ensure long-lasting performance and safety. Whether you’re in Mumbai, Delhi, Bangalore, or anywhere across India, our glass railing systems offer seamless integration for balconies, staircases, terraces, and pool areas. The easy-to-install brackets and customizable height options make installation straightforward, ensuring that your glass railings are safely mounted and provide a modern aesthetic that enhances any space. Upgrade your property with Top Mounted Glass Railings for both exceptional design and durability.",
    maintenance: [
      "Wipe the glass panels with a soft cloth and a mild detergent solution to keep them free of dust, dirt, or debris.",
      "Check the aluminum frame and mounting brackets periodically for any signs of wear or loosening. Tighten any bolts or screws to maintain the secure fit and stability of the railings.",
      "While aluminum is corrosion-resistant, regularly inspect the top-mounted brackets for any damage, especially in areas exposed to harsh weather. Clean and reapply protective coatings if necessary.",
      "For optimal glass railing performance, consider applying a light lubricant to the bracket fittings to ensure smooth operation and long-lasting stability.",
      "If the laminated glass panels show any signs of damage or impact, consider replacing them to maintain the safety and aesthetic appeal of your space.",
    ],
  },
  {
    id: "frameds-glass-railingss",
    images: [FramedGlassImg, threshold],
    ProductName: "Framed Glass Railing",
    description:
      "Framed Glass Railings provide a stylish, durable, and secure solution for both residential and commercial spaces. Combining the strength of metal framing with the elegance of clear, tempered glass, they create an unobstructed view while ensuring safety and privacy. These railings are perfect for balconies, staircases, terraces, and pool areas, offering a modern aesthetic that complements any design. The sturdy metal framework, often made of aluminum or stainless steel, ensures long-lasting performance and resistance to the elements, while the glass panels provide a clean and sophisticated look. Whether you're enhancing your home or business, framed glass railings offer an ideal balance of beauty, security, and functionality, with minimal maintenance required.",
    features: [
      "Durable Aluminum or Stainless Steel Frame: Ensures long-lasting strength and stability",
      "Tempered Glass: Provides safety and clear, unobstructed views",
      "Modern Design: Adds elegance to balconies, staircases, and pool areas",
      "Easy Installation: Pre-drilled holes for quick and secure setup",
      "Low Maintenance: Minimal upkeep required while retaining aesthetic appeal",
      "Versatile: Perfect for residential and commercial spaces",
      "Weather Resistant: Withstands the elements for durable outdoor use",
    ],
    dimensions: [
      {
        name: "Finish Options",
        value: "Available in 4 colors: Black, Silver, Champagne, and Wooden",
      },
      {
        name: "Height & Width",
        value: "Customizable heights with 80 mm or 100 mm width profiles",
      },
      {
        name: "Length",
        value:
          "Customizable lengths ranging from 10 feet to 16 feet, perfect for both residential and commercial projects",
      },
      {
        name: "Material",
        value:
          "High-quality tempered glass with a robust aluminum or stainless steel frame",
      },
      {
        name: "Fastening",
        value:
          "Secure top-mount or side-mount brackets for stable and durable installation",
      },
      { name: "For More Information", value: "https://imperiorailing.com" },
    ],
    longDescription: {
      title:
        "Selective Systems is proud to present our high-quality Framed Glass Railings, the perfect solution to enhance the aesthetics and safety of your residential or commercial spaces. Our framed glass railings combine contemporary design with superior strength and durability, providing a sleek and modern touch to staircases, balconies, pool areas, and more. Crafted with precision, these railings are designed to provide clear, unobstructed views while offering maximum safety and support. Whether in Mumbai, Dubai, or any part of the world, our framed glass railings provide long-lasting performance and a refined look for any property.",
      features: [
        {
          name: "Modern & Elegant Design",
          description:
            "With their clean lines and durable glass panels, framed glass railings offer a contemporary and sophisticated look that complements any interior or exterior design. The robust aluminum or stainless steel frames support high-quality glass, creating a seamless, stylish barrier that enhances the beauty of staircases, terraces, and balconies.",
        },
        {
          name: "Enhanced Safety & Durability",
          description:
            "Our framed glass railings are engineered for maximum safety and performance. The high-quality tempered or laminated glass is designed to withstand impact and provide a secure barrier, while the sturdy frames ensure durability and long-term performance, making them ideal for both residential and commercial applications.",
        },
        {
          name: "Clear, Unobstructed Views",
          description:
            "Framed glass railings allow for unobstructed views, making them perfect for spaces where visibility is important, such as balconies, staircases, or pool areas. The transparent glass panels provide a modern and open feel while maintaining safety and stability.",
        },
        {
          name: "Weather Resistant & Low Maintenance",
          description:
            "Crafted from high-quality materials, including corrosion-resistant aluminum or stainless steel, and tempered glass, our framed glass railings are designed to withstand various weather conditions, including sun, rain, and wind. They are also easy to clean and maintain, ensuring that they retain their aesthetic appeal over time.",
        },
        {
          name: "Versatile Applications",
          description:
            "Ideal for both residential and commercial settings, framed glass railings are perfect for staircases, balconies, terraces, pool areas, and more. Their sleek design complements various architectural styles, making them an excellent choice for modern homes, offices, and high-end properties.",
        },
        {
          name: "Customizable Design Options",
          description:
            "Our framed glass railings can be tailored to fit the specific needs of your space. With various frame finishes and glass options available, including laminated or tempered glass, we offer customization to match your style and provide the perfect solution for your railing needs.",
        },
        {
          name: "Easy Installation & Secure Fit",
          description:
            "Designed with ease of installation in mind, our framed glass railings come with pre-drilled holes and a secure fastening system. This allows for quick and stable installation, whether for a new construction project or a renovation. The top-quality components ensure a firm and reliable fit for safety and durability.",
        },
      ],
    },
    specifications: [
      {
        name: "Can be shortened",
        value: "Yes, customizable to fit specific dimensions",
      },
      {
        name: "Profile size",
        value: "Available in 40 mm or 60 mm wide profiles",
      },
      {
        name: "Profile material",
        value: "Premium aluminum or stainless steel frame",
      },
      {
        name: "Glass material",
        value: "Tempered or laminated glass for enhanced safety and durability",
      },
      {
        name: "Length",
        value:
          "Customizable lengths to suit your project, up to 6000 mm or more",
      },
      {
        name: "Finish options",
        value:
          "Available in multiple finishes: Black, Silver, Champagne, and more",
      },
      {
        name: "Weather resistance",
        value: "Corrosion-resistant frame, suitable for all weather conditions",
      },
      {
        name: "Safety",
        value:
          "Glass panels are securely mounted, providing maximum safety and strength",
      },
    ],

    installation:
      "The installation of Selective Systems' Framed Glass Railings ensures a perfect combination of safety, durability, and aesthetic appeal. To achieve the best performance and secure fitting, we recommend professional installation by our expert team. Our installation process ensures precise fitting and integration of the high-quality glass panels within the aluminum or stainless steel frame. Whether you're in Mumbai, Bangalore, New York, or Dubai, our skilled technicians provide customized installation services to meet the unique needs of residential and commercial spaces. Proper installation not only enhances the safety and strength of your railing system but also contributes to its longevity and visual impact. Trust Selective Systems for expert installation that maximizes both the functionality and elegance of your glass railing system. Contact us today for professional installation services that guarantee the durability and performance of your framed glass railing.",
    maintenance: [
      "At Selective Systems, we believe that maintaining our premium Framed Glass Railings is simple and hassle-free. Built with high-quality materials and designed to withstand various environmental conditions, our glass railings are the perfect solution for modern homes, offices, and commercial spaces in Mumbai, Maharashtra.",
      "Routine maintenance for your Framed Glass Railings involves just a few easy steps: clean the glass panels and metal frames with a mild soap and water solution to maintain their sleek, modern appearance.",
      "It's important to regularly inspect the glass panels for any signs of damage or wear, ensuring that they remain clear and visually appealing. Clear any debris from the metal frame or mounting brackets to keep the system functioning smoothly.",
      "Regularly check the frame for signs of corrosion, particularly in areas exposed to the elements, and address any issues promptly.",
      "Framed Glass Railings provide long-lasting performance and safety, saving you time and effort while enhancing your property's aesthetic appeal. Selective Systems' glass railings offer superior durability, energy efficiency, and customizable solutions tailored to your needs.",
    ],
  },
];

const accordionData = [
  {
    title: "Why Choose Glass Railings for Your Home or Office",
    content:
      "Glass railings are an excellent choice for both residential and commercial properties, offering a sleek, modern design while enhancing safety. Whether you're installing frameless glass railings on balconies, staircases, or pool areas, they provide an unobstructed view and a stylish finish. Glass railings are also durable and weather-resistant, making them ideal for both indoor and outdoor spaces in cities like Mumbai, Delhi, and Dubai.",
  },
  {
    title: "Benefits of Glass Railings for Safety and Aesthetics",
    content:
      "Glass railings offer enhanced safety without compromising aesthetics. The tempered glass panels provide a robust barrier, while the aluminum frames offer support and durability. Whether you opt for frameless glass railings or balcony glass railings, they provide a clean, modern look that complements any design. These railings are perfect for balconies, staircases, terraces, and more, helping you create a beautiful and secure environment.",
  },
  {
    title: "Glass Railings for Unobstructed Views",
    content:
      "One of the key advantages of glass railings is the unobstructed view they offer. Whether you’re overlooking a beautiful garden, city skyline, or pool, frameless glass railings ensure that nothing obstructs your sightline. With clear, laminated PVB glass or SGP glass, you can enjoy both safety and an open view, making them perfect for balcony glass railings, staircase glass railings, and even pool glass railings.",
  },
  {
    title: "Durability and Maintenance of Glass Railings",
    content:
      "Glass railings are designed for longevity, made from durable tempered glass that’s resistant to impact and weathering. The aluminum framing ensures a sturdy structure, while the glass is easy to maintain. Cleaning is simple and requires only mild soap and water to keep the glass railing panels crystal clear. Whether you're in high-traffic areas like Mumbai or exposed to the elements in coastal cities, glass railings provide lasting performance with minimal maintenance.",
  },
  {
    title: "Weather Resistance and Protection with Glass Railings",
    content:
      "Our glass railings are ideal for withstanding harsh weather conditions. With high-quality aluminum frames and durable laminated glass panels, they’re built to resist extreme weather, including heavy rain, sun exposure, and coastal humidity. In cities like Mumbai and Dubai, where the weather can be unpredictable, glass railings provide an effective and stylish solution for balconies, staircases, and outdoor spaces.",
  },
  {
    title: "Where to Use Glass Railings in Your Home or Office",
    content:
      "Glass railings are versatile and can be used in many applications around your home or office. Ideal for balcony glass railings, staircase glass railings, pool glass railings, and even as interior glass partitions, they can be customized to suit your design needs. Frameless glass railings are especially popular in modern homes, hotels, and office spaces for their seamless and elegant look. Whether you're in Mumbai, Delhi, or Bengaluru, glass railings are a must-have to enhance both security and aesthetics.",
  },
];

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-4 px-6 text-left"
        onClick={onClick}
      >
        <span className="text-lg din-bold">{title}</span>
        {isOpen ? (
          <IoChevronUp className="w-6 h-6 text-gray-500" />
        ) : (
          <IoChevronDown className="w-6 h-6 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="py-4 px-6 bg-gray-50 shadow-md">
          <p className=" roboto-light">{content}</p>
        </div>
      )}
    </div>
  );
};

export default function ProductPage() {
  // console.log("path: ", params);
  const [openAccordion, setOpenAccordion] = useState(0);
  const pathname = usePathname();
  const fetchedId = pathname.slice(-23);
  console.log("fid:", fetchedId);
  const product = GlassRailingProductsPanel.find(
    (item) => item.id === fetchedId
  );

  if (!product) {
    notFound();
  }

  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  return (
    <>
      <div className="relative h-[500px] mb-8 rounded-lg overflow-hidden">
        <Image
          src={product.images[0]}
          alt={product.ProductName}
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-4xl font-bold text-white text-center din-bold">
            {product.ProductName}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8 ">
        <Link
          href="/products/glass-railings"
          className="text-blue-600 hover:underline mb-4 inline-block roboto-regular"
        >
          &larr; Back to All Windows
        </Link>
        <p className=" roboto-light text-justify"></p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex gap-4 md:flex-col pt-4 md:pt-14">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className={`relative h-20 w-20 border-2 rounded-md overflow-hidden ${
                    selectedImage === image
                      ? "border-blue-500"
                      : "border-gray-200"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.ProductName} thumbnail ${index + 1}`}
                    layout="fill"
                    loading="lazy"
                    objectFit="cover"
                  />
                </button>
              ))}
            </div>
            <div className="relative flex-grow  h-64 md:h-[500px]">
              <Image
                src={selectedImage}
                alt={product.ProductName}
                loading="lazy"
                className="rounded-lg object-fill"
              />
            </div>
          </div>

          <div className="flex flex-col pt-6 gap-6 mt-10">
            <div className="text-3xl text-center md:p-0 md:text-start din-bold ">
              {product.ProductName}
            </div>
            <h2 className=" roboto-light text-justify px-2">
              {product.description}
            </h2>
            <div>
              <div className="text-xl din-bold mb-2">Features:</div>
              <ul className="list-disc list-inside">
                {product.features.map((feature, index) => (
                  <li key={index} className="text-base roboto-light">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-black">
              <div className="text-xl din-bold">Dimensions:</div>
              <table className="min-w-full border-collapse border border-gray-300 table-auto mt-2">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="py-2 px-4 text-left din-bold border border-gray-300">
                      Name
                    </th>
                    <th className="py-2 px-4 text-left din-bold border border-gray-300">
                      Value
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {product.dimensions.map((dimension, index) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0 ? "bg-white" : "bg-gray-100"
                      }`}
                    >
                      <td className="py-2 px-4 font-semibold text-gray-700 border border-gray-300">
                        {dimension.name}
                      </td>
                      <td className="py-2 px-4 text-gray-700 border border-gray-300">
                        {/* Check if the value is a URL and render it as a clickable link */}
                        {dimension.name === "For More Information" ? (
                          <a
                            href="https://www.imperiorailing.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                          >
                            {dimension.value}
                          </a>
                        ) : (
                          dimension.value
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <section>
            <div className="text-2xl din-bold mb-4">Product Description</div>
            <h3 className="text-gray-800 mb-6 text-justify px-2">
              {product.longDescription.title}
            </h3>

            <main className="product-description py-4 px-4">
              <ul className="list-disc pl-6 space-y-6 roboto-light">
                {product.longDescription.features.map((feature, index) => (
                  <li key={index}>
                    <p className=" roboto-regular text-lg ">{feature.name}</p>
                    <p className="text-gray-700 mt-2 poppins-extralight text-justify">
                      {feature.description}
                    </p>
                  </li>
                ))}
              </ul>
            </main>
          </section>

          <div>
            {" "}
            <div className="text-2xl din-bold mb-4">Applications</div>
            <div className="rounded-lg overflow-hidden">
              {accordionData.map((item, index) => (
                <AccordionItem
                  key={index}
                  title={item.title}
                  content={item.content}
                  isOpen={openAccordion === index}
                  onClick={() =>
                    setOpenAccordion(openAccordion === index ? -1 : index)
                  }
                />
              ))}
            </div>
          </div>

          <section>
            <div className="text-2xl din-bold mb-4">Specifications</div>
            <div className="grid grid-cols-2 gap-4">
              {product.specifications.map((spec, index) => (
                <div key={index} className="bg-secondary p-4 rounded-lg">
                  <p className=" roboto-regular">{spec.name}</p>
                  <p className=" roboto-light text-base">{spec.value}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="text-2xl din-bold mb-4">Installation</div>
            <p className=" text-base roboto-light text-justify">
              {product.installation}
            </p>
          </section>

          <section>
            <div className="text-2xl din-bold mb-4">Maintenance</div>
            <p className="text-gray-700 text-base poppins-extralight text-justify">
              {product.maintenance}
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
