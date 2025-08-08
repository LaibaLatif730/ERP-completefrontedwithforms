"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function QuickActions() {
  const [openDialog, setOpenDialog] = useState<null | "createOrder" | "addCustomer" | "generateReport" | "manageInventory">(null);

  // SVG icons (same as before)
  const PlusCircleIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-3.5 h-3.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={2} />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8m-4-4h8" />
    </svg>
  );

  const UserPlusIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-3.5 h-3.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 00-3-3.87" />
      <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth={2} />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 11h6m-3-3v6" />
    </svg>
  );

  const FileBarChartIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-3.5 h-3.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-6m4 6v-4m4 4v-2" />
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth={2} />
    </svg>
  );

  const BoxesIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-3.5 h-3.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 16V8a2 2 0 00-2-2h-4l-2-2H7a2 2 0 00-2 2v8a2 2 0 002 2h10a2 2 0 002-2z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16v2a2 2 0 002 2h10a2 2 0 002-2v-2" />
    </svg>
  );

  // Dialog components with form inputs

  function CreateOrderDialog() {
    if (openDialog !== "createOrder") return null;
    return (
      <Modal title="Create Order" onClose={() => setOpenDialog(null)}>
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setOpenDialog(null); }}>
          <input
            type="text"
            placeholder="Order ID"
            className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />
          <input
            type="text"
            placeholder="Product Name"
            className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />
          <input
            type="number"
            placeholder="Quantity"
            min={1}
            className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />
          <input
            type="text"
            placeholder="Address"
            className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />
          <button
            type="submit"
            className="w-full rounded bg-orange-500 px-4 py-2 text-white hover:bg-orange-600"
          >
            Submit
          </button>
        </form>
      </Modal>
    );
  }

  function AddCustomerDialog() {
    if (openDialog !== "addCustomer") return null;
    return (
      <Modal title="Add Customer" onClose={() => setOpenDialog(null)}>
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setOpenDialog(null); }}>
          <input
            type="text"
            placeholder="Customer Name"
            className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <button
            type="submit"
            className="w-full rounded bg-orange-500 px-4 py-2 text-white hover:bg-orange-600"
          >
            Submit
          </button>
        </form>
      </Modal>
    );
  }

  function GenerateReportDialog() {
    if (openDialog !== "generateReport") return null;
    return (
      <Modal title="Generate Report" onClose={() => setOpenDialog(null)}>
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setOpenDialog(null); }}>
          <input
            type="text"
            placeholder="Report Name"
            className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
          <input
            type="month"
            placeholder="Select Month"
            className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
          <button
            type="submit"
            className="w-full rounded bg-orange-500 px-4 py-2 text-white hover:bg-orange-600"
          >
            Generate
          </button>
        </form>
      </Modal>
    );
  }

  function ManageInventoryDialog() {
    if (openDialog !== "manageInventory") return null;
    return (
      <Modal title="Manage Inventory" onClose={() => setOpenDialog(null)}>
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setOpenDialog(null); }}>
          <input
            type="text"
            placeholder="Product SKU"
            className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
          <input
            type="number"
            placeholder="Stock Quantity"
            min={0}
            className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
          <button
            type="submit"
            className="w-full rounded bg-orange-500 px-4 py-2 text-white hover:bg-orange-600"
          >
            Update
          </button>
        </form>
      </Modal>
    );
  }

  function Modal({
    title,
    children,
    onClose,
  }: {
    title: string;
    children: React.ReactNode;
    onClose: () => void;
  }) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-transparent"
        onClick={onClose}
      >
        <div
          className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-md w-full shadow-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">{title}</h2>
          <div>{children}</div>
        </div>
      </div>
    );
  }

  const actions = [
    {
      label: "Create Order",
      icon: PlusCircleIcon,
      desc: "Add a new sales order",
      color: "text-orange-600 dark:text-orange-400",
      bgColor: "bg-orange-500/10 dark:bg-orange-500/20",
      onClick: () => setOpenDialog("createOrder"),
    },
    {
      label: "Add Customer",
      icon: UserPlusIcon,
      desc: "Register a new customer",
      color: "text-orange-600 dark:text-orange-400",
      bgColor: "bg-orange-500/10 dark:bg-orange-500/20",
      onClick: () => setOpenDialog("addCustomer"),
    },
    {
      label: "Generate Report",
      icon: FileBarChartIcon,
      desc: "Create business reports",
      color: "text-orange-600 dark:text-orange-400",
      bgColor: "bg-orange-500/10 dark:bg-orange-500/20",
      onClick: () => setOpenDialog("generateReport"),
    },
    {
      label: "Manage Inventory",
      icon: BoxesIcon,
      desc: "Update stock levels",
      color: "text-orange-600 dark:text-orange-400",
      bgColor: "bg-orange-500/10 dark:bg-orange-500/20",
      onClick: () => setOpenDialog("manageInventory"),
    },
  ];

  return (
    <>
      {/* Quick Actions Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="rounded-2xl shadow-md p-3 relative overflow-hidden group hover:shadow-lg transition-shadow duration-300 border border-orange-200/30 dark:border-orange-800/30"
      >
        {/* Glass effect */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-blue-500/5 dark:from-orange-500/10 dark:via-transparent dark:to-blue-500/10 rounded-2xl blur-xl animate-pulse-slow" />
          <div className="absolute inset-0 p-[1px] rounded-2xl bg-gradient-to-br from-orange-500/20 via-white/10 to-blue-500/20 dark:from-orange-500/20 dark:via-white/5 dark:to-blue-500/20 group-hover:from-orange-500/30 group-hover:to-blue-500/30 transition-all duration-500">
            <div className="absolute inset-0 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-2xl" />
          </div>
          <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.3),transparent_50%)] animate-pulse-slow" />
          </div>
        </div>

        {/* Header */}
        <div className="relative z-10 mb-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center">
              {PlusCircleIcon}
            </div>
            <div>
              <h2 className="text-xs font-semibold text-gray-800 dark:text-gray-200 group-hover:scale-[1.02] transition-transform duration-300">
                Quick Actions
              </h2>
              <p className="text-[10px] text-gray-600 dark:text-gray-400">Streamline your workflow</p>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 relative z-10">
          {actions.map(({ label, icon, desc, color, bgColor, onClick }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
              onClick={onClick}
              className="cursor-pointer rounded-xl p-2 bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 hover:shadow-md relative overflow-hidden group/item border border-gray-200/50 dark:border-gray-700/50"
            >
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-[-200%] group-hover/item:translate-x-[200%] transition-transform duration-1000 ease-out opacity-0 group-hover/item:opacity-100" />

              <div className="flex items-center gap-2 relative z-10">
                <div className={cn("w-6 h-6 rounded-lg flex items-center justify-center", bgColor)}>
                  <div className={color}>{icon}</div>
                </div>
                <div>
                  <p className="font-medium text-gray-800 dark:text-gray-200 text-[10px] group-hover/item:text-orange-600 dark:group-hover/item:text-orange-400 transition-colors duration-300">
                    {label}
                  </p>
                  <p className="text-[8px] text-gray-600 dark:text-gray-400">{desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Dialogs */}
      <CreateOrderDialog />
      <AddCustomerDialog />
      <GenerateReportDialog />
      <ManageInventoryDialog />
    </>
  );
}
