"use client";

import { motion } from "framer-motion";
import {
  CircleDot,
  Disc3,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    icon: CircleDot,
    title: "Tyre Sales",
    description:
      "Wide selection of premium tyres from over 50 top global brands for cars, SUVs, trucks, and commercial vehicles. All sizes and budgets covered — from economy to high-performance tyres.",
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: Disc3,
    title: "Tyre Rims",
    description:
      "Upgrade your ride with our range of quality alloy and steel rims. From sleek factory replacements to stylish custom designs — we have the perfect rims to match your tyres and vehicle.",
    color: "from-amber-500/20 to-amber-500/5",
  },
  {
    icon: MessageSquare,
    title: "Expert Consultation",
    description:
      "Not sure which tyre or rim is right for you? Our experts will assess your vehicle, driving habits, and budget to recommend the perfect match — so you drive away with confidence.",
    color: "from-blue-500/20 to-blue-500/5",
  },
  {
    icon: ShieldCheck,
    title: "Tyre Inspection",
    description:
      "Comprehensive tyre health checks including tread depth measurement, pressure assessment, and sidewall condition review. Know the true state of your tyres before they let you down.",
    color: "from-cyan-500/20 to-cyan-500/5",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Services() {
  return (
    <section id="services" className="bg-surface py-24 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 tread-pattern opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-5">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            From premium tyre sales to expert consultation and thorough inspections,
            we help you find the right tyres and keep them in top condition.
          </p>
        </motion.div>

        {/* Service cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-surface-light rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 overflow-hidden"
            >
              {/* Gradient glow on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon
                    size={28}
                    className="text-primary"
                  />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>

                <p className="text-muted leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn more
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
