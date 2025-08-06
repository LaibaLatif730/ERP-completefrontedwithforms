"use client";

import { useState, ReactNode } from "react";
import Sidebar from "@/components/dashboard/SideNavbar";
import Header from "@/components/dashboard/Header";
import { TooltipProvider } from "@/components/ui/tooltip";

type Props = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <TooltipProvider>
      <div className="flex h-screen bg-gray-100 dark:bg-gray-900 transition-all duration-300 ease-in-out">
        {/* Sidebar with smooth width transition */}
        <div
          className={`transition-all duration-300 ease-in-out ${
            collapsed ? "w-[80px]" : "w-[200px]"
          }`}
        >
          <Sidebar collapsed={collapsed} onToggle={handleToggle} />
        </div>

        {/* Main content with flex-grow */}
        <div className="flex flex-col flex-1 overflow-hidden transition-all duration-300 ease-in-out">
          <Header onToggle={handleToggle} />

          <main className="flex-1 overflow-y-auto p-4 transition-all duration-300 ease-in-out bg-gray-100 dark:bg-gray-900">
            {children}
          </main>
        </div>
      </div>
    </TooltipProvider>
  );
}
