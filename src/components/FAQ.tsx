"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How do I know what tyre size I need?",
    answer:
      "Your tyre size is printed on the sidewall of your current tyres. It looks something like 205/55R16. You can also find it in your vehicle's owner manual or on the sticker inside the driver's door. If you're unsure, just reach out to us and our experts will help you find the right size!",
  },
  {
    question: "Can you help me choose the right tyre for my vehicle?",
    answer:
      "Absolutely! That's one of our core services. Our tyre experts will consider your vehicle type, driving habits, road conditions, and budget to recommend the perfect tyre for you. Just send us a message on WhatsApp or fill out the contact form with your vehicle details.",
  },
  {
    question: "Do you offer any warranty on tyres?",
    answer:
      "Yes! All tyres we sell come with the manufacturer's warranty, typically covering defects for 5 years from the date of manufacture. We only stock genuine, quality products from trusted brands.",
  },
  {
    question: "What brands do you stock?",
    answer:
      "We stock over 50 brands including Michelin, Bridgestone, Continental, Pirelli, Goodyear, Dunlop, Hankook, Yokohama, and many more. We have options for every budget — from premium to mid-range to economy tyres.",
  },
  {
    question: "Do you do delivery?",
    answer:
      "Yes, we can arrange delivery of your tyres within Lagos. Contact us on WhatsApp with your location and order details, and we'll provide delivery options and pricing.",
  },
  {
    question: "How often should I inspect my tyres?",
    answer:
      "We recommend a visual check at least once a month and a professional inspection every 6 months or before long trips. Regular inspections catch issues like uneven wear, low tread depth, and sidewall damage before they become dangerous. We offer tyre inspection services to help you stay safe.",
  },
  {
    question: "Can I get a quote before purchasing?",
    answer:
      "Of course! Just send us your tyre size, vehicle details, and preferred brand (if any) via WhatsApp or our contact form, and we'll send you a quote within minutes. No obligation, no pressure.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, bank transfers, POS payments (all major cards), and mobile payments. For fleet customers and bulk orders, we also offer flexible payment arrangements.",
  },
];

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`border border-border rounded-xl overflow-hidden transition-colors ${
        isOpen ? "border-primary/30 bg-surface-light" : "bg-surface-light/50"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <span className="font-semibold text-white pr-4">{faq.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0"
        >
          <ChevronDown
            size={20}
            className={isOpen ? "text-primary" : "text-muted"}
          />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-6 text-muted leading-relaxed">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 relative">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-5">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-muted text-lg">
            Everything you need to know about our tyres and services.
          </p>
        </motion.div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
