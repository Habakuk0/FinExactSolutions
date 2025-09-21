import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar } from "lucide-react";

export default function ResourcesPage() {
  const [resources, setResources] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://your-decamp-api/resources")
      .then(res => res.json())
      .then(data => setResources(data))
      .catch(console.error);
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8">All Resources</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {resources.map((res, idx) => (
          <Card key={idx} className="shadow-lg hover:shadow-xl transition-all duration-200">
            <CardContent className="p-6">
              <div className="flex items-center text-sm text-muted-foreground mb-3">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{res.date}</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">{res.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{res.excerpt}</p>
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
    </div>
  );
}
