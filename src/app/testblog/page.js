// page.tsx
import getBlogsData from "./getBlogsData";
import BlogList from "./BlogList";

export default async function Page() {
  const blogsData = await getBlogsData();

  return <BlogList blogsData={blogsData} />;
}
