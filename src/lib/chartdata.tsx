// src/lib/chartdata.ts

export type DepartmentType = "HR" | "Finance" | "Operations";
export type ChartMetricType = "sales" | "revenue" | "profit";
export type ApprovalStatus = "approved" | "pending" | "rejected";

export interface DepartmentChartData {
  month: string;
  year: number;
  department: DepartmentType;
  sales: number;
  revenue: number;
  profit: number;
  approvalStatus: ApprovalStatus;
}

export const chartMetrics = ["sales", "revenue", "profit"] as const;
export const departments: DepartmentType[] = ["HR", "Finance", "Operations"];
export const approvalStatuses: ApprovalStatus[] = ["approved", "pending", "rejected"];

export const departmentChartData: readonly DepartmentChartData[] = [
  // HR
  { month: "Jan", year: 2025, department: "HR", sales: 300, revenue: 800, profit: 200, approvalStatus: "approved" },
  { month: "Feb", year: 2025, department: "HR", sales: 350, revenue: 900, profit: 250, approvalStatus: "pending" },
  { month: "Mar", year: 2025, department: "HR", sales: 320, revenue: 850, profit: 230, approvalStatus: "rejected" },

  // Finance
  { month: "Jan", year: 2025, department: "Finance", sales: 600, revenue: 1800, profit: 500, approvalStatus: "approved" },
  { month: "Feb", year: 2025, department: "Finance", sales: 650, revenue: 1900, profit: 550, approvalStatus: "approved" },
  { month: "Mar", year: 2025, department: "Finance", sales: 620, revenue: 1850, profit: 530, approvalStatus: "pending" },

  // Operations
  { month: "Jan", year: 2025, department: "Operations", sales: 300, revenue: 800, profit: 200, approvalStatus: "rejected" },
  { month: "Feb", year: 2025, department: "Operations", sales: 500, revenue: 1300, profit: 300, approvalStatus: "pending" },
  { month: "Mar", year: 2025, department: "Operations", sales: 760, revenue: 2050, profit: 550, approvalStatus: "approved" },
] as const;