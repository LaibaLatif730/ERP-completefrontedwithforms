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
          {/* Export Inventory Button with Dialog */}
<Dialog>
  <DialogTrigger asChild>
    <button className="bg-orange-500 text-white flex items-center justify-center py-2 px-4 rounded-lg shadow-md hover:bg-orange-600 transition-all duration-200">
      <Download size={18} className="mr-2" />
      Export Inventory
    </button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-md">
    <DialogHeader>
      <DialogTitle className="text-orange-600">Export Inventory</DialogTitle>
    </DialogHeader>
    <form className="space-y-4 text-sm text-gray-800 dark:text-gray-200">
      <div>
        <label htmlFor="export-format" className="block mb-1 font-medium">Export Format</label>
        <select
          id="export-format"
          className="w-full px-3 py-2 rounded border border-orange-300 dark:border-orange-700 bg-white dark:bg-[#1a1a1a]"
        >
          <option value="csv">CSV</option>
          <option value="pdf">PDF</option>
          <option value="xlsx">Excel (XLSX)</option>
        </select>
      </div>
      <div>
        <label htmlFor="export-category" className="block mb-1 font-medium">Category</label>
        <select
          id="export-category"
          className="w-full px-3 py-2 rounded border border-orange-300 dark:border-orange-700 bg-white dark:bg-[#1a1a1a]"
        >
          <option>All Categories</option>
          <option>Electronics</option>
          <option>Clothing</option>
          <option>Home & Garden</option>
          <option>Jewelry</option>
        </select>
      </div>
      <div>
        <label htmlFor="start-date" className="block mb-1 font-medium">Start Date</label>
        <input
          type="date"
          id="start-date"
          className="w-full px-3 py-2 rounded border border-orange-300 dark:border-orange-700 bg-white dark:bg-[#1a1a1a]"
        />
      </div>
      <div>
        <label htmlFor="end-date" className="block mb-1 font-medium">End Date</label>
        <input
          type="date"
          id="end-date"
          className="w-full px-3 py-2 rounded border border-orange-300 dark:border-orange-700 bg-white dark:bg-[#1a1a1a]"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded"
      >
        Export Now
      </button>
    </form>
  </DialogContent>
</Dialog>

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
      <form className="space-y-4 text-sm text-gray-800 dark:text-gray-200">
        <div>
          <label htmlFor="item-name" className="block mb-1 font-medium">Item Name</label>
          <input type="text" id="item-name" className="w-full px-3 py-2 rounded border border-orange-300 dark:border-orange-700 bg-white dark:bg-[#1a1a1a]" />
        </div>
        <div>
          <label htmlFor="quantity" className="block mb-1 font-medium">Quantity</label>
          <input type="number" id="quantity" className="w-full px-3 py-2 rounded border border-orange-300 dark:border-orange-700 bg-white dark:bg-[#1a1a1a]" />
        </div>
        <div>
          <label htmlFor="warehouse" className="block mb-1 font-medium">Warehouse</label>
          <input type="text" id="warehouse" className="w-full px-3 py-2 rounded border border-orange-300 dark:border-orange-700 bg-white dark:bg-[#1a1a1a]" />
        </div>
        <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded">
          Submit Entry
        </button>
      </form>
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
      <form className="space-y-4 text-sm text-gray-800 dark:text-gray-200">
        <div>
          <label htmlFor="item" className="block mb-1 font-medium">Item</label>
          <input type="text" id="item" className="w-full px-3 py-2 rounded border border-orange-300 dark:border-orange-700 bg-white dark:bg-[#1a1a1a]" />
        </div>
        <div>
          <label htmlFor="from" className="block mb-1 font-medium">From Warehouse</label>
          <input type="text" id="from" className="w-full px-3 py-2 rounded border border-orange-300 dark:border-orange-700 bg-white dark:bg-[#1a1a1a]" />
        </div>
        <div>
          <label htmlFor="to" className="block mb-1 font-medium">To Warehouse</label>
          <input type="text" id="to" className="w-full px-3 py-2 rounded border border-orange-300 dark:border-orange-700 bg-white dark:bg-[#1a1a1a]" />
        </div>
        <div>
          <label htmlFor="transfer-qty" className="block mb-1 font-medium">Quantity</label>
          <input type="number" id="transfer-qty" className="w-full px-3 py-2 rounded border border-orange-300 dark:border-orange-700 bg-white dark:bg-[#1a1a1a]" />
        </div>
        <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded">
          Submit Transfer
        </button>
      </form>
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
      <form className="space-y-4 text-sm text-gray-800 dark:text-gray-200">
        <div>
          <label htmlFor="adjust-item" className="block mb-1 font-medium">Item</label>
          <input type="text" id="adjust-item" className="w-full px-3 py-2 rounded border border-orange-300 dark:border-orange-700 bg-white dark:bg-[#1a1a1a]" />
        </div>
        <div>
          <label htmlFor="current-stock" className="block mb-1 font-medium">Current Stock</label>
          <input type="number" id="current-stock" className="w-full px-3 py-2 rounded border border-orange-300 dark:border-orange-700 bg-white dark:bg-[#1a1a1a]" />
        </div>
        <div>
          <label htmlFor="new-stock" className="block mb-1 font-medium">New Stock Level</label>
          <input type="number" id="new-stock" className="w-full px-3 py-2 rounded border border-orange-300 dark:border-orange-700 bg-white dark:bg-[#1a1a1a]" />
        </div>
        <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded">
          Apply Adjustment
        </button>
      </form>
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