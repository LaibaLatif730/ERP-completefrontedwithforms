import { SquareChartGantt , ArrowDownWideNarrow, AlertTriangle, Warehouse } from 'lucide-react';
import { Package, ArrowDownLeft, ArrowUpRight, Clock } from 'lucide-react';
import { ShoppingCart, Truck, Users } from 'lucide-react';

interface InventoryCardProps {
  title: string;
  value: string;
  situation: string;
  status: string;
  trend?: string; // e.g., "+5%" or "-2%"
  icon: React.ElementType; // Lucide React icon component
  iconBgColor: string; // Tailwind class for icon background
  iconColor: string; // Tailwind class for icon color
  valueColor: string; // Tailwind class for value color
}

export const inventoryCardsData: InventoryCardProps[] = [
  {
    title: "Total Products",
    value: "2,950",
    situation: "In stock",
    status: "Healthy",
    icon: SquareChartGantt ,
    iconBgColor: "bg-yellow-100 group-hover:bg-yellow-200 transition-colors duration-200 dark:bg-orange-900/30 dark:group-hover:bg-orange-800/50",
    iconColor: "text-yellow-600 dark:text-orange-500",
    valueColor: "text-green-600 dark:text-green-400", // Example color
  },
  {
    title: "Low Stock",
    value: "28",
    situation: "Need attention",
    status: "Attention needed",
    icon: ArrowDownWideNarrow ,
    iconBgColor: "bg-yellow-100 group-hover:bg-yellow-200 transition-colors duration-200 dark:bg-orange-900/30 dark:group-hover:bg-orange-800/50",
    iconColor: "text-yellow-600 dark:text-orange-500",
    valueColor: "text-red-600 dark:text-red-400", // Example color
    trend: "+5", // Example trend
  },
  {
    title: "Out of Stock",
    value: "125",
    situation: "Items",
    status: "Critical",
    icon: AlertTriangle,
    iconBgColor: "bg-yellow-100 group-hover:bg-yellow-200 transition-colors duration-200 dark:bg-orange-900/30 dark:group-hover:bg-orange-800/50",
    iconColor: "text-yellow-600 dark:text-orange-500",
    valueColor: "text-gray-600 dark:text-gray-400", // Example color
    trend: "-2", // Example trend
  },
  {
    title: "Warehouses",
    value: "4",
    situation: "Active locations",
    status: "Healthy",
    icon: Warehouse ,
    iconBgColor: "bg-yellow-100 group-hover:bg-yellow-200 transition-colors duration-200 dark:bg-orange-900/30 dark:group-hover:bg-orange-800/50",
    iconColor: "text-yellow-600 dark:text-orange-500",
    valueColor: "text-blue-600 dark:text-blue-400", // Example color
  },
];

// Dummy data for Inventory Trend Chart
export const inventoryTrendData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Products In',
      data: [65, 59, 80, 81, 56, 55, 40, 60, 70, 85, 90, 75],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    },
    {
      label: 'Products Out',
      data: [28, 48, 40, 19, 86, 27, 90, 50, 45, 60, 70, 80],
      fill: false,
      borderColor: '#f5793b',
      tension: 0.1,
    },
  ],
};


// Dummy data for Category Distribution Chart
export const categoryDistributionData = {
  labels: ['Electronics', 'Clothing', 'Home & Garden', 'Jewelry'],
  datasets: [
    {
      data: [1260, 980, 770, 525],
      backgroundColor: [
        'rgb(255, 99, 132)', // Red
        'rgb(54, 162, 235)', // Blue
        'rgb(255, 205, 86)', // Yellow
        'rgb(75, 192, 192)', // Green
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
      ],
      borderWidth: 1,
    },
  ],
};

interface RecentActivity {
  id: number;
  date: string;
  type: 'inbound' | 'outbound';
  product: string;
  quantity: number;
  warehouse: string;
}

export const recentWarehouseActivities: RecentActivity[] = [
  { id: 1, date: "2024-07-23", type: "inbound", product: "Laptop Pro X", quantity: 100, warehouse: "Main WH" },
  { id: 2, date: "2024-07-22", type: "outbound", product: "Summer T-Shirt", quantity: 50, warehouse: "South WH" },
  { id: 3, date: "2024-07-22", type: "inbound", product: "Gaming PC", quantity: 75, warehouse: "North WH" },
  { id: 4, date: "2024-07-21", type: "outbound", product: "Garden Tools Set", quantity: 20, warehouse: "East WH" },
  { id: 5, date: "2024-07-21", type: "inbound", product: "Ergonomic Chair", quantity: 30, warehouse: "Main WH" },
];

interface ProductInWarehouse {
  name: string;
  quantity: number;
  category: string;
}

interface DetailedWarehouseInventory {
  warehouse: string;
  products: ProductInWarehouse[];
}

export const detailedWarehouseInventory: DetailedWarehouseInventory[] = [
  {
    warehouse: "Main WH",
    products: [
      { name: "Laptop Pro X", quantity: 500, category: "Electronics" },
      { name: "Ergonomic Chair", quantity: 300, category: "Office Furniture" },
      { name: "Wireless Mouse", quantity: 750, category: "Electronics" },
      { name: "Mechanical Keyboard", quantity: 400, category: "Electronics" },
      { name: "Standing Desk", quantity: 150, category: "Office Furniture" },
    ]
  },
  {
    warehouse: "North WH",
    products: [
      { name: "Gaming PC", quantity: 250, category: "Electronics" },
      { name: "Desk Lamp", quantity: 150, category: "Home Goods" },
      { name: "Smart Speaker", quantity: 300, category: "Electronics" },
      { name: "Coffee Maker", quantity: 100, category: "Home Goods" },
      { name: "Vacuum Cleaner", quantity: 80, category: "Home Goods" },
    ]
  },
  {
    warehouse: "South WH",
    products: [
      { name: "Winter Coat", quantity: 600, category: "Apparel" },
      { name: "Jeans (Slim Fit)", quantity: 800, category: "Apparel" },
      { name: "Running Shoes", quantity: 450, category: "Footwear" },
      { name: "Backpack (Hiking)", quantity: 200, category: "Outdoor Gear" },
      { name: "Gloves (Winter)", quantity: 350, category: "Apparel" },
    ]
  },
  {
    warehouse: "East WH",
    products: [
      { name: "Garden Tools Set", quantity: 120, category: "Home & Garden" },
      { name: "Outdoor Grill", quantity: 50, category: "Home & Garden" },
      { name: "Patio Furniture", quantity: 30, category: "Home & Garden" },
      { name: "Flower Pots (Large)", quantity: 200, category: "Home & Garden" },
      { name: "Watering Can", quantity: 180, category: "Home & Garden" },
    ]
  },
];


export const warehouseData = [
  // Removed lightColor and darkColor from data objects
  { location: "Main WH", current: 4300, capacity: 5000 },
  { location: "North WH", current: 2100, capacity: 3000 },
  { location: "South WH", current: 3600, capacity: 4000 },
  { location: "East WH", current: 1800, capacity: 2500 },
];


  // Dummy data for Critical Out of Stock Items
  export const outOfStockData = [
    { product: "Vintage Leather Jacket", category: "Clothing", current: 0, min: 10 },
    { product: "Smartwatch Ultra", category: "Electronics", current: 0, min: 15 },
    { product: "Wireless Earbuds", category: "Electronics", current: 0, min: 50 },
  ];

  // Dummy data for Low Stock Alerts (reused from WarehouseStockSections.tsx)
  export const lowStockData = [
    { product: "Wireless Headphones", category: "Electronics", current: 5, min: 20 },
    { product: "Summer T-Shirt", category: "Clothing", current: 12, min: 25 },
    { product: "Garden Tools Set", category: "Home & Garden", current: 8, min: 15 },
    { product: "Running Shoes", category: "Sports", current: 3, min: 10 },
  ];

  // Dummy data for Reorder Recommendations
  export const reorderRecommendations = [
    { product: "Bluetooth Speaker", recommendedQty: 100, reason: "High Sales Volume" },
    { product: "Yoga Mat", recommendedQty: 75, reason: "Seasonal Demand Increase" },
    { product: "Protein Powder (Vanilla)", recommendedQty: 200, reason: "Consistent Demand" },
  ];

  interface SourceInventoryCardProps {
  title: string;
  value: string;
  situation: string;
  status: string;
  trend?: string; // e.g., "+5%" or "-2%"
  icon: React.ElementType; // Lucide React icon component
  iconBgColor: string; // Tailwind class for icon background
  iconColor: string; // Tailwind class for icon color
  valueColor?: string; // Optional: Tailwind class for value color (not used in this specific card, but kept for consistency)
}

  export const shipmentCardsData: SourceInventoryCardProps[] = [
  { title: "Total Active Shipments", value: "35", situation: "In transit/processing", status: "Healthy", icon: Package, iconBgColor: "bg-orange-100 dark:bg-orange-900/30", iconColor: "text-orange-600 dark:text-orange-500" },
  { title: "Inbound Shipments", value: "18", situation: "Expected soon", status: "Healthy", icon: ArrowDownLeft, iconBgColor: "bg-orange-100 dark:bg-orange-900/30", iconColor: "text-orange-600 dark:text-orange-500" },
  { title: "Outbound Shipments", value: "17", situation: "Dispatched", status: "Healthy", icon: ArrowUpRight, iconBgColor: "bg-orange-100 dark:bg-orange-900/30", iconColor: "text-orange-600 dark:text-orange-500" },
  { title: "Delayed Shipments", value: "4", situation: "Requires attention", status: "Attention needed", icon: Clock, iconBgColor: "bg-orange-100 dark:bg-orange-900/30", iconColor: "text-orange-600 dark:text-orange-500" },
];



// Interface for Live Shipment Status data
interface LiveShipment {
  id: number;
  trackingNumber: string;
  origin: string;
  destination: string;
  currentStatus: string;
  eta: string;
  lastUpdate: string;
}

// Dummy data for Live Shipment Status Table
export const liveShipmentsData: LiveShipment[] = [
  { id: 1, trackingNumber: "TRK-202507-001", origin: "Shanghai", destination: "Lahore", currentStatus: "In Transit (Customs)", eta: "2025-08-05", lastUpdate: "2025-07-28 10:30 AM" },
  { id: 2, trackingNumber: "TRK-202507-002", origin: "Karachi", destination: "Islamabad", currentStatus: "Out for Delivery", eta: "2025-07-29", lastUpdate: "2025-07-28 09:15 AM" },
  { id: 3, trackingNumber: "TRK-202507-003", origin: "Dubai", destination: "Lahore", currentStatus: "Processing at Warehouse", eta: "2025-08-02", lastUpdate: "2025-07-28 08:00 AM" },
  { id: 4, trackingNumber: "TRK-202507-004", origin: "Lahore", destination: "Multan", currentStatus: "Delayed (Weather)", eta: "2025-07-30", lastUpdate: "2025-07-27 05:00 PM" },
  { id: 5, trackingNumber: "TRK-202507-005", origin: "New York", destination: "Lahore", currentStatus: "Exception (Documentation)", eta: "N/A", lastUpdate: "2025-07-26 02:00 PM" },
];

// Dummy data for Shipment Status Distribution Chart
export const shipmentStatusDistributionData = {
  labels: ['In Transit', 'Delivered', 'Processing', 'Delayed', 'Exception'],
  datasets: [
    {
      data: [15, 80, 25, 4, 2], // Example counts
      backgroundColor: ['rgb(54, 162, 235)', 'rgb(75, 192, 192)', 'rgb(255, 205, 86)', 'rgb(255, 99, 132)', 'rgb(201, 203, 207)'],
      borderColor: ['rgb(54, 162, 235)', 'rgb(75, 192, 192)', 'rgb(255, 205, 86)', 'rgb(255, 99, 132)', 'rgb(201, 203, 207)'],
      borderWidth: 1,
    },
  ],
};

// Dummy data for Average Delivery Time Trend Chart
export const avgDeliveryTimeTrendData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Avg. Days',
      data: [7, 6.5, 7.2, 6.8, 7.5, 7, 7.1],
      fill: false,
      borderColor: '#f5793b',
      tension: 0.1,
    },
  ],
};

// Interface for Recent Deliveries/Received Items data
interface RecentDelivery {
  id: number;
  date: string;
  trackingNumber: string;
  type: "Inbound" | "Outbound";
  items: string;
  status: "Delivered" | "Received";
}

// Dummy data for Recent Deliveries/Received Items Table
export const recentDeliveriesData: RecentDelivery[] = [
  { id: 1, date: "2025-07-27", trackingNumber: "TRK-202507-005", type: "Inbound", items: "Electronics Batch 1", status: "Delivered" },
  { id: 2, date: "2025-07-26", trackingNumber: "TRK-202507-006", type: "Outbound", items: "Order #9876", status: "Delivered" },
  { id: 3, date: "2025-07-25", trackingNumber: "TRK-202507-007", type: "Inbound", items: "Office Supplies", status: "Received" },
  { id: 4, date: "2025-07-24", trackingNumber: "TRK-202507-008", type: "Outbound", items: "Customer Return", status: "Received" },
];


export const sourcingCardsData: SourceInventoryCardProps[] = [
  { title: "Active Purchase Orders", value: "85", situation: "In progress", status: "Healthy", icon: ShoppingCart, iconBgColor: "bg-orange-100 dark:bg-orange-900/30", iconColor: "text-orange-600 dark:text-orange-500" },
  { title: "Pending Approvals", value: "12", situation: "Awaiting action", status: "Attention needed", icon: Clock, iconBgColor: "bg-orange-100 dark:bg-orange-900/30", iconColor: "text-orange-600 dark:text-orange-500" },
  { title: "Orders Awaiting Delivery", value: "24", situation: "In transit", status: "Healthy", icon: Truck, iconBgColor: "bg-orange-100 dark:bg-orange-900/30", iconColor: "text-orange-600 dark:text-orange-500" },
  { title: "Suppliers Onboarded", value: "45", situation: "Active partners", status: "Healthy", icon: Users, iconBgColor: "bg-orange-100 dark:bg-orange-900/30", iconColor: "text-orange-600 dark:text-orange-500" },
];

// Interface for Pending Purchase Orders data
interface PendingPO {
  id: number;
  poNumber: string;
  supplier: string;
  orderDate: string;
  totalAmount: string;
  status: "Draft" | "Pending Approval" | "Ordered" | "Received" | "Cancelled";
}

// Dummy data for Pending Purchase Orders Table
export const pendingPOsData: PendingPO[] = [
  { id: 1, poNumber: "PO-202507-001", supplier: "Global Suppliers Inc.", orderDate: "2025-07-20", totalAmount: "$15,000", status: "Pending Approval" },
  { id: 2, poNumber: "PO-202507-002", supplier: "Tech Components Ltd.", orderDate: "2025-07-22", totalAmount: "$8,200", status: "Draft" },
  { id: 3, poNumber: "PO-202507-003", supplier: "Office Essentials Co.", orderDate: "2025-07-25", totalAmount: "$2,500", status: "Ordered" },
  { id: 4, poNumber: "PO-202507-004", supplier: "Manufacturing Solutions", orderDate: "2025-07-18", totalAmount: "$22,000", status: "Received" },
  { id: 5, poNumber: "PO-202507-005", supplier: "Logistics Partners", orderDate: "2025-07-21", totalAmount: "$5,000", status: "Cancelled" },
];

// Dummy data for Purchase Order Status Distribution Chart
export const poStatusDistributionData = {
  labels: ['Approved', 'Pending Approval', 'Ordered', 'Received', 'Cancelled'],
  datasets: [
    {
      data: [150, 40, 80, 60, 10], // Example counts
      backgroundColor: ['rgb(75, 192, 192)', 'rgb(255, 205, 86)', 'rgb(54, 162, 235)', 'rgb(40, 167, 69)', 'rgb(201, 203, 207)'],
      borderColor: ['rgb(75, 192, 192)', 'rgb(255, 205, 86)', 'rgb(54, 162, 235)', 'rgb(40, 167, 69)', 'rgb(201, 203, 207)'],
      borderWidth: 1,
    },
  ],
};

// Dummy data for Monthly Procurement Spending Chart
export const spendingTrendData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Total Spending ($)',
      data: [120000, 135000, 110000, 145000, 130000, 155000, 140000],
      fill: false,
      borderColor: '#f5793b',
      tension: 0.1,
    },
  ],
};

// Interface for Recent Supplier Activity data
interface RecentSupplierActivity {
  id: number;
  date: string;
  supplier: string;
  activityType: string;
  associatedPO: string;
}

// Dummy data for Recent Supplier Activity Table
export const recentSupplierActivityData: RecentSupplierActivity[] = [
  { id: 1, date: "2025-07-28", supplier: "Global Suppliers Inc.", activityType: "PO-202507-001 Approved", associatedPO: "PO-202507-001" },
  { id: 2, date: "2025-07-27", supplier: "Tech Components Ltd.", activityType: "Quote Received for TL-900", associatedPO: "N/A" },
  { id: 3, date: "2025-07-26", supplier: "Office Essentials Co.", activityType: "Payment Processed for INV-54321", associatedPO: "PO-202507-003" },
  { id: 4, date: "2025-07-25", supplier: "Manufacturing Solutions", activityType: "New Contract Signed", associatedPO: "N/A" },
];