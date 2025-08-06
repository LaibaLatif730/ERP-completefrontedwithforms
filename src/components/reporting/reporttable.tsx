"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { ReportRecord } from "@/lib/data";

interface TableRowData {
  label: string;
  value: string;
  change: string;
  isPositive?: boolean;
  color?: string;
}

interface ReportTableProps {
  title: string;
  rows: TableRowData[];
  loading?: boolean;
  data: ReportRecord[];
}

export default function ReportTable({ title, rows, loading = false }: ReportTableProps) {
  return (
    <div className="bg-white dark:bg-zinc-900 p-4 rounded-2xl shadow-md border border-gray-200 dark:border-zinc-700 hover:shadow-lg transition-all duration-200 text-sm">
      <h2 className="text-base font-semibold text-gray-800 dark:text-white mb-3">{title}</h2>

      {loading ? (
        <div className="space-y-3 animate-pulse">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex justify-between items-center">
              <div className="h-3 w-1/3 bg-gray-200 dark:bg-zinc-700 rounded" />
              <div className="h-3 w-1/4 bg-gray-300 dark:bg-zinc-600 rounded" />
              <div className="h-3 w-1/6 bg-gray-200 dark:bg-zinc-700 rounded" />
            </div>
          ))}
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-zinc-700">
              <tr>
                <th className="py-2">Metric</th>
                <th className="py-2 text-right">Value</th>
                <th className="py-2 text-right">Change</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-zinc-700">
              {rows.map((row, idx) => (
                <tr key={idx}>
                  <td className="py-2 text-gray-700 dark:text-gray-300">{row.label}</td>
                  <td className="py-2 text-right font-medium text-gray-900 dark:text-white">
                    {row.value}
                  </td>
                  <td
                    className={cn("py-2 text-right flex items-center justify-end", {
                      "text-green-600": row.isPositive,
                      "text-red-500": row.isPositive === false,
                    })}
                  >
                    {row.isPositive ? (
                      <ArrowUpRight size={14} className="mr-1" />
                    ) : (
                      <ArrowDownRight size={14} className="mr-1" />
                    )}
                    {row.change}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
