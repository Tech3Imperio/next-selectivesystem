// import { BodyType } from "@/models/blogs/sections/BlogSection";
"use client";
import React from "react";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.bubble.css";
import ImageCarousel from "./ImageCarousel";
import { BodyType } from "@/models/BlogType";
const Quill = dynamic(() => import("react-quill-new"), { ssr: false });
const BodyPreview = ({ subSection }: { subSection: BodyType }) => {
  return (
    <>
      {subSection.hasImages ? (
        <div className="w-full h-max flex flex-row gap-6 justify-start items-center">
          {subSection.bodyImages!.position === "LEFT" ? (
            <>
              <ImageCarousel
                images={subSection.bodyImages!.images}
                bodyImages={true}
              />
              <Quill
                value={subSection.body} // Directly pass the Delta object
                readOnly={true} // Prevent user editing
                theme="bubble"
                className="no-padding-quill font-quill-body"
              />
            </>
          ) : (
            <>
              <Quill
                value={subSection.body} // Directly pass the Delta object
                readOnly={true} // Prevent user editing
                theme="bubble"
                className="no-padding-quill font-quill-body"
              />
              <ImageCarousel
                images={subSection.bodyImages!.images}
                bodyImages={true}
              />
            </>
          )}
        </div>
      ) : (
        <div className="w-full h-max flex flex-row justify-start items-center">
          <Quill
            value={subSection.body} // Directly pass the Delta object
            readOnly={true} // Prevent user editing
            theme="bubble"
            className="no-padding-quill font-quill-body"
          />
        </div>
      )}
    </>
  );
};

export default BodyPreview;
