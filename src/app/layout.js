import "./globals.css";
import { Footer } from "./componets/Footer/Footer";
import Navbar from "./componets/Navbar/Navbar";

export const metadata = {
  title: "Selective-Systems",
  description:
    "Elevate your space with Selective Systems. We provide Aluminium Windows, Door Seals, Railings, and more, ensuring safety, style, and durability for your projects.",
  keywords: [
    "Aluminium Windows, Door seals, Railings, Invisible Grill, Office Partitions, Bathroom Partitions, Queue Manager, Customizable Options, Mumbai, Charni Road, Andheri, Bandra, Borivali, Pune, Maharashtra, India, Dubai, Russia, China, Japan",
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
        <Footer />
      </body>
    </html>
  );
}
