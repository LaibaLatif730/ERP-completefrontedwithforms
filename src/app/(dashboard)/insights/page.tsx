"use client"

import { useState, ReactNode } from 'react';
import { Users, Activity, CreditCard, TrendingUp, MessageSquare, SearchCheck, Blocks, LucideIcon } from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

// Type for the cn function parameters
type ClassValue = string | boolean | null | undefined;

// A simple cn function for conditional classNames with proper typing
const cn = (...classes: ClassValue[]): string => classes.filter(Boolean).join(' ');

// Types for the dummy data
interface GrowthData {
  name: string;
  value: number;
}

// interface ClientData {
//   id: string;
//   name: string;
// }

interface TicketData {
  id: string;
  subject: string;
  status: 'Open' | 'In Progress' | 'Closed';
}

interface MetricData {
  name: string;
  value: string;
}

interface SubscriptionTierData {
  tier: string;
  clients: string;
  percentage: string;
}

interface MrrData {
  month: string;
  mrr: string;
}

interface RevenueData {
  year: string;
  revenue: string;
}

interface ConversionRateData {
  month: string;
  rate: string;
}

// Dummy data for the charts and tables to demonstrate functionality
const userGrowthData: GrowthData[] = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 2000 },
  { name: 'Apr', value: 2780 },
  { name: 'May', value: 1890 },
  { name: 'Jun', value: 2390 },
];

// const newClientsData: ClientData[] = [
//   { id: 'C101', name: 'AlphaCorp' },
//   { id: 'C102', name: 'Beta Solutions' },
//   { id: 'C103', name: 'Gamma Inc.' },
// ];

const recentTicketsData: TicketData[] = [
  { id: 'T234', subject: 'Login issue on mobile', status: 'Open' },
  { id: 'T233', subject: 'Data sync error', status: 'In Progress' },
  { id: 'T232', subject: 'Report generation bug', status: 'Closed' },
];

// Props for StyledContainer component
interface StyledContainerProps {
  children: ReactNode;
}

// Reusable styled container component
const StyledContainer = ({ children }: StyledContainerProps) => (
  <div className="relative rounded-xl shadow-sm p-4 overflow-hidden mb-4">
    <div className="absolute inset-0 rounded-xl overflow-hidden">
      {/* Darker pulse effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-orange-500/5 dark:from-orange-500/10 dark:via-transparent dark:to-orange-500/10 rounded-xl blur-xl animate-pulse" />

      {/* Darker gradient border */}
      <div className="absolute inset-0 p-[1px] rounded-xl bg-gradient-to-br from-orange-500/30 via-white/20 to-blue-500/30 dark:from-orange-500/20 dark:via-gray-900/20 dark:to-blue-500/20">
        {/* Darker background - changed from bg-black/80 to bg-black/90 */}
        <div className="absolute inset-0 bg-white/90 dark:bg-black/90 backdrop-blur-md rounded-xl" />
      </div>
    </div>
    <div className="relative z-10 space-y-3">
      {children}
    </div>
  </div>
);

// Helper function for placeholder link actions with proper typing
const handleLinkClick = (text: string): void => {
  alert(`Navigating to the details for: ${text}`);
};

// Content components for each module with the new styling
const Overview = () => {
  const overviewMetrics: MetricData[] = [
    { name: 'Total Active Clients', value: '1,100' },
    { name: 'New Clients This Month', value: '50' },
    { name: 'Client Retention Rate', value: '92%' },
    { name: 'Churned Clients', value: '15' },
  ];

  const subscriptionTiers: SubscriptionTierData[] = [
    { tier: 'Free', clients: '400', percentage: '36%' },
    { tier: 'Pro', clients: '550', percentage: '50%' },
    { tier: 'Enterprise', clients: '150', percentage: '14%' },
  ];

  return (
    <StyledContainer>
      <h2 className="text-lg font-bold bg">Client Overview</h2>
      <p className="text-sm text-gray-600  dark:text-gray-400">Detailed insights into your client base, including retention and subscription tiers.</p>

      {/* Consolidated table for main metrics */}
      <div className="bg-orange-500/20 dark:bg-[#111111b9] p-4 rounded-lg shadow-md mt-4">
        <h3 className="text-base font-semibold mb-2">Key Client Metrics</h3>
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {overviewMetrics.map((metric, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{metric.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button className="text-sm" onClick={() => handleLinkClick(metric.name)}>
                      {metric.value}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  

      {/* Table for Client Subscription Tiers (kept separate due to different structure) */}
      <div className="bg-orange-500/20 dark:bg-[#111111b9] p-4 rounded-lg shadow-md mt-4">
        <h3 className="text-base font-semibold mb-2">Client Subscription Tiers</h3>
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="">
              {/* bg-gray-50 dark:bg-gray-700 */}
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Tier</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Clients</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Percentage</th>
              </tr>
            </thead>
            {/* \bg-white dark:bg-gray-800  */}
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {subscriptionTiers.map((tier, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{tier.tier}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{tier.clients}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{tier.percentage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </StyledContainer>
  );
};

const Usage = () => {
  const usageData = [
    { metric: 'Avg. Daily Active Users', value: '850 per client' },
    { metric: 'Peak Usage Times', value: '10:00 AM - 12:00 PM' },
    { metric: 'Most Used Modules', value: 'Sales (45%), Inventory (30%), Finance (25%)' },
  ];

  return (
    <StyledContainer>
      <h2 className="text-lg font-bold">Usage Analytics</h2>
      <p className="text-sm text-gray-600 dark:text-gray-400">Key metrics on how clients interact with your platform and its modules.</p>
      <div className="bg-orange-500/20 dark:bg-[#111111b9] p-4 rounded-lg shadow-md mt-4">
        <h3 className="text-base font-semibold mb-2">Platform Usage Data</h3>
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Metric</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Value</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {usageData.map((data, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{data.metric}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{data.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

    </StyledContainer>
  );
};

const Subscription = () => {
  // Random data for each table
  const mrrData: MrrData[] = [
    { month: 'Jun', mrr: '$250,000' },
    { month: 'May', mrr: '$245,000' },
    { month: 'Apr', mrr: '$240,000' },
  ];
  const totalRevenueData: RevenueData[] = [
    { year: '2024', revenue: '$1.5M' },
    { year: '2023', revenue: '$1.2M' },
  ];
  const conversionRateData: ConversionRateData[] = [
    { month: 'Jun', rate: '15%' },
    { month: 'May', rate: '14%' },
    { month: 'Apr', rate: '16%' },
  ];

  return (
    <StyledContainer>
      <h2 className="text-lg font-bold">Subscription & Billing Overview</h2>
      <p className="text-sm text-gray-600 dark:text-gray-400">A comprehensive look at your subscription revenue and billing status.</p>

      {/* Table for Monthly Recurring Revenue (MRR) */}
      <div className="bg-orange-500/20 dark:bg-[#111111b9] p-4 rounded-lg shadow-md mt-4">
        <h3 className="text-base font-semibold mb-2">Monthly Recurring Revenue (MRR)</h3>
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Month</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">MRR</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {mrrData.map((data, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{data.month}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{data.mrr}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    

      {/* Table for Total Revenue from Subscriptions */}
      <div className="bg-orange-500/20 dark:bg-[#111111b9] p-4 rounded-lg shadow-md mt-4">
        <h3 className="text-base font-semibold mb-2">Total Revenue from Subscriptions</h3>
        
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Year</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Revenue</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {totalRevenueData.map((data, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{data.year}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{data.revenue}</td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>

      {/* Table for Trial-to-paid conversion rate */}
      <div className="bg-orange-500/20 dark:bg-[#111111b9] p-4 rounded-lg shadow-md mt-4">
        <h3 className="text-base font-semibold mb-2">Trial-to-paid conversion rate</h3>
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Month</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Rate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {conversionRateData.map((data, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{data.month}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{data.rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        
      </div>
    </StyledContainer>
  );
};

const Trends = () => {
  const userDemographics = [
    { metric: 'Total Users Registered', value: '5,000' },
    { metric: 'Admin vs. Employee Roles', value: '300 Admins, 4,700 Employees' },
    { metric: 'New users by region/country', value: ['USA: 200', 'Canada: 150', 'UK: 100'] },
  ];

  return (
    <StyledContainer>
      <h2 className="text-lg font-bold">User Growth Trends</h2>
      <p className="text-sm text-gray-600 dark:text-gray-400">Insights into your user base&apos;s growth and composition.</p>

      {/* Buttons for actions with new styling */}
      <div className="flex space-x-2">
        <button className="flex text-sm bg-orange-500/30 text-orange-700 dark:bg-orange-500/30 dark:text-orange-300 shadow-md items-center space-x-1 px-2 py-1 rounded-lg transition-colors duration-200">
          <TrendingUp className="h-4 w-4" />
          <span>Predict Growth</span>
        </button>
        <button className="flex text-sm bg-orange-500/30 text-orange-700 dark:bg-orange-500/30 dark:text-orange-300 shadow-md items-center space-x-1 px-2 py-1 rounded-lg transition-colors duration-200">
          <Blocks className="h-4 w-4" />
          <span>Compare Segments</span>
        </button>
      </div>

      {/* User Demographics with link */}
      <div className="bg-orange-500/20 dark:bg-[#111111b9] p-4 rounded-lg shadow-md mt-4">
        <h3 className="text-base font-semibold mb-2">
          <button className="text-base font-semibold mb-2" onClick={() => handleLinkClick('mographics')}>
            User Demographics
          </button>
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Metric</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Value</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {userDemographics.map((data, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{data.metric}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {Array.isArray(data.value) ? (
                      <ul className="list-disc list-inside">
                        {data.value.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      data.value
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-orange-500/20 dark:bg-[#111111b9] p-4 rounded-lg shadow-md mt-4">
        <h3 className="text-base font-semibold mb-2">User Growth Per Client (last 6 months)</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={userGrowthData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#f5793b" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </StyledContainer>
  );
};

const Support = () => (
  <StyledContainer>
    <h2 className="text-lg font-bold">Support & Feedback</h2>
    <p className="text-sm text-gray-600 dark:text-gray-400">Monitor support ticket status and client satisfaction with key metrics.</p>

    {/* Support Action Buttons with new styling */}
    <div className="flex space-x-2">
      <button className="flex text-sm bg-orange-500/30 text-orange-700 dark:bg-orange-500/30 dark:text-orange-300 shadow-md items-center space-x-1 px-2 py-1 rounded-lg shadown-lg">
        <MessageSquare className="h-4 w-4" />
        <span>Open a New Ticket</span>
      </button>
      <button className="flex text-sm bg-orange-500/30 text-orange-700 dark:bg-orange-500/30 dark:text-orange-300 shadow-md items-center space-x-1 px-2 py-1 rounded-lg">
        <Users className="h-4 w-4" />
        <span>Contact Support Team</span>
      </button>
    </div>

    {/* Recent Support Tickets Section */}
    <div className="bg-orange-500/20 dark:bg-[#111111b9] p-4 rounded-lg shadow-md mt-4">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Ticket ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Subject</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {recentTicketsData.map((ticket, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{ticket.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">{ticket.subject}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${ticket.status === 'Open' ? 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-400' :
                    ticket.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-400' :
                      'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-400'
                    }`}>
                    {ticket.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>

    {/* FAQ and Knowledge Base Section */}
    <div className="bg-orange-500/20 dark:bg-[#111111b9] p-4 rounded-lg shadow-md mt-4">
      <h3 className="text-base font-semibold mb-2">Need a quick solution?</h3>
      <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
        Our comprehensive FAQ and knowledge base can help you find answers to common questions.
      </p>
      <button className="flex text-sm bg-orange-500/30 text-orange-700 dark:bg-orange-500/30 dark:text-orange-300 shadow-md items-center space-x-1 px-2 py-1 rounded-lg transition-colors duration-200">
        <Blocks className="h-4 w-4" />
        <span>View Knowledge Base</span>
      </button>
    </div>
  </StyledContainer>
);

// Update the ModuleConfig interface
interface ModuleConfig {
  icon: LucideIcon;
  component: () => React.JSX.Element;
}

// Type for the modules object
type ModulesMap = {
  [key: string]: ModuleConfig;
};

// Main App component
const App = () => {
  const [activeModule, setActiveModule] = useState<string>('Overview');

  // A map to link module names to their icons and components
  const modules: ModulesMap = {
    'Overview': { icon: Users, component: Overview },
    'Usage': { icon: Activity, component: Usage },
    'Subscription': { icon: CreditCard, component: Subscription },
    'Trends': { icon: TrendingUp, component: Trends },
    'Support': { icon: MessageSquare, component: Support },
  };

  const ActiveComponent = modules[activeModule].component;

  return (
    <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-50 font-sans antialiased">
      {/* Top Navigation Bar with the new style */}
      <div className="relative rounded-xl p-2 shadow-md mb-4 mx-4 mt-4 flex justify-between items-center overflow-hidden h-16 h-16 min-h-16 max-h-16">
        <div className="absolute inset-0 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-orange-500/5 dark:from-orange-500/10 dark:via-transparent dark:to-orange-500/10 rounded-xl blur-xl animate-pulse" />
          <div className="absolute inset-0 p-[1px] rounded-xl bg-gradient-to-br from-orange-500/30 via-white/20 to-blue-500/30 dark:from-orange-500/20 dark:via-white/10 dark:to-blue-500/20">
            <div className="absolute inset-0 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-xl" />
          </div>
        </div>

        <div className="relative z-10 group flex items-center gap-3 p-2">
          <div className="w-8 h-8 rounded-lg bg-[#F5793B]/10 dark:bg-[#F5793B]/20 flex items-center justify-center">
            <SearchCheck className="w-4 h-4 text-[#F5793B]" />
          </div>
          <div>
            <h1 className={cn(
              "text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 dark:from-orange-400 dark:via-orange-300 dark:to-orange-400"
            )}>
              Largify Insights
            </h1>
            <p className="text-xs text-gray-700 dark:text-gray-300">Monitor your company&apos;s performance</p>
          </div>
        </div>

        <nav className="relative z-10">
          <ul className="flex flex-wrap md:flex-nowrap gap-1">
            {Object.keys(modules).map((moduleName) => {
              const IconComponent = modules[moduleName].icon;
              const isActive = activeModule === moduleName;
              return (
                <li key={moduleName}>
                  <button
                    onClick={() => setActiveModule(moduleName)}
                    className={`flex items-center space-x-1 px-2 py-1 rounded-lg transition-colors duration-200 ${isActive
                      ? 'bg-orange-500/30 text-orange-700 dark:bg-orange-500/30 dark:text-orange-300 shadow-md'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 shadow-[0_0_0_2px_transparent]'
                      }`}
                  >
                    <IconComponent className="h-4 w-4" />
                    <span className="font-medium text-xs md:text-sm">{moduleName}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1  p-4">
        <ActiveComponent />
      </div>
    </div>
  );
};

export default App;