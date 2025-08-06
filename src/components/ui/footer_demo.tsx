"use client";

import { Icons } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function ProfessionalFooter() {
  return (
    <footer className="relative w-full bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
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

        {/* Footer-specific floating elements */}
        <motion.div
          animate={{
            y: [0, -16, 0],
            rotate: [0, 9, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 10,
          }}
          className="absolute top-1/4 left-1/5 w-20 h-20 bg-gradient-to-br from-cyan-200/15 to-cyan-400/10 dark:from-cyan-400/10 dark:to-cyan-600/8 rounded-full blur-lg"
        />

        <motion.div
          animate={{
            y: [0, 19, 0],
            x: [0, 14, 0],
            rotate: [0, -11, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 12,
          }}
          className="absolute bottom-1/3 right-1/5 w-16 h-16 bg-gradient-to-br from-rose-200/15 to-rose-400/10 dark:from-rose-400/10 dark:to-rose-600/8 rounded-2xl blur-lg"
        />

        {/* Subtle footer accent shapes */}
        <motion.div
          animate={{
            y: [0, -8, 0],
            rotate: [0, 4, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 15,
          }}
          className="absolute top-3/4 left-1/6 w-12 h-12 bg-gradient-to-br from-amber-200/15 to-amber-400/10 dark:from-amber-400/10 dark:to-amber-600/8 rounded-full blur-md"
        />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <motion.div
          className="relative bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl dark:shadow-2xl p-8 md:p-12 mb-12"
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
          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-blue-500/5 dark:from-orange-500/10 dark:via-transparent dark:to-blue-500/10 rounded-3xl blur-3xl" />

          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
            {/* Company Info */}
            <motion.div
              className="md:col-span-1"
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
              <div className="mb-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icons.logo className="h-10 w-10 mb-4 text-orange-600 dark:text-orange-400" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-orange-600 to-gray-900 dark:from-white dark:via-orange-400 dark:to-white">
                  Largify ERP
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed font-light">
                  Transforming businesses with innovative ERP solutions. Streamline operations, boost efficiency, and drive growth.
                </p>
              </div>
            </motion.div>

            {/* Quick Links */}
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
              <h4 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">Solutions</h4>
              <nav className="flex flex-col space-y-3">
                {['Financial Management', 'Inventory Control', 'HR & Payroll', 'CRM & Sales', 'Analytics & Reports'].map((item) => (
                  <motion.a
                    key={item}
                    href="#"
                    className="group flex items-center text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-all duration-200 text-sm"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {item}
                  </motion.a>
                ))}
              </nav>
            </motion.div>

            {/* Contact Info */}
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
            >
              <h4 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">Get in Touch</h4>
              <div className="space-y-4">
                <motion.div
                  className="flex items-center space-x-3 group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/30 group-hover:bg-orange-200 dark:group-hover:bg-orange-800/50 transition-colors duration-200">
                    <Mail className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                  </div>
                  <span className="text-gray-600 dark:text-gray-300 text-sm">contact@largify.com</span>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-3 group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors duration-200">
                    <Phone className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-gray-600 dark:text-gray-300 text-sm">+1 (555) 123-4567</span>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-3 group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800/50 transition-colors duration-200">
                    <MapPin className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <span className="text-gray-600 dark:text-gray-300 text-sm">San Francisco, CA</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: [0.25, 0.4, 0.25, 1],
              }}
            >
              <h4 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">Stay Updated</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed font-light">
                Get the latest insights and updates on ERP trends and innovations.
              </p>
              <form className="space-y-4">
                <div className="relative">
                  <Label htmlFor="email" className="sr-only">
                    Email
                  </Label>
                  <Input
                    id="email"
                    placeholder="Enter your email"
                    type="email"
                    className="bg-white/80 dark:bg-gray-800/80 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-orange-500 dark:focus:border-orange-400 backdrop-blur-sm"
                  />
                </div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button type="submit" className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white shadow-lg hover:shadow-xl transition-all duration-200">
                    Subscribe
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-gray-200/50 dark:border-gray-700/50 pt-8"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.7,
            ease: [0.25, 0.4, 0.25, 1],
          }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Social Media */}
            <div className="flex space-x-4">
              {[
                { icon: Facebook, color: 'hover:bg-blue-600' },
                { icon: Twitter, color: 'hover:bg-sky-500' },
                { icon: Instagram, color: 'hover:bg-pink-600' },
                { icon: Linkedin, color: 'hover:bg-blue-700' }
              ].map(({ icon: Icon, color }) => (
                <motion.div
                  key={Icon.name || Icon.displayName}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`text-gray-600 dark:text-gray-400 hover:text-white ${color} transition-all duration-200 rounded-xl`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{Icon.name}</span>
                  </Button>
                </motion.div>
              ))}
            </div>

            {/* Copyright & Legal */}
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                © 2024 Largify Solutions. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-xs text-gray-500 dark:text-gray-500">
                <motion.a
                  href="#"
                  className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-200"
                  whileHover={{ y: -1 }}
                >
                  Privacy Policy
                </motion.a>
                <motion.a
                  href="#"
                  className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-200"
                  whileHover={{ y: -1 }}
                >
                  Terms of Service
                </motion.a>
                <motion.a
                  href="#"
                  className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-200"
                  whileHover={{ y: -1 }}
                >
                  Cookie Policy
                </motion.a>
              </div>
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
            delay: 0.8,
            ease: [0.25, 0.4, 0.25, 1],
          }}
          className="mt-12 text-center"
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
    </footer>
  );
}
