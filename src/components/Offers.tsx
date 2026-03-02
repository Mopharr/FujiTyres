"use client";

import { motion } from "framer-motion";
import { Zap, Tag, Percent, Gift } from "lucide-react";

const offers = [
  {
    icon: Percent,
    title: "New Customer Discount",
    description: "Get 15% off your first tyre purchase when you buy from us. Valid for all brands and sizes.",
    badge: "15% OFF",
    badgeColor: "bg-primary",
  },
  {
    icon: Gift,
    title: "Buy 3, Get 1 Free",
    description: "Purchase 3 tyres of the same size and brand, and get the 4th tyre absolutely free!",
    badge: "BEST DEAL",
    badgeColor: "bg-green-600",
  },
  {
    icon: Tag,
    title: "Free Consultation",
    description: "Not sure which tyre is right for you? Get free expert advice with every enquiry — no obligation.",
    badge: "FREE",
    badgeColor: "bg-blue-600",
  },
];

export default function Offers() {
  return (
    <section className="bg-surface py-24 relative overflow-hidden">
      {/* Animated background accent */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest flex items-center justify-center gap-2">
            <Zap size={16} className="fill-primary" />
            Special Offers
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-5">
            Unbeatable <span className="gradient-text">Deals</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Take advantage of our limited-time offers and save big on premium
            tyres and services.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ scale: 1.03 }}
              className="relative bg-background rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 group overflow-hidden"
            >
              {/* Corner badge */}
              <div
                className={`absolute top-4 right-4 ${offer.badgeColor} text-white text-xs font-bold px-3 py-1.5 rounded-full`}
              >
                {offer.badge}
              </div>

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <offer.icon size={32} className="text-primary" />
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                {offer.title}
              </h3>
              <p className="text-muted leading-relaxed mb-6">
                {offer.description}
              </p>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
              >
                Claim Offer
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary/20 via-primary/10 to-accent/10 rounded-3xl p-10 md:p-16 border border-primary/20 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 tread-pattern opacity-30" />
          <div className="relative">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Need Tyres? Get a Free Quote Today!
            </h3>
            <p className="text-muted text-lg mb-8 max-w-xl mx-auto">
              Tell us your vehicle and tyre size, and we&apos;ll send you the best
              prices within minutes. No obligation, no hassle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:shadow-xl hover:shadow-primary/25"
              >
                Get Free Quote
              </motion.a>
              <motion.a
                href="tel:+2349131692993"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white/20 hover:border-primary/50 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all"
              >
                Call: +234 913 169 2993
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
