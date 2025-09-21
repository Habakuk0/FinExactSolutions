// client/src/pages/home.tsx
import Hero from "@/components/sections/hero";
import Benefits from "@/components/sections/benefits";
import { useState, useEffect } from "react";
import { useLocation, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const DECAMP_API = import.meta.env.VITE_DECAMP_API;

export default function Home() {
  const [, setLocation] = useLocation();
  const [latestResources, setLatestResources] = useState<any[]>([]);

  useEffect(() => {
    fetch(`${DECAMP_API}/resources?limit=3`)
      .then((res) => res.json())
      .then((data) => setLatestResources(data))
      .catch((err) => console.error(err));
  }, []);

  const handleGetStarted = () => setLocation("/contact");
  const handleLearnMore = () => setLocation("/about");

  return (
    <div>
      <Hero onGetStarted={handleGetStarted} onLearnMore={handleLearnMore} />
      <Benefits />

      {/* Latest Resources */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Latest Resources</h2>
            <p className="text-xl text-muted-foreground">
              Stay updated with accounting software trends
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {latestResources.map((post) => (
              <Link
                key={post.slug}
                href={`/resources/${post.slug}`}
                className="block rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
              >
                {post.image && (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{post.title}</h3>
                  <p className="text-muted-foreground text-sm">{post.date}</p>
                  {post.description && <p className="mt-2">{post.description}</p>}
                </div>
              </Link>
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
    </div>
  );
}
