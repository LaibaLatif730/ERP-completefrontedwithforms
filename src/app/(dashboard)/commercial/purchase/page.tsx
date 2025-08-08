"use client";

import React, { useState } from 'react';
import { Search, ChevronDown, Plus, Package, Settings, ShoppingCart } from 'lucide-react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Pacifico } from "next/font/google";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import PurchaseOverviewCard from '@/components/commercial/PurchaseOverviewCard';
import LowStockAlertItem from '@/components/commercial/LowStockAlertItem';
import { overviewCardsData, purchaseOrdersData, lowStockReorderData, purchaseTrendData } from '@/lib/commercialdata';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"], variable: "--font-pacifico" });

interface NavbarProps {
  onNavLinkClick: (link: string) => void;
}

interface NavDropdownProps {
  title: string;
  icon: LucideIcon;
  links: string[];
}

const Navbar = ({ onNavLinkClick }: NavbarProps) => {
  const NavDropdown = ({ title, icon: Icon, links }: NavDropdownProps) => {
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

  return (
    <div className="flex flex-col md:flex-row gap-4 relative z-20">
      <NavDropdown title="Orders" icon={ShoppingCart} links={["Purchase Orders", "Vendors", "Request for Quotation"]} />
      <NavDropdown title="Configuration" icon={Settings} links={["Vendor Price lists", "Categories"]} />
      <NavDropdown title="Products" icon={Package} links={["Products"]} />
    </div>
  );
};

const PurchaseManagementPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [filterSupplier, setFilterSupplier] = useState('All Suppliers');

  const [showDialog, setShowDialog] = useState(false);
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(event.target.value);
  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => setFilterStatus(event.target.value);
  const handleSupplierChange = (event: React.ChangeEvent<HTMLSelectElement>) => setFilterSupplier(event.target.value);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ productName, quantity, price, description });
    setShowDialog(false);
    setProductName('');
    setQuantity('');
    setPrice('');
    setDescription('');
  };

  const filteredPurchaseOrders = purchaseOrdersData.filter(order => {
    const matchesSearch = order.poNum.toLowerCase().includes(searchTerm.toLowerCase()) || order.supplier.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'All' || order.status === filterStatus;
    const matchesSupplier = filterSupplier === 'All Suppliers' || order.supplier === filterSupplier;
    return matchesSearch && matchesStatus && matchesSupplier;
  });

  const uniqueSuppliers = ['All Suppliers', ...new Set(purchaseOrdersData.map(order => order.supplier))];

  return (
    <div className="min-h-screen p-6 sm:p-8 lg:p-10 font-sans text-gray-900 dark:text-white">
      {/* Header + Navbar */}
      <div className="mb-8 relative z-20 p-3 inset-0 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-xl flex justify-between items-center">
        <div>
          <h1 className={cn("text-lg font-bold text-orange-500 dark:text-zinc-100", pacifico.className)}>Purchase Management</h1>
          <p className="text-zinc-800 dark:text-zinc-200 text-xs">Oversee procurement processes and supplier interactions</p>
        </div>
        <Navbar onNavLinkClick={(link) => console.log(`Navigating to: ${link}`)} />
      </div>

      {/* Search + Filters + Add Purchase Dialog */}
      <div className="relative z-[0px] bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-xl shadow-lg p-6 border border-gray-200 dark:border-zinc-900 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative flex-1 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search PO#, product, or supplier..."
            className="w-full pl-10 pr-4 py-2 text-sm rounded-lg bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-700 text-zinc-900 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#e5a004]"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <select
          title="Filter by Status"
          className="bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-700 text-sm py-2 px-4 pr-8 rounded-lg"
          value={filterStatus}
          onChange={handleStatusChange}>
            {['All', 'Pending', 'Approved', 'Shipped', 'Received', 'Overdue'].map(status => <option key={status}>{status}</option>)}
          </select>

          <select title='Filter by status' 
          className="bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-700 text-sm py-2 px-4 pr-8 rounded-lg" value={filterSupplier} onChange={handleSupplierChange}>
            {uniqueSuppliers.map(supplier => <option key={supplier}>{supplier}</option>)}
          </select>

          <Dialog open={showDialog} onOpenChange={setShowDialog}>
            <DialogTrigger asChild>
              <Button className='bg-orange-500 hover:bg-orange-600' onClick={() => setShowDialog(true)}><Plus className="h-4 w-4" /> Add Purchase</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Purchase</DialogTitle>
                <DialogDescription>Fill out the form below to add a new purchase entry.</DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="grid gap-4 py-4">
                <Label htmlFor="productName">Product Name</Label>
                <Input id="productName" value={productName} onChange={(e) => setProductName(e.target.value)} required />

                <Label htmlFor="quantity">Quantity</Label>
                <Input id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} required type="number" />

                <Label htmlFor="price">Price</Label>
                <Input id="price" value={price} onChange={(e) => setPrice(e.target.value)} required type="number" />

                <Label htmlFor="description">Description</Label>
                <Textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} />

                <DialogFooter>
                  <Button  className="bg-orange-500 hover:bg-orange-600"type="submit">Save Purchase</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {overviewCardsData.map((card, index) => <PurchaseOverviewCard key={index} {...card} />)}
      </div>

      {/* Purchase Orders Table */}
      <div className="bg-white/90 dark:bg-black/80 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-zinc-900 mb-8 overflow-x-auto">
        <h2 className="text-lg font-bold mb-4">Recent Purchase Orders</h2>
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 text-xs">
          <thead>
            <tr>
              {['PO#', 'Supplier', 'Date', 'Amount', 'Status', 'Expected Delivery'].map(col => (
                <th key={col} className="px-6 py-3 text-left font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">{col}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {filteredPurchaseOrders.length ? filteredPurchaseOrders.map(order => (
              <tr key={order.poNum}>
                <td className="px-6 py-4 whitespace-nowrap">{order.poNum}</td>
                <td className="px-6 py-4 whitespace-nowrap">{order.supplier}</td>
                <td className="px-6 py-4 whitespace-nowrap">{order.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">{order.amount}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex rounded-full font-semibold ${order.status === 'Approved' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' : order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300' : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'}`}>{order.status}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{order.expectedDelivery}</td>
              </tr>
            )) : (
              <tr><td colSpan={6} className="px-6 py-4 text-center text-gray-500">No purchase orders found.</td></tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Low Stock + Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white/90 dark:bg-black/80 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-zinc-900">
          <h2 className="text-lg font-bold mb-4">Low Stock / Reorder Needs</h2>
          {lowStockReorderData.length ? lowStockReorderData.map((item, index) => <LowStockAlertItem key={index} {...item} />) : <p className="text-gray-500 text-sm">No low stock items currently.</p>}
        </div>

        <div className="bg-white/90 dark:bg-black/80 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-zinc-900">
          <h2 className="text-lg font-bold mb-4">Purchase Trend</h2>
          <div className="h-64">
            <Line data={purchaseTrendData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseManagementPage;