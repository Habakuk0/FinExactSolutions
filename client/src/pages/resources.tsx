import { useState, useEffect } from "react";
import { Link } from "wouter";

type Resource = {
  slug: string;
  title: string;
  date: string;
  description: string;
  image?: string;
};

// This assumes you have Decamp CMS endpoint configured in environment variable
const DECAMP_API = import.meta.env.VITE_DECAMP_API;

export default function ResourcesPage() {
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${DECAMP_API}/resources`)
      .then((res) => res.json())
      .then((data) => {
        setResources(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Decamp fetch error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="py-20 text-center">Loading resources...</div>;
  }

  if (!resources.length) {
    return <div className="py-20 text-center">No resources found.</div>;
  }

  return (
    <div className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl lg:text-4xl font-bold mb-8">Resources</h1>
        <div className="grid gap-8">
          {resources.map((post) => (
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
