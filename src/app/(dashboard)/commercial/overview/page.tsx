"use client";

import React from 'react';
import { SearchCheck, Blocks, Activity } from 'lucide-react';
import commercialOverviewCards, { commercialModules } from '@/lib/commercialdata';
import QuickActions from '@/components/commercial/QuickActions';
import { cn } from "@/lib/utils";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
});

export default function CommercialOverviewPage() {
  return (
    <div className="min-h-screen flex flex-col p-4 text-gray-800 dark:text-gray-200 relative z-10 overflow-auto">
      {/* Compact Header */}
      <div className="relative rounded-xl p-2 shadow-md mb-2 flex justify-between items-center overflow-hidden">
        <div className="absolute inset-0 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-orange-500/5 dark:from-orange-500/10 dark:via-transparent dark:to-orange-500/10 rounded-xl blur-xl animate-pulse" />
          <div className="absolute inset-0 p-[1px] rounded-xl bg-gradient-to-br from-orange-500/30 via-white/20 to-blue-500/30 dark:from-orange-500/20 dark:via-white/10 dark:to-blue-500/20">
            <div className="absolute inset-0 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-xl" />
          </div>
        </div>

        <div className="relative z-10 group flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#F5793B]/10 dark:bg-[#F5793B]/20 flex items-center justify-center">
            <SearchCheck className="w-4 h-4 text-[#F5793B]" />
          </div>
          <div>
            <h1 className={cn(
              "text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 dark:from-orange-400 dark:via-orange-300 dark:to-orange-400",
              pacifico.className
            )}>
              Commercial Overview
            </h1>
            <p className="text-xs text-gray-700 dark:text-gray-300">Monitor sales, purchases, and operations</p>
          </div>
        </div>

        <div className="relative bg-white/50 dark:bg-gray-800/50 text-black dark:text-white font-mono px-2 py-1 rounded-xl text-xs z-10">
          <div className="flex items-center gap-2">
            <Activity className="w-3 h-3" />
            <span>Live Data</span>
          </div>
        </div>
      </div>

      {/* Compact Metrics Grid */}
      <div className="grid grid-cols-4 gap-2 mb-2">
        {commercialOverviewCards.slice(0, 4).map((card) => {
          const IconComponent = card.icon;
          return (
            <div
              key={card.title}
              className="relative p-2 rounded-xl shadow-sm overflow-hidden group hover:shadow-md transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-orange-500/5 dark:from-orange-500/10 dark:via-transparent dark:to-orange-500/10 rounded-xl blur-xl animate-pulse" />
                <div className="absolute inset-0 p-[1px] rounded-xl bg-gradient-to-br from-orange-500/20 via-white/10 to-blue-500/20 dark:from-orange-500/20 dark:via-white/5 dark:to-blue-500/20">
                  <div className="absolute inset-0 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-xl" />
                </div>
              </div>

              <div className="relative z-10 text-center">
                <div className="w-6 h-6 rounded-lg bg-[#F5793B]/10 dark:bg-[#F5793B]/20 flex items-center justify-center mx-auto mb-1">
                  <IconComponent className="w-3 h-3 text-[#F5793B]" />
                </div>
                <p className="text-[10px] font-medium text-gray-700 dark:text-gray-300 mb-1 truncate">{card.title}</p>
                <p className="text-sm font-bold text-[#F5793B] truncate">{card.amount}</p>
                <div className="flex justify-center mt-1">
                  {card.lmprofit.startsWith("+") ? (
                    <span className="bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-400 rounded-full py-0.5 px-1 text-[8px] font-medium">
                      {card.lmprofit}
                    </span>
                  ) : (
                    <span className="bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-400 rounded-full py-0.5 px-1 text-[8px] font-medium">
                      {card.lmprofit}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Commercial Modules - Compact */}
      <div className="relative rounded-xl shadow-sm p-2 overflow-hidden mb-2">
        <div className="absolute inset-0 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-blue-500/5 dark:from-blue-500/10 dark:via-transparent dark:to-blue-500/10 rounded-xl blur-xl animate-pulse-slow" />
          <div className="absolute inset-0 p-[1px] rounded-xl bg-gradient-to-br from-blue-500/20 via-white/10 to-blue-500/20 dark:from-blue-500/20 dark:via-white/5 dark:to-blue-500/20">
            <div className="absolute inset-0 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-xl" />
          </div>
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-5 h-5 rounded-lg bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center">
              <Blocks className="h-3 w-3 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">Commercial Modules</h3>
          </div>

          <div className="grid grid-cols-5 gap-2">
            {commercialModules.map((module) => {
              const IconComponent = module.icon;
              return (
                <div key={module.title} className="p-2 bg-gray-50 dark:bg-gray-800/50 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors border border-gray-200/50 dark:border-gray-700/50 cursor-pointer group">
                  <div className="flex flex-col items-center text-center">
                    <div className={`p-1.5 rounded-full mb-1 ${module.imageBg}`}>
                      <IconComponent className={`w-3 h-3 ${module.iconColor}`} />
                    </div>
                    <p className="text-[10px] font-medium text-gray-700 dark:text-gray-300 mb-0.5 truncate w-full">{module.title}</p>
                    <p className="text-[8px] text-gray-500 dark:text-gray-400 truncate w-full">{module.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Quick Actions - Compact */}
      <div className="relative rounded-xl shadow-sm p-2 overflow-hidden">
        <div className="absolute inset-0 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-green-500/5 dark:from-green-500/10 dark:via-transparent dark:to-green-500/10 rounded-xl blur-xl animate-pulse-slow" />
          <div className="absolute inset-0 p-[1px] rounded-xl bg-gradient-to-br from-green-500/20 via-white/10 to-green-500/20 dark:from-green-500/20 dark:via-white/5 dark:to-green-500/20">
            <div className="absolute inset-0 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-xl" />
          </div>
        </div>

        <div className="relative z-10">
          <QuickActions />
        </div>
      </div>
    </div>
  );
}