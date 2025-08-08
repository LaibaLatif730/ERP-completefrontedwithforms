"use client";

import { Download } from "lucide-react";
import { CSVLink } from "react-csv";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { Report } from "@/lib/type";
import { format } from "date-fns";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

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
    <div className="flex gap-4 mt-4">

      {/* -------- PDF Export Dialog -------- */}
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">
            <Download size={16} className="mr-2" />
            Export PDF
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Export PDF Report</DialogTitle>
            <DialogDescription>
              Confirm export of <strong>{activeTab}</strong> report as PDF?
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <Button
              className="bg-orange-500 hover:bg-orange-600 text-white"
              onClick={handlePDFDownload}
            >
              Confirm & Download PDF
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* -------- CSV Export Dialog -------- */}
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">
            <Download size={16} className="mr-2" />
            Export CSV
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Export CSV Report</DialogTitle>
            <DialogDescription>
              Confirm export of <strong>{activeTab}</strong> report as CSV?
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <CSVLink
              data={filteredData}
              headers={csvHeaders}
              filename={`report-${fileSuffix}.csv`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md 
                         bg-orange-500 text-white font-medium 
                         hover:bg-orange-600 transition"
            >
              Confirm & Download CSV
            </CSVLink>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
