"use client"
import ViewDetailsForm from "../forms/ViewDetailform";
import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { useState } from "react";
import { useRouter } from "next/navigation";

import { dashboardReports } from "@/lib/data";
import ReportCard from "@/components/reporting/reportcard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Pacifico } from "next/font/google";


const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });

// Dialog Components
const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 translate-x-[-50%] translate-y-[-50%] bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg",
        className
      )}
      {...props}
    >
      {children}
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)} {...props} />
);
DialogHeader.displayName = "DialogHeader";

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold leading-none", className)}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

// Main Component
export default function ReportCenterPage() {
  const [search, setSearch] = useState("");
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [dialogOpen, setDialogOpen] = useState(false);
  const [activeReportType, setActiveReportType] = useState<string | null>(null);

  const router = useRouter();

  // Mock role instead of using session
  const userRole = "admin"; // fallback/mock role
  const canSubmit = ["admin", "manager"].includes(userRole);

  const reportCategories = [
    { title: "HR", value: "25 Employees" },
    { title: "Finance", value: "$125,000" },
    { title: "Sales", value: "$85,000" },
    { title: "Profit", value: "$40,000" },
    { title: "Inventory", value: "320 Items" },
  ];

  const filteredReports = dashboardReports.filter((report) =>
    report.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleGenerate = (category: string) => {
    setActiveReportType(category);
    setDialogOpen(true);
  };

  const handleNavigate = (category: string) => {
    router.push(`/reports/${category.toLowerCase()}`);
  };

  return (
   <main className="p-2 md:p-4 bg-gray-50 dark:bg-black text-black dark:text-white min-h-screen text-xs">
      {/* 🔶 Top Nav Bar with Title */}
                  <div className="relative rounded-xl p-2 shadow-md mb-3 flex justify-between items-center overflow-hidden">
                    <div className="absolute inset-0 rounded-xl overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-orange-500/5 dark:from-orange-500/10 dark:via-transparent dark:to-orange-500/10 rounded-xl blur-xl animate-pulse" />
                      <div className="absolute inset-0 p-[1px] rounded-xl bg-gradient-to-br from-orange-500/30 via-white/20 to-blue-500/30 dark:from-orange-500/20 dark:via-white/10 dark:to-blue-500/20">
                        <div className="absolute inset-0 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-xl" />
                      </div>
                    </div>
            
                    <div className="relative z-10 group">
                      <h1
                        className={cn(
                          "text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 dark:from-orange-400 dark:via-orange-300 dark:to-orange-400",
                          pacifico.className
                        )}
                      >
                        Reporting Dashboard
                      </h1>
                    </div>
            
                    <div className="relative bg-white/50 dark:bg-gray-800/50 text-black dark:text-white font-mono px-2 py-1 rounded-xl text-xs z-10 flex items-center space-x-1">

                   <span>Live Dashboard</span>
                    </div>
            
                  </div>

      {/* Report Actions */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 mb-4">
        {reportCategories.map((item) => (
          <Card key={item.title} className="shadow-sm border text-center p-2">
            <CardHeader className="p-2">
              <CardTitle className="text-[11px] text-gray-500">
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-1 flex flex-col gap-2 items-center">
              <p className="text-sm font-semibold text-gray-700">{item.value}</p>
                <Button
                  className="text-[10px] px-2 py-1 bg-orange-500 hover:bg-orange-600 text-white"
                  onClick={() => handleNavigate(item.title)}
                >
                  View Details
                </Button>
                <Button
                  className="text-[10px] px-2 py-1 bg-orange-500 hover:bg-orange-600 text-white"
                  onClick={() => handleGenerate(item.title)}
                >
                  Generate Report
                </Button>

            </CardContent>
          </Card>
        ))}
      </div>

      {/* Calendar + Reports */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-[#1a1a1a] text-black dark:text-white p-3 rounded-md shadow-sm border border-orange-100 dark:border-gray-700">
          <h2 className="rounded-md border text-xs [&_.rdp-day_selected]:bg-orange-500 [&_.rdp-day_selected]:text-white">
            Filter by Date
          </h2>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border text-xs [&_.rdp-day_selected]:bg-orange-500 [&_.rdp-day_selected]:text-white"
          />
        </div>

        <div className="md:col-span-2 grid gap-3">
          <h2 className="text-[11px] font-semibold text-gray-600">
            Available Reports
          </h2>
          {filteredReports.length > 0 ? (
            filteredReports.map((report, index) => (
              <ReportCard
                key={index}
                title={report.title}
                value=""
                change=""
                color="blue"
                icon="📄"
              />
            ))
          ) : (
            <p className="text-xs text-gray-400">
              No reports found. Try a different search.
            </p>
          )}
        </div>
      </div>

      {/* Report Generator Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="text-xs max-w-md">
          <DialogHeader>
            <DialogTitle className="text-sm font-semibold mb-1">
              Generate {activeReportType} Report
            </DialogTitle>
          </DialogHeader>
          <form className="space-y-2">
            <Input placeholder="Report Title" className="text-xs" />
            <Input
              placeholder="Prepared by"
              className="text-xs"
              defaultValue="System User"
            />
            <textarea
              placeholder={`Enter details for ${activeReportType} report...`}
              rows={4}
              className="w-full p-2 border rounded-md text-xs"
            />
            <Button type="submit" className="text-xs" disabled={!canSubmit}>
              {canSubmit
                ? "Submit Report"
                : "Restricted (Insufficient Role)"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </main>
  );
}