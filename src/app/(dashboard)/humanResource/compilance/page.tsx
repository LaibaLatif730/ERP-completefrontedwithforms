// app/(commercial)/hr/compliance/page.tsx
"use client";

import React, { useState } from 'react';
import { Search, ChevronDown, Upload} from 'lucide-react';
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

// Dummy data for Compliance Overview Cards
import { complianceCardsData } from '@/lib/hrdata';

// Dummy data for Employee Compliance Status Table
import { employeeComplianceData } from '@/lib/hrdata';

// Dummy data for Certifications/Training Expiry Alerts Section
import { expiryAlertsData } from '@/lib/hrdata';

// Dummy data for Policy Acknowledgment Status Section
import { policyAcknowledgmentStatus } from '@/lib/hrdata';


const HRCompliancePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterComplianceStatus, setFilterComplianceStatus] = useState('All');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleComplianceStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterComplianceStatus(event.target.value);
  };

  const handleUploadPolicyDocument = () => {
    alert("Upload Policy Document button clicked!");
  };

  const filteredEmployeeCompliance = employeeComplianceData.filter(employee => {
    const matchesSearch = employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          employee.department.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter by overall compliance status (simplified for demo)
    const matchesComplianceStatus = filterComplianceStatus === 'All' ||
                                    (filterComplianceStatus === 'Compliant' && employee["Harassment Training"] === 'Compliant' && employee["Data Privacy Cert"] === 'Compliant' && employee["Code of Conduct"] === 'Acknowledged') ||
                                    (filterComplianceStatus === 'Non-Compliant' && (employee["Harassment Training"] === 'Non-Compliant' || employee["Data Privacy Cert"] === 'Non-Compliant')) ||
                                    (filterComplianceStatus === 'Expiring Soon' && employee["Data Privacy Cert"] === 'Expired') || // Using Expired as a proxy for 'expiring soon' for simplicity
                                    (filterComplianceStatus === 'Pending' && (employee["Harassment Training"] === 'Pending' || employee["Code of Conduct"] === 'Pending'));

    return matchesSearch && matchesComplianceStatus;
  });

  // Helper function to get status color for table cells
  const getStatusColorClass = (status: string) => {
    switch (status) {
      case 'Compliant':
      case 'Acknowledged':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'Pending':
      case 'Expiring Soon':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'Expired':
      case 'Non-Compliant':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  return (
    <div className="min-h-screen p-6 sm:p-8 lg:p-10 font-sans text-gray-900 dark:text-white">
      {/* Header Section */}
      <div className="mb-8 inset-0 bg-white/90 dark:bg-black/80 backdrop-blur-md p-2 rounded-xl">
        <h1 className={cn("text-lg font-bold text-orange-500 dark:text-zinc-100", pacifico.className)}>HR Compliance</h1>
        <p className="text-zinc-800 dark:text-zinc-200 text-xs">Ensure regulatory adherence, certifications, and policy acknowledgments</p>
      </div>

      {/* Filter/Search Bar & Action Button */}
      <div className="inset-0 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-xl shadow-lg p-6 border border-gray-200 dark:border-zinc-900 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative flex-1 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search employees or compliance items..."
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-white dark:bg-[#1a1a1a] text-sm border border-gray-300 dark:border-gray-700 text-zinc-900 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#e5a004] focus:border-transparent"
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
              value={filterComplianceStatus}
              onChange={handleComplianceStatusChange}
            >
              <option>All</option>
              <option>Compliant</option>
              <option>Non-Compliant</option>
              <option>Expiring Soon</option>
              <option>Pending</option>
            </select>
            <ChevronDown size={18} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 pointer-events-none" />
          </div>
          <button
            onClick={handleUploadPolicyDocument}
            className="bg-white/50 dark:bg-gray-800/50 text-black dark:text-white flex items-center justify-center py-1.5 px-3 rounded-lg shadow-md hover:bg-[#e5a004] transition-all duration-200 w-full sm:w-auto whitespace-nowrap text-sm"
          >
            <Upload size={18} className="mr-1.5" />
            Upload Policy Document
          </button>
        </div>
      </div>

      {/* Compliance Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {complianceCardsData.map((card, index) => (
          <EmployeeCard key={index} {...card} />
        ))}
      </div>

      {/* Employee Compliance Status Table */}
      <div className="inset-0 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-xl shadow-lg p-6 border border-gray-200 dark:border-zinc-900 mb-8 overflow-x-auto">
        <h2 className="text-lg font-bold mb-4 text-zinc-900 dark:text-white">Employee Compliance Status</h2>
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Employee Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Department</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Harassment Training</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Data Privacy Cert</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Code of Conduct</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {filteredEmployeeCompliance.length > 0 ? (
              filteredEmployeeCompliance.map((employee) => (
                <tr key={employee.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-xs font-medium text-zinc-900 dark:text-white">{employee.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300">{employee.department}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColorClass(employee["Harassment Training"])}`}>
                      {employee["Harassment Training"]}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColorClass(employee["Data Privacy Cert"])}`}>
                      {employee["Data Privacy Cert"]}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColorClass(employee["Code of Conduct"])}`}>
                      {employee["Code of Conduct"]}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="px-6 py-4 text-center text-xs text-gray-500 dark:text-gray-400">No matching employee compliance records found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Bottom Row (Certifications/Training Expiry Alerts & Policy Acknowledgment Status) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Certifications/Training Expiry Alerts Section */}
        <div className="inset-0 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-xl shadow-lg p-6 border border-gray-200 dark:border-zinc-900">
          <h2 className="text-lg font-bold mb-4 text-zinc-900 dark:text-white">Certifications & Training Expiry Alerts</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">Upcoming deadlines for certifications and training.</p>
          {expiryAlertsData.length > 0 ? (
            expiryAlertsData.map((alert, index) => (
              <div key={index} className="flex items-center justify-between mb-3 last:mb-0 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
                <div className="flex-1">
                  <p className="font-semibold text-zinc-900 dark:text-white">{alert.item}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-300">Employee: {alert.employee}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-red-500 font-semibold">Due: {alert.dueDate}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 dark:text-gray-400 text-xs">No upcoming expiry alerts.</p>
          )}
        </div>

        {/* Policy Acknowledgment Status Section */}
        <div className="inset-0 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-xl shadow-lg p-6 border border-gray-200 dark:border-zinc-900">
          <h2 className="text-lg font-bold mb-4 text-zinc-900 dark:text-white">Policy Acknowledgment Status</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">Overview of policy acknowledgment rates.</p>
          {policyAcknowledgmentStatus.length > 0 ? (
            policyAcknowledgmentStatus.map((policy, index) => (
              <div key={index} className="mb-4 last:mb-0">
                <div className="flex justify-between items-center text-zinc-900 dark:text-white text-xs mb-1">
                  <span>{policy.policy}</span>
                  <span>{((policy.acknowledgedCount / policy.totalEmployees) * 100).toFixed(0)}% ({policy.acknowledgedCount}/{policy.totalEmployees})</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-[#f5793b] h-2.5 rounded-full"
                    style={{ width: `${((policy.acknowledgedCount / policy.totalEmployees) * 100).toFixed(0)}%` }}
                  ></div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 dark:text-gray-400 text-sm">No policies to display.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HRCompliancePage;