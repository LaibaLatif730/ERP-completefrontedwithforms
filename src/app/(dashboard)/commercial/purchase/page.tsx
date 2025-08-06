// app/(commercial)/purchase/management/page.tsx #f5793b
"use client";

import React, { useState } from 'react';
import { Search, ChevronDown, Plus, Package, Settings, ShoppingCart} from 'lucide-react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';
import { LucideIcon } from "lucide-react";
// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

import { cn } from "@/lib/utils";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
});

import PurchaseOverviewCard from '@/components/commercial/PurchaseOverviewCard';

import LowStockAlertItem from '@/components/commercial/LowStockAlertItem';

// Dummy data for Overview Cards
import { overviewCardsData } from '@/lib/commercialdata';

// Dummy data for Recent Purchase Orders
import { purchaseOrdersData } from '@/lib/commercialdata';

// Dummy data for Low Stock / Reorder Needs (reused from ReorderAlertsPage)
import { lowStockReorderData } from '@/lib/commercialdata';

// Dummy data for Purchase Trend Chart
import { purchaseTrendData } from '@/lib/commercialdata';

interface NavbarProps {
  onNavLinkClick: (link: string) => void;
}

interface NavDropdownProps {
  title: string;
  icon: LucideIcon; // Replace 'any' with the actual type of your icon component
  links: string[];
}

// --- COMPONENTS ---

// Navbar Component
const Navbar = ({ onNavLinkClick }: NavbarProps) => {
  const NavDropdown = ({ title, icon: Icon, links } : NavDropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = (link: string) => {
      onNavLinkClick(link);
      setIsOpen(false);
    };

    return (
      <div className="relative z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white/50 dark:bg-gray-800/50 text-black dark:text-white flex items-center justify-center py-2 px-4 rounded-lg shadow-md hover:bg-orange-500 transition-all duration-200 w-full sm:w-auto whitespace-nowrap text-sm"
        >
          <Icon size={18} className="mr-2" />
          {title}
          <ChevronDown size={16} className={`ml-2 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        {isOpen && (
          <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-50 border border-gray-200 dark:border-gray-700">
            <ul className="py-1">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link);
                    }}
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };
  
  const ordersLinks = ['Purchase Orders', 'Vendors', 'Request for Quotation'];
  const configLinks = ['Vendor Price lists', 'Categories'];
  const productsLinks = ['Products'];
  
  return (
    <div className="flex flex-col md:flex-row gap-4 relative z-20">
      <NavDropdown title="Orders" icon={ShoppingCart} links={ordersLinks} />
      <NavDropdown title="Configuration" icon={Settings} links={configLinks} />
      <NavDropdown title="Products" icon={Package} links={productsLinks} />
    </div>
  );
};

const PurchaseManagementPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [filterSupplier, setFilterSupplier] = useState('All Suppliers');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterStatus(event.target.value);
  };

  const handleSupplierChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterSupplier(event.target.value);
  };

  const handleNewPurchaseOrder = () => {
    alert("New Purchase Order button clicked!");
  };

  const filteredPurchaseOrders = purchaseOrdersData.filter(order => {
    const matchesSearch = order.poNum.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          order.supplier.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = filterStatus === 'All' || order.status === filterStatus;
    const matchesSupplier = filterSupplier === 'All Suppliers' || order.supplier === filterSupplier;

    return matchesSearch && matchesStatus && matchesSupplier;
  });

  const uniqueSuppliers = ['All Suppliers', ...new Set(purchaseOrdersData.map(order => order.supplier))];

  return (
    <div className="min-h-screen p-6 sm:p-8 lg:p-10 font-sans text-gray-900 dark:text-white">
      {/* Header Section */}
      <div className="mb-8 relative z-20 p-3 inset-0 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-xl  flex justify-between items-center">
      <div className="">
        <h1 className={cn("text-lg font-bold text-orange-500 dark:text-zinc-100", pacifico.className )}>Purchase Management</h1>
        <p className="text-zinc-800 dark:text-zinc-200 text-xs">Oversee procurement processes and supplier interactions</p>
      </div>
      {/* Navbar Section */}
      <div className="relative z-20 flex flex-col md:flex-row gap-4">
        <Navbar onNavLinkClick={(link) => console.log(`Navigating to: ${link}`)} />
      </div>
      </div>

      
      {/* Filter/Search Bar and New PO Button */}
      <div className="relative z-[0px] inset-0 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-xl shadow-lg p-6 border border-gray-200 dark:border-zinc-900 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative flex-1 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search PO#, product, or supplier..."
            className="w-full pl-10 pr-4 py-2 text-sm rounded-lg bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-700 text-zinc-900 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#e5a004] focus:border-transparent"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="relative w-full sm:w-auto">
            <select
            aria-label="Select department"
              className="appearance-none bg-white text-sm dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-700 text-zinc-900 dark:text-white py-2 px-4 pr-8 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#e5a004] focus:border-transparent w-full"
              value={filterStatus}
              onChange={handleStatusChange}
            >
              <option>All</option>
              <option>Pending</option>
              <option>Approved</option>
              <option>Shipped</option>
              <option>Received</option>
              <option>Overdue</option>
            </select>
            <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 pointer-events-none" />
          </div>
          <div className="relative w-full sm:w-auto">
            <select
            aria-label="Select department"
              className="appearance-none bg-white text-sm dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-700 text-zinc-900 dark:text-white py-2 px-4 pr-8 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#e5a004] focus:border-transparent w-full"
              value={filterSupplier}
              onChange={handleSupplierChange}
            >
              {uniqueSuppliers.map(supplier => (
                <option key={supplier}>{supplier}</option>
              ))}
            </select>
            <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 pointer-events-none" />
          </div>
          <button
            onClick={handleNewPurchaseOrder}
            className="bg-white/50 dark:bg-gray-800/50 text-sm text-black dark:text-white text-sm flex items-center justify-center py-2 px-4 rounded-lg shadow-md hover:bg-[#e5a004] transition-all duration-200 w-full sm:w-auto whitespace-nowrap"
          >
            <Plus size={18} className="mr-2" />
            New Purchase Order
          </button>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {overviewCardsData.map((card, index) => (
          <PurchaseOverviewCard key={index} {...card} />
        ))}
      </div>

      {/* Recent Purchase Orders / All Purchase Orders Table */}
      <div className="inset-0 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-xl shadow-lg p-6 border border-gray-200 dark:border-zinc-900 mb-8 overflow-x-auto">
        <h2 className="text-lg font-bold mb-4 text-zinc-900 dark:text-white">Recent Purchase Orders</h2>
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">PO#</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Supplier</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Date</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Amount</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Expected Delivery</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {filteredPurchaseOrders.length > 0 ? (
              filteredPurchaseOrders.map((order) => (
                <tr key={order.poNum}>
                  <td className="px-6 py-4 whitespace-nowrap text-xs font-medium text-zinc-900 dark:text-white">{order.poNum}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300">{order.supplier}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300">{order.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300">{order.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      order.status === 'Approved' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' :
                      order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300' :
                      order.status === 'Shipped' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300' :
                      order.status === 'Received' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300' :
                      'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300">{order.expectedDelivery}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="px-6 py-4 text-center text-xs text-gray-500 dark:text-gray-400">No purchase orders found.</td>
              </tr>
            )}
          </tbody>
        </table>
        {/* Pagination and Sorting options could go here */}
      </div>

      {/* Low Stock / Reorder Needs & Purchase Trend */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Low Stock / Reorder Needs Section */}
        <div className="inset-0 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-xl shadow-lg p-6 border border-gray-200 dark:border-zinc-900">
          <h2 className="text-lg font-bold mb-4 text-zinc-900 dark:text-white">Low Stock / Reorder Needs</h2>
          <p className="text-xs text-gray-600 dark:text-gray-300 mb-6">Summary of critical low stock items requiring attention.</p>
          {lowStockReorderData.length > 0 ? (
            lowStockReorderData.map((item, index) => (
              <LowStockAlertItem key={index} {...item} />
            ))
          ) : (
            <p className="text-gray-500 dark:text-gray-400 text-sm">No low stock items currently.</p>
          )}
        </div>

        {/* Purchase Trend (Line Chart) */}
        <div className="inset-0 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-xl shadow-lg p-6 border border-gray-200 dark:border-zinc-900">
          <h2 className="text-lg font-bold mb-4 text-zinc-900 dark:text-white">Purchase Trend</h2>
          <p className="text-xs text-gray-600 dark:text-gray-300 mb-6">Monthly spend or purchase order count.</p>
          <div className="h-64">
            <Line data={purchaseTrendData} />

             {/* options={getChartOptions(document.documentElement.classList.contains('dark'))} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseManagementPage;
