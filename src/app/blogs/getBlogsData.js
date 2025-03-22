"use server";

import mongoose from "mongoose";
import SelectiveSystemsBlog from "./blogSchema";

const uri = process.env.MONGODB_URI_BLOGS;

console.log(uri);

if (!uri) {
  console.error("MongoDB URI is not defined");
}

async function getBlogsData() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
  }
  const blogsData = await SelectiveSystemsBlog.find().lean();

  return JSON.parse(JSON.stringify(blogsData));
}

export default getBlogsData;
