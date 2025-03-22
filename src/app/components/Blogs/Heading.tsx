// import { HeadingType } from "@/models/blogs/sections/BlogSection";
"use client";
import React from "react";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.bubble.css";
const Quill = dynamic(() => import("react-quill-new"), { ssr: false });
const Heading = ({ subSection }: { subSection: any }) => {
  return (
    <div className="w-full h-max flex flex-row justify-start items-center font-quill-heading">
      <Quill
        value={subSection.heading} // Directly pass the Delta object
        readOnly={true} // Prevent user editing
        theme="bubble"
        className="no-padding-quill"
      />
    </div>
  );
};

export default Heading;
