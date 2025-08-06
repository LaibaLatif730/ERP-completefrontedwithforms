import { ReportRecord, ReportCardData, TableRowData, ReportDataPoint } from "./type";

// Sample chart data
export const sampleReportData: ReportRecord[] = [
  {
    id: "1",
    item: "Product A",
    category: "Electronics",
    date: "2025-01-15",
    metric: "Sales",
    totalAmount: 1200,
    tab: "",
  
  },
  {
    id: "2",
    item: "Product B",
    category: "Apparel",
    date: "2025-02-20",
    metric: "Sales",
    totalAmount: 950,
    tab: ""
  },
  {
    id: "3",
    item: "Warehouse Stock",
    category: "Inventory",
    date: "2025-03-10",
    metric: "Inventory",
    totalAmount: 0,
    tab: ""
  },
];

export const salesTrend: ReportDataPoint[] = [
  { name: "Week 1", value: 1200 },
  { name: "Week 2", value: 1900 },
  { name: "Week 3", value: 1700 },
  { name: "Week 4", value: 2100 },
];

export const revenueTrend: ReportDataPoint[] = [
  { name: "Week 1", value: 8000 },
  { name: "Week 2", value: 9500 },
  { name: "Week 3", value: 9100 },
  { name: "Week 4", value: 10200 },
];

export const reportCards: ReportCardData[] = [
  {
    title: "Total Sales",
    value: "$7,900",
    change: "4.2%",
    isPositive: true,
    icon: "💰",
    color: "green",
    data: salesTrend,
  },
  {
    title: "Revenue",
    value: "$38,500",
    change: "3.1%",
    isPositive: true,
    icon: "📈",
    color: "blue",
    data: revenueTrend,
  },
  {
    title: "Expenses",
    value: "$12,300",
    change: "1.5%",
    isPositive: false,
    icon: "📉",
    color: "red",
  },
  {
    title: "Customer Growth",
    value: "+245",
    change: "6.9%",
    isPositive: true,
    icon: "🧑‍💼",
    color: "orange",
  },
];

export const reportTableRows: TableRowData[] = [
  {
    label: "Total Orders",
    value: "1,230",
    change: "2.4%",
    isPositive: true,
  },
  {
    label: "Pending Shipments",
    value: "145",
    change: "−1.2%",
    isPositive: false,
  },
  {
    label: "Returned Items",
    value: "36",
    change: "0.8%",
    isPositive: false,
  },
  {
    label: "New Customers",
    value: "98",
    change: "3.3%",
    isPositive: true,
  },
];

// Extra mock dashboard data
export const dashboardReports = [
  {
    id: "1",
    title: "Sales Summary",
    status: "Scheduled",
    type: "PDF",
  },
  {
    id: "2",
    title: "Inventory Check",
    status: "Completed",
    type: "Excel",
  },
  {
    id: "3",
    title: "Employee Performance",
    status: "Scheduled",
    type: "PDF",
  },
  {
    id: "4",
    title: "Customer Feedback",
    status: "Completed",
    type: "Excel",
  },
];
export type { ReportRecord };
