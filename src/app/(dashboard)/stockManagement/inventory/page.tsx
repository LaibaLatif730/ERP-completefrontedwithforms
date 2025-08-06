"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  Download,
  PlusCircle,
  Repeat,
  Settings,
  X,
} from "lucide-react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

import { cn } from "@/lib/utils";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
});

import WarehouseStockSections from "@/components/commercial/WarehouseLowStock";
import InventoryCard from "@/components/Stock/InventoryCard";

import { inventoryCardsData } from "@/lib/stockdata";
import { inventoryTrendData } from "@/lib/stockdata";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const StockInventoryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="bg-gradient-to-br from-orange-100/[0.1] via-transparent to-orange-200/[0.1] dark:bg-[#121111] min-h-screen p-6 sm:p-8 lg:p-10 font-sans text-gray-900 dark:text-white">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div className="text-center md:text-left bg-gradient-to-r from-orange-100 via-transparent to-orange-100 dark:from-orange-500/10 dark:via-transparent dark:to-orange-500/10">
          <h1
            className={cn("text-lg font-bold text-orange-500", pacifico.className)}
          >
            Stock Inventory
          </h1>
          <p className="text-orange-700 dark:text-orange-300 text-xs">
            Manage and control your inventory efficiently
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto bg-gradient-to-b from-orange-100 to-white dark:from-orange-500/10 dark:via-white/5 dark:to-orange-400/10">
          <div className="relative w-full sm:w-auto">
            <select
              aria-label="Filter by category"
              className="appearance-none bg-white dark:bg-[#1a1a1a] border border-orange-300 dark:border-orange-700 text-orange-700 dark:text-orange-200 py-2 px-4 pr-8 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent w-full"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option>All Categories</option>
              <option>Electronics</option>
              <option>Clothing</option>
              <option>Home & Garden</option>
              <option>Jewelry</option>
            </select>
            <ChevronDown
              size={18}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-orange-400 dark:text-orange-300 pointer-events-none"
            />
          </div>
          <button className="bg-orange-500 text-white flex items-center justify-center py-2 px-4 rounded-lg shadow-md hover:bg-orange-600 transition-all duration-200">
            <Download size={18} className="mr-2" />
            Export Inventory
          </button>
        </div>
      </div>

      {/* Inventory Action Buttons with Dialogs */}
      <div className="flex flex-wrap gap-4 mb-8">
        {/* Create Stock Entry */}
        <Dialog>
          <DialogTrigger asChild>
            <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg flex items-center shadow-md">
              <PlusCircle className="mr-2" size={18} />
              Create Stock Entry
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-orange-600">Create Stock Entry</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 text-sm text-gray-800 dark:text-gray-200">
              <p>Here you can create a new stock entry. Form fields go here.</p>
              {/* Placeholder: replace with actual form */}
            </div>
          </DialogContent>
        </Dialog>

        {/* Transfer Stock */}
        <Dialog>
          <DialogTrigger asChild>
            <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg flex items-center shadow-md">
              <Repeat className="mr-2" size={18} />
              Transfer Stock
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-orange-600">Transfer Stock</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 text-sm text-gray-800 dark:text-gray-200">
              <p>Select source and destination warehouse. Form fields go here.</p>
              {/* Placeholder: replace with actual form */}
            </div>
          </DialogContent>
        </Dialog>

        {/* Adjust Inventory */}
        <Dialog>
          <DialogTrigger asChild>
            <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg flex items-center shadow-md">
              <Settings className="mr-2" size={18} />
              Adjust Inventory
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-orange-600">Adjust Inventory</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 text-sm text-gray-800 dark:text-gray-200">
              <p>Adjust stock levels for selected items. Form fields go here.</p>
              {/* Placeholder: replace with actual form */}
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Inventory Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {inventoryCardsData.map((card, index) => (
          <InventoryCard key={index} {...card} />
        ))}
      </div>

      {/* Inventory Trend Chart */}
      <div className="bg-gradient-to-b from-orange-50 to-white dark:from-orange-500/10 dark:via-white/5 dark:to-orange-400/10 rounded-xl shadow-lg p-10 border border-orange-300 dark:border-orange-700 mb-10">
        <h2 className="text-sm font-semibold mb-4 text-orange-600 dark:text-orange-300">
          Inventory Trend
        </h2>
        <div className="h-100 w-500">
          <Line data={inventoryTrendData} />
        </div>
      </div>

      {/* Low Stock Warehouses Section */}
      <WarehouseStockSections />
    </div>
  );
};

export default StockInventoryPage;