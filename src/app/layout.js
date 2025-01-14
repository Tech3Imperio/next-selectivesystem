import "./globals.css";
import { Footer } from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Whatsapp from "./components/Whatsapp/Whatsapp";

export const metadata = {
  title: "Selective Systems: Aluminium Windows | Glass Railing",
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
      <head>
        {/* Google Analytics gtag.js */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-680TR1BEZN"
        ></script>
        <script>
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-680TR1BEZN');
            `}
        </script>
        {/* Google Search Console Verification */}
        <meta
          name="google-site-verification"
          content="CVInmi0GH9yxSgLNLEuMuVF-nm_oyRHGBhTvEun6Rww"
        />

        {/* You can add other meta tags here */}
      </head>
      <body className=" antialiased overflow-x-hidden w-screen">
        <Navbar />
        {children}
        <Whatsapp />
        <Footer />
      </body>
    </html>
  );
}
