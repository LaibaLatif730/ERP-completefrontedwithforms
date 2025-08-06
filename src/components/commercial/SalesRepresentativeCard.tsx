import React from 'react'
import Image from 'next/image'
import { Mail, Phone, CheckCircle, XCircle, Clock} from 'lucide-react';
interface SalesRepresentativeCardProps {
  id: number;
  name: string;
  status: 'active' | 'inactive' | 'on leave'; // Explicitly define possible string literal values
  email: string;
  phone: string;
  totalSales: string;
  avatarUrl?: string; // Optional prop
}

const SalesRepresentativeCard = ({
  name,
  status,
  email,
  phone,
  totalSales,
  avatarUrl,
}: SalesRepresentativeCardProps) => {
  const avatarInitial = name ? name.charAt(0).toUpperCase() : '';

  // Determine status color and icon
  let statusColor = 'text-gray-500';
  let statusIcon = null;
  switch (status) {
    case 'active':
      statusColor = 'text-green-500';
      statusIcon = <CheckCircle size={10} className="mr-1" />;
      break;
    case 'inactive':
      statusColor = 'text-red-500';
      statusIcon = <XCircle size={10} className="mr-1" />;
      break;
    case 'on leave':
      statusColor = 'text-yellow-500';
      statusIcon = <Clock size={10} className="mr-1" />;
      break;
    default:
      break;
  }

  return (
    <div className="relative p-2 rounded-xl shadow-sm overflow-hidden group hover:shadow-md transition-all duration-300">
      <div className="absolute inset-0 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-orange-500/5 dark:from-orange-500/10 dark:via-transparent dark:to-orange-500/10 rounded-xl blur-xl animate-pulse" />
        <div className="absolute inset-0 p-[1px] rounded-xl bg-gradient-to-br from-orange-500/20 via-white/10 to-blue-500/20 dark:from-orange-500/20 dark:via-white/5 dark:to-blue-500/20">
          <div className="absolute inset-0 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-xl" />
        </div>
      </div>

      <div className="relative z-10 p-2">
        {/* Header with Avatar and Name */}
        <div className="flex items-center gap-2 mb-2">
          {avatarUrl ? (
            <Image src={avatarUrl} alt={name} width={24} height={24} className="w-6 h-6 rounded-full object-cover" />
          ) : (
            <div className="w-6 h-6 bg-[#F5793B]/20 rounded-full flex items-center justify-center">
              <span className="text-[#F5793B] font-bold text-xs">{avatarInitial}</span>
            </div>
          )}
          <div className="flex-1 min-w-0">
            <h3 className="text-gray-900 dark:text-white font-medium text-xs truncate">{name}</h3>
            <div className={`text-[10px] capitalize flex items-center ${statusColor}`}>
              {statusIcon}
              {status}
            </div>
          </div>
        </div>

        {/* Contact Info - Compact */}
        <div className="mb-2 space-y-1">
          <p className="text-gray-600 dark:text-gray-400 text-[9px] flex items-center truncate">
            <Mail size={10} className="mr-1 flex-shrink-0" />
            <span className="truncate">{email}</span>
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-[9px] flex items-center">
            <Phone size={10} className="mr-1 flex-shrink-0" />
            {phone}
          </p>
        </div>

        {/* Total Sales - Compact */}
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400 text-[9px] mb-0.5">Total Sales</p>
          <p className="text-[#F5793B] text-xs font-bold">{totalSales}</p>
          {status === 'active' && (
            <span className="inline-block mt-1 text-green-600 text-[8px] font-medium px-1.5 py-0.5 bg-green-100 dark:bg-green-900/30 rounded-full">
              Active
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default SalesRepresentativeCard
