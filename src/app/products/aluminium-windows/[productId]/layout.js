"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import { IoChevronUp, IoChevronDown } from "react-icons/io5";
//Gallery
import { BsFillTelephoneFill } from "react-icons/bs";
// import { accordionData } from "./data";

//Gallery
import singleFixedWindowFrame from "../../../assets/Gallery/aluminiumWndows/SingleFixedwindow.png";
import AccessorisFixedWindows from "../../../assets/Gallery/aluminiumWndows/aluminium-fixed-window.jpg";
import awningwindows from "../../../assets/Gallery/aluminiumWndows/AwningWindows/awning-window.png";
import awningwindowsBlack from "../../../assets/Gallery/aluminiumWndows/AwningWindows/awning-windowBlack.png";
import slidingWindowsBlack from "../../../assets/Gallery/aluminiumWndows/blackSliding/Sliding-Window.jpg";
import slidingWindowsCross from "../../../assets/Gallery/aluminiumWndows/blackSliding/aluminium-Sliding.jpeg";
import casementAluminumWindows from "../../../assets/Gallery/aluminiumWndows/casementWindows/aluminium-casement-window.jpeg";
import GlassCornerAluminumWindows from "../../../assets/Gallery/aluminiumWndows/GlassCornerWindows/Glass-to-Glass-Corner-Window.jpg";
import glassCorner from "../../../assets/Gallery/aluminiumWndows/GlassCornerWindows/wallGlassCorner.jpg";
import SeriesComponent from "../../../components/SeriesComponent/SeriesComponent";

import Awning from "../../../assets/AluminiumProduct/AluminiumCategories/AwningWindows/Awning-Window.jpg";
import Casement from "../../../assets/AluminiumProduct/AluminiumCategories/CasementDoors/casement-Window.jpg";
import Fixed from "../../../assets/AluminiumProduct/AluminiumCategories/FixedWindows/Fixed-Window-.jpg";
import French from "../../../assets/AluminiumProduct/AluminiumCategories/FrenchWindows/French-Windows.jpg";
import GlassToGlass from "../../../assets/AluminiumProduct/AluminiumCategories/GlassToGlassCornerWindows/Glass-to-Glass-Corner-Window.jpg";
import Sliding from "../../../assets/AluminiumProduct/AluminiumCategories/SlidingWindow/Sliding-Window.jpg";
import Slit from "../../../assets/AluminiumProduct/AluminiumCategories/SlitWindows/Slit-Window.jpg";
import Tilt from "../../../assets/AluminiumProduct/AluminiumCategories/TiltAndSlide/Tilt-slide-Window-size.jpg";
import Vertical from "../../../assets/AluminiumProduct/AluminiumCategories/VerticalSlide/Verticle-sliding-window.jpg";

import awningWindowWePlusSingleLock from "../../../assets/AluminiumProduct/AluminiumCategories/AwningWindows/Awning-window-Single-lock.png";
import casementWindow from "../../../assets/AluminiumProduct/AluminiumCategories/CasementDoors/aluminium-casement-window.webp";
import casementGrant from "../../../assets/AluminiumProduct/AluminiumCategories/CasementDoors/casementGrant.png";
import fixed1 from "../../../assets/Gallery/aluminiumWndows/aluminium-fixed-window.jpg";
import fixed2 from "../../../assets/Gallery/aluminiumWndows/SingleFixedwindow.png";
import corner from "../../../assets/AluminiumProduct/AluminiumCategories//GlassToGlassCornerWindows/corner.png";
import S4p2t from "../../../assets/AluminiumProduct/AluminiumCategories/SlidingWindow/4-panels-on-2-tracks-1.png";
import S4p2twp from "../../../assets/AluminiumProduct/AluminiumCategories/SlidingWindow/4-panels-on-2-tracks-weplus.png";
import S3p3t from "../../../assets/AluminiumProduct/AluminiumCategories/SlidingWindow/3panel-3track-weplus.png";
import S3p2t from "../../../assets/AluminiumProduct/AluminiumCategories/SlidingWindow/3-panel-on-2-tracks.png";
import S2p2t from "../../../assets/AluminiumProduct/AluminiumCategories/SlidingWindow/2-panels-on-2-tracks.png";
import S4p2tAtis from "../../../assets/AluminiumProduct/AluminiumCategories/SlidingWindow/ATIS-2-panels-on-2-tracks.png";
import Sd2p2t from "../../../assets/AluminiumProduct/AluminiumCategories/SlidingWindow/sliding-door-2-panels-on-2-tracks.png";
import Sd6p2t from "../../../assets/AluminiumProduct/AluminiumCategories/SlidingWindow/6-panels-on-3-tracks.png";
const AluminiumProductsPanel = [
  // categories
  {
    id: "awning-windows",
    images: [Awning, awningwindows, awningwindowsBlack],
    ProductName: "Modern Aluminium Awning Windows",
    series: [
      {
        seriesName: "Grant",
        products: [
          {
            productId: "awning-window-01",
            productName: "AWNING WINDOW",
            description:
              "In case of IG, please consult with our technician for size and performance.<br>Pleated insect screen available.<br>Glazing finish: 8 - 13.52mm (Glazing channel), 28 - 31.52mm (Glazing channel), Other glass (Sealant).",
            features: [
              "In case of IG, consult with our technician for size and performance",
              "Pleated insect screen available",
              "Glazing finish options: 8 - 13.52mm, 28 - 31.52mm, Other glass (Sealant)",
            ],
            dimensions: [
              { name: "Height", value: "3000mm" },
              { name: "Width", value: "650mm" },
            ],
            image: awningwindows,
          },
        ],
      },
      {
        seriesName: "ATIS",
        products: [
          {
            productId: "sliding-window-atis-01",
            productName: "AWNING WINDOW ( WITH SUBLOCK )",
            description:
              "In case of over 8mm glass thickness, please consult with our technician. Swing screen available",
            features: [
              "Frame Depth: 101.6 mm, 120 mm (2 tracks sliding), 178 mm (3 tracks sliding)",
              "Maximum Height of Door: 3,000 mm",
              "Height of Sill: 50 mm",
              "Glass Thickness: Up to 31.5 mm",
            ],
            dimensions: [
              { name: "Height", value: "1800mm" },
              { name: "Width", value: "1200mm" },
            ],
            image: awningwindows,
          },
          {
            productId: "sliding-window-atis-02",
            productName: "AWNING OPERATOR WINDOW",
            description:
              "In case of over 8mm glass thickness, please consult with our technician. Smart screen available",
            features: [
              "Frame Depth: 101.6 mm, 120 mm (2 tracks sliding), 178 mm (3 tracks sliding)",
              "Maximum Height of Door: 3,000 mm",
              "Height of Sill: 50 mm",
              "Glass Thickness: Up to 31.5 mm",
            ],
            dimensions: [
              { name: "Height", value: "1800mm" },
              { name: "Width", value: "1200mm" },
            ],
            image: awningwindows,
          },
          {
            productId: "sliding-window-atis-03",
            productName: "AWNING WINDOW ( SINGLE LOCK )",
            description:
              "In case of over 8mm glass thickness, please consult with our technician. Swing screen available",
            features: [
              "Frame Depth: 101.6 mm, 120 mm (2 tracks sliding), 178 mm (3 tracks sliding)",
              "Maximum Height of Door: 3,000 mm",
              "Height of Sill: 50 mm",
              "Glass Thickness: Up to 31.5 mm",
            ],
            dimensions: [
              { name: "Height", value: "1800mm" },
              { name: "Width", value: "1200mm" },
            ],
            image: awningwindows,
          },
          {
            productId: "sliding-window-atis-04",
            productName: "AWNING SLIT WINDOW",
            description:
              "In case of over 8mm glass thickness, please consult with our technician. Smart screen available. Select from Pully chain or orbit handle",
            features: [
              "Frame Depth: 101.6 mm, 120 mm (2 tracks sliding), 178 mm (3 tracks sliding)",
              "Maximum Height of Door: 3,000 mm",
              "Height of Sill: 50 mm",
              "Glass Thickness: Up to 31.5 mm",
            ],
            dimensions: [
              { name: "Height", value: "1800mm" },
              { name: "Width", value: "1200mm" },
            ],
            image: awningwindowsBlack,
          },
        ],
      },
      {
        seriesName: "WePlus",
        products: [
          {
            productId: "sliding-window-weplus-01",
            productName: "Awning Window (SINGLE LOCK)",
            description: "Insect screen available",
            features: [
              "Frame Depth: 72 mm",
              "Maximum Height of Window: 1,800 mm",
              "Height of Sill: 35 mm",
              "Glass Thickness: Up to 13.5 mm",
            ],
            dimensions: [{ name: "Height", value: "3000mm" }],
            image: awningWindowWePlusSingleLock,
          },
          {
            productId: "sliding-window-weplus-02",
            productName: "Awning Window (MULTI LOCK)",
            description: "Insect screen available",
            features: [
              "Frame Depth: 72 mm",
              "Maximum Height of Window: 2,000 mm",
              "Height of Sill: 35 mm",
              "Glass Groove: 11 mm",
              "Glass Thickness: Up to 13.5 mm",
            ],
            dimensions: [{ name: "Height", value: "3000mm" }],
            image: awningWindowWePlusSingleLock,
          },
        ],
      },
    ],
    description:
      "Modern Aluminium Awning Windows are perfect for spaces that require ventilation while protecting interiors from rain. Their top-hinged design allows for easy airflow even during bad weather, making them ideal for kitchens, bathrooms, and high-rise buildings. These windows are also highly durable, energy-efficient, and offer enhanced security, making them a popular choice for both residential and commercial applications.",
    features: [
      "Energy-Efficient: Keeps interiors cool in summer and warm in winter.",
      "Durable & Weather-Resistant: Withstands extreme weather.",
      "Low Maintenance: Easy to clean and requires minimal upkeep.",
      "Stylish Design: Sleek and modern, enhancing property aesthetics.",
      "Customizable: Available in various sizes and finishes to suit your need.",
    ],
    dimensions: [
      {
        name: "Frame Depth",
        value:
          "101.6 mm., 120 mm (2 tracks sliding), 178 mm (3 tracks sliding)",
      },
      { name: "Maximum Height of Window", value: "3,000 mm" },
      { name: "Height of Sill", value: "50 mm" },
      { name: "Glass Thickness", value: "Up to 31.5 mm" },
    ],
    longDescription: {
      title:
        "Selective Systems proudly presents our Aluminium Awning Windows, the perfect blend of functionality, style, and durability for modern homes, offices, and commercial spaces. Designed with precision, these windows allow for superior ventilation while offering protection from the elements, making them ideal for areas that need both fresh air and weather resistance. Whether in Mumbai, Dubai, or Tajikistan, our aluminium awning windows are built to withstand harsh conditions and elevate the aesthetics of any building.",
      features: [
        {
          name: "Sleek & Modern Design",
          description:
            "With their top-hinged design, aluminium awning windows offer a contemporary look that complements any architectural style. Their clean, minimal frame and outward opening mechanism provide a sleek aesthetic, making them a popular choice for both residential and commercial buildings that require a modern touch.",
        },
        {
          name: "Weather Resistance & Durability",
          description:
            "Crafted from high-quality aluminium, these windows are resistant to corrosion, rust, and extreme weather conditions. Whether it’s heavy rain in Mumbai or the intense sun of Dubai, our aluminium awning windows are designed to endure the elements, ensuring long-lasting performance and protection.",
        },
        {
          name: "Superior Ventilation & Airflow",
          description:
            "The top-hinged design of the aluminium awning window allows for excellent ventilation even during rainy weather. Open them at a slight angle to let in fresh air while keeping rain and debris out. Ideal for kitchens, bathrooms, and high-rise buildings, these windows provide constant airflow without compromising on protection.",
        },
        {
          name: "Energy Efficiency",
          description:
            "Engineered with energy efficiency in mind, our aluminium awning windows offer excellent insulation, helping to maintain comfortable indoor temperatures throughout the year. They keep interiors cooler in the summer and warmer in the winter, contributing to energy savings and reducing reliance on heating and cooling systems.",
        },
        {
          name: "Low Maintenance",
          description:
            "Aluminium is naturally resistant to weathering and corrosion, meaning our awning windows require minimal upkeep. A quick cleaning with mild soap and water is all that’s needed to maintain their sleek appearance. These low-maintenance windows are perfect for urban areas like Mumbai, Dubai, and Tajikistan, where dust and pollution can accumulate.",
        },
        {
          name: "Customizable Options",
          description:
            "Our aluminium awning windows come in a variety of sizes, finishes, and glass options, allowing for full customization to suit your specific needs. Whether you prefer double-glazed glass for improved insulation or a certain frame finish to match your design aesthetic, we provide tailored solutions to meet your requirements.",
        },
        {
          name: "Protection from the Elements",
          description:
            "These windows are designed to protect your interiors from rain, dust, and wind, even when fully open. The hinged design ensures that water does not enter, making them perfect for areas that experience frequent rainfall or strong winds. Whether in a coastal environment or a monsoon-prone region, aluminium awning windows provide a reliable, weather-resistant solution.",
        },
      ],
    },
    specifications: [
      { name: "Material", value: "High-grade aluminium" },
      { name: "Noise Insulation", value: "JIS: 25 dB" },
      { name: "Water Tightness", value: "ASTM E330: 300 Pa" },
      { name: "Wind Pressure Resistance", value: "ASTM E330: 2000 Pa" },
      { name: "Air Tightness", value: "ASTM E283: 10.7m3 / h·m2 " },
    ],
    installation:
      "The installation of Selective Systems' Aluminium Awning Windows is designed to provide exceptional performance, durability, and seamless integration with your property. For the best results, we recommend professional installation by our experienced team. We ensure a precise fit, providing optimal weather sealing and thermal insulation. Whether you're in Mumbai, Dubai, Tajikistan, or beyond, our installation services are tailored to meet the specific needs of your home or office. Proper installation enhances the energy efficiency, security, and functionality of your aluminium awning windows, allowing you to enjoy fresh air and protection from the elements for years to come. Trust Selective Systems for flawless installation that enhances both the aesthetics and performance of your property. Contact us today for expert window installation services and secure the long-term value of your investment.",
    maintenance: [
      "At Selective Systems, we believe that maintaining our premium aluminium awning windows is simple and hassle-free. Designed for modern homes, offices, and commercial spaces, these energy-efficient windows are built to withstand harsh weather conditions and the test of time. With minimal upkeep required, they are the perfect choice for properties in cities like Mumbai, Delhi, Bangalore, Chennai, Hyderabad, and other regions of India.",
      "Routine maintenance involves just a few easy steps: clean the frames and glass with mild soap and water to maintain their sleek, stylish appearance. To ensure your aluminium awning windows continue performing at their best, it's important to periodically check the window seals for wear and tear and remove any debris from the tracks. This simple maintenance helps retain their weather-resistant and insulation properties, ensuring your interiors stay cool in summer and warm in winter.",
      "Thanks to their durable construction and low-maintenance design, our windows provide long-lasting performance, saving you time and effort while enhancing your property's aesthetic appeal. Whether you're in Mumbai, Delhi, Chennai, Bangalore, or any other city, Selective Systems' aluminium awning windows offer superior durability and functionality, along with customizable solutions tailored to your needs.",
      "By following these easy maintenance tips, you can enjoy the beauty, energy efficiency, and reliable performance of your Selective Systems windows for many years to come, ensuring they continue to perform well in all weather conditions.",
    ],
  },
  {
    id: "casement-aluminium-window",
    images: [Casement, casementWindow],
    ProductName: "Modern Aluminium Casement Window",
    series: [
      {
        seriesName: "Grant",
        products: [
          {
            productId: "casement-window-01",
            productName: "CASEMENT WINDOW ( WITH FRICTION STAY )",
            description:
              "In case of IG, please consult with our technician for size and performance.Pleated insect screen available.Glazing finish: 8 - 13.52mm (Glazing channel), 28 - 31.52mm (Glazing channel), Other glass (Sealant).",
            features: [
              "In case of IG, consult with our technician for size and performance",
              "Pleated insect screen available",
              "Glazing finish options: 8 - 13.52mm, 28 - 31.52mm, Other glass (Sealant)",
            ],
            dimensions: [
              { name: "Height", value: "2000mm" },
              { name: "Width", value: "800mm" },
            ],
            image: casementGrant,
          },
          {
            productId: "casement-window-02",
            productName: "CASEMENT WINDOW ( WITH HINGE OR PIVOT )",
            description: `In case of IG, please consult with our technician for size and performance.
                          Pleated insect screen available.
                          Glazing finish: 
                          8 - 13.52mm (Glazing channel), 
                          28 - 31.52mm (Glazing channel), 
                          Other glass (Sealant).
                        `,
            features: [
              "Select from L/R",
              "Pleated insect screen available",
              "Glazing finish: 8 - 13.52mm (Glazing channel), 28 - 31.52mm (Glazing channel), Other glass (Sealant)",
            ],
            dimensions: [
              { name: "Height", value: "3000mm" },
              { name: "Width", value: "1000mm" },
            ],
            image: casementGrant,
          },
        ],
      },
      {
        seriesName: "ATIS",
        products: [
          {
            productId: "casement-window-atis-01",
            productName: "CASEMENT WINDOW ( WITH SUBLOCK )",
            description: `
                          In case of over 8mm glass thickness, please consult with our technician. 
                          Swing screen available. 
                          Safety arm option. 
                          Select from L/R.
                        `,
            features: [
              "Height of Sill: 35 mm, 50 mm (for all sliding)",
              "Glass Groove: 11 mm",
              "Glass Thickness: 5 mm, 6 mm, 8 mm",
            ],
            dimensions: [
              { name: "Height", value: "1800mm" },
              { name: "Width", value: "800mm" },
            ],
            image: casementGrant,
          },
          {
            productId: "casement-window-atis-02",
            productName: "CASEMENT WINDOW ( SINGLE LOCK )",
            description:
              "In case of over 8mm glass thickness, please consult with our technician. Swing screen available. Safety arm available",
            features: [
              "Height of Sill: 35 mm, 50 mm (for all sliding)",
              "Glass Groove: 11 mm",
              "Glass Thickness: 5 mm, 6 mm, 8 mm",
            ],
            dimensions: [
              { name: "Height", value: "1800mm" },
              { name: "Width", value: "1200mm" },
            ],
            image: casementGrant,
          },
        ],
      },
      {
        seriesName: "WePlus",
        products: [
          {
            productId: "casement-window-weplus-01",
            productName: "CASEMENT WINDOW (SINGLE LOCK) ",
            description: `Insect screen available
                          Select from L/R
                          Safety arm (Optional
                          `,
            features: [
              "Frame Depth: 72 mm",
              "Maximum Height of Window: 1,800 mm",
              "Height of Sill: 35 mm",
              "Glass Thickness: Up to 13.5 mm",
            ],
            dimensions: [
              { name: "Height", value: "1800mm" },
              { name: "Width", value: "800mm" },
            ],
            image: casementGrant,
          },
          {
            productId: "casement-window-weplus-02",
            productName: "CASEMENT WINDOW (MULTI LOCK)",
            description: `Insect screen NOT available
                          Select from L/R
                          Safety arm (Optional
                          `,
            features: [
              "Frame Depth: 72 mm",
              "Maximum Height of Window: 2,000 mm",
              "Height of Sill: 35 mm",
              "Glass Groove: 11 mm",
              "Glass Thickness: Up to 13.5 mm",
            ],
            dimensions: [
              { name: "Height", value: "2000mm" },
              { name: "Width", value: "800mm" },
            ],
            image: casementGrant,
          },
        ],
      },
    ],
    description:
      "Premium Aluminium Casement Windows designed for superior ventilation and energy efficiency. These windows open outward on hinges, offering a perfect blend of style and functionality.",
    features: [
      "Energy-Efficient: Keeps interiors comfortable year-round.",
      "Excellent Ventilation: Opens fully for maximum airflow.",
      "Weather & Noise Resistant: Sealed tightly for superior insulation.",
      "Secure Locking System: Enhanced safety with multi-point locking.",
      "Customizable: Available in various sizes, finishes, and glass options.",
    ],
    dimensions: [
      { name: "Frame Depth", value: "101.6 mm, 120 mm" },
      { name: "Maximum Height", value: "2,500 mm" },
      { name: "Glass Thickness", value: "Up to 31.5 mm" },
    ],
    longDescription: {
      title: "Superior Aluminium Casement Windows for Modern Spaces",
      features: [
        {
          name: "Sleek & Contemporary Design",
          description:
            "The aluminium casement window features a slim frame, offering a modern and minimalistic look that enhances any home or commercial building.",
        },
        {
          name: "Exceptional Ventilation",
          description:
            "Casement windows open wide on hinges, allowing for superior airflow and fresh air circulation, making them ideal for bedrooms, living rooms, and offices.",
        },
        {
          name: "Weather Resistance & Durability",
          description:
            "Crafted from high-quality aluminium, these windows are resistant to corrosion, rust, and extreme weather, ensuring long-lasting performance.",
        },
        {
          name: "Energy Efficiency",
          description:
            "Designed with a tight seal and high-performance glass options, these windows help reduce heat transfer, improving insulation and energy savings.",
        },
        {
          name: "Enhanced Security",
          description:
            "Equipped with multi-point locking systems, our aluminium casement windows provide robust security and peace of mind.",
        },
        {
          name: "Customizable Options",
          description:
            "Available in a variety of finishes, colors, and glazing options to match your design needs.",
        },
      ],
    },
    specifications: [
      { name: "Material", value: "High-grade aluminium" },
      { name: "Noise Insulation", value: "JIS: 30 dB" },
      { name: "Water Tightness", value: "ASTM E330: 450 Pa" },
      { name: "Wind Pressure Resistance", value: "ASTM E330: 2400 Pa" },
      { name: "Air Tightness", value: "ASTM E283: 8.5m3 / h·m2" },
    ],
    installation:
      "Professional installation is recommended to ensure a perfect fit and optimal performance. Our expert team guarantees precise alignment and sealing for maximum efficiency and durability.",
    maintenance: [
      "Minimal maintenance required. Clean the frames and glass with mild soap and water periodically to maintain their sleek appearance.",
      "Check the seals and hinges regularly to ensure smooth operation and energy efficiency.",
      "Lubricate hinges and locking mechanisms occasionally for smooth movement.",
      "Remove any dirt or debris from the frame and seals to maintain weather resistance.",
    ],
  },
  {
    id: "fixed-windows",
    images: [Fixed, fixed1, fixed2],
    ProductName: "Modern Aluminium Fixed Window",
    series: [
      {
        seriesName: "Grant",
        products: [
          {
            productId: "Fixed-window-01",
            productName: "FIXED WINDOW",
            description: `
              In case of IG, please consult with our technician for size and performance. 
              Pleated insect screen available. 
              Glazing finish: 
              8 - 13.52mm (Glazing bead), 
              25 – 31.52mm (Glazing bead), 
              Other glass (Sealant).
            `,
            features: [
              "For oversize fixed windows, please consult with our technician",
              "Glazing finish: 8 - 13.52mm (Glazing bead), 25 – 31.52mm (Glazing bead), Other glass (Sealant)",
              "Pleated insect screen available",
            ],
            dimensions: [
              { name: "Height", value: "3500mm" },
              { name: "Width", value: "4000mm" },
            ],
            image: fixed2,
          },
        ],
      },
      {
        seriesName: "ATIS",
        products: [
          {
            productId: "Fixed-window-atis-01",
            productName: "FIXED WINDOW",
            description: `
                          Wind load performance varies by glass thickness, please consult with our technician
                        `,
            features: [
              "For oversize fixed windows, please consult with our technician",
              "Glazing finish: 8 - 13.52mm (Glazing bead), 25 – 31.52mm (Glazing bead), Other glass (Sealant)",
              "Pleated insect screen available",
            ],
            dimensions: [
              { name: "Height", value: "3500mm" },
              { name: "Width", value: "4000mm" },
            ],
            image: fixed2,
          },
        ],
      },
      {
        seriesName: "WePlus",
        products: [
          {
            productId: "Fixed-window-weplus-01",
            productName: "FIXED WINDOW",
            description: `Wind load performance varies by glass thickness, please consult with our technician
                          `,
            features: [
              "For oversize fixed windows, please consult with our technician",
              "Glazing finish: 8 - 13.52mm (Glazing bead), 25 – 31.52mm (Glazing bead), Other glass (Sealant)",
              "Pleated insect screen available",
            ],
            dimensions: [
              { name: "Height", value: "3500mm" },
              { name: "Width", value: "4000mm" },
            ],
            image: fixed2,
          },
        ],
      },
    ],
    description:
      "High-performance Aluminium Fixed Windows designed for maximum natural light and energy efficiency. These non-operable windows provide excellent insulation, security, and aesthetic appeal, making them perfect for modern homes and commercial spaces.",
    features: [
      "Energy-Efficient: Helps maintain indoor temperatures year-round.",
      "Maximum Natural Light: Large glass panels for unobstructed views.",
      "Weather & Noise Resistant: Sealed for superior insulation and comfort.",
      "Enhanced Security: Non-operable design for added protection.",
      "Customizable: Available in various sizes, frame finishes, and glass types.",
    ],
    dimensions: [
      { name: "Frame Depth", value: "101.6 mm, 120 mm" },
      { name: "Maximum Height", value: "3,000 mm" },
      { name: "Glass Thickness", value: "Up to 31.5 mm" },
    ],
    longDescription: {
      title: "Elegant Aluminium Fixed Windows for Contemporary Spaces",
      features: [
        {
          name: "Sleek & Modern Design",
          description:
            "With minimal framing and expansive glass, fixed windows add a touch of elegance and sophistication to any property.",
        },
        {
          name: "Unmatched Natural Light",
          description:
            "Designed to maximize natural illumination, fixed windows create bright and airy indoor environments.",
        },
        {
          name: "Exceptional Insulation & Durability",
          description:
            "High-quality aluminium construction ensures resistance to extreme weather conditions, rust, and corrosion.",
        },
        {
          name: "Energy Efficiency",
          description:
            "With advanced glazing options, these windows reduce heat transfer, improving insulation and energy savings.",
        },
        {
          name: "Noise Reduction",
          description:
            "The sealed design minimizes outside noise, creating a quieter indoor atmosphere.",
        },
        {
          name: "Customizable Options",
          description:
            "Choose from various glass types, finishes, and frame sizes to match your architectural requirements.",
        },
      ],
    },
    specifications: [
      { name: "Material", value: "High-grade aluminium" },
      { name: "Noise Insulation", value: "JIS: 28 dB" },
      { name: "Water Tightness", value: "ASTM E330: 400 Pa" },
      { name: "Wind Pressure Resistance", value: "ASTM E330: 2200 Pa" },
      { name: "Air Tightness", value: "ASTM E283: 9.2m3 / h·m2" },
    ],
    installation:
      "For optimal performance and longevity, professional installation is highly recommended. Our expert team ensures precise fitting, sealing, and integration with your property’s design.",
    maintenance: [
      "Minimal maintenance required. Simply clean the glass and frames with mild soap and water periodically to retain their pristine appearance.",
      "Inspect the window seals occasionally to ensure continued insulation and weather resistance.",
      "Remove any dirt or debris from the frame to maintain a sleek and modern aesthetic.",
    ],
  },
  {
    id: "vertical-slide",
    images: [Vertical, fixed1, fixed2],
    ProductName: "Modern Verical Awning Windows",
    series: [
      {
        seriesName: "Grant",
        products: [],
      },
      {
        seriesName: "ATIS",
        products: [
          {
            productId: "Fixed-window-atis-01",
            productName: "NORMAL SLIDE",
            description: `
                          Wind load performance varies by glass thickness, please consult with our technician
                        `,
            features: [
              "For oversize fixed windows, please consult with our technician",
              "Glazing finish: 8 - 13.52mm (Glazing bead), 25 – 31.52mm (Glazing bead), Other glass (Sealant)",
              "Pleated insect screen available",
            ],
            dimensions: [
              { name: "Height", value: "3500mm" },
              { name: "Width", value: "4000mm" },
            ],
            image: fixed2,
          },
          {
            productId: "Fixed-window-atis-01",
            productName: "TILT AND SLIDE",
            description: `
                          Wind load performance varies by glass thickness, please consult with our technician
                        `,
            features: [
              "For oversize fixed windows, please consult with our technician",
              "Glazing finish: 8 - 13.52mm (Glazing bead), 25 – 31.52mm (Glazing bead), Other glass (Sealant)",
              "Pleated insect screen available",
            ],
            dimensions: [
              { name: "Height", value: "3500mm" },
              { name: "Width", value: "4000mm" },
            ],
            image: fixed2,
          },
        ],
      },
      {
        seriesName: "WePlus",
        products: [],
      },
      ,
    ],
    description:
      "Modern Aluminium Awning Windows are perfect for spaces that require ventilation while protecting interiors from rain. Their top-hinged design allows for easy airflow even during bad weather, making them ideal for kitchens, bathrooms, and high-rise buildings. These windows are also highly durable, energy-efficient, and offer enhanced security, making them a popular choice for both residential and commercial applications.",
    features: [
      "Energy-Efficient: Keeps interiors cool in summer and warm in winter.",
      "Durable & Weather-Resistant: Withstands extreme weather.",
      "Low Maintenance: Easy to clean and requires minimal upkeep.",
      "Stylish Design: Sleek and modern, enhancing property aesthetics.",
      "Customizable: Available in various sizes and finishes to suit your need.",
    ],
    dimensions: [
      {
        name: "Frame Depth",
        value:
          "101.6 mm., 120 mm (2 tracks sliding), 178 mm (3 tracks sliding)",
      },
      { name: "Maximum Height of Window", value: "3,000 mm" },
      { name: "Height of Sill", value: "50 mm" },
      { name: "Glass Thickness", value: "Up to 31.5 mm" },
    ],
    longDescription: {
      title:
        "Selective Systems proudly presents our Aluminium Awning Windows, the perfect blend of functionality, style, and durability for modern homes, offices, and commercial spaces. Designed with precision, these windows allow for superior ventilation while offering protection from the elements, making them ideal for areas that need both fresh air and weather resistance. Whether in Mumbai, Dubai, or Tajikistan, our aluminium awning windows are built to withstand harsh conditions and elevate the aesthetics of any building.",
      features: [
        {
          name: "Sleek & Modern Design",
          description:
            "With their top-hinged design, aluminium awning windows offer a contemporary look that complements any architectural style. Their clean, minimal frame and outward opening mechanism provide a sleek aesthetic, making them a popular choice for both residential and commercial buildings that require a modern touch.",
        },
        {
          name: "Weather Resistance & Durability",
          description:
            "Crafted from high-quality aluminium, these windows are resistant to corrosion, rust, and extreme weather conditions. Whether it’s heavy rain in Mumbai or the intense sun of Dubai, our aluminium awning windows are designed to endure the elements, ensuring long-lasting performance and protection.",
        },
        {
          name: "Superior Ventilation & Airflow",
          description:
            "The top-hinged design of the aluminium awning window allows for excellent ventilation even during rainy weather. Open them at a slight angle to let in fresh air while keeping rain and debris out. Ideal for kitchens, bathrooms, and high-rise buildings, these windows provide constant airflow without compromising on protection.",
        },
        {
          name: "Energy Efficiency",
          description:
            "Engineered with energy efficiency in mind, our aluminium awning windows offer excellent insulation, helping to maintain comfortable indoor temperatures throughout the year. They keep interiors cooler in the summer and warmer in the winter, contributing to energy savings and reducing reliance on heating and cooling systems.",
        },
        {
          name: "Low Maintenance",
          description:
            "Aluminium is naturally resistant to weathering and corrosion, meaning our awning windows require minimal upkeep. A quick cleaning with mild soap and water is all that’s needed to maintain their sleek appearance. These low-maintenance windows are perfect for urban areas like Mumbai, Dubai, and Tajikistan, where dust and pollution can accumulate.",
        },
        {
          name: "Customizable Options",
          description:
            "Our aluminium awning windows come in a variety of sizes, finishes, and glass options, allowing for full customization to suit your specific needs. Whether you prefer double-glazed glass for improved insulation or a certain frame finish to match your design aesthetic, we provide tailored solutions to meet your requirements.",
        },
        {
          name: "Protection from the Elements",
          description:
            "These windows are designed to protect your interiors from rain, dust, and wind, even when fully open. The hinged design ensures that water does not enter, making them perfect for areas that experience frequent rainfall or strong winds. Whether in a coastal environment or a monsoon-prone region, aluminium awning windows provide a reliable, weather-resistant solution.",
        },
      ],
    },
    specifications: [
      { name: "Material", value: "High-grade aluminium" },
      { name: "Noise Insulation", value: "JIS: 25 dB" },
      { name: "Water Tightness", value: "ASTM E330: 300 Pa" },
      { name: "Wind Pressure Resistance", value: "ASTM E330: 2000 Pa" },
      { name: "Air Tightness", value: "ASTM E283: 10.7m3 / h·m2 " },
    ],
    installation:
      "The installation of Selective Systems' Aluminium Awning Windows is designed to provide exceptional performance, durability, and seamless integration with your property. For the best results, we recommend professional installation by our experienced team. We ensure a precise fit, providing optimal weather sealing and thermal insulation. Proper installation enhances the energy efficiency, security, and functionality of your aluminium awning windows, allowing you to enjoy fresh air and protection from the elements for years to come.",
    maintenance: [
      "Routine maintenance involves just a few easy steps: clean the frames and glass with mild soap and water to maintain their sleek, stylish appearance. Periodically check the window seals for wear and tear and remove any debris from the tracks.",
      "Thanks to their durable construction and low-maintenance design, our windows provide long-lasting performance, saving you time and effort while enhancing your property's aesthetic appeal.",
      "By following these easy maintenance tips, you can enjoy the beauty, energy efficiency, and reliable performance of your Selective Systems windows for many years to come.",
    ],
  },
  {
    id: "glass-to-glass-corner",
    images: [GlassToGlass, corner],
    ProductName: "Glass-to-Glass Corner Windows",
    series: [
      {
        seriesName: "Grant",
        products: [
          {
            productId: "Corner-Fixed-window-01",
            productName: "CORNER WINDOW",
            description: `
              •	Only available in SG
              •	Only available with sealant finish
              •	Both in/outward corner available

            `,
            features: [
              "Frame depth: 72 mm",
              "Maximum height of window: 2400 mm",
              "Height of sill: 35 mm",
              "Glass thickness: Up to 13.5 mm",
            ],
            dimensions: [
              { name: "Height", value: "2400mm" },
              { name: "Width", value: "2000mm" },
            ],
            image: corner,
          },
        ],
      },
      {
        seriesName: "ATIS",
        products: [
          {
            productId: "Corner-Fixed-window-01",
            productName: "CORNER WINDOW",
            description: `
              •	Only available in SG
              •	Only available with sealant finish
              •	Both in/outward corner available

            `,
            features: [
              "Frame depth: 72 mm",
              "Maximum height of window: 2400 mm",
              "Height of sill: 35 mm",
              "Glass thickness: Up to 13.5 mm",
            ],
            dimensions: [
              { name: "Height", value: "2400mm" },
              { name: "Width", value: "2000mm" },
            ],
            image: corner,
          },
        ],
      },
      {
        seriesName: "WePlus",
        products: [
          {
            productId: "Corner-Fixed-window-01",
            productName: "CORNER WINDOW",
            description: `
              •	Only available in SG
              •	Only available with sealant finish
              •	Both in/outward corner available

            `,
            features: [
              "Frame depth: 72 mm",
              "Maximum height of window: 2400 mm",
              "Height of sill: 35 mm",
              "Glass thickness: Up to 13.5 mm",
            ],
            dimensions: [
              { name: "Height", value: "2400mm" },
              { name: "Width", value: "2000mm" },
            ],
            image: corner,
          },
        ],
      },
    ],
    description:
      "Glass-to-Glass Corner Windows provide a seamless, modern aesthetic by eliminating obstructive frames at the corner junctions. These windows maximize natural light and offer panoramic views, making them perfect for contemporary homes, offices, and high-rise buildings. Built with high-strength aluminium frames and toughened glass, they ensure durability, safety, and superior insulation.",
    features: [
      "Unobstructed Views: Frameless corner design for seamless aesthetics.",
      "Maximum Natural Light: Enhances brightness in interiors.",
      "Durable & Weather-Resistant: High-strength materials withstand extreme conditions.",
      "Energy Efficient: Superior insulation for temperature control.",
      "Customizable: Available in multiple sizes, finishes, and glass options.",
    ],
    dimensions: [
      {
        name: "Frame Depth",
        value: "100 mm, 120 mm, 150 mm",
      },
      { name: "Maximum Height of Window", value: "3,200 mm" },
      { name: "Glass Thickness", value: "Up to 31.5 mm" },
    ],
    longDescription: {
      title:
        "Selective Systems proudly presents our Glass-to-Glass Corner Windows, designed to offer stunning, uninterrupted views while maintaining high durability and energy efficiency. These windows are ideal for spaces where aesthetics and functionality go hand in hand, making them perfect for luxury residences, corporate buildings, and modern commercial spaces.",
      features: [
        {
          name: "Seamless Corner Design",
          description:
            "Our Glass-to-Glass Corner Windows eliminate bulky corner frames, creating a sleek and contemporary look. Perfect for maximizing views and natural light, these windows seamlessly integrate with modern architectural designs.",
        },
        {
          name: "Weather Resistance & Durability",
          description:
            "Crafted with premium aluminium frames and toughened glass, these windows provide excellent durability, corrosion resistance, and protection against harsh weather conditions, ensuring long-lasting performance.",
        },
        {
          name: "Enhanced Insulation & Energy Efficiency",
          description:
            "The high-performance glazing options available for these windows provide exceptional thermal insulation, keeping interiors comfortable by minimizing heat transfer and reducing energy costs.",
        },
        {
          name: "Customizable Options",
          description:
            "Available in a variety of finishes, glass types, and frame colors, our Glass-to-Glass Corner Windows can be tailored to fit your design preferences, ensuring a perfect match with your architectural vision.",
        },
      ],
    },
    specifications: [
      { name: "Material", value: "High-grade aluminium & toughened glass" },
      { name: "Noise Insulation", value: "JIS: 30 dB" },
      { name: "Water Tightness", value: "ASTM E330: 400 Pa" },
      { name: "Wind Pressure Resistance", value: "ASTM E330: 2500 Pa" },
      { name: "Air Tightness", value: "ASTM E283: 8.5m3 / h·m2 " },
    ],
    installation:
      "The installation of Selective Systems' Glass-to-Glass Corner Windows requires precision and expertise to ensure optimal performance. Our professional installation services guarantee a seamless fit, excellent weather sealing, and long-term durability. Proper installation enhances both the visual appeal and functionality of your space, ensuring uninterrupted views and superior insulation.",
    maintenance: [
      "Routine maintenance involves cleaning the glass surfaces and frames with mild detergent and water to maintain their clarity and shine. Ensure the seals are checked periodically for any wear and tear to maintain energy efficiency.",
      "The durable construction and high-quality materials used in our Glass-to-Glass Corner Windows make them low-maintenance, providing long-lasting aesthetics and performance with minimal effort.",
      "By following these simple maintenance steps, you can enjoy the elegance and functionality of your Selective Systems windows for many years to come.",
    ],
  },
  {
    id: "sliding-window",
    images: [Sliding, S3p2t, S4p2t],
    series: [
      {
        seriesName: "Grant",
        products: [
          {
            productId: "Sliding-window-01",
            productName: "SLIDING WINDOW ( 2 PANELS ON 2 TRACKS)",
            description: `
              •	Handle option
              •	Select panel position from L/R
              •	Single slide (L/R) available
            `,
            features: [
              "Frame depth: 101.6 mm, 120 mm (2 tracks sliding), 178 mm (3 tracks sliding)",
              "Maximum Height of Door: 2,500 mm",
              "Height of Sill: 50 mm",
              "Glass thickness: Up to 31.5 mm",
            ],
            dimensions: [
              { name: "Height", value: "2500mm" },
              { name: "Width", value: "3000mm" },
            ],
            image: S2p2t,
          },
          {
            productId: "Sliding-window-02",
            productName: "SLIDING WINDOW ( 3 PANELS ON 2 TRACKS) SFS",
            description: `
              •	Handle option
              •	Select panel position from L/R
              •	Single slide (L/R) available
            `,
            features: [
              "Frame depth: 101.6 mm, 120 mm (2 tracks sliding), 178 mm (3 tracks sliding)",
              "Maximum Height of Door: 2,500 mm",
              "Height of Sill: 50 mm",
              "Glass thickness: Up to 31.5 mm",
            ],
            dimensions: [
              { name: "Height", value: "2400mm" },
              { name: "Width", value: "2000mm" },
            ],
            image: S3p2t,
          },
          {
            productId: "Sliding-window-03",
            productName: "SLIDING WINDOW (4 PANELS ON 2 TRACKS)",
            description: `
              •	Handle option
              •	Select panel position from L/R
              •	Single slide (L/R) available

            `,
            features: [
              "Frame depth: 101.6 mm, 120 mm (2 tracks sliding), 178 mm (3 tracks sliding)",
              "Maximum Height of Door: 2,500 mm",
              "Height of Sill: 50 mm",
              "Glass thickness: Up to 31.5 mm",
            ],
            dimensions: [
              { name: "Height", value: "2400mm" },
              { name: "Width", value: "2000mm" },
            ],
            image: S4p2t,
          },
          {
            productId: "Sliding-window-03",
            productName: "SLIDING DOOR ( 2 PANELS ON 2 TRACKS)",
            description: `
              •	Handle option
              •	Select panel position from L/R
              •	Single slide (L/R) available
              •	Glazing finish
                8 - 13.52mm : Glazing channel
              Please consult with technician
              Other glass : Sealant
            `,
            features: [
              "Frame depth: 72 mm",
              "Maximum Height of Door: 2400 mm",
              "Height of Sill: 35 mm",
              "Glass thickness: 5, 6, 8 mm",
            ],
            dimensions: [
              { name: "Height", value: "2400mm" },
              { name: "Width", value: "2000mm" },
            ],
            image: Sd2p2t,
          },
          {
            productId: "Sliding-window-03",
            productName: "SLIDING DOOR (4 PANELS ON 2 TRACKS)",
            description: `
              •	Handle option
              •	Select from (SSSS, FSSF)
              •	Glazing finish
                8 - 13.52mm : Glazing channel   Other glass : Sealant
            `,
            features: [
              "Frame depth: 104 mm",
              "Maximum Height of Door: 3045 mm",
              "Height of Sill: 50 mm",
              "Glass thickness: Up to 13.5 mm",
            ],
            dimensions: [
              { name: "Height", value: "6000mm" },
              { name: "Width", value: "3500mm" },
            ],
            image: S4p2t,
          },
          {
            productId: "Sliding-window-03",
            productName: "SLIDING DOOR ( 6 PANELS ON 3 TRACKS)",
            description: `
              •	Handle option
              •	Select panel position from L/R
              •	Single slide (L/R) available

            `,
            features: [
              "Frame depth: 101.6 mm, 120 mm (2 tracks sliding), 178 mm (3 tracks sliding)",
              "Maximum Height of Door: 2,500 mm",
              "Height of Sill: 50 mm",
              "Glass thickness: Up to 31.5 mm",
            ],
            dimensions: [
              { name: "Height", value: "2400mm" },
              { name: "Width", value: "2000mm" },
            ],
            image: Sd6p2t,
          },
        ],
      },
      {
        seriesName: "ATIS",
        products: [
          {
            productId: "Sliding-window-01",
            productName: "SLIDING WINDOW (4 PANELS ON 2 TRACKS)",
            description: `
              •	In case of over 8mm glass thickness, please consult with our technician
              •	External insect screen available
              •	Internal insect screen (optional)
            `,
            features: [
              "Frame depth: 72 mm",
              "Maximum height of window: 2400 mm",
              "Height of sill: 35 mm",
              "Glass thickness: Up to 13.5 mm",
            ],
            dimensions: [
              { name: "Height", value: "2400mm" },
              { name: "Width", value: "2000mm" },
            ],
            image: S4p2t,
          },
          {
            productId: "Sliding-window-02",
            productName: "SLIDING WINDOW (2 PANELS ON 2 TRACKS)",
            description: `    
              •	In case of over 8mm glass thickness, please consult with our technician
              •	External insect screen available
              •	Internal insect screen (optional)
              •	Safety arm option
            `,
            features: [
              "Frame depth: 72 mm",
              "Maximum height of window: 2400 mm",
              "Height of sill: 35 mm",
              "Glass thickness: Up to 13.5 mm",
            ],
            dimensions: [
              { name: "Height", value: "2400mm" },
              { name: "Width", value: "2000mm" },
            ],
            image: S2p2t,
          },
          {
            productId: "Sliding-door-01",
            productName: "SLIDING DOOR ( 2 PANELS ON 2 TRACKS)",
            description: `
              •	In case of over 10mm glass thickness, please consult with our technician
              •	External insect screen available
              •	Internal insect screen (optional)
              •	Safety arm option
              •	Flat attachment option
            `,
            features: [
              "Frame depth: 72 mm",
              "Maximum height of window: 2400 mm",
              "Height of sill: 35 mm",
              "Glass thickness: Up to 13.5 mm",
            ],
            dimensions: [
              { name: "Height", value: "2400mm" },
              { name: "Width", value: "2000mm" },
            ],
            image: Sd2p2t,
          },
          {
            productId: "Sliding-door-02",
            productName: "SLIDING DOOR (4 PANELS ON 2 TRACKS)",
            description: `
              •	In case of over 10mm glass thickness, please consult with our technician
              •	External insect screen available
              •	Internal insect screen (optional)
              •	Flat attachment option
            `,
            features: [
              "Frame depth: 72 mm",
              "Maximum height of window: 2400 mm",
              "Height of sill: 35 mm",
              "Glass thickness: Up to 13.5 mm",
            ],
            dimensions: [
              { name: "Height", value: "2400mm" },
              { name: "Width", value: "2000mm" },
            ],
            image: S4p2twp,
          },
        ],
      },
      {
        seriesName: "WePlus",
        products: [
          {
            productId: "Sliding-window-01",
            productName: "SLIDING WINDOW (2 PANELS ON 2 TRACKS)",
            description: `
              •	In case of over 10mm glass thickness, please consult with our technician
              •	External insect screen available
              •	Internal insect screen (optional)
              •	Flat attachment option
            `,
            features: [
              "Frame depth: 72 mm",
              "Maximum height of window: 2400 mm",
              "Height of sill: 35 mm",
              "Glass thickness: Up to 13.5 mm",
            ],
            dimensions: [
              { name: "Height", value: "2400mm" },
              { name: "Width", value: "2000mm" },
            ],
            image: S2p2t,
          },
          {
            productId: "Sliding-window-01",
            productName: "SLIDING WINDOW (4 PANELS ON 2 TRACKS) ",
            description: `
              •	In case of over 10mm glass thickness, please consult with our technician
              •	External insect screen available
              •	Internal insect screen (optional)
              •	Flat attachment option
            `,
            features: [
              "Frame depth: 72 mm",
              "Maximum height of window: 2400 mm",
              "Height of sill: 35 mm",
              "Glass thickness: Up to 13.5 mm",
            ],
            dimensions: [
              { name: "Height", value: "2400mm" },
              { name: "Width", value: "2000mm" },
            ],
            image: S4p2twp,
          },
          {
            productId: "Sliding-window-01",
            productName: "SLIDING WINDOW (3 PANELS ON 3 TRACKS) ",
            description: `
              •	In case of over 10mm glass thickness, please consult with our technician
              •	External insect screen available
              •	Internal insect screen (optional)
              •	Flat attachment option
            `,
            features: [
              "Frame depth: 72 mm",
              "Maximum height of window: 2400 mm",
              "Height of sill: 35 mm",
              "Glass thickness: Up to 13.5 mm",
            ],
            dimensions: [
              { name: "Height", value: "2400mm" },
              { name: "Width", value: "2000mm" },
            ],
            image: S3p3t,
          },
        ],
      },
    ],
    ProductName: "Modern Aluminium Sliding Windows",
    description:
      "Modern Aluminium Sliding Windows are an excellent choice for contemporary homes and commercial spaces, offering a sleek and space-saving design. These windows operate smoothly on horizontal tracks, allowing for effortless opening and closing. Ideal for areas with limited space, they provide ample ventilation, energy efficiency, and durability, making them a preferred option for urban and high-rise buildings.",
    features: [
      "Smooth Sliding Mechanism: Effortless horizontal operation for ease of use.",
      "Space-Saving Design: Perfect for compact areas with limited opening space.",
      "Durable & Weather-Resistant: Built to withstand harsh environmental conditions.",
      "Energy Efficient: Provides excellent insulation and reduces energy costs.",
      "Customizable: Available in multiple sizes, finishes, and glass options.",
    ],
    dimensions: [
      {
        name: "Frame Depth",
        value:
          "101.6 mm., 120 mm (2 tracks sliding), 178 mm (3 tracks sliding)",
      },
      { name: "Maximum Height of Window", value: "3,000 mm" },
      { name: "Height of Sill", value: "50 mm" },
      { name: "Glass Thickness", value: "Up to 31.5 mm" },
    ],
    longDescription: {
      title:
        "Selective Systems proudly presents our Aluminium Sliding Windows, designed to offer a perfect blend of aesthetics, functionality, and durability. These windows are ideal for homes, offices, and high-rise buildings where space efficiency and smooth operation are a priority. Our sliding windows provide excellent ventilation while maintaining high energy efficiency and security standards.",
      features: [
        {
          name: "Sleek & Modern Design",
          description:
            "Our aluminium sliding windows feature a minimal frame and a smooth gliding mechanism, making them perfect for contemporary architectural designs. The clean lines and space-saving functionality add elegance to any property.",
        },
        {
          name: "Smooth & Effortless Operation",
          description:
            "The precision-engineered sliding mechanism ensures a frictionless glide, making opening and closing effortless. Ideal for residential and commercial applications, these windows provide easy access to fresh air and outdoor views.",
        },
        {
          name: "Space-Saving & Versatile",
          description:
            "Unlike traditional hinged windows, sliding windows do not require additional space for opening, making them perfect for compact areas such as apartments, offices, and high-rise buildings.",
        },
        {
          name: "Durability & Weather Resistance",
          description:
            "Manufactured from high-quality aluminium, our sliding windows are resistant to corrosion, rust, and extreme weather conditions, ensuring long-lasting performance in any climate.",
        },
        {
          name: "Energy Efficiency",
          description:
            "Designed with insulation in mind, our sliding windows help maintain a comfortable indoor temperature, reducing energy consumption and minimizing heating and cooling costs.",
        },
        {
          name: "Customizable Options",
          description:
            "Available in various sizes, finishes, and glass options, our aluminium sliding windows can be tailored to match your architectural style and personal preferences.",
        },
      ],
    },
    specifications: [
      { name: "Material", value: "High-grade aluminium" },
      { name: "Noise Insulation", value: "JIS: 25 dB" },
      { name: "Water Tightness", value: "ASTM E330: 300 Pa" },
      { name: "Wind Pressure Resistance", value: "ASTM E330: 2000 Pa" },
      { name: "Air Tightness", value: "ASTM E283: 10.7m3 / h·m2 " },
    ],
    installation:
      "The installation of Selective Systems' Aluminium Sliding Windows ensures precision fitting and optimal performance. Our expert team provides professional installation services, guaranteeing excellent weather sealing, smooth operation, and long-term durability. Proper installation enhances the functionality and energy efficiency of your sliding windows, ensuring a hassle-free experience.",
    maintenance: [
      "Maintaining our aluminium sliding windows is simple and effortless. Regular cleaning of the tracks and glass with mild soap and water helps keep them in pristine condition.",
      "To ensure smooth operation, periodically check the sliding mechanism for debris and lubricate as needed.",
      "The durable construction and high-quality materials used in our sliding windows make them a low-maintenance choice, offering long-lasting aesthetics and performance.",
      "By following these easy maintenance steps, you can enjoy the functionality and style of Selective Systems' Aluminium Sliding Windows for years to come.",
    ],
  },
];
const accordionData = [
  {
    title: "Why Choose Aluminium Windows for Your Home or Office",
    content:
      "Aluminium windows are a top choice for modern homes and commercial spaces due to their exceptional durability, energy efficiency, and sleek aesthetic. Known for their strength and lightweight design, aluminium windows can withstand harsh weather conditions, making them perfect for regions like Mumbai, Dubai, and Tajikistan. Their low maintenance and high corrosion resistance make them ideal for both residential and commercial buildings, ensuring long-lasting performance and superior insulation.",
  },
  {
    title: "Benefits of Aluminium Windows for Coastal Areas",
    content:
      "Aluminium windows are particularly ideal for coastal areas where properties face harsh environmental conditions. Their corrosion-resistant properties ensure that they withstand the salty air and humidity, making them perfect for homes and offices in coastal cities like Mumbai, Chennai, and Dubai. Aluminium windows also offer excellent thermal efficiency and security, making them a reliable choice for buildings exposed to the elements.",
  },
  {
    title: "Aluminium Windows for Energy Efficiency and Comfort",
    content:
      "Aluminium windows provide superior energy efficiency, helping to maintain comfortable indoor temperatures throughout the year. By offering excellent insulation, aluminium windows keep homes and offices cooler in summer and warmer in winter, reducing the need for excessive heating or cooling. This makes them an ideal choice for energy-conscious homeowners and businesses in cities like Bangalore, Dubai, and Tajikistan, where temperature fluctuations are common.",
  },
  {
    title: "Aluminium Windows for Modern Architecture and Design",
    content:
      "Aluminium windows offer a sleek, modern design that complements contemporary architecture. Their slim frames and large glass areas allow for maximum natural light and unobstructed views, making them a popular choice for modern homes, commercial offices, and high-rise buildings in cities like Delhi, Mumbai, and Dubai. Available in a variety of customizable finishes and glass options, aluminium windows enhance the overall aesthetic of any building while providing exceptional functionality.",
  },
  {
    title: "Aluminium Windows for High-Security Applications",
    content:
      "Aluminium windows are an excellent choice for high-security applications. Their robust construction and advanced locking systems make them highly secure, ideal for homes, offices, and commercial spaces in urban areas like Mumbai, Delhi, and Dubai. Aluminium windows offer peace of mind while maintaining a sleek and modern appearance. They are also resistant to tampering, ensuring that your property is protected at all times.",
  },
  {
    title: "Where to Use Aluminium Windows in Your Home",
    content:
      "Aluminium windows can be used throughout your home, from living rooms and bedrooms to kitchens and bathrooms. Their versatility makes them suitable for various applications, such as fixed windows for panoramic views, sliding windows for easy access to fresh air, or casement windows for increased ventilation. In cities like Mumbai, Delhi, Dubai, and Tajikistan, aluminium windows provide durability, style, and energy efficiency, making them an excellent choice for both residential and commercial buildings.",
  },
];
const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-4 px-6 text-left"
        onClick={onClick}
      >
        <span className="text-lg text-gray-900 poppins-regular">{title}</span>
        {isOpen ? (
          <IoChevronUp className="w-6 h-6 text-gray-500" />
        ) : (
          <IoChevronDown className="w-6 h-6 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="py-4 px-6 bg-gray-50 shadow-md">
          <p className="text-gray-700 roboto-light">{content}</p>
        </div>
      )}
    </div>
  );
};

export default function ProductPage({ params }) {
  const [openAccordion, setOpenAccordion] = useState(0);
  const pathname = usePathname();
  const segments = pathname.split("/");
  const fetchedId = segments[segments.length - 1];
  console.log(fetchedId);
  const product = AluminiumProductsPanel.find((item) => item.id === fetchedId);

  if (!product) {
    notFound();
  }

  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  return (
    <>
      <div className="relative h-[600px] sm:h-[600px]  bg-black mb-8 rounded-lg overflow-hidden">
        <div className="max-w-7xl mx-auto py-8 absolute inset-0 flex flex-col sm:flex-row items-center justify-start mt-16 sm:mt-0">
          {/* Text Section */}
          <div className="flex flex-col gap-6 w-full md:w-1/2 text-center md:text-left px-20">
            <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight">
              {product.ProductName}
            </h1>
            <Link
              href="https://wa.me/919372593981"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                className="rounded-md px-6 py-3 mb-10 bg-white text-black roboto-bold transition duration-300 border border-black flex items-center gap-2
                     hover:bg-black hover:text-white hover:border-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <BsFillTelephoneFill size={16} />
                Chat Now
              </motion.button>
            </Link>
          </div>

          {/* Image Section */}
          <div className="w-full sm:w-1/2 flex justify-left">
            <Image
              src={product.images[0]}
              alt={product.ProductName}
              priority
              className="w-full h-auto object-cover rounded-lg shadow-lg opacity-80"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 ">
        <Link
          href="/products/aluminium-windows"
          className="text-blue-600 hover:underline mb-4 inline-block"
        >
          &larr; Back to All Windows
        </Link>
        <p className="text-gray-700  roboto-light text-justify">
          Selective System, based in Mumbai, India, is a leading manufacturer of
          high-quality aluminium windows, offering energy-efficient, durable,
          and stylish solutions for residential and commercial spaces. Our range
          includes fixed, sliding, awning, and glass windows, all crafted with
          advanced technology for lasting performance and aesthetic appeal.
          Tested for all weather conditions, our windows are perfect for homes,
          offices, and global markets like the UAE and Tajikistan. With
          customizable designs, Selective System ensures superior energy
          efficiency, security, and insulation for every project. Choose us for
          premium aluminium windows that meet all your architectural and
          functional needs.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-2">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex gap-4 md:flex-col pt-4 mt-20 md:pt-14">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className={`relative h-20 w-20  border-2 rounded-md overflow-hidden ${
                    selectedImage === image
                      ? "border-gray-800"
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
            <div className="relative flex-grow mt-20 h-64 md:h-[500px]">
              <Image
                src={selectedImage}
                alt={product.ProductName}
                loading="lazy"
                className="rounded-lg object-fill"
              />
            </div>
          </div>

          <div className="flex flex-col pt-6 gap-6 mt-10">
            <h2 className="text-3xl text-center p-10 md:p-0 md:text-start din-bold">
              {product.ProductName}
            </h2>
            <p className="text-gray-700 text-justify px-2 roboto-light">
              {product.description}
            </p>
            <div>
              <h3 className="text-xl din-bold mb-2">Features:</h3>
              <ul className="list-disc list-inside">
                {product.features.map((feature, index) => (
                  <li
                    key={index}
                    className="text-gray-700 text-base roboto-light"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href="https://wa.me/919372593981"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                className="rounded-[5px] px-5 py-3 mb-10 bg-black text-white roboto-bold transition duration-700 border border-white flex items-center gap-2
    hover:bg-white hover:text-black hover:border-black"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <BsFillTelephoneFill size={14} />
                Chat Now
              </motion.button>
            </Link>
          </div>
          {/* <span className="text-xl din-bold">Dimensions:</span>
          <table className="min-w-full border-collapse border border-gray-300 table-auto mb-2">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4 text-left font-bold text-gray-800 border border-gray-300">
                  Name
                </th>
                <th className="py-2 px-4 text-left font-bold text-gray-800 border border-gray-300">
                  Value
                </th>
              </tr>
            </thead>
            <tbody>
              {product.dimensions.map((dimension, index) => (
                <tr
                  key={index}
                  className={`${index % 2 === 0 ? "bg-white" : "bg-gray-100"}`}
                >
                  <td className="py-2 px-4 font-semibold text-gray-700 border border-gray-300">
                    {dimension.name}
                  </td>
                  <td className="py-2 px-4 text-gray-700 border border-gray-300">
                    {dimension.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table> */}
        </div>
        <div className="text-black">
          <section className="flex flex-col">
            <h2 className="text-2xl din-bold mb-2">Product Description</h2>
            <p className="text-black roboto-light mb-6 text-justify px-2">
              {product.longDescription.title}
            </p>
            <main className="product-description py-2 px-4">
              <ul className="list-disc pl-6 space-y-2 text-black">
                {product.longDescription.features.map((feature, index) => (
                  <li key={index}>
                    <h3 className="din-bold text-lg text-black">
                      {feature.name}
                    </h3>
                    <p className="text-gray-700 mt-2 poppins-extralight text-justify">
                      {feature.description}
                    </p>
                  </li>
                ))}
              </ul>
            </main>
          </section>
        </div>
        <div className="my-8 border-black border-t border-b py-2">
          <h2 className="text-2xl din-bold mt-4 mb-4 flex justify-center ">
            SERIES
          </h2>
          <SeriesComponent product={product} />
        </div>
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row gap-16">
            {/* Left Column - Applications */}
            <div className="flex flex-col w-full md:w-1/2">
              <h2 className="text-2xl din-bold mb-4">Applications</h2>
              <div className="rounded-lg overflow-hidden px-2">
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

            {/* Right Column - Specifications */}
            <section className="flex flex-col w-full md:w-1/2 ">
              <h2 className="flex text-2xl din-bold mb-4">Specifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {product.specifications.map((spec, index) => (
                  <div key={index} className="bg-secondary p-4 rounded-lg">
                    <h3 className="poppins-semibold text-gray-700">
                      {spec.name}
                    </h3>
                    <p className="text-gray-700 text-base">{spec.value}</p>
                  </div>
                ))}
              </div>
              <Link
                href="https://wa.me/919372593981"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  className="rounded-[5px] px-5 py-3 bg-black text-white roboto-bold transition duration-700 border border-white flex items-center gap-2
    hover:bg-white hover:text-black hover:border-black"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <BsFillTelephoneFill size={14} />
                  Chat Now
                </motion.button>
              </Link>
            </section>
          </div>
          <div className="flex flex-col md:flex-row gap-8 border-black border-t py-8">
            <section className="w-full md:w-1/2 h-auto">
              <h2 className="text-2xl din-bold mb-4">Installation</h2>
              <p className="text-gray-700 text-base roboto-light text-justify">
                {product.installation}
              </p>
            </section>

            <section className="w-full md:w-1/2 h-auto">
              <h2 className="text-2xl din-bold mb-4">Maintenance</h2>
              <p className="text-gray-700 text-base roboto-light text-justify">
                {product.maintenance}
              </p>
            </section>
          </div>
          <div className="w-full flex justify-center">
            <Link
              href="https://wa.me/919372593981"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                className="rounded-[5px] px-5 py-3 bg-black text-white roboto-bold transition duration-700 border border-white flex items-center gap-2
    hover:bg-white hover:text-black hover:border-black"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <BsFillTelephoneFill size={14} />
                Connect with us
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
