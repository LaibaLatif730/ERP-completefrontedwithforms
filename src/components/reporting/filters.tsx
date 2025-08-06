"use client";

import React from "react";
import { Search } from "lucide-react";

interface FiltersProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  year: string;
  setYear: (value: string) => void;
  month: string;
  setMonth: (value: string) => void;
  category: string;
  setCategory: (value: string) => void;
}

const years = ["2023", "2024", "2025"];
const months = [
  { label: "Jan", value: "01" },
  { label: "Feb", value: "02" },
  { label: "Mar", value: "03" },
  { label: "Apr", value: "04" },
  { label: "May", value: "05" },
  { label: "Jun", value: "06" },
  { label: "Jul", value: "07" },
  { label: "Aug", value: "08" },
  { label: "Sep", value: "09" },
  { label: "Oct", value: "10" },
  { label: "Nov", value: "11" },
  { label: "Dec", value: "12" },
];

const categories = ["All", "Electronics", "Groceries", "Apparel", "Pharmacy", "Office"];

export default function Filters({
  searchQuery,
  setSearchQuery,
  year,
  setYear,
  month,
  setMonth,
  category,
  setCategory,
}: FiltersProps) {
  return (
    <div className="flex flex-wrap gap-3 items-center mb-4 text-sm">
      {/* Search Bar */}
      <div className="relative w-full md:flex-1">
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-300"
          size={16}
        />
        <input
          type="text"
          placeholder="Search in reports"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300 dark:focus:ring-orange-500 text-sm"
        />
      </div>

      {/* Year Filter */}
      <select
        title="Filter by year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        className="w-24 px-2 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-300 dark:focus:ring-orange-500"
      >
        <option value="">All Years</option>
        {years.map((yr) => (
          <option key={yr} value={yr}>
            {yr}
          </option>
        ))}
      </select>

      {/* Month Filter */}
      <select
        title="Filter by month"
        value={month}
        onChange={(e) => setMonth(e.target.value)}
        className="w-24 px-2 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-400 dark:focus:ring-orange-500"
      >
        <option value="">All Months</option>
        {months.map((m) => (
          <option key={m.value} value={m.value}>
            {m.label}
          </option>
        ))}
      </select>

      {/* Category Filter */}
      <select
        title="Filter by category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-36 px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-300 dark:focus:ring-orange-500"
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
}
