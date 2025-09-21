import { useParams, Link } from "wouter";
import { Helmet } from "react-helmet-async";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

type Resource = {
  title: string;
  date: string;
  content: string;
  image?: string;
};

export default function ResourceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Resource | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    // Fetch from Decamp CMS API
    fetch(`https://your-decamp-api/resources/${slug}`)
      .then((res) => res.json())
      .then((data: Resource) => {
        setPost(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Decamp fetch failed, fallback to local", err);

        // Optional: fallback to local import
        import(`../../content/resources/${slug}.md`)
          .then((module) => {
            const content = module.default;
            setPost({
              title: slug.replace(/-/g, " "),
              date: "Unknown",
              content,
            });
            setLoading(false);
          })
          .catch(() => setLoading(false));
      });
  }, [slug]);

  if (loading) return <div className="py-20 text-center">Loading...</div>;
  if (!post)
    return (
      <div className="py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Resource Not Found</h1>
        <Link href="/resources" className="text-primary hover:underline">
          ← Back to Resources
        </Link>
      </div>
    );

  return (
    <div className="py-20 bg-background">
      <Helmet>
        <title>{post.title} | FinExact Solutions</title>
        <meta name="description" content={post.content.slice(0, 150)} />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/resources"
          className="flex items-center text-primary hover:underline mb-6"
        >
          ← Back to Resources
        </Link>

        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            className="rounded-2xl shadow-lg w-full h-auto mb-8"
          />
        )}

        <div className="flex items-center text-sm text-muted-foreground mb-3">
          <span>{post.date}</span>
        </div>

        <h1 className="text-3xl font-bold mb-6">{post.title}</h1>
        <div className="prose prose-lg text-foreground whitespace-pre-line">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
