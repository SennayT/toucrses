"use client";
import React, { useState } from "react";
import { Prisma } from "@/app/generated/prisma/client";
import { CourseHeader } from "./CourseHeader";
import { CourseTabNavigation } from "./CourseTabNavigation";
import { CourseTabContent } from "./CourseTabContent";
import { RegistrationSidebar } from "./RegistrationSidebar";
import { CourseInformationSidebar } from "./CourseInformationSidebar";
import { SupportPolicySidebar } from "./SupportPolicySidebar";
import Link from "next/link";

interface Props {
  course: Prisma.CourseGetPayload<{ include: { category: true } }>;
}

export function CourseDetail({ course }: Props) {
  const [activeTab, setActiveTab] = useState("details");
  const [selectedDate, setSelectedDate] = useState("");
  const [participants, setParticipants] = useState(1);
  const [includeExam, setIncludeExam] = useState(false);
  const [includeVoucher, setIncludeVoucher] = useState(false);

  const basePrice = course.fee;
  const examPrice = 0;
  const voucherPrice = 0;

  const totalPrice =
    (basePrice +
      (includeExam ? examPrice : 0) +
      (includeVoucher ? voucherPrice : 0)) *
    participants;

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-600">
      {/* Breadcrumb */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-2 text-xs text-gray-500 flex items-center gap-2">
          <Link href="/">
            <span>Home</span>
          </Link>
          <span>/</span>
          <Link href={`/category/${course.category.id}`}>
            <span>{course.category.name}</span>
          </Link>
          <span>/</span>
          <span>{course.name}</span>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT CONTENT COLUMN */}
        <div className="lg:col-span-2">
          <CourseHeader
            courseName={course.name}
            courseDescription={course.description}
          />

          <CourseTabNavigation
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />

          <CourseTabContent
            activeTab={activeTab}
            topics={course.topics}
            courseInfo={course.courseInfo}
            jobRoles={course.jobRoles}
            trainers={course.trainers}
          />
        </div>

        {/* RIGHT SIDEBAR COLUMN */}
        <div className="lg:col-span-1 space-y-6">
          <RegistrationSidebar
            courseCode={course.courseCode}
            totalPrice={totalPrice}
            selectedDate={selectedDate}
            participants={participants}
            onDateChange={setSelectedDate}
            onParticipantsChange={setParticipants}
            onExamChange={setIncludeExam}
            onVoucherChange={setIncludeVoucher}
            examPrice={examPrice}
            voucherPrice={voucherPrice}
          />

          <CourseInformationSidebar />

          <SupportPolicySidebar />
        </div>
      </div>

      <footer className="bg-white border-t border-gray-200 py-8 mt-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-xs text-gray-500">
          <p>© 2025 Tertiary Courses Malaysia. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
