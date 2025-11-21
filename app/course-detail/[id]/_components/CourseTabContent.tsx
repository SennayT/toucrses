"use client";
import React from "react";
import { Star } from "lucide-react";
import { SanitizedText } from "@/app/_components/SanitizedText";

interface CourseTabContentProps {
  activeTab: string;
  topics: string;
  courseInfo: string;
  jobRoles: string;
  trainers: string;
}

export function CourseTabContent({
  activeTab,
  topics,
  courseInfo,
  jobRoles,
  trainers,
}: CourseTabContentProps) {
  return (
    <div className="bg-white p-6 border border-gray-200 rounded-sm shadow-sm min-h-[400px]">
      {activeTab === "details" && (
        <div className="animate-fadeIn">
          <SanitizedText text={topics} />
        </div>
      )}

      {activeTab === "info" && (
        <div className="animate-fadeIn text-sm space-y-4">
          <SanitizedText text={courseInfo} />
        </div>
      )}

      {activeTab === "roles" && (
        <div className="animate-fadeIn">
          <h3 className="font-bold text-lg text-gray-800 mb-4">
            Relevant Job Roles
          </h3>
          <SanitizedText text={jobRoles} />
        </div>
      )}

      {activeTab === "trainers" && (
        <div className="animate-fadeIn text-sm space-y-6">
          <SanitizedText text={trainers} />
        </div>
      )}

      {activeTab === "reviews" && (
        <div className="animate-fadeIn">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-lg text-gray-800">
              Customer Reviews
            </h3>
            <button className="text-blue-600 text-sm font-medium hover:underline">
              Write a Review
            </button>
          </div>

          <div className="space-y-6">
            {[1, 2].map((review) => (
              <div key={review} className="border-b border-gray-100 pb-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex text-yellow-400 text-xs">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={12} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-gray-700">
                    Recommended
                  </span>
                </div>
                <p className="text-sm text-gray-600 italic mb-2">
                  "Course can be conducted in several days since one full day is
                  so packed."
                </p>
                <div className="text-xs text-gray-400">
                  Review by Course Participant/Trainee • Posted on 09/12/2022
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
