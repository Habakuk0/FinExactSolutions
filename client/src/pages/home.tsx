import Hero from "@/components/sections/hero";
import Benefits from "@/components/sections/benefits";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calculator, TrendingUp, FileText, BookOpen, ArrowRight, Mail, Phone, MapPin, Calendar } from "lucide-react";

export default function Home() {
  const [, setLocation] = useLocation();

  const handleGetStarted = () => {
    setLocation("/contact");
  };

  const handleLearnMore = () => {
    setLocation("/about");
  };

  const handleServiceContact = (service: string) => {
    setLocation(`/contact?service=${encodeURIComponent(service)}`);
  };

  const services = [
    {
      icon: Calculator,
      title: "QuickBooks Solutions",
      description: "Complete setup, migration, and customization",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: TrendingUp,
      title: "Xero Solutions",
      description: "Professional setup and configuration services",
      color: "bg-accent/10 text-accent",
    },
    {
      icon: FileText,
      title: "Sage Accounting",
      description: "Professional Sage implementation and support",
      color: "bg-secondary/10 text-secondary",
    },
    {
      icon: BookOpen,
      title: "Zoho Books",
      description: "Complete Zoho Books setup and configuration",
      color: "bg-primary/10 text-primary",
    },
  ];

  const blogPosts = [
    {
      date: "March 15, 2024",
      title: "QuickBooks vs Xero: Which is Right for Your Business?",
      excerpt: "Compare the features, pricing, and benefits of these leading accounting software platforms...",
    },
    {
      date: "March 10, 2024",
      title: "5 Steps to Successful Accounting Software Migration",
      excerpt: "Learn the essential steps for smoothly migrating your financial data to a new system...",
    },
    {
      date: "March 5, 2024",
      title: "Digital Accounting Trends in Kenya's SME Sector",
      excerpt: "Explore how Kenyan businesses are embracing digital accounting solutions for growth...",
    },
  ];

  return (
    <div>
      <Hero onGetStarted={handleGetStarted} onLearnMore={handleLearnMore} />
      <Benefits />

      {/* Services Preview Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl lg:text-4xl font-bold text-foreground mb-4"
              data-testid="text-home-services-title"
            >
              Our Services
            </h2>
            <p
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              data-testid="text-home-services-subtitle"
            >
              Professional accounting software solutions for businesses of all sizes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="shadow-lg hover:shadow-xl transition-all duration-200"
                  data-testid={`card-home-service-${index}`}
                >
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center mx-auto mb-4`}
                    >
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3
                      className="text-xl font-semibold text-card-foreground mb-2"
                      data-testid={`text-home-service-title-${index}`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-muted-foreground text-sm"
                      data-testid={`text-home-service-description-${index}`}
                    >
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <Button
              onClick={() => setLocation("/services")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
              data-testid="button-view-all-services"
            >
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2
                className="text-3xl lg:text-4xl font-bold text-foreground mb-6"
                data-testid="text-home-about-title"
              >
                About Us
              </h2>
              <p
                className="text-lg text-muted-foreground mb-6"
                data-testid="text-home-about-description"
              >
                At FinExact Solutions, we help businesses simplify their accounting with modern
                software solutions. We specialize in QuickBooks, Xero, Sage, Zoho Books, and more —
                offering setup, migration, chart of accounts customization, and training.
              </p>
              <Button
                onClick={() => setLocation("/about")}
                variant="outline"
                className="px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                data-testid="button-learn-more-about"
              >
                Learn More About Us
              </Button>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
                alt="Professional business consulting meeting in modern office"
                className="rounded-2xl shadow-xl w-full h-auto"
                data-testid="img-home-about"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Resources Preview Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl lg:text-4xl font-bold text-foreground mb-4"
              data-testid="text-home-resources-title"
            >
              Latest Resources
            </h2>
            <p
              className="text-xl text-muted-foreground"
              data-testid="text-home-resources-subtitle"
            >
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
                    <span data-testid={`text-home-blog-date-${index}`}>{post.date}</span>
                  </div>
                  <h3
                    className="text-lg font-semibold text-card-foreground mb-3"
                    data-testid={`text-home-blog-title-${index}`}
                  >
                    {post.title}
                  </h3>
                  <p
                    className="text-muted-foreground text-sm mb-4"
                    data-testid={`text-home-blog-excerpt-${index}`}
                  >
                    {post.excerpt}
                  </p>
                  <button
                    className="text-primary hover:text-accent font-medium transition-colors duration-200 flex items-center text-sm"
                    data-testid={`button-home-blog-read-${index}`}
                  >
                    Read More <ArrowRight className="ml-1 h-3 w-3" />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              onClick={() => setLocation("/resources")}
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
              data-testid="button-view-all-resources"
            >
              View All Resources
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Preview Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl lg:text-4xl font-bold mb-4"
              data-testid="text-home-contact-title"
            >
              Get Started Today
            </h2>
            <p
              className="text-xl text-secondary-foreground/90 max-w-3xl mx-auto"
              data-testid="text-home-contact-subtitle"
            >
              Ready to optimize your accounting processes? Contact us for a free consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center" data-testid="home-contact-email">
              <div className="w-16 h-16 bg-secondary-foreground/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-secondary-foreground/80">info@finexactsolutions.co.ke</p>
            </div>

            <div className="text-center" data-testid="home-contact-phone">
              <div className="w-16 h-16 bg-secondary-foreground/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-secondary-foreground/80">+254 751 151 841</p>
            </div>

            <div className="text-center" data-testid="home-contact-location">
              <div className="w-16 h-16 bg-secondary-foreground/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-secondary-foreground/80">Nairobi, Kenya</p>
            </div>
          </div>

          <div className="text-center">
            <Button
              onClick={() => setLocation("/contact")}
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              data-testid="button-contact-us"
            >
              Contact Us Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
