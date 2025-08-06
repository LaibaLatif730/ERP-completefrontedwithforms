"use client";

import { Pacifico } from "next/font/google";
import { cn } from "@/lib/utils";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";
import { Calendar } from "lucide-react";
const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

const campaignData = [
  { name: "Jan", Impressions: 4000, Clicks: 2400, Conversions: 240 },
  { name: "Feb", Impressions: 3000, Clicks: 1398, Conversions: 180 },
  { name: "Mar", Impressions: 5000, Clicks: 3800, Conversions: 350 },
  { name: "Apr", Impressions: 4780, Clicks: 2908, Conversions: 310 },
  { name: "May", Impressions: 5890, Clicks: 3200, Conversions: 400 },
  { name: "Jun", Impressions: 6390, Clicks: 3600, Conversions: 430 },
  { name: "Jul", Impressions: 7490, Clicks: 4200, Conversions: 480 },
];

export default function MarketingReportsPage() {
  return (
    <div className="p-6 space-y-8 text-gray-800 dark:text-gray-200">
      {/* 🔶 Top Nav Bar with Title */}
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
                              Marketing Reports
                            </h1>
                          </div>
                  
                          <div className="relative bg-white/50 dark:bg-gray-800/50 text-black dark:text-white font-mono px-2 py-1 rounded-xl text-xs z-10 flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                         <span>Live Dashboard</span>
                          </div>
                  
                        </div>
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          { title: "Total Campaigns", value: "47", change: "+8.6%" },
          { title: "Avg Open Rate", value: "43.2%", change: "+3.2%" },
          { title: "Avg CTR", value: "9.1%", change: "+1.9%" },
          { title: "Total Conversions", value: "1,254", change: "+5.4%" },
        ].map((item, i) => (
          <Card
            key={i}
            className="relative p-3 rounded-2xl shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300 border border-[#F5793B]"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/10 to-blue-500/10 group-hover:from-orange-500/30 group-hover:to-blue-500/30 transition-all duration-500" />
            <div className="relative z-10">
              <h2 className="text-sm font-semibold mb-0.5 text-gray-700 dark:text-gray-300">
                {item.title}
              </h2>
              <div className="text-xl font-bold text-[#F5793B] group-hover:scale-105 transition-transform duration-300">
                {item.value}
              </div>
              <p className="text-xs mt-0.5 text-gray-600 dark:text-gray-400">
                <span className="text-green-600 dark:text-green-400 font-medium">
                  {item.change}
                </span>{" "}
                from last month
              </p>
            </div>
          </Card>
        ))}
      </div>

      {/* Download Buttons */}
      <div className="flex gap-4">
        <Button className="bg-[#F5793B] hover:bg-orange-600 text-white text-sm rounded-xl px-4 py-2">
          <Download className="mr-2 h-4 w-4" />
          Download Monthly Report
        </Button>
        <Button className="bg-[#F5793B] hover:bg-orange-600 text-white text-sm rounded-xl px-4 py-2">
          <Download className="mr-2 h-4 w-4" />
          Download Campaign Report
        </Button>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-wrap gap-4 items-center">
        <Select>
          <SelectTrigger className="w-[180px] text-sm border border-[#F5793B]">
            <SelectValue placeholder="Filter by Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="campaign">Campaign</SelectItem>
            <SelectItem value="email">Email</SelectItem>
            <SelectItem value="social">Social</SelectItem>
          </SelectContent>
        </Select>
        <Input
          type="text"
          placeholder="Search reports..."
          className="w-64 text-sm border border-[#F5793B]"
        />
      </div>

      {/* Reports Table */}
      <Card className="border border-[#F5793B] rounded-2xl shadow-md">
        <CardHeader>
          <CardTitle className="text-base font-semibold text-[#F5793B]">
            Generated Reports
          </CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-auto p-0">
          <Table className="w-full text-sm">
            <TableHeader>
              <TableRow className="bg-gray-100 dark:bg-gray-800">
                <TableHead>Report Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Created On</TableHead>
                <TableHead>Format</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-orange-100 transition-colors">
                <TableCell>July Campaign Stats</TableCell>
                <TableCell>Campaign Summary</TableCell>
                <TableCell>25 Jul 2025</TableCell>
                <TableCell>PDF</TableCell>
                <TableCell className="text-green-600 font-semibold">Ready</TableCell>
                <TableCell>
                  <Button size="sm" variant="outline" className="text-sm">
                    download
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-orange-100 transition-colors">
                <TableCell>Social Overview</TableCell>
                <TableCell>Social Media</TableCell>
                <TableCell>22 Jul 2025</TableCell>
                <TableCell>XLSX</TableCell>
                <TableCell className="text-yellow-600 font-semibold">Pending</TableCell>
                <TableCell>
                  <Button size="sm" variant="outline" className="text-sm">
                     Wait
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Chart Section */}
      <Card className="border border-[#F5793B] rounded-2xl shadow-md">
        <CardHeader>
          <CardTitle className="text-base font-semibold text-[#F5793B]">
            Campaign Analytics (Monthly Overview)
          </CardTitle>
        </CardHeader>
        <CardContent className="p-2">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={campaignData}
              margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="Impressions" fill="#F5793B" />
              <Bar dataKey="Clicks" fill="#83b6f4" />
              <Bar dataKey="Conversions" fill="#66cc99" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
