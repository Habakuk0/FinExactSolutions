import { useParams, Link } from "wouter";
import { Calendar, ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function ResourceDetail() {
  const params = useParams();
  const slug = params?.slug;

  // Blog posts data (same as in resources.tsx)
  const blogPosts = [
    {
      slug: "quickbooks-vs-xero",
      date: "March 15, 2024",
      title: "QuickBooks vs Xero: Which is Right for Your Business?",
      content: `
        When choosing accounting software, businesses often compare QuickBooks and Xero.
        QuickBooks offers strong payroll and inventory features, while Xero shines in collaboration and integrations.
        Consider your team size, budget, and reporting needs before making a choice.
      `,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    },
    {
      slug: "accounting-software-migration",
      date: "March 10, 2024",
      title: "5 Steps to Successful Accounting Software Migration",
      content: `
        Migrating to a new accounting system doesn’t need to be stressful.
        Key steps: 1) Backup your data, 2) Choose the right software,
        3) Map your chart of accounts, 4) Test migrations, 5) Train your staff.
      `,
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    },
    {
      slug: "digital-accounting-trends-kenya",
      date: "March 5, 2024",
      title: "Digital Accounting Trends in Kenya's SME Sector",
      content: `
        SMEs in Kenya are rapidly adopting cloud-based accounting solutions.
        Benefits include automation, real-time financial insights, and easier compliance.
        This trend is expected to grow as businesses digitize operations.
      `,
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    },
  ];

  const post = blogPosts.find((p) => p.slug === slug);

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
        <meta name="description" content={post.content.slice(0, 150)} />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/resources"
          className="flex items-center text-primary hover:underline mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Resources
        </Link>

        <img
          src={post.image}
          alt={post.title}
          className="rounded-2xl shadow-lg w-full h-auto mb-8"
        />

        <div className="flex items-center text-sm text-muted-foreground mb-3">
          <Calendar className="h-4 w-4 mr-2" />
          <span>{post.date}</span>
        </div>

        <h1 className="text-3xl font-bold mb-6">{post.title}</h1>
        <p className="text-lg text-muted-foreground whitespace-pre-line leading-relaxed">
          {post.content}
        </p>
      </div>
    </div>
  );
}
