import React from 'react'
import {AlertCircle} from 'lucide-react';

// Interface for Low Stock Item (reused from ReorderAlertsPage)
interface LowStockItem {
  product: string;
  category: string;
  current: number;
  min: number;
}

// Low Stock Alert Item Component (reused from ReorderAlertsPage)
const LowStockAlertItem: React.FC<LowStockItem> = ({ product, category, current, min }) => {
  return (
    <div className="flex items-center justify-between mb-3 last:mb-0">
      <div className="flex items-start">
        <AlertCircle size={18} className="mr-3 text-orange-500 flex-shrink-0 mt-1" />
        <div>
          <p className="font-semibold text-zinc-900 dark:text-white">{product}</p>
          <p className="text-sm text-gray-600 dark:text-gray-300">{category}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">Current: {current} Min: {min}</p>
        </div>
      </div>
      <button className="bg-[#b16a04] text-white py-1 px-3 rounded-lg shadow-md hover:bg-[#e5a004] transition-all duration-200 text-sm">
        Reorder
      </button>
    </div>
  );
};

export default LowStockAlertItem