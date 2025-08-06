"use client";

import React from 'react'
import { Zap } from 'lucide-react';
import { commercialModules } from '@/lib/commercialdata';
import { useRouter } from 'next/navigation';
const QuickActions = () => {
  const router = useRouter();

  const handleModuleClick = (route: string) => {
    router.push(route);
  };

  return (
    <div className="flex flex-col gap-2">
      {/* Compact Header Section */}
      <div className="flex items-center gap-2 mb-2">
        <div className="bg-yellow-100 dark:bg-yellow-900/30 p-1.5 rounded-lg">
          <Zap className="w-3 h-3 text-yellow-600 dark:text-orange-500" />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Quick Actions</h3>
          <p className="text-[10px] text-zinc-600 dark:text-zinc-400">Common commercial operations</p>
        </div>
      </div>

      {/* Compact Cards Grid */}
      <div className="grid grid-cols-5 gap-2">
        {commercialModules.map((module) => {
          const IconComponent = module.icon;
          return (
            <div
              key={module.title}
              onClick={() => handleModuleClick(module.route)}
              className="flex flex-col items-center p-2 bg-gray-50 dark:bg-gray-800/50 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors border border-gray-200/50 dark:border-gray-700/50 cursor-pointer group"
            >
              <div className={`p-1.5 rounded-full mb-1 ${module.imageBg}`}>
                <IconComponent className={`w-3 h-3 ${module.iconColor}`} />
              </div>
              <div className="text-center">
                <div className="font-medium text-[10px] text-gray-700 dark:text-gray-300 mb-0.5 truncate w-full">{module.title}</div>
                <div className="text-[8px] text-gray-500 dark:text-gray-400 truncate w-full">{module.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default QuickActions
