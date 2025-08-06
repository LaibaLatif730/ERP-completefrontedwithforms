// app/stock/tracking/page.tsx
"use client";

import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import { Search, ChevronDown, Truck, FilePlus2, Send, BarChart3 } from 'lucide-react';

import { cn } from "@/lib/utils";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
});

import SourceInventoryCard from '@/components/Stock/SourceInventoryCard';
import { shipmentCardsData, liveShipmentsData, recentDeliveriesData } from '@/lib/stockdata';

const StockTrackingPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterShipmentStatus, setFilterShipmentStatus] = useState('All');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleShipmentStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterShipmentStatus(event.target.value);
  };

  const handleInitiateNewShipment = () => alert("Initiate New Shipment clicked");
  const handleCreateItem = () => alert("Create New Item clicked");
  const handleSubmitStock = () => alert("Submit Stock Report clicked");
  const handleGenerateReport = () => alert("Generate Report clicked");

  const getShipmentStatusColorClass = (status: string) => {
    switch (status) {
      case 'Delivered':
      case 'Received':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'In Transit (Customs)':
      case 'Out for Delivery':
      case 'Processing at Warehouse':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300';
      case 'Delayed (Weather)':
      case 'Exception (Documentation)':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const filteredLiveShipments = liveShipmentsData.filter(shipment => {
    const matchesSearch = shipment.trackingNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      shipment.origin.toLowerCase().includes(searchTerm.toLowerCase()) ||
      shipment.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
      shipment.currentStatus.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterShipmentStatus === 'All' || shipment.currentStatus.includes(filterShipmentStatus);
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="bg-gradient-to-br from-orange-500/[0.02] via-transparent to-blue-500/[0.02] dark:bg-[#121111] min-h-screen p-6 sm:p-8 lg:p-10 font-sans text-gray-900 dark:text-white">
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
                  Customer Support Account Help
                </h1>
              </div>
      
              <div className="relative bg-white/50 dark:bg-gray-800/50 text-black dark:text-white font-mono px-2 py-1 rounded-xl text-xs z-10 flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
             <span>Live Dashboard</span>
              </div>
      
            </div>

      {/* 🔶 Action Buttons & Filter */}
      <div className="bg-gradient-to-b from-zinc-100 to-white dark:from-orange-500/20 dark:via-white/5 dark:to-blue-500/20 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-zinc-900 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="relative flex-1 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search by Tracking #, Order ID..."
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-700 text-zinc-900 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#e5a004] focus:border-transparent"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
        </div>

        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
          <select
           aria-label="Select department"
            className="appearance-none bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-700 text-zinc-900 dark:text-white py-1.5 px-3 pr-8 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#e5a004] focus:border-transparent w-full text-sm"
            onChange={handleShipmentStatusChange}
          >
            <option>All</option>
            <option>In Transit</option>
            <option>Delivered</option>
            <option>Delayed</option>
            <option>Processing</option>
            <option>Exception</option>
          </select>
          <ChevronDown size={18} className="absolute right-3 top-[54%] text-gray-500 dark:text-gray-400 pointer-events-none" />

          {/* Action Buttons */}
          <button onClick={handleInitiateNewShipment} className="bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center py-1.5 px-3 rounded-lg shadow-md transition-all duration-200 text-sm">
            <Truck size={18} className="mr-1.5" />
            Initiate Shipment
          </button>
          <button onClick={handleCreateItem} className="bg-orange-500 hover:bg-orange-600 text-white flex items-center py-1.5 px-3 rounded-lg shadow-md transition-all duration-200 text-sm">
            <FilePlus2 className="mr-1.5" size={18} />
            Create Item
          </button>
          <button onClick={handleSubmitStock} className="bg-orange-500 hover:bg-orange-600 text-white flex items-center py-1.5 px-3 rounded-lg shadow-md transition-all duration-200 text-sm">
            <Send className="mr-1.5" size={18} />
            Submit Stock
          </button>
          <button onClick={handleGenerateReport} className="bg-orange-500 hover:bg-orange-600 text-white flex items-center py-1.5 px-3 rounded-lg shadow-md transition-all duration-200 text-sm">
            <BarChart3 className="mr-1.5" size={18} />
            Generate Report
          </button>
        </div>
      </div>

      {/* 🔶 Shipment Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {shipmentCardsData.map((card, index) => (
          <SourceInventoryCard key={index} {...card} />
        ))}
      </div>

      {/* 🔶 Shipment Table */}
      <div className="bg-gradient-to-b from-zinc-100 to-white dark:from-orange-500/20 dark:via-white/5 dark:to-blue-500/20 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-zinc-900 mb-8 overflow-x-auto">
        <h2 className="text-lg font-bold mb-4 text-zinc-900 dark:text-white">Live Shipment Status</h2>
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              {['Tracking Number', 'Origin', 'Destination', 'Current Status', 'ETA', 'Last Update'].map(header => (
                <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-[#1a1a1a] divide-y divide-gray-200 dark:divide-gray-700">
            {filteredLiveShipments.length > 0 ? (
              filteredLiveShipments.map((shipment) => (
                <tr key={shipment.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-zinc-900 dark:text-white">{shipment.trackingNumber}</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">{shipment.origin}</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">{shipment.destination}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-2 inline-flex text-xs font-semibold rounded-full ${getShipmentStatusColorClass(shipment.currentStatus)}`}>
                      {shipment.currentStatus}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">{shipment.eta}</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">{shipment.lastUpdate}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="px-6 py-4 text-center text-sm text-gray-500 dark:text-gray-400">No matching shipments found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* 🔶 Recent Deliveries */}
      <div className="bg-gradient-to-b from-zinc-100 to-white dark:from-orange-500/20 dark:via-white/5 dark:to-blue-500/20 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-zinc-900 overflow-x-auto">
        <h2 className="text-lg font-bold mb-4 text-zinc-900 dark:text-white">Recent Deliveries & Receipts</h2>
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              {['Date', 'Tracking Number', 'Type', 'Items', 'Status'].map(header => (
                <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-[#1a1a1a] divide-y divide-gray-200 dark:divide-gray-700">
            {recentDeliveriesData.length > 0 ? (
              recentDeliveriesData.map((delivery) => (
                <tr key={delivery.id}>
                  <td className="px-6 py-4 text-sm font-medium text-zinc-900 dark:text-white">{delivery.date}</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">{delivery.trackingNumber}</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">{delivery.type}</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">{delivery.items}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-2 inline-flex text-xs font-semibold rounded-full ${getShipmentStatusColorClass(delivery.status)}`}>
                      {delivery.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="px-6 py-4 text-center text-sm text-gray-500 dark:text-gray-400">No recent deliveries or receipts found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StockTrackingPage;