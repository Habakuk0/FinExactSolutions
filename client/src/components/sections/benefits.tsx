import { CheckCircle, Cog, Users, Wallet } from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      icon: CheckCircle,
      title: "Certified Experts",
      description: "Qualified professionals in QuickBooks, Xero, and other leading platforms",
    },
    {
      icon: Cog,
      title: "End-to-End Support",
      description: "Complete setup, migration, training, and ongoing troubleshooting",
    },
    {
      icon: Users,
      title: "Tailored Solutions",
      description: "Customized implementations for SMEs and large corporates",
    },
    {
      icon: Wallet,
      title: "Affordable & Reliable",
      description: "Competitive pricing with dependable, professional service",
    },
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-benefits-title">
            Why Choose FinExact Solutions?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-benefits-subtitle">
            We provide end-to-end accounting software solutions with certified expertise and personalized support.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-200 text-center"
                data-testid={`card-benefit-${index}`}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="text-primary h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-4" data-testid={`text-benefit-title-${index}`}>
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground" data-testid={`text-benefit-description-${index}`}>
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
