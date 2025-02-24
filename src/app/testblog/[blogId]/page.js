"use server";
import getBlogsData from "../getBlogsData";
import BlogDetails from "./BlogDetails";

const blogsData = await getBlogsData();

export async function generateMetadata({ params }, parent) {
  // read route params
  const id = (await params).blogId;

  console.log(id);

  const blog = blogsData.find((blog) => blog.urlId === id);

  console.log("The Blog Title is:", blog.title);

  return {
    title: blog.title,
    description: blog.description,
    keywords: blog.keywords,
    alternates: {
      canonical: `/testblog/${blog.urlId}`,
    },
  };
}

export default async function Page({ params }) {
  const id = (await params).blogId;
  const blog = blogsData.find((blog) => blog.urlId === id);

  return <BlogDetails blog={blog} />;
}
