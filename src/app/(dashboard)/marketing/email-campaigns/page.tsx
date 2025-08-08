"use client";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "lucide-react";
import { Pacifico } from "next/font/google";
import {
  Mail,
  MailOpen,
  MousePointerClick,
  Ban,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
});

const chartData = [
  { name: "Jul 10", open: 47.5, click: 9 },
  { name: "Jul 18", open: 62.1, click: 10 },
  { name: "Jul 22", open: 58.3, click: 12 },
];

export default function EmailCampaignsPage() {
  return (
    <div className="min-h-screen flex flex-col p-4 text-gray-800 dark:text-gray-200 bg-white dark:bg-[#0F0F1B] relative z-10 overflow-auto">
      
      {/* Top Nav Bar */}
      <div className="relative rounded-xl p-2 shadow-md mb-3 flex justify-between items-center overflow-hidden">
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
            Marketing Email Campaigns
          </h1>
        </div>

        <div className="relative bg-white/50 dark:bg-gray-800/50 text-black dark:text-white font-mono px-2 py-1 rounded-xl text-xs z-10 flex items-center space-x-1">
          <Calendar className="w-4 h-4" />
          <span>Live Dashboard</span>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4 text-sm">
        {[
          {
            title: "Campaigns Sent",
            value: "134",
            icon: Mail,
            change: "+4.2%",
            color: "green",
          },
          {
            title: "Open Rate",
            value: "61.5%",
            icon: MailOpen,
            change: "+2.7%",
            color: "green",
          },
          {
            title: "Click Rate",
            value: "14.8%",
            icon: MousePointerClick,
            change: "+1.3%",
            color: "yellow",
          },
          {
            title: "Unsubscribed",
            value: "9",
            icon: Ban,
            change: "+0.9%",
            color: "red",
          },
        ].map((item) => (
          <Card
            key={item.title}
            className="relative p-3 rounded-2xl shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300 bg-white dark:bg-black/40 border border-gray-200 dark:border-white/10"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/10 to-blue-500/10 group-hover:from-orange-500/30 group-hover:to-blue-500/30 transition-all duration-500" />
            <div className="relative z-10 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#F5793B]/10 flex items-center justify-center">
                <item.icon className="w-4 h-4 text-[#F5793B]" />
              </div>
              <div className="flex-1">
                <h2 className="text-xs font-semibold mb-0.5 text-gray-700 dark:text-gray-300">
                  {item.title}
                </h2>
                <div className="text-lg font-bold text-[#F5793B] group-hover:scale-105 transition-transform duration-300">
                  {item.value}
                </div>
                <p className="text-[10px] mt-0.5 text-gray-600 dark:text-gray-400">
                  <span
                    className={cn(
                      "font-medium",
                      item.color === "green"
                        ? "text-green-600 dark:text-green-400"
                        : item.color === "yellow"
                        ? "text-yellow-600 dark:text-yellow-400"
                        : "text-red-600 dark:text-red-400"
                    )}
                  >
                    {item.change}
                  </span>{" "}
                  from last week
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Create Button */}
      <div className="flex justify-end mb-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-[#F5793B] text-white hover:bg-[#d8651f] transition-all shadow-md rounded-xl px-4 py-2 text-sm font-semibold">
              Create New Campaign
            </Button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Create New Campaign</DialogTitle>
            </DialogHeader>

            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Campaign Name
                </Label>
                <Input id="name" placeholder="Enter campaign name" className="col-span-3" />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="subject" className="text-right">
                  Subject Line
                </Label>
                <Input id="subject" placeholder="Email subject line" className="col-span-3" />
              </div>

              <div className="grid grid-cols-4 items-start gap-4">
                <Label htmlFor="message" className="text-right pt-2">
                  Message
                </Label>
                <Textarea id="message" placeholder="Write your campaign content..." className="col-span-3" />
              </div>
            </div>

            <DialogFooter>
              <Button type="submit" className="bg-[#F5793B] text-white hover:bg-[#d8651f]">
                Submit Campaign
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Campaign Table + Summary + Chart */}
      <div className="space-y-4 text-sm">
        
        {/* Recent Campaigns Table */}
        <Card className="rounded-xl shadow-md bg-white dark:bg-[#1A1A2E] border border-gray-200 dark:border-white/10">
          <CardHeader>
            <CardTitle className="text-sm font-bold">📬 Recent Campaigns</CardTitle>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-sm font-semibold">Name</TableHead>
                  <TableHead className="text-sm font-semibold">Sent Date</TableHead>
                  <TableHead className="text-sm font-semibold">Open Rate</TableHead>
                  <TableHead className="text-sm font-semibold">Click Rate</TableHead>
                  <TableHead className="text-sm font-semibold">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  {
                    name: "Winter Sale 2025",
                    date: "22 Jul 25",
                    open: "58.3%",
                    click: "12%",
                    status: "Sent",
                    statusColor: "text-green-600",
                  },
                  {
                    name: "Promo Alpha",
                    date: "18 Jul 25",
                    open: "62.1%",
                    click: "10%",
                    status: "Scheduled",
                    statusColor: "text-yellow-600",
                  },
                  {
                    name: "July Flash Deal",
                    date: "10 Jul 25",
                    open: "47.5%",
                    click: "9%",
                    status: "Draft",
                    statusColor: "text-gray-500",
                  },
                ].map((row) => (
                  <TableRow
                    key={row.name}
                    className="hover:bg-orange-50 dark:hover:bg-orange-900/10 transition-all"
                  >
                    <TableCell className="text-sm">{row.name}</TableCell>
                    <TableCell className="text-sm">{row.date}</TableCell>
                    <TableCell className="text-sm">{row.open}</TableCell>
                    <TableCell className="text-sm">{row.click}</TableCell>
                    <TableCell className={cn("font-semibold text-sm", row.statusColor)}>
                      {row.status}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Summary */}
        <Card className="rounded-xl shadow-md bg-white dark:bg-[#1A1A2E] border border-gray-200 dark:border-white/10">
          <CardHeader>
            <CardTitle className="text-sm font-bold">📊 Campaign Performance Summary</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <p className="font-semibold">Most Engaged:</p>
              <p className="text-[#F5793B] dark:text-[#FFA559]">Promo Alpha</p>
            </div>
            <div>
              <p className="font-semibold">Best Subject Line:</p>
              <p className="italic">“🔥 Don’t Miss This Deal!”</p>
            </div>
            <div>
              <p className="font-semibold">Bounce Rate:</p>
              <p className="text-red-600 dark:text-red-400">2.3%</p>
            </div>
            <div>
              <p className="font-semibold">Spam Reports:</p>
              <p className="text-yellow-600 dark:text-yellow-400">1</p>
            </div>
          </CardContent>
        </Card>

        {/* Chart */}
        <Card className="rounded-xl shadow-md bg-white dark:bg-[#1A1A2E] border border-gray-200 dark:border-white/10">
          <CardHeader>
            <CardTitle className="text-sm font-bold">📈 Analytics</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" stroke="#8884d8" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="open"
                  stroke="#F5793B"
                  strokeWidth={2}
                  name="Open Rate (%)"
                />
                <Line
                  type="monotone"
                  dataKey="click"
                  stroke="#2C88FF"
                  strokeWidth={2}
                  name="Click Rate (%)"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
