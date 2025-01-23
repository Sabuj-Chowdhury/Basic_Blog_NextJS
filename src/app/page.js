import Link from "next/link";
import { getAllBlogs } from "../../utils/getAllBlogs";

export default async function Home() {
  // Fetching all blogs
  const allBlogs = await getAllBlogs();
  // console.log(allBlogs);

  return (
    <main className="p-6 container mx-auto">
      <h1 className="text-center text-3xl mb-8">All Blogs</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allBlogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden h-32 w-full"
          >
            {/* Blog Title */}
            <div className="p-4 h-full flex flex-col justify-between">
              <h2 className="text-xl font-semibold text-gray-800 truncate">
                {blog.title}
              </h2>

              {/* View Details Button */}
              <Link href={`/blog/${blog.id}`} className="  text-center">
                <button className="px-4 py-2 bg-black text-white rounded-md">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
