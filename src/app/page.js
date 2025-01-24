import Link from "next/link";
import { getAllBlogs } from "../../utils/getAllBlogs";

export default async function Home() {
  const allBlogs = await getAllBlogs();

  return (
    <main className="p-6 container mx-auto">
      <h1 className="text-center text-3xl mb-8">All Blogs</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allBlogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white border rounded-lg shadow-lg overflow-hidden h-32 w-full"
          >
            {/* Blog Title */}
            <div className="p-4 h-full">
              <Link
                href={`/blog/${blog.id}`}
                className=" text-black text-center"
              >
                {blog.title}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
