// app/(commercial)/employees/page.tsx
"use client";
import { UserPlus, ChevronDown} from 'lucide-react'; // Added Award and UserCheck icons
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Tooltip, Legend } from 'chart.js'; // Added ArcElement for Pie chart
import { useState } from 'react';
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

// Dummy data for Employee Information Cards
import { employeeCardsData } from '@/lib/hrdata';

// Dummy data for Recent Hires
import { recentHiresData } from '@/lib/hrdata';

// --- COMPONENTS ---

interface NavbarProps {
  onNavLinkClick: (link: string) => void;
}
interface NavDropdownProps {
  title: string;
  links: string[];
}

// Navbar Component
const Navbar = ({ onNavLinkClick } : NavbarProps) => {
  const NavDropdown = ({ title, links } : NavDropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = (link : string) => {
      onNavLinkClick(link);
      setIsOpen(false);
    };

    return (
      <div className="relative z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white/50 dark:bg-gray-800/50 text-black dark:text-white flex items-center justify-center py-2 px-4 rounded-lg shadow-md hover:bg-orange-500 transition-all duration-200 w-full sm:w-auto whitespace-nowrap text-sm"
        >
          {title}
          <ChevronDown size={16} className={`ml-2 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        {isOpen && (
          <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-50 border border-gray-200 dark:border-gray-700">
            <ul className="py-1">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link);
                    }}
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };
  
  const empLinks = ['Administration', 'Recent Hires', 'Active', "On leave"];
  
  return (
    <div className="flex flex-col md:flex-row gap-4 z-20">
      <NavDropdown title="Orders"  links={empLinks} />
    </div>
  );
};


const EmployeeManagementPage: React.FC = () => {
  
  return (
    <div className="min-h-screen p-6 sm:p-8 lg:p-10 font-sans text-gray-900 dark:text-white">
      {/* Header Section */}
      <div className="mb-8 relative z-20 inset-0 bg-white/90 dark:bg-black/80 backdrop-blur-md p-2 rounded-xl flex justify-between items-center">
        <div>
        <h1 className={cn("text-lg font-bold text-orange-500 dark:text-zinc-100", pacifico.className)}>Employee Information</h1>
        <p className="text-zinc-800 dark:text-zinc-200 text-xs">Manage employee data and organizational insights</p>
        </div>
        {/* Navbar Section */}
        <div className="flex gap-3 items-center">
          <div className="relative z-20 flex flex-col md:flex-row gap-4">
            <Navbar onNavLinkClick={(link) => console.log(`Navigating to: ${link}`)} />
          </div>
            <a href="/hr/empinfo/departments" className="bg-white/50 dark:bg-gray-800/50 text-black dark:text-white py-2 px-4 rounded-xl">Departments</a>
        </div>
      </div>

      {/* Employee Information Cards */}
      <div className="relative z-[0px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {employeeCardsData.map((card, index) => (
          <EmployeeCard
            key={index}
            title={card.title}
            value={card.value}
            situation={card.situation}
            status={card.status}
            icon={card.icon}
            iconBgColor={card.iconBgColor}
            iconColor={card.iconColor}
            trend={card.trend}
          />
        ))}
      </div>

      {/* Skill Distribution and Recent Hires Sections */}
      {/* This grid ensures parallel display on desktop (lg:grid-cols-2) and stacking on mobile (grid-cols-1) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Recent Hires Section */}
        <div className="inset-0 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-xl shadow-lg p-6 border border-gray-200 dark:border-zinc-900">
          <h2 className="text-lg font-bold mb-4 text-zinc-900 dark:text-white flex items-center">
            <UserPlus size={18} className="mr-2 text-orange-600 dark:text-orange-400" />
            Recent Hires
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">Latest additions to the team</p>
          {recentHiresData.map((hire, index) => (
            <div key={index} className="flex items-center justify-between mb-3 last:mb-0">
              <div className="flex items-center">
                <div className="w-9 h-9 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs mr-3 flex-shrink-0">
                  {hire.avatarInitial}
                </div>
                <div>
                  <p className="font-semibold text-zinc-900 dark:text-white">{hire.name}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-300">{hire.role}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-700 dark:text-gray-300">{hire.date}</p>
                <span className="text-green-500 text-xs font-semibold">Active</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmployeeManagementPage;