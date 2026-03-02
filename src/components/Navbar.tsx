"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Clock, MapPin } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Why Us", href: "#why-us" },
  { name: "Brands", href: "#brands" },
  { name: "Reviews", href: "#reviews" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="hidden lg:block bg-primary text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone size={14} />
              <a href="tel:+2349131692993" className="hover:underline">
                +234 913 169 2993
              </a>
            </span>
            <span className="flex items-center gap-2">
              <Clock size={14} />
              Mon - Sat: 8:00 AM - 6:00 PM
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={14} />
              123 Tyre Avenue, Lagos, Nigeria
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-semibold">Free Expert Consultation on All Enquiries!</span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <motion.nav
        className={`fixed top-0 lg:top-[40px] left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass shadow-lg shadow-black/20 lg:top-0"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center group-hover:animate-pulse-glow transition-all">
              <svg
                viewBox="0 0 40 40"
                className="w-7 h-7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="20"
                  cy="20"
                  r="16"
                  stroke="white"
                  strokeWidth="3"
                />
                <circle
                  cx="20"
                  cy="20"
                  r="8"
                  stroke="white"
                  strokeWidth="2"
                />
                <circle cx="20" cy="20" r="3" fill="white" />
                <line
                  x1="20"
                  y1="4"
                  x2="20"
                  y2="12"
                  stroke="white"
                  strokeWidth="2"
                />
                <line
                  x1="20"
                  y1="28"
                  x2="20"
                  y2="36"
                  stroke="white"
                  strokeWidth="2"
                />
                <line
                  x1="4"
                  y1="20"
                  x2="12"
                  y2="20"
                  stroke="white"
                  strokeWidth="2"
                />
                <line
                  x1="28"
                  y1="20"
                  x2="36"
                  y2="20"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <div>
              <span className="text-xl font-bold text-white tracking-tight">
                FUJI
              </span>
              <span className="text-xl font-light text-primary ml-1">
                TYRES
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-primary transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+2349131692993"
              className="flex items-center gap-2 text-white hover:text-primary transition-colors"
            >
              <Phone size={18} />
              <span className="font-semibold">Call Now</span>
            </a>
            <a
              href="#contact"
              className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-all hover:shadow-lg hover:shadow-primary/25"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden glass border-t border-border"
            >
              <div className="px-6 py-4 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors py-2 border-b border-border"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="bg-primary text-white text-center py-3 rounded-full font-semibold mt-2"
                  onClick={() => setIsOpen(false)}
                >
                  Book Appointment
                </a>
                <a
                  href="tel:+2349131692993"
                  className="flex items-center justify-center gap-2 text-primary font-semibold py-2"
                >
                  <Phone size={18} />
                  +234 913 169 2993
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
