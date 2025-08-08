"use client";

import React, { useState } from 'react';
import { Search, Plus, Package, ShoppingCart, ChevronDown, X } from 'lucide-react';
import SalesRepresentativeCard from '@/components/commercial/SalesRepresentativeCard';
import { cn } from "@/lib/utils";
import { Pacifico } from "next/font/google";

import { salesRepresentativesData, cards } from '@/lib/commercialdata';

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
});

interface NavbarProps {
  onNavLinkClick: (link: string) => void;
}
interface NavDropdownProps {
  title: string;
  icon: React.ElementType;
  links: string[];
  onLinkClick: (link: string) => void;
}

const NavDropdown = ({ title, icon: Icon, links, onLinkClick }: NavDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-30 bg-white/50 dark:bg-gray-800/50 text-black dark:text-white flex items-center justify-center py-2 px-4 rounded-lg shadow-md hover:bg-orange-500 transition-all duration-200 text-sm"
      >
        <Icon size={18} className="mr-2" />
        {title}
        <ChevronDown size={16} className={`ml-2 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="absolute z-50 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
          <ul className="py-1">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onLinkClick(link);
                    setIsOpen(false);
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

const Navbar = ({ onNavLinkClick }: NavbarProps) => {
  const ordersLinks = ['Quotation', 'Orders', 'Customers'];
  const productsLinks = ['Orders to Invoice', 'Orders to Upsell'];

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <NavDropdown title="Orders" icon={ShoppingCart} links={ordersLinks} onLinkClick={onNavLinkClick} />
      <NavDropdown title="To Invoice" icon={Package} links={productsLinks} onLinkClick={onNavLinkClick} />
    </div>
  );
};

const SalesDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showAddForm, setShowAddForm] = useState(false);

  const [newRep, setNewRep] = useState({
    name: '',
    email: '',
    phone: '',
    status: 'active',
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value);
  const handleFilterClick = (status: string) => setFilterStatus(status.toLowerCase());
  const handleAddSalesRepClick = () => setShowAddForm(true);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setNewRep({ ...newRep, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted New Rep:", newRep);
    setShowAddForm(false);
    setNewRep({ name: '', email: '', phone: '', status: 'active' });
  };

  const filteredSalesReps = salesRepresentativesData.filter(rep => {
    const matchesSearch = rep.name.includes(searchTerm) ||
      rep.email.includes(searchTerm) ||
      rep.phone.includes(searchTerm);
    const matchesFilter = filterStatus === 'all' || rep.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="relative min-h-screen flex flex-col p-2 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <div className="relative z-20 rounded-xl p-2 shadow-md mb-2 flex justify-between items-center">
        <div className="absolute inset-0 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-orange-500/5 dark:from-orange-500/10 dark:via-transparent dark:to-orange-500/10 rounded-xl blur-xl animate-pulse" />
          <div className="absolute inset-0 p-[1px] rounded-xl bg-gradient-to-br from-orange-500/30 via-white/20 to-blue-500/30 dark:from-orange-500/20 dark:via-white/10 dark:to-blue-500/20">
            <div className="absolute inset-0 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-xl" />
          </div>
        </div>

        <div className="relative z-30 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#F5793B]/10 dark:bg-[#F5793B]/20 flex items-center justify-center">
            <Search className="w-4 h-4 text-[#F5793B]" />
          </div>
          <div>
            <h1 className={cn(
              "text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 dark:from-orange-400 dark:via-orange-300 dark:to-orange-400",
              pacifico.className
            )}>
              Sales Department
            </h1>
            <p className="text-xs text-gray-700 dark:text-gray-300">Manage sales representatives and performance</p>
          </div>
        </div>

        <div className="relative z-30">
          <Navbar onNavLinkClick={(link) => console.log(`Navigating to: ${link}`)} />
        </div>

        <button
          onClick={handleAddSalesRepClick}
          className="relative z-30 bg-white/50 dark:bg-gray-800/50 text-black dark:text-white px-3 py-1.5 rounded-xl text-xs hover:bg-orange-600 transition-colors flex items-center gap-1"
        >
          <Plus className="w-3 h-3" />
          <span>Add Rep</span>
        </button>
      </div>

      {/* Modal Form */}
      {showAddForm && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-[90%] max-w-md relative">
            <button
              onClick={() => setShowAddForm(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
              aria-label="Close Add Representative Form"
              title="Close"
            >
              <X />
            </button>
            <h2 className="text-lg font-semibold mb-4 text-center">Add New Sales Representative</h2>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <input type="text" name="name" value={newRep.name} onChange={handleFormChange} placeholder="Full Name" required
                className="w-full px-3 py-2 border rounded-md bg-gray-50 dark:bg-gray-800 text-sm" />
              <input type="email" name="email" value={newRep.email} onChange={handleFormChange} placeholder="Email" required
                className="w-full px-3 py-2 border rounded-md bg-gray-50 dark:bg-gray-800 text-sm" />
              <input type="tel" name="phone" value={newRep.phone} onChange={handleFormChange} placeholder="Phone" required
                className="w-full px-3 py-2 border rounded-md bg-gray-50 dark:bg-gray-800 text-sm" />
              
              {/* Accessible label for select */}
              <label htmlFor="status" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Status
              </label>
              <select id="status" name="status" value={newRep.status} onChange={handleFormChange}
                className="w-full px-3 py-2 border rounded-md bg-gray-50 dark:bg-gray-800 text-sm">
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="on leave">On Leave</option>
              </select>

              <button type="submit"
                className="w-full py-2 rounded-md bg-[#F5793B] text-white text-sm hover:bg-orange-600 transition-all">
                Save Representative
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Cards */}
      <div className="grid grid-cols-4 gap-2 mb-2">
        {cards.map((card) => {
          const IconComponent = card.icon;
          return (
            <div key={card.title} className="relative p-2 rounded-xl shadow-sm overflow-hidden group hover:shadow-md transition-all">
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-orange-500/5 dark:from-orange-500/10 dark:via-transparent dark:to-orange-500/10 rounded-xl blur-xl animate-pulse" />
                <div className="absolute inset-0 p-[1px] rounded-xl bg-gradient-to-br from-orange-500/20 via-white/10 to-blue-500/20 dark:from-orange-500/20 dark:via-white/5 dark:to-blue-500/20">
                  <div className="absolute inset-0 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-xl" />
                </div>
              </div>
              <div className="relative z-10 text-center">
                <div className="w-6 h-6 rounded-lg bg-[#F5793B]/10 dark:bg-[#F5793B]/20 flex items-center justify-center mx-auto mb-1">
                  <IconComponent className="w-3 h-3 text-[#F5793B]" />
                </div>
                <p className="text-[10px] font-medium mb-1 truncate">{card.title}</p>
                <p className="text-sm font-bold text-[#F5793B] truncate">{card.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Search & Filter */}
      <div className="relative rounded-xl shadow-sm p-2 mb-2 z-10">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="relative flex items-center w-full sm:w-1/2">
            <input
              type="text"
              placeholder="Search representatives..."
              className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-gray-50 dark:bg-gray-800/50 border text-xs"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <Search size={14} className="absolute left-2.5 text-gray-400" />
          </div>
          <div className="flex space-x-1 text-xs w-full sm:w-auto justify-center">
            {['All', 'Active', 'Inactive', 'On Leave'].map((status) => (
              <button
                key={status}
                onClick={() => handleFilterClick(status)}
                className={`px-2 py-1 rounded-lg font-medium
                  ${filterStatus === (status === 'All' ? 'all' : status.toLowerCase())
                    ? 'bg-[#F5793B] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800/50 dark:text-gray-300 dark:hover:bg-gray-700/50'}`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Sales Representative Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredSalesReps.length > 0 ? (
          filteredSalesReps.map((rep) => (
            <SalesRepresentativeCard key={rep.id} {...rep} />
          ))
        ) : (
          <p className="text-[#a0a0a0] text-center col-span-full py-10">No matching sales representatives found.</p>
        )}
      </div>
    </div>
  );
};

export default SalesDashboard;
