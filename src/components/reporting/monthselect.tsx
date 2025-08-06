"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface MonthSelectProps {
  selectedMonth: number; // 0 - 11
  selectedYear: number;
  onChange: (month: number, year: number) => void;
  years?: number[]; // Optional: [2023, 2024, ...]
  className?: string;
  disabled?: boolean;
}

const MONTHS = [
  "January", "February", "March", "April",
  "May", "June", "July", "August",
  "September", "October", "November", "December"
];

export default function MonthSelect({
  selectedMonth,
  selectedYear,
  onChange,
  years = [new Date().getFullYear()],
  className,
  disabled = false,
}: MonthSelectProps) {
  return (
    <div className={cn("flex items-center gap-2 text-sm", className)}>
      <select
        title="Select month"
        value={selectedMonth}
        onChange={(e) => onChange(parseInt(e.target.value), selectedYear)}
        disabled={disabled}
        className="px-2 py-1.5 rounded-md border border-gray-300 text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none disabled:opacity-50"
      >
        {MONTHS.map((month, index) => (
          <option key={month} value={index}>
            {month}
          </option>
        ))}
      </select>

      <select
        title="Select year"
        value={selectedYear}
        onChange={(e) => onChange(selectedMonth, parseInt(e.target.value))}
        disabled={disabled}
        className="px-2 py-1.5 rounded-md border border-gray-300 text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none disabled:opacity-50"
      >
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
}
