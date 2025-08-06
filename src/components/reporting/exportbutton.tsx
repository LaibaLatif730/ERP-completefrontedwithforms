"use client";

import { Download } from "lucide-react";
import { CSVLink } from "react-csv";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { Report } from "@/lib/type";
import { format } from "date-fns";

interface ExportButtonsProps {
  data: Record<string, Report[]>;
  year: string;
  month: string;
  activeTab: string;
}

export default function ExportButtons({
  data,
  year,
  month,
  activeTab,
}: ExportButtonsProps) {
  const currentData = data[activeTab] || [];

  const filteredData = currentData.filter((item) => {
    const date = new Date(item.generated);
    const itemYear = date.getFullYear().toString();
    const itemMonth = String(date.getMonth() + 1).padStart(2, "0");
    return (!year || itemYear === year) && (!month || itemMonth === month);
  });

  const fileSuffix = `${activeTab}-${year || "all"}-${month || "all"}`;

  const handlePDFDownload = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text(`📊 ${activeTab} Report`, 14, 20);

    autoTable(doc, {
      startY: 30,
      head: [["Type", "Size", "Category", "Generated"]],
      body: filteredData.map((item) => [
        item.type,
        item.size,
        item.category,
        format(new Date(item.generated), "yyyy-MM-dd"),
      ]),
      theme: "striped",
      headStyles: { fillColor: [255, 180, 100] },
    });

    doc.save(`report-${fileSuffix}.pdf`);
  };

  const csvHeaders = [
    { label: "Type", key: "type" },
    { label: "Size", key: "size" },
    { label: "Category", key: "category" },
    { label: "Generated", key: "generated" },
  ];

  return (
    <div className="flex flex-wrap gap-2 mt-2 text-sm">
      <button
        onClick={handlePDFDownload}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md 
                   bg-orange-400 text-white font-medium shadow-sm 
                   hover:bg-orange-500 dark:bg-orange-600 dark:hover:bg-orange-700 
                   transition"
        title={`Export ${activeTab} as PDF`}
      >
        <Download size={16} />
        Export PDF
      </button>

      <CSVLink
        data={filteredData}
        headers={csvHeaders}
        filename={`report-${fileSuffix}.csv`}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md 
                   bg-orange-400 text-white font-medium shadow-sm 
                   hover:bg-orange-500 dark:bg-orange-600 dark:hover:bg-orange-700 
                   transition"
        title={`Export ${activeTab} as CSV`}
      >
        <Download size={16} />
        Export CSV
      </CSVLink>
    </div>
  );
}
