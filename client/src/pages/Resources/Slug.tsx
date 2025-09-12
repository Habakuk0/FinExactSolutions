import { useParams, Link } from "wouter";
import { Helmet } from "react-helmet-async";

const blogPosts = {
  "quickbooks-vs-xero": {
    date: "March 15, 2024",
    title: "QuickBooks vs Xero: Which is Right for Your Business?",
    description: "Compare QuickBooks and Xero — features, pricing, and benefits — to choose the right accounting software for your business.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=500",
    alt: "Business analytics dashboard showing financial data and charts",
    content: (
      <>
        <p className="mb-6">
          Choosing the right accounting software is a critical decision for small
          and medium-sized businesses. Two of the most popular options are
          <strong> QuickBooks Online</strong> and <strong>Xero</strong>.
        </p>
        <h2 className="text-2xl font-semibold mb-4">QuickBooks: Key Benefits</h2>
        <ul className="list-disc list-inside mb-6">
          <li>Industry-standard with extensive support and training</li>
          <li>Advanced reporting and customization</li>
          <li>Large third-party integration ecosystem</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4">Xero: Key Benefits</h2>
        <ul className="list-disc list-inside mb-6">
          <li>User-friendly and beginner friendly</li>
          <li>Unlimited users at no extra cost</li>
          <li>Excellent collaboration tools</li>
        </ul>
        <p>
          The right choice depends on your business size, reporting needs, and
          budget.
        </p>
      </>
    ),
  },
  "software-migration": {
    date: "March 10, 2024",
    title: "5 Steps to Successful Accounting Software Migration",
    description: "Learn 5 proven steps to migrate your accounting software smoothly and avoid financial data loss.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=500",
    alt: "Professional business training session with laptops",
    content: (
      <>
        <p className="mb-6">
          Migrating to new accounting software can feel overwhelming, but with
          proper planning, it can be smooth.
        </p>
        <ol className="list-decimal list-inside mb-6 space-y-2">
          <li>Audit and clean your current data.</li>
          <li>Pick the right software for your needs.</li>
          <li>Back up your financial data.</li>
          <li>Use tools or experts for migration.</li>
          <li>Train your team and test before launch.</li>
        </ol>
      </>
    ),
  },
  "digital-trends": {
    date: "March 5, 2024",
    title: "Digital Accounting Trends in Kenya's SME Sector",
    description: "Explore how SMEs in Kenya are adopting digital accounting solutions like QuickBooks, Xero, Sage, and Zoho for growth.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=500",
    alt: "Businessman working with financial technology tools",
    content: (
      <>
        <p className="mb-6">
          Kenya’s SMEs are embracing digital accounting, with cloud platforms like
          QuickBooks, Xero, Sage, and Zoho leading adoption.
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>Mobile-first accounting apps</li>
          <li>Integration with M-Pesa & mobile money</li>
          <li>Automated payroll & compliance</li>
          <li>AI-driven financial insights</li>
        </ul>
      </>
    ),
  },
};

export default function ResourceDetail() {
  const { slug } = useParams();
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold">Article not found</h1>
        <Link href="/resources" className="text-primary underline mt-4 block">
          Back to Resources
        </Link>
      </div>
    );
  }

  return (
    <div className="py-20 bg-background">
      <Helmet>
        <title>{post.title} | FinExact Solutions</title>
        <meta name="description" content={post.description} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
        <meta property="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl lg:text-4xl font-bold mb-6">{post.title}</h1>
        <p className="text-muted-foreground mb-8">{post.date}</p>
        <img
          src={post.image}
          alt={post.alt}
          className="rounded-xl shadow-lg mb-8 w-full h-auto"
        />
        <div className="prose prose-lg text-foreground">{post.content}</div>

        {/* Back Button */}
        <div className="mt-12">
          <Link
            href="/resources"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-lg shadow hover:bg-primary/90 transition"
          >
            ← Back to Resources
          </Link>
        </div>
      </div>
    </div>
  );
}
