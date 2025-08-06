"use client";

// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { RefreshCw, Download } from "lucide-react"; // ✅ For icons used in buttons
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
// import { Separator } from "@/components/ui/separator";
// import ThemeToggleButton from "@/components/ui/theme-toggle-button";
import { cn } from "@/lib/utils";
import { Pacifico } from "next/font/google";
import {


  Calendar,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Users,
  Package,

  Clock,


  BarChart3,

} from "lucide-react";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
});

const reportSummary = {
  period: "July 2025",
  generatedOn: "July 24, 2025",
  totalRevenue: "Rs 1,25,000",
  totalExpenses: "Rs 88,000",
  netProfit: "Rs 37,000",
  profitMargin: "29.6%"
};

const monthlyComparison = [
  { month: "July 2025", revenue: 125000, expenses: 88000, profit: 37000, margin: 29.6 },
  { month: "June 2025", revenue: 112000, expenses: 94000, profit: 18000, margin: 16.1 },
  { month: "May 2025", revenue: 108000, expenses: 85000, profit: 23000, margin: 21.3 },
  { month: "April 2025", revenue: 95000, expenses: 78000, profit: 17000, margin: 17.9 },
];

const detailedBreakdown = {
  sales: [
    { category: "Steel Products", amount: 75000, percentage: 60, trend: "up" },
    { category: "Hardware", amount: 30000, percentage: 24, trend: "up" },
    { category: "Tools", amount: 20000, percentage: 16, trend: "down" }
  ],
  expenses: [
    { category: "Raw Materials", amount: 45000, percentage: 51.1, trend: "up" },
    { category: "Labor", amount: 25000, percentage: 28.4, trend: "stable" },
    { category: "Utilities", amount: 10000, percentage: 11.4, trend: "down" },
    { category: "Marketing", amount: 8000, percentage: 9.1, trend: "up" }
  ]
};

const outstandingItems = {
  receivables: [
    { customer: "Alpha Traders", amount: 45000, dueDate: "July 27, 2025", status: "overdue" },
    { customer: "Beta Stores", amount: 25000, dueDate: "July 30, 2025", status: "due" },
    { customer: "Gamma Industries", amount: 15000, dueDate: "Aug 5, 2025", status: "upcoming" }
  ],
  payables: [
    { supplier: "Metal Supplies Inc.", amount: 32000, dueDate: "July 29, 2025", status: "due" },
    { supplier: "Tool Distributors", amount: 18000, dueDate: "Aug 2, 2025", status: "upcoming" }
  ]
};

const cashFlowAnalysis = [
  { type: "Opening Balance", amount: 85000, color: "text-blue-600" },
  { type: "Total Inflows", amount: 125000, color: "text-green-600" },
  { type: "Total Outflows", amount: -88000, color: "text-red-600" },
  { type: "Closing Balance", amount: 122000, color: "text-blue-600" }
];

export default function ReportsPage() {
  return (
    <div className="p-4 text-gray-800 dark:text-gray-200 relative z-10">
      {/* Welcome Block - Reports Style */}
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
            Financial Reports Dashboard
          </h1>
          <p className="text-xs text-gray-700 dark:text-gray-300 relative">
            Comprehensive financial analysis and reporting with detailed insights and performance metrics.
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
                <span>{reportSummary.period}</span>
              </div>
              <div className="text-sm font-medium text-gray-800 dark:text-gray-200 group-hover:scale-105 transition-transform duration-300">Period</div>
            </div>
            <div className="h-8 w-[1px] bg-gray-200 dark:bg-gray-700"></div>
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-1 text-[10px] text-gray-600 dark:text-gray-400">
                <Clock className="w-3 h-3" />
                <span>Generated</span>
              </div>
              <div className="text-sm font-medium text-gray-800 dark:text-gray-200">{reportSummary.generatedOn}</div>
            </div>
          </div>
        </div>
      </div>
       <div className="flex flex-wrap items-center gap-5 mb-4">
            <Button variant="default" className="bg-orange-500 hover:bg-orange-600 text-white">
              <Calendar className="w-4 h-4 mr-2" />
              Select Date
            </Button>
            <Button variant="default" className="bg-orange-500 hover:bg-orange-600 text-white">
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh
            </Button>
            <Button variant="default" className="bg-orange-500 hover:bg-orange-600 text-white">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>

      {/* Executive Summary - Dashboard Style */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
        {[
          {
            label: "Total Revenue",
            value: reportSummary.totalRevenue,
            change: "+12.5%",
            color: "from-green-500 to-green-600 dark:from-green-400 dark:to-green-500",
            icon: <DollarSign className="w-3.5 h-3.5" />,
            bgColor: "bg-green-500/10 dark:bg-green-500/20"
          },
          {
            label: "Total Expenses",
            value: reportSummary.totalExpenses,
            change: "-3.2%",
            color: "from-red-500 to-red-600 dark:from-red-400 dark:to-red-500",
            icon: <TrendingDown className="w-3.5 h-3.5" />,
            bgColor: "bg-red-500/10 dark:bg-red-500/20"
          },
          {
            label: "Net Profit",
            value: reportSummary.netProfit,
            change: "+18.7%",
            color: "from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500",
            icon: <TrendingUp className="w-3.5 h-3.5" />,
            bgColor: "bg-blue-500/10 dark:bg-blue-500/20"
          },
          {
            label: "Profit Margin",
            value: reportSummary.profitMargin,
            change: "+2.1%",
            color: "from-orange-500 to-orange-600 dark:from-orange-400 dark:to-orange-500",
            icon: <Package className="w-3.5 h-3.5" />,
            bgColor: "bg-orange-500/10 dark:bg-orange-500/20"
          },
        ].map((stat) => (
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
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(249,115,22,0.4),transparent_70%)] group-hover:opacity-75 transition-opacity duration-500" />
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

      {/* Monthly Performance Comparison - Dashboard Style */}
      <div className="relative rounded-2xl shadow-md p-3 mb-4 overflow-hidden group hover:shadow-lg transition-all duration-300">
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
              <BarChart3 className="h-3.5 w-3.5 text-orange-600 dark:text-orange-400" />
            </div>
            <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:scale-[1.02] transition-transform duration-300">
              Monthly Performance Comparison
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead className="text-gray-600 dark:text-gray-400">
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-2 px-2 font-semibold">Month</th>
                  <th className="text-right py-2 px-2 font-semibold">Revenue</th>
                  <th className="text-right py-2 px-2 font-semibold">Expenses</th>
                  <th className="text-right py-2 px-2 font-semibold">Profit</th>
                  <th className="text-right py-2 px-2 font-semibold">Margin %</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {monthlyComparison.map((month, index) => (
                  <tr key={month.month} className={`hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors ${index === 0 ? 'bg-orange-50/50 dark:bg-orange-900/10' : ''}`}>
                    <td className="py-2 px-2 font-medium text-gray-900 dark:text-gray-100">{month.month}</td>
                    <td className="py-2 px-2 text-right font-semibold text-green-600 dark:text-green-400">Rs {month.revenue.toLocaleString()}</td>
                    <td className="py-2 px-2 text-right font-semibold text-red-600 dark:text-red-400">Rs {month.expenses.toLocaleString()}</td>
                    <td className="py-2 px-2 text-right font-semibold text-blue-600 dark:text-blue-400">Rs {month.profit.toLocaleString()}</td>
                    <td className="py-2 px-2 text-right font-semibold text-[#F5793B]">{month.margin}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-5 mb-4">
            <Button variant="default" className="bg-orange-500 hover:bg-orange-600 text-white">
              <RefreshCw className="w-4 h-4 mr-2" />
              Compare Periods
            </Button>
            <Button variant="default" className="bg-orange-500 hover:bg-orange-600 text-white">
              <Download className="w-4 h-4 mr-2" />
              View Income Statement
            </Button>
            <Button variant="default" className="bg-orange-500 hover:bg-orange-600 text-white">
              View Balanced Sheet
            </Button>
            <Button variant="default" className="bg-orange-500 hover:bg-orange-600 text-white">
              View Cash Flow
            </Button>
                </div>
      {/* Detailed Breakdown - Dashboard Style */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-4">
        {/* Sales Breakdown */}
        <div className="relative rounded-2xl shadow-md p-3 overflow-hidden group hover:shadow-lg transition-all duration-300">
          {/* Enhanced Glass effect */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-green-500/5 dark:from-green-500/10 dark:via-transparent dark:to-green-500/10 rounded-2xl blur-xl animate-pulse-slow" />
            <div className="absolute inset-0 p-[1px] rounded-2xl bg-gradient-to-br from-green-500/20 via-white/10 to-green-500/20 dark:from-green-500/20 dark:via-white/5 dark:to-green-500/20 group-hover:from-green-500/30 group-hover:to-green-500/30 transition-all duration-500">
              <div className="absolute inset-0 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-2xl" />
            </div>
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-green-500/10 dark:bg-green-500/20 flex items-center justify-center">
                <TrendingUp className="h-3.5 w-3.5 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">Sales Breakdown</h3>
            </div>

            <div className="space-y-2">
              {detailedBreakdown.sales.map((item) => (
                <div key={item.category} className="p-2 bg-gray-50 dark:bg-gray-800/50 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-gray-900 dark:text-gray-100 text-xs">{item.category}</span>
                    <div className="flex items-center gap-1">
                      <span className="font-bold text-green-600 dark:text-green-400 text-xs">Rs {item.amount.toLocaleString()}</span>
                      {item.trend === "up" ? (
                        <TrendingUp className="w-3 h-3 text-green-500" />
                      ) : (
                        <TrendingDown className="w-3 h-3 text-red-500" />
                      )}
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mb-1">
                    <div
                      className="bg-green-500 h-1.5 rounded-full transition-all duration-500"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                  <span className="text-[10px] text-gray-600 dark:text-gray-400">{item.percentage}% of total sales</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Expense Breakdown */}
        <div className="relative rounded-2xl shadow-md p-3 overflow-hidden group hover:shadow-lg transition-all duration-300">
          {/* Enhanced Glass effect */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-red-500/5 dark:from-red-500/10 dark:via-transparent dark:to-red-500/10 rounded-2xl blur-xl animate-pulse-slow" />
            <div className="absolute inset-0 p-[1px] rounded-2xl bg-gradient-to-br from-red-500/20 via-white/10 to-red-500/20 dark:from-red-500/20 dark:via-white/5 dark:to-red-500/20 group-hover:from-red-500/30 group-hover:to-red-500/30 transition-all duration-500">
              <div className="absolute inset-0 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-2xl" />
            </div>
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-red-500/10 dark:bg-red-500/20 flex items-center justify-center">
                <TrendingDown className="h-3.5 w-3.5 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">Expense Breakdown</h3>
            </div>

            <div className="space-y-2">
              {detailedBreakdown.expenses.map((item) => (
                <div key={item.category} className="p-2 bg-gray-50 dark:bg-gray-800/50 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-gray-900 dark:text-gray-100 text-xs">{item.category}</span>
                    <div className="flex items-center gap-1">
                      <span className="font-bold text-red-600 dark:text-red-400 text-xs">Rs {item.amount.toLocaleString()}</span>
                      {item.trend === "up" ? (
                        <TrendingUp className="w-3 h-3 text-red-500" />
                      ) : item.trend === "down" ? (
                        <TrendingDown className="w-3 h-3 text-green-500" />
                      ) : (
                        <div className="w-3 h-3 bg-gray-400 rounded-full" />
                      )}
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mb-1">
                    <div
                      className="bg-red-500 h-1.5 rounded-full transition-all duration-500"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                  <span className="text-[10px] text-gray-600 dark:text-gray-400">{item.percentage}% of total expenses</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Outstanding Items & Cash Flow - Dashboard Style */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mb-4">
        {/* Receivables */}
        <div className="relative rounded-2xl shadow-md p-3 overflow-hidden group hover:shadow-lg transition-all duration-300">
          {/* Enhanced Glass effect */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-blue-500/5 dark:from-blue-500/10 dark:via-transparent dark:to-blue-500/10 rounded-2xl blur-xl animate-pulse-slow" />
            <div className="absolute inset-0 p-[1px] rounded-2xl bg-gradient-to-br from-blue-500/20 via-white/10 to-blue-500/20 dark:from-blue-500/20 dark:via-white/5 dark:to-blue-500/20 group-hover:from-blue-500/30 group-hover:to-blue-500/30 transition-all duration-500">
              <div className="absolute inset-0 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-2xl" />
            </div>
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center">
                <Users className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">Receivables</h3>
            </div>

            <div className="space-y-2">
              {outstandingItems.receivables.map((item) => (
                <div key={item.customer} className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800/50 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-gray-100 text-xs">{item.customer}</p>
                    <p className="text-[10px] text-gray-600 dark:text-gray-400">Due: {item.dueDate}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-blue-600 dark:text-blue-400 text-xs">Rs {item.amount.toLocaleString()}</p>
                    <Badge
                      variant={item.status === "overdue" ? "destructive" : item.status === "due" ? "default" : "secondary"}
                      className="mt-0.5 text-[8px] px-1 py-0"
                    >
                      {item.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Payables */}
        <div className="relative rounded-2xl shadow-md p-3 overflow-hidden group hover:shadow-lg transition-all duration-300">
          {/* Enhanced Glass effect */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-orange-500/5 dark:from-orange-500/10 dark:via-transparent dark:to-orange-500/10 rounded-2xl blur-xl animate-pulse-slow" />
            <div className="absolute inset-0 p-[1px] rounded-2xl bg-gradient-to-br from-orange-500/20 via-white/10 to-orange-500/20 dark:from-orange-500/20 dark:via-white/5 dark:to-orange-500/20 group-hover:from-orange-500/30 group-hover:to-orange-500/30 transition-all duration-500">
              <div className="absolute inset-0 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-2xl" />
            </div>
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-orange-500/10 dark:bg-orange-500/20 flex items-center justify-center">
                <Package className="h-3.5 w-3.5 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">Payables</h3>
            </div>

            <div className="space-y-2">
              {outstandingItems.payables.map((item) => (
                <div key={item.supplier} className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800/50 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-gray-100 text-xs">{item.supplier}</p>
                    <p className="text-[10px] text-gray-600 dark:text-gray-400">Due: {item.dueDate}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-[#F5793B] text-xs">Rs {item.amount.toLocaleString()}</p>
                    <Badge
                      variant={item.status === "due" ? "default" : "secondary"}
                      className="mt-0.5 text-[8px] px-1 py-0"
                    >
                      {item.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cash Flow Analysis */}
        <div className="relative rounded-2xl shadow-md p-3 overflow-hidden group hover:shadow-lg transition-all duration-300">
          {/* Enhanced Glass effect */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-transparent to-indigo-500/5 dark:from-indigo-500/10 dark:via-transparent dark:to-indigo-500/10 rounded-2xl blur-xl animate-pulse-slow" />
            <div className="absolute inset-0 p-[1px] rounded-2xl bg-gradient-to-br from-indigo-500/20 via-white/10 to-indigo-500/20 dark:from-indigo-500/20 dark:via-white/5 dark:to-indigo-500/20 group-hover:from-indigo-500/30 group-hover:to-indigo-500/30 transition-all duration-500">
              <div className="absolute inset-0 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-2xl" />
            </div>
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-indigo-500/10 dark:bg-indigo-500/20 flex items-center justify-center">
                <BarChart3 className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">Cash Flow</h3>
            </div>

            <div className="space-y-2">
              {cashFlowAnalysis.map((item) => (
                <div key={item.type} className="p-2 bg-gray-50 dark:bg-gray-800/50 rounded-lg text-center hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors">
                  <p className="text-[10px] text-gray-600 dark:text-gray-400 mb-1">{item.type}</p>
                  <p className={`text-sm font-bold ${item.type === "Opening Balance" || item.type === "Closing Balance"
                      ? "text-blue-600 dark:text-blue-400"
                      : item.type === "Total Inflows"
                        ? "text-green-600 dark:text-green-400"
                        : "text-red-600 dark:text-red-400"
                    }`}>
                    Rs {Math.abs(item.amount).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  
  );
}