"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { motion } from "motion/react";

const testimonials = [
  {
    quote: "Largify ERP has completely transformed our business operations. The seamless integration across all modules has improved our efficiency by 300%. The user interface is intuitive and our team adapted quickly.",
    name: "Sarah Johnson",
    designation: "CEO, TechCorp Solutions",
    src: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=400&h=400&fit=crop&crop=face"
  },
  {
    quote: "The financial management module is outstanding. Real-time reporting and automated workflows have saved us countless hours. Our accounting processes are now streamlined and error-free.",
    name: "Michael Chen",
    designation: "CFO, Global Manufacturing Inc",
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=400&fit=crop&crop=face"
  },
  {
    quote: "Implementation was smooth and the support team was exceptional. The inventory management system has given us complete visibility into our supply chain. Highly recommended!",
    name: "Emily Rodriguez",
    designation: "Operations Director, RetailMax",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&h=400&fit=crop&crop=face"
  },
  {
    quote: "The HR module has revolutionized our people management. From recruitment to performance tracking, everything is centralized and automated. Our HR team loves the new workflow.",
    name: "David Thompson",
    designation: "HR Manager, InnovateCorp",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&fit=crop&crop=face"
  },
  {
    quote: "Customer relationship management has never been easier. The CRM module provides deep insights into customer behavior and has helped us increase sales by 45% in just 6 months.",
    name: "Lisa Wang",
    designation: "Sales Director, GrowthTech",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&h=400&fit=crop&crop=face"
  }
];

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function TestimonialsSection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900 py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.02] via-transparent to-blue-500/[0.02] dark:from-orange-500/[0.05] dark:via-transparent dark:to-blue-500/[0.05]" />

      {/* Enhanced Floating Shapes - Multiple Orange Blur Balls */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Orange Blur Ball - Top Left */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 8, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-orange-200/30 to-orange-400/20 dark:from-orange-400/20 dark:to-orange-600/15 rounded-full blur-3xl"
        />

        {/* Medium Orange Blur Ball - Middle Left */}
        <motion.div
          animate={{
            y: [0, 25, 0],
            x: [0, 15, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute top-1/3 left-20 w-32 h-32 bg-gradient-to-br from-orange-300/25 to-orange-500/15 dark:from-orange-500/15 dark:to-orange-700/10 rounded-full blur-2xl"
        />

        {/* Small Orange Blur Ball - Bottom Left */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6,
          }}
          className="absolute bottom-40 left-16 w-24 h-24 bg-gradient-to-br from-orange-200/20 to-orange-400/15 dark:from-orange-400/15 dark:to-orange-600/10 rounded-full blur-xl"
        />

        {/* Blue Accent Ball - Top Right */}
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -6, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-32 right-20 w-28 h-28 bg-gradient-to-br from-blue-200/20 to-blue-400/15 dark:from-blue-400/15 dark:to-blue-600/10 rounded-2xl blur-2xl"
        />

        {/* Emerald Accent Ball - Middle Right */}
        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, -10, 0],
            rotate: [0, 4, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          className="absolute top-1/2 right-12 w-20 h-20 bg-gradient-to-br from-emerald-200/20 to-emerald-400/15 dark:from-emerald-400/15 dark:to-emerald-600/10 rounded-full blur-xl"
        />

        {/* Purple Accent Ball - Bottom Right */}
        <motion.div
          animate={{
            y: [0, 18, 0],
            rotate: [0, -8, 0],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 7,
          }}
          className="absolute bottom-32 right-24 w-26 h-26 bg-gradient-to-br from-purple-200/15 to-purple-400/10 dark:from-purple-400/10 dark:to-purple-600/8 rounded-3xl blur-xl"
        />

        {/* Additional Orange Blur Ball - Center */}
        <motion.div
          animate={{
            y: [0, -25, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
          className="absolute top-2/3 left-1/2 transform -translate-x-1/2 w-36 h-36 bg-gradient-to-br from-orange-100/20 to-orange-300/15 dark:from-orange-300/15 dark:to-orange-500/10 rounded-full blur-3xl"
        />

        {/* Additional floating shapes for more depth */}
        <motion.div
          animate={{
            y: [0, -12, 0],
            rotate: [0, 6, 0],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-16 left-1/4 w-18 h-18 bg-gradient-to-br from-yellow-200/15 to-yellow-400/10 dark:from-yellow-400/10 dark:to-yellow-600/8 rounded-full blur-lg"
        />

        <motion.div
          animate={{
            y: [0, 22, 0],
            x: [0, -8, 0],
            rotate: [0, -3, 0],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 8,
          }}
          className="absolute bottom-16 right-1/3 w-22 h-22 bg-gradient-to-br from-pink-200/15 to-pink-400/10 dark:from-pink-400/10 dark:to-pink-600/8 rounded-2xl blur-lg"
        />

        {/* Testimonial-specific floating elements */}
        <motion.div
          animate={{
            y: [0, -18, 0],
            rotate: [0, 12, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 9,
          }}
          className="absolute top-1/4 right-1/4 w-16 h-16 bg-gradient-to-br from-indigo-200/15 to-indigo-400/10 dark:from-indigo-400/10 dark:to-indigo-600/8 rounded-full blur-lg"
        />

        <motion.div
          animate={{
            y: [0, 14, 0],
            x: [0, 12, 0],
            rotate: [0, -7, 0],
          }}
          transition={{
            duration: 19,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 11,
          }}
          className="absolute bottom-1/4 left-1/3 w-14 h-14 bg-gradient-to-br from-teal-200/15 to-teal-400/10 dark:from-teal-400/10 dark:to-teal-600/8 rounded-2xl blur-lg"
        />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 md:mb-20"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.25, 0.4, 0.25, 1],
          }}
        >
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.25, 0.4, 0.25, 1],
            }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-orange-600 to-gray-900 dark:from-white dark:via-orange-400 dark:to-white">
                What Our Clients Say
              </span>
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.25, 0.4, 0.25, 1],
            }}
          >
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto px-4 leading-relaxed font-light">
              Discover how businesses worldwide are transforming their operations with
              <span className="font-semibold text-orange-600 dark:text-orange-400"> Largify ERP</span>
            </p>
          </motion.div>

          {/* Decorative Line */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0.25, 0.4, 0.25, 1],
            }}
            className="mt-8 flex justify-center"
          >
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent rounded-full" />
          </motion.div>
        </motion.div>

        {/* Testimonials Component */}
        <motion.div
          className="w-full"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.8,
            delay: 0.6,
            ease: [0.25, 0.4, 0.25, 1],
          }}
        >
          <div className="relative">
            {/* Subtle glow effect behind testimonials */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-blue-500/5 dark:from-orange-500/10 dark:via-transparent dark:to-blue-500/10 rounded-3xl blur-3xl" />

            <div className="relative bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl dark:shadow-2xl p-4 sm:p-6 md:p-8">
              <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.7,
            ease: [0.25, 0.4, 0.25, 1],
          }}
          className="mt-16 sm:mt-20 text-center"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-16 opacity-60">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">500+ Happy Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">99.9% Uptime</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">24/7 Support</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}