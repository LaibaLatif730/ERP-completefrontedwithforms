import React from 'react'
// Interface for InventoryCard props (reused and adapted from Stock Inventory Page)
interface InventoryCardProps {
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

// Inventory Card Component (reused for consistent styling across stock pages)
const SourceInventoryCard: React.FC<InventoryCardProps> = ({ title, value, trend, icon: Icon, iconBgColor, iconColor, situation, status }) => {
  return (
    <div className="bg-gradient-to-b from-zinc-100 to-white dark:from-orange-500/20 dark:via-white/5 dark:to-blue-500/20 rounded-xl shadow-lg p-5 group flex items-center justify-between border border-gray-200 dark:border-zinc-900 transition-all duration-200 hover:scale-[1.02] cursor-pointer">
      <div>
        <p className="text-gray-600 dark:text-zinc-200 text-sm">{title}</p>
        <p className={`text-lg font-bold text-zinc-900 dark:text-white`}>{value}</p>
        <p className="text-gray-600 dark:text-gray-300">{situation}</p>
        {trend && (
          <p className={`text-xs font-semibold ${trend.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
            {trend}
          </p>
        )}
        <p className={`font-bold ${status === "Healthy" ? "text-green-400" : status === "Critical" ? "text-red-400" : "text-orange-400"}`}>{status}</p>
      </div>
      <div className={`p-3 rounded-2xl ${iconBgColor}`}>
        <Icon size={18} className={iconColor} />
      </div>
    </div>
  );
};

export default SourceInventoryCard