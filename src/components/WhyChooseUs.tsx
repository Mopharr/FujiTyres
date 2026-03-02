"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Users, Clock, DollarSign, ThumbsUp, Headphones } from "lucide-react";

const reasons = [
  {
    icon: CheckCircle2,
    title: "Genuine Products",
    description: "We only sell authentic, manufacturer-verified tyres. No fakes, no compromises on your safety.",
  },
  {
    icon: DollarSign,
    title: "Best Prices",
    description: "Competitive pricing with no hidden costs. We match any genuine quote from competitors.",
  },
  {
    icon: Headphones,
    title: "Expert Consultation",
    description: "Free personalised advice to help you choose the perfect tyres for your vehicle and driving style.",
  },
  {
    icon: ThumbsUp,
    title: "Quality Guaranteed",
    description: "Every tyre comes with manufacturer warranty. Your satisfaction is our top priority.",
  },
  {
    icon: Users,
    title: "Trusted by 1000+",
    description: "Over a thousand happy customers and growing. See our reviews and testimonials.",
  },
  {
    icon: Clock,
    title: "Fast Response",
    description: "Get a quote within minutes via WhatsApp. We value your time and respond quickly.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Big visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Stats card overlapping */}
            <div className="relative bg-surface-light rounded-3xl p-10 border border-border overflow-hidden">
              <div className="absolute inset-0 tread-pattern" />
              <div className="relative">
                <h3 className="text-5xl md:text-6xl font-bold gradient-text mb-2">
                  25+
                </h3>
                <p className="text-xl text-muted mb-8">Years of Experience</p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-background/50 rounded-2xl p-6 border border-border">
                    <p className="text-3xl font-bold text-white">1,000+</p>
                    <p className="text-sm text-muted mt-1">Happy Customers</p>
                  </div>
                  <div className="bg-background/50 rounded-2xl p-6 border border-border">
                    <p className="text-3xl font-bold text-white">50+</p>
                    <p className="text-sm text-muted mt-1">Tyre Brands</p>
                  </div>
                  <div className="bg-background/50 rounded-2xl p-6 border border-border">
                    <p className="text-3xl font-bold text-white">4.9</p>
                    <p className="text-sm text-muted mt-1">Google Rating</p>
                  </div>
                  <div className="bg-background/50 rounded-2xl p-6 border border-border">
                    <p className="text-3xl font-bold text-white">Free</p>
                    <p className="text-sm text-muted mt-1">Expert Advice</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Reasons */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">
              Why Fuji Tyres
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-10">
              Why Choose <span className="gradient-text">Us?</span>
            </h2>

            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <reason.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      {reason.title}
                    </h4>
                    <p className="text-sm text-muted leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
