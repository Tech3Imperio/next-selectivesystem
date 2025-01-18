// // pages/aluminium-windows/index.js

// import Image from "next/image";
// import Link from "next/link";
// import framelessImg from "../../assets/Railing/RailingProducts/ModernBalcony.webp";
// import TopMuntedImg from "../../assets/Railing/RailingProducts/TopMountedImg.webp";
// import FramedGlassImg from "../../assets/Railing/RailingProducts/FramedGlassImg.webp";
// // import Doorseal4 from "../../assets/DoorSeals/Doorseal4.png";
// // import Doorseal5 from "../../assets/DoorSeals/Doorseal5.png";
// // import Doorseal6 from "../../assets/DoorSeals/Doorseal6.png";
// const GlassRailingProductsPanel = [
//   {
//     id: "threshold-floor",
//     image: framelessImg,
//     ProductName: "Frameless Glass Railing",
//   },
//   {
//     id: "bracketMounting",
//     image: TopMuntedImg,
//     ProductName: "Top Mounted Glass Railing",
//   },
//   {
//     id: "Sliding-Windows",
//     image: FramedGlassImg,
//     ProductName: "Framed Glass Railing",
//   },
//   // {
//   //   id: "Door-drop-seals",
//   //   image: Doorseal4,
//   //   ProductName: "Door drop seals",
//   // },
//   // {
//   //   id: "Drop-down-seals",
//   //   image: Doorseal5,
//   //   ProductName: "Drop-down seals",
//   // },
//   // {
//   //   id: "Automatic-doors",
//   //   image: Doorseal6,
//   //   ProductName: "Automatic door drop-down seal",
//   // },
// ];

// export default function GlassRailingProduct() {
//   return (
//     <div className="max-w-[85rem] mx-auto flex flex-col justify-center items-center pt-14">
//       <div className="m-4">
//         <h2 className=" text-xl lg:text-3xl din-bold mb-8 text-center">
//           Enhance Your Space with <strong>Frameless Glass Railings,</strong>{" "}
//           <strong>Balcony Glass Railings,</strong> and Modern Staircase Designs
//           – Sleek, Durable, and Elegant Aluminium Solutions for Stylish
//           Interiors and Exteriors
//         </h2>
//         <p className=" roboto-light text-base text-justify ">
//           Elevate both your indoor and outdoor spaces with our{" "}
//           <strong>sleek and durable glass railing systems.</strong> Offering
//           <strong>frameless glass railings,</strong> stylish <b>aluminium</b>{" "}
//           options, and elegant designs, our solutions combine modern aesthetics
//           with ultimate safety. Whether for balconies, staircases, or commercial
//           properties, our high-quality <strong>glass railing</strong> systems
//           are designed to enhance your space with sophistication and durability.
//           With expert installation services available across India—Mumbai,
//           Delhi, Hyderabad, and beyond—you can trust us to deliver innovative
//           glass railing solutions that stand the test of time.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-4">
//         {GlassRailingProductsPanel.map((item) => (
//           <Link
//             href={`/products/glass-railings/${item.id}`}
//             key={item.id}
//             className="group"
//           >
//             <div className="rounded-lg flex flex-col overflow-hidden transition-transform duration-300 group-hover:scale-105">
//               {/* Center the image in the container */}
//               <div className="flex justify-center items-center p-4">
//                 <Image
//                   src={item.image}
//                   alt={item.ProductName}
//                   loading="lazy"
//                   className="h-[100%] w-[100%] object-cover rounded-2xl"
//                 />
//               </div>
//             </div>
//             <p className="text-center text-xl roboto-light">
//               {item.ProductName}
//             </p>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }
"use client";
import Image from "next/image";
import Link from "next/link";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import framelessImg from "../../assets/Railing/RailingProducts/ModernBalcony.webp";
import TopMuntedImg from "../../assets/Railing/RailingProducts/TopMountedImg.webp";
import FramedGlassImg from "../../assets/Railing/RailingProducts/FramedGlassImg.webp";
const GlassRailingProductsPanel = [
  {
    id: "frameless-glass-railing",
    image: framelessImg,
    ProductName: "Frameless Glass Railing",
  },
  {
    id: "top-mounted-glass-raili",
    image: TopMuntedImg,
    ProductName: "Top Mounted Glass Railing",
  },
  {
    id: "frameds-glass-railingss",
    image: FramedGlassImg,
    ProductName: "Framed Glass Railing",
  },
];

const blogPosts = [
  {
    id: 1,
    title: "The Benefits of Glass Railings",
    excerpt:
      "Discover why glass railings are becoming a popular choice for modern architecture, offering sleek designs and safety features for staircases and balconies...",
    content:
      "Glass railings provide a clean, contemporary look that enhances the aesthetics of any space. They are perfect for both residential and commercial properties, offering unobstructed views, increased natural light, and a spacious feel. Whether you're designing a staircase glass railing, balcony glass railing, or other glass railing systems, these railings ensure safety without compromising on style. Additionally, they are easy to maintain and built to last, making them a practical and beautiful choice for your property.",
  },
  {
    id: 2,
    title: "Choosing the Right Glass for Your Glass Railing",
    excerpt:
      "Learn about the different types of glass used in glass railings and how to select the best option for your balcony or staircase glass railing...",
    content:
      "When selecting glass for your glass railing, consider the type, thickness, and treatment of the glass. Tempered glass is commonly used for its strength, providing a safe and durable option for glass railings. Laminated glass offers extra security and soundproofing, which is ideal for both indoor and outdoor applications. For those looking for added clarity, low-iron glass is a great choice, especially for framed glass railings or frameless glass railings in balconies or staircases.",
  },
  {
    id: 3,
    title: "Installation Tips for Glass Railings",
    excerpt:
      "Get expert advice on installing glass railings, including framed and frameless options, to ensure safety and longevity in your space...",
    content:
      "Installing glass railings correctly is essential for both safety and aesthetics. Whether you're installing a framed glass railing or a frameless glass railing, always ensure that you follow local building codes and manufacturer guidelines. A secure and stable installation process is crucial, especially for balcony glass railings or staircase glass railings. Use quality hardware designed specifically for glass railings to ensure long-term durability and performance.",
  },
];

const whyChooseGlassRailing = [
  "Unobstructed Views: Glass railings provide clear sightlines, making them perfect for balconies and staircases, enhancing your view without hindrance.",
  "Modern Aesthetics: They add a contemporary and sleek touch to any space, offering a minimalist design perfect for modern glass railing systems.",
  "Durability: Made from tempered glass, glass railings are built to last and provide a strong, reliable barrier while maintaining a stylish appearance.",
  "Low Maintenance: Glass railings are easy to clean and maintain, offering resistance to weathering and corrosion, ensuring longevity for both indoor and outdoor applications.",
  "Versatility: Glass railings can be installed in a wide range of spaces, including staircases, balconies, terraces, and decks, making them a versatile option for modern architecture.",
  "Safety: Tempered glass is highly resistant to breakage and shatters into small, harmless pieces if broken, making glass railings a safe choice for both residential and commercial properties.",
];

const faqItems = [
  {
    question: "Are glass railings safe?",
    answer:
      "Yes, glass railings are safe when properly installed. Typically made from tempered or laminated glass, glass railings are engineered to be strong and resilient, breaking into small, harmless pieces if shattered. This makes them a safe and practical choice for balconies, staircases, and other glass railing applications.",
  },
  {
    question: "How do I clean and maintain glass railings?",
    answer:
      "Glass railings are easy to maintain. Simply clean the glass with mild soap and water and dry it with a soft cloth to keep your glass railing looking pristine. Avoid using abrasive cleaners or materials that could scratch the surface of the glass, whether it's for your balcony glass railing or staircase glass railing.",
  },
  {
    question: "Can glass railings be used outdoors?",
    answer:
      "Yes, glass railings are suitable for outdoor use, especially if they're made with tempered glass and weather-resistant hardware. They're ideal for balconies, decks, and staircases, offering a durable and elegant railing solution for both residential and commercial outdoor spaces.",
  },
];

export default function GlassRailingProduct() {
  const [expandedBlog, setExpandedBlog] = useState(null);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleBlog = (id) => {
    setExpandedBlog(expandedBlog === id ? null : id);
  };

  const toggleFaq = (id) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  return (
    <div className="max-w-[85rem] mx-auto flex flex-col justify-center items-center pt-14">
      <div className="m-4">
        <h2 className="text-xl lg:text-3xl din-bold mb-8 text-center">
          Enhance Your Space with <strong>Frameless Glass Railings,</strong>{" "}
          <strong>Balcony Glass Railings,</strong> and Modern Staircase Designs
          – Sleek, Durable, and Elegant Aluminium Solutions for Stylish
          Interiors and Exteriors
        </h2>
        <p className="roboto-light text-base text-justify">
          Elevate both your indoor and outdoor spaces with our{" "}
          <strong>sleek and durable glass railing systems.</strong> Offering
          <strong>frameless glass railings,</strong> stylish <b>aluminium</b>{" "}
          options, and elegant designs, our solutions combine modern aesthetics
          with ultimate safety. Whether for balconies, staircases, or commercial
          properties, our high-quality <strong>glass railing</strong> systems
          are designed to enhance your space with sophistication and durability.
          With expert installation services available across India—Mumbai,
          Delhi, Hyderabad, and beyond—you can trust us to deliver innovative
          glass railing solutions that stand the test of time.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-4">
        {GlassRailingProductsPanel.map((item) => (
          <Link
            href={`/products/glass-railings/${item.id}`}
            key={item.id}
            className="group"
          >
            <div className="rounded-lg flex flex-col overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <div className="flex justify-center items-center p-4">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.ProductName}
                  loading="lazy"
                  className="h-[100%] w-[100%] object-cover rounded-2xl"
                />
              </div>
            </div>
            <p className="text-center text-xl roboto-light">
              {item.ProductName}
            </p>
          </Link>
        ))}
      </div>

      {/* Blog Section */}
      <div className="w-full mt-12">
        <div className="text-3xl din-bold mb-6 text-center">
          Choose Glass Railing
        </div>
        {blogPosts.map((post) => (
          <div key={post.id} className="mb-6 border-b pb-4">
            <div className="text-xl din-bold mb-2">{post.title}</div>
            <p className="mb-2">{post.excerpt}</p>
            {expandedBlog === post.id ? (
              <div>
                <p className="mb-4">{post.content}</p>
                <button
                  onClick={() => toggleBlog(post.id)}
                  className="text-blue-600 hover:text-blue-800 flex items-center"
                >
                  Read Less <FaChevronUp className="ml-1" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => toggleBlog(post.id)}
                className="text-blue-600 hover:text-blue-800 flex items-center"
              >
                Read More <FaChevronDown className="ml-1" />
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Why Choose Glass Railing Section */}
      <div className="w-full mt-12">
        <div className="text-3xl din-bold mb-6 text-center">
          Why Choose Glass Railing?
        </div>
        <ul className="list-disc pl-6">
          {whyChooseGlassRailing.map((reason, index) => (
            <li key={index} className="mb-2">
              {reason}
            </li>
          ))}
        </ul>
      </div>

      {/* FAQ Section */}
      <div className="w-full mt-12">
        <div className="text-3xl din-bold mb-6 text-center">
          Frequently Asked Questions
        </div>
        {faqItems.map((item, index) => (
          <div key={index} className="mb-4 border-b pb-4">
            <button
              onClick={() => toggleFaq(index)}
              className="flex justify-between items-center w-full text-left"
            >
              <span className="text-lg font-semibold">{item.question}</span>
              {expandedFaq === index ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {expandedFaq === index && <p className="mt-2">{item.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
