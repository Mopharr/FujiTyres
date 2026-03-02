"use client";

import { motion } from "framer-motion";

const brands = [
  { name: "Michelin", color: "#FFD700" },
  { name: "Bridgestone", color: "#E11D48" },
  { name: "Continental", color: "#F97316" },
  { name: "Pirelli", color: "#FACC15" },
  { name: "Goodyear", color: "#3B82F6" },
  { name: "Dunlop", color: "#A855F7" },
  { name: "Hankook", color: "#F43F5E" },
  { name: "Yokohama", color: "#EF4444" },
  { name: "Firestone", color: "#DC2626" },
  { name: "BFGoodrich", color: "#10B981" },
];

function BrandLogo({ name, color }: { name: string; color: string }) {
  return (
    <div className="flex items-center justify-center w-[180px] h-[90px] bg-surface-light rounded-xl border border-border hover:border-primary/30 transition-all duration-300 group shrink-0 mx-3">
      <span
        className="text-lg font-bold tracking-tight opacity-50 group-hover:opacity-100 transition-opacity duration-300"
        style={{ color }}
      >
        {name}
      </span>
    </div>
  );
}

export default function Brands() {
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section id="brands" className="bg-surface py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Trusted Partners
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-5">
            Premium <span className="gradient-text">Brands</span> We Stock
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            We partner with the world&apos;s leading tyre manufacturers to bring you
            the best selection of quality tyres for every budget and driving need.
          </p>
        </motion.div>
      </div>

      {/* Scrolling brand logos - row 1 */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-surface to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-surface to-transparent z-10" />

        <motion.div
          animate={{ x: [0, -1080] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
          className="flex py-4"
        >
          {duplicatedBrands.map((brand, i) => (
            <BrandLogo key={`${brand.name}-${i}`} {...brand} />
          ))}
        </motion.div>
      </div>

      {/* Row 2 - reverse direction */}
      <div className="relative mt-4">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-surface to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-surface to-transparent z-10" />

        <motion.div
          animate={{ x: [-1080, 0] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          className="flex py-4"
        >
          {[...duplicatedBrands].reverse().map((brand, i) => (
            <BrandLogo key={`${brand.name}-rev-${i}`} {...brand} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
