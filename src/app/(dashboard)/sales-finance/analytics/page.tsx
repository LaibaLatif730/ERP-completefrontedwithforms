
"use client";
import { Button } from "@/components/ui/button"; // ✅ For all your buttons
import { RefreshCw, Download } from "lucide-react"; // ✅ For icons used in buttons

// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Separator } from "@/components/ui/separator";
// import ThemeToggleButton from "@/components/ui/theme-toggle-button";
// import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Pacifico } from "next/font/google";
import {
  TrendingUp,
  TrendingDown,
  Users,
  Package,
  DollarSign,
  Target,
  BarChart3,
  PieChart,
  Activity,
 
  Calendar,
  Clock
} from "lucide-react";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
});

const analyticsData = [
  {
    title: "Revenue Trends",
    icon: TrendingUp,
    metrics: [
      { label: "Highest Sales Month", value: "March 2025", amount: "Rs. 2,40,000", trend: "up" },
      { label: "Lowest Sales Month", value: "July 2025", amount: "Rs. 98,000", trend: "down" },
      { label: "Average Monthly Growth", value: "+12.5%", amount: "vs last quarter", trend: "up" }
    ]
  },
  {
    title: "Customer Analytics",
    icon: Users,
    metrics: [
      { label: "Top Customer", value: "Alpha Traders", amount: "Rs. 3,20,000", trend: "up" },
      { label: "Customer Retention", value: "61%", amount: "High Loyalty", trend: "up" },
      { label: "New Customers", value: "24", amount: "This month", trend: "up" }
    ]
  },
  {
    title: "Product Performance",
    icon: Package,
    metrics: [
      { label: "Top Product", value: "Steel Rods", amount: "Rs. 4,80,000", trend: "up" },
      { label: "Product Categories", value: "8 Active", amount: "2 New launches", trend: "up" },
      { label: "Inventory Turnover", value: "4.2x", amount: "Quarterly", trend: "up" }
    ]
  }
];

const expenseBreakdown = [
  { category: "Marketing", percentage: 32, amount: "Rs. 28,160", color: "bg-orange-500" },
  { category: "Operations", percentage: 29, amount: "Rs. 25,520", color: "bg-orange-400" },
  { category: "Human Resources", percentage: 21, amount: "Rs. 18,480", color: "bg-orange-300" },
  { category: "Miscellaneous", percentage: 18, amount: "Rs. 15,840", color: "bg-orange-200" }
];

const kpiCards = [
  { title: "Avg. Order Value", value: "Rs. 6,700", change: "+8.2%", icon: DollarSign },
  { title: "Outstanding Receivables", value: "Rs. 78,000", change: "12 invoices", icon: Target },
  { title: "Profit Margin (YoY)", value: "+8.3%", change: "vs last year", icon: BarChart3 },
  { title: "Sales Conversion", value: "23.4%", change: "+2.1%", icon: Activity }
];

export default function AnalyticsPage() {
  return (
    <div className="p-4 text-gray-800 dark:text-gray-200 relative z-10">
      {/* Welcome Block - Analytics Style */}
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
            Sales & Finance Analytics
          </h1>
          <p className="text-xs text-gray-700 dark:text-gray-300 relative">
            Comprehensive business insights and performance metrics with real-time data visualization.
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
                <span>Current Period</span>
              </div>
              <div className="text-sm font-medium text-gray-800 dark:text-gray-200 group-hover:scale-105 transition-transform duration-300">Live Data</div>
            </div>
            <div className="h-8 w-[1px] bg-gray-200 dark:bg-gray-700"></div>
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-1 text-[10px] text-gray-600 dark:text-gray-400">
                <Clock className="w-3 h-3" />
                <span>Updated</span>
              </div>
              <div className="text-sm font-medium text-gray-800 dark:text-gray-200">Real-time</div>
            </div>
          </div>
        </div>
      </div>
                <div className="flex flex-wrap items-center gap-5 mb-4">
            <Button variant="default" className="bg-orange-500 hover:bg-orange-600 text-white">
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh Data
            </Button>
            <Button variant="default" className="bg-orange-500 hover:bg-orange-600 text-white">
              <Download className="w-4 h-4 mr-2" />
              Generate Report
            </Button>
            <Button variant="default" className="bg-orange-500 hover:bg-orange-600 text-white">
              View Detailed Reports
            </Button>
            <Button variant="default" className="bg-orange-500 hover:bg-orange-600 text-white">
              + Add Sales Entry
            </Button>
            <Button variant="default" className="bg-orange-500 hover:bg-orange-600 text-white">
              Send to Email
            </Button>
          </div>
      {/* KPI Cards - Dashboard Style */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
        {kpiCards.map(({ title, value, change, icon: Icon }) => (
          <div
            key={title}
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
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(249,115,22,0.4),transparent_70%)] group-hover:opacity-75 transition-opacity duration-500" />
              </div>
            </div>

            <div className="relative z-10 flex items-center gap-3 group-hover:translate-y-[-1px] transition-transform duration-300">
              <div className="w-8 h-8 rounded-xl bg-[#F5793B]/10 dark:bg-[#F5793B]/20 flex items-center justify-center">
                <Icon className="w-4 h-4 text-[#F5793B]" />
              </div>

              <div className="flex-1">
                <h2 className="text-xs font-semibold mb-0.5 text-gray-700 dark:text-gray-300">{title}</h2>
                <div className="text-lg font-bold text-[#F5793B] group-hover:scale-105 transition-transform duration-300">{value}</div>
                <p className="text-[8px] mt-0.5 text-gray-600 dark:text-gray-400 relative">
                  <span className="text-green-600 dark:text-green-400 font-medium">
                    {change}
                  </span> from last period
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

      {/* Main Analytics Sections - Dashboard Style */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-4">
        {/* Analytics Cards */}
        <div className="space-y-3">
          {analyticsData.map(({ title, icon: Icon, metrics }) => (
            <div
              key={title}
              className="relative rounded-2xl shadow-md p-3 overflow-hidden group hover:shadow-lg transition-all duration-300"
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

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-lg bg-orange-500/10 dark:bg-orange-500/20 flex items-center justify-center">
                    <Icon className="h-3.5 w-3.5 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:scale-[1.02] transition-transform duration-300">
                    {title}
                  </h3>
                </div>

                <div className="space-y-2">
                  {metrics.map((metric, index) => (
                    <div key={index} className="flex items-center justify-between p-2 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors duration-200">
                      <div>
                        <p className="font-medium text-gray-900 dark:text-gray-100 text-xs">{metric.label}</p>
                        <p className="text-[10px] text-gray-600 dark:text-gray-400">{metric.amount}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="font-bold text-[#F5793B] text-xs">{metric.value}</span>
                        {metric.trend === "up" ? (
                          <TrendingUp className="w-3 h-3 text-green-500" />
                        ) : (
                          <TrendingDown className="w-3 h-3 text-red-500" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Expense Breakdown & Performance */}
        <div className="space-y-3">
          {/* Expense Breakdown */}
          <div className="relative rounded-2xl shadow-md p-3 overflow-hidden group hover:shadow-lg transition-all duration-300">
            {/* Enhanced Glass effect */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-blue-500/5 dark:from-orange-500/10 dark:via-transparent dark:to-blue-500/10 rounded-2xl blur-xl animate-pulse-slow" />
              <div className="absolute inset-0 p-[1px] rounded-2xl bg-gradient-to-br from-orange-500/20 via-white/10 to-blue-500/20 dark:from-orange-500/20 dark:via-white/5 dark:to-blue-500/20 group-hover:from-orange-500/30 group-hover:to-blue-500/30 transition-all duration-500">
                <div className="absolute inset-0 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-2xl" />
              </div>
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-lg bg-orange-500/10 dark:bg-orange-500/20 flex items-center justify-center">
                  <PieChart className="h-3.5 w-3.5 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">Expense Breakdown</h3>
              </div>

              <div className="space-y-3">
                {expenseBreakdown.map((expense) => (
                  <div key={expense.category} className="space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900 dark:text-gray-100 text-xs">{expense.category}</span>
                      <div className="text-right">
                        <span className="font-bold text-[#F5793B] text-xs">{expense.percentage}%</span>
                        <p className="text-[10px] text-gray-600 dark:text-gray-400">{expense.amount}</p>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="h-2 rounded-full bg-[#F5793B] transition-all duration-500 hover:scale-105"
                        style={{ width: `${expense.percentage}%`, opacity: 1 - (expense.percentage / 100) * 0.3 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Performance Summary */}
          <div className="relative rounded-2xl shadow-md p-3 overflow-hidden group hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-[#F5793B] to-[#ff8c42] text-white">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center">
                  <Target className="h-3.5 w-3.5 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-white">Performance Summary</h3>
              </div>

              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <div className="text-center p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                    <p className="text-lg font-bold">94.2%</p>
                    <p className="text-[10px] text-white/80">Target Achievement</p>
                  </div>
                  <div className="text-center p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                    <p className="text-lg font-bold">Rs. 2.1M</p>
                    <p className="text-[10px] text-white/80">Total Revenue</p>
                  </div>
                </div>
                <div className="text-center p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                  <p className="text-sm font-semibold">Next Quarter Projection</p>
                  <p className="text-[10px] text-white/80">Expected growth of 15-18% based on current trends</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}