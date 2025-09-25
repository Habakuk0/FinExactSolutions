import { useParams, Link } from "wouter";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

const resourceFiles = import.meta.glob("../../content/resources/*.md", {
  eager: true,
  query: "?raw",
  import: "default"
});

export default function ResourceSlug() {
  const { slug } = useParams<{ slug: string }>();

  const postEntry = Object.entries(resourceFiles).find(([path]) =>
    path.includes(`${slug}.md`)
  );

  if (!postEntry) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Resource Not Found</h1>
        <Link href="/resources" className="text-primary hover:underline">
          ← Back to Resources
        </Link>
      </div>
    );
  }

  const { data, content } = matter(postEntry[1] as string);

  return (
    <div className="py-20 max-w-3xl mx-auto px-4">
      <Link href="/resources" className="text-primary hover:underline mb-4 block">
        ← Back to Resources
      </Link>
      {data.image && (
        <img src={data.image} alt={data.title} className="w-full rounded mb-6" />
      )}
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      <p className="text-sm text-muted-foreground mb-6">{data.date}</p>
      <div className="prose">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
}
