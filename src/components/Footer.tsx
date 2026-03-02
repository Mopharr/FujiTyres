"use client";

import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Why Choose Us", href: "#why-us" },
  { name: "Brands", href: "#brands" },
  { name: "Reviews", href: "#reviews" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

const services = [
  "Tyre Sales",
  "Tyre Rims",
  "Expert Consultation",
  "Tyre Inspection",
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t border-border relative">
      {/* Back to top */}
      <div className="flex justify-center -mt-6">
        <button
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full bg-primary hover:bg-primary-dark text-white flex items-center justify-center shadow-lg shadow-primary/25 transition-colors"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <svg
                  viewBox="0 0 40 40"
                  className="w-7 h-7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="20" cy="20" r="16" stroke="white" strokeWidth="3" />
                  <circle cx="20" cy="20" r="8" stroke="white" strokeWidth="2" />
                  <circle cx="20" cy="20" r="3" fill="white" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold text-white">FUJI</span>
                <span className="text-xl font-light text-primary ml-1">
                  TYRES
                </span>
              </div>
            </a>
            <p className="text-muted text-sm leading-relaxed mb-6">
              Your trusted destination for premium tyres and professional
              services. Quality you can trust, prices you&apos;ll love.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+2349131692993"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors"
              >
                <Phone size={14} />
                +234 913 169 2993
              </a>
              <a
                href="mailto:info@fujityres.com"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors"
              >
                <Mail size={14} />
                info@fujityres.com
              </a>
              <span className="flex items-center gap-2 text-sm text-gray-400">
                <MapPin size={14} />
                123 Tyre Avenue, Ikeja, Lagos
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-5">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-5">Our Services</h4>
            <ul className="flex flex-col gap-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm text-gray-400 hover:text-primary transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-white font-semibold mb-5">Opening Hours</h4>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex justify-between text-gray-400">
                <span>Monday - Friday</span>
                <span className="text-white">8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Saturday</span>
                <span className="text-white">8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Sunday</span>
                <span className="text-white">10:00 AM - 4:00 PM</span>
              </div>
              <div className="mt-2 pt-3 border-t border-border">
                <p className="text-primary font-medium text-sm">
                  WhatsApp Us Anytime
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Quick quotes and expert advice
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-white font-semibold mb-3 text-sm">
                Follow Us
              </h4>
              <div className="flex gap-3">
                {["Facebook", "Instagram", "Twitter"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-lg bg-surface-light border border-border hover:border-primary/30 flex items-center justify-center text-muted hover:text-primary transition-all text-xs font-bold"
                    aria-label={social}
                  >
                    {social[0]}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Fuji Tyres. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
