import "./globals.css";
import { Footer } from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Whatsapp from "./components/Whatsapp/Whatsapp";

export const metadata = {
  title:
    "Selective Systems: Premium Aluminium Windows | modern glass railing | stylish design glass pratition",
  description:
    "Elevate your space with Selective Systems. We provide Aluminium Windows, Door Seals, Railings, and more, ensuring safety, style, and durability for your projects.",
  keywords: [
    "Aluminium Windows, Door seals, Railings, Invisible Grill, Office Partitions, Bathroom Partitions, Queue Manager, Customizable Options, glass railing, modern alumium windows design ,Mumbai, Charni Road, Andheri, Bandra, Borivali, Pune, Maharashtra, India, Dubai, Russia, China, Japan",
  ],
  icon: "./favicon.ico",
  content: "https://selectivesystems.in/",
  openGraph: {
    type: "website",
  },
  url: "https://selectivesystems.in/",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" antialiased overflow-x-hidden w-screen">
        <Navbar />
        {children}
        <Whatsapp />
        <Footer />
      </body>
    </html>
  );
}
