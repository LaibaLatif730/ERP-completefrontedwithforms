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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectItem, SelectContent } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Pacifico } from "next/font/google";
import { Calendar } from "lucide-react";

const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });

export default function TechSupportPage() {
  const [status, setStatus] = useState(true);

  return (
    <div className="p-4 font-sans text-[10px]">
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
            Customer Support Tech Support
          </h1>
        </div>

        <div className="relative bg-white/50 dark:bg-gray-800/50 text-black dark:text-white font-mono px-2 py-1 rounded-xl text-xs z-10 flex items-center space-x-1">
        <Calendar className="w-4 h-4" />
       <span>Live Dashboard</span>
        </div>

      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="bg-orange-100 text-[10px]">
          <TabsTrigger value="all" className="text-[10px]">All Tickets</TabsTrigger>
          <TabsTrigger value="open" className="text-[10px]">Open</TabsTrigger>
          <TabsTrigger value="closed" className="text-[10px]">Resolved</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
            {[1, 2].map((ticket) => (
              <Card
                key={ticket}
                className="backdrop-blur-md bg-white/30 border border-orange-200 rounded-xl shadow-md transition-all hover:scale-[1.01] hover:shadow-orange-200"
              >
                <CardHeader className="p-2">
                  <CardTitle className="text-orange-600 text-xs">
                    Ticket #{ticket}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 p-2">
                  <div>
                    <Label className="text-[10px]">Issue Type</Label>
                    <Select defaultValue="bug">
                      <SelectTrigger className="bg-white/70 border-orange-300 h-6 text-[10px]">
                        <span>Bug</span>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bug">Bug</SelectItem>
                        <SelectItem value="feature">Feature Request</SelectItem>
                        <SelectItem value="integration">Integration Issue</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-[10px]">Assigned Technician</Label>
                    <Input placeholder="e.g. Sarah001" className="bg-white/70 border-orange-300 h-6 text-[10px]" />
                  </div>

                  <div>
                    <Label className="text-[10px]">Urgency Level</Label>
                    <Select defaultValue="medium">
                      <SelectTrigger className="bg-white/70 border-orange-300 h-6 text-[10px]">
                        <span>Medium</span>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-[10px]">Resolution ETA</Label>
                    <Input
                      type="datetime-local"
                      className="bg-white/70 border-orange-300 h-6 text-[10px] focus:border-orange-600 focus:ring-1 focus:ring-orange-500"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label className="text-[10px]">Status</Label>
                    <Switch
                      checked={status}
                      onCheckedChange={setStatus}
                      className="scale-75 data-[state=checked]:bg-orange-600 data-[state=unchecked]:bg-gray-300"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label className="text-[10px]">Priority</Label>
                    <Badge variant="outline" className="bg-orange-200 text-orange-800 text-[10px] px-2 py-0.5">
                      🟠 Medium
                    </Badge>
                  </div>

                  <div>
                    <Label className="text-[10px]">Support Channel</Label>
                    <Input value="Email" disabled className="bg-white/50 text-gray-700 h-6 text-[10px]" />
                  </div>

                  <div>
                    <Label className="text-[10px]">Resolution History</Label>
                    <Textarea placeholder="Step 1: Restarted server..." className="bg-white/70 border-orange-300 text-[10px] h-16" />
                  </div>

                  <div>
                    <Label className="text-[10px]">Ticket Tags</Label>
                    <Input placeholder="#API #Login" className="bg-white/70 border-orange-300 h-6 text-[10px]" />
                  </div>

                  <div>
                    <Label className="text-[10px]">Feedback Rating</Label>
                    <div className="text-[10px]">⭐️⭐️⭐️⭐️☆</div>
                  </div>

                  <Button className="w-full bg-orange-600 hover:bg-orange-700 transition-all text-white text-[10px] h-7">
                    Submit Response
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="open">
          <p className="text-orange-600 mt-3 text-[10px]">Open tickets will appear here...</p>
        </TabsContent>

        <TabsContent value="closed">
          <p className="text-orange-600 mt-3 text-[10px]">Resolved tickets will appear here...</p>
        </TabsContent>
      </Tabs>
    </div>
  );
}
