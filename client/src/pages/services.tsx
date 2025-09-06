import { Button } from "@/components/ui/button";
import { Calculator, TrendingUp, FileText, BookOpen, AudioWaveform, Settings } from "lucide-react";
import { useLocation } from "wouter";

export default function Services() {
  const [, setLocation] = useLocation();

  const handleServiceContact = (service: string) => {
    setLocation(`/contact?service=${encodeURIComponent(service)}`);
  };

  return (
    <div className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-services-title">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-services-subtitle">
            Comprehensive accounting software solutions for businesses of all sizes
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* QuickBooks Solutions */}
          <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-lg hover:shadow-xl transition-all duration-200" data-testid="card-quickbooks">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                <Calculator className="text-primary h-8 w-8" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-card-foreground" data-testid="text-quickbooks-title">
                QuickBooks Solutions
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-card-foreground mb-2">Setup & Installation</h3>
                <p className="text-muted-foreground text-sm">Complete QuickBooks setup tailored to your business needs</p>
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground mb-2">Data Migration</h3>
                <p className="text-muted-foreground text-sm">Seamless transfer from existing accounting systems</p>
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground mb-2">Chart of Accounts</h3>
                <p className="text-muted-foreground text-sm">Custom account structure design and implementation</p>
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground mb-2">Training & Support</h3>
                <p className="text-muted-foreground text-sm">Comprehensive staff training and ongoing assistance</p>
              </div>
            </div>
            
            <Button
              onClick={() => handleServiceContact("QuickBooks Implementation")}
              className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
              data-testid="button-quickbooks-contact"
            >
              Get QuickBooks Setup
            </Button>
          </div>
          
          {/* Xero Solutions */}
          <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-lg hover:shadow-xl transition-all duration-200" data-testid="card-xero">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mr-4">
                <TrendingUp className="text-accent h-8 w-8" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-card-foreground" data-testid="text-xero-title">
                Xero Solutions
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-card-foreground mb-2">Setup & Configuration</h3>
                <p className="text-muted-foreground text-sm">Professional Xero setup and configuration services</p>
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground mb-2">System Migration</h3>
                <p className="text-muted-foreground text-sm">Expert migration from other accounting platforms</p>
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground mb-2">Account Design</h3>
                <p className="text-muted-foreground text-sm">Strategic chart of accounts planning and setup</p>
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground mb-2">Staff Training</h3>
                <p className="text-muted-foreground text-sm">Comprehensive user training and ongoing support</p>
              </div>
            </div>
            
            <Button
              onClick={() => handleServiceContact("Xero Setup")}
              className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
              data-testid="button-xero-contact"
            >
              Get Xero Setup
            </Button>
          </div>
        </div>
        
        {/* Other Solutions */}
        <div className="bg-gradient-to-r from-muted to-card rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4" data-testid="text-other-solutions-title">
              Additional Software Solutions
            </h2>
            <p className="text-muted-foreground text-lg" data-testid="text-other-solutions-subtitle">
              We also specialize in other leading accounting and business software platforms
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center" data-testid="card-sage">
              <div className="w-20 h-20 bg-card rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4">
                <FileText className="text-secondary h-8 w-8" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Sage Accounting</h3>
              <p className="text-muted-foreground text-sm">Professional Sage implementation and support</p>
            </div>
            
            <div className="text-center" data-testid="card-zoho">
              <div className="w-20 h-20 bg-card rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4">
                <BookOpen className="text-primary h-8 w-8" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Zoho Books</h3>
              <p className="text-muted-foreground text-sm">Complete Zoho Books setup and configuration</p>
            </div>
            
            <div className="text-center" data-testid="card-wave">
              <div className="w-20 h-20 bg-card rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4">
                <AudioWaveform className="text-accent h-8 w-8" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">AudioWaveform Accounting</h3>
              <p className="text-muted-foreground text-sm">AudioWaveform accounting system implementation</p>
            </div>
            
            <div className="text-center" data-testid="card-erp">
              <div className="w-20 h-20 bg-card rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4">
                <Settings className="text-secondary h-8 w-8" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">ERP Integration</h3>
              <p className="text-muted-foreground text-sm">Payroll and ERP system integrations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
