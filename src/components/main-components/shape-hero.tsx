"use client";

/**
 * @author: @dorian_baffier
 * @description: Shape Hero
 * @version: 1.0.0
 * @date: 2025-06-26
 * @license: MIT
 * @website: https://kokonutui.com
 * @github: https://github.com/kokonut-labs/kokonutui
 */

import { motion } from "motion/react";
import { Pacifico } from "next/font/google";
import { cn } from "@/lib/utils";


const pacifico = Pacifico({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-pacifico",
});

function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-white/[0.08]",
    borderRadius = 16,
}: {
    className?: string;
    delay?: number;
    width?: number;
    height?: number;
    rotate?: number;
    gradient?: string;
    borderRadius?: number;
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -150,
                rotate: rotate - 15,
            }}
            animate={{
                opacity: 1,
                y: 0,
                rotate: rotate,
            }}
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96],
                opacity: { duration: 1.2 },
            }}
            className={cn("absolute", className)}
        >
            <motion.div
                animate={{
                    y: [0, 15, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
                style={{
                    width,
                    height,
                }}
                className="relative"
            >
                <div
                    style={{ borderRadius }}
                    className={cn(
                        "absolute inset-0",
                        "bg-linear-to-r to-transparent",
                        gradient,
                        "backdrop-blur-[1px]",
                        "ring-1 ring-white/[0.03] dark:ring-white/[0.02]",
                        "shadow-[0_2px_16px_-2px_rgba(255,255,255,0.04)]",
                        "after:absolute after:inset-0",
                        "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.12),transparent_70%)]",
                        "after:rounded-[inherit]"
                    )}
                />
            </motion.div>
        </motion.div>
    );
}

interface ShapeHeroProps {
    title1?: string;
    title2?: string;
}

export default function ShapeHero({ title1 = "Welcome to", title2 = "Largify Suit" }: ShapeHeroProps) {
    const fadeUpVariants: import("framer-motion").Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5 + i * 0.2,
                ease: [0.25, 0.4, 0.25, 1],
            },
        }),
    };

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900">
            {/* Enhanced Background Elements */}
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

                {/* Indigo Accent Ball - Middle Center */}
                <motion.div
                    animate={{
                        y: [0, -18, 0],
                        x: [0, 14, 0],
                        rotate: [0, 9, 0],
                    }}
                    transition={{
                        duration: 14,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2.5,
                    }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-gradient-to-br from-indigo-200/15 to-indigo-400/10 dark:from-indigo-400/18 dark:to-indigo-600/12 rounded-2xl blur-xl"
                />

                {/* Amber Accent Ball - Top Right Corner */}
                <motion.div
                    animate={{
                        y: [0, -14, 0],
                        rotate: [0, 15, 0],
                        scale: [1, 1.08, 1],
                    }}
                    transition={{
                        duration: 16,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 4.5,
                    }}
                    className="absolute top-10 right-10 w-26 h-26 bg-gradient-to-br from-amber-200/18 to-amber-400/12 dark:from-amber-400/20 dark:to-amber-600/14 rounded-full blur-xl"
                />
            </div>

            <div className="absolute inset-0 overflow-hidden">
                {/* Tall rectangle - top left - MEDIUM SIZE */}
                <ElegantShape
                    delay={0.3}
                    width={240}
                    height={400}
                    rotate={-8}
                    borderRadius={22}
                    gradient="from-indigo-500/[0.18] dark:from-indigo-500/[0.28]"
                    className="left-[-12%] top-[-8%]"
                />

                {/* Wide rectangle - bottom right - MEDIUM SIZE */}
                <ElegantShape
                    delay={0.5}
                    width={480}
                    height={160}
                    rotate={15}
                    borderRadius={18}
                    gradient="from-rose-500/[0.18] dark:from-rose-500/[0.28]"
                    className="right-[-18%] bottom-[-4%]"
                />

                {/* Square - middle left - MEDIUM SIZE */}
                <ElegantShape
                    delay={0.4}
                    width={240}
                    height={240}
                    rotate={24}
                    borderRadius={28}
                    gradient="from-violet-500/[0.18] dark:from-violet-500/[0.28]"
                    className="left-[-4%] top-[40%]"
                />

                {/* Small rectangle - top right - MEDIUM SIZE */}
                <ElegantShape
                    delay={0.6}
                    width={200}
                    height={80}
                    rotate={-20}
                    borderRadius={12}
                    gradient="from-amber-500/[0.18] dark:from-amber-500/[0.28]"
                    className="right-[9%] top-[6%]"
                />

                {/* Medium rectangle - center right - MEDIUM SIZE */}
                <ElegantShape
                    delay={0.7}
                    width={320}
                    height={120}
                    rotate={35}
                    borderRadius={14}
                    gradient="from-emerald-500/[0.18] dark:from-emerald-500/[0.28]"
                    className="right-[-9%] top-[45%]"
                />

                {/* Small square - bottom left - MEDIUM SIZE */}
                <ElegantShape
                    delay={0.2}
                    width={160}
                    height={160}
                    rotate={-25}
                    borderRadius={24}
                    gradient="from-blue-500/[0.18] dark:from-blue-500/[0.28]"
                    className="left-[18%] bottom-[9%]"
                />

                {/* Tiny rectangle - top center - MEDIUM SIZE */}
                <ElegantShape
                    delay={0.8}
                    width={120}
                    height={65}
                    rotate={45}
                    borderRadius={10}
                    gradient="from-purple-500/[0.18] dark:from-purple-500/[0.28]"
                    className="left-[38%] top-[14%]"
                />

                {/* Wide rectangle - middle - MEDIUM SIZE */}
                <ElegantShape
                    delay={0.9}
                    width={360}
                    height={90}
                    rotate={-12}
                    borderRadius={16}
                    gradient="from-teal-500/[0.18] dark:from-teal-500/[0.28]"
                    className="left-[22%] top-[63%]"
                />
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Simplified Title Section */}
                    <motion.div
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        custom={1}
                        className="mb-6 sm:mb-8"
                    >
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight">
                            <span className="bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
                                {title1}
                            </span>
                            <br />
                            <span
                                className={cn(
                                    "bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 dark:from-orange-400 dark:via-orange-300 dark:to-orange-400",
                                    pacifico.className
                                )}
                            >
                                {title2}
                            </span>
                        </h1>
                    </motion.div>

                    {/* ERP System Line */}
                    <motion.div
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        custom={2}
                        className="mb-8 sm:mb-12"
                    >
                        <p className="text-lg sm:text-xl md:text-2xl text-orange-600 dark:text-orange-400 font-semibold">
                            Enterprise Resource Planning System
                        </p>
                    </motion.div>

                    {/* Decorative Line */}
                    <motion.div
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        custom={3}
                        className="flex justify-center"
                    >
                        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent rounded-full" />
                    </motion.div>
                </div>
            </div>

            <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-white/80 dark:from-[#030303] dark:via-transparent dark:to-[#030303]/80 pointer-events-none" />
        </div>
    );
}
