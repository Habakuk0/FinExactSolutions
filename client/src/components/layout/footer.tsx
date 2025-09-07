import { Link } from "wouter";
import { Facebook, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">FinExact Solutions</h3>
            <p className="text-secondary-foreground/80 mb-6 max-w-md">
              Professional accounting software implementation and support services for businesses across Kenya and the region.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-secondary-foreground/10 rounded-lg flex items-center justify-center hover:bg-secondary-foreground/20 transition-colors duration-200"
                data-testid="link-social-linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-secondary-foreground/10 rounded-lg flex items-center justify-center hover:bg-secondary-foreground/20 transition-colors duration-200"
                data-testid="link-social-twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-secondary-foreground/10 rounded-lg flex items-center justify-center hover:bg-secondary-foreground/20 transition-colors duration-200"
                data-testid="link-social-facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li>
                <Link href="/services" data-testid="link-footer-quickbooks">
                  <span className="hover:text-secondary-foreground transition-colors duration-200 cursor-pointer">
                    QuickBooks Setup
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services" data-testid="link-footer-xero">
                  <span className="hover:text-secondary-foreground transition-colors duration-200 cursor-pointer">
                    Xero Implementation
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services" data-testid="link-footer-migration">
                  <span className="hover:text-secondary-foreground transition-colors duration-200 cursor-pointer">
                    Data Migration
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services" data-testid="link-footer-training">
                  <span className="hover:text-secondary-foreground transition-colors duration-200 cursor-pointer">
                    Staff Training
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services" data-testid="link-footer-support">
                  <span className="hover:text-secondary-foreground transition-colors duration-200 cursor-pointer">
                    Ongoing Support
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li data-testid="text-contact-email">info@finexactsolutions.co.ke</li>
              <li data-testid="text-contact-phone">+254 751 151 841</li>
              <li data-testid="text-contact-location">Nairobi, Kenya</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary-foreground/20 mt-12 pt-8 text-center text-secondary-foreground/60">
          <p data-testid="text-copyright">
            &copy; 2024 FinExact Solutions. All rights reserved. | Professional accounting software implementation services.
          </p>
        </div>
      </div>
    </footer>
  );
}
