"use client";

import {
  ResponsiveContainer,
  BarChart,
  LineChart,
  AreaChart,
  Bar,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { useState, JSX } from "react";
import {
  departmentChartData,
  DepartmentType,
  ChartMetricType,
} from "@/lib/chartdata";
import { cn } from "@/lib/utils";
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

type ChartType = "bar" | "line" | "area";

const colors: Record<ChartMetricType, string> = {
  sales: "#60A5FA", // Blue
  revenue: "#FBBF24", // Amber
  profit: "#34D399", // Green
};

export default function Chart() {
  const [chartType, setChartType] = useState<ChartType>("bar");
  const [selectedDepartment, setSelectedDepartment] =
    useState<DepartmentType>("Finance");

  const filteredData = departmentChartData.filter(
    (d) => d.department === selectedDepartment
  );

  const renderChart = (): JSX.Element => {
    const commonProps = {
      data: filteredData,
      children: (
        <>
          <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
          <XAxis
            dataKey="month"
            tick={{ fontSize: 12, fill: "currentColor" }}
          />
          <YAxis tick={{ fontSize: 12, fill: "currentColor" }} />
          <Tooltip
            contentStyle={{
              fontSize: "12px",
              backgroundColor: "rgba(255,255,255,0.95)",
              color: "#000",
            }}
            wrapperStyle={{
              borderRadius: "6px",
              overflow: "hidden",
            }}
          />
          <Legend wrapperStyle={{ fontSize: "12px", color: "currentColor" }} />
        </>
      ),
    };

    if (chartType === "bar") {
      return (
        <BarChart {...commonProps}>
          {commonProps.children}
          <Bar dataKey="sales" fill={colors.sales} />
          <Bar dataKey="revenue" fill={colors.revenue} />
          <Bar dataKey="profit" fill={colors.profit} />
        </BarChart>
      );
    }

    if (chartType === "line") {
      return (
        <LineChart {...commonProps}>
          {commonProps.children}
          <Line
            type="monotone"
            dataKey="sales"
            stroke={colors.sales}
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke={colors.revenue}
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="profit"
            stroke={colors.profit}
            strokeWidth={2}
          />
        </LineChart>
      );
    }

    return (
      <AreaChart {...commonProps}>
        {commonProps.children}
        <Area
          type="monotone"
          dataKey="sales"
          stroke={colors.sales}
          fill={colors.sales}
          fillOpacity={0.3}
        />
        <Area
          type="monotone"
          dataKey="revenue"
          stroke={colors.revenue}
          fill={colors.revenue}
          fillOpacity={0.3}
        />
        <Area
          type="monotone"
          dataKey="profit"
          stroke={colors.profit}
          fill={colors.profit}
          fillOpacity={0.3}
        />
      </AreaChart>
    );
  };

  return (
    <Card className="w-full shadow-md rounded-xl border border-orange-100 dark:border-gray-700 bg-white dark:bg-zinc-900 text-black dark:text-white transition-colors">
      <CardHeader className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pb-2">
        <div>
          <CardTitle className="text-base font-semibold text-orange-600 dark:text-orange-300">
            Performance Metrics
          </CardTitle>
          <CardDescription className="text-xs text-muted-foreground dark:text-zinc-400">
            Overview of sales, revenue, and profit by department
          </CardDescription>
        </div>
        <div className="flex items-center gap-2">
          {/* Chart Type Tabs */}
          <Tabs
            defaultValue={chartType}
            onValueChange={(val) => setChartType(val as ChartType)}
          >
            <TabsList className="bg-orange-100 dark:bg-orange-300/10 rounded-md px-1 py-0.5 h-8 space-x-1">
              <TabsTrigger
                value="bar"
                className={cn(
                  "text-xs px-2 py-1 rounded-md",
                  chartType === "bar" &&
                    "bg-orange-400 text-white dark:bg-orange-500"
                )}
              >
                Bar
              </TabsTrigger>
              <TabsTrigger
                value="line"
                className={cn(
                  "text-xs px-2 py-1 rounded-md",
                  chartType === "line" &&
                    "bg-orange-400 text-white dark:bg-orange-500"
                )}
              >
                Line
              </TabsTrigger>
              <TabsTrigger
                value="area"
                className={cn(
                  "text-xs px-2 py-1 rounded-md",
                  chartType === "area" &&
                    "bg-orange-400 text-white dark:bg-orange-500"
                )}
              >
                Area
              </TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Department Switcher */}
          <select
            aria-label="Select department"
            className="text-xs border border-orange-200 dark:border-gray-600 bg-white dark:bg-zinc-800 text-black dark:text-white rounded-md px-2 py-1"
            value={selectedDepartment}
            onChange={(e) =>
              setSelectedDepartment(e.target.value as DepartmentType)
            }
          >
            <option value="HR">HR</option>
            <option value="Finance">Finance</option>
            <option value="Operations">Operations</option>
          </select>
        </div>
      </CardHeader>

      <CardContent className="h-[300px] pt-0">
        <ResponsiveContainer width="100%" height="100%">
          {renderChart()}
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
