import { useRoute } from "wouter";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Helmet } from "react-helmet";

function ResourceDetail() {
  const [match, params] = useRoute("/resources/:slug");
  const { slug } = params;
  const [content, setContent] = useState("");
  const [meta, setMeta] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    import(`../content/resources/${slug}.md`)
      .then((module) => fetch(module.default))
      .then((res) => res.text())
      .then((text) => {
        const [rawMeta, ...body] = text.split("---").filter(Boolean);
        const metaObj = Object.fromEntries(
          rawMeta
            .trim()
            .split("\n")
            .map((line) => {
              const [key, ...rest] = line.split(":");
              return [key.trim(), rest.join(":").trim()];
            })
        );
        setMeta(metaObj);
        setContent(body.join("\n"));
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return <div className="text-center py-10 text-gray-500">Loading post…</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">Post not found.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <Helmet>
        <title>{meta.title || "Resource Detail"} | FinExact Solutions</title>
        <meta name="description" content={meta.description || "Business insights and resources"} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        {meta.image && <meta property="og:image" content={meta.image} />}
        <meta property="og:url" content={`https://finexactsolutions.co.ke/resources/${slug}`} />
      </Helmet>

      <h1 className="text-3xl font-bold mb-4">{meta.title}</h1>

      {meta.image && (
        <img
          src={meta.image}
          alt={meta.title}
          className="w-full h-auto mb-6 rounded shadow"
        />
      )}

      <p className="text-gray-600 mb-4">{meta.description}</p>

      <ReactMarkdown className="prose prose-lg">{content}</ReactMarkdown>
    </div>
  );
}

export default ResourceDetail;