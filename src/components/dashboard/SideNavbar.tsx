"use client";

/**
 * @description: Enhanced SideNavbar with professional styling and animations
 * @version: 2.0.0
 * @date: 2025-07-22
 */

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { Pacifico } from "next/font/google";
import { useRouter, usePathname } from "next/navigation";

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";

import {
    LayoutDashboard,
    BarChart3,
    Briefcase,
    FileText,
    Warehouse,
    Mail,
    Users,
    MessageCircle,
    Brain,
    ChevronRight,
} from "lucide-react";

const pacifico = Pacifico({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-pacifico",
});

interface SidebarProps {
    collapsed: boolean;
    onToggle: () => void;
}

const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", subItems: null },
    { icon: BarChart3, label: "Reporting", subItems: ["Dashboard", "Reports"] },
    {
        icon: Briefcase,
        label: "Commercial",
        subItems: [
            "Overview",
            "Sales",
            "Purchase Department",
            "Invoices",
            // "Quotations",
            // "Orders",
            // "Customers",
            // "Suppliers",
            // "Products",
            // "Pricing"
        ],
    },
    {
        icon: FileText,
        label: "Sales & Finance",
        subItems: ["Workspace", "Analysis", "Reports"],
    },
    {
        icon: Warehouse,
        label: "Stock Management",
        subItems: ["Inventory", "Warehouse", "Sourcing", "Tracking"],
    },
    {
        icon: Mail,
        label: "Marketing",
        subItems: ["Email Campaigns", "Social Media", "Reports"],
    },
    {
        icon: Users,
        label: "Human Resource",
        subItems: [
            "Employee Info",
            "Onboard/Offboard",
            "Attendance",
            "Performance",
            "Compliance",
            "Payroll",
        ],
    },
    {
        icon: MessageCircle,
        label: "Customer Support",
        subItems: ["Channels", "Tech Support", "Account Help"],
    },
    { icon: Brain, label: "Largify Insights", subItems: null },
];

export default function SideNavbar({ collapsed }: SidebarProps) {
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const router = useRouter();
    const pathname = usePathname();

    const handleToggleMenu = (label: string) => {
        const menuItem = navItems.find(item => item.label === label);
        const hasSubItems = Array.isArray(menuItem?.subItems) && menuItem.subItems.length > 0;

        if (hasSubItems) {
            // Toggle submenu for items with sub-items
            setOpenMenu(openMenu === label ? null : label);
        } else {
            // Direct navigation for items without sub-items
            switch (label) {
                case "Dashboard":
                    router.push("/dashboard");
                    break;
                case "Largify Insights":
                    router.push("/insights");
                    break;
                default:
                    break;
            }
        }
    };

    const handleSubItemClick = (parentLabel: string, subItem: string) => {
        // Handle navigation for Sales & Finance
        if (parentLabel === "Sales & Finance") {
            switch (subItem) {
                case "Workspace":
                    router.push("/sales-finance/workspace");
                    break;
                case "Analysis":
                    router.push("/sales-finance/analytics");
                    break;
                case "Reports":
                    router.push("/sales-finance/reports");
                    break;
                default:
                    break;
            }
        }
        // Handle navigation for Commercial
        else if (parentLabel === "Commercial") {
            switch (subItem) {
                case "Overview":
                    router.push("/commercial/overview");
                    break;
                case "Sales":
                    router.push("/commercial/sales");
                    break;
                case "Purchase Department":
                    router.push("/commercial/purchase");
                    break;
                case "Invoices":
                    router.push("/commercial/invoices");
                    break;
                default:
                    break;
            }
        }
        // Handle navigation for Reporting
        else if (parentLabel === "Reporting") {
            switch (subItem) {
                case "Dashboard":
                    router.push("/reporting/dashboard");
                    break;
                case "Reports":
                    router.push("/reporting/reports");
                    break;
                default:
                    break;
            }
        }
        // Handle navigation for Stock Management
        else if (parentLabel === "Stock Management") {
            switch (subItem) {
                case "Inventory":
                    router.push("/stockManagement/inventory");
                    break;
                case "Warehouse":
                    router.push("/stockManagement/warehouse");
                    break;
                case "Sourcing":
                    router.push("/stockManagement/Sourcing");
                    break;
                case "Tracking":
                    router.push("/stockManagement/tracking");
                    break;
                default:
                    break;
            }
        }
        // Handle navigation for Marketing
        else if (parentLabel === "Marketing") {
            switch (subItem) {
                case "Email Campaigns":
                    router.push("/marketing/email-campaigns");
                    break;
                case "Social Media":
                    router.push("/marketing/socialMedia");
                    break;
                case "Reports":
                    router.push("/marketing/reports");
                    break;
                default:
                    break;
            }
        }
        // Handle navigation for Human Resource
        else if (parentLabel === "Human Resource") {
            switch (subItem) {
                case "Employee Info":
                    router.push("/humanResource/employeeInfo");
                    break;
                case "Onboard/Offboard":
                    router.push("/humanResource/onboardOffboard");
                    break;
                case "Attendance":
                    router.push("/humanResource/Attendance");
                    break;
                case "Performance":
                    router.push("/humanResource/performance");
                    break;
                case "Compliance":
                    router.push("/humanResource/compilance");
                    break;
                case "Payroll":
                    router.push("/humanResource/payroll");
                    break;
                default:
                    break;
            }
        }
        // Handle navigation for Customer Support
        else if (parentLabel === "Customer Support") {
            switch (subItem) {
                case "Channels":
                    router.push("/customerSupport/channels");
                    break;
                case "Tech Support":
                    router.push("/customerSupport/techSupport");
                    break;
                case "Account Help":
                    router.push("/customerSupport/accountHelp");
                    break;
                default:
                    break;
            }
        }
        // Close the menu after navigation
        setOpenMenu(null);
    };

    // Helper function to check if a menu item is active
    const isMenuItemActive = (label: string) => {
        if (label === "Dashboard" && pathname === "/dashboard") return true;
        if (label === "Sales & Finance" && pathname.startsWith("/sales-finance")) return true;
        if (label === "Commercial" && pathname.startsWith("/commercial")) return true;
        if (label === "Reporting" && pathname.startsWith("/reporting")) return true;
        if (label === "Stock Management" && pathname.startsWith("/stockManagement")) return true;
        if (label === "Marketing" && pathname.startsWith("/marketing")) return true;
        if (label === "Human Resource" && pathname.startsWith("/humanResource")) return true;
        if (label === "Customer Support" && pathname.startsWith("/customerSupport")) return true;
        if (label === "Largify Insights" && pathname.startsWith("/insights")) return true;
        return false;
    };

    // Helper function to check if a sub-item is active
    const isSubItemActive = (parentLabel: string, subItem: string) => {
        if (parentLabel === "Sales & Finance") {
            if (subItem === "Workspace" && pathname === "/sales-finance/workspace") return true;
            if (subItem === "Analysis" && pathname === "/sales-finance/analytics") return true;
            if (subItem === "Reports" && pathname === "/sales-finance/reports") return true;
        }
        if (parentLabel === "Commercial") {
            if (subItem === "Overview" && pathname === "/commercial/overview") return true;
            if (subItem === "Sales" && pathname === "/commercial/sales") return true;
            if (subItem === "Purchase Department" && pathname === "/commercial/purchase") return true;
            if (subItem === "Invoices" && pathname === "/commercial/invoices") return true;
        }
        if (parentLabel === "Reporting") {
            if (subItem === "Dashboard" && pathname === "/reporting/dashboard") return true;
            if (subItem === "Reports" && pathname === "/reporting/reports") return true;
        }
        if (parentLabel === "Stock Management") {
            if (subItem === "Inventory" && pathname === "/stockManagement/inventory") return true;
            if (subItem === "Warehouse" && pathname === "/stockManagement/warehouse") return true;
            if (subItem === "Sourcing" && pathname === "/stockManagement/Sourcing") return true;
            if (subItem === "Tracking" && pathname === "/stockManagement/tracking") return true;
        }
        if (parentLabel === "Marketing") {
            if (subItem === "Email Campaigns" && pathname === "/marketing/email-campaigns") return true;
            if (subItem === "Social Media" && pathname === "/marketing/socialMedia") return true;
            if (subItem === "Reports" && pathname === "/marketing/reports") return true;
        }
        if (parentLabel === "Human Resource") {
            if (subItem === "Employee Info" && pathname === "/humanResource/employeeInfo") return true;
            if (subItem === "Onboard/Offboard" && pathname === "/humanResource/onboardOffboard") return true;
            if (subItem === "Attendance" && pathname === "/humanResource/Attendance") return true;
            if (subItem === "Performance" && pathname === "/humanResource/performance") return true;
            if (subItem === "Compliance" && pathname === "/humanResource/compilance") return true;
            if (subItem === "Payroll" && pathname === "/humanResource/payroll") return true;
        }
        if (parentLabel === "Customer Support") {
            if (subItem === "Channels" && pathname === "/customerSupport/channels") return true;
            if (subItem === "Tech Support" && pathname === "/customerSupport/techSupport") return true;
            if (subItem === "Account Help" && pathname === "/customerSupport/accountHelp") return true;
        }
        return false;
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.23, 0.86, 0.39, 0.96] }}
            className={cn(
                "relative z-50 flex flex-col h-[95vh] m-2 transition-all duration-300",
                "shadow-[0_10px_40px_rgb(249,115,22,0.18)] dark:shadow-[0_10px_40px_rgb(249,115,22,0.09)]",
                "hover:shadow-[0_15px_50px_rgb(249,115,22,0.25)] dark:hover:shadow-[0_15px_50px_rgb(249,115,22,0.15)]",
                collapsed ? "w-[54px]" : "w-[176px]"
            )}
        >
            {/* Enhanced Glass Background with Dynamic Gradient Border */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
                {/* Animated subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-orange-500/5 dark:from-orange-500/10 dark:via-transparent dark:to-orange-500/10 rounded-2xl blur-xl animate-pulse" />

                {/* Floating particles effect */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute h-1 w-1 rounded-full bg-orange-300 top-[10%] left-[20%] animate-float-slow" />
                    <div className="absolute h-1 w-1 rounded-full bg-blue-300 top-[30%] right-[10%] animate-float-medium" />
                    <div className="absolute h-0.5 w-0.5 rounded-full bg-orange-200 bottom-[20%] left-[30%] animate-float-fast" />
                    <div className="absolute h-0.5 w-0.5 rounded-full bg-blue-200 bottom-[40%] right-[20%] animate-float-slow" />
                </div>

                {/* Enhanced Gradient Border Effect with subtle animation */}
                <div className="absolute inset-0 p-[1px] rounded-2xl bg-gradient-to-br from-orange-500/30 via-white/20 to-blue-500/30 dark:from-orange-500/20 dark:via-white/10 dark:to-blue-500/20 animate-gradient-shift">
                    {/* Glass Background with improved blur */}
                    <div className="absolute inset-0 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-2xl" />
                </div>

                {/* Enhanced Background Patterns with subtle movement */}
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(249,115,22,0.4),transparent_70%)] animate-pulse-slow" />
                    <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.4),transparent_70%)] animate-pulse-slow" />
                </div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col h-full px-2 py-6 items-center">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="flex-shrink-0 will-change-transform relative group flex items-center justify-center py-4 mb-4 mx-auto"
                >
                    {/* Enhanced layered glow effects with animation */}
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-orange-400/10 to-orange-500/20 blur-2xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse-slow" />
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-300/15 via-orange-200/8 to-orange-300/15 blur-xl rounded-full scale-125 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100" />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-300/10 via-transparent to-orange-300/10 blur-xl rounded-full scale-110 opacity-0 group-hover:opacity-80 transition-all duration-700 delay-200 animate-spin-slow" />

                    <span
                        className={cn(
                            "relative bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 dark:from-orange-400 dark:via-orange-300 dark:to-orange-400 transition-all duration-300 ease-out group-hover:scale-105 text-center",
                            collapsed ? "text-base" : "text-lg",
                            pacifico.className
                        )}
                    >
                        {collapsed ? "L" : "Largify Erp"}
                        {/* Enhanced shine effect with continuous animation */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out opacity-0 group-hover:opacity-100 group-hover:animate-shimmer" />
                        {/* Subtle sparkle effect */}
                        <div className="absolute top-0 right-0 h-1 w-1 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-twinkle" />
                        <div className="absolute bottom-1 left-1 h-0.5 w-0.5 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-twinkle-delayed" />
                    </span>
                </motion.div>

                {/* Navigation */}
                <div className="overflow-y-auto pr-1 flex-1 space-y-1 w-full">
                    <nav className="flex flex-col space-y-1.5">
                        {navItems.map(({ icon: Icon, label, subItems }, index) => {
                            const hasSubItems = Array.isArray(subItems) && subItems.length > 0;
                            const isOpen = openMenu === label;
                            const isHovered = hoveredItem === label;
                            const isActive = isMenuItemActive(label);

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + index * 0.05, duration: 0.5 }}
                                >
                                    <Popover open={isOpen}>
                                        <PopoverTrigger asChild>
                                            <motion.div
                                                onMouseEnter={() => setHoveredItem(label)}
                                                onMouseLeave={() => setHoveredItem(null)}
                                                onClick={() => handleToggleMenu(label)}
                                                className={cn(
                                                    "flex items-center px-2.5 py-1.5 rounded-xl cursor-pointer transition-all duration-200",
                                                    collapsed && "justify-center",
                                                    isOpen || isActive
                                                        ? "bg-gradient-to-r from-orange-500/20 to-orange-500/10 dark:from-orange-500/30 dark:to-orange-500/15 text-orange-600 dark:text-orange-400"
                                                        : "hover:bg-gradient-to-r hover:from-orange-500/10 hover:to-transparent dark:hover:from-orange-500/20 dark:hover:to-transparent"
                                                )}
                                            >
                                                <Tooltip>
                                                    <TooltipTrigger asChild>
                                                        <div className="flex items-center justify-center">
                                                            <motion.div
                                                                animate={isOpen || isHovered || isActive ? { scale: 1.1 } : { scale: 1 }}
                                                                transition={{ duration: 0.2 }}
                                                            >
                                                                <Icon className={cn(
                                                                    "w-3.5 h-3.5 transition-colors",
                                                                    isOpen || isActive
                                                                        ? "text-orange-600 dark:text-orange-400"
                                                                        : "text-gray-700 dark:text-gray-300"
                                                                )} />
                                                            </motion.div>
                                                        </div>
                                                    </TooltipTrigger>
                                                    {collapsed && (
                                                        <TooltipContent side="right" className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-orange-500/20">
                                                            <span>{label}</span>
                                                        </TooltipContent>
                                                    )}
                                                </Tooltip>

                                                {!collapsed && (
                                                    <div className="flex items-center justify-between w-full ml-3">
                                                        <span className={cn(
                                                            "text-[10px] font-medium transition-colors",
                                                            isOpen || isActive
                                                                ? "text-orange-600 dark:text-orange-400"
                                                                : "text-gray-700 dark:text-gray-300"
                                                        )}>
                                                            {label}
                                                        </span>
                                                        {hasSubItems && (
                                                            <motion.div
                                                                animate={isOpen ? { rotate: 90 } : { rotate: 0 }}
                                                                transition={{ duration: 0.2 }}
                                                            >
                                                                <ChevronRight className="w-2.5 h-2.5 opacity-70" />
                                                            </motion.div>
                                                        )}
                                                    </div>
                                                )}
                                            </motion.div>
                                        </PopoverTrigger>

                                        {hasSubItems && (
                                            <PopoverContent
                                                className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-xl ml-2 w-[144px] text-[9px] border border-orange-500/20 shadow-lg shadow-orange-500/5 dark:shadow-orange-500/10 z-50"
                                                side="right"
                                                align="start"
                                                onInteractOutside={() => setOpenMenu(null)}
                                            >
                                                <div className="space-y-0.5 p-1">
                                                    {subItems.map((subItem, subIndex) => {
                                                        const isSubActive = isSubItemActive(label, subItem);
                                                        return (
                                                            <motion.div
                                                                key={subIndex}
                                                                initial={{ opacity: 0, x: -5 }}
                                                                animate={{ opacity: 1, x: 0 }}
                                                                transition={{ delay: 0.05 * subIndex, duration: 0.3 }}
                                                                onClick={() => handleSubItemClick(label, subItem)}
                                                                className={cn(
                                                                    "px-2 py-1 rounded-lg cursor-pointer text-[8px] font-medium transition-all duration-200",
                                                                    isSubActive
                                                                        ? "bg-orange-500/15 text-orange-600 dark:text-orange-400"
                                                                        : "text-gray-700 dark:text-gray-300 hover:bg-orange-500/10 hover:text-orange-600 dark:hover:text-orange-400"
                                                                )}
                                                            >
                                                                {subItem}
                                                            </motion.div>
                                                        );
                                                    })}
                                                </div>
                                            </PopoverContent>
                                        )}
                                    </Popover>
                                </motion.div>
                            );
                        })}
                    </nav>
                </div>

                {/* Subtle Decorative Element */}
                <div className="relative mt-4 flex justify-center">
                    <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-orange-500/30 to-transparent rounded-full" />
                </div>
            </div>
        </motion.div>
    );
} 
