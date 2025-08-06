import React from "react";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type ReportDetails = {
  department: "HR" | "Finance" | "Sales" | "Inventory";
  title: string;
  value: string;
  summary?: string;
};

type ViewDetailsFormProps = {
  data: ReportDetails;
  onClose: () => void;
};

const ViewDetailsForm: React.FC<ViewDetailsFormProps> = ({ data, onClose }) => {
  // Dynamic content based on department
  const getDepartmentDescription = () => {
    switch (data.department) {
      case "HR":
        return "This HR report summarizes employee engagement, attendance, and recent hires.";
      case "Finance":
        return "This finance report shows budget utilization, cash flow, and expenses.";
      case "Sales":
        return "This sales report covers monthly revenue, order volume, and lead conversion.";
      case "Inventory":
        return "This inventory report details stock levels, incoming supplies, and critical shortages.";
      default:
        return "Detailed department report breakdown.";
    }
  };

  return (
    <div className="space-y-3 text-xs">
      <DialogHeader>
        <DialogTitle className="text-sm font-semibold mb-1">
          {data.title} Report - {data.department}
        </DialogTitle>
      </DialogHeader>

      <div className="space-y-2">
        <div>
          <p className="font-medium">Department:</p>
          <p>{data.department}</p>
        </div>
        <div>
          <p className="font-medium">Title:</p>
          <p>{data.title}</p>
        </div>
        <div>
          <p className="font-medium">Value:</p>
          <p>{data.value}</p>
        </div>
        <div>
          <p className="font-medium">Description:</p>
          <p className="text-gray-600">{data.summary || getDepartmentDescription()}</p>
        </div>
      </div>

      <div className="flex justify-end pt-2">
        <Button onClick={onClose} className="text-xs bg-orange-500 hover:bg-orange-600 text-white">
          Close
        </Button>
      </div>
    </div>
  );
};

export default ViewDetailsForm;
