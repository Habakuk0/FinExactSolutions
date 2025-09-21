import { Link } from "wouter";
import matter from "gray-matter";

const resources = import.meta.glob("../content/resources/*.md", { eager: true, import: "default", query: "?raw" });

export default function Resources() {
  const blogPosts = Object.entries(resources).map(([path, content]) => {
    const { data } = matter(content as string);
    return {
      slug: data.slug,
      title: data.title,
      date: data.date,
      description: data.description || "",
      image: data.image || "",
    };
  });

  return (
    <div className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl lg:text-4xl font-bold mb-8">Resources</h1>
        <div className="grid gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/resources/${post.slug}`}
              className="block rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p className="text-muted-foreground text-sm">{post.date}</p>
                {post.description && <p className="mt-2">{post.description}</p>}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
