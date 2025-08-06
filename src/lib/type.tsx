import type { ReactNode } from "react";

/**
 * A single data point for charts or sparklines
 */
export interface ReportDataPoint {
  name: string;
  value: number;
}

/**
 * Departments across ERP modules
 */
export type DepartmentType = "Sales" | "HR" | "Finance" | "Operations" | "Customer Support";

/**
 * Approval workflow status
 */
export type ApprovalStatus = "approved" | "pending" | "rejected";

/**
 * Represents a detailed report record (e.g., a row in a dataset)
 */
export interface ReportRecord {
  id: string;
  item: string;
  category?: string;
  date: string; // ISO format e.g. "2025-03-01"
  metric: "Sales" | "Inventory" | "HR" | "Finance" | "Operations";
  totalAmount?: number;
  tab: "Monthly" | "Quarterly" | "Yearly";
  department: DepartmentType;
  approvalStatus: ApprovalStatus;
  [key: string]: any; // for any dynamic props
}

/**
 * Represents a high-level summary report
 */
export interface Report {
  id: string;
  title: string;
  size?: any;
  category?: any;
  generated: string | number | Date;
  status: "Scheduled" | "Completed";
  type: "PDF" | "Excel";
  department: DepartmentType;
  approvalStatus: ApprovalStatus;
}

/**
 * A card used to display key metrics
 */
export interface ReportCardData {
  metric: string;
  title: string;
  value: string;
  change: string;
  isPositive?: boolean;
  icon?: ReactNode;
  color?: "green" | "red" | "blue" | "orange" | "purple";
  data?: ReportDataPoint[];
  loading?: boolean;
}

export type ReportCardProps = ReportCardData;

/**
 * A row in the report table component
 */
export interface TableRowData {
  label: string;
  value: string;
  change: string;
  isPositive?: boolean;
}

/**
 * Props for the ReportTable component
 */
export interface ReportTableProps {
  title: string;
  rows: TableRowData[];
  loading?: boolean;
}

/**
 * Props for the SearchBar component
 */
export interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

/**
 * Props for the MonthSelect component
 */
export interface MonthSelectProps {
  selectedMonth: number; // 0–11
  selectedYear: number;
  onChange: (month: number, year: number) => void;
  years?: number[];
  className?: string;
  disabled?: boolean;
}