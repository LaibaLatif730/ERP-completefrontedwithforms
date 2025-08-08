"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import {
  PlusCircle,
  FileText,
  DollarSign,
  UserPlus,
  CornerDownLeft,
  CalendarDays,
  AlertTriangle,
  Calendar,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Pacifico } from "next/font/google";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });

const kpis = [
  { label: "Total Sales This Month", value: "$105,200", icon: DollarSign },
  { label: "Outstanding Receivables", value: "$15,340", icon: AlertTriangle },
  { label: "Total Revenue", value: "$450,000", icon: FileText },
  { label: "Top-Selling Product", value: "Lathe Machine", icon: CalendarDays },
  { label: "Pending Invoices", value: "12", icon: FileText },
];

const salesData = [
  { month: "Jan", ProductA: 4000, ProductB: 2400 },
  { month: "Feb", ProductA: 3000, ProductB: 1398 },
  { month: "Mar", ProductA: 2000, ProductB: 9800 },
  { month: "Apr", ProductA: 2780, ProductB: 3908 },
  { month: "May", ProductA: 1890, ProductB: 4800 },
  { month: "Jun", ProductA: 2390, ProductB: 3800 },
  { month: "Jul", ProductA: 3490, ProductB: 4300 },
];

const actions = [
  { label: "Add New Invoice", icon: PlusCircle },
  { label: "Record Payment", icon: DollarSign },
  { label: "Generate Report", icon: FileText },
  { label: "New Customer", icon: UserPlus },
  { label: "Request Refund", icon: CornerDownLeft },
];

export default function SalesFinanceWorkspace() {
  const [openForm, setOpenForm] = useState<string | null>(null);

  const renderForm = () => {
    switch (openForm) {
      case "Add New Invoice":
        return (
          <form className="space-y-4 p-4">
            <h2 className="font-semibold text-lg">Add New Invoice</h2>
            <input placeholder="Invoice Number" className="w-full p-2 border rounded" />
            <input placeholder="Client Name" className="w-full p-2 border rounded" />
            <input placeholder="Email" className="w-full p-2 border rounded" />
            <input placeholder=" Invoice Date" type="date" className="w-full p-2 border rounded" />
            <input placeholder="Amount" type="number" className="w-full p-2 border rounded" />
            <input placeholder="Any instruction" className="w-full p-2 border rounded" />
            <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded">Submit</button>
          </form>
        );
      case "Record Payment":
        return (
          <form className="space-y-4 p-4">
            <h2 className="font-semibold text-lg">Record Payment</h2>
            <input placeholder="Invoice Number" className="w-full p-2 border rounded" />
            <input placeholder="Client Name" className="w-full p-2 border rounded" />
            <input placeholder="Payment Amount" type="number" className="w-full p-2 border rounded" />
            <input placeholder="Payment Method" className="w-full p-2 border rounded" />
            <input placeholder="Date" type="date" className="w-full p-2 border rounded" />
            <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded">Record</button>
          </form>
        );
      case "Generate Report":
        return (
          <form className="space-y-4 p-4">
            <h2 className="font-semibold text-lg">Generate Report</h2>
            <select className="w-full p-2 border rounded">
              <option>Monthly</option>
              <option>Quarterly</option>
              <option>Yearly</option>
            </select>
            <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded">Generate</button>
          </form>
        );
      case "New Customer":
        return (
          <form className="space-y-4 p-4">
            <h2 className="font-semibold text-lg">Add New Customer</h2>
            <input placeholder="Client Name" className="w-full p-2 border rounded" />
            <input placeholder="Email" type="email" className="w-full p-2 border rounded" />
            <input placeholder="Phone Number" className="w-full p-2 border rounded" />
            <input placeholder="Client Address" className="w-full p-2 border rounded" />
            <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded">Save</button>
          </form>
        );
      case "Request Refund":
        return (
          <form className="space-y-4 p-4">
            <h2 className="font-semibold text-lg">Request Refund</h2>
            <input placeholder="Invoice Number" className="w-full p-2 border rounded" />
            <input placeholder="Client Name" className="w-full p-2 border rounded" />
            <input placeholder="Refund Ammount" className="w-full p-2 border rounded" />
            <input placeholder="Refund Method" className="w-full p-2 border rounded" />
            <input placeholder="Date of request" type="date" className="w-full p-2 border rounded" />
            <input placeholder="Reason for Refund" className="w-full p-2 border rounded" />
            <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded">Request</button>
          </form>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-6 space-y-6 bg-gray-50 dark:bg-black text-black dark:text-white min-h-screen text-sm">
      {/* 🔶 Title Bar */}
      <div className="relative rounded-xl p-4 shadow-md mb-3 flex justify-between items-center overflow-hidden">
        <div className="absolute inset-0 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-orange-500/5 dark:from-orange-500/10 dark:via-transparent dark:to-orange-500/10 rounded-xl blur-xl animate-pulse" />
          <div className="absolute inset-0 p-[1px] rounded-xl bg-gradient-to-br from-orange-500/30 via-white/20 to-blue-500/30 dark:from-orange-500/20 dark:via-white/10 dark:to-blue-500/20">
            <div className="absolute inset-0 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-xl" />
          </div>
        </div>
        <div className="relative z-10 group">
          <h1
            className={cn(
              "text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 dark:from-orange-400 dark:via-orange-300 dark:to-orange-400",
              pacifico.className
            )}
          >
            Sales & Finance Workspace
          </h1>
        </div>
        <div className="relative bg-white/50 dark:bg-gray-800/50 text-black dark:text-white font-mono px-2 py-1 rounded-xl text-xs z-10 flex items-center space-x-1">
          <Calendar className="w-4 h-4" />
          <span>Live Dashboard</span>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {kpis.map((item, idx) => (
          <Card key={idx}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{item.label}</CardTitle>
              <item.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-sm font-bold">{item.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Action Buttons with Dialog */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {actions.map((item, idx) => (
          <Dialog.Root key={idx} open={openForm === item.label} onOpenChange={(open) => setOpenForm(open ? item.label : null)}>
            <Dialog.Trigger asChild>
              <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white shadow transition-all text-sm">
                <item.icon className="w-4 h-4" />
                {item.label}
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50" />
              <Dialog.Content className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-900 rounded-lg p-6 w-[90vw] max-w-md max-h-[90vh] overflow-auto shadow-lg">
                {renderForm()}
                <Dialog.Close asChild>
                  <button className="mt-4 px-4 py-2 bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded w-full">Close</button>
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        ))}
      </div>

      {/* Chart */}
      <Card className="p-4">
        <CardHeader>
          <CardTitle className="text-sm">Sales Overview (by Product)</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={salesData} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="ProductA" fill="#a5f3fc" />
              <Bar dataKey="ProductB" fill="#fcd34d" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Activity + Alerts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="p-4">
          <CardHeader>
            <CardTitle className="text-sm text-orange-500">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p>🧾 Invoice #1123 created for $3,200</p>
            <p>✅ Payment of $5,000 received from Client A</p>
            <p>❗ Payment failed for Invoice #1099</p>
          </CardContent>
        </Card>
        <Card className="p-4">
          <CardHeader>
            <CardTitle className="text-sm text-orange-500">Notifications & Alerts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p>⚠ Invoice #1080 is 30 days overdue</p>
            <p>📢 Quarterly Tax Filing due in 7 days</p>
            <p>📦 Low stock alert for Gearbox Assembly</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}