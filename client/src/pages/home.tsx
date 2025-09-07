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
      color: "bg-primary/10 text-primary"
    },
    {
      icon: TrendingUp,
      title: "Xero Solutions",
      description: "Professional setup and configuration services",
      color: "bg-accent/10 text-accent"
    },
    {
      icon: FileText,
      title: "Sage Accounting",
      description: "Professional Sage implementation and support",
      color: "bg-secondary/10 text-secondary"
    },
    {
      icon: BookOpen,
      title: "Zoho Books",
      description: "Complete Zoho Books setup and configuration",
      color: "bg-primary/10 text-primary"
    }
  ];

  const blogPosts = [
    {
      date: "March 15, 2024",
      title: "QuickBooks vs Xero: Which is Right for Your Business?",
      excerpt: "Compare the features, pricing, and benefits of these leading accounting software platforms..."
    },
    {
      date: "March 10, 2024",
      title: "5 Steps to Successful Accounting Software Migration",
      excerpt: "Learn the essential steps for smoothly migrating your financial data to a new system..."
    },
    {
      date: "March 5, 2024",
      title: "Digital Accounting Trends in Kenya's SME Sector",
      excerpt: "Explore how Kenyan businesses are embracing digital accounting solutions for growth..."
    }
  ];

  return (
    <div>
      <Hero onGetStarted={handleGetStarted} onLearnMore={handleLearnMore} />
      <Benefits />

      {/* Logo Section */}
      <div className="text-center my-12">
        <img src="/logo.png" alt="FinExact Solutions Logo" className="h-16 mx-auto" />
      </div>

      {/* Services Preview Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional accounting software solutions for businesses of all sizes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-200">
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
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
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg"
            >
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Resources Preview Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Latest Resources
            </h2>
            <p className="text-xl text-muted-foreground">
              Stay updated with accounting software trends and best practices
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-200">
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {post.excerpt}
                  </p>
                  <button className="text-primary hover:text-accent font-medium transition-colors duration-200 flex items-center text-sm">
                    Read More <ArrowRight className="ml-1 h-3 w-3" />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button
              onClick={() => setLocation("/resources")}
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg"
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Get Started Today
            </h2>
            <p className="text-xl text-secondary-foreground/90 max-w-3xl mx-auto">
              Ready to optimize your accounting processes? Contact us for a free consultation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Mail className="h-8 w-8 mx-auto mb-2" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p>info@finexactsolutions.co.ke</p>
            </div>
            
            <div className="text-center">
              <Phone className="h-8 w-8 mx-auto mb-2" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <p>+254751151841</p>
            </div>
            
            <div className="text-center">
              <MapPin className="h-8 w-8 mx-auto mb-2" />
              <h3 className="font-semibold mb-2">Location</h3>
              <p>Nairobi, Kenya</p>
            </div>
          </div>
          
          <div className="text-center">
            <Button
              onClick={() => setLocation("/contact")}
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              Contact Us Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
