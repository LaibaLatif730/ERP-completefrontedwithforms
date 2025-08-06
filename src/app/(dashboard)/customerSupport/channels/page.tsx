"use client";

import React, { useState } from "react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Mail,
  MessageCircle,
  Phone,
  Smartphone,
  MessageSquare,
  BarChart,
  FileText,
  Bell,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils"; // ✅ fixed cn import
import { Pacifico } from "next/font/google"; // ✅ fixed pacifico import
import { Calendar } from "lucide-react";
const pacifico = Pacifico({ subsets: ["latin"], weight: "400" }); // ✅ font config

export default function ChannelsPage() {
  const initial = [
    {
      name: "Email",
      icon: <Mail className="w-3 h-3 text-[#F5793B]" />,
      enabled: true,
      agent: "support@erp.com",
      sla: "24",
      hours: "9am – 6pm",
      autoReply: "Thank you for contacting us!",
    },
    {
      name: "Live Chat",
      icon: <MessageCircle className="w-3 h-3 text-[#F5793B]" />,
      enabled: true,
      agent: "Tier‑1 Support",
      sla: "1",
      hours: "24/7",
      autoReply: "We’ll be with you shortly.",
    },
    {
      name: "Phone",
      icon: <Phone className="w-3 h-3 text-[#F5793B]" />,
      enabled: false,
      agent: "Customer Care",
      sla: "4",
      hours: "10am – 5pm",
      autoReply: "Please leave a voicemail—our team will call back.",
    },
    {
      name: "SMS",
      icon: <Smartphone className="w-3 h-3 text-[#F5793B]" />,
      enabled: false,
      agent: "SMS Support",
      sla: "12",
      hours: "9am – 6pm",
      autoReply: "We received your SMS—thank you.",
    },
    {
      name: "WhatsApp",
      icon: <MessageSquare className="w-3 h-3 text-[#F5793B]" />,
      enabled: true,
      agent: "WhatsApp Bot",
      sla: "2",
      hours: "24/7",
      autoReply: "Thank you for messaging us!",
    },
  ];

  const [channels, setChannels] = useState(initial);

  const toggle = (i: number) => {
    const arr = [...channels];
    arr[i].enabled = !arr[i].enabled;
    setChannels(arr);
  };

  const update = (i: number, field: 'agent' | 'sla' | 'hours' | 'autoReply', val: string) => {
    const arr = [...channels];
    arr[i][field] = val;
    setChannels(arr);
  };

  return (
    <div className="p-2 space-y-4 text-gray-800 dark:text-gray-200">
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
            Customer Support Channel
          </h1>
        </div>

        <div className="relative bg-white/50 dark:bg-gray-800/50 text-black dark:text-white font-mono px-2 py-1 rounded-xl text-xs z-10 flex items-center space-x-1">
          <Calendar className="w-4 h-4" />
          <span>Live Dashboard</span>
        </div>

      </div>
      {/* Channels Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {channels.map((c, i) => (
          <div
            key={c.name}
            className={`rounded-md p-2 shadow-sm border transition-all duration-300 hover:scale-[1.01] ${c.enabled ? "border-[#F5793B]" : "border-gray-300"
              } bg-white/20 backdrop-blur-md`}
          >
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-1">
                {c.icon}
                <h2 className="text-xs font-medium">{c.name}</h2>
              </div>
              <Switch
                checked={c.enabled}
                onCheckedChange={() => toggle(i)}
                className="scale-90 data-[state=checked]:bg-[#F5793B]"
              />
            </div>

            <div className="space-y-1">
              <div>
                <Label className="text-[10px]">Agent / Team</Label>
                <Input
                  className="text-[10px] h-6"
                  value={c.agent}
                  onChange={(e) => update(i, "agent", e.target.value)}
                />
              </div>
              <div>
                <Label className="text-[10px]">SLA (hrs)</Label>
                <Input
                  type="number"
                  className="text-[10px] h-6"
                  value={c.sla}
                  onChange={(e) => update(i, "sla", e.target.value)}
                />
              </div>
              <div>
                <Label className="text-[10px]">Working Hours</Label>
                <Input
                  className="text-[10px] h-6"
                  value={c.hours}
                  onChange={(e) => update(i, "hours", e.target.value)}
                />
              </div>
              <div>
                <Label className="text-[10px]">Auto-Reply</Label>
                <Input
                  className="text-[10px] h-6"
                  value={c.autoReply}
                  onChange={(e) => update(i, "autoReply", e.target.value)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs Section */}
      <Tabs defaultValue="analytics" className="space-y-2">
        <TabsList className="border bg-white/20 backdrop-blur-md rounded-lg p-1 mx-auto flex gap-1">
          <TabsTrigger value="analytics" className="text-[10px] hover:text-[#F5793B]">
            <BarChart className="w-3 h-3 mr-1 text-[#F5793B]" />
            Analytics
          </TabsTrigger>
          <TabsTrigger value="templates" className="text-[10px] hover:text-[#F5793B]">
            <FileText className="w-3 h-3 mr-1 text-[#F5793B]" />
            Templates
          </TabsTrigger>
          <TabsTrigger value="notifications" className="text-[10px] hover:text-[#F5793B]">
            <Bell className="w-3 h-3 mr-1 text-[#F5793B]" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="security" className="text-[10px] hover:text-[#F5793B]">
            <ShieldCheck className="w-3 h-3 mr-1 text-[#F5793B]" />
            Security
          </TabsTrigger>
        </TabsList>

        {/* Analytics */}
        <TabsContent value="analytics">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {channels.map((c) => (
              <Card
                key={c.name}
                className="rounded-md border border-orange-200 bg-white/20 backdrop-blur-md hover:shadow-sm transition"
              >
                <CardHeader className="p-2">
                  <CardTitle className="text-xs font-medium flex items-center gap-1">
                    {c.icon}
                    {c.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-[10px] space-y-1 p-2">
                  <p>📨 Tickets: 123</p>
                  <p>⏱ Response: 1.2 hrs</p>
                  <p>🎯 SLA: 92%</p>
                  <p>🌟 CSAT: 4.6 / 5</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Other Tabs */}
        {["templates", "notifications", "security"].map((tab) => (
          <TabsContent key={tab} value={tab}>
            <Card className="p-2 bg-white/20 backdrop-blur-md border border-orange-100 rounded-md">
              <CardHeader className="p-2">
                <CardTitle className="text-xs font-semibold capitalize">
                  {tab === "templates" && "📑 Message Templates"}
                  {tab === "notifications" && "🔔 Notifications"}
                  {tab === "security" && "🔐 Security Settings"}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-[10px] space-y-1 p-2">
                {tab === "templates" && (
                  <>
                    <p>🎉 Welcome: “Hi there! Thanks!”</p>
                    <p>✅ Confirm: “We got your request.”</p>
                    <p>⚠️ Escalate: “Escalated ticket.”</p>
                    <p>⭐ Feedback: “Rate our support.”</p>
                  </>
                )}
                {tab === "notifications" && (
                  <>
                    <p>📥 In-app: Enabled</p>
                    <p>📧 Email: Enabled</p>
                    <p>💬 Slack: Enabled</p>
                    <p>📱 Mobile: Disabled</p>
                  </>
                )}
                {tab === "security" && (
                  <>
                    <p>🗂 Retention: 12 months</p>
                    <p>✅ GDPR Ready</p>
                    <p>🔒 Encrypted: Email & WhatsApp</p>
                  </>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
