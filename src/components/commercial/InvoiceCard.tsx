import React from 'react'

// Interface for InvoiceCard props
interface InvoiceCardProps {
  title: string;
  value: string;
  situation: string;
  status: string;
  icon: React.ElementType;
  iconBgColor: string;
  iconColor: string;
}

const InvoiceCard: React.FC<InvoiceCardProps> = ({
  title,
  value,
  icon: Icon,
  iconBgColor,
  iconColor,
  situation,
  status
}) => {
  return (
    <div className="bg-gradient-to-b from-zinc-100 to-white dark:from-orange-500/20 dark:via-white/5 dark:to-blue-500/20 
      rounded-xl shadow-md p-3 group flex items-center justify-between border border-gray-200 dark:border-zinc-900 
      transition-all duration-200 hover:border-orange-500 cursor-pointer text-sm">
      
      <div>
        <p className="text-gray-600 dark:text-zinc-200">{title}</p>
        <p className="text-xl font-bold text-zinc-900 dark:text-white">{value}</p>
        <p className="text-gray-600 dark:text-gray-300">{situation}</p>
        <p className={`font-bold ${
          status === "Healthy" ? "text-green-400" :
          status === "Critical" ? "text-red-400" :
          "text-orange-400"
        }`}>{status}</p>
      </div>

      <div className={`p-2 rounded-2xl ${iconBgColor}`}>
        <Icon size={22} className={iconColor} />
      </div>
    </div>
  );
};

export default InvoiceCard;
