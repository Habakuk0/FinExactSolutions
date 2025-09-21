// client/src/pages/resources/[slug].tsx
import { useParams } from "wouter";
import { useState, useEffect } from "react";

const DECAMP_API = import.meta.env.VITE_DECAMP_API;

export default function ResourceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [resource, setResource] = useState<any>(null);

  useEffect(() => {
    fetch(`${DECAMP_API}/resources/${slug}`)
      .then((res) => res.json())
      .then((data) => setResource(data))
      .catch((err) => console.error(err));
  }, [slug]);

  if (!resource) return <div className="py-20 text-center">Loading...</div>;

  return (
    <div className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-4">{resource.title}</h1>
      <p className="text-sm text-muted-foreground mb-4">{resource.date}</p>
      {resource.image && (
        <img src={resource.image} alt={resource.title} className="mb-6 rounded-lg" />
      )}
      <div className="prose prose-lg">{resource.body}</div>
    </div>
  );
}
