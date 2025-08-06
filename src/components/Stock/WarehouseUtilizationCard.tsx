import React from "react";
import { MapPin } from "lucide-react";

interface WarehouseUtilizationCardProps {
  location: string;
  current: number;
  capacity: number;
}

const WarehouseUtilizationCard: React.FC<WarehouseUtilizationCardProps> = ({
  location,
  current,
  capacity,
}) => {
  const utilization = (current / capacity) * 100;
  const progressBarWidth = `${utilization}%`;

  return (
    <div className="mb-4 last:mb-0">
      <div className="flex items-center text-zinc-900 dark:text-zinc-100 mb-1">
        <MapPin size={16} className="mr-2 text-zinc-600 dark:text-zinc-400" />
        <span className="font-semibold">{location}</span>
        <span className="ml-auto text-sm text-zinc-600 dark:text-zinc-400">
          {current}/{capacity}
        </span>
      </div>

      <div className="w-full bg-zinc-200 text-gray-900 rounded-full h-2.5">
        <div
          className="h-2.5 rounded-full bg-orange-500 dark:bg-orange-400 transition-all duration-300 ease-in-out"
          style={{ width: progressBarWidth }}
        />
      </div>

      <p className="text-right text-sm font-medium mt-1 text-zinc-600 dark:text-zinc-400">
        Utilization: {utilization.toFixed(0)}%
      </p>
    </div>
  );
};

export default WarehouseUtilizationCard;
