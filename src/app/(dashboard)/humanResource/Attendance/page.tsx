// app/(commercial)/hr/attendance/page.tsx
"use client";

import React, { useState } from 'react';
import { Search, ChevronDown, CalendarDays, CheckCircle, XCircle } from 'lucide-react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

import { cn } from "@/lib/utils";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
});

import EmployeeCard from '@/components/humanResource/EmployeeCard';

// Dummy data for Attendance Overview Cards
import { attendanceCardsData } from '@/lib/hrdata';

// Dummy data for Daily Attendance Summary Table
import { dailyAttendanceData } from '@/lib/hrdata';

// Dummy data for Pending Leave Requests
import { pendingLeaveRequests } from '@/lib/hrdata';

// Dummy data for Monthly Attendance Trend Chart
import { monthlyAttendanceTrend } from '@/lib/hrdata';


const EmployeeAttendancePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [filterDepartment, setFilterDepartment] = useState('All Departments');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterStatus(event.target.value);
  };

  const handleDepartmentChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterDepartment(event.target.value);
  };

  const handleViewLeaveCalendar = () => {
    alert("View Leave Calendar button clicked!");
  };

  const filteredDailyAttendance = dailyAttendanceData.filter(employee => {
    const matchesSearch = employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          employee.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'All' || employee.status === filterStatus;
    const matchesDepartment = filterDepartment === 'All Departments' || employee.department === filterDepartment;
    return matchesSearch && matchesStatus && matchesDepartment;
  });

  const uniqueDepartments = ['All Departments', ...new Set(dailyAttendanceData.map(employee => employee.department))];
  return (
    <div className="min-h-screen p-6 sm:p-8 lg:p-10 font-sans text-gray-900 dark:text-white">
      {/* Header Section */}
      <div className="mb-8 inset-0 bg-white/90 dark:bg-black/80 backdrop-blur-md p-2 rounded-xl flex justify-between items-center">
        <div>
        <h1 className={cn("text-lg font-bold text-orange-500 dark:text-zinc-100", pacifico.className)} >Employee Attendance</h1>
        <p className="text-zinc-800 dark:text-zinc-200 text-xs">Track employee presence, absence, and leave</p>
        </div>
        <div className="flex gap-3 items-center">
        <a href="/hr/attendance/overview" className="bg-white/50 dark:bg-gray-800/50 text-black dark:text-white py-1.5 px-3 rounded-lg shadow-md">Overview</a>
        <a href="/hr/attendance/overview" className="bg-white/50 dark:bg-gray-800/50 text-black dark:text-white py-1.5 px-3 rounded-lg shadow-md">Management</a>
        </div>
      </div>

      {/* Filter/Search Bar & Action Button */}
      <div className="inset-0 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-xl shadow-lg p-6 border border-gray-200 dark:border-zinc-900 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
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
              className="appearance-none bg-white dark:bg-[#1a1a1a] text-sm border border-gray-300 dark:border-gray-700 text-zinc-900 dark:text-white py-1.5 px-3 pr-8 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#e5a004] focus:border-transparent w-full"
              value={filterStatus}
              onChange={handleStatusChange}
            >
              <option>All</option>
              <option>Present</option>
              <option>Absent</option>
              <option>On Leave</option>
              <option>Late</option>
            </select>
            <ChevronDown size={18} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 pointer-events-none" />
          </div>
          <div className="relative w-full sm:w-auto">
            <select
            aria-label="Select department"
              className="appearance-none bg-white dark:bg-[#1a1a1a] text-sm border border-gray-300 dark:border-gray-700 text-zinc-900 dark:text-white py-1.5 px-3 pr-8 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#e5a004] focus:border-transparent w-full"
              value={filterDepartment}
              onChange={handleDepartmentChange}
            >
              {uniqueDepartments.map(dept => (
                <option key={dept}>{dept}</option>
              ))}
            </select>
            <ChevronDown size={18} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 pointer-events-none" />
          </div>
          <button
            onClick={handleViewLeaveCalendar}
            className="bg-white/50 dark:bg-gray-800/50 text-black dark:text-white flex items-center justify-center py-1.5 px-3 rounded-lg shadow-md hover:bg-[#e5a004] transition-all duration-200 w-full sm:w-auto whitespace-nowrap text-xs"
          >
            <CalendarDays size={18} className="mr-1.5" />
            View Leave Calendar
          </button>
        </div>
      </div>

      {/* Attendance Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {attendanceCardsData.map((card, index) => (
          <EmployeeCard key={index} {...card} />
        ))}
      </div>

      {/* Daily Attendance Summary Table */}
      <div className="inset-0 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-xl shadow-lg p-6 border border-gray-200 dark:border-zinc-900 mb-8 overflow-x-auto">
        <h2 className="text-lg font-bold mb-4 text-zinc-900 dark:text-white">Daily Attendance Summary</h2>
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Employee Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Department</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Time In</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Time Out</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {filteredDailyAttendance.length > 0 ? (
              filteredDailyAttendance.map((employee) => (
                <tr key={employee.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-xs font-medium text-zinc-900 dark:text-white">{employee.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300">{employee.department}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      employee.status === 'Present' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' :
                      employee.status === 'Absent' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300' :
                      employee.status === 'Late' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300' :
                      'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300' // On Leave
                    }`}>
                      {employee.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300">{employee.timeIn}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300">{employee.timeOut}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="px-6 py-4 text-center text-xs text-gray-500 dark:text-gray-400">No matching attendance records found.</td>
              </tr>
            )}
          </tbody>
        </table>
        {/* Pagination and Sorting options could go here */}
      </div>

      {/* Bottom Row (Pending Leave Requests & Monthly Attendance Trend) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pending Leave Requests Section */}
        <div className="inset-0 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-xl shadow-lg p-6 border border-gray-200 dark:border-zinc-900">
          <h2 className="text-lg font-bold mb-4 text-zinc-900 dark:text-white">Pending Leave Requests</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">Requests awaiting approval.</p>
          {pendingLeaveRequests.length > 0 ? (
            pendingLeaveRequests.map((request) => (
              <div key={request.id} className="flex items-center justify-between mb-3 last:mb-0 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
                <div className="flex-1">
                  <p className="font-semibold text-zinc-900 dark:text-white">{request.employee} - {request.type}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-300">
                    {request.startDate} to {request.endDate}
                  </p>
                </div>
                <div className="flex items-center gap-2 ml-4">
                  <button className="bg-green-500 text-white p-1.5 rounded-full hover:bg-green-600 transition-colors duration-200" title="Approve">
                    <CheckCircle size={18} />
                  </button>
                  <button className="bg-red-500 text-white p-1.5 rounded-full hover:bg-red-600 transition-colors duration-200" title="Reject">
                    <XCircle size={18} />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 dark:text-gray-400 text-xs">No pending leave requests.</p>
          )}
        </div>

        {/* Monthly Attendance Trend Chart */}
        <div className="inset-0 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-xl shadow-lg p-6 border border-gray-200 dark:border-zinc-900">
          <h2 className="text-lg font-bold mb-4 text-zinc-900 dark:text-white">Monthly Attendance Trend</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">Average attendance rate over time.</p>
          <div className="h-64">
            <Line data={monthlyAttendanceTrend} />
             {/* options={getChartOptions(document.documentElement.classList.contains('dark'))}  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeAttendancePage;