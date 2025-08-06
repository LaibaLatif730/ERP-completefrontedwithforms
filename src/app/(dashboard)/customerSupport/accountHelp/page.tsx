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
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });


export default function AccountHelpPage() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [twoFactor, setTwoFactor] = useState(false);

  return (
    <div className="p-4 text-sm">
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
                  Customer Support Account Help
                </h1>
              </div>
      
              <div className="relative bg-white/50 dark:bg-gray-800/50 text-black dark:text-white font-mono px-2 py-1 rounded-xl text-xs z-10 flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
             <span>Live Dashboard</span>
              </div>
      
            </div>
      <Tabs defaultValue="accountInfo" className="w-full">
        <TabsList className="grid w-full grid-cols-5 bg-orange-50 border border-orange-200 text-sm">
          <TabsTrigger value="accountInfo" className="data-[state=active]:bg-[#FFA500] data-[state=active]:text-white">
            Account Info
          </TabsTrigger>
          <TabsTrigger value="passwordReset" className="data-[state=active]:bg-[#FFA500] data-[state=active]:text-white">
            Password Reset
          </TabsTrigger>
          <TabsTrigger value="twoFA" className="data-[state=active]:bg-[#FFA500] data-[state=active]:text-white">
            2FA
          </TabsTrigger>
          <TabsTrigger value="emailNotify" className="data-[state=active]:bg-[#FFA500] data-[state=active]:text-white">
            Email Notifications
          </TabsTrigger>
          <TabsTrigger value="deactivate" className="data-[state=active]:bg-[#FFA500] data-[state=active]:text-white">
            Deactivate
          </TabsTrigger>
        </TabsList>

        {/* Account Info */}
        <TabsContent value="accountInfo">
          <Card>
            <CardHeader>
              <CardTitle className="text-orange-600 text-base font-semibold">Update Account Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <Label className="text-xs">Email Address</Label>
              <Input placeholder="Enter your email" type="email" className="text-sm focus-visible:ring-[#FFA500]" />
              <Label className="text-xs">Username</Label>
              <Input placeholder="Enter your username" className="text-sm focus-visible:ring-[#FFA500]" />
              <Button className="bg-[#FFA500] hover:bg-orange-600 text-white mt-3 text-sm">Update Info</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Password Reset */}
        <TabsContent value="passwordReset">
          <Card>
            <CardHeader>
              <CardTitle className="text-orange-600 text-base font-semibold">Reset Your Password</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <Label className="text-xs">Current Password</Label>
              <Input type="password" placeholder="Current password" className="text-sm focus-visible:ring-[#FFA500]" />
              <Label className="text-xs">New Password</Label>
              <Input type="password" placeholder="New password" className="text-sm focus-visible:ring-[#FFA500]" />
              <Label className="text-xs">Confirm Password</Label>
              <Input type="password" placeholder="Confirm new password" className="text-sm focus-visible:ring-[#FFA500]" />
              <Button className="bg-[#FFA500] hover:bg-orange-600 text-white mt-3 text-sm">Reset Password</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 2FA */}
        <TabsContent value="twoFA">
          <Card>
            <CardHeader>
              <CardTitle className="text-orange-600 text-base font-semibold">Two-Factor Authentication</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <Label className="text-xs">Enable 2FA</Label>
                <Switch
                  checked={twoFactor}
                  onCheckedChange={setTwoFactor}
                  className="data-[state=checked]:bg-[#FFA500]"
                />
              </div>
              <p className="text-xs text-muted-foreground">
                Add an extra layer of security to your account.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Email Notifications */}
        <TabsContent value="emailNotify">
          <Card>
            <CardHeader>
              <CardTitle className="text-orange-600 text-base font-semibold">Email Notification Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <Label className="text-xs">Receive email updates</Label>
                <Switch
                  checked={emailNotifications}
                  onCheckedChange={setEmailNotifications}
                  className="data-[state=checked]:bg-[#FFA500]"
                />
              </div>
              <p className="text-xs text-muted-foreground">
                You’ll receive email alerts for activity and updates.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Deactivate Account */}
        <TabsContent value="deactivate">
          <Card>
            <CardHeader>
              <CardTitle className="text-orange-600 text-base font-semibold">Request Account Deactivation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <Label className="text-xs">Reason for Deactivation</Label>
              <Textarea
                placeholder="Please let us know why you’re leaving..."
                className="text-sm focus-visible:ring-[#FFA500]"
              />
              <Button className="bg-[#FFA500] hover:bg-orange-600 text-white mt-3 text-sm">
                Deactivate Account
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
