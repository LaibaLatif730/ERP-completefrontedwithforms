import { UserCheck, UserX, Sun, Percent} from 'lucide-react';
import {ShieldCheck, CalendarX2, Handshake, ShieldOff } from 'lucide-react';
import { Rocket, ListTodo } from 'lucide-react';
import { Users, UserPlus, Building2, Clock } from 'lucide-react'; // Added Award and UserCheck icons
import { CalendarDays, Banknote, Hourglass} from 'lucide-react';

import { Star,CheckSquare, Trophy } from 'lucide-react';

// Interface for EmployeeCard props (reused from EmployeeManagementPage)
interface EmployeeCardProps {
  title: string;
  value: string;
  situation: string;
  status: string; // e.g., "Healthy", "Attention needed"
  icon: React.ElementType;
  iconBgColor: string;
  iconColor: string;
  trend?: string; // e.g., "+6.1%"
}

export const attendanceCardsData: EmployeeCardProps[] = [
  { title: "Total Present Today", value: "135", situation: "Active employees", status: "Healthy", icon: UserCheck, iconBgColor: "bg-orange-100 dark:bg-orange-900/30", iconColor: "text-orange-600 dark:text-orange-500" },
  { title: "Total Absent Today", value: "8", situation: "Unaccounted", status: "Attention needed", icon: UserX, iconBgColor: "bg-orange-100 dark:bg-orange-900/30", iconColor: "text-orange-600 dark:text-orange-500" },
  { title: "On Leave Today", value: "5", situation: "Approved leave", status: "Healthy", icon: Sun, iconBgColor: "bg-orange-100 dark:bg-orange-900/30", iconColor: "text-orange-600 dark:text-orange-500" },
  { title: "Avg. Attendance Rate (MTD)", value: "92.5%", situation: "Month-to-date", status: "Healthy", icon: Percent, iconBgColor: "bg-orange-100 dark:bg-orange-900/30", iconColor: "text-orange-600 dark:text-orange-500" },
];

// Interface for Daily Attendance data
interface DailyAttendance {
  id: number;
  name: string;
  department: string;
  status: "Present" | "Absent" | "On Leave" | "Late";
  timeIn: string;
  timeOut: string;
}

// Dummy data for Daily Attendance Summary Table
export const dailyAttendanceData: DailyAttendance[] = [
  { id: 1, name: "Alice Brown", department: "Sales", status: "Present", timeIn: "09:00 AM", timeOut: "05:00 PM" },
  { id: 2, name: "Bob Green", department: "Marketing", status: "On Leave", timeIn: "-", timeOut: "-" },
  { id: 3, name: "Charlie White", department: "Operations", status: "Late", timeIn: "09:15 AM", timeOut: "05:00 PM" },
  { id: 4, name: "Diana Prince", department: "HR", status: "Absent", timeIn: "-", timeOut: "-" },
  { id: 5, name: "Eve Black", department: "Finance", status: "Present", timeIn: "08:55 AM", timeOut: "04:50 PM" },
  { id: 6, name: "Frank Yellow", department: "Sales", status: "Present", timeIn: "09:05 AM", timeOut: "05:05 PM" },
  { id: 7, name: "Grace Blue", department: "Operations", status: "Present", timeIn: "08:45 AM", timeOut: "04:45 PM" },
];

// Interface for Pending Leave Request data
interface PendingLeaveRequest {
  id: number;
  employee: string;
  type: string;
  startDate: string;
  endDate: string;
  status: "Pending" | "Approved" | "Rejected";
}

// Dummy data for Pending Leave Requests
export const pendingLeaveRequests: PendingLeaveRequest[] = [
  { id: 1, employee: "John Doe", type: "Casual Leave", startDate: "2025-08-01", endDate: "2025-08-03", status: "Pending" },
  { id: 2, employee: "Jane Smith", type: "Sick Leave", startDate: "2025-07-26", endDate: "2025-07-26", status: "Pending" },
  { id: 3, employee: "Peter Jones", type: "Vacation", startDate: "2025-08-10", endDate: "2025-08-15", status: "Pending" },
];

// Dummy data for Monthly Attendance Trend Chart
export const monthlyAttendanceTrend = {
  labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    { label: 'Avg. Attendance Rate (%)', data: [90, 91, 93, 92, 94, 92.5], fill: false, borderColor: 'rgb(75, 192, 192)', tension: 0.1 },
  ],
};

export const complianceCardsData: EmployeeCardProps[] = [
  { title: "Total Compliant Employees", value: "120", situation: "Mandatory training", status: "Healthy", icon: ShieldCheck, iconBgColor: "bg-orange-100 dark:bg-orange-900/30", iconColor: "text-orange-600 dark:text-orange-500" },
  { title: "Upcoming Deadlines", value: "7", situation: "Next 30 days", status: "Attention needed", icon: CalendarX2, iconBgColor: "bg-orange-100 dark:bg-orange-900/30", iconColor: "text-orange-600 dark:text-orange-500" },
  { title: "Policy Acknowledgments Pending", value: "28", situation: "New policies", status: "Attention needed", icon: Handshake, iconBgColor: "bg-orange-100 dark:bg-orange-900/30", iconColor: "text-orange-600 dark:text-orange-500" },
  { title: "Non-Compliant Employees", value: "5", situation: "Critical", status: "Critical", icon: ShieldOff, iconBgColor: "bg-orange-100 dark:bg-orange-900/30", iconColor: "text-orange-600 dark:text-orange-500" },
];


// Interface for Employee Compliance data
interface EmployeeCompliance {
  id: number;
  name: string;
  department: string;
  "Harassment Training": "Compliant" | "Pending" | "Expired" | "Non-Compliant";
  "Data Privacy Cert": "Compliant" | "Pending" | "Expired" | "Non-Compliant";
  "Code of Conduct": "Acknowledged" | "Pending";
}

// Dummy data for Employee Compliance Status Table
export const employeeComplianceData: EmployeeCompliance[] = [
  { id: 1, name: "Alex P. Keaton", department: "Finance", "Harassment Training": "Compliant", "Data Privacy Cert": "Expired", "Code of Conduct": "Acknowledged" },
  { id: 2, name: "Brenda Starr", department: "Marketing", "Harassment Training": "Pending", "Data Privacy Cert": "Compliant", "Code of Conduct": "Acknowledged" },
  { id: 3, name: "Clark Kent", department: "Operations", "Harassment Training": "Compliant", "Data Privacy Cert": "Compliant", "Code of Conduct": "Pending" },
  { id: 4, name: "Daphne Blake", department: "HR", "Harassment Training": "Compliant", "Data Privacy Cert": "Compliant", "Code of Conduct": "Acknowledged" },
  { id: 5, name: "Fred Jones", department: "Sales", "Harassment Training": "Non-Compliant", "Data Privacy Cert": "Pending", "Code of Conduct": "Pending" },
];

// Interface for Certifications/Training Expiry Alerts data
interface ExpiryAlert {
  item: string;
  employee: string;
  dueDate: string;
}

// Dummy data for Certifications/Training Expiry Alerts Section
export const expiryAlertsData: ExpiryAlert[] = [
  { item: "First Aid Certification", employee: "David Lee", dueDate: "2025-08-31" },
  { item: "Cybersecurity Training", employee: "Eve Adams", dueDate: "2025-09-15" },
  { item: "Compliance Workshop", employee: "George White", dueDate: "2025-10-01" },
];

// Interface for Policy Acknowledgment Status data
interface PolicyAcknowledgment {
  policy: string;
  acknowledgedCount: number;
  totalEmployees: number;
}

// Dummy data for Policy Acknowledgment Status Section
export const policyAcknowledgmentStatus: PolicyAcknowledgment[] = [
  { policy: "Remote Work Policy", acknowledgedCount: 100, totalEmployees: 148 },
  { policy: "Expense Reimbursement Policy", acknowledgedCount: 140, totalEmployees: 148 },
  { policy: "Code of Conduct V2", acknowledgedCount: 120, totalEmployees: 148 },
];



export const employeeCardsData: EmployeeCardProps[] = [
  {
    title: "Total Employees",
    value: "148",
    situation: "Active staff",
    status: "Healthy",
    icon: Users,
    iconBgColor: "bg-orange-100 dark:bg-orange-900/30",
    iconColor: "text-orange-600 dark:text-orange-500",
    trend: "+6.1%",
  },
  {
    title: "New Hires",
    value: "11",
    situation: "This month",
    status: "Healthy",
    icon: UserPlus,
    iconBgColor: "bg-orange-100 dark:bg-orange-900/30",
    iconColor: "text-orange-600 dark:text-orange-500",
    trend: "+22.7%",
  },
  {
    title: "Departments",
    value: "5",
    situation: "Active units",
    status: "Healthy",
    icon: Building2,
    iconBgColor: "bg-orange-100 dark:bg-orange-900/30",
    iconColor: "text-orange-600 dark:text-orange-500",
  },
  {
    title: "Avg Tenure",
    value: "2.4 yrs",
    situation: "Company avg",
    status: "Healthy",
    icon: Clock,
    iconBgColor: "bg-orange-100 dark:bg-orange-900/30",
    iconColor: "text-orange-600 dark:text-orange-500",
    trend: "-3.5%",
  },
];


// Dummy data for Department Distribution Chart
export const departmentDistributionData = {
  labels: ['Operations', 'Sales', 'Marketing', 'HR', 'Finance'],
  datasets: [
    {
      label: 'Employee Count',
      data: [45, 30, 25, 20, 18],
      backgroundColor: [
        'rgb(75, 192, 192)', // Greenish
        'rgb(54, 162, 235)', // Blue
        'rgb(255, 205, 86)', // Yellow
        'rgb(255, 99, 132)', // Red
        'rgb(150, 150, 150)', // Gray
      ],
      borderColor: [
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(255, 99, 132)',
        'rgb(150, 150, 150)',
      ],
      borderWidth: 1,
    },
  ],
};

// Dummy data for Employee Growth Chart
export const employeeGrowthData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Total Headcount',
      data: [130, 135, 140, 142, 145, 147, 148],
      fill: false,
      borderColor: 'rgb(54, 162, 235)', // Blue color
      tension: 0.1,
    },
    {
      label: 'New Hires',
      data: [5, 7, 6, 4, 8, 5, 11],
      fill: false,
      borderColor: '#f5793b', // Orange color
      tension: 0.1,
    },
  ],
};

// Dummy data for Skill Distribution Chart
export const skillDistributionData = {
  labels: ['Technical', 'Management', 'Creative', 'Support'],
  datasets: [
    {
      data: [65, 20, 32, 23], // Example counts
      backgroundColor: [
        'rgb(75, 192, 192)', // Technical - Greenish
        'rgb(54, 162, 235)', // Management - Blue
        'rgb(255, 205, 86)', // Creative - Yellow
        'rgb(255, 99, 132)', // Support - Red
      ],
      borderColor: [
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(255, 99, 132)',
      ],
      borderWidth: 1,
    },
  ],
};

// Dummy data for Recent Hires
interface RecentHire {
  name: string;
  role: string;
  date: string;
  avatarInitial: string;
}

export const recentHiresData: RecentHire[] = [
  { name: "Sarah Johnson", role: "Senior Developer", date: "2024-09-15", avatarInitial: "SJ" },
  { name: "Mike Chen", role: "Sales Manager", date: "2024-09-10", avatarInitial: "MC" },
  { name: "Emily Davis", role: "UX Designer", date: "2024-09-08", avatarInitial: "ED" },
  { name: "James Wilson", role: "HR Specialist", date: "2024-09-05", avatarInitial: "JW" },
];


export const onboardOffboardCardsData: EmployeeCardProps[] = [
  { title: "Active Onboardings", value: "7", situation: "In progress", status: "Healthy", icon: Rocket, iconBgColor: "bg-orange-100 dark:bg-orange-900/30", iconColor: "text-orange-600 dark:text-orange-500" },
  { title: "Upcoming Offboardings", value: "3", situation: "Next 30 days", status: "Attention needed", icon: UserX, iconBgColor: "bg-orange-100 dark:bg-orange-900/30", iconColor: "text-orange-600 dark:text-orange-500" },
  { title: "Onboarding Completion Rate", value: "85%", situation: "Past quarter", status: "Healthy", icon: UserCheck, iconBgColor: "bg-orange-100 dark:bg-orange-900/30", iconColor: "text-orange-600 dark:text-orange-500", trend: "+2.5%" },
  { title: "Tasks Overdue", value: "5", situation: "Immediate action", status: "Critical", icon: ListTodo, iconBgColor: "bg-orange-100 dark:bg-orange-900/30", iconColor: "text-orange-600 dark:text-orange-500" },
];

// Interface for Upcoming Onboardings data
interface UpcomingOnboarding {
  id: number;
  name: string;
  role: string;
  department: string;
  startDate: string;
  status: string;
  progress: number;
}

// Dummy data for Upcoming Onboardings Table
export const upcomingOnboardingsData: UpcomingOnboarding[] = [
  { id: 1, name: "Liam Johnson", role: "Marketing Specialist", department: "Marketing", startDate: "2025-08-01", status: "Pending IT Setup", progress: 60 },
  { id: 2, name: "Olivia Davis", role: "HR Generalist", department: "Human Resources", startDate: "2025-08-05", status: "HR Docs Pending", progress: 30 },
  { id: 3, name: "Noah White", role: "Senior Developer", department: "Operations", startDate: "2025-08-10", status: "Waiting for laptop", progress: 80 },
  { id: 4, name: "Emma Brown", role: "Product Designer", department: "Product", startDate: "2025-08-15", status: "Completed", progress: 100 },
];

// Interface for Upcoming Offboardings data
interface UpcomingOffboarding {
  id: number;
  name: string;
  role: string;
  department: string;
  lastDay: string;
  status: string;
  action: string;
}

// Dummy data for Upcoming Offboardings Table
export const upcomingOffboardingsData: UpcomingOffboarding[] = [
  { id: 1, name: "Sophia Martinez", role: "Sales Lead", department: "Sales", lastDay: "2025-07-31", status: "Pending Equipment Return", action: "View Checklist" },
  { id: 2, name: "William Lee", role: "Customer Support Rep", department: "Operations", lastDay: "2025-08-15", status: "Access Revocation Needed", action: "View Checklist" },
  { id: 3, name: "Ava Wilson", role: "Finance Analyst", department: "Finance", lastDay: "2025-08-20", status: "Completed", action: "View Checklist" },
];

// Interface for Task Progress data
interface TaskProgress {
  category: string;
  completed: number;
  total: number;
}

// Dummy data for Onboarding Task Progress Section
export const onboardingTaskProgress: TaskProgress[] = [
  { category: "HR Documents", completed: 7, total: 10 },
  { category: "IT Setup", completed: 5, total: 7 },
  { category: "Departmental Training", completed: 3, total: 5 },
  { category: "Welcome Kit", completed: 10, total: 10 },
];

// Dummy data for Offboarding Task Checklist Progress Section
export const offboardingTaskProgress: TaskProgress[] = [
  { category: "Equipment Return", completed: 1, total: 3 },
  { category: "Access Revocation", completed: 2, total: 5 },
  { category: "Final Pay Processing", completed: 0, total: 1 },
  { category: "Exit Interview", completed: 2, total: 3 },
];

export const payrollCardsData: EmployeeCardProps[] = [
  { title: "Next Payroll Date", value: "July 31, 2025", situation: "Upcoming processing", status: "Healthy", icon: CalendarDays, iconBgColor: "bg-orange-100 dark:bg-orange-900/30", iconColor: "text-orange-600 dark:text-orange-500" },
  { title: "Total Net Pay (Last Period)", value: "$250,000", situation: "For June 2025", status: "Healthy", icon: Banknote, iconBgColor: "bg-orange-100 dark:bg-orange-900/30", iconColor: "text-orange-600 dark:text-orange-500" },
  { title: "Employees on Payroll", value: "148", situation: "Active", status: "Healthy", icon: Users, iconBgColor: "bg-orange-100 dark:bg-orange-900/30", iconColor: "text-orange-600 dark:text-orange-500" },
  { title: "Pending Approvals", value: "3", situation: "Final review", status: "Attention needed", icon: Hourglass, iconBgColor: "bg-orange-100 dark:bg-orange-900/30", iconColor: "text-orange-600 dark:text-orange-500" },
];


// Dummy data for Current Payroll Run Status
export const currentPayrollStatus = {
  payPeriod: "July 1 - July 15, 2025",
  status: "Data Collection in Progress", // "Review", "Approved", "Disbursed"
  progress: 60 // out of 100 for a progress bar
};

// Interface for Employee Payroll Info data
interface EmployeePayrollInfo {
  id: number;
  name: string;
  role: string;
  salary: string;
  payFrequency: string;
  bankStatus: "Verified" | "Pending";
}

// Dummy data for Employee Payroll Information Table
export const employeePayrollInfoData: EmployeePayrollInfo[] = [
  { id: 1, name: "Isabella Garcia", role: "Marketing Manager", salary: "$75,000", payFrequency: "Bi-weekly", bankStatus: "Verified" },
  { id: 2, name: "Jacob Smith", role: "Software Engineer", salary: "$90,000", payFrequency: "Monthly", bankStatus: "Pending" },
  { id: 3, name: "Liam Johnson", role: "Sales Associate", salary: "$60,000", payFrequency: "Bi-weekly", bankStatus: "Verified" },
  { id: 4, name: "Mia Davis", role: "HR Coordinator", salary: "$55,000", payFrequency: "Monthly", bankStatus: "Verified" },
  { id: 5, name: "Noah Brown", role: "Operations Lead", salary: "$80,000", payFrequency: "Bi-weekly", bankStatus: "Pending" },
];

// Interface for Recent Payroll Disbursements data
interface RecentDisbursement {
  date: string;
  period: string;
  totalAmount: string;
}

// Dummy data for Recent Payroll Disbursements Section
export const recentDisbursements: RecentDisbursement[] = [
  { date: "2025-07-15", period: "Jul 1-15", totalAmount: "$120,000" },
  { date: "2025-06-30", period: "Jun 16-30", totalAmount: "$125,000" },
  { date: "2025-06-15", period: "Jun 1-15", totalAmount: "$118,000" },
];

// Dummy data for Monthly Payroll Cost Trend Chart
export const payrollCostTrend = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    { label: 'Total Payroll Cost ($K)', data: [240, 250, 245, 260, 255, 270], fill: false, borderColor: '#f5793b', tension: 0.1 },
  ],
};

export const performanceCardsData: EmployeeCardProps[] = [
  { title: "Avg. Performance Score", value: "4.2/5", situation: "Company average", status: "Healthy", icon: Star, iconBgColor: "bg-orange-100 dark:bg-orange-900/30", iconColor: "text-orange-600 dark:text-orange-500" },
  { title: "Employees Due for Review", value: "23", situation: "Next 30 days", status: "Attention needed", icon: Clock, iconBgColor: "bg-orange-100 dark:bg-orange-900/30", iconColor: "text-orange-600 dark:text-orange-500" },
  { title: "Reviews Completed (MTD)", value: "18", situation: "This month", status: "Healthy", icon: CheckSquare, iconBgColor: "bg-orange-100 dark:bg-orange-900/30", iconColor: "text-orange-600 dark:text-orange-500" },
  { title: "High Performers (Top 10%)", value: "15", situation: "Last review cycle", status: "Healthy", icon: Trophy, iconBgColor: "bg-orange-100 dark:bg-orange-900/30", iconColor: "text-orange-600 dark:text-orange-500" },
];


// Interface for Employee Performance data
interface EmployeePerformance {
  id: number;
  name: string;
  department: string;
  role: string;
  score: number;
  lastReview: string;
  nextReview: string;
}

// Dummy data for Employee Performance Overview Table
export const employeePerformanceData: EmployeePerformance[] = [
  { id: 1, name: "Frank Miller", department: "Sales", role: "Account Manager", score: 4.5, lastReview: "2025-03-01", nextReview: "2026-03-01" },
  { id: 2, name: "Grace Lee", department: "Marketing", role: "Content Creator", score: 3.8, lastReview: "2025-06-10", nextReview: "2026-06-10" },
  { id: 3, name: "Henry Kim", department: "Operations", role: "Logistics Coordinator", score: 3.0, lastReview: "2024-12-15", nextReview: "2025-12-15" },
  { id: 4, name: "Ivy Chen", department: "HR", role: "HR Business Partner", score: 4.1, lastReview: "2025-01-20", nextReview: "2026-01-20" },
  { id: 5, name: "Jack Wilson", department: "Finance", role: "Financial Analyst", score: 2.9, lastReview: "2025-04-05", nextReview: "2026-04-05" },
  { id: 6, name: "Karen Davis", department: "Sales", role: "Sales Executive", score: 4.8, lastReview: "2025-02-14", nextReview: "2026-02-14" },
];

// Dummy data for Performance Review Progress Section
export const reviewProgressData = {
  totalEmployees: 148,
  reviewsStarted: 120,
  managerReviewsSubmitted: 95,
  employeeSelfReviewsSubmitted: 110,
  completedReviews: 70,
};

// Dummy data for Performance Score Distribution Chart
export const scoreDistributionData = {
  labels: ['1.0-2.0', '2.1-3.0', '3.1-4.0', '4.1-5.0'],
  datasets: [
    { label: 'Number of Employees', data: [5, 25, 60, 40], backgroundColor: 'rgb(255, 159, 64)' },
  ],
};