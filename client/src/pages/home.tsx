import Hero from "@/components/sections/hero";
import Benefits from "@/components/sections/benefits";
import { useLocation, Link } from "wouter";       // ✅ added Link
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Calculator,
  TrendingUp,
  FileText,
  BookOpen,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Calendar,
} from "lucide-react";

export default function Home() {
  const [, setLocation] = useLocation();

  const handleGetStarted = () => setLocation("/contact");
  const handleLearnMore = () => setLocation("/about");
  const handleServiceContact = (service) =>
    setLocation(`/contact?service=${encodeURIComponent(service)}`);

  const services = [
    { icon: Calculator, title: "QuickBooks Solutions", description: "Complete setup, migration, and customization", color: "bg-primary/10 text-primary" },
    { icon: TrendingUp, title: "Xero Solutions", description: "Professional setup and configuration services", color: "bg-accent/10 text-accent" },
    { icon: FileText, title: "Sage Accounting", description: "Professional Sage implementation and support", color: "bg-secondary/10 text-secondary" },
    { icon: BookOpen, title: "Zoho Books", description: "Complete Zoho Books setup and configuration", color: "bg-primary/10 text-primary" },
  ];

  // ✅ added slug to each blog post
  const blogPosts = [
    {
      slug: "quickbooks-vs-xero",
      date: "March 15, 2024",
      title: "QuickBooks vs Xero: Which is Right for Your Business?",
      excerpt: "Compare the features, pricing, and benefits of these leading accounting software platforms...",
    },
    {
      slug: "accounting-software-migration",
      date: "March 10, 2024",
      title: "5 Steps to Successful Accounting Software Migration",
      excerpt: "Learn the essential steps for smoothly migrating your financial data to a new system...",
    },
    {
      slug: "digital-accounting-trends-kenya",
      date: "March 5, 2024",
      title: "Digital Accounting Trends in Kenya's SME Sector",
      excerpt: "Explore how Kenyan businesses are embracing digital accounting solutions for growth...",
    },
  ];

  return (
    <div>
      <Hero onGetStarted={handleGetStarted} onLearnMore={handleLearnMore} />
      <Benefits />

      {/* Services Section */}
      {/* …[services code unchanged]… */}

      {/* Resources Preview Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Latest Resources
            </h2>
            <p className="text-xl text-muted-foreground">
              Stay updated with accounting software trends and best practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="shadow-lg hover:shadow-xl transition-all duration-200"
                data-testid={`card-home-blog-${index}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-3">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {post.excerpt}
                  </p>
                  {/* ✅ use Link instead of button */}
                  <Link
                    href={`/resources/${post.slug}`}
                    className="text-primary hover:text-accent font-medium transition-colors duration-200 flex items-center text-sm"
                  >
                    Read More <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              onClick={() => setLocation("/resources")}
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
            >
              View All Resources
            </Button>
          </div>
        </div>
      </section>

      {/* …[contact section unchanged]… */}
    </div>
  );
}
