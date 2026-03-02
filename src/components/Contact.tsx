"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+234 913 169 2993",
    link: "tel:+2349131692993",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@fujityres.com",
    link: "mailto:info@fujityres.com",
  },
  {
    icon: MapPin,
    title: "Address",
    value: "123 Tyre Avenue, Ikeja, Lagos, Nigeria",
    link: "#",
  },
  {
    icon: Clock,
    title: "Hours",
    value: "Mon-Sat: 8AM-6PM, Sun: 10AM-4PM",
    link: "#",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  // ← Replace with your actual WhatsApp Business number (with country code, no + or spaces)
  const WHATSAPP_NUMBER = "2349131692993";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceLabels: Record<string, string> = {
      "tyre-purchase": "Tyre Purchase",
      "tyre-rims": "Tyre Rims",
      consultation: "Expert Consultation",
      inspection: "Tyre Inspection",
      quote: "Get a Quote",
      other: "Other",
    };

    const lines = [
      `Hi Fuji Tyres! I'd like to book an appointment / get a quote.`,
      ``,
      `*Name:* ${formData.name}`,
      `*Phone:* ${formData.phone}`,
      formData.email ? `*Email:* ${formData.email}` : "",
      formData.service
        ? `*Service:* ${serviceLabels[formData.service] ?? formData.service}`
        : "",
      formData.message ? `\n*Details:*\n${formData.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="bg-surface py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-5">
            Contact <span className="gradient-text">Us</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Ready to get new tyres or need expert advice? Reach out to us today.
            We&apos;d love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact info + Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {contactInfo.map((info) => (
              <a
                key={info.title}
                href={info.link}
                className="flex items-start gap-4 group p-4 rounded-xl hover:bg-surface-light transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <info.icon size={22} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted">{info.title}</p>
                  <p className="text-white font-medium">{info.value}</p>
                </div>
              </a>
            ))}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/2349131692993"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold transition-colors"
            >
              <MessageCircle size={22} />
              Chat on WhatsApp
            </a>

            {/* Map placeholder */}
            <div className="bg-surface-light rounded-xl border border-border overflow-hidden h-48 lg:h-auto lg:flex-1 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-surface-light to-background" />
              <div className="relative text-center p-6">
                <MapPin size={40} className="text-primary mx-auto mb-3" />
                <p className="text-sm text-muted">
                  123 Tyre Avenue, Ikeja
                  <br />
                  Lagos, Nigeria
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary text-sm font-medium mt-2 inline-block hover:underline"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-background rounded-2xl p-8 md:p-10 border border-border"
            >
              <h3 className="text-xl font-bold text-white mb-6">
                Book an Appointment or Get a Quote
              </h3>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-muted mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-surface-light border border-border rounded-xl px-4 py-3 text-white placeholder:text-muted/50 focus:outline-none focus:border-primary transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full bg-surface-light border border-border rounded-xl px-4 py-3 text-white placeholder:text-muted/50 focus:outline-none focus:border-primary transition-colors"
                    placeholder="+234 800 000 0000"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-surface-light border border-border rounded-xl px-4 py-3 text-white placeholder:text-muted/50 focus:outline-none focus:border-primary transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted mb-2">
                    Service Needed
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full bg-surface-light border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Select a service</option>
                    <option value="tyre-purchase">Tyre Purchase</option>
                    <option value="tyre-rims">Tyre Rims</option>
                    <option value="consultation">Expert Consultation</option>
                    <option value="inspection">Tyre Inspection</option>
                    <option value="quote">Get a Quote</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mt-5">
                <label className="block text-sm text-muted mb-2">
                  Message / Vehicle Details
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-surface-light border border-border rounded-xl px-4 py-3 text-white placeholder:text-muted/50 focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell us about your vehicle, tyre size needed, or any questions..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-xl hover:shadow-green-600/25 flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                Send via WhatsApp
              </motion.button>

              <p className="text-xs text-muted text-center mt-4">
                This will open WhatsApp with your message pre-filled. We
                typically respond within minutes!
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
