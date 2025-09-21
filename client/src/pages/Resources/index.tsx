import { Link } from "wouter";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

type Resource = {
  title: string;
  date: string;
  slug: string;
};

export default function Resources() {
  const resourcesPath = path.join(process.cwd(), "src/content/resources");
  const filenames = fs.readdirSync(resourcesPath);

  const resources: Resource[] = filenames
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const fullPath = path.join(resourcesPath, file);
      const fileContents = fs.readFileSync(fullPath, "utf-8");
      const { data } = matter(fileContents);
      return {
        title: data.title,
        date: data.date,
        slug: file.replace(/\.md$/, ""),
      };
    });

  // Sort newest first
  resources.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Resources</h1>
        <ul className="space-y-6">
          {resources.map((res) => (
            <li key={res.slug}>
              <Link href={`/resources/${res.slug}`} className="text-xl text-primary hover:underline">
                {res.title}
              </Link>
              <p className="text-sm text-muted-foreground">{res.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
