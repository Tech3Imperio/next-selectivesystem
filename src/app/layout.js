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
        <meta
          name="google-site-verification"
          content="CVInmi0GH9yxSgLNLEuMuVF-nm_oyRHGBhTvEun6Rww"
        />
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

        {/* Additional metadata (if necessary) */}
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <link rel="icon" href={metadata.icon} />
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
