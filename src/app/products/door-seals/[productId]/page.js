"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound, usePathname } from "next/navigation";
import { useState } from "react";
import Doorseals1 from "../../../assets/DoorSeals/Doorseals1.png";
import Doorseal2 from "../../../assets/DoorSeals/Doorseal2.png";
import Doorseal3 from "../../../assets/DoorSeals/Doorseal3.png";
import Doorseal4 from "../../../assets/DoorSeals/Doorseal4.png";
// import Doorseal5 from "../../assets/DoorSeals/Doorseal5.png";
import Doorseal6 from "../../../assets/DoorSeals/Doorseal6.png";
import { IoChevronUp, IoChevronDown } from "react-icons/io5";
//Gallery
import floorthresholdupper from "../../../assets/Gallery/DoorSeals/Floor-threshold/floorthresholdupperside.jpg";
import floorside from "../../../assets/Gallery/DoorSeals/Floor-threshold/floor.png";
import monutingBracketdoor from "../../../assets/Gallery/DoorSeals/mounting-brackets/mountingBrackdDoor.jpg";
import metalAccessoris from "../../../assets/Gallery/DoorSeals/mounting-brackets/metalltueren.jpg";
import screw from "../../../assets/Gallery/DoorSeals/mounting-brackets/screw.jpg";
import threshold from "../../../assets/Gallery/DoorSeals/threshold/sealingpad.jpg";
import exampleImg from "../../../assets/Gallery/DoorSeals/threshold/rubber.jpg";
import blackrubber from "../../../assets/Gallery/DoorSeals/threshold/Blackrubber.jpg";
import doordropseal from "../../../assets/Gallery/DoorSeals/doordropseals/doordrop.jpg";
import doorsealinside from "../../../assets/Gallery/DoorSeals/doordropseals/sealdoorinside.jpg";
import screwaccess from "../../../assets/Gallery/DoorSeals/doordropseals/screwaccess.jpg";
import floorprofile from "../../../assets/Gallery/DoorSeals/floorProfile/floorprofile.jpg";
import floorprofileAccessoris from "../../../assets/Gallery/DoorSeals/floorProfile/floorprofileAccessoris.jpg";
import floorproduct from "../../../assets/Gallery/DoorSeals/floorProfile/floorproduct.jpg";
import NarrowGlass from "../../../assets/Gallery/DoorSeals/NarrowSeals/NarrowGlass.jpg";
import NarrowCover from "../../../assets/Gallery/DoorSeals/NarrowSeals/NarrowGlassCover.jpg";
import NarrowScrew from "../../../assets/Gallery/DoorSeals/NarrowSeals/screwnarrow.jpg";

const DoorSealProductsPanel = [
  {
    id: "threshold-floor",
    images: [Doorseals1, floorthresholdupper, floorside],
    ProductName: "Floor separation threshold",
    description:
      "Our floor separation threshold provides excellent sound isolation with an acoustic rating of 30 dB. Constructed from sturdy aluminum, it is available in both 40 mm and 60 mm widths. The threshold also offers an adjustable height range from 0 to 14 mm, ensuring a precise and easy installation for optimal performance.",
    features: [
      "From 30 dB acoustic insulation",
      "For best sound mittigation values and interrupted impact sound",
      "Base profile prepared with mortar protection",
      "Base profile prepared with acoustic insulation strips on the left and right",
      "Visually appealing solution",
    ],
    dimensions: [
      { name: "Height", value: "	3 mm (threshold height)" },
      { name: "Floor recess", value: "53 – 67 mm (adjustable)" },
      {
        name: "Fastening",
        value:
          "Base profile: prepared holes in the base profile / flat insert: with supplied holding cams",
      },
      { name: "Profile size", value: "40 mm or 60 mm wide" },
    ],
    longDescription: {
      title:
        "Selective Systems introduces our high-performance Floor Separation Threshold, designed to deliver superior sound isolation and seamless integration for both residential and commercial spaces. Engineered for maximum acoustic efficiency, this threshold ensures optimal sound separation and enhances the overall comfort of any interior environment.",
      features: [
        {
          name: "Superior Acoustic Performance",
          description:
            "Our floor separation threshold offers an impressive acoustic insulation rating of 30 dB, significantly reducing noise transmission between rooms. This feature makes it ideal for applications where privacy and quiet are essential, such as offices, apartments, and hotels.",
        },
        {
          name: "Durable Aluminium Construction",
          description:
            "Made from high-quality aluminium, the floor separation threshold is built for long-lasting durability. Its corrosion-resistant properties ensure it withstands wear and tear while maintaining a sleek, modern look in any environment.",
        },
        {
          name: "Flexible Height Adjustment",
          description:
            "This threshold comes with an easy-to-use height adjustment mechanism, allowing you to fine-tune the installation from 0 to 14 mm. This flexibility ensures a perfect fit, accommodating varying floor heights for a seamless transition between rooms.",
        },
        {
          name: "Stylish and Minimalist Design",
          description:
            "With its clean, minimalist design, the floor separation threshold adds an elegant finishing touch to any space. Whether you're designing a modern home or a professional office, it provides a subtle yet effective solution to floor separation needs.",
        },
        {
          name: "Easy Installation",
          description:
            "The threshold is designed for hassle-free installation. With simple adjustment and secure fitting, it can be quickly set up without the need for specialized tools, making it ideal for both renovation projects and new builds.",
        },
        {
          name: "Versatile Application",
          description:
            "Available in two width options (40 mm and 60 mm), this floor separation threshold is suitable for a wide range of applications, from residential to commercial spaces. It provides an elegant solution for dividing rooms, enhancing privacy, and ensuring effective sound separation.",
        },
      ],
    },
    specifications: [
      { name: "Surface", value: "silver anodised EV1" },
      { name: "Profile material", value: "aluminium" },
      { name: "Profile size", value: "40 mm or 60 mm wide" },
    ],
    installation:
      "nstalling Selective Systems' Floor Separation Threshold ensures superior sound isolation and durability for your space. We recommend professional installation for optimal performance. Our expert team provides a precise fit, ensuring seamless integration and effective sound separation. Whether you’re in Mumbai, Delhi, or Bengaluru, we offer customized installation services to meet your needs. Proper installation guarantees the threshold’s acoustic efficiency and longevity. Trust Selective Systems for a hassle-free installation that enhances both functionality and aesthetics in your property",
    maintenance: [
      "Selective Systems' Floor Separation Threshold requires minimal maintenance, making it the perfect choice for properties in cities like Mumbai, Delhi, and Bengaluru. To maintain its sleek appearance and performance, simply clean the aluminium frame with mild soap and water. ",
      "Regularly check the adjustment mechanism to ensure it functions smoothly. Periodic cleaning of the installation area helps preserve the threshold’s soundproofing and durability.",
      "With its low-maintenance design, this threshold delivers long-lasting performance, saving time and effort. Selective Systems provides a solution that combines durability, ease of care, and exceptional sound isolation for your home or office.",
    ],
  },
  {
    id: "bracketMounting",
    images: [Doorseal2, monutingBracketdoor, metalAccessoris, screw],
    ProductName: "Mounting brackets",
    description:
      "At Selective Systems, we provide high-quality solutions for wooden door installations. Our Planet Assembly Set TW/US is the ideal choice for ensuring a secure, efficient, and professional installation. This comprehensive kit is designed to deliver both durability and performance for residential and commercial use.",
    features: [
      "48 dB soundproofing and smoke protection",
      "Automatic adjustment for sloped or uneven floors",
      "Up to 20 mm adjustable seal height",
      "Stylish Design: Sleek and modern, enhancing property aesthetics.",
      "Durable aluminum profile designed for long-term use",
    ],
    dimensions: [
      {
        name: "Groove size",
        value: "	8,3 mm wide and 30.5 to 40 mm deep",
      },
      {
        name: "Seal profile",
        value:
          "high-quality silicone or high-quality self-extinguishing silicone",
      },
      {
        name: "Frame protector plate",
        value: "stainless steel, for knocking in, 20 x 20 mm",
      },
      { name: "Max. drop height", value: "20 mm" },
      { name: "Profile material", value: "aluminium " },
    ],
    longDescription: {
      title:
        "Our Automatic Drop-Down Seal from Selective Systems is designed for doors requiring superior soundproofing, smoke protection, and energy efficiency. Crafted from premium aluminum, this high-performance seal automatically adapts to uneven floor surfaces and provides a seal height of up to 20 mm. The silicone lip ensures a tight seal, effectively keeping out drafts, smoke, and noise, ensuring a comfortable and secure indoor environment. The robust aluminum profile (8 x 30 mm) ensures durability and long-lasting performance, making it perfect for both residential and commercial spaces.",
      features: [
        {
          name: "Premium Aluminum Construction",
          description:
            "Made from high-quality aluminum, our Automatic Drop-Down Seal offers superior strength and corrosion resistance. This premium aluminum profile (8 x 30 mm) ensures durability and long-term performance, making it ideal for homes, offices, and commercial spaces that require a reliable door sealing solution.",
        },
        {
          name: "Superior Soundproofing & Smoke Protection",
          description:
            "Our Automatic Drop-Down Seal is designed to provide 48 dB soundproofing and smoke protection, offering a peaceful and safe indoor environment. The advanced sealing technology ensures that drafts, smoke, and unwanted noise are effectively blocked, making it perfect for sound-sensitive areas and smoke-free spaces.",
        },
        {
          name: "Automatic Floor Adjustment",
          description:
            "The innovative design of the Automatic Drop-Down Seal allows for automatic floor adjustment, compensating for sloping or uneven floors. With an adjustable seal height of up to 20 mm, it ensures a perfect fit and maintains a tight seal, even in challenging environments.",
        },
        {
          name: "Energy-Efficient & Eco-Friendly",
          description:
            "Designed with energy efficiency in mind, our door seals contribute to reducing energy consumption by keeping indoor temperatures stable. This seal helps prevent drafts and air leakage, allowing you to maintain a comfortable environment and reduce heating and cooling costs. The energy-efficient design also supports sustainability, making it an eco-friendly solution for both residential and commercial buildings.",
        },
        {
          name: "Durable and Low Maintenance",
          description:
            "Our premium aluminum door seals require minimal maintenance. The high-quality materials are resistant to wear and weathering, ensuring long-lasting performance without the need for frequent repairs or replacements. A simple cleaning routine will keep the seal functioning optimally for years.",
        },
        {
          name: "Customizable Fit for All Doors",
          description:
            "This automatic drop-down seal is available in customizable sizes and configurations to suit a wide range of door types, including wooden, metal, and glass doors. Tailor the seal’s dimensions to meet your specific requirements, ensuring the perfect fit and enhanced protection for your space.",
        },
        {
          name: "Versatile Application for Residential & Commercial Use",
          description:
            "Whether you're sealing doors in a residential property, commercial building, or industrial facility, our Automatic Drop-Down Seal offers versatile performance. Perfect for offices, apartments, hotels, and other high-traffic areas, it enhances comfort and protection in any setting.",
        },
        {
          name: "Sleek and Discreet Design",
          description:
            "With a sleek and modern design, our Automatic Drop-Down Seal blends seamlessly with your door frame, offering an unobtrusive look while providing exceptional performance. Its minimalistic style makes it suitable for both contemporary and traditional door designs.",
        },
      ],
    },

    specifications: [
      { name: "Profile size ", value: "	8 x 30 mm" },
      {
        name: "Sound absorption value",
        value: "up to 48 dB at ground air 7 mm",
      },
      {
        name: "Drop height adjustment",
        value: "on release pin with 3 mm Allen key",
      },
      { name: "Wind Pressure Resistance", value: "ASTM E330: 2000 Pa" },
    ],
    installation:
      "Enhance the stability and durability of your doors with Selective Systems' Mounting Brackets. Designed for all types of doors, these premium mounting brackets ensure easy installation and a secure fit. Made with high-quality stainless steel, they provide superior strength and support for both residential and commercial doors. Whether you’re in Mumbai, Delhi, Bangalore, or beyond, our brackets offer long-lasting performance, ensuring your doors stay firmly in place. Perfect for wooden, aluminum, and other door types, these mounting brackets help optimize door function and security. Upgrade your doors today with Selective Systems' Mounting Brackets for a reliable, professional finish.",
    maintenance: [
      "To ensure the long-lasting performance of Selective Systems' Mounting Brackets, periodic maintenance is key. These stainless steel brackets are designed for durability, requiring minimal upkeep",
      "Wipe the brackets with a damp cloth to remove dust, dirt, or debris. A mild detergent can be used for stubborn stains.",
      "Periodically inspect the brackets and screws for any signs of loosening. Tighten them as needed to maintain secure door support.",
      "While stainless steel is resistant to corrosion, check for any signs of wear, particularly in areas exposed to extreme weather. If any rust or damage is found, clean and reapply protective coatings if necessary.",
      "If the brackets have any moving components, a light lubricant can be applied to ensure smooth operation.",
    ],
  },
  {
    id: "Sliding-Windows",
    images: [Doorseal3, threshold, exampleImg, blackrubber],
    ProductName: "Click Threshold",
    description:
      "Aluminium Sliding Windows offer a sleek, modern solution for homes and offices, combining durability, energy efficiency, and ease of use. With slim frames and large glass panels, they maximize natural light and provide unobstructed views, enhancing the overall aesthetic of your space. Ideal for urban environments, these windows are weather-resistant, low-maintenance, and perfect for energy-conscious homeowners looking for high-performance window solutions.",
    features: [
      "Thermally separated flat threshold",
      "Ideal for levelling",
      "Simple click system",
      "For renovations and new construction",
      "Invisible screw connection",
      "In combination with Planet X3, guaranteed driving rain proof",
    ],
    dimensions: [
      {
        name: "Surface",
        value: "silver anodised EV1",
      },
      { name: "Height", value: "7.5 mm (ramp)" },
      { name: "Thermal separation	", value: "yes" },
      { name: "Fastening", value: "Screws or glue" },
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
      { name: "Can be shortened", value: "yes" },
      { name: "Profile size", value: "130 mm wide" },
      { name: "Profile material", value: "Aluminium, plastic" },
      { name: "Length", value: "<6000mm" },
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
    id: "Door-drop-seals",
    images: [Doorseal4, doordropseal, doorsealinside, screwaccess],
    ProductName: "Door drop seals",
    description:
      "The Selective Systems Automatic Door Drop-Down Seal provides excellent acoustic insulation with a 27 dB sound reduction. Designed for rebated doors, it automatically adjusts for sloping floors, with a sealing height up to 20 mm. Made with high-quality silicone and durable aluminium profiles, it ensures effective noise control and long-lasting performance.",
    features: [
      "Energy-Efficient: Keeps interiors cool in summer and warm in winter.",
      "Durable & Weather-Resistant: Withstands extreme weather.",
      "Low Maintenance: Easy to clean and requires minimal upkeep.",
      "Stylish Design: Sleek and modern, enhancing property aesthetics.",
      "Customizable: Available in various sizes and finishes to suit your need.",
    ],
    dimensions: [
      {
        name: "Groove size",
        value: "25,3 mm wide and 43.5 mm deep / 8,3 mm wide and 30,5 mm deep",
      },
      {
        name: "Seal profile",
        value:
          "high-quality silicone or high-quality self-extinguishing silicone",
      },
      {
        name: "Sound absorption value",
        value: "up to 27 dB at ground air 7 mm",
      },
      {
        name: "Frame protector plate",
        value: "stainless steel, for knocking in, 20 x 20 mm",
      },
      { name: "Can be shortened", value: "	max. 125 mm" },
      { name: "Release", value: "on one side, hinge side" },
    ],
    longDescription: {
      title:
        "Selective Systems proudly presents our Automatic Door Drop-Down Seal, a high-performance solution designed to enhance acoustic insulation for rebated doors. Perfect for both commercial and residential spaces, this product offers superior soundproofing and reliable sealing, ensuring a peaceful environment. Whether you're in Mumbai, Delhi, or Dubai, our door seals are engineered to perform under varying conditions, offering excellent durability and functionality.",
      features: [
        {
          name: "Enhanced Acoustic Insulation",
          description:
            "Our Automatic Door Drop-Down Seal provides an impressive 27 dB sound reduction, making it ideal for spaces requiring high-level soundproofing. Whether in office environments, studios, or residential properties, this seal helps to maintain privacy and reduce noise transmission.",
        },
        {
          name: "Automatic Compensation for Sloping Floors",
          description:
            "Designed with an automatic release mechanism on the hinge side, the seal adjusts to sloping floors, ensuring a secure fit and efficient sealing even on uneven surfaces. This feature guarantees consistent performance and reliability in various flooring conditions.",
        },
        {
          name: "Durable Construction with High-Quality Silicone Lip",
          description:
            "The lip is made from high-quality silicone, providing long-lasting durability and a secure seal. This premium material enhances the performance of the seal, ensuring it remains functional and effective for years to come, even in harsh conditions.",
        },
        {
          name: "Sealing Height & Performance",
          description:
            "The seal offers an adjustable height of up to 20 mm, providing a perfect fit for a wide range of door types. The parallel lowering mechanism ensures a smooth operation, while the MinE-F channel and bottom sealing enhance the overall soundproofing effectiveness.",
        },
        {
          name: "Customizable Profiles & Easy Installation",
          description:
            "The seal comes with side mounting and is available in aluminum profiles of 8 x 30 mm or 25 x 43 mm, offering flexibility for different door configurations. The installation process is simple and quick, ensuring a hassle-free experience for both professionals and DIY enthusiasts.",
        },
        {
          name: "Weather & Fire-Resistant Options",
          description:
            "Available in both standard and fire-retardant versions, our drop-down seal is designed to withstand various environmental conditions. The fire-retardant model offers additional safety, making it suitable for buildings where fire safety is a priority.",
        },
      ],
    },
    specifications: [
      {
        name: "Drop height adjustment",
        value: "on release pin with 3 mm Allen key",
      },
      { name: "Max. drop height", value: "20 mm" },
      { name: "Profile size", value: "8 x 30 mm / 25 x 43 mm" },
      { name: "Profile material", value: "Aluminium (both)" },
      {
        name: "Special features",
        value:
          "Air flow 30 m³/h at ventilation length 1050 mm and pressure difference of 3.9 Pa",
      },
    ],
    installation:
      "The installation of Selective Systems' Automatic Door Drop-Down Seal ensures optimal performance and sound insulation. We recommend professional installation for a precise fit, especially for areas like Andheri, Malad, Borivali, Thane, and Navi Mumbai. Our experts guarantee proper sealing, enhancing the acoustic performance of your doors. Trust Selective Systems for flawless installation that ensures long-term durability and efficiency.",
    maintenance: [
      "Maintaining the Automatic Door Drop-Down Seal is simple and hassle-free. Clean the aluminium profiles and silicone lip with mild soap and water to maintain its sleek appearance. Regularly check the mechanism for smooth operation and remove any debris to ensure continued performance.",
      "Thanks to its durable construction, this seal provides long-lasting performance with minimal upkeep. Whether in Mumbai, Delhi, Uttar Pradesh, or Punjab, Selective Systems offers products designed to withstand harsh environments.",
      "By following these simple maintenance tips, you can ensure your door seal continues to provide superior sound insulation and durability for years to come.",
    ],
  },
  {
    id: "Drop-down-seals",
    images: [floorprofile, floorprofileAccessoris, floorproduct],
    ProductName: "Drop-down seals",
    description:
      "Selective Systems presents the Automatic Door Drop-Down Seal, offering 44 dB sound and smoke protection for sliding doors. Featuring parallel lowering, a silicone lip, and adjustable seal heights (7–10 mm, 10–13 mm, 13–16 mm), it ensures effective sealing. With a durable aluminium profile and lateral attachment, this seal provides optimal performance and reliability.",
    features: [
      "Drop-down seals for sliding doors",
      "No lock or holding device needed due to zero force release",
      "Compact, space-saving solution with integrated floor guide groove",
      "Automatic compensation of sloped floors",
      "With optimum sealing, acoustic insulation value up to 44 dB (with 7 mm ground clearance)",
      "High-quality silicone lip, lateral protrusion adjustable",
    ],
    dimensions: [
      {
        name: "Groove size",
        value: "22,3 mm wide and 30.5 to 35 mm deep",
      },
      { name: "Seal profile", value: "high-quality silicone" },
      {
        name: "Sound absorption value",
        value: "up to 44 dB at ground air 7 mm",
      },
      {
        name: "Fastening",
        value: "with stainless steel mounting bracket on the side",
      },
    ],
    longDescription: {
      title:
        "Selective Systems proudly presents our Automatic Door Drop-Down Seal, a high-performance solution for soundproofing and smoke shielding. Ideal for both residential and commercial spaces, this drop-down seal enhances the functionality of sliding doors while providing superior noise reduction. Designed for durability and easy integration, it’s the perfect choice for those seeking a seamless combination of performance and aesthetics.",
      features: [
        {
          name: "Sound & Smoke Protection",
          description:
            "Our Automatic Door Drop-Down Seal offers 44 dB sound reduction and effective smoke shielding. This makes it the perfect choice for offices, conference rooms, or any space requiring a high level of noise control and fire safety.",
        },
        {
          name: "Parallel Lowering Mechanism",
          description:
            "The seal is equipped with a parallel lowering mechanism that ensures a smooth, consistent seal, even on sloped floors. It automatically adjusts to the floor, ensuring optimal performance regardless of floor conditions.",
        },
        {
          name: "High-Quality Silicone Lip",
          description:
            "The durable silicone lip provides an airtight seal, improving acoustic insulation and preventing smoke leakage. Its high-quality design ensures longevity and consistent performance, even in high-traffic areas.",
        },
        {
          name: "Adjustable Sealing Heights",
          description:
            "With adjustable sealing heights of 7–10 mm, 10–13 mm, and 13–16 mm, the drop-down seal is versatile and can be tailored to suit various door types. This flexibility ensures that it can be used in different architectural environments and door specifications.",
        },
        {
          name: "Durable Aluminium Profile",
          description:
            "The robust aluminium profile (22 x 30 mm) ensures the durability of the door seal, while its lateral attachment provides a secure fit. Designed for easy installation, the aluminium profile also contributes to the overall aesthetics of your space.",
        },
        {
          name: "Low Maintenance & Long-Lasting",
          description:
            "Thanks to its high-quality materials, the Automatic Door Drop-Down Seal requires minimal maintenance. Regular cleaning ensures long-term performance, making it ideal for commercial properties or residential buildings in high-humidity or dusty environments.",
        },
        {
          name: "Enhanced Security & Performance",
          description:
            "Equipped with advanced features such as automatic release and parallel lowering, our drop-down seal enhances both the security and performance of your doors. Its design is ideal for spaces where both soundproofing and smoke protection are critical.",
        },
      ],
    },
    specifications: [
      { name: "Can be shortened", value: "125 mm (+ max. 45 mm release side)" },
      {
        name: "Release",
        value:
          "through floor guide (3 pcs. for ground air 7 –10 / 10 – 13 / 13 – 16 mm)",
      },
      { name: "Max. drop height", value: "7 – 16 mm" },
      { name: "Profile size", value: "22 x 30 mm" },
      { name: "Profile material", value: "aluminium" },
    ],
    installation:
      "The installation of Selective Systems' Automatic Door Drop-Down Seal is designed to deliver optimal performance, ensuring soundproofing and smoke protection for your doors. For best results, we recommend professional installation by our skilled team, ensuring a precise fit with perfect sealing and functionality. Whether you're in Andheri, Dadar, Vikhroli, Mulund, or other central locations in Mumbai, or in Pune, Surat, Ahmedabad, our team provides expert services tailored to meet your needs. A proper installation guarantees enhanced durability and long-term value for your investment. Contact Selective Systems today to ensure flawless installation near you.",

    maintenance: [
      "At Selective Systems, maintaining the Automatic Door Drop-Down Seal is simple and ensures its long-lasting performance. Ideal for properties in areas like Borivali, Ghatkopar, Kurla, and Navi Mumbai, this seal is built to last while offering effective sound and smoke insulation.",
      "Routine maintenance involves cleaning the silicone lip and aluminium profiles with mild soap and water to preserve their functionality. Regularly inspect the drop-down mechanism for smooth operation, and clear any debris to keep the seal performing at its best. These easy steps help maintain optimal sealing and protection from noise and smoke.",
      "Thanks to its sturdy construction and minimal maintenance requirements, our Automatic Door Drop-Down Seal offers long-lasting performance. Whether you are in Thane, Bhandup, Mulund, or any other central Mumbai area, this product ensures top-notch acoustic insulation and sealing for your space.",
      "By following these simple maintenance guidelines, you can keep the Automatic Door Drop-Down Seal in peak condition, ensuring it continues to provide reliable protection and performance across locations like Nashik, Surat, and Mumbai's central region.",
    ],
  },
  {
    id: "Automatic-doors",
    images: [Doorseal6, NarrowGlass, NarrowCover, NarrowScrew],
    ProductName: "Automatic door drop-down seal",
    description:
      "Selective Systems' Automatic Door Drop-Down Seal provides 48 dB acoustic insulation and fire/smoke protection for doors. Designed with automatic compensation for sloping floors and a silicone lip for effective sealing, it ensures optimal performance. Available in silver anodized or matte anodized stainless steel profiles, it fits hinged doors with a seal height of up to 16mm.",
    features: [
      "Energy-Efficient: Keeps interiors cool in summer and warm in winter.",
      "Durable & Weather-Resistant: Withstands extreme weather.",
      "Low Maintenance: Easy to clean and requires minimal upkeep.",
      "Stylish Design: Sleek and modern, enhancing property aesthetics.",
      "Customizable: Available in various sizes and finishes to suit your need.",
    ],
    dimensions: [
      {
        name: "Seal profile",
        value:
          "high-quality silicone or high-quality self-extinguishing silicone",
      },
      {
        name: "Sound absorption value",
        value: "up to 48 dB at ground air 7 mm",
      },
      {
        name: "Frame protector plate",
        value: "stainless steel, for knocking in, 20 x 20 mm",
      },
      { name: "Profile size", value: "11.5 x 38 mm" },
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
      { name: "Can be shortened", value: "max. 125 mm" },
      {
        name: "Drop height adjustment",
        value: "on release pin with 3 mm Allen key",
      },
      { name: "Max. drop height", value: "16 mm" },
      { name: "Fastening", value: "for gluing" },
      { name: "Profile material", value: "aluminium" },
    ],
    installation:
      "The installation of Selective Systems' Automatic Door Drop-Down Seal ensures optimal sealing and soundproofing for your doors. Our expert team guarantees a precise fit with seamless integration, providing exceptional fire and smoke protection. Whether you're in Lower Parel, Bandra, Goregaon, Mulund, or other locations in Mumbai, or in states like Uttar Pradesh, Tamil Nadu, Rajasthan, Madhya Pradesh, or Maharashtra, our professional installation service is tailored to meet the specific needs of your property. Trust Selective Systems for a flawless installation that enhances both functionality and durability.",
    maintenance: [
      "Maintaining the Automatic Door Drop-Down Seal from Selective Systems is simple and ensures long-lasting performance. ",
      "Routine maintenance includes cleaning the silicone lip and checking for any wear or debris in the seal. ",
      "For properties in cities like Andheri, Bhandup, Thane, Worli, or areas in Uttar Pradesh, Karnataka, Maharashtra, Chhattisgarh, and Rajasthan, these seals provide low-maintenance durability.",
      "Regular cleaning helps preserve the sealing properties, ensuring effective sound and smoke protection for your doors. By following basic maintenance, you can ensure reliable performance for years.",
    ],
  },
];

const accordionData = [
  {
    title: "Why Choose Door Seals for Your Home or Office",
    content:
      "Door seals are essential for improving the insulation, energy efficiency, and security of your home or office. They help prevent drafts, moisture, dust, and noise from entering your space, ensuring a more comfortable and energy-efficient environment. Whether you're in Mumbai, Dubai, or Tajikistan, high-quality door seals can enhance the performance and longevity of your doors, providing protection and comfort year-round.",
  },
  {
    title: "Benefits of Door Seals for Energy Efficiency",
    content:
      "Installing door seals significantly improves your home's energy efficiency. They prevent heat from escaping in the winter and block hot air from entering in the summer, reducing the need for excessive heating and cooling. This results in lower energy bills and a more comfortable indoor environment. Door seals are an excellent choice for energy-conscious homeowners and businesses in cities like Mumbai, Delhi, and Dubai, where temperature fluctuations are common.",
  },
  {
    title: "Door Seals for Noise Reduction and Soundproofing",
    content:
      "Door seals are highly effective in reducing noise and providing soundproofing for homes and offices. They block unwanted sound from entering or escaping through gaps around the door, ensuring peace and privacy. Whether you're in a noisy urban area like Mumbai or working in a busy office environment, door seals provide a simple and effective solution to reduce noise pollution and improve acoustics.",
  },
  {
    title: "Weatherproofing and Protection with Door Seals",
    content:
      "Door seals provide excellent protection against various weather conditions. They prevent drafts, rain, dust, and moisture from entering your home or office, keeping your interiors dry and comfortable. In regions with extreme weather, such as Mumbai's monsoon season or Dubai's heat, door seals ensure that your property remains secure and well-protected from the elements.",
  },
  {
    title: "Durability and Long-Lasting Performance of Door Seals",
    content:
      "Our door seals are made from high-quality materials like rubber, silicone, and aluminum to ensure long-lasting performance. These durable seals maintain their functionality over time, even under harsh conditions. Whether you're in a coastal city like Chennai or in urban environments like Mumbai and Delhi, door seals will continue to provide excellent performance and protection against drafts, moisture, and noise.",
  },
  {
    title: "Where to Use Door Seals in Your Home or Office",
    content:
      "Door seals are versatile and can be used in various applications throughout your home or office. They're ideal for main entrance doors, patio doors, office doors, and internal doors. Whether you're sealing gaps in residential or commercial properties, door seals help maintain comfort, improve energy efficiency, and enhance security. In cities like Mumbai, Delhi, Dubai, and Tajikistan, they are a must-have for ensuring long-lasting protection and performance in any building.",
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
          <p className="text-gray-700 poppins-extralight">{content}</p>
        </div>
      )}
    </div>
  );
};

export default function ProductPage({ params }) {
  console.log("path: ", params);
  const [openAccordion, setOpenAccordion] = useState(0);
  const pathname = usePathname();
  const fetchedId = pathname.slice(-15);
  console.log("fid:", fetchedId);
  const product = DoorSealProductsPanel.find((item) => item.id === fetchedId);

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
          href="/products/door-seals"
          className="text-blue-600 hover:underline mb-4 inline-block"
        >
          &larr; Back to All Windows
        </Link>
        <p className="text-gray-700 poppins-extralight text-justify"></p>

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
            <h2 className="text-3xl text-center md:p-0 md:text-start text-green-400 drop-shadow-lg poppins-semibold ">
              {product.ProductName}
            </h2>
            <p className="text-gray-700 text-justify px-2">
              {product.description}
            </p>
            <div>
              <h3 className="text-xl text-green-400 drop-shadow-lg poppins-semibold mb-2">
                Features:
              </h3>
              <ul className="list-disc list-inside">
                {product.features.map((feature, index) => (
                  <li
                    key={index}
                    className="text-gray-700 text-base poppins-extralight"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-gray-700">
              <span className="text-xl text-green-400 drop-shadow-lg poppins-semibold">
                Dimensions:
              </span>
              <table className="min-w-full border-collapse border border-gray-300 table-auto mt-2">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="py-2 px-4 text-left font-bold text-gray-700 border border-gray-300">
                      Name
                    </th>
                    <th className="py-2 px-4 text-left font-bold text-gray-700 border border-gray-300">
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
          </div>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl poppins-semibold text-green-400 drop-shadow-lg mb-4">
              Product Description
            </h2>
            <p className="text-gray-700 mb-6 text-justify px-2">
              {product.longDescription.title}
            </p>

            <main className="product-description py-4 px-4">
              <ul className="list-disc pl-6 space-y-6 text-gray-700">
                {product.longDescription.features.map((feature, index) => (
                  <li key={index}>
                    <h3 className="poppins-semibold text-lg text-gray-700">
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
            <h2 className="text-2xl poppins-semibold text-green-400 drop-shadow-lg mb-4">
              Applications
            </h2>
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
            <h2 className="text-2xl poppins-semibold text-green-400 drop-shadow-lg mb-4">
              Specifications
            </h2>
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
            <h2 className="text-2xl poppins-semibold text-green-400 drop-shadow-lg mb-4">
              Installation
            </h2>
            <p className="text-gray-700 text-base poppins-extralight text-justify">
              {product.installation}
            </p>
          </section>

          <section>
            <h2 className="text-2xl poppins-semibold text-green-400 drop-shadow-lg mb-4">
              Maintenance
            </h2>
            <p className="text-gray-700 text-base poppins-extralight text-justify">
              {product.maintenance}
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
