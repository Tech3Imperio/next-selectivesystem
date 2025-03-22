"use server";
import React from "react";
// import { BlogMetadataType } from "@/models/blogs/metadata/BlogMetadata";
import Image from "next/image";

const noImage =
  "https://res.cloudinary.com/dwujy2ixt/image/upload/v1742295592/no-image.png";

const MetadataPreview = ({ metadata }: { metadata: any }) => {
  return (
    <div className="relative w-full h-[50vh] overflow-hidden rounded-br-3xl rounded-bl-3xl shrink-0">
      {/* Image as background */}
      <Image
        src={metadata.image.src === "" ? noImage : metadata.image.src}
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
