// components/WarehouseStockSections.tsx
"use client";

import React from 'react';
import { MapPin, AlertCircle } from 'lucide-react';

// Interface for WarehouseUtilizationCard props
interface WarehouseUtilizationCardProps {
  location: string;
  current: number;
  capacity: number;
  color: string; // Tailwind color class for the progress bar
}

// Warehouse Utilization Card Component
const WarehouseUtilizationCard: React.FC<WarehouseUtilizationCardProps> = ({ location, current, capacity, color }) => {
  const utilization = (current / capacity) * 100;
  const progressBarWidth = `${utilization}%`;

  return (
    <div className="mb-4 last:mb-0">
      <div className="flex items-center text-zinc-900 dark:text-white mb-1">
        <MapPin size={16} className="mr-2 text-gray-600 dark:text-gray-300" />
        <span className="font-semibold">{location}</span>
        <span className="ml-auto text-sm text-gray-600 dark:text-gray-300">{current}/{capacity}</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div className={`h-2.5 rounded-full ${color}`} style={{ width: progressBarWidth }}></div>
      </div>
      <p className="text-right text-sm font-medium mt-1 text-gray-600 dark:text-gray-300">Utilization: {utilization.toFixed(0)}%</p>
    </div>
  );
};

// Interface for LowStockAlertItem props
interface LowStockAlertItemProps {
  product: string;
  category: string;
  current: number;
  min: number;
}

// Low Stock Alert Item Component
const LowStockAlertItem: React.FC<LowStockAlertItemProps> = ({ product, category, current, min }) => {
  return (
    <div className="flex items-center justify-between mb-4 last:mb-0">
      <div className="flex items-start">
        <AlertCircle size={18} className="mr-3 text-red-500 flex-shrink-0 mt-1" />
        <div>
          <p className="font-semibold text-zinc-900 dark:text-white">{product}</p>
          <p className="text-sm text-gray-600 dark:text-gray-300">{category}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">Current: {current} Min: {min}</p>
        </div>
      </div>
      <button className="bg-[#b16a04] text-white py-1 px-3 rounded-lg shadow-md hover:bg-[#e5a004] transition-all duration-200 text-sm">
        Reorder
      </button>
    </div>
  );
};

const WarehouseStockSections: React.FC = () => {
  const warehouseData = [
    { location: "Main WH", current: 4300, capacity: 5000, color: "bg-[#f5793b]" },
    { location: "North WH", current: 2100, capacity: 3000, color: "bg-[#f5793b]" },
    { location: "South WH", current: 3600, capacity: 4000, color: "bg-[#f5793b]" },
    { location: "East WH", current: 1800, capacity: 2500, color: "bg-[#f5793b]" },
  ];

  const lowStockData = [
    { product: "Wireless Headphones", category: "Electronics", current: 5, min: 20 },
    { product: "Summer T-Shirt", category: "Clothing", current: 12, min: 25 },
    { product: "Garden Tools Set", category: "Home & Garden", current: 8, min: 15 },
    { product: "Running Shoes", category: "Sports", current: 3, min: 10 },
  ];

  return (
    <div className="flex flex-wrap lg:flex-nowrap gap-6 mt-8 px-4 sm:px-6 md:px-8 lg:px-0"> {/* Changed to flexbox, added flex-wrap and lg:flex-nowrap */}
      {/* Warehouse Utilization Section */}
      <div className="bg-gradient-to-b from-zinc-100 to-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-zinc-900 w-full md:w-[calc(50%-0.75rem)]"> {/* Adjusted width for flexbox layout */}
        <h2 className="text-xl font-bold mb-4 text-zinc-900 dark:text-white">Warehouse Utilization</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">Capacity usage across locations</p>
        {warehouseData.map((data, index) => (
          <WarehouseUtilizationCard key={index} {...data} />
        ))}
      </div>

      {/* Low Stock Alerts Section */}
      <div className="bg-gradient-to-b from-zinc-100 to-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-zinc-900 w-full md:w-[calc(50%-0.75rem)]"> {/* Adjusted width for flexbox layout */}
        <h2 className="text-xl font-bold mb-4 text-zinc-900 dark:text-white">Low Stock Alerts</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">Items requiring immediate attention</p>
        {lowStockData.map((data, index) => (
          <LowStockAlertItem key={index} {...data} />
        ))}
      </div>
    </div>
  );
};

export default WarehouseStockSections;