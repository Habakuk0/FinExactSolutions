import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [urlService, setUrlService] = useState<string>("");

  // Get service from URL params
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const service = params.get("service");
    if (service) {
      setUrlService(service);
    }
  }, []);

  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      service: urlService || "",
      message: "",
    },
  });

  // Update form when URL service changes
  useEffect(() => {
    if (urlService) {
      form.setValue("service", urlService);
    }
  }, [urlService, form]);

  const onSubmit = async (data: InsertContactMessage) => {
    try {
      const response = await fetch("/.netlify/functions/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: result.message || "We'll get back to you within 24 hours.",
        });
        form.reset();
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error: any) {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    }
  };

  const services = [
    { value: "quickbooks", label: "QuickBooks Implementation" },
    { value: "xero", label: "Xero Setup" },
    { value: "sage", label: "Sage Accounting" },
    { value: "zoho", label: "Zoho Books" },
    { value: "migration", label: "Data Migration" },
    { value: "training", label: "Staff Training" },
    { value: "other", label: "Other" },
  ];

  return (
    <div className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-contact-title">
            Get Started Today
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-contact-subtitle">
            Ready to optimize your accounting processes? Contact us for a free consultation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="shadow-lg" data-testid="card-contact-form">
            <CardContent className="p-8 lg:p-12">
              <h2 className="text-2xl font-bold text-card-foreground mb-8" data-testid="text-form-title">
                Send us a message
              </h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your first name"
                              {...field}
                              data-testid="input-first-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your last name"
                              {...field}
                              data-testid="input-last-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Enter your email address"
                            {...field}
                            data-testid="input-email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your company name"
                            {...field}
                            data-testid="input-company"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service Interest</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value} data-testid="select-service">
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service.value} value={service.label}>
                                {service.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your accounting software needs..."
                            className="resize-none"
                            rows={4}
                            {...field}
                            data-testid="textarea-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                    data-testid="button-submit-contact"
                  >
                    Send Message
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-lg" data-testid="card-contact-info">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-card-foreground mb-6" data-testid="text-contact-info-title">
                  Contact Information
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start" data-testid="contact-email">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <Mail className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-1">Email</h3>
                      <p className="text-muted-foreground">info@finexactsolutions.co.ke</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start" data-testid="contact-phone">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <Phone className="text-accent h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-1">Phone</h3>
                      <p className="text-muted-foreground">+254 751 151 841</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start" data-testid="contact-location">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <MapPin className="text-secondary h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-1">Location</h3>
                      <p className="text-muted-foreground">Nairobi, Kenya</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
