import { useParams, Link } from "wouter";
import { Helmet } from "react-helmet-async";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

type Resource = {
  title: string;
  date: string;
  body: string;
  image?: string;
};

export default function ResourceDetail() {
  const { slug } = useParams<{ slug: string }>();

  const resourcesPath = path.join(process.cwd(), "src/content/resources");
  const filenames = fs.readdirSync(resourcesPath);

  const resources: Record<string, Resource> = {};
  filenames.forEach((file) => {
    if (file.endsWith(".md")) {
      const fullPath = path.join(resourcesPath, file);
      const fileContents = fs.readFileSync(fullPath, "utf-8");
      const { data, content } = matter(fileContents);
      const key = file.replace(/\.md$/, "");
      resources[key] = {
        title: data.title,
        date: data.date,
        body: content,
        image: data.image || "",
      };
    }
  });

  const post = resources[slug || ""];

  if (!post) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Resource Not Found</h1>
        <Link href="/resources" className="text-primary hover:underline">
          ← Back to Resources
        </Link>
      </div>
    );
  }

  return (
    <div className="py-20 bg-background">
      <Helmet>
        <title>{post.title} | FinExact Solutions</title>
        <meta name="description" content={post.body.slice(0, 150)} />
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
          <ReactMarkdown>{post.body}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
