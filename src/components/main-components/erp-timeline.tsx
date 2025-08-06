"use client";
import {

  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface ERPModule {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  integrations: string[];
}

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

const erpModules: ERPModule[] = [
  {
    title: "Reporting",
    subtitle: "Dashboard & Analytics",
    description: "Our comprehensive reporting module transforms raw business data into actionable insights through intuitive visual dashboards. Whether you're tracking sales performance, monitoring stock levels, or analyzing revenue trends, this module provides real-time visibility into your business operations. The advanced filtering and customization options ensure that every stakeholder gets the exact information they need, when they need it.",
    features: ["Interactive Dashboard View", "Automated Reports Generation", "Real-time Business Metrics", "Multi-format Data Export", "Custom Report Builder", "Scheduled Report Delivery"],
    benefits: ["Make data-driven decisions with confidence", "Gain complete operational visibility", "Save time with automated reporting", "Enhance business intelligence capabilities"],
    useCases: ["Executive dashboards", "Department performance tracking", "Financial reporting", "Compliance reporting"],
    integrations: ["Excel/CSV Export", "Email Integration", "Third-party BI Tools", "API Endpoints"]
  },
  {
    title: "Commercial Management",
    subtitle: "Sales & Purchase Operations",
    description: "Streamline your entire commercial operations with our integrated sales and purchase management system. From initial customer inquiries to final delivery, this module manages every aspect of your commercial relationships. Track sales performance, manage purchase orders, analyze profit margins, and maintain complete visibility over your order lifecycle. The system seamlessly connects your sales and procurement teams for optimal efficiency.",
    features: ["Sales Department Management", "Purchase Order Processing", "Integrated Invoice Center", "Real-time Order Tracking", "Vendor Management", "Contract Management"],
    benefits: ["Streamline procurement processes", "Build stronger vendor relationships", "Improve cash flow management", "Enhance order accuracy and delivery"],
    useCases: ["B2B sales operations", "Supplier management", "Purchase requisitions", "Contract negotiations"],
    integrations: ["Payment Gateways", "Shipping Providers", "Supplier Portals", "CRM Systems"]
  },
  {
    title: "Sales & Finance",
    subtitle: "Revenue Management",
    description: "Take control of your revenue streams with our advanced sales and finance management system. This module combines powerful sales pipeline management with sophisticated financial analytics to give you complete visibility into your revenue performance. Track deals through flexible table and Kanban views, forecast future revenue with AI-powered insights, and monitor team performance with detailed analytics that drive results.",
    features: ["Sales Pipeline Management", "Advanced Sales Analytics", "Revenue Trend Analysis", "Performance Reports", "Financial Forecasting", "Commission Tracking"],
    benefits: ["Increase sales conversion rates", "Achieve better revenue predictability", "Improve sales team performance", "Enhance financial planning accuracy"],
    useCases: ["Sales pipeline management", "Revenue forecasting", "Team performance tracking", "Financial planning"],
    integrations: ["Accounting Software", "Payment Processors", "Banking APIs", "Tax Calculation Services"]
  },
  {
    title: "Stock Management",
    subtitle: "Inventory Control",
    description: "Never run out of stock or overstock again with our intelligent inventory management system. This module provides real-time visibility into stock levels across multiple locations, automatically alerts you when inventory runs low, and calculates optimal reorder points based on historical data and demand patterns. Whether you're managing a single warehouse or multiple distribution centers, our system keeps your inventory optimized and your customers satisfied.",
    features: ["Real-time Inventory Panel", "Multi-warehouse Management", "Advanced Stock Tracking", "Intelligent Sourcing", "Barcode Scanning", "Automated Reordering"],
    benefits: ["Reduce costly stockouts", "Optimize inventory investment", "Lower carrying costs", "Improve order fulfillment speed"],
    useCases: ["Warehouse operations", "Retail inventory", "Manufacturing stock", "Distribution centers"],
    integrations: ["Barcode Scanners", "RFID Systems", "Shipping Software", "Supplier Catalogs"]
  },
  {
    title: "Marketing",
    subtitle: "Campaign Management",
    description: "Amplify your marketing efforts with our comprehensive campaign management platform. Design beautiful email campaigns, schedule social media posts, and track performance across all channels from a single dashboard. Our advanced analytics help you understand what resonates with your audience, while A/B testing capabilities ensure you're always optimizing for better results. Transform your marketing from guesswork into a data-driven growth engine.",
    features: ["Email Campaign Builder", "Social Media Management", "Marketing Analytics", "Performance Metrics", "Lead Scoring", "A/B Testing"],
    benefits: ["Achieve higher engagement rates", "Generate better quality leads", "Improve marketing ROI tracking", "Enhance brand presence across channels"],
    useCases: ["Email marketing", "Social media campaigns", "Lead generation", "Brand awareness"],
    integrations: ["Email Providers", "Social Platforms", "Analytics Tools", "CRM Integration"]
  },
  {
    title: "Human Resource",
    subtitle: "Employee Management",
    description: "Empower your HR team and employees with our complete human resource management solution. From the moment a new employee joins your organization to their career development and beyond, this module handles every aspect of HR operations. Automate attendance tracking, streamline payroll processing, manage performance reviews, and provide employees with self-service portals that reduce administrative burden while improving satisfaction.",
    features: ["Employee Directory", "Attendance Tracking", "Payroll Processing", "Performance Reviews", "Leave Management", "Employee Self-Service"],
    benefits: ["Streamline HR processes", "Improve employee satisfaction", "Reduce administrative burden", "Better compliance management"],
    useCases: ["Employee onboarding", "Performance management", "Payroll processing", "Compliance tracking"],
    integrations: ["Biometric Systems", "Banking APIs", "Tax Services", "Background Check Services"]
  },
  {
    title: "Customer Support",
    subtitle: "Help Desk Solutions",
    description: "Deliver exceptional customer service with our advanced support platform that brings all customer interactions into one unified system. Whether customers reach out via chat, email, or phone, your support team has complete context and history at their fingertips. Advanced ticket management, SLA monitoring, and knowledge base integration ensure that every customer query is resolved quickly and effectively, turning support interactions into opportunities to build stronger relationships.",
    features: ["Multi-channel Support", "Technical Support Tools", "Account Support Management", "Advanced Ticket System", "SLA Monitoring", "Knowledge Base"],
    benefits: ["Faster resolution times", "Improved customer satisfaction", "Better support team efficiency", "Enhanced service quality"],
    useCases: ["Customer service", "Technical support", "Account management", "Issue resolution"],
    integrations: ["Chat Platforms", "Email Systems", "Phone Systems", "CRM Integration"]
  },
  {
    title: "Largify Insights",
    subtitle: "Business Intelligence",
    description: "Transform your business data into strategic advantage with our powerful business intelligence platform. This module goes beyond traditional reporting to provide AI-driven insights that help you understand not just what happened, but what's likely to happen next. Interactive dashboards, predictive analytics, and custom visualizations give you the intelligence you need to make strategic decisions that drive your business forward in an increasingly competitive marketplace.",
    features: ["Visual Analytics Dashboard", "Predictive Analytics Engine", "Comprehensive KPI Dashboard", "Advanced Data Reports", "AI-powered Insights", "Custom Visualizations"],
    benefits: ["Make better strategic decisions", "Improve forecasting accuracy", "Enhance operational efficiency", "Gain competitive advantage"],
    useCases: ["Strategic planning", "Performance monitoring", "Trend analysis", "Predictive modeling"],
    integrations: ["Data Warehouses", "External APIs", "Machine Learning Services", "Visualization Tools"]
  }
];

const ModuleCard = ({ module }: { module: ERPModule }) => (
  <motion.div
    className="relative bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-7 lg:p-9 shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.4)] border border-neutral-200/60 dark:border-neutral-700/60 hover:shadow-[0_20px_40px_rgb(0,0,0,0.15)] dark:hover:shadow-[0_20px_40px_rgb(0,0,0,0.5)] transition-all duration-500 hover:scale-[1.01] w-full overflow-hidden group"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    {/* Enhanced Card Background with Subtle Pattern */}
    <div className="absolute inset-0 bg-gradient-to-br from-orange-50/40 via-white/20 to-blue-50/30 dark:from-orange-950/30 dark:via-neutral-900/40 dark:to-blue-950/20 rounded-2xl sm:rounded-3xl" />

    {/* Subtle texture overlay */}
    <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.15)_1px,transparent_0)] bg-[length:20px_20px] rounded-2xl sm:rounded-3xl" />

    {/* Hover glow effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-blue-500/0 dark:from-orange-500/0 dark:via-orange-500/10 dark:to-blue-500/0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    <div className="relative z-10">
      {/* Header Section */}
      <div className="mb-3 sm:mb-6">
        <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2 leading-tight">
          {module.title}
        </h4>
        <p className="text-orange-500 font-semibold text-sm sm:text-base lg:text-lg mb-2 sm:mb-4">
          {module.subtitle}
        </p>
        <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm lg:text-base leading-relaxed">
          {module.description}
        </p>
      </div>

      {/* Features Section */}
      <div className="mb-3 sm:mb-6">
        <h5 className="text-sm sm:text-base lg:text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">
          Key Features
        </h5>
        <div className="grid grid-cols-1 gap-1.5 sm:gap-2">
          {module.features.map((feature, index) => (
            <div key={index} className="flex items-center text-xs sm:text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-neutral-800 rounded-md sm:rounded-lg p-1.5 sm:p-2">
              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-orange-500 rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
              <span className="leading-tight">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mb-3 sm:mb-6">
        <h5 className="text-sm sm:text-base lg:text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">
          Business Benefits
        </h5>
        <div className="space-y-1.5 sm:space-y-2">
          {module.benefits.map((benefit, index) => (
            <div key={index} className="flex items-start text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-orange-500 rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0"></span>
              <span className="leading-tight">{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="mb-3 sm:mb-6">
        <h5 className="text-sm sm:text-base lg:text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">
          Common Use Cases
        </h5>
        <div className="flex flex-wrap gap-1 sm:gap-2">
          {module.useCases.map((useCase, index) => (
            <span key={index} className="bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs leading-tight">
              {useCase}
            </span>
          ))}
        </div>
      </div>

      {/* Integrations Section */}
      <div>
        <h5 className="text-sm sm:text-base lg:text-lg font-bold text-gray-800 dark:text-gray-200 mb-3">
          Integrations
        </h5>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {module.integrations.map((integration, index) => (
            <span
              key={index}
              className="relative bg-gradient-to-r from-orange-100 to-orange-50 dark:from-orange-900/40 dark:to-orange-800/30 text-orange-700 dark:text-orange-300 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium border border-orange-300/50 dark:border-orange-600/30 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105"
            >
              <div className="absolute inset-0 bg-orange-200/20 dark:bg-orange-700/20 rounded-lg blur-sm" />
              <span className="relative">{integration}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

export const ERPTimeline = () => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const timelineData: TimelineEntry[] = erpModules.map((module) => ({
    title: module.title,
    content: <ModuleCard module={module} />
  }));

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      className="relative w-full bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900 py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden"
      ref={containerRef}
    >
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
                Largify ERP Module Journey
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
              Discover our comprehensive ERP modules designed to streamline your business operations with
              <span className="font-semibold text-orange-600 dark:text-orange-400"> seamless integration</span>
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

        {/* Timeline Content - Enhanced with Glass Morphism */}
        <motion.div
          ref={ref}
          className="relative max-w-7xl mx-auto pb-6 sm:pb-16 lg:pb-20"
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
          {/* Glass morphism background for timeline */}
          <div className="absolute inset-0 bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm rounded-3xl border border-gray-200/30 dark:border-gray-700/30 shadow-2xl" />

          {/* Subtle glow effect behind timeline */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-blue-500/5 dark:from-orange-500/10 dark:via-transparent dark:to-blue-500/10 rounded-3xl blur-3xl" />

          <div className="relative z-10 p-4 sm:p-6 md:p-8">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className="flex justify-start pt-4 sm:pt-8 md:pt-16 lg:pt-40 gap-1 sm:gap-4 md:gap-10"
              >
                {/* Timeline Dot and Title - Mobile Optimized */}
                <div className={`${isMobile ? 'relative' : 'sticky'} flex flex-col md:flex-row z-40 items-center ${isMobile ? 'top-0' : 'top-16 sm:top-24 lg:top-40'} self-start max-w-xs lg:max-w-sm md:w-full`}>
                  {/* Enhanced Timeline Dot with Glow Effect */}
                  <div className="relative h-8 sm:h-10 lg:h-16 absolute left-0.5 sm:left-1 md:left-3 w-8 sm:w-10 lg:w-16 rounded-full bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center border-3 border-orange-500 shadow-xl group">
                    {/* Outer glow ring */}
                    <div className="absolute inset-0 rounded-full bg-orange-500/20 blur-md scale-150 group-hover:scale-175 transition-transform duration-300" />

                    {/* Main dot with gradient */}
                    <div className="relative h-3 sm:h-4 lg:h-7 w-3 sm:w-4 lg:w-7 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 shadow-lg">
                      {/* Inner highlight */}
                      <div className="absolute top-0.5 left-0.5 h-1 sm:h-1.5 lg:h-2.5 w-1 sm:w-1.5 lg:w-2.5 rounded-full bg-orange-200/60" />
                    </div>

                    {/* Pulse animation */}
                    <div className="absolute inset-0 rounded-full border-2 border-orange-400/30 animate-ping" />
                  </div>

                  {/* Enhanced Title with Background */}
                  <div className="hidden md:block md:pl-12 lg:pl-20">
                    <div className="relative bg-gradient-to-r from-orange-50/80 to-transparent dark:from-orange-900/20 dark:to-transparent backdrop-blur-sm rounded-2xl px-4 py-2 border border-orange-200/30 dark:border-orange-700/30">
                      {/* Background glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-transparent rounded-2xl blur-xl" />

                      <h3 className="relative text-base lg:text-xl xl:text-2xl 2xl:text-4xl font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 dark:from-orange-400 dark:via-orange-300 dark:to-orange-400 bg-clip-text text-transparent">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Content Area - Mobile Optimized */}
                <div className="relative pl-8 sm:pl-12 md:pl-4 pr-1 sm:pr-4 w-full">
                  <h3 className="md:hidden block text-base sm:text-lg lg:text-xl mb-2 sm:mb-4 text-left font-bold text-orange-500 dark:text-orange-400">
                    {item.title}
                  </h3>
                  {item.content}
                </div>
              </div>
            ))}

            {/* Timeline Line - Mobile Optimized */}
            <div
              style={{
                height: height + "px",
              }}
              className="absolute left-3 sm:left-4 md:left-8 top-0 overflow-hidden w-[1.5px] sm:w-[2px] lg:w-[3px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] rounded-full"
            >
              <motion.div
                style={{
                  height: heightTransform,
                  opacity: opacityTransform,
                }}
                className="absolute inset-x-0 top-0 w-[1.5px] sm:w-[2px] lg:w-[3px] bg-gradient-to-t from-orange-500 via-orange-400 to-transparent from-[0%] via-[10%] rounded-full"
              />
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators - Matching Footer Style */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.8,
            ease: [0.25, 0.4, 0.25, 1],
          }}
          className="mt-16 sm:mt-20 text-center"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-16 opacity-60">
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">8+ ERP Modules</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Seamless Integration</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Enterprise Ready</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
