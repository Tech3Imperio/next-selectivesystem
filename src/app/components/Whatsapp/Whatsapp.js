"use client";

import dynamic from "next/dynamic";
import React from "react";
// import logo from "../../assets/Logo/whiteLogo.png";

const FloatingWhatsApp = dynamic(
  () => import("react-floating-whatsapp").then((mod) => mod.FloatingWhatsApp),
  { ssr: false }
);

export default function Whatsapp() {
  return (
    <div>
      <FloatingWhatsApp
        phoneNumber="+918356080112"
        accountName="Selective-Systems"
        messageDelay={2}
        // avatar={logo}
        darkMode={true}
        statusMessage="Online"
        chatMessage="Hello there! How can I assist you?"
      />
    </div>
  );
}
