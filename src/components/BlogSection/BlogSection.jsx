import Link from "next/link";
import Image from "next/image";
import blogPosts from "@/data/blogPosts";

const BlogSection = () => {
  return (
    <section className="py-12 ">
      <h2 className="text-4xl font-bold text-center text-red-700 mb-10">Blog</h2>
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-md overflow-hidden shadow hover:shadow-lg transition-all duration-300"
            >
              <div className="relative w-full h-64">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl text-gray-950 font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-700 text-sm mb-4">{post.description.slice(0, 100)}...</p>
                <Link href={`/blog/${post.slug}`}>
                  <button className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800 transition">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
