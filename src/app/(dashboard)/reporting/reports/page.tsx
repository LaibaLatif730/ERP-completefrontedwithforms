"use client";

import Chart from "@/components/reporting/chart";
import Filters from "@/components/reporting/filters";
import ReportTable from "@/components/reporting/reporttable";
import ExportButtons from "@/components/reporting/exportbutton";
import ReportCard from "@/components/reporting/reportcard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { sampleReportData } from "@/lib/data";
import type { ReportRecord, Report } from "@/lib/type";
import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import { Pacifico } from "next/font/google";
import { Calendar } from "lucide-react";


const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });

export default function ReportPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  const [year, setYear] = useState("2025");
  const [month, setMonth] = useState("All");
  const [metric, setMetric] = useState("Sales");

  const metrics = ["Sales", "Inventory", "HR"];

  const filteredData: ReportRecord[] = useMemo(() => {
    return sampleReportData.filter((item) => {
      const matchesSearch =
        item.item.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category?.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesYear = item.date.includes(year);
      const matchesMonth =
        month === "All" || new Date(item.date).getMonth() === parseInt(month) - 1;

      return (
        matchesSearch &&
        matchesYear &&
        matchesMonth &&
        item.metric === metric
      );
    });
  }, [searchQuery, year, month, metric]);

  const summaryStats = {
    totalSales: filteredData.reduce((acc, curr) => acc + (curr.totalAmount || 0), 0),
    totalOrders: filteredData.length,
  };

  const reportData: Record<string, Report[]> = useMemo(() => {
    return filteredData.reduce((acc, record) => {
      if (!acc[record.metric]) {
        acc[record.metric] = [];
      }
      acc[record.metric].push({
        type: record.item.endsWith(".pdf") ? "PDF" : "Excel",
        size: record.size,
        category: record.category || "",
        generated: record.date,
        id: record.id || "",
        title: record.item,
        status: "Scheduled",
        department: "Sales",
        approvalStatus: "approved",
      });
      return acc;
    }, {} as Record<string, Report[]>);
  }, [filteredData]);

  const tableRows = useMemo(() => {
    return filteredData.map((record) => {
      const changeValue = Math.floor(Math.random() * 20);
      return {
        label: record.item,
        value: `$${record.totalAmount?.toFixed(2) || "0.00"}`,
        change: `${changeValue}%`,
        isPositive: Math.random() > 0.5,
        color: "orange" as const,
      };
    });
  }, [filteredData]);

  return (
    <main className="p-2 md:p-4 bg-gray-50 dark:bg-black text-black dark:text-white min-h-screen text-xs">
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
                        {metric} Reports
                      </h1>
                    </div>
            
                    <div className="relative bg-white/50 dark:bg-gray-800/50 text-black dark:text-white font-mono px-2 py-1 rounded-xl text-xs z-10 flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                   <span>Live Dashboard</span>
                    </div>
                  </div>
      {/* Filters + Export */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-4 text-sm">
        <Filters
          year={year}
          setYear={setYear}
          month={month}
          setMonth={setMonth}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          category={category}
          setCategory={setCategory}
        />
        <div className="w-full lg:w-auto flex justify-end">
          <ExportButtons
            data={reportData}
            year={year}
            month={month}
            activeTab={metric}
          />
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue={metric} onValueChange={setMetric} className="mb-4">
        <TabsList className="flex space-x-2 h-8 text-sm">
          {metrics.map((m) => (
            <TabsTrigger
              key={m}
              value={m}
              className="px-4 py-1.5 text-sm rounded-md font-medium bg-orange-100 text-orange-300 hover:bg-orange-200 transition"
            >
              {m}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-4 text-sm">
        <ReportCard
          title="Total Sales"
          value={`$${summaryStats.totalSales.toLocaleString()}`}
          icon="💰"
          change=""
          isPositive
          small
        />
        <ReportCard
          title="Total Orders"
          value={summaryStats.totalOrders.toString()}
          icon="📦"
          change=""
          isPositive
          small
        />
        <ReportCard title="Year" value={year} icon="📅" change="" isPositive small />
        <ReportCard title="Month" value={month} icon="🗓️" change="" isPositive small />
      </div>
          {/*chart*/}
      <div className="bg-white dark:bg-[#1a1a1a] text-black dark:text-white shadow-sm rounded-lg p-3 mb-4 text-sm">
        <Chart />
      </div>


      {/* Table */}
      <div className="bg-white dark:bg-[#1a1a1a] text-black dark:text-white shadow-sm rounded-lg p-3 text-sm">
        <ReportTable rows={tableRows} title={`${metric} Reports`} data={filteredData} />
      </div>

    </main>
  );
}