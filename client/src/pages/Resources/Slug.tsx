import { useParams, Link } from "wouter";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

// Adjust the path so it matches your project layout.
// If this file is in client/src/pages/resources/[slug].tsx
// and markdown is in client/content/resources/*.md, this is correct:
const resourceFiles = import.meta.glob("../../content/resources/*.md", {
  eager: true,
  query: "?raw",
  import: "default"
});

interface ResourcePost {
  title: string;
  date: string;
  description: string;
  image?: string;
  content: string;
}

export default function ResourceSlug() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<ResourcePost | null>(null);

  useEffect(() => {
    // Find a file whose *filename* matches slug
    const entry = Object.entries(resourceFiles).find(([path]) =>
      path.endsWith(`${slug}.md`)
    );

    if (!entry) {
      setPost(null);
      return;
    }

    const { data, content } = matter(entry[1] as string);
    setPost({
      title: data.title ?? "",
      date: data.date ?? "",
      description: data.description ?? "",
      image: data.image ?? "",
      content
    });
  }, [slug]);

  if (!post) {
    return (
      <div className="py-20 text-center">
        <Helmet>
          <title>Resource Not Found | FinExact Solutions</title>
        </Helmet>
        <h1 className="text-3xl font-bold mb-4">Resource Not Found</h1>
        <Link href="/resources" className="text-primary hover:underline">
          ← Back to Resources
        </Link>
      </div>
    );
  }

  const formattedDate = post.date
    ? new Date(post.date).toLocaleDateString("en-KE", {
        year: "numeric",
        month: "long",
        day: "numeric"
      })
    : "";

  return (
    <div className="py-20 max-w-3xl mx-auto px-4">
      <Helmet>
        <title>{post.title} | FinExact Solutions</title>
        <meta name="description" content={post.description} />
        {post.image && <meta property="og:image" content={post.image} />}
      </Helmet>

      <Link href="/resources" className="text-primary hover:underline mb-4 block">
        ← Back to Resources
      </Link>

      {post.image && (
        <img src={post.image} alt={post.title} className="w-full rounded mb-6 shadow" />
      )}

      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      {formattedDate && (
        <p className="text-sm text-muted-foreground mb-6">{formattedDate}</p>
      )}

      <div className="prose prose-lg">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </div>
  );
}
