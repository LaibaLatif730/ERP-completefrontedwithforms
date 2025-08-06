"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { LineChart, Line, ResponsiveContainer } from "recharts";

interface ReportCardProps {
  title: string;
  value: string;
  change: string;
  isPositive?: boolean;
  icon?: React.ReactNode;
  color?: string;
  data?: { name: string; value: number }[];
  loading?: boolean;
  small?: boolean;
}

export default function ReportCard({
  title,
  value,
  change,
  isPositive = true,
  icon,
  color = "blue",
  data = [],
  loading = false,
  small = false,
}: ReportCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col rounded-xl shadow-md border hover:shadow-lg transition-all duration-200 text-sm",
        "bg-white text-gray-900 dark:bg-zinc-900 dark:text-zinc-100",
        small ? "p-3" : "p-4"
      )}
    >
      {loading ? (
        <div className="animate-pulse space-y-3">
          <div className="h-3 w-1/2 bg-gray-200 dark:bg-zinc-700 rounded"></div>
          <div className="h-5 w-1/3 bg-gray-300 dark:bg-zinc-600 rounded"></div>
          <div className="h-2.5 w-1/4 bg-gray-200 dark:bg-zinc-700 rounded"></div>
          <div className="h-14 bg-gray-100 dark:bg-zinc-800 rounded"></div>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between mb-2">
            <div className="text-xs font-medium text-gray-500 dark:text-zinc-400">
              {title}
            </div>
            <div
              className={cn(
                "flex items-center justify-center rounded-full text-white",
                small ? "w-6 h-6 text-xs" : "w-8 h-8 text-sm",
                {
                  "bg-green-500": color === "green",
                  "bg-red-500": color === "red",
                  "bg-blue-500": color === "blue",
                  "bg-orange-500": color === "orange",
                  "bg-purple-500": color === "purple",
                }
              )}
            >
              {icon}
            </div>
          </div>

          <div
            className={cn(
              "font-semibold",
              small ? "text-sm" : "text-base md:text-lg"
            )}
          >
            {value}
          </div>

          <div
            className={cn(
              "flex items-center mt-1 text-xs",
              {
                "text-green-600 dark:text-green-400": isPositive,
                "text-red-500 dark:text-red-400": !isPositive,
              }
            )}
          >
            {isPositive ? (
              <ArrowUpRight size={12} className="mr-1" />
            ) : (
              <ArrowDownRight size={12} className="mr-1" />
            )}
            {change}
          </div>

          {data.length > 0 && (
            <div className={cn("mt-2", small ? "h-14" : "h-16")}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}
        </>
      )}
    </div>
  );
}
