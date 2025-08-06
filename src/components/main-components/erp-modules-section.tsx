"use client";

import CardFlip from "@/components/kokonutui/card-flip";
import { BorderBeam } from "@/components/magicui/border-beam";
import { motion } from "motion/react";

const erpModules = [
  {
    title: "Reporting",
    subtitle: "Dashboard & Analytics",
    description: "Visual summary panels displaying business metrics such as sales, stock levels, revenue, pending invoices.",
    features: ["Dashboard View", "Reports Listing", "Business Metrics", "Data Export"]
  },
  {
    title: "Commercial Management",
    subtitle: "Sales & Purchase Operations",
    description: "At-a-glance cards showing sales, purchases, profit margins with comprehensive order management.",
    features: ["Sales Department", "Purchase Department", "Invoice Center", "Order Tracking"]
  },
  {
    title: "Sales & Finance",
    subtitle: "Revenue Management",
    description: "Table and Kanban views for deals, opportunities, and order processing with detailed analytics.",
    features: ["Sales Workspace", "Sales Analytics", "Revenue Trends", "Performance Reports"]
  },
  {
    title: "Stock Management",
    subtitle: "Inventory Control",
    description: "Real-time stock levels with low-stock alerts and multi-location warehouse management.",
    features: ["Inventory Panel", "Warehouses", "Stock Tracking", "Sourcing"]
  },
  {
    title: "Marketing",
    subtitle: "Campaign Management",
    description: "Design, schedule, and track email marketing campaigns with social media integration.",
    features: ["Email Campaigns", "Social Media", "Analytics", "Performance Metrics"]
  },
  {
    title: "Human Resource",
    subtitle: "Employee Management",
    description: "Complete HR solution with employee profiles, attendance tracking, and payroll management.",
    features: ["Employee Directory", "Attendance", "Payroll", "Performance Reviews"]
  },
  {
    title: "Customer Support",
    subtitle: "Help Desk Solutions",
    description: "View and respond to customer queries from chat, email, and calls with ticket management.",
    features: ["Support Channels", "Technical Support", "Account Support", "Ticket System"]
  },
  {
    title: "Largify Insights",
    subtitle: "Business Intelligence",
    description: "Real-time business KPIs with interactive charts and AI-driven insights for forecasting.",
    features: ["Visual Analytics", "Predictive Analytics", "KPI Dashboard", "Data Reports"]
  }
];

export default function ERPModulesSection() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-3 sm:px-4 md:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900 overflow-hidden">
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
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Enhanced Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <div className="relative inline-block">
            {/* Background glow for title */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-orange-400/5 to-orange-500/10 blur-3xl rounded-full scale-150" />
            
            <h2 className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 md:mb-8 px-2 leading-tight tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-orange-600 to-gray-900 dark:from-white dark:via-orange-400 dark:to-white">
                Largify ERP Modules
              </span>
            </h2>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 px-4 sm:px-6 leading-relaxed font-light mb-6">
              Comprehensive business management solutions designed for modern enterprises.
              <span className="block mt-2 font-medium text-orange-600 dark:text-orange-400">
                Explore our feature-rich modules that streamline your operations.
              </span>
            </p>
            
            {/* Decorative Line */}
            <div className="flex justify-center mt-8">
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent rounded-full" />
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-7 justify-items-center px-2 sm:px-0">
          {erpModules.map((module, index) => (
            <div key={module.title} className="w-full max-w-[260px] xs:max-w-[280px] sm:max-w-[300px] md:max-w-[280px] lg:max-w-[280px] xl:max-w-[280px] relative">
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden">
                <CardFlip
                  title={module.title}
                  subtitle={module.subtitle}
                  description={module.description}
                  features={module.features}
                />
                <BorderBeam
                  size={50}
                  duration={12 + index * 0.8}
                  delay={index * 0.5}
                  colorFrom="#ff8a50"
                  colorTo="#ffb380"
                  borderWidth={1.5}
                  className="opacity-50 sm:opacity-60"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center mt-16 sm:mt-20 md:mt-24 lg:mt-28 px-4">
          <div className="relative max-w-2xl mx-auto">
            {/* Background glow for CTA section */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-orange-400/10 to-orange-500/5 blur-3xl rounded-full scale-150" />
            
            <div className="relative flex flex-col xs:flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 justify-center items-center">
              {/* Primary Button - Start Free Trial */}
              <button className="group relative w-full xs:w-full sm:w-auto px-8 sm:px-10 md:px-12 py-4 sm:py-4 md:py-5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-2xl transition-all duration-500 shadow-[0_8px_30px_rgb(255,138,80,0.3)] hover:shadow-[0_15px_40px_rgb(255,138,80,0.4)] text-base sm:text-lg md:text-xl min-w-[180px] sm:min-w-[200px] overflow-hidden transform hover:scale-105 active:scale-95">
                {/* Button background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-orange-600/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Button shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                
                <span className="relative flex items-center justify-center gap-2">
                  Start Free Trial
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>

              {/* Secondary Button - Schedule Demo */}
              <button className="group relative w-full xs:w-full sm:w-auto px-8 sm:px-10 md:px-12 py-4 sm:py-4 md:py-5 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2 border-orange-500/60 text-orange-600 dark:text-orange-400 hover:bg-orange-500 hover:text-white hover:border-orange-500 font-bold rounded-2xl transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.1)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)] hover:shadow-[0_15px_40px_rgb(255,138,80,0.2)] text-base sm:text-lg md:text-xl min-w-[180px] sm:min-w-[200px] overflow-hidden transform hover:scale-105 active:scale-95">
                {/* Button background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-orange-600/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Button shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                
                <span className="relative flex items-center justify-center gap-2">
                  Schedule Demo
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </span>
              </button>
            </div>

            {/* Trust indicators below buttons */}
            <div className="mt-8 sm:mt-10 flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-12 opacity-60">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">No Credit Card Required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">14-Day Free Trial</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Setup in Minutes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}