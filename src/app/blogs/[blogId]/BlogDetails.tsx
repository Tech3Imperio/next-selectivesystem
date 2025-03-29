"use client";

import Body from "@/app/components/Blogs/Body";
import Heading from "@/app/components/Blogs/Heading";
import ImageCarousel from "@/app/components/Blogs/ImageCarousel";
import React, { useState } from "react";
import { Delta } from "quill";
import { BlogType } from "../../../models/BlogType";
import SectionList from "./SectionList";
import MetadataPreview from "@/app/components/Blogs/Metadata";
const BlogDetails = ({ blog }: { blog: BlogType }) => {
  console.log("Checking Blog", blog);
  const [activeSectionId, setActiveSectionId] = useState<string>("Metadata");
  const metadata = blog.metadata;
  console.log("Checking metadata", metadata);
  const sections = blog.sections;
  return (
    <div className="w-full h-full flex flex-col items-center">
      <MetadataPreview metadata={blog.metadata} />
      <div className="flex flex-row w-full items-start h-max justify-center gap-4 px-16 py-8 relative">
        <div className="w-[15%] flex flex-col h-max gap-2 sticky top-[80px] bg-white p-4">
          <SectionList
            sectionId="Metadata"
            sectionName="Metadata"
            activeSectionId={activeSectionId}
            setActiveSectionId={setActiveSectionId}
          />
          {sections.map((section, index) => {
            return (
              <SectionList
                key={index}
                sectionId={section.sectionId}
                sectionName={section.name}
                activeSectionId={activeSectionId}
                setActiveSectionId={setActiveSectionId}
              />
            );
          })}
        </div>
        <div
          id="testing"
          className="flex flex-col w-[50%] gap-12 justify-start items-center h-max scrollbar-none"
        >
          {sections.map((section, index) => {
            return (
              <div
                key={index}
                id="blog"
                className="flex flex-col gap-6 justify-start items-start w-[100%]"
              >
                {section.subSections.map((subSection, index) => {
                  if (subSection.name === "Heading") {
                    return (
                      <Heading
                        key={index}
                        subSection={{
                          ...subSection,
                          heading: subSection.heading as Delta,
                        }}
                      />
                    );
                  } else if (subSection.name === "Body") {
                    return (
                      <Body
                        key={index}
                        subSection={{
                          ...subSection,
                          body: subSection.body as Delta,
                          bodyImages: subSection.bodyImages
                            ? {
                                ...subSection.bodyImages,
                                images: subSection.bodyImages.images.map(
                                  (img) => ({
                                    src: img.src,
                                    altText: img.altText,
                                  })
                                ), // Convert readonly array to a mutable one
                              }
                            : null,
                        }}
                      />
                    );
                  } else if (subSection.name === "ImageCarousel") {
                    return (
                      <ImageCarousel
                        key={index}
                        bodyImages={false}
                        images={subSection.images.map((img) => ({ ...img }))} // Convert to mutable array
                      />
                    );
                  }
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
