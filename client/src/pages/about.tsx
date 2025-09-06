import { CheckCircle } from "lucide-react";

export default function About() {
  return (
    <div className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-card-foreground mb-6" data-testid="text-about-title">
              About Us
            </h1>
            <p className="text-lg text-muted-foreground mb-8" data-testid="text-about-description-1">
              At FinExact Solutions, we help businesses simplify their accounting with modern software solutions. We specialize in QuickBooks, Xero, Sage, Zoho Books, and more — offering setup, migration, chart of accounts customization, and training.
            </p>
            <p className="text-lg text-muted-foreground mb-8" data-testid="text-about-description-2">
              Our goal is to provide reliable and affordable solutions tailored to SMEs and corporates, backed by expert support every step of the way.
            </p>
          </div>
          
          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Professional business consulting meeting in modern office"
              className="rounded-2xl shadow-xl w-full h-auto"
              data-testid="img-about-office"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
