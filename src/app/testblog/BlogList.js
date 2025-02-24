"use client";

import { redirect } from "next/navigation";

export default function BlogList({ blogsData }) {
  return (
    <div className="p-96">
      {blogsData.map((blog) => (
        <li
          key={blog.urlId}
          onClick={() => redirect(`/testblog/${blog.urlId}`)}
        >
          {blog.title}
        </li>
      ))}
    </div>
  );
}
