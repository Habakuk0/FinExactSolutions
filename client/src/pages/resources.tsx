import { Calendar, ArrowRight } from "lucide-react";

export default function Resources() {
  const blogPosts = [
    {
      date: "March 15, 2024",
      title: "QuickBooks vs Xero: Which is Right for Your Business?",
      excerpt: "Compare the features, pricing, and benefits of these leading accounting software platforms...",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      alt: "Business analytics dashboard showing financial data and charts",
    },
    {
      date: "March 10, 2024",
      title: "5 Steps to Successful Accounting Software Migration",
      excerpt: "Learn the essential steps for smoothly migrating your financial data to a new system...",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      alt: "Professional business training session with laptops and financial software",
    },
    {
      date: "March 5, 2024",
      title: "Digital Accounting Trends in Kenya's SME Sector",
      excerpt: "Explore how Kenyan businesses are embracing digital accounting solutions for growth...",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      alt: "Professional businessman working with financial technology and digital accounting tools",
    },
  ];

  return (
    <div className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-resources-title">
            Resources & Insights
          </h1>
          <p className="text-xl text-muted-foreground" data-testid="text-resources-subtitle">
            Stay updated with accounting software trends and best practices
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200"
              data-testid={`card-blog-post-${index}`}
            >
              <img
                src={post.image}
                alt={post.alt}
                className="w-full h-48 object-cover"
                data-testid={`img-blog-post-${index}`}
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span data-testid={`text-blog-date-${index}`}>{post.date}</span>
                </div>
                <h2 className="text-xl font-semibold text-card-foreground mb-3" data-testid={`text-blog-title-${index}`}>
                  {post.title}
                </h2>
                <p className="text-muted-foreground mb-4" data-testid={`text-blog-excerpt-${index}`}>
                  {post.excerpt}
                </p>
                <button
                  className="text-primary hover:text-accent font-medium transition-colors duration-200 flex items-center"
                  data-testid={`button-read-more-${index}`}
                >
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
