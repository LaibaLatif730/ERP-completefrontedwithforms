import React from "react";
import { AlertCircle, XCircle } from "lucide-react";

interface LowStockAlertItemProps {
  product: string;
  category: string;
  current: number;
  min: number;
  isOutOfStock?: boolean;
}

const LowStockAlertItem: React.FC<LowStockAlertItemProps> = ({
  product,
  category,
  current,
  min,
  isOutOfStock = false,
}) => {
  const icon = isOutOfStock ? (
    <XCircle
      size={18}
      className="mr-3 text-red-600 dark:text-red-400 flex-shrink-0 mt-1"
    />
  ) : (
    <AlertCircle
      size={18}
      className="mr-3 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-1"
    />
  );

  return (
    <div className="flex items-center justify-between mb-4 last:mb-0 p-4 rounded-md bg-orange-50 dark:bg-orange-950 transition-colors duration-300">
      <div className="flex items-start">
        {icon}
        <div>
          <p className="font-semibold text-zinc-900 dark:text-zinc-100">
            {product}
          </p>
          <p className="text-sm text-gray-600 dark:text-zinc-400">{category}</p>
          <p className="text-xs text-gray-500 dark:text-zinc-500">
            Current: {current} Min: {min}
          </p>
        </div>
      </div>
      <button className="bg-orange-600 hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600 text-white py-1 px-3 rounded-md transition-all duration-200 text-sm">
        Reorder
      </button>
    </div>
  );
};

export default LowStockAlertItem;
