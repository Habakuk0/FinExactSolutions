import { useParams, Link } from "wouter";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

const resourceFiles = import.meta.glob("../../content/resources/*.md", {
  eager: true,
  query: "?raw",
  import: "default"
});

export default function ResourceSlug() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<{
    title: string;
    date: string;
    description: string;
    image: string;
    content: string;
  } | null>(null);

  useEffect(() => {
    const entry = Object.entries(resourceFiles).find(([path]) =>
      path.includes(`${slug}.md`)
    );

    if (!entry) {
      setPost(null);
      return;
    }

    const { data, content } = matter(entry[1] as string);
    setPost({
      title: data.title,
      date: data.date,
      description: data.description || "",
      image: data.image || "",
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

  const formattedDate = new Date(post.date).toLocaleDateString("en-KE", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  return (
    <div className="py-20 max-w-3xl mx-auto px-4">
      <Helmet>
        <title>{post.title} | FinExact Solutions</title>
        <meta name="description" content={post.description} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        {post.image && <meta property="og:image" content={post.image} />}
        <meta property="og:url" content={`https://finexactsolutions.co.ke/resources/${slug}`} />
      </Helmet>

      <Link href="/resources" className="text-primary hover:underline mb-4 block">
        ← Back to Resources
      </Link>

      {post.image && (
        <img src={post.image} alt={post.title} className="w-full rounded mb-6 shadow" />
      )}

      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm text-muted-foreground mb-6">{formattedDate}</p>

      <div className="prose prose-lg">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </div>
  );
}