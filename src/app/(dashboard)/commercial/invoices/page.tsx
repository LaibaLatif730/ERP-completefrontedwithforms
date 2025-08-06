// app/(commercial)/invoices/page.tsx
"use client";

import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Tooltip, Legend);

import { cn } from "@/lib/utils";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
});

const customerLinks = ['Invoices', 'Credit Notes', 'Payments', 'Customers'];
const vendorLinks = ['Bills', 'Refunds', 'Payments', 'Products', 'Vendors'];

interface Dropdownprops {
  title: string;
  links: string[];
}
// --- COMPONENT: Dropdown ---
const Dropdown = ({ title, links }: Dropdownprops) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (link: string) => {
    // In a real application, you would navigate here.
    // Replaced alert with console.log for a better user experience in this environment.
    console.log(`Navigating to ${link}...`);
    setIsOpen(false);
  };

  return (
    <div className="relative z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white/50 dark:bg-gray-800/50 text-black dark:text-white flex items-center justify-center py-1.5 px-3 rounded-lg shadow-md hover:bg-[#e5a004] transition-all duration-200 w-full sm:w-auto whitespace-nowrap text-sm"
      >
        {/*         <Icon size={18} className="mr-1.5" /> */}
        {title}
        <ChevronDown size={16} className={`ml-2 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="absolute z-50 right-0 mt-2 w-48 bg-white/90 dark:bg-black/80 backdrop-blur-md  rounded-lg shadow-lg  border border-gray-200 dark:border-gray-700">
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

import InvoiceCard from '@/components/commercial/InvoiceCard';
// Dummy data for Invoice Overview Cards
import { invoiceCardsData } from '@/lib/commercialdata';

// Dummy data for All Invoices Table
import { invoiceData } from '@/lib/commercialdata';


const InvoicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [filterType, setFilterType] = useState('All');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterStatus(event.target.value);
  };

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterType(event.target.value);
  };

  const filteredInvoices = invoiceData.filter(invoice => {
    const matchesSearch = invoice.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.entity.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'All' || invoice.status === filterStatus;
    const matchesType = filterType === 'All' || invoice.type === filterType;
    return matchesSearch && matchesStatus && matchesType;
  });

  return (
    <div className="min-h-screen p-6 sm:p-8 lg:p-10 font-sans text-gray-900 dark:text-white">
      {/* Header Section */}
      <div className="mb-8 p-2 rounded-xl inset-0 bg-white/90 dark:bg-black/80 backdrop-blur-md flex justify-between items-center relative z-10">
        <div className="">
          <h1 className={cn("text-lg font-bold text-orange-500 dark:text-zinc-100", pacifico.className)}>Invoices</h1>
          <p className="text-zinc-800 dark:text-zinc-200 text-xs">Manage incoming and outgoing financial documents</p>
        </div>
          <div className="flex gap-3">
      <div className="hover:text-orange-600 transition-colors duration-200">
        <Dropdown title="Customer" links={customerLinks} />
      </div>
      <div className="hover:text-orange-600 transition-colors duration-200">
        <Dropdown title="Vendor" links={vendorLinks} />
      </div>
    </div>

      </div>


      {/* Filter/Search Bar & Action Buttons */}
      <div className="relative z-[0px] inset-0 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-xl shadow-lg p-6 border border-gray-200 dark:border-zinc-900 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative flex-1 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search invoices..."
            className="w-full pl-10 pr-4 py-2 text-sm rounded-lg bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-700 text-zinc-900 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#e5a004] focus:border-transparent"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
        </div>
        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto"> {/* Reduced gap to 2 */}
          <div className="relative w-full sm:w-auto">
            <select
              aria-label="Select department"
              className="appearance-none bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-700 text-zinc-900 dark:text-white py-1.5 px-3 pr-8 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#e5a004] focus:border-transparent w-full text-sm" // Reduced padding and font size
              value={filterStatus}
              onChange={handleStatusChange}
            >
              <option>All</option>
              <option>Paid</option>
              <option>Pending</option>
              <option>Overdue</option>
              <option>Draft</option>
            </select>
            <ChevronDown size={18} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 pointer-events-none" /> {/* Adjusted icon size and position */}
          </div>
          <div className="relative w-full sm:w-auto">
            <select
              aria-label="Select department"
              className="appearance-none bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-700 text-zinc-900 dark:text-white py-1.5 px-3 pr-8 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#e5a004] focus:border-transparent w-full text-sm" // Reduced padding and font size
              value={filterType}
              onChange={handleTypeChange}
            >
              <option>All</option>
              <option>Sales</option>
              <option>Purchase</option>
              <option>Service</option>
            </select>
            <ChevronDown size={18} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 pointer-events-none" /> {/* Adjusted icon size and position */}
          </div>
        </div>
      </div>

      {/* Invoice Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {invoiceCardsData.map((card, index) => (
          <InvoiceCard key={index} {...card} />
        ))}
      </div>

      {/* All Invoices Table */}
      <div className="inset-0 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-xl shadow-lg p-6 border border-gray-200 dark:border-zinc-900 mb-8 overflow-x-auto">
        <h2 className="text-lg font-bold mb-4 text-zinc-900 dark:text-white">All Invoices</h2>
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Invoice #</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Type</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Customer/Vendor</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Date</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Due Date</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Amount</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {filteredInvoices.length > 0 ? (
              filteredInvoices.map((invoice) => (
                <tr key={invoice.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-xs font-medium text-zinc-900 dark:text-white">{invoice.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300">{invoice.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300">{invoice.entity}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300">{invoice.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300">{invoice.dueDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300">${invoice.amount.toLocaleString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${invoice.status === 'Paid' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' :
                        invoice.status === 'Pending' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300' :
                          invoice.status === 'Overdue' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300' :
                            'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                      }`}>
                      {invoice.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="px-6 py-4 text-center text-xs text-gray-500 dark:text-gray-400">No invoices found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvoicesPage;