"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import type { GoogleReview } from "@/app/api/reviews/route";

interface ReviewsData {
  reviews: GoogleReview[];
  rating: number;
  total_reviews: number;
  source: "google" | "fallback";
}

// Additional reviews to supplement Google reviews (add your own here)
const manualReviews: GoogleReview[] = [
  {
    author_name: "David Mensah",
    rating: 5,
    text: "We use Fuji Tyres for our entire fleet of 20 vehicles. Their bulk pricing is excellent and the quality of service is consistently top-notch. Our go-to tyre partner.",
    relative_time_description: "2 months ago",
    profile_photo_url: "",
    time: Date.now() / 1000 - 60 * 86400,
  },
  {
    author_name: "Grace Adekunle",
    rating: 5,
    text: "First time using Fuji Tyres and I was blown away by how professional everything was. From the shop to the staff to the quality of work. 5 stars all the way!",
    relative_time_description: "3 months ago",
    profile_photo_url: "",
    time: Date.now() / 1000 - 90 * 86400,
  },
  {
    author_name: "Chioma Okafor",
    rating: 5,
    text: "The team at Fuji Tyres helped me choose the perfect tyres for my SUV. Their expert advice saved me money and I got better tyres than I originally planned. Amazing service!",
    relative_time_description: "a month ago",
    profile_photo_url: "",
    time: Date.now() / 1000 - 30 * 86400,
  },
];

const REVIEWS_PER_PAGE = 3;

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

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function timeAgo(unixSeconds: number): string {
  const now = Date.now() / 1000;
  const diff = Math.floor(now - unixSeconds);

  const minutes = Math.floor(diff / 60);
  const hours = Math.floor(diff / 3600);
  const days = Math.floor(diff / 86400);
  const weeks = Math.floor(diff / (86400 * 7));
  const months = Math.floor(diff / (86400 * 30));
  const years = Math.floor(diff / (86400 * 365));

  if (minutes < 1) return "just now";
  if (hours < 1) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  if (days < 1) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  if (weeks < 1) return `${days} day${days > 1 ? "s" : ""} ago`;
  if (months < 1) return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
  if (years < 1) return `${months} month${months > 1 ? "s" : ""} ago`;
  return `${years} year${years > 1 ? "s" : ""} ago`;
}

function ReviewerAvatar({ review }: { review: GoogleReview }) {
  const [imgError, setImgError] = useState(false);

  if (review.profile_photo_url && !imgError) {
    return (
      <Image
        src={review.profile_photo_url}
        alt={review.author_name}
        width={40}
        height={40}
        className="w-10 h-10 rounded-full object-cover"
        onError={() => setImgError(true)}
      />
    );
  }

  return (
    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
      <span className="text-primary font-bold text-sm">
        {getInitials(review.author_name)}
      </span>
    </div>
  );
}

export default function Testimonials() {
  const [data, setData] = useState<ReviewsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    fetch("/api/reviews")
      .then((res) => res.json())
      .then((json: ReviewsData) => setData(json))
      .catch(() => setData(null))
      .finally(() => setLoading(false));
  }, []);

  // Merge Google reviews (first) with manual reviews, avoiding duplicates
  const googleReviews = data?.reviews ?? [];
  const googleNames = new Set(googleReviews.map((r) => r.author_name));
  const extraReviews = manualReviews.filter(
    (r) => !googleNames.has(r.author_name)
  );
  const reviews = [...googleReviews, ...extraReviews];

  const totalPages = Math.ceil(reviews.length / REVIEWS_PER_PAGE);

  const currentReviews = reviews.slice(
    currentPage * REVIEWS_PER_PAGE,
    (currentPage + 1) * REVIEWS_PER_PAGE
  );

  const goToPage = useCallback(
    (page: number) => {
      if (page >= 0 && page < totalPages) {
        setCurrentPage(page);
      }
    },
    [totalPages]
  );

  const overallRating = data?.rating ?? 4.9;
  const totalReviews = data?.total_reviews ?? 0;

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
            Don&apos;t just take our word for it. Here&apos;s what our satisfied
            customers have to say about their experience with Fuji Tyres.
          </p>

          {/* Google rating badge */}
          <div className="inline-flex items-center gap-3 mt-6 bg-surface-light border border-border rounded-full px-6 py-3">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={
                    i < Math.round(overallRating)
                      ? "fill-accent text-accent"
                      : "text-border"
                  }
                />
              ))}
            </div>
            <span className="text-white font-semibold">
              {overallRating}/5
            </span>
            <span className="text-muted">
              {totalReviews > 0
                ? `(${totalReviews} reviews) on Google`
                : "on Google Reviews"}
            </span>
          </div>
        </motion.div>

        {/* Loading state */}
        {loading && (
          <div className="flex justify-center py-20">
            <Loader2 size={32} className="text-primary animate-spin" />
          </div>
        )}

        {/* Review cards with pagination */}
        {!loading && reviews.length > 0 && (
          <>
            <div className="relative min-h-[320px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPage}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3 }}
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {currentReviews.map((review, index) => (
                    <motion.div
                      key={`${review.author_name}-${review.time}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -4 }}
                      className="bg-surface-light rounded-2xl p-8 border border-border hover:border-primary/20 transition-all duration-300 relative"
                    >
                      <Quote
                        size={40}
                        className="text-primary/10 absolute top-6 right-6"
                      />

                      <StarRating rating={review.rating} />

                      <p className="text-gray-300 mt-4 mb-6 leading-relaxed text-sm line-clamp-5">
                        &ldquo;{review.text}&rdquo;
                      </p>

                      <div className="flex items-center gap-3 pt-4 border-t border-border">
                        <ReviewerAvatar review={review} />
                        <div>
                          <p className="font-semibold text-white text-sm">
                            {review.author_name}
                          </p>
                          <p className="text-muted text-xs">
                            {timeAgo(review.time)}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Pagination controls */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-4 mt-10">
                <button
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 0}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  aria-label="Previous page"
                >
                  <ChevronLeft size={18} />
                </button>

                <div className="flex items-center gap-2">
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goToPage(i)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        i === currentPage
                          ? "bg-primary w-8"
                          : "bg-border hover:bg-muted"
                      }`}
                      aria-label={`Page ${i + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages - 1}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  aria-label="Next page"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
