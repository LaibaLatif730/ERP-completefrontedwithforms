/**
 * @description: Enhanced Header with professional styling and theme toggle
 * @version: 2.0.0
 * @date: 2025-07-22
 */

"use client";
import { useState, useEffect } from "react";
import { Menu, Bell, Search, ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { Pacifico } from "next/font/google";
import ThemeToggleButton from "../ui/theme-toggle-button";

// Import the AnimationVariant and AnimationStart types
import { AnimationVariant, AnimationStart } from "@/components/ui/theme-animations";

// Import theme toggle if it exists, otherwise create a placeholder
let ThemeToggle: React.FC<{ showLabel?: boolean; variant?: AnimationVariant; start?: AnimationStart }>;
try {
    ThemeToggle = ThemeToggleButton;
} catch {
    const FallbackThemeToggle = ({ showLabel = false }) => <div>{showLabel && "Theme"}</div>;
    FallbackThemeToggle.displayName = 'FallbackThemeToggle';
    ThemeToggle = FallbackThemeToggle;
}

const pacifico = Pacifico({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-pacifico",
});

type HeaderProps = {
    onToggle: () => void;
};

export default function Header({ onToggle }: HeaderProps) {
    const [scrolled, setScrolled] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const [notificationCount] = useState(3);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.23, 0.86, 0.39, 0.96] }}
            className={cn(
                "relative z-40 flex items-center justify-between mx-2 mt-2 px-3 py-2 rounded-xl transition-all duration-500 ease-out will-change-transform",
                "shadow-[0_8px_30px_rgb(249,115,22,0.15)] dark:shadow-[0_8px_30px_rgb(249,115,22,0.07)]",
                "hover:shadow-[0_15px_50px_rgb(249,115,22,0.25)] dark:hover:shadow-[0_15px_50px_rgb(249,115,22,0.15)]",
                scrolled ? "shadow-[0_12px_40px_rgb(249,115,22,0.25)] dark:shadow-[0_12px_40px_rgb(249,115,22,0.12)]" : ""
            )}
        >
            {/* Elegant Glass Background with Gradient Border */}
            <div className="absolute inset-0 rounded-xl overflow-hidden">
                {/* Subtle glow effect like in navbar */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-orange-500/5 dark:from-orange-500/10 dark:via-transparent dark:to-orange-500/10 rounded-xl blur-xl" />

                {/* Gradient Border Effect */}
                <div className="absolute inset-0 p-[1px] rounded-xl bg-gradient-to-br from-orange-500/30 via-white/20 to-blue-500/30 dark:from-orange-500/20 dark:via-white/10 dark:to-blue-500/20">
                    {/* Glass Background */}
                    <div className="absolute inset-0 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-xl" />
                </div>

                {/* Subtle Background Patterns */}
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(249,115,22,0.4),transparent_70%)]" />
                    <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.4),transparent_70%)]" />
                </div>
            </div>

            {/* Left Section */}
            <div className="relative z-10 flex items-center space-x-4">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onToggle}
                    className="p-1 rounded-lg bg-gradient-to-r from-orange-500/10 to-orange-500/5 dark:from-orange-500/20 dark:to-orange-500/10 hover:from-orange-500/20 hover:to-orange-500/10 dark:hover:from-orange-500/30 dark:hover:to-orange-500/20 transition-all duration-300 shadow-sm hover:shadow-md border border-orange-500/10 dark:border-orange-500/20"
                    title="Toggle Sidebar"
                >
                    <Menu className="w-3.5 h-3.5 text-gray-700 dark:text-gray-300" />
                </motion.button>

                <div className="flex flex-col">
                    <h1 className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                        Dashboard
                    </h1>
                    <div className="text-[10px] text-gray-600 dark:text-gray-400">
                        Welcome back to <span className="relative inline-block group">
                            {/* Text shadow for depth */}
                            <span className="absolute inset-0 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 dark:from-orange-400 dark:via-orange-300 dark:to-orange-400 bg-clip-text text-transparent blur-sm opacity-50"></span>
                            <span className={cn(
                                "relative bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 dark:from-orange-400 dark:via-orange-300 dark:to-orange-400 bg-clip-text text-transparent transition-all duration-300 ease-out",
                                pacifico.className
                            )}>
                                Largify
                            </span>
                            {/* Subtle shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out opacity-0 group-hover:opacity-100" />
                        </span>
                    </div>
                </div>
            </div>

            {/* Center Section - Search */}
            <div className="relative z-10 hidden md:flex items-center max-w-md w-full mx-4">
                <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Search className="w-3 h-3 text-gray-500 dark:text-gray-400" />
                    </div>
                    <input
                        type="search"
                        className="w-full py-1 pl-8 pr-3 text-[10px] bg-white/50 dark:bg-gray-900/50 border border-orange-200/30 dark:border-orange-800/30 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500/50 dark:focus:ring-orange-500/30 placeholder-gray-500 dark:placeholder-gray-400 backdrop-blur-sm transition-all duration-300"
                        placeholder="Search in dashboard..."
                    />
                </div>
            </div>

            {/* Right Section */}
            <div className="relative z-10 flex items-center space-x-3">
                {/* Notifications */}
                <div className="relative">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setShowNotifications(!showNotifications)}
                        className="p-1 rounded-lg bg-gradient-to-r from-orange-500/10 to-orange-500/5 dark:from-orange-500/20 dark:to-orange-500/10 hover:from-orange-500/20 hover:to-orange-500/10 dark:hover:from-orange-500/30 dark:hover:to-orange-500/20 transition-all duration-300 shadow-sm hover:shadow-md border border-orange-500/10 dark:border-orange-500/20"
                    >
                        <Bell className="w-3.5 h-3.5 text-gray-700 dark:text-gray-300" />
                        {notificationCount > 0 && (
                            <span className="absolute top-0 right-0 flex h-4 w-4 -mt-1 -mr-1">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-orange-500 text-[8px] text-white font-medium justify-center items-center">
                                    {notificationCount}
                                </span>
                            </span>
                        )}
                    </motion.button>

                    {/* Notification Dropdown (simplified) */}
                    {showNotifications && (
                        <div className="absolute right-0 mt-2 w-56 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-xl shadow-lg border border-orange-200/30 dark:border-orange-800/30 z-50">
                            <div className="p-2 border-b border-orange-200/30 dark:border-orange-800/30">
                                <h3 className="text-xs font-medium text-gray-800 dark:text-gray-200">Notifications</h3>
                            </div>
                            <div className="max-h-60 overflow-y-auto">
                                <div className="p-2 hover:bg-orange-500/10 transition-colors duration-200 border-b border-orange-200/20 dark:border-orange-800/20">
                                    <p className="text-[10px] font-medium text-gray-800 dark:text-gray-200">New report available</p>
                                    <p className="text-[9px] text-gray-600 dark:text-gray-400">Q2 Sales Report is ready to view</p>
                                </div>
                                <div className="p-2 hover:bg-orange-500/10 transition-colors duration-200 border-b border-orange-200/20 dark:border-orange-800/20">
                                    <p className="text-[10px] font-medium text-gray-800 dark:text-gray-200">System update</p>
                                    <p className="text-[9px] text-gray-600 dark:text-gray-400">Largify ERP v2.5 is now available</p>
                                </div>
                                <div className="p-2 hover:bg-orange-500/10 transition-colors duration-200">
                                    <p className="text-[10px] font-medium text-gray-800 dark:text-gray-200">Meeting reminder</p>
                                    <p className="text-[9px] text-gray-600 dark:text-gray-400">Team meeting in 30 minutes</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Theme Toggle */}
                <ThemeToggle showLabel={false} variant="circle-blur" start="top-right" />

                {/* User Profile */}
                <div className="flex items-center space-x-2">
                    <div className="hidden sm:block">
                        <p className="text-[10px] font-medium text-gray-800 dark:text-gray-200">John Doe</p>
                        <p className="text-[9px] text-gray-600 dark:text-gray-400">Administrator</p>
                    </div>

                    <div className="relative group">
                        <Avatar className="h-7 w-7 border-2 border-orange-200/50 dark:border-orange-800/30 group-hover:border-orange-500/50 dark:group-hover:border-orange-500/30 transition-all duration-300">
                            <AvatarImage src="/avatar.jpg" alt="User" />
                            <AvatarFallback className="bg-gradient-to-br from-orange-500/80 to-orange-600/80 dark:from-orange-500/60 dark:to-orange-600/60 text-white text-[10px]">JD</AvatarFallback>
                        </Avatar>
                        <div className="absolute -bottom-1 -right-1 h-3 w-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-900"></div>
                    </div>

                    <ChevronDown className="w-3 h-3 text-gray-600 dark:text-gray-400" />
                </div>
            </div>
        </motion.header>
    );
}
