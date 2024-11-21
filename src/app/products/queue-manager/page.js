import React from "react";
import QueueManager from "./QueueManager";

export const metadata = {
  title: "Queue Manager | Queue Manager Accessories",
  description:
    "Streamline your operations with our Queue Manager System. Improve customer experience, cut wait times, and increase efficiency with real-time analytics.",
  keywords: [
    "Queue Manager, Queue Management Solutions, Customer Experience, Wait Time Reduction, Real-time Analytics, Customizable Queue Systems, Efficient Queue Management, Service Optimization, Visitor Management, Mumbai, Pune, Andheri, Bandra, Borivali, Charni Road, India, Dubai, Russia, China, Japan",
  ],
  icon: "./favicon.ico",
  content: "https://selectivesystems.in/queue-manager",
  openGraph: {
    type: "website",
  },
  url: "https://selectivesystems.in/queue-manager",
};

export default function page() {
  return <QueueManager />;
}
