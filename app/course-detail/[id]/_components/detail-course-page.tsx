"use client";
import { StarRating } from "@/app/_components/StarRating";
import React, { useState, useEffect } from "react";
import { Prisma } from "@/app/generated/prisma/client";
import { SanitizedText } from "@/app/_components/SanitizedText";
import { CourseInfoTabs } from "./course-info-tab";
import { RegistrationForm } from "./RegistrationForm";

// --- Icon Definitions (Using simple SVG strings) ---
const icons = {
  // Navigation
  ChevronRight: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-chevron-right"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  ),
  // Feature Icons
  Clock: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-clock"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  Users: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-users"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  Award: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-award"
    >
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  ),
  CheckCircle: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-check-circle"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
  Star: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className="lucide lucide-star"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  SearchDollar: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-search-dollar"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
      <path d="M10.82 10.82A4 4 0 0 1 12 8" />
      <path d="M10.25 14.38a4 4 0 0 1-2.48-3.92V10h1.5C11.3 10 12 9.3 12 8.5V7c0-.7-.7-1.5-1.5-1.5S9 6.3 9 7.15" />
      <path d="M10 18h4" />
    </svg>
  ),
};

// Helper Component for Star Rating Display

// Custom styled Radio button

interface Props {
  courseData: Prisma.CourseGetPayload<{ include: null }>;
}

// --- Course Detail Page Component ---
export const CourseDetailPage = ({ courseData }: Props) => {
  return (
    <div className="lg:grid lg:grid-cols-3 lg:gap-10 xl:gap-14">
      {/* Column 1: Course Details */}
      <div className="lg:col-span-2 space-y-8">
        {/* Title and Summary */}
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100">
          <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-2">
            {courseData.name}
          </h1>
          <div className="flex items-center justify-between flex-wrap gap-4 mb-6 pt-2 border-t border-gray-100 mt-4">
            {/* <StarRating
                  rating={courseData.rating}
                  reviewCount={courseData.reviewCount}
                /> */}
            {/* <div className="flex space-x-4">
              {[].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center text-sm text-gray-600"
                >
                  {React.cloneElement(feature.icon, {
                    className: "w-4 h-4 text-blue-500 mr-1.5",
                  })}
                  <span>{feature.text}</span>
                </div>
              ))}
            </div> */}
          </div>

          {/* Main Image */}
          <div className="w-full aspect-video bg-gray-200 rounded-lg overflow-hidden relative mb-6">
            {/* <img
                  src={courseData.imageUrl}
                  alt={courseData.title}
                  className="w-full h-full object-cover"
                /> */}
            <div className="absolute top-0 left-0 p-3 bg-red-600 text-white text-xs font-semibold rounded-br-lg">
              BESTSELLER
            </div>
          </div>

          {/* Description */}
          <div className="space-y-4 text-gray-700 text-base">
            <SanitizedText text={courseData.description} />
          </div>
        </div>

        {/* What You'll Learn Section */}
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-5 border-b pb-3">
            What You'll Achieve
          </h2>
          <div>
            <SanitizedText text={courseData.courseInfo} />
          </div>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {courseData.whatYouLearn.map((item, index) => (
                  <div key={index} className="flex items-start">
                    {React.cloneElement(icons.CheckCircle, {
                      className:
                        "w-5 h-5 text-green-500 flex-shrink-0 mr-3 mt-1",
                    })}
                    <p className="text-gray-700 text-base">{item}</p>
                  </div>
                ))}
              </div> */}
        </div>

        {/* Certificate & Funding Section */}
        <div className="space-y-6">
          {/* Certificate Info Card */}
          <div className="p-6 bg-blue-50 rounded-xl border border-blue-200 flex items-start shadow-md">
            {React.cloneElement(icons.Award, {
              className: "w-8 h-8 text-blue-600 flex-shrink-0 mr-4 mt-1",
            })}
            <div>
              <h3 className="text-lg font-semibold text-blue-800">
                Professional Certificate
              </h3>
              {/* <p className="text-sm text-blue-700 mt-1">
                {courseData.c}
              </p> */}
            </div>
          </div>

          {/* Funding Info Card */}
        </div>
        <CourseInfoTabs courseData={courseData} />
      </div>

      {/* Column 2: Registration Form Card */}
      <div>
        <RegistrationForm />
      </div>
    </div>
  );
};
