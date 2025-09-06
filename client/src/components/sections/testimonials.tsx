import { Star, User } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Kamau",
      company: "TechStart Kenya",
      content: "FinExact Solutions transformed our accounting processes. The QuickBooks implementation was seamless and their training was exceptional.",
    },
    {
      name: "David Mwangi",
      company: "Retail Solutions Ltd",
      content: "Professional, reliable, and knowledgeable. Our Xero migration was completed on time and within budget. Highly recommended!",
    },
    {
      name: "Grace Njeri",
      company: "Manufacturing Co.",
      content: "Excellent support throughout our Sage implementation. The team's expertise made all the difference in our digital transformation.",
    },
  ];

  const StarRating = () => (
    <div className="flex text-yellow-400">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-current" />
      ))}
    </div>
  );

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-testimonials-title">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground" data-testid="text-testimonials-subtitle">
            Trusted by businesses across Kenya and the region
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-200"
              data-testid={`card-testimonial-${index}`}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <User className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground" data-testid={`text-testimonial-name-${index}`}>
                    {testimonial.name}
                  </h4>
                  <p className="text-muted-foreground text-sm" data-testid={`text-testimonial-company-${index}`}>
                    {testimonial.company}
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground italic mb-4" data-testid={`text-testimonial-content-${index}`}>
                "{testimonial.content}"
              </p>
              <StarRating />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
