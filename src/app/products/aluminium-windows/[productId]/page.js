"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound, usePathname } from "next/navigation";
import { useState } from "react";
import windows1 from "../../../assets/AluminiumProduct/AluminiumWindows/windows1.webp";
import windows2 from "../../../assets/AluminiumProduct/AluminiumWindows/windows2.webp";
import windows3 from "../../../assets/AluminiumProduct/AluminiumWindows/windows3.webp";
import windows4 from "../../../assets/AluminiumProduct/AluminiumWindows/windows4.webp";
// import windows5 from "../../../assets/AluminiumProduct/AluminiumWindows/windows5.webp";
import windows6 from "../../../assets/AluminiumProduct/AluminiumWindows/windows6.webp";
import { IoChevronUp, IoChevronDown } from "react-icons/io5";
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
import { BsFillTelephoneFill } from "react-icons/bs";

const AluminiumProductsPanel = [
  {
    id: "fixed-aluminium-window-01",
    images: [windows1, singleFixedWindowFrame, AccessorisFixedWindows],
    ProductName: "Modern Aluminium Fixed Window",
    description:
      "Aluminium fixed windows are renowned for their sleek, modern design and long-lasting durability. These energy-efficient windows provide excellent thermal insulation, making them ideal for both modern residential and commercial use. Built to withstand harsh weather conditions, they offer superior resistance to corrosion, ensuring low maintenance and enhanced performance for years.",
    features: [
      "Energy-Efficient: Keeps interiors cool in summer and warm in winter.",
      "Durable & Weather-Resistant: Withstands extreme weather.",
      "Low Maintenance: Easy to clean and requires minimal upkeep.",
      "Stylish Design: Sleek and modern, enhancing property aesthetics.",
      "Customizable: Available in various sizes and finishes to suit your need.",
    ],
    dimensions: [
      { name: "Frame Depth", value: "72 mm" },
      { name: "Maximum Height of Window", value: "2400 mm" },
      { name: "Height of Sill", value: "35 mm" },
      { name: "Glass Thickness", value: "Up to 13.5 mm" },
    ],
    longDescription: {
      title:
        "Selective Systems proudly presents our Fixed Aluminium Windows an excellent solution for modern homes, offices, and commercial spaces. These windows are designed to provide a sleek, stylish look while offering exceptional performance and long-lasting durability. Whether you are in Mumbai, Dubai, or Tajikistan, our fixed aluminium windows combine aesthetics with functionality, offering unobstructed views and superior weather resistance.",
      features: [
        {
          name: "Elegant Design",
          description:
            "The minimalist fixed aluminium window frame offers a contemporary, clean look, making it the ideal choice for any modern architecture. Whether for a residential home or a commercial office, these windows provide a sleek, refined aesthetic that complements any building's exterior.",
        },
        {
          name: "Durability and Weather Resistance",
          description:
            "Made with high-quality aluminium, these windows are built to last. The corrosion-resistant properties of aluminium ensure that the windows withstand the harshest weather conditions, whether it’s the humid climate of Mumbai or the extreme temperatures of Dubai.",
        },
        {
          name: "Energy Efficiency",
          description:
            "Our fixed aluminium windows are engineered to offer excellent insulation, helping to regulate indoor temperatures year-round. They help maintain a cooler interior in the summer and a warmer environment during the winter, resulting in significant energy savings. Additionally, they contribute to noise reduction, creating a peaceful indoor environment.",
        },
        {
          name: "Low Maintenance",
          description:
            "Aluminium is naturally resistant to corrosion and weathering, meaning these windows require minimal maintenance. A regular cleaning with mild soap and water will keep them looking fresh, making them ideal for homes and offices in cities like Dubai, Tajikistan, and Mumbai, where dust and grime can accumulate quickly.",
        },
        {
          name: "Customizable Options",
          description:
            "Our fixed aluminium windows come in a wide range of sizes, finishes, and glass options to meet your specific needs. Whether you require double-glazed glass for enhanced thermal performance or a specific frame finish to match your building’s style, we offer customizable solutions.",
        },
        {
          name: "Unobstructed Views",
          description:
            "With their fixed design, these windows offer a clear and expansive view, perfect for showcasing the beauty of your surroundings. Ideal for spaces like living rooms, offices, and commercial buildings, they allow ample natural light to flood your interiors, creating a brighter, more inviting space.",
        },
      ],
    },
    specifications: [
      { name: "Material", value: "High-grade aluminium" },
      { name: "Noise Insulation", value: "JIS: 25 dB" },
      { name: "Water Tightness", value: "ASTM E330: 300 Pa" },
      { name: "Wind Pressure Resistance", value: "ASTM E330: 2000 Pa" },
      { name: "Air Tightness", value: "ASTM E283: 10.7m3 / h·m2" },
    ],
    installation:
      "Installation of Selective Systems' Aluminium Fixed Windows is designed for premium performance and long-lasting durability. We recommend professional installation to ensure the highest standards for your modern home or office. Our experienced team guarantees a precise fit, providing weather-resistant sealing and optimal thermal insulation. Whether you're located in Mumbai, Dubai, or Tajikistan, we offer expert window installation services tailored to your specific needs. Installing aluminium fixed windows properly enhances their energy efficiency and durability. Trust Selective Systems for a seamless installation that will elevate the aesthetic and performance of your property. Contact us today for professional window installation services that ensure your investment lasts.",
    maintenance: [
      "At Selective Systems, we believe that maintaining our premium aluminium fixed windows is both simple and hassle-free. Designed for modern homes, offices, and commercial spaces, these energy-efficient windows are crafted to withstand the test of time and extreme weather conditions. With minimal upkeep required, they are the perfect choice for properties in cities like Mumbai, Dubai, Tajikistan, and beyond.",
      "Routine maintenance involves only a few simple steps: clean the frames and glass with mild soap and water to maintain their sleek, stylish appearance. To ensure your aluminium windows continue performing at their best, it's important to periodically inspect the window seals for wear and tear and remove any debris from the tracks. This ensures your windows retain their weather-resistant and insulation properties, keeping your interiors cool in summer and warm in winter.",
      "Thanks to their durable construction and low-maintenance design, our windows offer long-lasting performance, saving you time and effort while enhancing the aesthetic appeal of your property. Whether you're in Mumbai, Dubai, Tajikistan, or any other region, Selective Systems' aluminium fixed windows provide superior durability and functionality, all while offering customizable solutions to meet your needs.",
      "By following these easy maintenance tips, you can enjoy the continued beauty, energy efficiency, and reliable performance of your Selective Systems windows for years to come.",
    ],
  },
  {
    id: "awning-aluminium-window01",
    images: [windows2, awningwindows, awningwindowsBlack],
    ProductName: "Modern Aluminium Awning Windows",
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
    id: "sliding-aluminium-window1",
    images: [windows3, slidingWindowsBlack, slidingWindowsCross],
    ProductName: "Aluminium Sliding Windows",
    description:
      "Aluminium Sliding Windows offer a sleek, modern solution for homes and offices, combining durability, energy efficiency, and ease of use. With slim frames and large glass panels, they maximize natural light and provide unobstructed views, enhancing the overall aesthetic of your space. Ideal for urban environments, these windows are weather-resistant, low-maintenance, and perfect for energy-conscious homeowners looking for high-performance window solutions.",
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
        value: "72 mm",
      },
      { name: "Maximum Height of Window", value: "1600 mm" },
      { name: "Height of Sill", value: "35 mm" },
      { name: "Glass Thickness", value: "5, 6, 8 mm" },
    ],
    longDescription: {
      title:
        "Selective Systems proudly presents our Aluminium Sliding Windows, a seamless blend of style, durability, and advanced engineering for modern homes, offices, and commercial spaces. These windows are designed to provide excellent functionality, offering easy operation and space-saving features while enhancing the aesthetics of any building. Whether in Mumbai, Dubai, or Sri Lanka, our aluminium sliding windows are engineered to withstand harsh weather conditions, providing long-lasting performance and a sleek modern touch to your property.",
      features: [
        {
          name: "Sleek & Contemporary Design",
          description:
            "With their slim frames and large glass panels, aluminium sliding windows offer a minimalist, modern design that fits perfectly with any architectural style. Their smooth, horizontal sliding mechanism ensures easy operation, making them a popular choice for both residential and commercial properties looking to enhance their contemporary appeal.",
        },
        {
          name: "Weather Resistance & Durability",
          description:
            "Crafted from high-quality aluminium, our sliding windows are resistant to corrosion, rust, and extreme weather conditions. Whether it’s the humidity of Mumbai, the heat of Dubai, or the rains of Sri Lanka, these windows are built to endure, offering reliable performance and protection in all climates.",
        },
        {
          name: "Superior Ventilation & Airflow",
          description:
            "Aluminium sliding windows provide superior airflow, allowing for easy ventilation while keeping the outside elements at bay. Their smooth sliding mechanism allows for full or partial opening, making them ideal for living rooms, bedrooms, kitchens, and offices where fresh air circulation is essential without compromising security or protection from rain.",
        },
        {
          name: "Energy Efficiency",
          description:
            "Engineered for energy efficiency, Selective Systems' aluminium sliding windows provide excellent thermal insulation, helping to keep interiors cooler in the summer and warmer in the winter. By reducing the need for excessive air conditioning or heating, these windows contribute to energy savings and environmental sustainability.",
        },
        {
          name: "Low Maintenance",
          description:
            "Aluminium's natural resistance to weathering, corrosion, and rust means our sliding windows require minimal maintenance. A simple cleaning with mild soap and water is all that’s needed to maintain their fresh appearance. These low-maintenance windows are ideal for urban environments like Mumbai, Dubai, and Sri Lanka, where dust and pollution are common concerns.",
        },
        {
          name: "Customizable Options",
          description:
            "Our aluminium sliding windows come in a variety of sizes, finishes, and glass options, offering full customization to meet your specific needs. Whether you prefer tinted or double-glazed glass for enhanced insulation or a particular frame finish to match your interior design, we provide tailored solutions that align with your vision.",
        },
        {
          name: "Space-Saving & Practicality",
          description:
            "One of the key benefits of aluminium sliding windows is their space-saving design. Unlike traditional casement windows, these windows slide open horizontally, making them perfect for spaces where external swinging windows would be impractical. Ideal for areas with limited space or for creating wide-open views without obstruction, aluminium sliding windows maximize both style and functionality.",
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
      "The installation of Selective Systems' Aluminium Sliding Windows is designed to ensure optimal performance, durability, and seamless integration with your property. To achieve the best results, we recommend professional installation by our skilled team. We ensure a precise fit with optimal weather sealing and thermal insulation. Whether you're located in Pune, Kochi, Hyderabad, or Abu Dhabi, our expert installation services are customized to meet the unique needs of your home or office. Proper installation significantly enhances energy efficiency, security, and functionality, ensuring you enjoy the benefits of fresh air and protection from the elements for years. Trust Selective Systems for flawless installation that elevates both the aesthetics and performance of your space. Contact us today for expert window installation services and secure the long-term value of your investment.",
    maintenance: [
      "At Selective Systems, we believe maintaining our premium aluminium sliding windows is both simple and hassle-free. Built to withstand harsh weather conditions and provide energy efficiency, these windows are the perfect choice for modern homes, offices, and commercial spaces in cities such as Surat, Goa, Chandigarh, and Doha.",
      "Routine maintenance for your Aluminium Sliding Windows involves just a few easy steps: clean the frames and glass with mild soap and water to maintain their modern and sleek appearance. To ensure your sliding windows continue to perform at their best, it’s important to regularly check the window seals for wear and tear, and clear any debris from the tracks. This simple maintenance helps preserve their weather resistance and insulation properties, ensuring that your interiors stay cool in the summer and warm in the winter.",
      "Thanks to their robust construction and low-maintenance design, our aluminium sliding windows provide long-lasting performance, saving you time and effort while enhancing your property’s aesthetic appeal. Whether you're in Vadodara, Nagpur, Bhubaneswar, or any other city, Selective Systems' aluminium sliding windows offer superior durability, energy efficiency, and customizable options tailored to your needs.",
      "By following these straightforward maintenance tips, you can enjoy the ongoing beauty, energy efficiency, and reliable performance of your Selective Systems windows for many years, ensuring they continue to perform optimally in all weather conditions.",
    ],
  },
  {
    id: "casement-aluminium-window",
    images: [windows4, casementAluminumWindows],
    ProductName: "Casement Aluminium Windows",
    description:
      "Casement Aluminium Windows offer a perfect blend of elegance, functionality, and durability for modern homes and offices. Designed with a side-hinged opening mechanism, they provide excellent ventilation and unobstructed views while ensuring optimal security. Ideal for both residential and commercial spaces, these windows are energy-efficient, weather-resistant, and require minimal maintenance, making them a reliable choice for any building.",
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
        value: "72 mm 104 mm (3 Slide)",
      },
      { name: "Maximum Height of Door- Standard Type", value: "2000 mm" },
      { name: "Maximum Height of Door- Large Type", value: "3045 mm" },
      { name: "Height of Sill", value: "35 mm, 50 mm (for all sliding)" },
      { name: "Glass Groove", value: "11 mm" },
      { name: "Glass Thickness", value: "5 , 6 , 8 mm" },
    ],
    longDescription: {
      title:
        "Selective Systems proudly presents our Casement Aluminium Windows, a perfect combination of style, durability, and practicality for modern homes, offices, and commercial spaces. These windows are designed to provide excellent ventilation and security while adding a sophisticated touch to any building. Whether in Pune, Hyderabad, or Singapore, our casement windows are built to withstand diverse weather conditions, offering long-lasting performance and a refined aesthetic.",
      features: [
        {
          name: "Elegant & Timeless Design",
          description:
            "Our casement aluminium windows feature a side-hinged design that blends seamlessly with any architectural style. The wide glass panels and sleek frames allow abundant natural light into your space, offering an unobstructed view and a clean, modern look, making them ideal for both residential and commercial properties.",
        },
        {
          name: "Weather Resistance & Durability",
          description:
            "Crafted from high-quality aluminium, our casement windows are highly resistant to corrosion, rust, and extreme weather conditions. Whether facing the tropical monsoons in Kochi, the dry heat of Rajasthan, or the humid climate of Singapore, these windows are built to endure, ensuring long-term reliability and superior protection.",
        },
        {
          name: "Superior Ventilation & Airflow",
          description:
            "The side-hinged mechanism of our casement aluminium windows provides optimal airflow, allowing you to control ventilation while protecting your interiors from the elements. Ideal for spaces like living rooms, kitchens, and offices, these windows enhance air circulation and ensure a comfortable, fresh environment.",
        },
        {
          name: "Energy Efficiency",
          description:
            "Our casement aluminium windows are engineered with superior insulation properties, helping to maintain comfortable indoor temperatures all year round. Whether you're in the heat of Ahmedabad, the cooler weather of Shimla, or the mild temperatures of Singapore, these windows contribute to energy savings by reducing the reliance on air conditioning and heating.",
        },
        {
          name: "Low Maintenance",
          description:
            "Aluminium is naturally resistant to corrosion and weathering, ensuring that our casement windows require minimal maintenance. A simple cleaning with mild soap and water is enough to keep them looking like new. These low-maintenance windows are perfect for urban environments like Chennai, Bengaluru, and international locations such as Sydney or Dubai where dust and pollution are common concerns.",
        },
        {
          name: "Customizable Options",
          description:
            "Our casement aluminium windows are available in various sizes, finishes, and glass options to match your unique requirements. Whether you need double-glazed glass for enhanced insulation, tinted glass for privacy, or a specific frame finish to complement your décor, we offer fully customizable solutions to suit your design vision.",
        },
        {
          name: "Security & Durability",
          description:
            "With a secure locking mechanism, our casement aluminium windows provide enhanced safety for your property. Durable and built to last, these windows not only offer superior protection against the elements but also ensure the security and longevity of your investment.",
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
      "The installation of Selective Systems' Casement Aluminium Windows is designed to ensure optimal performance, durability, and seamless integration with your property. For the best results, we recommend professional installation by our skilled team. We ensure a precise fit with optimal weather sealing and thermal insulation. Whether you're located in Andheri, Bhandup, Karnataka, UtterPradesh and India beyond, our expert installation services are customized to meet the unique needs of your home or office. Proper installation significantly enhances energy efficiency, security, and functionality, ensuring you enjoy the benefits of natural ventilation and protection from the elements for years. Trust Selective Systems for flawless installation that elevates both the aesthetics and performance of your space. Contact us today for expert window installation services and secure the long-term value of your investment.",
    maintenance: [
      "At Selective Systems, we believe maintaining our premium casement aluminium windows is both simple and hassle-free. Built to withstand harsh weather conditions and provide energy efficiency, these windows are the perfect choice for modern homes, offices, and commercial spaces in areas like Andheri, Goregaon, Borivali, and beyond.",
      "Routine maintenance for your Casement Aluminium Windows involves just a few easy steps: clean the frames and glass with mild soap and water to maintain their elegant appearance. To ensure your casement windows continue to perform at their best, it's important to regularly check the window seals for wear and tear and clear any debris from the hinges and frames. This simple maintenance helps preserve their weather resistance and insulation properties, ensuring that your interiors stay cool in the summer and warm in the winter.",
      "Thanks to their robust construction and low-maintenance design, our casement aluminium windows provide long-lasting performance, saving you time and effort while enhancing your property’s aesthetic appeal. Whether you're in Thane, Bangalore, Kochi, or any other location, Selective Systems' aluminium casement windows offer superior durability, energy efficiency, and customizable options tailored to your needs.",
      "By following these straightforward maintenance tips, you can enjoy the ongoing beauty, energy efficiency, and reliable performance of your Selective Systems windows for many years, ensuring they continue to perform optimally in all weather conditions.",
    ],
  },
  // {
  //   id: 5,
  //   images: [windows5],
  //   ProductName: "Modern Aluminium Fixed Window",
  //   description:
  //     "Sleek and contemporary aluminium window perfect for modern homes.",
  //   features: [
  //     "Energy-efficient",
  //     "Noise-reducing",
  //     "Low maintenance",
  //     "Customizable colors",
  //   ],
  //   dimensions: "Various sizes available",
  //   longDescription:
  //     "Our Modern Aluminium Fixed Window combines style with functionality. Designed to complement contemporary architecture, these windows offer unobstructed views and excellent insulation properties.",
  //   specifications: [
  //     { name: "Material", value: "High-grade aluminium" },
  //     { name: "Glass Type", value: "Double-glazed, Low-E" },
  //     { name: "Frame Finish", value: "Powder-coated" },
  //     { name: "U-Value", value: "1.4 W/m²K" },
  //   ],
  //   installation:
  //     "Professional installation recommended. Our team of experts ensures a perfect fit and optimal performance.",
  //   maintenance:
  //     "Minimal maintenance required. Regular cleaning with mild soap and water keeps the windows looking new.",
  // },
  {
    id: "glass-corner-alum-windows",
    images: [windows6, GlassCornerAluminumWindows, glassCorner],
    ProductName: "Aluminium Glass To Glass Corner Windows",
    description:
      "Aluminium glass-to-glass corner windows offer a sleek, modern aesthetic, perfect for enhancing natural light and panoramic views. These energy-efficient, durable windows are designed with precision for seamless integration into contemporary architecture. Ideal for residential and commercial spaces, they provide superior thermal insulation and a stylish, minimalist look.",
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
      { name: "Maximum Height of Door", value: "3,500 mm" },
      { name: "Height of Sill", value: "50 mm" },
      { name: "Glass Thickness", value: "Up to 31.5 mm" },
    ],

    longDescription: {
      title:
        "Selective Systems proudly presents our Aluminium Glass-to-Glass Corner Windows, a striking blend of contemporary design, durability, and practicality. Perfect for modern homes, offices, and commercial spaces, these windows redefine aesthetics and functionality. Engineered to create seamless corner views and maximize natural light, our glass-to-glass corner windows are built for longevity and to elevate your architectural vision.",
      features: [
        {
          name: "Seamless Corner Design",
          description:
            "Our aluminium glass-to-glass corner windows are designed to create a sleek, uninterrupted corner view. By eliminating bulky frames at the corner, these windows allow panoramic views and ample natural light, making them a perfect choice for both urban and suburban properties.",
        },
        {
          name: "Weather Resistance & Strength",
          description:
            "Constructed with premium-grade aluminium, our glass-to-glass corner windows offer exceptional resistance to rust, corrosion, and harsh weather conditions. Be it the coastal breezes of Visakhapatnam, the dry winds of Jaisalmer, or the fluctuating weather in Indore, these windows ensure long-lasting performance.",
        },
        {
          name: "Maximized Natural Light",
          description:
            "The innovative corner design allows light to flood your interiors, creating brighter and more welcoming spaces. Ideal for living rooms, offices, and lounges, these windows enhance the ambiance of your space while offering a contemporary, sophisticated touch.",
        },
        {
          name: "Energy Efficiency",
          description:
            "Engineered for insulation, our aluminium glass-to-glass corner windows help maintain comfortable indoor temperatures. Whether it's the warm days in Nagpur or the cooler weather in Dehradun, these windows contribute to energy savings by reducing your dependence on artificial heating and cooling.",
        },
        {
          name: "Low Maintenance",
          description:
            "Crafted with durable aluminium, our corner windows resist corrosion and wear, requiring minimal upkeep. A quick wipe with a damp cloth keeps them clean, making them a practical choice for locations like Noida, Surat, or other urban areas prone to dust and pollution.",
        },
        {
          name: "Customizable Options",
          description:
            "Our glass-to-glass corner windows can be tailored to suit your needs, with a variety of sizes, finishes, and glass types available. Whether you need tinted glass for privacy, reflective glass for UV protection, or a custom frame finish to align with your design preferences, we offer solutions that match your vision.",
        },
        {
          name: "Enhanced Security & Longevity",
          description:
            "Equipped with advanced locking mechanisms and crafted for durability, our aluminium glass-to-glass corner windows provide reliable security and protection. Their robust construction ensures they withstand daily wear and tear while maintaining their aesthetic appeal over time.",
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
      "The installation of Selective Systems' Aluminium Glass-to-Glass Corner Windows is tailored to provide seamless integration, durability, and unmatched aesthetics for your property. To ensure optimal performance, we recommend professional installation by our experienced team. We guarantee a precise fit with superior weather sealing and insulation, enhancing the energy efficiency and functionality of your space. Whether you’re in Navi Mumbai, Vile Parle, Kalyan, or near you, our expert services are customized to meet the unique requirements of your property. Proper installation not only elevates the appearance of your space but also ensures long-term value and reliability. Experience effortless elegance and top-notch performance with Selective Systems' glass-to-glass corner window installation services. Contact us today to upgrade your property with flawless installation near you.",
    maintenance: [
      "Maintaining Selective Systems' Aluminium Glass-to-Glass Corner Windows is easy and ensures their premium quality lasts for years. Designed to withstand diverse weather conditions while providing energy efficiency, these windows are ideal for properties in neighborhoods like Worli, Prabhadevi, Dadar, or near you.",
      "Routine maintenance includes cleaning the glass and frames with mild soap and water to keep their sleek appearance. Regularly check the window seals for any signs of wear and clean debris from the corners and edges to maintain proper sealing and insulation. These simple steps ensure your windows continue to perform optimally, providing unobstructed views and excellent protection from the elements.",
      "Thanks to their durable construction and low-maintenance design, our Aluminium Glass-to-Glass Corner Windows offer lasting performance with minimal effort. Whether you’re in Chembur, Powai, Juhu, or anywhere near your area, these windows are the perfect choice for modern aesthetics and superior durability.",
      "By following these maintenance tips, you can preserve the beauty and efficiency of your windows for years to come. Selective Systems' glass-to-glass corner windows deliver long-lasting performance and reliability near you, ensuring your property remains stylish and comfortable across all seasons.",
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
  const fetchedId = pathname.slice(-25);
  const product = AluminiumProductsPanel.find((item) => item.id === fetchedId);

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
          <h1 className="text-4xl font-bold text-white text-center">
            {product.ProductName}
          </h1>
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

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex gap-4 md:flex-col pt-4 md:pt-14">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className={`relative h-20 w-20 border-2 rounded-md overflow-hidden ${
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
            <h2 className="text-3xl text-center md:p-0 md:text-start din-bold">
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
            <div className="text-black">
              <span className="text-xl din-bold">Dimensions:</span>
              <table className="min-w-full border-collapse border border-gray-300 table-auto mt-2">
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
                      className={`${
                        index % 2 === 0 ? "bg-white" : "bg-gray-100"
                      }`}
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
              </table>
            </div>

            <Link href="tel:+919372593981">
              <button className="rounded-[5px] px-5 py-3 bg-gradient-to-br from-gray-50 to-gray-500 text-black roboto-bold  transition duration-700 border border-black hover:bg-white flex items-center gap-2 hover:scale-110">
                <BsFillTelephoneFill size={16} />
                CALL NOW
              </button>
            </Link>
          </div>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl din-bold mb-4">Product Description</h2>
            <p className="text-black roboto-light mb-6 text-justify px-2">
              {product.longDescription.title}
            </p>

            <main className="product-description py-4 px-4">
              <ul className="list-disc pl-6 space-y-6 text-black">
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

          <div>
            {" "}
            <h2 className="text-2xl din-bold mb-4">Applications</h2>
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
            <h2 className="text-2xl din-bold mb-4">Specifications</h2>
            <div className="grid grid-cols-2 gap-4">
              {product.specifications.map((spec, index) => (
                <div key={index} className="bg-secondary p-4 rounded-lg">
                  <h3 className="poppins-semibold text-gray-700">
                    {spec.name}
                  </h3>
                  <p className="text-gray-700 text-base">{spec.value}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl din-bold mb-4">Installation</h2>
            <p className="text-gray-700 text-base roboto-light text-justify">
              {product.installation}
            </p>
          </section>

          <section>
            <h2 className="text-2xl din-bold mb-4">Maintenance</h2>
            <p className="text-gray-700 text-base roboto-light text-justify">
              {product.maintenance}
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
