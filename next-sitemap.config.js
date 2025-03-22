"use server";
const path = require("path");
const mongoose = require("mongoose");
const { Schema, model } = mongoose;
// import { Delta } from "quill";
// import { ImageCarouselType } from "./sections/BlogSection";
// import { SectionType } from "./sections/BlogSection";
// import { BlogMetadataType } from "./metadata/BlogMetadata";

// Blog Metadata Schema
const BlogMetadataSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title cannot be empty"],
  },
  description: {
    type: String,
    required: [true, "Description cannot be empty"],
  },
  image: {
    src: {
      type: String,
      required: [true, "URL cannot be empty"],
      validate: {
        validator: (url) =>
          /^(https?:\/\/.*\.(?:png|jpg|jpeg|webp|gif|svg))$/.test(url),
        message: "Invalid image URL",
      },
    },
    alt: {
      type: String,
      required: [true, "Alt Text cannot be empty"],
    },
  },
  blogSlug: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^[a-z0-9]+(-[a-z0-9]+)*$/,
      "Invalid format: Only lowercase letters, numbers, and hyphens allowed",
    ],
  },
});

const ImageSchema = new mongoose.Schema({
  src: {
    type: String,
    required: [true, "Image URL is required"],
    validate: {
      validator: (value) => /^https?:\/\/.+/i.test(value), // URL validation regex
      message: "Invalid URL",
    },
  },
  altText: {
    type: String,
    required: [true, "Alt Text is required for SEO"],
  },
});

const ImageCarouselSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "ImageCarousel",
    enum: ["ImageCarousel"], // Enforces only "imagecarousel"
  },
  images: {
    type: [ImageSchema],
    validate: {
      validator: (arr) => arr.length > 0,
      message: "At least one image is required",
    },
  },
  position: {
    type: String,
    enum: ["left", "right"], // Matches the ImagePosition enum
    required: [true, "Specify Positioning: Left or Right Only"],
  },
});

// Heading Schema
const HeadingSchema = new Schema({
  name: {
    type: String,
    default: "Heading",
    enum: ["Heading"],
    required: true,
  },
  heading: {
    type: Schema.Types.Mixed,
    required: [true, "Heading is required"],
  },
  headingId: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^[a-z0-9]+(-[a-z0-9]+)*$/,
      "Invalid format: Only lowercase letters, numbers, and hyphens allowed",
    ],
  },
});

// SubHeading Schema
const SubHeadingSchema = new Schema({
  name: {
    type: String,
    default: "Subheading",
    enum: ["Subheading"],
    required: true,
  },
  subHeading: {
    type: Schema.Types.Mixed,
    required: [true, "Sub-Heading is required"],
  },
});

// Body Schema
const BodySchema = new Schema({
  name: {
    type: String,
    default: "Body",
    enum: ["Body"],
    required: true,
  },
  body: {
    type: Schema.Types.Mixed, // Allows both Delta and String
    required: [true, "Body is required"],
  },
  hasImages: {
    type: Boolean,
    required: [true, "Required"],
  },
  bodyImages: {
    type: ImageCarouselSchema, // Can be ImageSchema or ImageCarouselSchema
    required: false,
  },
});

// Table Schema
const TableSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "Table",
    enum: ["Table"],
    required: true,
  },
  columns: {
    type: [String],
    required: true,
    validate: {
      validator: (columns) => columns.length > 0,
      message: "At least 1 column is required",
    },
  },
  rows: {
    type: [[String]],
    required: true,
    validate: {
      validator: function (rows) {
        const columnLength = this.columns.length;
        return rows.every((row) => row.length === columnLength);
      },
      message: "Each row must have exactly as many elements as columns",
    },
    default: [[]], // Ensures at least one empty row
  },
});

// Section Schema (Supports Multiple Content Types)
const SectionSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  subSections: {
    type: [
      // HeadingSchema,
      // SubHeadingSchema,
      // BodySchema,
      // TableSchema,
      // ImageCarouselSchema,
      Schema.Types.Mixed,
    ],
    required: true,
  },
});

const BlogSchema = new Schema({
  metadata: {
    type: BlogMetadataSchema,
    required: true,
  },
  sections: {
    type: [SectionSchema],
    required: true,
  },
});

const SelectiveSystemsBlog =
  mongoose.models.SelectiveSystemsBlog ||
  model("SelectiveSystemsBlog", BlogSchema);

const uri = process.env.MONGODB_URI_BLOGS;

console.log(uri);

if (!uri) {
  console.error("MongoDB URI is not defined");
}

async function getBlogsData() {
  try {
    await mongoose.connect(uri);
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
  }
  const blogsData = await SelectiveSystemsBlog.find().lean();

  return JSON.parse(JSON.stringify(blogsData));
}

module.exports = {
  siteUrl: "https://www.selectivesystems.in/", // Replace with your actual domain
  generateRobotsTxt: true, // Automatically generate robots.txt
  sitemapSize: 7000, // Number of URLs per sitemap file
  changefreq: "daily", // Frequency of changes
  priority: 0.7, // Default priority for URLs
  additionalPaths: async (config) => {
    const blogsData = await getBlogsData();
    // Add dynamic URLs here (if any)
    const blogUrls = blogsData.map((blog) => {
      return `/blogs/${blog.metadata.blogSlug}`;
    });
    const dynamicPaths = [
      "/about",
      "/products/aluminium-windows",
      "/products/aluminium-windows/fixed-aluminium-window-01",
      "/products/aluminium-windows/awning-aluminium-window01",
      "/products/aluminium-windows/sliding-aluminium-window1",
      "/products/aluminium-windows/casement-aluminium-window",
      "/products/aluminium-windows/glass-corner-alum-windows",
      "/products/door-seals",
      "/products/door-seals/threshold-floor",
      "/products/door-seals/bracketMounting",
      "/products/door-seals/Sliding-Windows",
      "/products/door-seals/Door-drop-seals",
      "/products/door-seals/Drop-down-seals",
      "/products/door-seals/Automatic-doors",
      "/products/glass-railings",
      "/products/glass-railings/frameless-glass-railing",
      "/products/glass-railings/top-mounted-glass-raili",
      "/products/glass-railings/frameds-glass-railingss",
      "/products/invisiblegrill",
      "/products/office-partitions",
      "/products/bathroom-partitions",
      "/products/queue-manager",
      "/contact",
      "/testblog/url-id-1",
      ...blogUrls,
    ];

    return dynamicPaths.map((path) => ({
      loc: `https://www.selectivesystems.in${path}`,
      lastmod: new Date().toISOString(), // Last modified date
    }));
  },
  //   exclude: ["/exclude-this-page"], // Example: excluding certain pages
};
