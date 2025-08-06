"use client";
import { Marquee } from "@/components/magicui/marquee";
import { motion } from "motion/react";
import Image from "next/image";

const companyLogos = [
  "https://www.hubspot.com/hs-fs/hubfs/eventbrite-Oct-24-2024-08-17-10-4609-PM.png?width=150&height=108&name=eventbrite-Oct-24-2024-08-17-10-4609-PM.png",
  "https://www.hubspot.com/hs-fs/hubfs/eventbrite-Oct-24-2024-08-17-10-4609-PM.png?width=150&height=108&name=eventbrite-Oct-24-2024-08-17-10-4609-PM.png",
  "https://www.hubspot.com/hs-fs/hubfs/eventbrite-Oct-24-2024-08-17-10-4609-PM.png?width=150&height=108&name=eventbrite-Oct-24-2024-08-17-10-4609-PM.png",
  "https://www.hubspot.com/hs-fs/hubfs/eventbrite-Oct-24-2024-08-17-10-4609-PM.png?width=150&height=108&name=eventbrite-Oct-24-2024-08-17-10-4609-PM.png",
  "https://www.hubspot.com/hs-fs/hubfs/eventbrite-Oct-24-2024-08-17-10-4609-PM.png?width=150&height=108&name=eventbrite-Oct-24-2024-08-17-10-4609-PM.png",
  "https://www.hubspot.com/hs-fs/hubfs/eventbrite-Oct-24-2024-08-17-10-4609-PM.png?width=150&height=108&name=eventbrite-Oct-24-2024-08-17-10-4609-PM.png"
];

export default function CompanyMarquee() {
  return (
    <section className="relative w-full py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.02] via-transparent to-blue-500/[0.02] dark:from-orange-500/[0.05] dark:via-transparent dark:to-blue-500/[0.05]" />

      {/* Enhanced Floating Shapes - Multiple Animated Blur Balls */}
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
          className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-orange-200/30 to-orange-400/20 dark:from-orange-400/25 dark:to-orange-600/20 rounded-full blur-3xl"
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
          className="absolute top-1/3 left-20 w-32 h-32 bg-gradient-to-br from-orange-300/25 to-orange-500/15 dark:from-orange-500/20 dark:to-orange-700/15 rounded-full blur-2xl"
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
          className="absolute bottom-40 left-16 w-24 h-24 bg-gradient-to-br from-orange-200/20 to-orange-400/15 dark:from-orange-400/20 dark:to-orange-600/15 rounded-full blur-xl"
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
          className="absolute top-32 right-20 w-28 h-28 bg-gradient-to-br from-blue-200/20 to-blue-400/15 dark:from-blue-400/20 dark:to-blue-600/15 rounded-2xl blur-2xl"
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
          className="absolute top-1/2 right-12 w-20 h-20 bg-gradient-to-br from-emerald-200/20 to-emerald-400/15 dark:from-emerald-400/20 dark:to-emerald-600/15 rounded-full blur-xl"
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
          className="absolute bottom-32 right-24 w-26 h-26 bg-gradient-to-br from-purple-200/15 to-purple-400/10 dark:from-purple-400/15 dark:to-purple-600/12 rounded-3xl blur-xl"
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
          className="absolute top-2/3 left-1/2 transform -translate-x-1/2 w-36 h-36 bg-gradient-to-br from-orange-100/20 to-orange-300/15 dark:from-orange-300/20 dark:to-orange-500/15 rounded-full blur-3xl"
        />

        {/* Additional Cyan Accent Ball - Top Center */}
        <motion.div
          animate={{
            y: [0, -12, 0],
            x: [0, 8, 0],
            rotate: [0, 6, 0],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-16 left-1/3 w-22 h-22 bg-gradient-to-br from-cyan-200/15 to-cyan-400/10 dark:from-cyan-400/18 dark:to-cyan-600/12 rounded-2xl blur-xl"
        />

        {/* Rose Accent Ball - Bottom Center */}
        <motion.div
          animate={{
            y: [0, 22, 0],
            rotate: [0, -12, 0],
            scale: [1, 0.85, 1],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 8,
          }}
          className="absolute bottom-20 left-1/3 w-30 h-30 bg-gradient-to-br from-rose-200/12 to-rose-400/8 dark:from-rose-400/15 dark:to-rose-600/10 rounded-full blur-2xl"
        />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-fade-in">
          <div className="relative inline-block">
            {/* Background glow for title */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-orange-400/5 to-orange-500/10 blur-3xl rounded-full scale-150" />

            <h2 className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 px-2 leading-tight tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-orange-600 to-gray-900 dark:from-white dark:via-orange-400 dark:to-white">
                Trusted by Industry Leaders
              </span>
            </h2>
          </div>

          <div className="relative max-w-3xl mx-auto">
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 px-4 sm:px-6 leading-relaxed font-light mb-6">
              Join thousands of companies worldwide that trust our innovative solutions.
              <span className="block mt-2 font-medium text-orange-600 dark:text-orange-400">
                Powering businesses across every industry.
              </span>
            </p>

            {/* Decorative Line */}
            <div className="flex justify-center mt-8">
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent rounded-full" />
            </div>
          </div>
        </div>

        {/* Enhanced Marquee Container */}
        <div className="relative bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl dark:shadow-2xl p-6 md:p-8 mb-12 animate-fade-in">
          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-blue-500/5 dark:from-orange-500/10 dark:via-transparent dark:to-blue-500/10 rounded-3xl blur-3xl" />

          <div className="relative">
            {/* Enhanced gradient overlays with theme colors */}
            <div className="absolute left-0 top-0 w-12 sm:w-16 md:w-24 h-full z-10 bg-gradient-to-r from-white/90 via-white/50 to-transparent dark:from-gray-900/90 dark:via-gray-900/50 dark:to-transparent"></div>
            <div className="absolute right-0 top-0 w-12 sm:w-16 md:w-24 h-full z-10 bg-gradient-to-l from-white/90 via-white/50 to-transparent dark:from-gray-900/90 dark:via-gray-900/50 dark:to-transparent"></div>

            <Marquee className="py-6 sm:py-8 md:py-10 [--duration:35s] sm:[--duration:30s]" pauseOnHover={true}>
              {companyLogos.map((logo, index) => (
                <div
                  key={index}
                  className="group flex items-center justify-center mx-2 sm:mx-4 md:mx-6 lg:mx-8 min-w-[120px] sm:min-w-[150px] md:min-w-[180px] lg:min-w-[200px] h-16 sm:h-20 md:h-24 lg:h-28 bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl md:rounded-2xl shadow-md sm:shadow-lg hover:shadow-lg sm:hover:shadow-xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-500 hover:scale-105"
                >
                  <div className="relative overflow-hidden rounded-md sm:rounded-lg md:rounded-xl p-2 sm:p-3 md:p-4">
                    <Image
                      src={logo}
                      alt="Company logo"
                      width={150}
                      height={108}
                      className="h-8 sm:h-10 md:h-12 lg:h-16 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center animate-fade-in">
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-16 opacity-60 mb-6">
            <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-200">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">1000+ Companies</span>
            </div>
            <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-200">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">50+ Countries</span>
            </div>
            <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-200">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Industry Leaders</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 px-4 font-light">
            And many more companies trust our platform every day
          </p>
        </div>
      </div>
    </section>
  );
}