import { getBlogById } from "../../../../utils/getBlogById";

export default async function BlogPage({ params }) {
  const { id } = params; // Extracting the ID from the URL params
  const blog = await getBlogById(id); // Fetching the blog by ID

  if (!blog) {
    return (
      <div className="p-6 container mx-auto text-center text-white">
        <h1 className="text-3xl mb-8">Blog not found</h1>
      </div>
    );
  }

  console.log(blog); // Check the fetched data in the console

  return (
    <div className="p-6 container mx-auto bg-black text-white">
      <h1 className="text-center text-3xl mb-8">{blog.title}</h1>

      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold">User ID:</h2>
          <p>{blog.userId}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Blog ID:</h2>
          <p>{blog.id}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Title:</h2>
          <p>{blog.title}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Body:</h2>
          <p>{blog.body}</p>
        </div>
      </div>
    </div>
  );
}
