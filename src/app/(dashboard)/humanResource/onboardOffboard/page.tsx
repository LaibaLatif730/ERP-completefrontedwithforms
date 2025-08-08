// app/(commercial)/hr/onboard-offboard/page.tsx
"use client";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import React, { useState } from 'react';
import { Search, ChevronDown, UserPlus} from 'lucide-react';
// Chart.js imports are included for consistency with other HR pages, though not directly used on this page.
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Tooltip, Legend);

import { cn } from "@/lib/utils";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
});

import EmployeeCard from '@/components/humanResource/EmployeeCard';

// Dummy data for Onboarding/Offboarding Overview Cards
import { onboardOffboardCardsData } from '@/lib/hrdata';

// Dummy data for Upcoming Onboardings Table
import { upcomingOnboardingsData } from '@/lib/hrdata';

// Dummy data for Upcoming Offboardings Table
import { upcomingOffboardingsData } from '@/lib/hrdata';

// Dummy data for Onboarding Task Progress Section
import { onboardingTaskProgress } from '@/lib/hrdata';

// Dummy data for Offboarding Task Checklist Progress Section
import { offboardingTaskProgress } from '@/lib/hrdata';


const HROnboardOffboardPage: React.FC = () => {
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

  const handleInitiateOnboarding = () => {
    alert("Initiate Onboarding button clicked!");
  };

  // Helper function to get status color for table cells
  const getStatusColorClass = (status: string) => {
    switch (status) {
      case 'Completed':
      case 'Acknowledged':
      case 'Verified':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'Pending IT Setup':
      case 'HR Docs Pending':
      case 'Waiting for laptop':
      case 'Pending Equipment Return':
      case 'Access Revocation Needed':
      case 'Pending':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300';
      case 'Overdue':
      case 'Non-Compliant':
      case 'Expired':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };
  // Filter logic for tables
  const filteredOnboardings = upcomingOnboardingsData.filter(onboarding => {
    const matchesSearch = onboarding.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          onboarding.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          onboarding.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'All' || onboarding.status.includes(filterStatus);
    const matchesType = filterType === 'All' || filterType === 'Onboarding';
    return matchesSearch && matchesStatus && matchesType;
  });

  const filteredOffboardings = upcomingOffboardingsData.filter(offboarding => {
    const matchesSearch = offboarding.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          offboarding.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          offboarding.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'All' || offboarding.status.includes(filterStatus);
    const matchesType = filterType === 'All' || filterType === 'Offboarding';
    return matchesSearch && matchesStatus && matchesType;
  });

  return (
    <div className="min-h-screen p-6 sm:p-8 lg:p-10 font-sans text-gray-900 dark:text-white">
      {/* Header Section */}
      <div className="mb-8 inset-0 bg-white/90 dark:bg-black/80 backdrop-blur-md p-2 rounded-xl">
        <h1 className={cn("text-lg font-bold text-orange-500 dark:text-zinc-100", pacifico.className)}>Onboard / Offboard</h1>
        <p className="text-zinc-800 dark:text-zinc-200 text-xs">Manage new hire onboarding and employee offboarding processes</p>
      </div>

      {/* Filter/Search Bar & Action Button */}
      <div className="inset-0 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-xl shadow-lg p-6 border border-gray-200 dark:border-zinc-900 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative flex-1 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search employees..."
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-white text-sm dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-700 text-zinc-900 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#e5a004] focus:border-transparent"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
        </div>
        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
          <div className="relative w-full sm:w-auto">
            <select
            aria-label="Select department"
              className="appearance-none bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-700 text-zinc-900 dark:text-white py-1.5 px-3 pr-8 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#e5a004] focus:border-transparent w-full text-sm"
              value={filterStatus}
              onChange={handleStatusChange}
            >
              <option>All</option>
              <option>In Progress</option>
              <option>Completed</option>
              <option>Pending</option>
              <option>Overdue</option>
            </select>
            <ChevronDown size={18} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 pointer-events-none" />
          </div>
          <div className="relative w-full sm:w-auto">
            <select
            aria-label="Select department"
              className="appearance-none bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-700 text-zinc-900 dark:text-white py-1.5 px-3 pr-8 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#e5a004] focus:border-transparent w-full text-sm"
              value={filterType}
              onChange={handleTypeChange}
            >
              <option>All</option>
              <option>Onboarding</option>
              <option>Offboarding</option>
            </select>
            <ChevronDown size={18} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 pointer-events-none" />
          </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-white/50 dark:bg-gray-800/50 text-black dark:text-white flex items-center justify-center py-1.5 px-3 rounded-lg shadow-md hover:bg-orange-500 transition-all duration-200 w-full sm:w-auto whitespace-nowrap text-sm">
                    <UserPlus size={18} className="mr-1.5" />
                    Initiate Onboarding
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Initiate New Onboarding</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Name
                      </Label>
                      <Input id="name" placeholder="John Doe" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="role" className="text-right">
                        Role
                      </Label>
                      <Input id="role" placeholder="Software Engineer" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="department" className="text-right">
                        Department
                      </Label>
                      <Input id="department" placeholder="IT" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="startDate" className="text-right">
                        Start Date
                      </Label>
                      <Input id="startDate" type="date" className="col-span-3" />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit" className="bg-[#e5a004] text-white hover:bg-[#c97e00]">
                      Submit
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

        </div>
      </div>

      {/* Onboarding/Offboarding Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {onboardOffboardCardsData.map((card, index) => (
          <EmployeeCard key={index} {...card} />
        ))}
      </div>

      {/* Upcoming Onboardings Table */}
      <div className="inset-0 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-xl shadow-lg p-6 border border-gray-200 dark:border-zinc-900 mb-8 overflow-x-auto">
        <h2 className="text-lg font-bold mb-4 text-zinc-900 dark:text-white">Upcoming Onboardings</h2>
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Employee Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Role</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Department</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Start Date</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Progress</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {filteredOnboardings.length > 0 ? (
              filteredOnboardings.map((onboarding) => (
                <tr key={onboarding.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-xs font-medium text-zinc-900 dark:text-white">{onboarding.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300">{onboarding.role}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300">{onboarding.department}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300">{onboarding.startDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColorClass(onboarding.status)}`}>
                      {onboarding.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs">
                    <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div className="bg-[#f5793b] h-2.5 rounded-full" style={{ width: `${onboarding.progress}%` }}></div>
                    </div>
                    <span className="ml-2 text-gray-600 dark:text-gray-300 text-xs">{onboarding.progress}%</span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="px-6 py-4 text-center text-sm text-gray-500 dark:text-gray-400">No upcoming onboardings found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Upcoming Offboardings Table */}
      <div className="inset-0 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-xl shadow-lg p-6 border border-gray-200 dark:border-zinc-900 mb-8 overflow-x-auto">
        <h2 className="text-lg font-bold mb-4 text-zinc-900 dark:text-white">Upcoming Offboardings</h2>
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Employee Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Role</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Department</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Last Day</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {filteredOffboardings.length > 0 ? (
              filteredOffboardings.map((offboarding) => (
                <tr key={offboarding.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-xs font-medium text-zinc-900 dark:text-white">{offboarding.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300">{offboarding.role}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300">{offboarding.department}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300">{offboarding.lastDay}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColorClass(offboarding.status)}`}>
                      {offboarding.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-xs font-medium">
                    <button
                      onClick={() => alert(`Viewing checklist for ${offboarding.name}`)}
                      className="text-[#b16a04] hover:text-[#e5a004] transition-colors duration-200"
                    >
                      {offboarding.action}
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="px-6 py-4 text-center text-sm text-gray-500 dark:text-gray-400">No upcoming offboardings found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Bottom Row (Onboarding Task Progress & Offboarding Task Checklist Progress) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Onboarding Task Progress Section */}
        <div className="inset-0 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-xl shadow-lg p-6 border border-gray-200 dark:border-zinc-900">
          <h2 className="text-lg font-bold mb-4 text-zinc-900 dark:text-white">Onboarding Task Progress</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">Completion status of key onboarding tasks.</p>
          <div className="space-y-4">
            {onboardingTaskProgress.map((task, index) => (
              <div key={index}>
                <div className="flex justify-between items-center text-zinc-900 dark:text-white text-xs mb-1">
                  <span>{task.category}</span>
                  <span>{((task.completed / task.total) * 100).toFixed(0)}% ({task.completed}/{task.total})</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-[#f5793b] h-2.5 rounded-full"
                    style={{ width: `${((task.completed / task.total) * 100).toFixed(0)}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Offboarding Task Checklist Progress Section */}
        <div className="inset-0 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-xl shadow-lg p-6 border border-gray-200 dark:border-zinc-900">
          <h2 className="text-lg font-bold mb-4 text-zinc-900 dark:text-white">Offboarding Task Checklist Progress</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">Completion status of key offboarding tasks.</p>
          <div className="space-y-4">
            {offboardingTaskProgress.map((task, index) => (
              <div key={index}>
                <div className="flex justify-between items-center text-zinc-900 dark:text-white text-xs mb-1">
                  <span>{task.category}</span>
                  <span>{((task.completed / task.total) * 100).toFixed(0)}% ({task.completed}/{task.total})</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-[#f5793b] h-2.5 rounded-full"
                    style={{ width: `${((task.completed / task.total) * 100).toFixed(0)}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HROnboardOffboardPage;