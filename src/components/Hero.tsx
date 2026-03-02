"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Truck, Award } from "lucide-react";

function TyreGraphic() {
  return (
    <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px]">
      {/* Outer glow */}
      <div className="absolute inset-0 rounded-full bg-primary/10 blur-3xl" />

      {/* Tyre SVG */}
      <svg
        viewBox="0 0 500 500"
        className="w-full h-full animate-spin-slow drop-shadow-2xl"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer tyre */}
        <circle
          cx="250"
          cy="250"
          r="240"
          fill="#1a1a1a"
          stroke="#333"
          strokeWidth="2"
        />
        <circle
          cx="250"
          cy="250"
          r="230"
          fill="none"
          stroke="#222"
          strokeWidth="20"
        />

        {/* Tread pattern */}
        {Array.from({ length: 36 }).map((_, i) => (
          <g key={i} transform={`rotate(${i * 10} 250 250)`}>
            <rect
              x="248"
              y="15"
              width="4"
              height="30"
              rx="2"
              fill="#333"
            />
            <rect
              x="246"
              y="25"
              width="8"
              height="3"
              rx="1"
              fill="#2a2a2a"
            />
          </g>
        ))}

        {/* Sidewall text area */}
        <circle
          cx="250"
          cy="250"
          r="195"
          fill="none"
          stroke="#252525"
          strokeWidth="1"
        />

        {/* Inner sidewall */}
        <circle cx="250" cy="250" r="180" fill="#111" stroke="#222" strokeWidth="2" />

        {/* Rim */}
        <circle
          cx="250"
          cy="250"
          r="140"
          fill="url(#rimGradient)"
          stroke="#555"
          strokeWidth="2"
        />

        {/* Rim spokes */}
        {Array.from({ length: 5 }).map((_, i) => (
          <g key={i} transform={`rotate(${i * 72} 250 250)`}>
            <path
              d={`M 250 130 Q 270 190 250 250 Q 230 190 250 130`}
              fill="#666"
              stroke="#777"
              strokeWidth="1"
            />
            <path
              d={`M 250 135 Q 265 190 250 245 Q 235 190 250 135`}
              fill="#888"
              opacity="0.3"
            />
          </g>
        ))}

        {/* Center hub */}
        <circle cx="250" cy="250" r="50" fill="#444" stroke="#555" strokeWidth="2" />
        <circle cx="250" cy="250" r="35" fill="#555" stroke="#666" strokeWidth="1" />

        {/* Center bolt pattern */}
        {Array.from({ length: 5 }).map((_, i) => (
          <circle
            key={i}
            cx={250 + 22 * Math.cos((i * 72 * Math.PI) / 180)}
            cy={250 + 22 * Math.sin((i * 72 * Math.PI) / 180)}
            r="6"
            fill="#333"
            stroke="#555"
            strokeWidth="1"
          />
        ))}
        <circle cx="250" cy="250" r="8" fill="#666" />

        <defs>
          <radialGradient id="rimGradient" cx="40%" cy="40%">
            <stop offset="0%" stopColor="#888" />
            <stop offset="100%" stopColor="#444" />
          </radialGradient>
        </defs>
      </svg>

      {/* Red accent ring */}
      <div className="absolute inset-[15%] rounded-full border-2 border-primary/30 animate-pulse" />
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden tread-pattern"
    >
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-background to-transparent" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 lg:pt-40 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 w-fit"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-primary text-sm font-medium">
                Now Open - Visit Us Today!
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              Premium{" "}
              <span className="gradient-text">Tyres</span>
              <br />
              For Every
              <br />
              <span className="text-primary">Journey</span>
            </h1>

            <p className="text-lg text-muted max-w-xl">
              Your trusted destination for quality tyres at unbeatable prices.
              We stock all major brands and provide expert consultation to help
              you find the perfect tyres for your vehicle and driving needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:shadow-xl hover:shadow-primary/25 flex items-center justify-center gap-2 group"
              >
                Find Your Tyres
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </motion.a>
              <motion.a
                href="tel:+2349131692993"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-border hover:border-primary/50 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all flex items-center justify-center gap-2"
              >
                Call Us Now
              </motion.a>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Shield size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Warranty</p>
                  <p className="text-xs text-muted">Full guarantee</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Truck size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Free Advice</p>
                  <p className="text-xs text-muted">Expert guidance</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Award size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Top Brands</p>
                  <p className="text-xs text-muted">Premium quality</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Tyre graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <TyreGraphic />
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 50L48 45C96 40 192 30 288 35C384 40 480 60 576 65C672 70 768 60 864 50C960 40 1056 30 1152 35C1248 40 1344 60 1392 70L1440 80V100H0V50Z"
            fill="#141414"
          />
        </svg>
      </div>
    </section>
  );
}
