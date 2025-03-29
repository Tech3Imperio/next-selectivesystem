"use client";
import React from "react";
// import { BlogMetadataType } from "@/models/blogs/metadata/BlogMetadata";
import Image from "next/image";
import { BlogMetadataType } from "@/models/BlogType";
import { NoImage } from "@/app/assets/NoImage";

const MetadataPreview = ({ metadata }: { metadata: BlogMetadataType }) => {
  return (
    <div
      className=" w-full h-[50vh] overflow-hidden rounded-br-3xl rounded-bl-3xl relative z-10 shrink-0"
      id="Metadata"
    >
      {/* Image as background */}
      <Image
        src={metadata.image.src === "" ? NoImage : metadata.image.src}
        alt={metadata.image.alt}
        width={1200}
        height={360}
        className="absolute top-0 left-0 w-full h-full object-cover rounded-br-3xl rounded-bl-3xl"
        priority
      />

      {/* Overlay with text */}
      <div className="absolute inset-0 flex flex-col gap-6 justify-center items-center text-center bg-black/40 p-10">
        <h1 className="text-6xl font-bold text-white drop-shadow-md din-regular">
          {metadata.title}
        </h1>
        <p className="text-lg text-gray-200 drop-shadow-md roboto-light">
          {metadata.description}
        </p>
      </div>
    </div>
  );
};

export default MetadataPreview;
