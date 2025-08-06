import React from 'react'
import { AlertCircle, XCircle} from 'lucide-react';

// Reusing the LowStockAlertItem component and its props interface
// This component is copied directly here for self-containment as per instructions.
interface LowStockAlertItemProps {
  product: string;
  category: string;
  current: number;
  min: number;
  isOutOfStock?: boolean; // Added to differentiate styling for out-of-stock
}

const LowStockAlertItem: React.FC<LowStockAlertItemProps> = ({ product, category, current, min, isOutOfStock = false }) => {
  const icon = isOutOfStock ? <XCircle size={18} className="mr-3 text-red-600 flex-shrink-0 mt-1" /> : <AlertCircle size={18} className="mr-3 text-orange-500 flex-shrink-0 mt-1" />;
  const textColor = isOutOfStock ? "text-red-600 dark:text-red-400" : "text-zinc-900 dark:text-white";
  const subTextColor = "text-gray-600 dark:text-gray-300";
  const minMaxColor = "text-gray-500 dark:text-gray-400";

  return (
    <div className="flex items-center justify-between mb-4 last:mb-0">
      <div className="flex items-start">
        {icon}
        <div>
          <p className={`font-semibold ${textColor}`}>{product}</p>
          <p className={`text-sm ${subTextColor}`}>{category}</p>
          <p className={`text-xs ${minMaxColor}`}>Current: {current} Min: {min}</p>
        </div>
      </div>
      <button className="bg-[#b16a04] text-white py-1 px-3 rounded-lg shadow-md hover:bg-[#e5a004] transition-all duration-200 text-sm">
        Reorder
      </button>
    </div>
  );
};

export default LowStockAlertItem