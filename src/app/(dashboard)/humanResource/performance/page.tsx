"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ChevronDown, Sparkles } from "lucide-react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend
);

import { cn } from "@/lib/utils";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
});

import EmployeeCard from "@/components/humanResource/EmployeeCard";
import {
  performanceCardsData,
  employeePerformanceData,
  reviewProgressData,
  scoreDistributionData,
} from "@/lib/hrdata";

const EmployeePerformancePage: React.FC = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [cycleName, setCycleName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  const [filterDepartment, setFilterDepartment] = useState("All Departments");
  const [filterReviewStatus, setFilterReviewStatus] = useState("All");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleDepartmentChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFilterDepartment(event.target.value);
  };

  const handleReviewStatusChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFilterReviewStatus(event.target.value);
  };

  const filteredEmployeePerformance = employeePerformanceData.filter(
    (employee) => {
      const matchesSearch =
        employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.role.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDepartment =
        filterDepartment === "All Departments" ||
        employee.department === filterDepartment;
      const matchesReviewStatus =
        filterReviewStatus === "All" ||
        (filterReviewStatus === "Due Soon" &&
          new Date(employee.nextReview) <
            new Date(new Date().setMonth(new Date().getMonth() + 1))) ||
        (filterReviewStatus === "Completed" &&
          employee.lastReview !== "-") ||
        (filterReviewStatus === "Overdue" &&
          new Date(employee.nextReview) < new Date());

      return matchesSearch && matchesDepartment && matchesReviewStatus;
    }
  );

  const uniqueDepartments = [
    "All Departments",
    ...new Set(
      employeePerformanceData.map((employee) => employee.department)
    ),
  ];

  return (
    <div className="min-h-screen p-6 sm:p-8 lg:p-10 font-sans text-gray-900 dark:text-white">
      {/* Header */}
      <div className="mb-8 inset-0 bg-white/90 dark:bg-black/80 backdrop-blur-md p-2 rounded-xl">
        <h1
          className={cn(
            "text-lg font-bold text-orange-500 dark:text-zinc-100",
            pacifico.className
          )}
        >
          Employee Performance
        </h1>
        <p className="text-zinc-800 dark:text-zinc-200 text-xs">
          Monitor performance, manage reviews, and track goals
        </p>
      </div>

      {/* Search and Filters */}
      <div className="inset-0 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-xl shadow-lg p-6 border border-gray-200 dark:border-zinc-900 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative flex-1 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search employees..."
            className="w-full pl-10 pr-4 py-2 text-sm rounded-lg bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-700 text-zinc-900 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#e5a004] focus:border-transparent"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
          <div className="relative w-full sm:w-auto">
            <select
              aria-label="Select department"
              className="appearance-none bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-700 text-zinc-900 dark:text-white py-1.5 px-3 pr-8 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#e5a004] focus:border-transparent w-full text-sm"
              value={filterDepartment}
              onChange={handleDepartmentChange}
            >
              {uniqueDepartments.map((dept) => (
                <option key={dept}>{dept}</option>
              ))}
            </select>
            <ChevronDown
              size={18}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 pointer-events-none"
            />
          </div>

          <div className="relative w-full sm:w-auto">
            <select
              aria-label="Select review status"
              className="appearance-none bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-700 text-zinc-900 dark:text-white py-1.5 px-3 pr-8 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#e5a004] focus:border-transparent w-full text-sm"
              value={filterReviewStatus}
              onChange={handleReviewStatusChange}
            >
              <option>All</option>
              <option>Due Soon</option>
              <option>Completed</option>
              <option>Overdue</option>
            </select>
            <ChevronDown
              size={18}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 pointer-events-none"
            />
          </div>

          {/* Dialog Form Button */}
          <Dialog open={showDialog} onOpenChange={setShowDialog}>
            <DialogTrigger asChild>
              <button className=" bg-orange-500 text-white dark:text-white flex items-center justify-center py-1.5 px-3 rounded-lg shadow-md hover:bg-oeange-600 transition-all duration-200 w-full sm:w-auto whitespace-nowrap text-sm">
                <Sparkles size={18} className="mr-1.5" />
                Initiate Review Cycle
              </button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Initiate New Review Cycle</DialogTitle>
              </DialogHeader>

              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <label
                    htmlFor="cycle-name"
                    className="col-span-1 text-right text-sm"
                  >
                    Cycle Name
                  </label>
                  <Input
                    id="cycle-name"
                    className="col-span-3"
                    value={cycleName}
                    onChange={(e) => setCycleName(e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label
                    htmlFor="start-date"
                    className="col-span-1 text-right text-sm"
                  >
                    Start Date
                  </label>
                  <Input
                    type="date"
                    id="start-date"
                    className="col-span-3"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label
                    htmlFor="end-date"
                    className="col-span-1 text-right text-sm"
                  >
                    End Date
                  </label>
                  <Input
                    type="date"
                    id="end-date"
                    className="col-span-3"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </div>
              </div>

              <DialogFooter>
                <Button
                className="bg-orange-500 hover:bg-amber-600"
                  onClick={() => {
                    alert(`Review cycle "${cycleName}" initiated.`);
                    setShowDialog(false);
                    setCycleName("");
                    setStartDate("");
                    setEndDate("");
                  }}
                >
                  Start Cycle
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {performanceCardsData.map((card, index) => (
          <EmployeeCard key={index} {...card} />
        ))}
      </div>

      {/* Table Section */}
      <div className="inset-0 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-xl shadow-lg p-6 border border-gray-200 dark:border-zinc-900 mb-8 overflow-x-auto">
        <h2 className="text-[10px] font-bold mb-4 text-zinc-900 dark:text-white">
          Employee Performance Overview
        </h2>
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Employee Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Department
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Score
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Last Review
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Next Review Due
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {filteredEmployeePerformance.length > 0 ? (
              filteredEmployeePerformance.map((employee) => (
                <tr key={employee.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-xs font-medium text-zinc-900 dark:text-white">
                    {employee.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300">
                    {employee.department}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300">
                    {employee.role}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        employee.score >= 4.0
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                          : employee.score >= 3.0
                          ? "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
                          : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                      }`}
                    >
                      {employee.score.toFixed(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300">
                    {employee.lastReview}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300">
                    {employee.nextReview}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={6}
                  className="px-6 py-4 text-center text-xs text-gray-500 dark:text-gray-400"
                >
                  No matching employee performance records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Review Progress */}
        <div className="inset-0 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-xl shadow-lg p-6 border border-gray-200 dark:border-zinc-900">
          <h2 className="text-lg font-bold mb-4 text-zinc-900 dark:text-white">
            Performance Review Progress
          </h2>
          <div className="space-y-4">
            {/* Each Progress Bar */}
            {[
              {
                label: "Reviews Started",
                current: reviewProgressData.reviewsStarted,
                total: reviewProgressData.totalEmployees,
              },
              {
                label: "Manager Reviews Submitted",
                current: reviewProgressData.managerReviewsSubmitted,
                total: reviewProgressData.reviewsStarted,
              },
              {
                label: "Employee Self-Reviews Submitted",
                current: reviewProgressData.employeeSelfReviewsSubmitted,
                total: reviewProgressData.reviewsStarted,
              },
              {
                label: "Completed Reviews",
                current: reviewProgressData.completedReviews,
                total: reviewProgressData.totalEmployees,
              },
            ].map(({ label, current, total }) => {
              const percentage = ((current / total) * 100).toFixed(0);
              return (
                <div key={label}>
                  <div className="flex justify-between items-center text-zinc-900 dark:text-white text-xs mb-1">
                    <span>{label}</span>
                    <span>
                      {percentage}% ({current}/{total})
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-[#f5793b] h-2.5 rounded-full"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Score Distribution */}
        <div className="inset-0 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-xl shadow-lg p-6 border border-gray-200 dark:border-zinc-900">
          <h2 className="text-lg font-bold mb-4 text-zinc-900 dark:text-white">
            Performance Score Distribution
          </h2>
          <div className="h-64">
            <Bar data={scoreDistributionData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeePerformancePage;
