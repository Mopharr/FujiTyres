"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Adebayo Johnson",
    role: "Toyota Camry Owner",
    rating: 5,
    text: "Best tyre shop in Lagos! I got 4 new Michelin tyres fitted and the service was incredibly fast and professional. The prices were very competitive too. Highly recommended!",
    initials: "AJ",
  },
  {
    name: "Chioma Okafor",
    role: "Honda CR-V Owner",
    rating: 5,
    text: "The team at Fuji Tyres helped me choose the perfect all-terrain tyres for my SUV. Their expert advice saved me money and I got better tyres than I originally planned. Amazing service!",
    initials: "CO",
  },
  {
    name: "Emmanuel Osei",
    role: "Mercedes-Benz Owner",
    rating: 5,
    text: "I've been to many tyre shops but Fuji Tyres is by far the best. The wheel alignment was perfect, and they even did a free tyre inspection. Will definitely be coming back.",
    initials: "EO",
  },
  {
    name: "Fatima Ibrahim",
    role: "Lexus RX Owner",
    rating: 5,
    text: "Emergency puncture on a Sunday and they were available! Fixed my tyre in 15 minutes and charged a very fair price. These guys are lifesavers. Thank you Fuji Tyres!",
    initials: "FI",
  },
  {
    name: "David Mensah",
    role: "Fleet Manager",
    rating: 5,
    text: "We use Fuji Tyres for our entire fleet of 20 vehicles. Their bulk pricing is excellent and the quality of service is consistently top-notch. Our go-to tyre partner.",
    initials: "DM",
  },
  {
    name: "Grace Adekunle",
    role: "Kia Sportage Owner",
    rating: 5,
    text: "First time using Fuji Tyres and I was blown away by how professional everything was. From the shop to the staff to the quality of work. 5 stars all the way!",
    initials: "GA",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < rating ? "fill-accent text-accent" : "text-border"}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Customer Reviews
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-5">
            What Our <span className="gradient-text">Customers</span> Say
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied customers
            have to say about their experience with Fuji Tyres.
          </p>

          {/* Google rating badge */}
          <div className="inline-flex items-center gap-3 mt-6 bg-surface-light border border-border rounded-full px-6 py-3">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className="fill-accent text-accent"
                />
              ))}
            </div>
            <span className="text-white font-semibold">4.9/5</span>
            <span className="text-muted">on Google Reviews</span>
          </div>
        </motion.div>

        {/* Testimonial grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-surface-light rounded-2xl p-8 border border-border hover:border-primary/20 transition-all duration-300 relative"
            >
              <Quote
                size={40}
                className="text-primary/10 absolute top-6 right-6"
              />

              <StarRating rating={testimonial.rating} />

              <p className="text-gray-300 mt-4 mb-6 leading-relaxed text-sm">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-muted text-xs">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
