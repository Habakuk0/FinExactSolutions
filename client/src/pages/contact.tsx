import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="py-20 bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <img src="/logo.png" alt="FinExact Solutions Logo" className="h-16 mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg text-muted-foreground">
            We’d love to hear from you. Reach out today and let’s simplify your accounting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <Mail className="h-8 w-8 mx-auto mb-2" />
            <h3 className="font-semibold mb-2">Email</h3>
            <p>info@finexactsolutions.co.ke</p>
          </div>

          <div className="text-center">
            <Phone className="h-8 w-8 mx-auto mb-2" />
            <h3 className="font-semibold mb-2">Phone</h3>
            <p>+254751151841</p>
          </div>

          <div className="text-center">
            <MapPin className="h-8 w-8 mx-auto mb-2" />
            <h3 className="font-semibold mb-2">Location</h3>
            <p>Nairobi, Kenya</p>
          </div>
        </div>
      </div>
    </div>
  );
}
