"use server";

import mongoose from "mongoose";

const uri = process.env.MONGODB_URI_BLOGS;

console.log(uri);

if (!uri) {
  console.error("MongoDB URI is not defined");
}

const testSchema = new mongoose.Schema({
  title: String,
  description: String,
  urlId: String,
  keywords: [String],
});

const TestBlog =
  mongoose.models.TestBlog || mongoose.model("TestBlog", testSchema);

async function getTestBlogsData() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
  }

  const blogsData = (await mongoose.models.TestBlog.find()).map((blog) => ({
    title: blog.title,
    description: blog.description,
    urlId: blog.urlId,
    keywords: blog.keywords,
  }));
  console.log(blogsData);

  return blogsData;
}

export default getTestBlogsData;
