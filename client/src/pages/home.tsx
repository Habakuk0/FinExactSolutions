import Hero from "@/components/sections/hero";
import Benefits from "@/components/sections/benefits";
import { useLocation, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Calculator,
  TrendingUp,
  FileText,
  BookOpen,
  ArrowRight,
  Calendar,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [, setLocation] = useLocation();
  const [resources, setResources] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://your-decamp-api/resources")
      .then(res => res.json())
      .then(data => {
        const sorted = data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        setResources(sorted.slice(0, 3));
      })
      .catch(console.error);
  }, []);

  const handleGetStarted = () => setLocation("/contact");
  const handleLearnMore = () => setLocation("/about");
  const handleServiceContact = (service: string) =>
    setLocation(`/contact?service=${encodeURIComponent(service)}`);

  const services = [
    { icon: Calculator, title: "QuickBooks Solutions", description: "Complete setup, migration, and customization", color: "bg-primary/10 text-primary" },
    { icon: TrendingUp, title: "Xero Solutions", description: "Professional setup and configuration services", color: "bg-accent/10 text-accent" },
    { icon: FileText, title: "Sage Accounting", description: "Professional Sage implementation and support", color: "bg-secondary/10 text-secondary" },
    { icon: BookOpen, title: "Zoho Books", description: "Complete Zoho Books setup and configuration", color: "bg-primary/10 text-primary" },
  ];

  return (
    <div>
      <Hero onGetStarted={handleGetStarted} onLearnMore={handleLearnMore} />
      <Benefits />

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground">Comprehensive accounting software solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((s, i) => (
              <Card key={i} className={`p-6 shadow-lg hover:shadow-xl transition-all duration-200 ${s.color}`}>
                <CardContent>
                  <s.icon className="h-8 w-8 mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.description}</p>
                  <Button
                    className="mt-4"
                    onClick={() => handleServiceContact(s.title)}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Preview Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Latest Resources</h2>
            <p className="text-xl text-muted-foreground">Stay updated with accounting software trends and best practices</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {resources.map((res, idx) => (
              <Card key={idx} className="shadow-lg hover:shadow-xl transition-all duration-200">
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{res.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-3">{res.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{res.excerpt}</p>
                  <Link
                    href={`/resources/${res.slug}`}
                    className="text-primary hover:text-accent font-medium transition-colors duration-200 flex items-center text-sm"
                  >
                    Read More <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button onClick={() => setLocation("/resources")}>View All Resources</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
