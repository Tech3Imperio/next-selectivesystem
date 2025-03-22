import Body from "@/app/components/Blogs/Body";
import Heading from "@/app/components/Blogs/Heading";
import ImageCarousel from "@/app/components/Blogs/ImageCarousel";
import Metadata from "@/app/components/Blogs/Metadata";
import React from "react";
import { Delta } from "quill";
const BlogDetails = ({ blog }) => {
  console.log(blog);
  const metadata = blog.metadata;
  const sections = blog.sections;
  return (
    <>
      <Metadata metadata={metadata} />
      <div className="flex flex-row w-full items-start h-max justify-center gap-4 px-16 py-8">
        {/* <div className="w-[15%]">Section List</div> */}
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
    </>
  );
};

export default BlogDetails;
