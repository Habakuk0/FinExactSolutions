import { Link } from "wouter";
import matter from "gray-matter";

// Glob import of all markdown files created by Decamp CMS
const resourceFiles = import.meta.glob("../content/resources/*.md", {
  eager: true,
  query: "?raw",
  import: "default"
});

export default function ResourcesPage() {
  const posts = Object.entries(resourceFiles).map(([path, raw]) => {
    const { data } = matter(raw as string);
    return {
      slug: data.slug,
      title: data.title,
      date: data.date,
      description: data.description || "",
      image: data.image || ""
    };
  });

  if (posts.length === 0) {
    return <div className="py-20 text-center">No resources found.</div>;
  }

  return (
    <div className="py-20 max-w-4xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8">Resources</h1>
      <div className="grid gap-8">
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={`/resources/${p.slug}`}
            className="block rounded-lg shadow hover:shadow-xl overflow-hidden"
          >
            {p.image && (
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="text-xl font-semibold">{p.title}</h2>
              <p className="text-sm text-muted-foreground">{p.date}</p>
              {p.description && <p className="mt-2">{p.description}</p>}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
