// app/(commercial)/warehouse/management/page.tsx
"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";

import React, { useState } from "react";
import {
  Search,
  ChevronDown,
  Warehouse,
  PackageOpen,
  PackageCheck,
  CheckCircle,
  AlertCircle,
  RefreshCw,
  Download,
} from "lucide-react";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
});

// Dummy data for WarehouseUtilizationCard
import WarehouseUtilizationCard from '@/components/stock/WarehouseUtilizationCard';

// Dummy data for Warehouse Utilization
import { warehouseData } from '@/lib/stockdata';

// Dummy data detailedWarehouseInventory
import { detailedWarehouseInventory } from '@/lib/stockdata';

// Dummy data for Recent Warehouse Activities
import { recentWarehouseActivities } from '@/lib/stockdata';

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
    <div className="min-h-screen p-6 sm:p-8 lg:p-10 font-sans text-gray-900 dark:text-white">
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
                  Stock Management Warehouse
                </h1>
              </div>
      
              <div className="relative bg-white/50 dark:bg-gray-800/50 text-black dark:text-white font-mono px-2 py-1 rounded-xl text-xs z-10 flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
             <span>Live Dashboard</span>
              </div>
      
            </div>
      {/* Filter/Search Bar */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8 inset-0 bg-white/90 dark:bg-black/80 backdrop-blur-md shadow-lg p-6 rounded-xl border border-gray-200 dark:border-zinc-900 ">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search warehouses or locations..."
            className="w-full pl-10 pr-4 py-2 text-sm rounded-lg bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-700 text-zinc-900 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#e5a004] focus:border-transparent"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
        </div>
        <div className="relative w-full sm:w-auto">
          <select
            className="appearance-none bg-white text-sm dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-700 text-zinc-900 dark:text-white py-2 px-4 pr-8 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#e5a004] focus:border-transparent w-full"
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
                      {/* Button Row */}
      <div className="flex flex-wrap gap-4 mb-6">
                {/* View Expired Items Dialog */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="default" className="bg-orange-500 hover:bg-orange-600 text-white">
                    <RefreshCw className="w-4 h-4 mr-2" />
                    View Expired Items
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>View Expired Items</DialogTitle>
                    <DialogDescription>Filter and view products that are past their expiration date.</DialogDescription>
                  </DialogHeader>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm mb-1">Select Warehouse</label>
                      <select className="w-full p-2 rounded-md bg-white dark:bg-black border border-gray-300 dark:border-gray-700">
                          <option>Main Warehouse</option>
                          <option>East Warehouse</option>
                          <option>North Warehouse</option>
                          <option>South Warehouse</option>
                          <option>West Warehouse</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm mb-1">Before Date</label>
                      <input
                        type="date"
                        className="w-full p-2 rounded-md bg-white dark:bg-black border border-gray-300 dark:border-gray-700"
                      />
                    </div>
                    <Button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white w-full">View Items</Button>
                  </form>
                </DialogContent>
              </Dialog>

              {/* Restock Request Dialog */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="default" className="bg-orange-500 hover:bg-orange-600 text-white">
                    <Download className="w-4 h-4 mr-2" />
                    Restock Request
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Create Restock Request</DialogTitle>
                    <DialogDescription>Fill the form to request restocking for low inventory items.</DialogDescription>
                  </DialogHeader>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm mb-1">Item Name</label>
                      <input type="text" placeholder="Enter product name" className="w-full p-2 rounded-md bg-white dark:bg-black border border-gray-300 dark:border-gray-700" />
                    </div>
                    <div>
                      <label className="block text-sm mb-1">Quantity Needed</label>
                      <input type="number" min="1" placeholder="e.g. 100" className="w-full p-2 rounded-md bg-white dark:bg-black border border-gray-300 dark:border-gray-700" />
                    </div>
                    <div>
                      <label className="block text-sm mb-1">Priority</label>
                      <select className="w-full p-2 rounded-md bg-white dark:bg-black border border-gray-300 dark:border-gray-700">
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                      </select>
                    </div>
                    <Button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white w-full">Send Request</Button>
                  </form>
                </DialogContent>
              </Dialog>
          {/* Inventory Audit Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="default" className="bg-orange-500 hover:bg-orange-600 text-white">
                Inventory Audit
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Initiate Inventory Audit</DialogTitle>
                <DialogDescription>Audit inventory levels for discrepancies and validation.</DialogDescription>
              </DialogHeader>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm mb-1">Audit Type</label>
                  <select className="w-full p-2 rounded-md bg-white dark:bg-black border border-gray-300 dark:border-gray-700">
                    <option>Full Audit</option>
                    <option>Partial Audit</option>
                    <option>Random Sampling</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm mb-1">Schedule Date</label>
                  <input
                    type="date"
                    className="w-full p-2 rounded-md bg-white dark:bg-black border border-gray-300 dark:border-gray-700"
                  />
                </div>
                <Button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white w-full">Start Audit</Button>
              </form>
            </DialogContent>
          </Dialog>
      </div>


      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Warehouse Utilization Section (Left Column) */}
        <div className="lg:col-span-2 inset-0 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-xl shadow-lg p-6 border border-gray-200 dark:border-zinc-900">
          <h2 className="text-lg font-bold mb-4 text-zinc-900 dark:text-white">Warehouse Utilization</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">Current space usage across all active warehouses</p>
          {filteredWarehouses.map((data, index) => (
            <WarehouseUtilizationCard key={index} {...data} />
          ))}
        </div>

        {/* Recent Warehouse Activities Section (Right Column - Smaller Card) */}
        <div className="lg:col-span-1 inset-0 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-xl shadow-lg p-6 border border-gray-200 dark:border-zinc-900">
          <h2 className="text-lg font-bold mb-4 text-zinc-900 dark:text-white">Recent In/Out Shipments</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">Latest movements of inventory</p>
          {recentWarehouseActivities.map(activity => (
            <div key={activity.id} className="flex items-center mb-3 last:mb-0 text-gray-700 dark:text-gray-300">
              {activity.type === 'inbound' ? (
                <PackageCheck size={18} className="text-green-500 mr-3 flex-shrink-0" />
              ) : (
                <PackageOpen size={18} className="text-red-500 mr-3 flex-shrink-0" />
              )}
              <div className="flex-1">
                <p className="font-semibold text-zinc-900 dark:text-white">{activity.product} ({activity.quantity})</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{activity.warehouse} - {activity.date}</p>
              </div>
              {/* Replaced ArrowRight with CheckCircle for inbound */}
              {activity.type === 'inbound' ? (
                <CheckCircle size={16} className="text-green-500 ml-2" />
              ) : (
              // Replaced ArrowLeft with AlertCircle for outbound
                <AlertCircle size={16} className="text-red-500 ml-2" />
              )}
            </div>
          ))}
        </div>

        {/* Inventory Distribution by Warehouse Section (Full Width below others on mobile, spans 2 columns on larger screens) */}
        <div className="lg:col-span-3 inset-0 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-xl shadow-lg p-6 border border-gray-200 dark:border-zinc-900 mt-6">
          <h2 className="text-lg font-bold mb-4 text-zinc-900 dark:text-white">Detailed Inventory by Warehouse</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">Breakdown of products in each warehouse location</p>
          {detailedWarehouseInventory.map((whInv, index) => (
            <div key={index} className="mb-4 last:mb-0">
              <button
                onClick={() => toggleWarehouseExpansion(whInv.warehouse)}
                className="flex items-center justify-between w-full p-3 bg-gray-50 dark:bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <span className="font-semibold text-zinc-900 dark:text-white flex items-center">
                  <Warehouse size={18} className="mr-2 text-gray-600 dark:text-gray-300" />
                  {whInv.warehouse}
                </span>
                <ChevronDown size={18} className={`text-gray-500 dark:text-gray-400 transform transition-transform duration-220 ${expandedWarehouse === whInv.warehouse ? 'rotate-180' : ''}`} />
              </button>
              {expandedWarehouse === whInv.warehouse && (
                <div className="mt-2 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                  <ul className="space-y-1">
                    {whInv.products.slice(0, 5).map((product, prodIndex) => ( // Show top 5 products
                      <li key={prodIndex} className="flex justify-between text-xs text-gray-700 dark:text-gray-300">
                        <span>{product.name} ({product.category})</span>
                        <span className="font-medium">{product.quantity}</span>
                      </li>
                    ))}
                  </ul>
                  {whInv.products.length > 5 && (
                    <button className="mt-3 text-xs text-[#b16a04] hover:underline dark:text-[#e5a004]">
                      View All Products ({whInv.products.length})
                    </button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WarehouseManagementPage;