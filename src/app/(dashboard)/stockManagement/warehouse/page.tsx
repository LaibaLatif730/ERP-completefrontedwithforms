"use client";

import React, { useState } from 'react';
import { Search, ChevronDown, Warehouse, PackageOpen, PackageCheck, CheckCircle, AlertCircle, Calendar, Plus, Send, FileText } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
});

import WarehouseUtilizationCard from '@/components/Stock/WarehouseUtilizationCard';
import { warehouseData, detailedWarehouseInventory, recentWarehouseActivities } from '@/lib/stockdata';

const WarehouseManagementPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterUtilization, setFilterUtilization] = useState('All');
  const [expandedWarehouse, setExpandedWarehouse] = useState<string | null>(null);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterUtilization(event.target.value);
  };

  const toggleWarehouseExpansion = (warehouseName: string) => {
    setExpandedWarehouse(prev => (prev === warehouseName ? null : warehouseName));
  };

  const handleCreateNewStock = () => {
    alert("Create New Stock action initiated.");
  };

  const handleSubmitRequest = () => {
    alert("Submit Stock Request.");
  };

  const handleGenerateReport = () => {
    alert("Generate Warehouse Report.");
  };

  const filteredWarehouses = warehouseData.filter(wh => {
    const matchesSearch = wh.location.toLowerCase().includes(searchTerm.toLowerCase());
    const utilization = (wh.current / wh.capacity) * 100;
    const matchesFilter = filterUtilization === 'All' ||
      (filterUtilization === 'High Utilization' && utilization >= 80) ||
      (filterUtilization === 'Medium Utilization' && utilization >= 50 && utilization < 80) ||
      (filterUtilization === 'Low Utilization' && utilization < 50);
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="bg-gradient-to-br from-orange-500/[0.02] via-transparent to-blue-500/[0.02] dark:bg-[#121111] min-h-screen p-6 sm:p-8 lg:p-10 font-sans text-gray-900 dark:text-white">
      {/* ✅ ERP-style Top Navbar Header */}
      <div className="flex items-center justify-between px-6 py-3 bg-white dark:bg-[#1a1a1a] rounded-xl shadow mb-6 border border-gray-200 dark:border-zinc-800">
        <h1 className={cn("text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600", pacifico.className)}>Stock Warehouse</h1>
        <div className="bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 font-semibold px-3 py-1 rounded-xl text-sm flex items-center space-x-2">
          <Calendar className="w-4 h-4" />
          <span>Live Dashboard</span>
        </div>
      </div>

      {/* Actions Buttons */}
      <div className="flex flex-wrap gap-4 mb-6">
        <button onClick={handleCreateNewStock} className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg text-sm">
          <Plus size={16} /> Create Stock
        </button>
        <button onClick={handleSubmitRequest} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg text-sm">
          <Send size={16} /> Submit Request
        </button>
        <button onClick={handleGenerateReport} className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded-lg text-sm">
          <FileText size={16} /> Generate Report
        </button>
      </div>

      {/* Filter/Search Bar */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8 bg-gradient-to-b from-zinc-100 to-white dark:from-orange-500/20 dark:via-white/5 dark:to-blue-500/20 p-4 rounded-xl">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search warehouses or locations..."
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-700 text-zinc-900 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#e5a004] focus:border-transparent"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
        </div>

        <div className="relative w-full sm:w-auto">
          <label htmlFor="utilizationFilter" className="sr-only">Filter by Utilization</label>
          <select
            id="utilizationFilter"
            className="appearance-none bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-700 text-zinc-900 dark:text-white py-2 px-4 pr-8 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#e5a004] focus:border-transparent w-full"
            value={filterUtilization}
            onChange={handleFilterChange}
          >
            <option>All</option>
            <option>High Utilization</option>
            <option>Medium Utilization</option>
            <option>Low Utilization</option>
          </select>
          <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

export default WarehouseManagementPage;