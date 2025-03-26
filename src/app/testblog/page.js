// page.tsx
import getBlogsData from "./getTestBlogsData";
import BlogList from "./BlogList";

export default async function Page() {
  const blogsData = await getBlogsData();

  return <BlogList blogsData={blogsData} />;
}
