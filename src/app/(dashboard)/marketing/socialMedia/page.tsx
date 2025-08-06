"use client";

import { Pacifico } from "next/font/google";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Facebook,
  Instagram,
  Users,
  MessageCircle,
  ThumbsUp,
  CalendarPlus,
} from "lucide-react";
import { Calendar } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { cn } from "@/lib/utils"; // Assuming this is available in your utils

const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });

const data = [
  { name: "Mon", engagement: 400 },
  { name: "Tue", engagement: 300 },
  { name: "Wed", engagement: 500 },
  { name: "Thu", engagement: 600 },
  { name: "Fri", engagement: 800 },
  { name: "Sat", engagement: 300 },
  { name: "Sun", engagement: 400 },
];

export default function SocialMediaPage() {
  return (
    <div className="p-6 space-y-6 text-gray-800 dark:text-gray-200">
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
                        Marketing Social Media
                      </h1>
                    </div>
            
                    <div className="relative bg-white/50 dark:bg-gray-800/50 text-black dark:text-white font-mono px-2 py-1 rounded-xl text-xs z-10 flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                   <span>Live Dashboard</span>
                    </div>
            
                  </div>
      
      {/* Overview KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        {[
          { title: "Total Posts", value: "32", change: "+5.4%", icon: CalendarPlus },
          { title: "Total Likes", value: "2,340", change: "+12.4%", icon: ThumbsUp },
          { title: "Total Comments", value: "1,230", change: "+8.9%", icon: MessageCircle },
          { title: "New Followers", value: "560", change: "+10.1%", icon: Users },
        ].map((item) => (
          <Card
            key={item.title}
            className="relative p-3 rounded-2xl shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300"
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
                  <span className="text-green-600 dark:text-green-400 font-medium">
                    {item.change}
                  </span>{" "}
                  from last week
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Action Button */}
      <Button className="bg-[#F5793B] hover:bg-orange-600 text-white text-sm rounded-xl px-4 py-2">
        + Schedule New Post
      </Button>

      {/* Recent Posts Table */}
      <Card className="border border-[#F5793B] rounded-2xl shadow-md overflow-hidden">
        <CardHeader>
          <CardTitle className="text-base font-semibold">Recent Posts</CardTitle>
        </CardHeader>
        <CardContent className="p-3">
          <Table className="text-sm">
            <TableHeader>
              <TableRow className="transition-colors hover:bg-orange-100 dark:hover:bg-orange-900">
                {["Platform", "Date", "Caption", "Likes", "Comments", "Status"].map((head) => (
                  <TableHead key={head}>{head}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  platform: "Facebook",
                  icon: Facebook,
                  date: "23 Jul 2025",
                  caption: "Summer Sale Launch",
                  likes: 230,
                  comments: 34,
                  status: "Posted",
                },
                {
                  platform: "Instagram",
                  icon: Instagram,
                  date: "22 Jul 2025",
                  caption: "Behind the scenes",
                  likes: 190,
                  comments: 41,
                  status: "Scheduled",
                },
              ].map((row, idx) => (
                <TableRow
                  key={idx}
                  className="transition-colors hover:bg-orange-100 dark:hover:bg-orange-900"
                >
                  <TableCell className="flex items-center gap-2">
                    <row.icon
                      className={`w-4 h-4 ${
                        row.platform === "Facebook" ? "text-blue-600" : "text-pink-500"
                      }`}
                    />
                    {row.platform}
                  </TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.caption}</TableCell>
                  <TableCell>{row.likes}</TableCell>
                  <TableCell>{row.comments}</TableCell>
                  <TableCell>{row.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Platform Summary */}
      <Card className="border border-[#F5793B] rounded-2xl shadow-md overflow-hidden">
        <CardHeader>
          <CardTitle className="text-base font-semibold">Platform Performance Summary</CardTitle>
        </CardHeader>
        <CardContent className="p-3">
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
            <li>Most Liked Post: &quot;Summer Sale Launch&quot; (230 Likes)</li>
            <li>Highest Engagement: Instagram</li>
            <li>Most Comments: &quot;Behind the scenes&quot; (41 Comments)</li>
          </ul>
        </CardContent>
      </Card>

      {/* Engagement Chart */}
      <Card className="border border-[#F5793B] rounded-2xl shadow-md overflow-hidden">
        <CardHeader>
          <CardTitle className="text-base font-semibold">Engagement Chart</CardTitle>
        </CardHeader>
        <CardContent className="p-2">
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
              <XAxis dataKey="name" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip contentStyle={{ borderRadius: 6 }} />
              <Line
                type="monotone"
                dataKey="engagement"
                stroke="#F5793B"
                strokeWidth={3}
                dot={{ r: 4, fill: "#F5793B" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
