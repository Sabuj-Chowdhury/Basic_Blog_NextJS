import { getBlogById } from "../../../../utils/getBlogById";

export default async function BlogPage({ params }) {
  const { id } = await params;
  const blog = await getBlogById(id);

  if (!blog) {
    return (
      <div className="p-6 container mx-auto text-center text-black">
        <h1 className="text-3xl mb-8">Blog not found</h1>
      </div>
    );
  }

  return (
    <div className="p-6 container mx-auto  text-black">
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
