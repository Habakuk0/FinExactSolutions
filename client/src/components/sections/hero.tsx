import { Button } from "@/components/ui/button";

interface HeroProps {
  onGetStarted: () => void;
  onLearnMore: () => void;
}

export default function Hero({ onGetStarted, onLearnMore }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-primary to-secondary text-primary-foreground">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-secondary/90"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6" data-testid="text-hero-title">
              Professional Accounting Software Solutions
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/90" data-testid="text-hero-subtitle">
              Expert implementation of QuickBooks, Xero, Sage, and other leading accounting platforms for businesses across Kenya and the region.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={onGetStarted}
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                data-testid="button-get-started"
              >
                Get Started Today
              </Button>
              <Button
                variant="outline"
                onClick={onLearnMore}
                className="border-2 border-primary-foreground/30 hover:border-primary-foreground text-primary-foreground hover:text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 bg-transparent hover:bg-primary-foreground/10"
                data-testid="button-learn-more"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Professional accounting dashboard with financial analytics and data visualization"
              className="rounded-2xl shadow-2xl w-full h-auto max-w-lg mx-auto"
              data-testid="img-hero-dashboard"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
