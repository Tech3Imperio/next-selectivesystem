"use server";
import getBlogsData from "../getBlogsData";
import BlogDetails from "./BlogDetails";
const blogsData = await getBlogsData();

export async function generateMetadata({ params }, parent) {
  // read route params
  const id = (await params).blogId;

  console.log(id);

  const blog = blogsData.find((blog) => blog.metadata.blogSlug === id);

  console.log("The Blog Title is:", blog.metadata.title);

  return {
    title: blog.metadata.title,
    description: blog.metadata.description,
    keywords: ["Why Aluminium Railings"],
    alternates: {
      canonical: `/blogs/${blog.metadata.blogSlug}`,
    },
  };
}

export default async function Page({ params }) {
  const id = (await params).blogId;
  console.log("Working till here")
  const blog = blogsData.find((blog) => blog.metadata.blogSlug === id);
  console.log("Working till here too", blog)
  return <BlogDetails blog={blog} />;
}
