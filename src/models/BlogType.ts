import { Delta } from "quill";

export type BlogMetadataType = {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  blogSlug: string;
};

export enum ImagePosition {
  RIGHT = "RIGHT",
  LEFT = "LEFT",
  NONE = "NONE",
}

export type ImageType = {
  src: string;
  altText: string;
};

export type ImageCarouselType = {
  name: "ImageCarousel";
  images: {
    src: string;
    altText: string;
  }[];
  position: ImagePosition;
};

export type HeadingType = {
  name: "Heading";
  heading: Delta;
  headingId: string;
};

export type BodyType = {
  name: "Body";
  body: Delta;
  hasImages: boolean;
  bodyImages: ImageCarouselType | null;
};

export type SectionType = {
  name: string;
  subSections: (HeadingType | BodyType | ImageCarouselType)[];
};

export type BlogType = {
  metadata: BlogMetadataType;
  sections: SectionType[];
};
