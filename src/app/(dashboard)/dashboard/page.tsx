"use client";

import { useEffect, useState, useRef } from "react";
import html2canvas from "html2canvas";
import {
  Activity,
  PlusCircle,
  UserPlus,
  FileBarChart2,
  Boxes,
  Download,
  RefreshCw,
  Maximize2,
  Minimize2,
  Calendar,
  Clock,
  TrendingUp,
  DollarSign,
  ShoppingBag,
  Users,
  BarChart3,
} from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Pacifico } from "next/font/google";
import { useTheme } from "next-themes";
import Chart from "@/components/reporting/chart"; // ADDED

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
});

export default function DashboardPage() {
  const { theme } = useTheme();
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const chartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
      setDate(
        now.toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      );
    };
    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const downloadChart = () => {
    if (chartRef.current) {
      html2canvas(chartRef.current).then((canvas) => {
        const link = document.createElement("a");
        link.download = "chart.png";
        link.href = canvas.toDataURL();
        link.click();
      });
    }
  };

  return (
    <div
      className="p-4 text-gray-800 dark:text-gray-200 relative z-10"
    >
      {/* Welcome Block */}
      <div className="relative rounded-2xl p-3 shadow-lg mb-4 flex flex-col lg:flex-row justify-between items-center gap-2 overflow-hidden">
        {/* Enhanced Glass effect with animated gradient border */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          {/* Animated subtle glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-orange-500/5 dark:from-orange-500/10 dark:via-transparent dark:to-orange-500/10 rounded-2xl blur-xl animate-pulse" />

          {/* Floating particles effect */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute h-1 w-1 rounded-full bg-orange-300 dark:bg-orange-400 top-[10%] left-[20%] animate-float-slow" />
            <div className="absolute h-1 w-1 rounded-full bg-blue-300 dark:bg-blue-400 top-[30%] right-[10%] animate-float-medium" />
            <div className="absolute h-0.5 w-0.5 rounded-full bg-orange-200 dark:bg-orange-300 bottom-[20%] left-[30%] animate-float-fast" />
            <div className="absolute h-0.5 w-0.5 rounded-full bg-blue-200 dark:bg-blue-300 bottom-[40%] right-[20%] animate-float-slow" />
          </div>

          {/* Enhanced Gradient Border Effect with subtle animation */}
          <div className="absolute inset-0 p-[1px] rounded-2xl bg-gradient-to-br from-orange-500/30 via-white/20 to-blue-500/30 dark:from-orange-500/20 dark:via-white/10 dark:to-blue-500/20 animate-gradient-shift">
            <div className="absolute inset-0 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-2xl" />
          </div>

          {/* Enhanced Background Patterns with subtle movement */}
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(249,115,22,0.4),transparent_70%)] animate-pulse-slow" />
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.4),transparent_70%)] animate-pulse-slow" />
          </div>
        </div>

        <div className="relative z-10 group">
          <h1 className={cn(
            "text-xl font-bold mb-0.5 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 dark:from-orange-400 dark:via-orange-300 dark:to-orange-400 transition-all duration-300 group-hover:scale-[1.02]",
            pacifico.className
          )}>
            Welcome to Largify ERP
          </h1>
          <p className="text-xs text-gray-700 dark:text-gray-300 relative">
            Monitor your business performance with real-time insights and analytics.
            {/* Subtle shine effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out opacity-0 group-hover:opacity-100"></span>
          </p>
        </div>

        <div className="relative bg-white/50 dark:bg-gray-800/50 text-black dark:text-white font-mono px-3 py-2 rounded-2xl shadow-inner text-center leading-tight z-10 overflow-hidden group border border-orange-200/30 dark:border-orange-800/30">
          {/* Enhanced background with animated gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-blue-500/10 dark:from-orange-500/20 dark:via-transparent dark:to-blue-500/20 rounded-2xl animate-pulse-slow" />

          {/* Subtle particle effect */}
          <div className="absolute h-0.5 w-0.5 rounded-full bg-orange-300/50 dark:bg-orange-400/50 top-[20%] left-[20%] animate-float-slow opacity-0 group-hover:opacity-100" />
          <div className="absolute h-0.5 w-0.5 rounded-full bg-blue-300/50 dark:bg-blue-400/50 bottom-[20%] right-[20%] animate-float-medium opacity-0 group-hover:opacity-100" />

          <div className="relative flex items-center gap-2">
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-1 text-[10px] text-gray-600 dark:text-gray-400">
                <Calendar className="w-3 h-3" />
                <span>{date.split(',')[0]}</span>
              </div>
              <div className="text-sm font-medium text-gray-800 dark:text-gray-200 group-hover:scale-105 transition-transform duration-300">{time}</div>
            </div>
            <div className="h-8 w-[1px] bg-gray-200 dark:bg-gray-700"></div>
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-1 text-[10px] text-gray-600 dark:text-gray-400">
                <Clock className="w-3 h-3" />
                <span>Today</span>
              </div>
              <div className="text-sm font-medium text-gray-800 dark:text-gray-200">{date.split(',').slice(1).join(',').trim()}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-3">
        {[
          {
            label: "Total Revenue",
            value: "$82,540",
            change: "+12.5%",
            color: "from-orange-500 to-orange-600 dark:from-orange-400 dark:to-orange-500",
            icon: <DollarSign className="w-3.5 h-3.5" />,
            bgColor: "bg-orange-500/10 dark:bg-orange-500/20"
          },
          {
            label: "Active Orders",
            value: "1,245",
            change: "+3.8%",
            color: "from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500",
            icon: <ShoppingBag className="w-3.5 h-3.5" />,
            bgColor: "bg-blue-500/10 dark:bg-blue-500/20"
          },
          {
            label: "Customers",
            value: "4,890",
            change: "+7.1%",
            color: "from-green-500 to-green-600 dark:from-green-400 dark:to-green-500",
            icon: <Users className="w-3.5 h-3.5" />,
            bgColor: "bg-green-500/10 dark:bg-green-500/20"
          },
          {
            label: "Growth Rate",
            value: "9.35%",
            change: "−1.2%",
            color: "from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500",
            icon: <TrendingUp className="w-3.5 h-3.5" />,
            bgColor: "bg-purple-500/10 dark:bg-purple-500/20"
          },
        ].map((stat,) => (
          <div
            key={stat.label}
            className="relative p-2 rounded-2xl shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300"

          >
            {/* Enhanced Glass effect with animated gradient border */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              {/* Animated subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-orange-500/5 dark:from-orange-500/10 dark:via-transparent dark:to-orange-500/10 rounded-2xl blur-xl animate-pulse" />

              {/* Floating particle */}
              <div className="absolute h-0.5 w-0.5 rounded-full bg-orange-300/50 dark:bg-orange-400/50 top-[30%] left-[20%] opacity-0 group-hover:opacity-100 animate-float-slow" />

              {/* Enhanced Gradient Border Effect with subtle animation */}
              <div className="absolute inset-0 p-[1px] rounded-2xl bg-gradient-to-br from-orange-500/20 via-white/10 to-blue-500/20 dark:from-orange-500/20 dark:via-white/5 dark:to-blue-500/20 group-hover:from-orange-500/30 group-hover:to-blue-500/30 transition-all duration-500">
                <div className="absolute inset-0 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-2xl" />
              </div>

              {/* Enhanced Background Patterns with subtle movement */}
              <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
                <div className={`absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(249,115,22,0.4),transparent_70%)] group-hover:opacity-75 transition-opacity duration-500`} />
              </div>
            </div>

            <div className="relative z-10 flex items-center gap-3 group-hover:translate-y-[-1px] transition-transform duration-300">
              <div className={cn("w-8 h-8 rounded-xl flex items-center justify-center", stat.bgColor)}>
                <div className={cn("text-transparent bg-clip-text bg-gradient-to-r", stat.color)}>
                  {stat.icon}
                </div>
              </div>

              <div className="flex-1">
                <h2 className="text-xs font-semibold mb-0.5 text-gray-700 dark:text-gray-300">{stat.label}</h2>
                <div className={cn("text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r", stat.color, "group-hover:scale-105 transition-transform duration-300")}>{stat.value}</div>
                <p className="text-[8px] mt-0.5 text-gray-600 dark:text-gray-400 relative">
                  <span className={cn(
                    stat.change.startsWith("+") ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400",
                    "font-medium"
                  )}>
                    {stat.change}
                  </span> from last month
                  {/* Subtle shine effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out opacity-0 group-hover:opacity-100"></span>
                </p>
              </div>
            </div>

            {/* Enhanced hover effects */}
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-orange-500/50 dark:via-orange-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-white/20 dark:from-white/10 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-4 -translate-y-4" />
          </div>
        ))}
      </div>

      {/* Analytics Chart - REPLACED WITH REPORT PAGE CHART */}
      <div
        className={`${isFullscreen ? "fixed inset-0 bg-white dark:bg-black z-50 p-6" : ""} relative rounded-2xl shadow-md mb-4 overflow-hidden group hover:shadow-lg transition-shadow duration-300`}
      >
        {/* Enhanced Glass effect with animated gradient border */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          {/* Animated subtle glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-blue-500/5 dark:from-orange-500/10 dark:via-transparent dark:to-blue-500/10 rounded-2xl blur-xl animate-pulse-slow" />

          {/* Static particles effect */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute h-0.5 w-0.5 rounded-full bg-orange-300 dark:bg-orange-400 top-[5%] left-[10%] opacity-0 group-hover:opacity-100" />
            <div className="absolute h-0.5 w-0.5 rounded-full bg-blue-300 dark:bg-blue-400 top-[15%] right-[5%] opacity-0 group-hover:opacity-100" />
            <div className="absolute h-0.5 w-0.5 rounded-full bg-orange-200 dark:bg-orange-300 bottom-[10%] left-[15%] opacity-0 group-hover:opacity-100" />
          </div>

          {/* Enhanced Gradient Border Effect with subtle animation */}
          <div className="absolute inset-0 p-[1px] rounded-2xl bg-gradient-to-br from-orange-500/20 via-white/10 to-blue-500/20 dark:from-orange-500/20 dark:via-white/5 dark:to-blue-500/20 group-hover:from-orange-500/30 group-hover:to-blue-500/30 transition-all duration-500">
            <div className="absolute inset-0 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-2xl" />
          </div>

          {/* Static Background Patterns */}
          <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_10%_10%,rgba(249,115,22,0.3),transparent_50%)]" />
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_90%_90%,rgba(59,130,246,0.3),transparent_50%)]" />
          </div>
        </div>

        <div className="flex justify-between items-center px-3 pt-3 relative z-10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-orange-500/10 dark:bg-orange-500/20 flex items-center justify-center">
              <BarChart3 className="w-4 h-4 text-orange-600 dark:text-orange-400" />
            </div>
            <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:scale-[1.02] transition-transform duration-300 relative">
              Sales & Order Analytics
              {/* Subtle shine effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out opacity-0 group-hover:opacity-100"></span>
            </h3>
          </div>

          <div className="flex gap-2 items-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsFullscreen((prev) => !prev)}
              className="p-1 rounded-lg bg-gradient-to-r from-orange-500/10 to-orange-500/5 dark:from-orange-500/20 dark:to-orange-500/10 hover:from-orange-500/20 hover:to-orange-500/10 dark:hover:from-orange-500/30 dark:hover:to-orange-500/20 transition-all duration-300 shadow-sm hover:shadow-md border border-orange-500/10 dark:border-orange-500/20"
              title={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
            >
              {isFullscreen ?
                <Minimize2 className="w-3 h-3 text-gray-700 dark:text-gray-300" /> :
                <Maximize2 className="w-3 h-3 text-gray-700 dark:text-gray-300" />
              }
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={downloadChart}
              className="p-1 rounded-lg bg-gradient-to-r from-orange-500/10 to-orange-500/5 dark:from-orange-500/20 dark:to-orange-500/10 hover:from-orange-500/20 hover:to-orange-500/10 dark:hover:from-orange-500/30 dark:hover:to-orange-500/20 transition-all duration-300 shadow-sm hover:shadow-md border border-orange-500/10 dark:border-orange-500/20"
              title="Download chart"
            >
              <Download className="w-3 h-3 text-gray-700 dark:text-gray-300" />
            </motion.button>
          </div>
        </div>

        {/* REPLACED CHART */}
        <div className="w-full h-[500px] p-3 relative z-10 dark:text-zinc-900s" ref={chartRef}>
          <Chart /> {/* REPORT PAGE CHART */}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-3 pb-5 mt-16">

          {[
            {
              title: "Total Sales",
              value: "$128,000",
              change: "+18%",
              icon: <DollarSign className="w-3.5 h-3.5" />,
              color: "text-orange-600 dark:text-orange-400",
              bgColor: "bg-orange-500/10 dark:bg-orange-500/20"
            },
            {
              title: "Total Orders",
              value: "5,300",
              change: "+10.2%",
              icon: <ShoppingBag className="w-3.5 h-3.5" />,
              color: "text-blue-600 dark:text-blue-400",
              bgColor: "bg-blue-500/10 dark:bg-blue-500/20"
            },
            {
              title: "Average Growth",
              value: "12.4%",
              change: "+2.1%",
              icon: <TrendingUp className="w-3.5 h-3.5" />,
              color: "text-green-600 dark:text-green-400",
              bgColor: "bg-green-500/10 dark:bg-green-500/20"
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
              className="relative p-2 rounded-xl shadow-sm overflow-hidden group hover:shadow-md transition-all duration-300 border border-orange-200/30 dark:border-orange-800/30"
            >
              {/* Glass effect with gradient border */}
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-blue-500/5 dark:from-orange-500/10 dark:via-transparent dark:to-blue-500/10 rounded-xl blur-xl" />
                <div className="absolute inset-0 p-[1px] rounded-xl bg-gradient-to-br from-orange-500/20 via-white/10 to-blue-500/20 dark:from-orange-500/20 dark:via-white/5 dark:to-blue-500/20 group-hover:from-orange-500/30 group-hover:to-blue-500/30 transition-all duration-500">
                  <div className="absolute inset-0 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-xl" />
                </div>
              </div>

              <div className="relative z-10 flex items-center gap-2 group-hover:translate-y-[-1px] transition-transform duration-300">
                <div className={cn("w-7 h-7 rounded-lg flex items-center justify-center", stat.bgColor)}>
                  <div className={stat.color}>
                    {stat.icon}
                  </div>
                </div>

                <div className="flex-1">
                  <h2 className="text-xs font-semibold mb-0.5 text-gray-700 dark:text-gray-300">{stat.title}</h2>
                  <div className="flex items-center justify-between">
                    <div className="text-base font-bold text-gray-900 dark:text-gray-100">{stat.value}</div>
                    <span className={cn(
                      stat.change.startsWith("+") ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400",
                      "text-[10px] font-medium"
                    )}>
                      {stat.change}
                    </span>
                  </div>
                </div>
              </div>

              {/* Hover effect */}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-orange-500/50 dark:via-orange-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Activity & Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-4">
        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="rounded-2xl shadow-md p-3 relative overflow-hidden group hover:shadow-lg transition-shadow duration-300 border border-orange-200/30 dark:border-orange-800/30"
        >
          {/* Enhanced Glass effect with animated gradient border */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-blue-500/5 dark:from-orange-500/10 dark:via-transparent dark:to-blue-500/10 rounded-2xl blur-xl animate-pulse-slow" />
            <div className="absolute inset-0 p-[1px] rounded-2xl bg-gradient-to-br from-orange-500/20 via-white/10 to-blue-500/20 dark:from-orange-500/20 dark:via-white/5 dark:to-blue-500/20 group-hover:from-orange-500/30 group-hover:to-blue-500/30 transition-all duration-500">
              <div className="absolute inset-0 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-2xl" />
            </div>
            <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(249,115,22,0.3),transparent_50%)] animate-pulse-slow" />
            </div>
          </div>

          <div className="relative z-10 mb-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-orange-500/10 dark:bg-orange-500/20 flex items-center justify-center">
                  <Activity className="h-3.5 w-3.5 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-800 dark:text-gray-200 group-hover:scale-[1.02] transition-transform duration-300">
                    Recent Activity
                  </div>
                  <p className="text-[10px] text-gray-600 dark:text-gray-400">Live updates • 1 item</p>
                </div>
              </div>

              <div className="bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-[10px] font-medium px-1.5 py-0.5 rounded-full">
                New
              </div>
            </div>
          </div>

          <Tabs defaultValue="all">
            <TabsList className="bg-gray-100 dark:bg-gray-800/50 mb-2 h-6 text-[10px]">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="payments">Payments</TabsTrigger>
              <TabsTrigger value="alerts">Alerts</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <div className="p-2 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/30 rounded-xl">
                <div className="flex items-center gap-1.5 mb-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                  <p className="text-red-700 dark:text-red-400 font-medium text-[10px]">Low Stock Alert</p>
                </div>
                <p className="text-[9px] text-gray-600 dark:text-gray-400">Product SKU-789 below minimum threshold</p>
                <p className="text-[8px] text-gray-500 dark:text-gray-500 mt-0.5">1 hour ago • 12 units left</p>
              </div>
            </TabsContent>
            <TabsContent value="orders">
              <div className="flex items-center justify-center h-16">
                <p className="text-[10px] text-gray-500 dark:text-gray-400">No recent orders</p>
              </div>
            </TabsContent>
            <TabsContent value="payments">
              <div className="flex items-center justify-center h-16">
                <p className="text-[10px] text-gray-500 dark:text-gray-400">No recent payments</p>
              </div>
            </TabsContent>
            <TabsContent value="alerts">
              <div className="flex items-center justify-center h-16">
                <p className="text-[10px] text-gray-500 dark:text-gray-400">Low Stock Alert shown here</p>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="rounded-2xl shadow-md p-3 relative overflow-hidden group hover:shadow-lg transition-shadow duration-300 border border-orange-200/30 dark:border-orange-800/30"
        >
          {/* Enhanced Glass effect with animated gradient border */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-blue-500/5 dark:from-orange-500/10 dark:via-transparent dark:to-blue-500/10 rounded-2xl blur-xl animate-pulse-slow" />
            <div className="absolute inset-0 p-[1px] rounded-2xl bg-gradient-to-br from-orange-500/20 via-white/10 to-blue-500/20 dark:from-orange-500/20 dark:via-white/5 dark:to-blue-500/20 group-hover:from-orange-500/30 group-hover:to-blue-500/30 transition-all duration-500">
              <div className="absolute inset-0 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-2xl" />
            </div>
            <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
              <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.3),transparent_50%)] animate-pulse-slow" />
            </div>
          </div>

          <div className="relative z-10 mb-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center">
                <PlusCircle className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h2 className="text-xs font-semibold text-gray-800 dark:text-gray-200 group-hover:scale-[1.02] transition-transform duration-300">
                  Quick Actions
                </h2>
                <p className="text-[10px] text-gray-600 dark:text-gray-400">Streamline your workflow</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {[
              {
                label: "Create Order",
                icon: <PlusCircle className="w-3.5 h-3.5" />,
                desc: "Add a new sales order",
                color: "text-orange-600 dark:text-orange-400",
                bgColor: "bg-orange-500/10 dark:bg-orange-500/20"
              },
              {
                label: "Add Customer",
                icon: <UserPlus className="w-3.5 h-3.5" />,
                desc: "Register a new customer",
                color: "text-blue-600 dark:text-blue-400",
                bgColor: "bg-blue-500/10 dark:bg-blue-500/20"
              },
              {
                label: "Generate Report",
                icon: <FileBarChart2 className="w-3.5 h-3.5" />,
                desc: "Create business reports",
                color: "text-green-600 dark:text-green-400",
                bgColor: "bg-green-500/10 dark:bg-green-500/20"
              },
              {
                label: "Manage Inventory",
                icon: <Boxes className="w-3.5 h-3.5" />,
                desc: "Update stock levels",
                color: "text-purple-600 dark:text-purple-400",
                bgColor: "bg-purple-500/10 dark:bg-purple-500/20"
              },
            ].map(({ label, icon, desc, color, bgColor }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.6 + (index * 0.1) }}
                className="rounded-xl p-2 bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 hover:shadow-md relative overflow-hidden group/item border border-gray-200/50 dark:border-gray-700/50"
              >
                {/* Subtle shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-[-200%] group-hover/item:translate-x-[200%] transition-transform duration-1000 ease-out opacity-0 group-hover/item:opacity-100" />

                <div className="flex items-center gap-2 relative z-10">
                  <div className={cn("w-6 h-6 rounded-lg flex items-center justify-center", bgColor)}>
                    <div className={color}>
                      {icon}
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 dark:text-gray-200 text-[10px] group-hover/item:text-orange-600 dark:group-hover/item:text-orange-400 transition-colors duration-300">{label}</p>
                    <p className="text-[8px] text-gray-600 dark:text-gray-400">{desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}