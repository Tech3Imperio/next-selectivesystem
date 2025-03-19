import "./globals.css";
import { Footer } from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Whatsapp from "./components/Whatsapp/Whatsapp";
import localFont from "next/font/local";
import Favicon from "./favicon.ico";
export const metadata = {
  title: "Selective Systems: Aluminium Windows | Glass Railing",
  description:
    "Elevate your space with Selective Systems. We provide Aluminium Windows, Door Seals, Railings, and more, ensuring safety, style, and durability for your projects.",
  keywords: [
    "Aluminium Windows, Door seals, Railings, Invisible Grill, Office Partitions, Bathroom Partitions, Queue Manager, Customizable Options, glass railing, modern alumium windows design ,Mumbai, Charni Road, Andheri, Bandra, Borivali, Pune, Maharashtra, India, Dubai, Russia, China, Japan",
  ],
  icon: { Favicon },
  content: "https://selectivesystems.in/",
  openGraph: {
    type: "website",
  },
  metadataBase: new URL("https://www.selectivesystems.in"),
  alternates: {
    canonical: "/",
  },
};
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
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
          content="_hSMrZdm-g-xYfnhnNqkbAI-BaUsqxIKSUAI0S0oVCU"
        />

        {/* You can add other meta tags here */}

        {/* Preconnect to Google Fonts and Load Font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
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
