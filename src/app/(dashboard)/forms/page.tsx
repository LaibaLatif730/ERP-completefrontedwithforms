"use client";

import React, { useState } from "react";
import CreateOrderForm from "@/components/forms/createOrderForm";
import AddCustomerForm from "@/components/forms/addcustomerform"
import GenerateReportForm from "@/components/forms/generateReportForm";
import ManageInventoryForm from "@/components/forms/manageInventoryForm";

const buttonConfig = [
  { label: "Create Order", formKey: "order" },
  { label: "Add Customer", formKey: "customer" },
  { label: "Generate Report", formKey: "report" },
  { label: "Manage", formKey: "manage" },
];

export default function FormsPage() {
  const [selectedForm, setSelectedForm] = useState<string | null>(null);

  const renderForm = () => {
    switch (selectedForm) {
      case "order":
        return <CreateOrderForm />;
      case "customer":
        return <AddCustomerForm />;
      case "report":
        return <GenerateReportForm />;
      case "manage":
        return <ManageInventoryForm/>;
      default:
        return <p className="text-gray-500">Select a form to display.</p>;
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">ERP Forms</h1>
      <div className="flex flex-wrap gap-4 mb-8">
        {buttonConfig.map((btn) => (
          <button
            key={btn.formKey}
            onClick={() => setSelectedForm(btn.formKey)}
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            {btn.label}
          </button>
        ))}
      </div>

      <div className="border-t pt-6">
        {renderForm()}
      </div>
    </div>
  );
}
