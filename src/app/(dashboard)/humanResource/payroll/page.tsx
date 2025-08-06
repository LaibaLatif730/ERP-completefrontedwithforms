// app/(commercial)/hr/payroll/page.tsx
"use client";

import React, { useState } from 'react';
import { Search, ChevronDown, DollarSign } from 'lucide-react';
import { Line } from 'react-chartjs-2';
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

// Dummy data for Payroll Overview Cards
import { payrollCardsData } from '@/lib/hrdata';

// Dummy data for Current Payroll Run Status
import { currentPayrollStatus } from '@/lib/hrdata';

// Dummy data for Employee Payroll Information Table
import { employeePayrollInfoData } from '@/lib/hrdata';

// Dummy data for Recent Payroll Disbursements Section
import { recentDisbursements } from '@/lib/hrdata';

// Dummy data for Monthly Payroll Cost Trend Chart
import { payrollCostTrend } from '@/lib/hrdata';

// --- COMPONENTS ---


interface NavbarProps {
  onNavLinkClick: (link: string) => void;
}
interface NavDropdownProps {
  title: string;
  links: string[];
}

// Navbar Component
const Navbar = ({ onNavLinkClick } : NavbarProps) => {
  const NavDropdown = ({ title, links } : NavDropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = (link : string) => {
      onNavLinkClick(link);
      setIsOpen(false);
    };

    return (
      <div className="relative z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white/50 dark:bg-gray-800/50 text-black dark:text-white flex items-center justify-center py-2 px-4 rounded-lg shadow-md hover:bg-orange-500 transition-all duration-200 w-full sm:w-auto whitespace-nowrap text-sm"
        >
          {/* <Icon size={18} className="mr-2" /> */}
          {title}
          <ChevronDown size={16} className={`ml-2 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-50 border border-gray-200 dark:border-gray-700">
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
  
  const payrollLinks = ['Employees', 'Salary Attachments', 'Payslips'];
  
  return (
    <div className="flex flex-col md:flex-row gap-4 z-20">
      <NavDropdown title="Dashboard" links={payrollLinks} />
    </div>
  );
};


const HRPayrollPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterPayStatus, setFilterPayStatus] = useState('All');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handlePayStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterPayStatus(event.target.value);
  };

  const handleProcessPayrollNow = () => {
    alert("Process Payroll Now button clicked!");
  };

  const filteredEmployeePayrollInfo = employeePayrollInfoData.filter(employee => {
    const matchesSearch = employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          employee.role.toLowerCase().includes(searchTerm.toLowerCase());
    // Simplified filter for pay status based on bank status for demo purposes
    const matchesPayStatus = filterPayStatus === 'All' ||
                             (filterPayStatus === 'Approved' && employee.bankStatus === 'Verified') || // Assuming Verified means Approved
                             (filterPayStatus === 'Pending' && employee.bankStatus === 'Pending') ||
                             (filterPayStatus === 'Disbursed' && employee.bankStatus === 'Verified'); // Assuming Verified means Disbursed for past periods

    return matchesSearch && matchesPayStatus;
  });

  // Helper function to get status color for table cells
  const getBankStatusColorClass = (status: string) => {
    switch (status) {
      case 'Verified':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'Pending':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  return (
    <div className="min-h-screen p-6 sm:p-8 lg:p-10 font-sans text-gray-900 dark:text-white">
      {/* Header Section */}
      <div className="mb-8 relative z-20 inset-0 bg-white/90 dark:bg-black/80 backdrop-blur-md p-2 rounded-xl flex justify-between items-center">
        <div>
        <h1 className={cn("text-lg font-bold text-orange-500 dark:text-zinc-100", pacifico.className)}>Payroll Management</h1>
        <p className="text-zinc-800 dark:text-zinc-200 text-xs">Manage employee compensation and financial disbursements</p>
        </div>
         {/* Navbar Section */}
      <div className="relative z-20 flex flex-col md:flex-row gap">
        <Navbar onNavLinkClick={(link) => console.log(`Navigating to: ${link}`)} />
      </div>
      </div>

      {/* Filter/Search Bar & Action Button */}
      <div className="relative z-[0px] inset-0 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-xl shadow-lg p-6 border border-gray-200 dark:border-zinc-900 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative flex-1 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search employees..."
            className="w-full pl-10 pr-4 py-2 text-sm rounded-lg bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-700 text-zinc-900 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#e5a004] focus:border-transparent"
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
              value={filterPayStatus}
              onChange={handlePayStatusChange}
            >
              <option>All</option>
              <option>Approved</option>
              <option>Disbursed</option>
              <option>Pending</option>
            </select>
            <ChevronDown size={18} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 pointer-events-none" />
          </div>
          <button
            onClick={handleProcessPayrollNow}
            className="bg-white/50 dark:bg-gray-800/50 text-black dark:text-white flex items-center justify-center py-1.5 px-3 rounded-lg shadow-md hover:bg-[#e5a004] transition-all duration-200 w-full sm:w-auto whitespace-nowrap text-sm"
          >
            <DollarSign size={18} className="mr-1.5" />
            Process Payroll Now
          </button>
        </div>
      </div>

      {/* Payroll Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {payrollCardsData.map((card, index) => (
          <EmployeeCard key={index} {...card} />
        ))}
      </div>

      {/* Current Payroll Run Status Section */}
      <div className="inset-0 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-xl shadow-lg p-6 border border-gray-200 dark:border-zinc-900 mb-8">
        <h2 className="text-lg font-bold mb-4 text-zinc-900 dark:text-white">Current Payroll Run Status</h2>
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
          <p className="text-sm text-zinc-900 dark:text-white font-semibold mb-2 sm:mb-0">
            Pay Period: <span className="text-orange-600 dark:text-orange-400">{currentPayrollStatus.payPeriod}</span>
          </p>
          <p className="text-sm text-zinc-900 dark:text-white font-semibold">
            Status: <span className="text-blue-600 dark:text-blue-400">{currentPayrollStatus.status}</span>
          </p>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
          <div
            className="bg-[#f5793b] h-2.5 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${currentPayrollStatus.progress}%` }}
          ></div>
        </div>
        <p className="text-right text-xs font-medium mt-1 text-gray-600 dark:text-gray-300">Progress: {currentPayrollStatus.progress}%</p>
      </div>

      {/* Employee Payroll Information Table */}
      <div className="inset-0 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-xl shadow-lg p-6 border border-gray-200 dark:border-zinc-900 mb-8 overflow-x-auto">
        <h2 className="text-lg font-bold mb-4 text-zinc-900 dark:text-white">Employee Payroll Information</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">Sensitive data. Ensure proper access control.</p>
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Employee Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Role</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Salary</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Pay Frequency</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Bank Account Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {filteredEmployeePayrollInfo.length > 0 ? (
              filteredEmployeePayrollInfo.map((employee) => (
                <tr key={employee.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-xs font-medium text-zinc-900 dark:text-white">{employee.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300">{employee.role}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300">{employee.salary}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300">{employee.payFrequency}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getBankStatusColorClass(employee.bankStatus)}`}>
                      {employee.bankStatus}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="px-6 py-4 text-center text-xs text-gray-500 dark:text-gray-400">No matching employee payroll records found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Bottom Row (Recent Payroll Disbursements & Monthly Payroll Cost Trend) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Payroll Disbursements Section */}
        <div className="inset-0 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-xl shadow-lg p-6 border border-gray-200 dark:border-zinc-900">
          <h2 className="text-lg font-bold mb-4 text-zinc-900 dark:text-white">Recent Payroll Disbursements</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">Overview of recently processed payrolls.</p>
          {recentDisbursements.length > 0 ? (
            recentDisbursements.map((disbursement, index) => (
              <div key={index} className="flex items-center justify-between mb-3 last:mb-0 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
                <div className="flex-1">
                  <p className="font-semibold text-zinc-900 dark:text-white">Period: {disbursement.period}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-300">Date: {disbursement.date}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg text-green-600 font-bold">{disbursement.totalAmount}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 dark:text-gray-400 text-xs">No recent payroll disbursements.</p>
          )}
        </div>

        {/* Monthly Payroll Cost Trend Chart */}
        <div className="inset-0 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-xl shadow-lg p-6 border border-gray-200 dark:border-zinc-900">
          <h2 className="text-lg font-bold mb-4 text-zinc-900 dark:text-white">Monthly Payroll Cost Trend</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">Total payroll expenses over time.</p>
          <div className="h-64">
            <Line data={payrollCostTrend}  />
            {/* options={getChartOptions(document.documentElement.classList.contains('dark'))} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRPayrollPage;