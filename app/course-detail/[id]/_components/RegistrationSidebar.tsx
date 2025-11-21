"use client";
import React from "react";
import { CheckCircle, ChevronDown } from "lucide-react";

interface SidebarItemProps {
  label: string;
  children: React.ReactNode;
  required?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  children,
  required,
}) => (
  <div className="mb-4">
    <label className="block text-sm font-bold text-gray-700 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    {children}
  </div>
);

interface RegistrationSidebarProps {
  courseCode: string;
  totalPrice: number;
  selectedDate: string;
  participants: number;
  onDateChange: (date: string) => void;
  onParticipantsChange: (count: number) => void;
  onExamChange: (include: boolean) => void;
  onVoucherChange: (include: boolean) => void;
  examPrice: number;
  voucherPrice: number;
}

const dates = [
  "1/2/9/16/23 Nov 2025 (Sat/Sun)",
  "17-21 Nov 2025 (Mon-Fri)",
  "6/7/14/21/28 Dec 2025 (Sat/Sun)",
  "22-26 Dec 2025 (Mon-Fri)",
  "3/4/11/18/25 Jan 2026 (Sat/Sun)",
];

export function RegistrationSidebar({
  courseCode,
  totalPrice,
  selectedDate,
  participants,
  onDateChange,
  onParticipantsChange,
  onExamChange,
  onVoucherChange,
  examPrice,
  voucherPrice,
}: RegistrationSidebarProps) {
  return (
    <div className="bg-white p-5 border border-gray-200 shadow-md rounded-sm">
      <div className="text-sm text-gray-500 mb-4 flex justify-between border-b border-gray-100 pb-2">
        <span>
          Course Code:{" "}
          <span className="font-mono text-gray-700">{courseCode}</span>
        </span>
        <span className="text-green-600 font-bold text-xs flex items-center">
          <CheckCircle size={12} className="mr-1" /> HRD Corp Claimable
        </span>
      </div>

      <div className="text-3xl font-bold text-gray-800 mb-6">
        MYR{totalPrice.toLocaleString()}.00
      </div>

      {/* Form Controls */}
      <div className="space-y-4">
        <SidebarItem label="Include Exam Voucher">
          <select
            className="w-full border border-gray-300 rounded p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            onChange={(e) => onExamChange(e.target.value === "yes")}
          >
            <option value="no">No</option>
            <option value="yes">Yes (+MYR{examPrice.toLocaleString()})</option>
          </select>
        </SidebarItem>

        <SidebarItem label="CompTIA Project+ Exam Voucher">
          <select
            className="w-full border border-gray-300 rounded p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            onChange={(e) => onVoucherChange(e.target.value === "yes")}
          >
            <option value="no">No</option>
            <option value="yes">
              Yes (+MYR{voucherPrice.toLocaleString()})
            </option>
          </select>
        </SidebarItem>

        <SidebarItem label="Training Mode" required>
          <select className="w-full border border-gray-300 rounded p-2 text-sm bg-white">
            <option>Physical Classroom Training</option>
            <option>Synchronised Teaching using ZOOM</option>
            <option>Corporate Training at Company Premise</option>
          </select>
        </SidebarItem>

        <SidebarItem label="Course Date" required>
          <div className="relative">
            <select
              className="w-full border border-gray-300 rounded p-2 text-sm bg-white appearance-none pr-8"
              value={selectedDate}
              onChange={(e) => onDateChange(e.target.value)}
            >
              <option value="">-- Please Select --</option>
              {dates.map((d, i) => (
                <option key={i} value={d}>
                  {d}
                </option>
              ))}
            </select>
            <ChevronDown
              size={16}
              className="absolute right-2 top-3 text-gray-400 pointer-events-none"
            />
          </div>
        </SidebarItem>

        <SidebarItem label="Course Time" required>
          <div className="w-full border border-gray-300 rounded p-2 text-sm bg-gray-50 text-gray-500 cursor-not-allowed">
            9:30am - 5:30pm
          </div>
        </SidebarItem>

        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700 mb-2">
            No. of Participants
          </label>
          <div className="flex flex-wrap gap-1">
            {[1, 2, 3, 4, 5].map((num) => (
              <button
                key={num}
                onClick={() => onParticipantsChange(num)}
                className={`w-8 h-8 flex items-center justify-center text-sm border rounded ${
                  participants === num
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-600 border-gray-300 hover:border-blue-400"
                }`}
              >
                {num}
              </button>
            ))}
          </div>
        </div>

        <SidebarItem label="Sponsorship">
          <div className="flex gap-4">
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="radio"
                name="sponsorship"
                defaultChecked
                className="text-blue-600 focus:ring-blue-500"
              />
              Self-Sponsored
            </label>
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="radio"
                name="sponsorship"
                className="text-blue-600 focus:ring-blue-500"
              />
              Employer-Sponsored
            </label>
          </div>
        </SidebarItem>

        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded shadow transition-colors uppercase text-sm tracking-wide">
          Register Your Interest
        </button>

        <div className="text-center text-xs text-gray-400 pt-2">
          * Required Fields
        </div>
      </div>
    </div>
  );
}
