import { DollarSign, ShoppingCart, Package, LineChart, FileText, Users, Truck, Receipt,Tag, Clock } from 'lucide-react';
import { CheckCircle, UsersRound, HeartHandshake } from 'lucide-react';

import { ReceiptText, TrendingUp, AlertCircle, CheckSquare } from 'lucide-react';

const commercialOverviewCards = [
    {
      title: "Total Sales ",
      amount: "$328K. This month",
      lmprofit: "+22.3%",
      icon: DollarSign,
      items: ["from last month"],
      // Default (Light Mode) styles for the card, overridden by dark: classes
      bg: "bg-gradient-to-b from-zinc-100 to-white", // From image analysis
      imageBg: "bg-yellow-100 group-hover:bg-yellow-200 transition-colors duration-200 dark:bg-orange-900/30 dark:group-hover:bg-orange-800/50", // From image analysis
      iconColor: "text-yellow-600 dark:text-orange-500", // From image analysis
      textColor: "text-zinc-600 dark:text-zinc-200", // From image analysis
      subTextColor: "text-zinc-900 dark:text-white", // From image analysis
      borderColor: "border-gray-200" // From image analysis
    },
    {
      title: "Total Purchases ",
      amount: "$231K. This month",
      lmprofit: "+22.3%",
      icon: ShoppingCart,
      items: ["from last month"],
      // Default (Light Mode) styles for the card, overridden by dark: classes
      bg: "bg-gradient-to-b from-zinc-100 to-white",
      imageBg: "bg-yellow-100 group-hover:bg-yellow-200 transition-colors duration-200 dark:bg-orange-900/30 dark:group-hover:bg-orange-800/50",
      iconColor: "text-yellow-600 dark:text-orange-500",
      textColor: "text-zinc-600 dark:text-zinc-200",
      subTextColor: "text-zinc-900 dark:text-white",
      borderColor: "border-gray-200"
    },
    {
      title: "Gross Profit",
      amount: " $97K. This month",
      lmprofit: "+22.3%",
      icon: LineChart,
      items: ["from last month"],
      // Default (Light Mode) styles for the card, overridden by dark: classes
      bg: "bg-gradient-to-b from-zinc-100 to-white",
      imageBg: "bg-yellow-100 group-hover:bg-yellow-200 transition-colors duration-200 dark:bg-orange-900/30 dark:group-hover:bg-orange-800/50",
      iconColor: "text-yellow-600 dark:text-orange-500",
      textColor: "text-zinc-600 dark:text-zinc-200",
      subTextColor: "text-zinc-900 dark:text-white",
      borderColor: "border-gray-200"
    },
    {
      title: "Active Orders ",
      amount: "$156K. This month",
      lmprofit: "-22.3%",
      icon: Package,
      items: ["from last month"],
      // Default (Light Mode) styles for the card, overridden by dark: classes
      bg: "bg-gradient-to-b from-zinc-100 to-white",
      imageBg: "bg-yellow-100 group-hover:bg-yellow-200 transition-colors duration-200 dark:bg-orange-900/30 dark:group-hover:bg-orange-800/50",
      iconColor: "text-yellow-600 dark:text-orange-500",
      textColor: "text-zinc-600 dark:text-zinc-200",
      subTextColor: "text-zinc-900 dark:text-white",
      borderColor: "border-gray-200"
    }
  ];

  interface SalesRepresentativeCardProps {
  id: number; // Added id to props interface as it's used for key
  name: string;
  status: 'active' | 'inactive' | 'on leave'; // Explicitly define possible string literal values
  email: string;
  phone: string;
  totalSales: string;
  avatarUrl?: string; // Optional prop
}

  
  export const salesRepresentativesData: SalesRepresentativeCardProps[] = [
    {
      id: 1, // Added unique id
      name: "John Smith",
      status: "active",
      email: "john.smith@largify.com",
      phone: "+1 (555) 123-4567",
      totalSales: "$425K",
      avatarUrl: "https://placehold.co/40x40/4299E1/ffffff?text=JS",
    },
    {
      id: 2, // Added unique id
      name: "Sarah Johnson",
      status: "active",
      email: "sarah.johnson@largify.com",
      phone: "+1 (555) 234-5678",
      totalSales: "$380K",
      avatarUrl: "https://placehold.co/40x40/38A169/ffffff?text=SJ",
    },
    {
      id: 3, // Added unique id
      name: "Mike Chen",
      status: "inactive",
      email: "mike.chen@largify.com",
      phone: "+1 (555) 345-6789",
      totalSales: "$290K",
      avatarUrl: "https://placehold.co/40x40/E53E3E/ffffff?text=MC",
    },
    {
      id: 4, // Added unique id
      name: "Emily Davis",
      status: "on leave",
      email: "emily.davis@largify.com",
      phone: "+1 (555) 456-7890",
      totalSales: "$210K",
      avatarUrl: "https://placehold.co/40x40/ECC94B/ffffff?text=ED", 
    },
    {
      id: 5, // Added unique id
      name: "David Lee",
      status: "active",
      email: "david.lee@largify.com",
      phone: "+1 (555) 567-8901",
      totalSales: "$510K",
      avatarUrl: "https://placehold.co/40x40/4299E1/ffffff?text=DL", 
    },
  ];
  
  export const cards = [
    {title: "Sales Representatives", value: "5", icon: UsersRound, 
    textColor: "text-zinc-600 dark:text-zinc-200",
    subTextColor: "text-zinc-900 dark:text-white",},
    {title: "Active Representatives", value: "3", icon: CheckCircle, 
    textColor: "text-zinc-600 dark:text-zinc-200",
    subTextColor: "text-zinc-900 dark:text-white",},
    {title: "Total Deals", value: "78", icon: HeartHandshake, 
    textColor: "text-zinc-600 dark:text-zinc-200",
    subTextColor: "text-zinc-900 dark:text-white",},
    {title: "Total Reveneue", value: "$1.5M", icon: DollarSign, 
    textColor: "text-zinc-600 dark:text-zinc-200",
    subTextColor: "text-zinc-900 dark:text-white",},
  ]

  // All Commercial Modules for Quick Actions
  export const commercialModules = [
    {
      title: "Sales",
      description: "Manage sales operations",
      icon: DollarSign,
      route: "/commercial/sales",
      bg: "bg-gradient-to-b from-zinc-100 to-white",
      imageBg: "bg-green-100 group-hover:bg-green-200 transition-colors duration-200 dark:bg-green-900/30 dark:group-hover:bg-green-800/50",
      iconColor: "text-green-600 dark:text-green-500",
      textColor: "text-zinc-600 dark:text-zinc-200",
      subTextColor: "text-zinc-900 dark:text-white",
      borderColor: "border-green-200 dark:border-green-800"
    },
    {
      title: "Purchase Department",
      description: "Handle procurement",
      icon: ShoppingCart,
      route: "/commercial/purchase",
      bg: "bg-gradient-to-b from-zinc-100 to-white",
      imageBg: "bg-blue-100 group-hover:bg-blue-200 transition-colors duration-200 dark:bg-blue-900/30 dark:group-hover:bg-blue-800/50",
      iconColor: "text-blue-600 dark:text-blue-500",
      textColor: "text-zinc-600 dark:text-zinc-200",
      subTextColor: "text-zinc-900 dark:text-white",
      borderColor: "border-blue-200 dark:border-blue-800"
    },
    {
      title: "Invoices",
      description: "Manage billing",
      icon: Receipt,
      route: "/commercial/invoices",
      bg: "bg-gradient-to-b from-zinc-100 to-white",
      imageBg: "bg-purple-100 group-hover:bg-purple-200 transition-colors duration-200 dark:bg-purple-900/30 dark:group-hover:bg-purple-800/50",
      iconColor: "text-purple-600 dark:text-purple-500",
      textColor: "text-zinc-600 dark:text-zinc-200",
      subTextColor: "text-zinc-900 dark:text-white",
      borderColor: "border-purple-200 dark:border-purple-800"
    },
    {
      title: "Quotations",
      description: "Create quotes",
      icon: FileText,
      route: "/commercial/quotations",
      bg: "bg-gradient-to-b from-zinc-100 to-white",
      imageBg: "bg-orange-100 group-hover:bg-orange-200 transition-colors duration-200 dark:bg-orange-900/30 dark:group-hover:bg-orange-800/50",
      iconColor: "text-orange-600 dark:text-orange-500",
      textColor: "text-zinc-600 dark:text-zinc-200",
      subTextColor: "text-zinc-900 dark:text-white",
      borderColor: "border-orange-200 dark:border-orange-800"
    },
    {
      title: "Orders",
      description: "Track orders",
      icon: Package,
      route: "/commercial/orders",
      bg: "bg-gradient-to-b from-zinc-100 to-white",
      imageBg: "bg-indigo-100 group-hover:bg-indigo-200 transition-colors duration-200 dark:bg-indigo-900/30 dark:group-hover:bg-indigo-800/50",
      iconColor: "text-indigo-600 dark:text-indigo-500",
      textColor: "text-zinc-600 dark:text-zinc-200",
      subTextColor: "text-zinc-900 dark:text-white",
      borderColor: "border-indigo-200 dark:border-indigo-800"
    },
    {
      title: "Customers",
      description: "Manage clients",
      icon: Users,
      route: "/commercial/customers",
      bg: "bg-gradient-to-b from-zinc-100 to-white",
      imageBg: "bg-teal-100 group-hover:bg-teal-200 transition-colors duration-200 dark:bg-teal-900/30 dark:group-hover:bg-teal-800/50",
      iconColor: "text-teal-600 dark:text-teal-500",
      textColor: "text-zinc-600 dark:text-zinc-200",
      subTextColor: "text-zinc-900 dark:text-white",
      borderColor: "border-teal-200 dark:border-teal-800"
    },
    {
      title: "Suppliers",
      description: "Vendor management",
      icon: Truck,
      route: "/commercial/suppliers",
      bg: "bg-gradient-to-b from-zinc-100 to-white",
      imageBg: "bg-red-100 group-hover:bg-red-200 transition-colors duration-200 dark:bg-red-900/30 dark:group-hover:bg-red-800/50",
      iconColor: "text-red-600 dark:text-red-500",
      textColor: "text-zinc-600 dark:text-zinc-200",
      subTextColor: "text-zinc-900 dark:text-white",
      borderColor: "border-red-200 dark:border-red-800"
    },
    {
      title: "Products",
      description: "Product catalog",
      icon: Package,
      route: "/commercial/products",
      bg: "bg-gradient-to-b from-zinc-100 to-white",
      imageBg: "bg-cyan-100 group-hover:bg-cyan-200 transition-colors duration-200 dark:bg-cyan-900/30 dark:group-hover:bg-cyan-800/50",
      iconColor: "text-cyan-600 dark:text-cyan-500",
      textColor: "text-zinc-600 dark:text-zinc-200",
      subTextColor: "text-zinc-900 dark:text-white",
      borderColor: "border-cyan-200 dark:border-cyan-800"
    },
    {
      title: "Pricing",
      description: "Price management",
      icon: Tag,
      route: "/commercial/pricing",
      bg: "bg-gradient-to-b from-zinc-100 to-white",
      imageBg: "bg-pink-100 group-hover:bg-pink-200 transition-colors duration-200 dark:bg-pink-900/30 dark:group-hover:bg-pink-800/50",
      iconColor: "text-pink-600 dark:text-pink-500",
      textColor: "text-zinc-600 dark:text-zinc-200",
      subTextColor: "text-zinc-900 dark:text-white",
      borderColor: "border-pink-200 dark:border-pink-800"
    }
  ];

  export default commercialOverviewCards;



  // Invoices Data 

  interface InvoiceCardProps {
    title: string;
    value: string;
    situation: string;
    status: string;
    icon: React.ElementType; // Lucide React icon component
    iconBgColor: string; // Tailwind class for icon background
    iconColor: string; // Tailwind class for icon color
  }


  export const invoiceCardsData: InvoiceCardProps[] = [
    {
      title: "Total Outstanding",
      value: "$55,200",
      situation: "Unpaid invoices",
      status: "Attention needed",
      icon: ReceiptText,
      iconBgColor: "bg-orange-100 dark:bg-orange-900/30 group-hover:",
      iconColor: "text-orange-600 dark:text-orange-500",
    },
    {
      title: "Total Revenue (MTD)",
      value: "$85,000",
      situation: "Month-to-date",
      status: "Healthy",
      icon: TrendingUp,
      iconBgColor: "bg-orange-100 dark:bg-orange-900/30 group-hover:",
      iconColor: "text-orange-600 dark:text-orange-500",
    },
    {
      title: "Overdue Invoices",
      value: "15",
      situation: "Requires follow-up",
      status: "Critical",
      icon: AlertCircle,
      iconBgColor: "bg-orange-100 dark:bg-orange-900/30",
      iconColor: "text-orange-600 dark:text-orange-500",
    },
    {
      title: "Paid Invoices (Last 30 Days)",
      value: "112",
      situation: "Successfully settled",
      status: "Healthy",
      icon: CheckSquare,
      iconBgColor: "bg-orange-100 dark:bg-orange-900/30 group-hover:",
      iconColor: "text-orange-600 dark:text-orange-500",
    },
  ];


  // Interface for Invoice data
interface Invoice {
  id: string;
  type: "Sales" | "Purchase" | "Service";
  entity: string;
  date: string;
  dueDate: string;
  amount: number;
  status: "Paid" | "Pending" | "Overdue" | "Draft";
}

// Dummy data for All Invoices Table
export const invoiceData: Invoice[] = [
  { id: "INV001", type: "Sales", entity: "Acme Corp.", date: "2025-07-15", dueDate: "2025-08-15", amount: 5000, status: "Pending" },
  { id: "INV002", type: "Purchase", entity: "Supplier A", date: "2025-07-10", dueDate: "2025-08-01", amount: 1200, status: "Paid" },
  { id: "INV003", type: "Sales", entity: "Beta Ltd.", date: "2025-06-20", dueDate: "2025-07-20", amount: 800, status: "Overdue" },
  { id: "INV004", type: "Service", entity: "Client Z", date: "2025-07-22", dueDate: "2025-09-22", amount: 350, status: "Draft" },
  { id: "INV005", type: "Sales", entity: "Gamma Co.", date: "2025-07-01", dueDate: "2025-07-30", amount: 2500, status: "Paid" },
  { id: "INV006", type: "Purchase", entity: "Vendor B", date: "2025-06-25", dueDate: "2025-07-25", amount: 700, status: "Pending" },
  { id: "INV007", type: "Sales", entity: "Delta Corp.", date: "2025-07-05", dueDate: "2025-08-05", amount: 1500, status: "Pending" },
  { id: "INV008", type: "Service", entity: "Service Pro", date: "2025-06-10", dueDate: "2025-07-10", amount: 450, status: "Overdue" },
];


export const invoiceStatusData = {
  labels: ['Paid', 'Pending', 'Overdue', 'Draft'],
  datasets: [
    {
      data: [80, 40, 15, 5], // Example counts
      backgroundColor: [
        'rgb(75, 192, 192)', // Greenish
        'rgb(255, 205, 86)', // Yellow
        'rgb(255, 99, 132)', // Red
        'rgb(150, 150, 150)', // Gray
      ],
      borderColor: [
        'rgb(75, 192, 192)',
        'rgb(255, 205, 86)',
        'rgb(255, 99, 132)',
        'rgb(150, 150, 150)',
      ],
      borderWidth: 1,
    },
  ],
};


export const revenueTrendData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], // Example months
  datasets: [
    {
      label: 'Revenue ($K)',
      data: [100, 120, 90, 150, 130, 160, 180], // Example data
      fill: false,
      borderColor: 'rgb(54, 162, 235)', // Blue color
      tension: 0.1,
    },
    {
      label: 'Payments Received ($K)',
      data: [80, 100, 70, 130, 110, 140, 150], // Example data
      fill: false,
      borderColor: '#f5793b', // Teal color
      tension: 0.1,
    },
  ],
};


// Purchase page data 

// Interface for Purchase Order data
interface PurchaseOrder {
  poNum: string;
  supplier: string;
  date: string;
  amount: string;
  status: 'Pending' | 'Approved' | 'Shipped' | 'Received' | 'Overdue';
  expectedDelivery: string;
}

// Dummy data for Recent Purchase Orders
export const purchaseOrdersData: PurchaseOrder[] = [
  { poNum: "PO001", supplier: "Tech Supply Co.", date: "2024-07-20", amount: "$5,000", status: "Approved", expectedDelivery: "2024-07-28" },
  { poNum: "PO002", supplier: "Fashion Wholesalers", date: "2024-07-18", amount: "$3,200", status: "Shipped", expectedDelivery: "2024-07-25" },
  { poNum: "PO003", supplier: "Home Essentials Inc.", date: "2024-07-15", amount: "$1,800", status: "Pending", expectedDelivery: "2024-08-01" },
  { poNum: "PO004", supplier: "Sports Gear Ltd.", date: "2024-07-12", amount: "$1,500", status: "Overdue", expectedDelivery: "2024-07-19" },
  { poNum: "PO005", supplier: "Tech Supply Co.", date: "2024-07-10", amount: "$7,500", status: "Received", expectedDelivery: "2024-07-15" },
  { poNum: "PO006", supplier: "Fashion Wholesalers", date: "2024-07-05", amount: "$2,100", status: "Approved", expectedDelivery: "2024-07-20" },
  { poNum: "PO007", supplier: "Home Essentials Inc.", date: "2024-07-01", amount: "$900", status: "Pending", expectedDelivery: "2024-07-28" },
];

// Interface for Low Stock Item (reused from ReorderAlertsPage)
interface LowStockItem {
  product: string;
  category: string;
  current: number;
  min: number;
}

export const lowStockReorderData: LowStockItem[] = [
  { product: "Wireless Headphones", category: "Electronics", current: 5, min: 20 },
  { product: "Summer T-Shirt", category: "Clothing", current: 12, min: 25 },
  { product: "Garden Tools Set", category: "Home & Garden", current: 8, min: 15 },
];

// Dummy data for Purchase Trend Chart
export const purchaseTrendData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Monthly Spend ($)',
      data: [15000, 18000, 12000, 20000, 25000, 22000, 28000],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    },
  ],
};

interface OverviewCardProps {
  title: string;
  value: string;
  icon: React.ElementType;
  iconBgColor: string;
  iconColor: string;
}

// Dummy data for Overview Cards
export const overviewCardsData: OverviewCardProps[] = [
  {
    title: "Total Open POs",
    value: "45",
    icon: Package,
    iconBgColor: "bg-yellow-100 dark:bg-orange-900/30",
    iconColor: "text-yellow-600 dark:text-orange-500",
  },
  {
    title: "Total Spend",
    value: "$1.2M",
    icon: DollarSign,
    iconBgColor: "bg-yellow-100 dark:bg-orange-900/30",
    iconColor: "text-yellow-600 dark:text-orange-500",
  },
  {
    title: "Overdue POs",
    value: "5",
    icon: Clock,
    iconBgColor: "bg-yellow-100 dark:bg-orange-900/30",
    iconColor: "text-yellow-600 dark:text-orange-500",
  },
  {
    title: "Approved POs",
    value: "98",
    icon: CheckCircle,
    iconBgColor: "bg-yellow-100 dark:bg-orange-900/30",
    iconColor: "text-yellow-600 dark:text-orange-500",
  },
];


export const purchaseTrendOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const,
      labels: {
        color: 'rgb(107 114 128)' // Tailwind gray-500 for light mode
      }
    },
    tooltip: {
      mode: 'index' as const,
      intersect: false,
    },
  },
  scales: {
    x: {
      ticks: {
        color: 'rgb(107 114 128)' // Tailwind gray-500
      },
      grid: {
        color: 'rgba(209, 213, 219, 0.2)' // Tailwind gray-300 with opacity
      }
    },
    y: {
      ticks: {
        color: 'rgb(107 114 128)' // Tailwind gray-500
      },
      grid: {
        color: 'rgba(209, 213, 219, 0.2)' // Tailwind gray-300 with opacity
      }
    }
  }
};