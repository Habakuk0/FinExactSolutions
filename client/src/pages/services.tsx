import { Button } from "@/components/ui/button";
import { Calculator, TrendingUp, FileText, BookOpen, AudioWaveform, Settings } from "lucide-react";
import { useLocation } from "wouter";
import { Card, CardContent } from "@/components/ui/card";

export default function Services() {
  const [, setLocation] = useLocation();

  const handleServiceContact = (service: string) => {
    setLocation(`/contact?service=${encodeURIComponent(service)}`);
  };

  const services = [
    {
      icon: Calculator,
      title: "QuickBooks Solutions",
      description: "Complete setup, migration, and customization",
      serviceKey: "QuickBooks Implementation",
      details: [
        { title: "Setup & Installation", desc: "Complete QuickBooks setup tailored to your business needs" },
        { title: "Data Migration", desc: "Seamless transfer from existing accounting systems" },
        { title: "Chart of Accounts", desc: "Custom account structure design and implementation" },
        { title: "Training & Support", desc: "Comprehensive staff training and ongoing assistance" },
      ],
      color: "bg-primary/10 text-primary",
      buttonColor: "bg-primary",
    },
    {
      icon: TrendingUp,
      title: "Xero Solutions",
      description: "Professional setup and configuration services",
      serviceKey: "Xero Setup",
      details: [
        { title: "Setup & Configuration", desc: "Professional Xero setup and configuration services" },
        { title: "System Migration", desc: "Expert migration from other accounting platforms" },
        { title: "Account Design", desc: "Strategic chart of accounts planning and setup" },
        { title: "Staff Training", desc: "Comprehensive user training and ongoing support" },
      ],
      color: "bg-accent/10 text-accent",
      buttonColor: "bg-accent",
    },
    {
      icon: FileText,
      title: "Sage Accounting",
      description: "Professional Sage implementation and support",
      serviceKey: "Sage Setup",
    },
    {
      icon: BookOpen,
      title: "Zoho Books",
      description: "Complete Zoho Books setup and configuration",
      serviceKey: "Zoho Setup",
    },
    {
      icon: AudioWaveform,
      title: "AudioWaveform Accounting",
      description: "AudioWaveform accounting system implementation",
      serviceKey: "AudioWaveform Setup",
    },
    {
      icon: Settings,
      title: "ERP Integration",
      description: "Payroll and ERP system integrations",
      serviceKey: "ERP Integration",
    },
  ];

  return (
    <div className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive accounting software solutions for businesses of all sizes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center mr-4 ${service.color || "bg-card"}`}>
                    <service.icon className="h-8 w-8" />
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-card-foreground">{service.title}</h2>
                </div>

                {service.details && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {service.details.map((d, i) => (
                      <div key={i}>
                        <h3 className="font-semibold text-card-foreground mb-2">{d.title}</h3>
                        <p className="text-muted-foreground text-sm">{d.desc}</p>
                      </div>
                    ))}
                  </div>
                )}

                <Button
                  onClick={() => handleServiceContact(service.serviceKey)}
                  className={`mt-8 ${service.buttonColor || "bg-primary"} hover:${service.buttonColor}/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg`}
                >
                  {service.title.includes("QuickBooks") || service.title.includes("Xero") ? `Get ${service.title.split(" ")[0]} Setup` : "Contact Us"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
